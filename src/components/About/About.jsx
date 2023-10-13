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
    <div >
      <Container fluid >
        <Row className="justify-content-evenly">
          <Col md={9} className="d-flex align-items-center">
            <div
              style={{
                boxShadow:
                  "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#F1EFEF",
                margin:"10px"
              }}
            >
              <h2 className="text-center m-2">Our Mission</h2>
              <p style={{ padding: "10px" }}>
                At coin.new we're on a mission to enable financial success for
                everyone by providing accessible, informed and early investment
                opportunities.
              </p>
            </div>
          </Col>
          <Col md={3} className="d-flex align-items-center justify-content-center">
            <Lottie style={{ width: "100%",maxWidth:"300px"}} animationData={ourmission} />
          </Col>
        </Row>
      </Container>
      <hr />
      <Container fluid>
        <Row className="justify-content-evenly"style={{marginTop:"40px",marginBottom:"40px"}}>
          <Col md={3} className="d-flex align-items-center justify-content-center">
            <Lottie style={{ width: "100%",maxWidth:"300px" }} animationData={vision} />
          </Col>
          <Col md={9} className="d-flex align-items-center">
            <div
              style={{
                boxShadow:
                  "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#F1EFEF",
                margin:"10px"
              }}
            >
              <h2 className="text-center m-2">Our Vision</h2>
              <p style={{ paddingLeft: "10px" }}>
                We aim to democratize investing, ensuring that every rupee
                matters. Our user friendly platform puts financial control in
                your hands, creating an inclusive and prosperous future for all.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container fluid >
        <Row className="justify-content-evenly"style={{marginTop:"40px",marginBottom:"40px"}}>
          <Col md={9}  className="d-flex align-items-center">
            <div
              style={{
                boxShadow:
                  "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#F1EFEF",
                margin:"10px"
              }}
            >
              <h2 className=" text-center m-2">Our Values</h2>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className={styles.icon}
                  />
                  <strong> Free and Secure:</strong> Enjoy benefits of investing
                  without hidden charges and security concerns. Your safety and
                  the growth of your investments are our top priorities.
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className={styles.icon}
                  />
                  <strong> Educational Resources:</strong> We're dedicated to
                  empowering our users. Explore our wealth of educational
                  content to enhance your financial knowledge and make
                  well-informed investment decisions.
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className={styles.icon}
                  />
                  <strong> Sustainable Investment:</strong> We offer you the
                  opportunity to invest in ethical mutual funds, allowing you to
                  make a positive impact on the world while earning returns on
                  your investments. Your financial choices can contribute to a
                  brighter future.
                </li>
              </ul>
            </div>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <Lottie style={{ width: "100%",maxWidth:"300px" }} animationData={ourvalue} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
