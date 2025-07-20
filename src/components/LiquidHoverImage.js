import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import "./LiquidHoverImage.css";

/**
 * LiquidHoverImage – grayscale → colour with a 3‑second liquid wipe.
 * • Idle: sharp grayscale, NO animation.
 * • Hover‑in: 3 s colourful liquid reveal, then freeze on colour.
 * • Hover‑out: reverse wipe back to grayscale, then freeze.
 * Works with SVG / PNG / JPG of ANY size (uses intrinsic SVG w/h if available).
 */
const LiquidHoverImage = ({
  bwSrc,
  colorSrc,
  width,
  height = null,
  duration = 3,
  className = "",
}) => {
  const containerRef = useRef();
  const rendererRef = useRef();
  const frameIdRef = useRef();
  const animatingRef = useRef(false);

  /*───────────────────────────  Shaders  ───────────────────────────*/
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    precision highp float;

    varying vec2 vUv;
    uniform sampler2D u_bw;
    uniform sampler2D u_color;
    uniform float     u_time;
    uniform float     u_progress;   // 0 ▸ gray, 1 ▸ colour

    // Simplex noise 3D (Stefan Gustavson – public‑domain, minified)
    vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
    vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
    vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);} 
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
    float snoise(vec3 v){
      const vec2  C = vec2(1.0/6.0, 1.0/3.0);
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      i = mod289(i);
      vec4 p = permute(permute(permute(
                 i.z + vec4(0.0, i1.z, i2.z, 1.0))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0))
               + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 1.0/7.0;
      vec3  ns = D.wyz * n_ - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ * ns.x + ns.yyyy;
      vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 g0 = vec3(a0.xy, h.x);
      vec3 g1 = vec3(a0.zw, h.y);
      vec3 g2 = vec3(a1.xy, h.z);
      vec3 g3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(g0,g0), dot(g1,g1), dot(g2,g2), dot(g3,g3)));
      g0 *= norm.x; g1 *= norm.y; g2 *= norm.z; g3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x0-i1+C.xxx,x0-i1+C.xxx), dot(x0-i2+2.0*C.xxx,x0-i2+2.0*C.xxx), dot(x0-1.0+3.0*C.xxx,x0-1.0+3.0*C.xxx)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(g0,x0), dot(g1,x0-i1+C.xxx), dot(g2,x0-i2+2.0*C.xxx), dot(g3,x0-1.0+3.0*C.xxx)));
    }

    void main(){
      // Noise value in [-0.5,0.5]
      float n  = snoise(vec3(vUv*3.0, u_time*0.25))*0.5+0.5;
      // Phase gives 0 at extremes, 1 at mid‑transition
      float phase = u_progress * (1.0 - u_progress) * 4.0; // 0‑>1‑>0 bell curve
      // Displace UV only while animating (phase>0)
      vec2  uv   = vUv + (n-0.5) * 0.15 * phase;

      vec4 gray  = texture2D(u_bw,    uv);
      vec4 color = texture2D(u_color, uv);

      // Mix with wavy edge – noise modulated by phase so idle shows clean image
      float mixVal = clamp(u_progress + (n-0.5)*phase, 0.0, 1.0);
      gl_FragColor = mix(gray, color, mixVal);
    }
  `;

  /*────────────────────────  Effect setup  ────────────────────────*/
  useEffect(() => {
    if (!bwSrc || !colorSrc || !width) return;

    const container = containerRef.current;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera();
    const loader = new THREE.TextureLoader();

    const getDims = (img) => {
      const w = img.naturalWidth || img.width || 1;
      const h = img.naturalHeight || img.height || 1;
      return { w, h };
    };

    let uniforms, mesh, clock;

    const startRenderLoop = () => {
      if (animatingRef.current) return;
      animatingRef.current = true;
      clock = new THREE.Clock();
      const loop = () => {
        if (!animatingRef.current) return;
        uniforms.u_time.value += clock.getDelta();
        renderer.render(scene, camera);
        frameIdRef.current = requestAnimationFrame(loop);
      };
      loop();
    };

    const stopRenderLoop = () => {
      animatingRef.current = false;
      cancelAnimationFrame(frameIdRef.current);
      // final render to ensure crisp final state
      renderer.render(scene, camera);
    };

    // Load textures
    loader.load(bwSrc, (bwTex) => {
      loader.load(colorSrc, (colTex) => {
        // Improve sharpness
        [bwTex, colTex].forEach((t) => {
          t.minFilter = THREE.LinearFilter;
          t.magFilter = THREE.LinearFilter;
          t.anisotropy = renderer.capabilities.getMaxAnisotropy();
          t.generateMipmaps = false;
        });

        const { w: texW, h: texH } = getDims(bwTex.image);
        const ratio = texW / texH;
        const planeW = width;
        const planeH = height ?? planeW / (ratio || 1);

        renderer.setSize(planeW, planeH);
        Object.assign(container.style, {
          width: `${planeW}px`,
          height: `${planeH}px`,
        });

        camera.left = -planeW / 2;
        camera.right = planeW / 2;
        camera.top = planeH / 2;
        camera.bottom = -planeH / 2;
        camera.near = 0.1;
        camera.far = 10;
        camera.position.z = 1;
        camera.updateProjectionMatrix();

        uniforms = {
          u_bw: { value: bwTex },
          u_color: { value: colTex },
          u_time: { value: 0 },
          u_progress: { value: 0 },
        };

        const material = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms,
        });
        const geometry = new THREE.PlaneGeometry(planeW, planeH);
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const onEnter = () => {
          startRenderLoop();
          gsap.to(uniforms.u_progress, {
            value: 1,
            duration,
            ease: "power2.out",
            onComplete: stopRenderLoop,
          });
        };

        const onLeave = () => {
          startRenderLoop();
          gsap.to(uniforms.u_progress, {
            value: 0,
            duration,
            ease: "power2.out",
            onComplete: stopRenderLoop,
          });
        };

        container.addEventListener("mouseenter", onEnter);
        container.addEventListener("mouseleave", onLeave);

        // Initial render (grayscale)
        renderer.render(scene, camera);

        // Cleanup on unmount
        return () => {
          container.removeEventListener("mouseenter", onEnter);
          container.removeEventListener("mouseleave", onLeave);
          stopRenderLoop();
          geometry.dispose();
          material.dispose();
          renderer.dispose();
          if (renderer.domElement.parentNode === container) {
            container.removeChild(renderer.domElement);
          }
        };
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bwSrc, colorSrc, width, height, duration]);

  return (
    <div
      ref={containerRef}
      className={"test"}
      style={{ lineHeight: 0, height: 500 }}
    />
  );
};

export default LiquidHoverImage;
