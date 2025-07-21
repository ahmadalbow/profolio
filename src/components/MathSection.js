import React from "react";
import "./MathSection.css";
import TextAnimation from "./TextAnimation";
/**
 * Math section matching the provided mock‑up.
 *
 * ‑ Built with Bootstrap 5 utilities.
 * ‑ The central illustration is a *single* image located at `/img/math.svg` (or .png).
 */
export default function MathSection() {
  return (
    <section className="math-section container py-5 text-center">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <TextAnimation
        text="Math"
        className="display-4 text-center mb-5 sec-title"
        stagger={0.05}
        direction="bottom"
      ></TextAnimation>

      {/* ── Quote ─────────────────────────────────────────────────── */}
      <figure className="mx-auto" style={{ maxWidth: "38rem" }}>
        <blockquote className="blockquote fst-italic text-muted mb-3">
          “I looked at my mathematical problems the same way
          Leonardo&nbsp;da&nbsp;Vinci looked at his Mona Lisa.”
        </blockquote>
        <figcaption className="blockquote-footer mb-0 fw-semibold ahmad-qoute">
          Ahmad Albow
        </figcaption>
      </figure>

      {/* ── Illustration ──────────────────────────────────────────── */}
      <img
        src="/img/math.jpg"
        alt="Colourful integral, sigma, and infinity symbols"
        className="math-illustration mt-5 img-fluid"
      />

      {/* ── Description ───────────────────────────────────────────── */}
      <p className=" " style={{ maxWidth: "48rem" }}></p>
      <TextAnimation
        mode="words"
        text=" I see math as an art. I love creating short, beautiful integrals and
        series that are almost impossible to solve. I’ve published over 100 very
        advanced problems in international math magazines like RMM, and 90% of
        them remain unsolved by anyone else."
        className="mx-auto math-text"
        stagger={0.015}
        duration={0.7}
      ></TextAnimation>
    </section>
  );
}
