import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import youtube from "../../Assets/Projects/YTcontentTeam.png";
import  CRMweb from "../../Assets/Projects/crmweb.png";
import  Medimate from "../../Assets/Projects/Medimate.png";

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
              imgPath={youtube}
              isBlog={false}
              title="AI-Driven News Analysis & Video Content Generator"
              description="Built an end-to-end AI automation pipeline that fetches live news, filters noise, ranks relevance, and transforms selected stories into YouTube-ready content. The system applies relevance scoring with primary and backup news selection to ensure consistent output while handling multiple news items through structured parsing. It automates script writing, title generation, thumbnail hook text, and SEO-optimized video descriptions using LLM-based workflows. Google Sheets integration enables structured storage, real-time tracking, and large-scale content scheduling. This solution eliminates manual research, scripting, and optimization, allowing creators to publish high–click-through-rate news videos faster, more consistently, and at scale."              
              demoLink="https://github.com/jaygupta18/AI-Powered-News-Content-Automation-System"
            />
          </Col>
           

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Medimate}
              isBlog={false}
              title="Doctor Appointment Booking WebApp"
              description="Engineered a web-based doctor appointment booking system that allows patients to search doctors and seamlessly book available time slots. Implemented real-time slot availability and appointment scheduling to minimize booking conflicts and eliminate manual coordination. Developed dedicated Admin and Doctor dashboards to manage daily schedules, view patient details, and track upcoming appointments from a centralized interface, improving operational efficiency and overall user experience."              
              demoLink="https://client-amber-eight.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
