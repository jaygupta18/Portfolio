import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello World! I'm <span className="purple">JAY KUMAR GUPTA </span>
            from <span className="purple"> Jabalpur, India. </span>
            <br />
            I am a **B.Tech Computer Science and Engineering** undergrad student at **Jabalpur Engineering College**, driven by a deep interest in **Web Development and Data Structures & Algorithms**.
            <br />
            My goal is to leverage robust code and scalable architecture to solve real-world problems.
            <br />
            <br />
            Beyond the keyboard, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> **Competitive Programming**, which sharpens my problem-solving and logical thinking.
            </li>
            <li className="about-activity">
              <ImPointRight /> **Continuously Exploring New Tech Stacks** (like current trends in AI/ML or new JS frameworks) to stay ahead of the curve.
            </li>
            <li className="about-activity">
              <ImPointRight /> **Reading and Traveling**, as they provide fresh perspectives and foster creativity—essential for innovation.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "The best way to predict the future is to create it, one impactful line of code at a time."{" "}
          </p>
          <footer className="blockquote-footer">Jay Kumar Gupta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;