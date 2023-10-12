import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./About.module.css";
import ourmission from "../../assets/ourmission.json";
import ourvalue from "../../assets/ourvalue.json";
import vision from "../../assets/vision.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lottie from "lottie-react";

function About() {
  return (
    <div className="container">
      <Container>
        <Row >
          <Col md={8} className="d-flex align-items-center">
            <div
              style={{
                paddingRight: "20px",
                boxShadow:
                  "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#F1EFEF",
              }}
            >
              <h2 className="text-center m-2">Our Mission</h2>
              <p style={{ padding: "10px" }}>
                At Coin.New, our unwavering mission is to empower individuals of
                all backgrounds to chart a course towards financial success
                through informed investment choices made early in their lives.
                We firmly believe in the fundamental principle that everyone
                should embark on their investment journey at the earliest
                opportunity, securing a solid financial foundation that paves
                the way for a prosperous and secure future.
              </p>
            </div>
          </Col>
          <Col className="d-flex align-items-center">
            <Lottie style={{ height: "400px" }} animationData={ourmission} />
          </Col>
        </Row>
      </Container>
  
      <hr />

      <Container>
        <Row >
        <Col className="d-flex align-items-center">
            <Lottie style={{ height: "400px" }} animationData={vision} />
          </Col>
          <Col md={8} className="d-flex align-items-center">
            <div
              style={{
                paddingRight: "20px",
                boxShadow:
                  "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#F1EFEF",
              }}
            >
              <h2 className="text-center m-2">Our Vision</h2>
          <p style={{ paddingLeft: "10px" }}>
            Our vision is to democratize investing and empower individuals from
            all walks of life to achieve financial freedom. At Coin.edu , we
            believe that every rupee counts, which is why we're pioneering a
            micro-investing platform that allows you to start your investment
            journey with as little as rupee 1. Our commitment to accessibility
            and simplicity drives us to create a user-friendly platform that
            puts financial control in your hands. We envision a future where
            everyone, regardless of their financial standing, can easily access
            the world of investing, setting the stage for a more inclusive and
            prosperous tomorrow.
          </p>
          </div>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container>
        <Row >
          <Col md={8} className="d-flex align-items-center">
            <div
              style={{
                paddingRight: "20px",
                boxShadow:
                  "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#F1EFEF",
              }}
            >
              <h2 className=" text-center m-2">Our Values</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
              <strong> Free and Secure:</strong> Enjoy the benefits of investing
              without any hidden charges and security concerns. We prioritize
              the safety and growth of your investments.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
              <strong> Educational Resources:</strong> We believe in empowering
              our users. Explore our educational content to enhance your
              financial knowledge and make informed investment decisions.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
              <strong> Sustainable Investment:</strong> We offer you the
              opportunity to invest in ethical mutual funds. Make a positive
              impact on the world while earning returns on your investments.
            </li>
          </ul>
            </div>
          </Col>
          <Col className="d-flex align-items-center">
            <Lottie style={{ height: "400px" }} animationData={ourvalue} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
