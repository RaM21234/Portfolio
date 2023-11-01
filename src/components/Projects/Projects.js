import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import zapnote from "../../Assets/Projects/zapnote.PNG";
import skincare from "../../Assets/Projects/skincare.PNG";
import shaolin from "../../Assets/Projects/shaolin.PNG";
import flickspace from "../../Assets/Projects/flickspace.PNG";


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
              imgPath={zapnote}
              isBlog={false}
              title="Zapnote"
              description="The website stores user-provided notes securely on a MongoDB Atlas server. Only the user has access to their notes, and the user's password is encrypted using JSON Web Tokens (JWT) to enhance security. This encryption ensures that the user's personal notes remain safe, even in the event of a database breach. Users can add new notes, edit existing ones, and delete older notes using the website's features, providing a comprehensive note management system."
              ghLink="https://github.com/RaM21234/zapnote_frontend"
              demoLink="https://zapnote.netlify.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skincare}
              isBlog={false}
              title="Ankur Skincare"
              description="The website serves as a free portal for individuals to assess their skin health and identify various skin conditions. It employs deep learning algorithms to enhance the accuracy of the skin condition assessment. Presently, the website can detect and identify seven different skin diseases, making it a valuable tool for users to monitor and understand their skin's health. Currently the website is in development."
              ghLink="https://github.com/RaM21234/skin_care_frontend"
              demoLink="https://reliable-genie.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flickspace}
              isBlog={false}
              title="Flick-Space"
              description="Flick-Space is the movies database application made with top notch frontend technologies such as React, Redux & SCSS. The website provide an insight to the latest movies to enjoy the weekend."
              ghLink="https://github.com/RaM21234/movix_flick-space"
              demoLink="https://famous-haupia-eafe1a.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shaolin}
              isBlog={false}
              title=" News Monkey"
              description="The website provides news using an api,the news links can be used to navigate the user to the main page of the news.The news is categorised in various categories like General,Technology,etc.The News provides a total of 8 news headlines in a page."
              ghLink="https://github.com/RaM21234/News_monkey"

            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
