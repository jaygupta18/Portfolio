import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Forexyy from "../../Assets/Projects/forexyy.png";
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
              imgPath={Medimate}
              isBlog={false}
              title="Medimate"
              description="Patients can create appointments with their specific doctor & can meet on scheduled time .
                           Implemented a Dashboard for the admin so that admin can manage doctors information , all
                           appointments , patients information , all doctors applications to register in hospital .
                           If a new doctor wants to join any specific hospital , he can fill a form so that admin can
                           review their YOE , degrees , specialization ."
              ghLink="https://github.com/jaygupta18/AppointmentFront.git"
              demoLink="https://client-amber-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Forexyy}
              isBlog={false}
              title="Forexyy.com"
              description="This is the forex exchange platform . In this platform user can place a trade for dedicated
                            time and after the time over user will get the result. I have handled all the backend part of
                            this project like integrating APIs , authentication , authorization etc"
              
              demoLink="https://forexyy.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
