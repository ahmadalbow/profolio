import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnimation from "./TextAnimation";
import TextAnimation_v from "./TextAnimation_v";
import FooterWhite from "./FooterWhite";
import "./Kubus.css";

const RundS = () => {
  // register ScrollTrigger once
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <section className="umbrella-section container py-5">
      {/* Title */}
      <div className="mt-5 d-flex justify-content-between align-items-center">
        <div>
          <h1 className="runds-gred anschreiben-header"> Anschreiben</h1>
          <TextAnimation
            text="WebUI-Entwickler für Satellitenerfassungssysteme"
            className=" position-title"
            direction="left"
            mode="words"
            stagger={0.05}
            duration={0.7}
          ></TextAnimation>
        </div>
        <img
          src="/img/Rohde&Schwarz.png"
          alt="Logo"
          style={{ width: "30rem", height: "auto" }}
        />
      </div>
      <div className="mt-5">
        <TextAnimation_v
          text="Sehr geehrter Herr Nienke,"
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
          space={30}
          direction="bottom"
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="mit großem Interesse bewerbe ich mich um die Stelle als WebUI-Entwickler für Satellitenerfassungssysteme. Lassen Sie mich bitte überzeugen, warum ich ein passender Kandidat für die Stelle bin."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
          space={30}
          direction="bottom"
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="Ich habe Informatik an der TU Dresden studiert und mein Studium vor einem Monat erfolgreich abgeschlossen. Während des Studiums und meiner anschließenden Arbeit beim Fraunhofer IPMS und der Infrasolid GmbH konnte ich umfangreiche praktische Erfahrungen in der Entwicklung von Webapplikationen sammeln. "
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
          space={30}
          direction="bottom"
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="Bei Infrasolid GmbH war ich dafür zuständig, eine Automatisierungsplattform zu entwickeln, die verschiedene Messgeräte ansteuert, um Prozesse in der Fertigung zu automatisieren. Eines dieser Geräte war das Netzteil Rohde & Schwarz HMP4040."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
          space={30}
          direction="bottom"
        ></TextAnimation_v>
        <div className="w-100 d-flex justify-content-center mt-5">
          <img
            src="/img/hmp4040.jpg"
            alt="Logo"
            style={{ width: "700px", height: "auto" }}
          ></img>
        </div>
        <TextAnimation_v
          text="Ich habe das Backend des Projekts in Python (Django) und das Frontend mit React entwickelt. Für jedes Gerät habe ich eine Klasse geschrieben, die verschiedene Funktionen bietet, um die Geräte anzusteuern. Der Ablauf eines Prozesses, den mein Projekt automatisiert, war folgender:"
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
          space={30}
          direction="bottom"
          mode="words"
        ></TextAnimation_v>

        <div className="mt-4">
          <TextAnimation_v
            text="1.    Man schließt einen Infrarotstrahler an das HMP4040-Netzteil an. "
            className="anschreiben-point "
            stagger={0.025}
            duration={0.7}
            space={80}
            direction="left"
            mode="words"
          ></TextAnimation_v>
          <TextAnimation_v
            text="2.    Das Backend kommuniziert mit dem Netzteil, um die Leistung auf 0,5 W anzupassen."
            className="anschreiben-point "
            stagger={0.025}
            duration={0.7}
            space={80}
            direction="left"
            mode="words"
          ></TextAnimation_v>
          <TextAnimation_v
            text="3.    Dann werden die Werte (Spannung und Strom) vom Netzteil zurückgelesen."
            className="anschreiben-point "
            stagger={0.025}
            duration={0.7}
            space={80}
            direction="left"
            mode="words"
          ></TextAnimation_v>
          <TextAnimation_v
            text="4.    Das Backend kommuniziert mit dem Spektrometer, um eine Messung zu starten."
            className="anschreiben-point "
            stagger={0.025}
            duration={0.7}
            space={80}
            direction="left"
            mode="words"
          ></TextAnimation_v>
          <TextAnimation_v
            text="5.    Wenn die Messung abgeschlossen ist, werden die Dateien gespeichert und durch ein Makro umgewandelt."
            className="anschreiben-point "
            stagger={0.025}
            duration={0.7}
            space={80}
            direction="left"
            mode="words"
          ></TextAnimation_v>
          <TextAnimation_v
            text="6.    Anschließend werden die Daten in der Datenbank gespeichert."
            className="anschreiben-point "
            stagger={0.025}
            duration={0.7}
            space={80}
            direction="left"
            mode="words"
          ></TextAnimation_v>
        </div>
        <TextAnimation_v
          text="Die Software wurde nicht nur in der Fertigung benutzt, sondern auch von den Chefs, um die gemessenen Daten auszuwerten und grafisch darzustellen. Bei Infrasolid GmbH war ich der einzige Informatiker und habe die Plattform allein entwickelt, obwohl ich anfangs keine Erfahrung mit diesen Geräten hatte. Meine Kollegen waren sehr zufrieden mit meiner Leistung, wie man auch in meinem Zeugnis lesen kann."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
          space={30}
          direction="bottom"
          mode="words"
        ></TextAnimation_v>
        <TextAnimation_v
          text="
Beim Fraunhofer-Institut habe ich in einem größeren Team gearbeitet, dessen Mitglieder über viele Jahre Erfahrung verfügen. Trotzdem habe ich es geschafft, als Werkstudent der Hauptentwickler für ein großes Projekt zu werden. Ich habe Probleme gelöst, die im Institut schon seit mehr als vier Jahren bestanden und von niemandem behoben werden konnten. Ich möchte mein Anschreiben jedoch nicht zu lang machen und würde Ihnen dazu gern mehr im Gespräch erzählen."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
          space={30}
          direction="bottom"
          mode="words"
        ></TextAnimation_v>
        <TextAnimation_v
          text="Ich weiß, Sie suchen wahrscheinlich jemanden mit Erfahrung in Node.js und Angular. Aber wissen Sie, wenn man die Struktur der Webentwicklung verstanden hat, kann man dieses Wissen schnell auf andere Frameworks übertragen. Ich habe bereits mehrjährige Erfahrung mit Django und React und habe sehr komplexe und große Projekte entwickelt. Ich werde auch Node.js und Angular vor Arbeitsbeginn lernen."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
          space={30}
          direction="bottom"
          mode="words"
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="Um mein Interesse und meine Motivation zu zeigen, bin ich sogar bereit, bei Ihnen für zwei Wochen in Vollzeit unbezahlt zu arbeiten. Nur wenn Sie mit meiner Leistung sehr zufrieden sind, können Sie mich anschließend einstellen."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
        ></TextAnimation_v>
        <TextAnimation_v
          mode="words"
          text="Ich würde mich sehr freuen, Sie kennenzulernen und mehr über die Stelle zu erfahren."
          className="anschreiben-text"
          stagger={0.015}
          duration={0.7}
          space={30}
          direction="bottom"
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

export default RundS;
