import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import belajarpintar from "../../Assets/Projects/belajarpintar.png";
import foodienus from "../../Assets/Projects/foodienus.png";
import notacking from "../../Assets/Projects/notacking.png";
import puka from "../../Assets/Projects/puka.png";
import fesuitmedia from "../../Assets/Projects/fesuitmedia.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={belajarpintar}
              isBlog={false}
              title="Belajar Pintar"
              description="Belajar Pintar is an interactive learning application that helps users monitor their learning progress in a structured manner. The application is equipped with features such as learning statistics, progress charts, module lists, and quick action panels."
              ghLink="https://github.com/evafadhillahulia/SmartLearningApp"
              demoLink="https://smart-learning-app.vercel.app/admin/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodienus}
              isBlog={false}
              title="Foodienus"
              description="A recipe search app that makes it easy for users to find recipes based on the ingredients they have."
              ghLink="https://github.com/evafadhillahulia/PencariResepMasakan"
             // demoLink="https://github.com/evafadhillahulia/PencariResepMasakan"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notacking}
              isBlog={false}
              title="Notacking"
              description="Turn receipts into financial records in a single scan with Notacking. This app makes it easy to record expenses automatically, quickly, and conveniently."
              demoLink="https://www.figma.com/community/file/1526282967033627499/notacking"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={puka}
              isBlog={false}
              title="Company Profile Puka Cell"
              description="The Puka Cell Kudus website displays business profiles, mobile phone products and accessories, as well as comprehensive and reliable mobile credit top-up and data package services."
              ghLink="https://github.com/evafadhillahulia/pukacomp/"
              demoLink="https://pukacomp.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fesuitmedia}
              isBlog={false}
              title="Ideas Suitmedia"
              description="The Ideas page displays a collection of inspiring articles and the latest insights from Suitmedia, dynamically retrieved via API. Users can explore content based on date, number of items per page, and other features such as sorting and pagination."
              ghLink="https://github.com/evafadhillahulia/FESuitmedia"
              demoLink="https://fesuitmedia-evafadhillahulia.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
