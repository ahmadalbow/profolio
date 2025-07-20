import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css"; // <‑‑ custom tweaks live here

export default function Footer() {
  return (
    <footer className="footer bg-black text-white pt-5">
      <Container>
        {/* top hairline */}
        <hr className="footer-divider border-secondary opacity-25 mb-5" />

        <Row className="gy-4 justify-content-center ">
          {/* home icon */}
          <Col xs={12} md={2} className="d-flex justify-content-start h-100">
            <img
              src="/img/logo_w.svg"
              alt="Logo"
              style={{ width: "40px", height: "auto" }}
            />
          </Col>

          {/* CRAFT column */}
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-start flex-column align-items-start"
          >
            <h6 className="text-uppercase  mb-3 text-gray">Craft</h6>
            <ul className="list-unstyled mt-4 gap-3 d-flex flex-column">
              {[
                "Umbrella",
                "Ecocycle Navigator",
                "Mountain",
                "Marina Portfolio",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* CONTACT column */}
          <Col
            xs={6}
            md={2}
            className="d-flex justify-content-start flex-column align-items-start"
          >
            <h6 className="text-uppercase  mb-3 text-gray">Contact</h6>
            <ul className="list-unstyled mt-4 gap-3 d-flex flex-column">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "Read.cv", href: "#" },
                { label: "Mail", href: "mailto:hello@example.com" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="footer-link d-flex align-items-center"
                  >
                    {label}
                    <img
                      src="/img/arrow.png"
                      alt="Logo"
                      style={{
                        width: "14px",
                        height: "auto",
                        marginLeft: "0.5rem",
                      }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* copyright & love note */}
          <Col
            xs={12}
            md={3}
            className="d-flex justify-content-start flex-column align-items-start"
          >
            <h6 className="text-uppercase  mb-3 text-gray">&nbsp;</h6>
            <p className="fw-semibold mb-2 mt-4 ">
              © 2025 Ahmad Albow. All Rights Reserved.
            </p>
            <p className="small text-gray mb-0">
              Made with <i className="bi bi-heart-fill"></i> and Milk
              Coffee&nbsp;(120 % sugar).
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
