import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ram Kumar Verma </span>
            from <span className="purple"> Bhopal, India.</span>
            <br /> I am a Pre final year student pursuing an Bachelor of Technology (B.Tech.)
            in Electronics and Communication Engineering at IIIT Una.
            <br />

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Food & gourmet tours
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You can do Anything"{" "}
          </p>
          <footer className="blockquote-footer">Ram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
