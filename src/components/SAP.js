import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnimation from "./TextAnimation";
import TextAnimation_v from "./TextAnimation_v";
import FooterWhite from "./FooterWhite";
import "./Kubus.css";

const SAP = () => {
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
            text="Full Stack Software Developer (Team Compass)"
            className=" position-title"
            direction="bottom"
            mode="words"
            stagger={0.05}
            duration={0.7}
          ></TextAnimation>
        </div>
        <img
          src="/img/SAP.svg"
          alt="Logo"
          style={{ width: "30rem", height: "auto" }}
        />
      </div>
      <div className="mt-5">
        <TextAnimation_v
          mode="words"
          text="Sehr geehrte Damen und Herren,"
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="mit großem Interesse bewerbe ich mich um die Stelle als Full Stack Software Developer im Team Compass bei Ihnen."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="	Ich habe Informatik an der TU Dresden studiert und erfolgreich abgeschlossen. Während des Studiums und meiner anschließenden Arbeit beim Fraunhofer IPMS und der Infrasolid GmbH konnte ich umfangreiche praktische Erfahrung in der Entwicklung und im Betrieb von Webanwendungen sammeln – von der Planung und Umsetzung bis zum produktiven Betrieb."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="	Bei der Infrasolid GmbH habe ich eine Automatisierungsplattform auf Basis von Django und React entwickelt, die verschiedene Messgeräte steuert, Daten automatisiert erfasst und zentral speichert. Diese Systeme laufen bis heute stabil im Betrieb. Beim Fraunhofer IPMS war ich als Werkstudent der Hauptentwickler für eine Anwendung zur Optimierung von Messdaten-Workflows und Visualisierung technischer Messdaten. "
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="	Im Rahmen dieser Projekte habe ich mit Docker und Docker Compose gearbeitet, CI/CD-Pipelines mit GitLab eingerichtet und Skripte in Python und Bash genutzt, um Abläufe zu automatisieren. Auch mit JavaScript, TypeScript, Node.js, REST-APIs und relationalen Datenbanken (PostgreSQL, MySQL) bin ich vertraut. Frontendseitig habe ich Erfahrung mit React und SCSS, was mir den Einstieg in Frameworks wie Angular leicht macht."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>

        <TextAnimation_v
          mode="words"
          text="Zuvor konzipierte und implementierte ich bei der Infrasolid GmbH eine Automatisierungsplattform auf Basis von Django und React, die verschiedene Messgeräte steuert, Daten automatisiert erfasst und zentral verwaltet. Diese 
Systeme werden bis heute erfolgreich im laufenden Betrieb eingesetzt. "
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="	Besonders spannend an der ausgeschriebenen Position finde ich die Möglichkeit, an skalierbaren Anwendungen zu arbeiten, die komplexe Daten in verständliche und nutzbare Informationen umwandeln. Ich arbeite gerne analytisch und strukturiert, übernehme Verantwortung für meine Aufgaben und tausche mich im Team aus, um gute Lösungen zu finden. Qualität, klare Architektur und sauberes Testing sind mir dabei besonders wichtig."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="Ich freue mich darauf, in einem internationalen Umfeld wie SAP zu arbeiten, Neues zu lernen und mit einem engagierten Team an modernen, cloudbasierten Lösungen zu entwickeln."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="	Mein Portfolio finden Sie unter ahmadalbow.com, dort können Sie sich ein Bild von meinen bisherigen Projekten machen."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="	Ich würde mich sehr freuen, Sie kennenzulernen und mehr über die Position und das Team Compass zu erfahren."
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

export default SAP;
