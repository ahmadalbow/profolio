import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnimation from "./TextAnimation";
import TextAnimation_v from "./TextAnimation_v";
import FooterWhite from "./FooterWhite";
import "./Kubus.css";

const Packwise = () => {
  // register ScrollTrigger once
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <section className="umbrella-section container py-5">
      {/* Title */}
      <div className="mt-5 d-flex justify-content-between align-items-center">
        <div>
          <h1 className="sap-gred anschreiben-header"> Anschreiben</h1>
          <TextAnimation
            text="Bewerbung als Frontend Developer"
            className=" position-title"
            direction="bottom"
            mode="words"
            stagger={0.05}
            duration={0.7}
          ></TextAnimation>
        </div>
        <img
          src="/img/packwise.svg"
          alt="Logo"
          style={{ width: "30rem", height: "auto" }}
        />
      </div>
      <div className="mt-5">
        <TextAnimation_v
          mode="words"
          text="Hallo Manisha,"
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="	mit großem Interesse bewerbe ich mich um die Stelle als Frontend Developer bei Packwise in Dresden."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="	Ich habe Informatik an der TU Dresden studiert und erfolgreich abgeschlossen. Während des Studiums und meiner anschließenden Arbeit beim Fraunhofer IPMS und der Infrasolid GmbH konnte ich umfangreiche praktische Erfahrung in der Entwicklung moderner Webanwendungen sammeln, von der Konzeption bis zur Umsetzung und Optimierung."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="	Bei der Infrasolid GmbH habe ich eine Automatisierungsplattform (Backend: Python (Django) und Vue.Js) entwickelt, die verschiedene Messgeräte steuert, Daten automatisiert erfasst und zentral verwaltet. Dieses System wird bis heute im Betrieb eingesetzt. Beim Fraunhofer IPMS war ich als Werkstudent der Hauptentwickler für ein größeres Projekt. Meine Zuständigkeit umfasste die Planung und Umsetzung einer Anwendung zur Optimierung von Messdaten-Workflows."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="Im Rahmen dieser Projekte habe ich intensiv mit JavaScript, TypeScript, Vue.Js und React gearbeitet, REST-APIs integriert und mit CSS sowie SASS benutzerfreundliche und performante Oberflächen gestaltet. Auch mit modernen Tools wie Docker und GitLab CI/CD bin ich vertraut."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>

        <TextAnimation_v
          mode="words"
          text="Ich arbeite gerne selbständig und strukturiert, tausche mich aber auch gern mit anderen aus, um gemeinsam gute Lösungen zu finden. Besonders an Packwise gefällt mir die offene und wertschätzende Teamkultur, die man schon auf LinkedIn spürt. Es wirkt, als würde hier mit echter Freude zusammengearbeitet  und genau in so einem Umfeld möchte ich mich einbringen und mithelfen, innovative Produkte weiterzuentwickeln, die Technologie und Nachhaltigkeit verbinden."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="	Ich würde mich sehr freuen, dich kennenzulernen und mehr über die Rolle als Frontend Developer bei Packwise zu erfahren."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="Viele Grüße"
          className="anschreiben-text "
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="Ahmad Albow"
          className="anschreiben-text mt-0 "
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
      </div>

      {/* Footer */}
      <FooterWhite />
    </section>
  );
};

export default Packwise;
