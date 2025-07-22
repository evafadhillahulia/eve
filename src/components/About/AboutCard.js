import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I’m currently pursuing a Bachelor’s degree in <span className="blue"> Computer Science at Dian Nuswantoro University. </span>
            <br />
            My main interests are in <span className="blue"> Web Development and Data Analysis, </span> and I’m always eager to explore the latest tools and technologies to keep enhancing my skills.
            <br />
            <br />
            Beyond coding, I also enjoy engaging in a variety of enriching activities, such as:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Notes or Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Web & Data Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Culinary Hunting & Trying New Foods
            </li>
          </ul>

          <p style={{ color: "#5C9DFF" }}>
            "Code with intention. Build with impact."{" "}
          </p>
          <footer className="blockquote-footer">Eva Fadhillah Ulia</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
