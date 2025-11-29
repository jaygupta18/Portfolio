import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Mailex from "../../Assets/Projects/mailex.png";
import  CRMweb from "../../Assets/Projects/crmweb.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CRMweb}
              isBlog={false}
              title="CRM For Insurance Policy & Lead Management"
              description="I developed a comprehensive Community Policy Management & CRM Web Application designed to streamline policy promotion, online lead generation, and internal business operations. The platform provides end users with easy access to policy information while enabling admins to manage the entire workflow through a powerful CRM dashboard.The system includes advanced features such as lead management, employee management, WhatsApp automation, follow-up tracking, communication templates, reports, and analytics. Built with a strong focus on usability and automation, the platform helps businesses monitor performance, communicate seamlessly with clients, and maintain organized records of all activities."
              demoLink="https://1000518.site.guru/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mailex}
              isBlog={false}
              title="Ai Email Automation Chrome Extension"
              description="I built an advanced AI Email Automation Chrome Extension that helps professionals handle their inbox with zero manual effort. After installing the extension, users can sign in securely using Google OAuth, granting the extension access to the Gmail API for reading and responding to emails.
The extension automatically fetches all unread emails from the last 7 days, processes them, and sends these email contents to Google Gemini AI, which generates smart, context-aware replies. Once the response is generated, the system uses the Gmail API to automatically send the reply to the original sender.
The extension uses MIME encoding and base64-safe formatting to ensure the email is structured properly when sent through Gmail’s API."              
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
