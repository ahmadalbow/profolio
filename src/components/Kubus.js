import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnimation from "./TextAnimation";
import TextAnimation_v from "./TextAnimation_v";
import FooterWhite from "./FooterWhite";
import "./Kubus.css";

const Kubus = () => {
  // register ScrollTrigger once
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <section className="umbrella-section container py-5">
      {/* Title */}
      <div className="mt-5 d-flex justify-content-between align-items-center">
        <div>
          <h1 className="kubus-gred anschreiben-header"> Anschreiben</h1>
          <TextAnimation
            text="Trainee für Informationssicherheit & Datenschutz "
            className=" position-title"
            direction="bottom"
            mode="words"
            stagger={0.05}
            duration={0.7}
          ></TextAnimation>
        </div>
        <img
          src="/img/kubus.svg"
          alt="Logo"
          style={{ width: "30rem", height: "auto" }}
        />
      </div>
      <div className="mt-5">
        <TextAnimation_v
          mode="words"
          text="Sehr geehrte Herr Horn,"
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="mit großem Interesse bewerbe ich mich um die Stelle als Trainee für Informationssicherheit & Datenschutz bei Ihnen."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="	In meiner bisherigen Arbeit beim Fraunhofer IPMS und bei der Infrasolid GmbH habe ich viel Erfahrung in der Entwicklung moderner Webanwendungen gesammelt, vom Backend über die Datenbank bis hin zum Frontend. Dabei ging es mir immer darum, sauberen, nachvollziehbaren und stabilen Code zu schreiben, eine Grundlage, die auch in der Informationssicherheit eine große Rolle spielt.
"
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="Den Wunsch, mich beruflich in Richtung IT-Sicherheit und Datenschutz zu entwickeln, habe ich während meines Informatikstudiums an der TU Dresden entdeckt. Besonders das Modul „Betriebssysteme und Sicherheit“ hat mich begeistert. Dort habe ich gemerkt, wie spannend es ist, Systeme nicht nur zu bauen, sondern auch zu verstehen, wie man sie absichert. Seitdem beschäftige ich mich immer wieder mit Themen wie Zugriffskontrolle, Verschlüsselung und sicheren Softwarearchitekturen, und möchte dieses Wissen nun gezielt vertiefen."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="Beim Fraunhofer IPMS war ich als Werkstudent der Hauptentwickler für ein größeres Projekt. Ich war verantwortlich für die Planung und Umsetzung einer Anwendung zur Optimierung von Messdaten-Workflows. Dabei habe ich die komplette Pipeline von der Datenerfassung bis zur Visualisierung entwickelt, mit Python (Django) im Backend und React im Frontend."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>

        <TextAnimation_v
          mode="words"
          text="	Davor habe ich bei der Infrasolid GmbH eine Automatisierungsplattform auf Basis von Django und React gebaut, die verschiedene Geräte wie Netzteile und Spektrometer gleichzeitig steuert, Messdaten aufnimmt und zentral speichert. Diese Systeme laufen bis heute stabil im Betrieb."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="Ich arbeite gerne selbständig, lerne schnell und habe Spaß daran, mich in neue Themen einzuarbeiten – besonders, wenn es um technische Tiefe und Sicherheitsfragen geht.
"
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="Ich würde mich sehr freuen, Sie kennenzulernen und mehr über die Trainee-Stelle bei Ihnen zu erfahren."
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

export default Kubus;
