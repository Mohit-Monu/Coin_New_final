import React from "react";
import ourmission from "../../assets/ourmission.json";
import aboutUs from "../../assets/1.png";
import ourvalue from "../../assets/ourvalue.json";
import vision from "../../assets/vision.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lottie from "lottie-react";

function About() {
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-evenly mt-3">
          <Col
            md={5}
            className="d-flex align-items-center justify-content-center"
          >
            <img className="img-fluid" src={aboutUs} style={{maxHeight:"300px"}}/>
          </Col>
          <Col md={7} className=" d-flex align-items-center">
            <div>
              <h1 className="text-center">About Us</h1>
              <p style={{ fontSize: "20px" }}>
                Join us at Coin.new, where we're simplifying financial success.
                We offer smart investment options, including daily deposits,
                spare change investing, lump sums, and chitpool participation
                with great perks. Expect consistent 10% annual growth, all
                supported by ethical mutual funds. Your path to a brighter
                financial future begins here. Invest smart, invest sustainably,
                and watch your wealth grow.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container fluid>
        <Row className="justify-content-evenly">
          <Col md={9} className="d-flex align-items-center">
            <div
              style={{
                boxShadow:
                  "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#F1EFEF",
                margin: "10px",
              }}
            >
              <h2 className="text-center m-2">Our Mission</h2>
              <p style={{ padding: "10px" }}>
                At Coin.new, our mission is to democratize financial success by
                making informed and early investment opportunities accessible to
                everyone. We believe in empowering individuals, regardless of
                their financial background, to build a secure and prosperous
                future through smart, user-friendly investment options. By
                providing a platform that simplifies the complexities of finance
                and encourages sound financial practices, we aim to create a
                world where everyone can achieve their financial dreams,
                one coin at a time.
              </p>
            </div>
          </Col>
          <Col
            md={3}
            className="d-flex align-items-center justify-content-center"
          >
            <Lottie
              style={{ width: "100%", maxWidth: "300px" }}
              animationData={ourmission}
            />
          </Col>
        </Row>
      </Container>
      <hr />
      <Container fluid>
        <Row
          className="justify-content-evenly"
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >
          <Col
            md={3}
            className="d-flex align-items-center justify-content-center"
          >
            <Lottie
              style={{ width: "100%", maxWidth: "300px" }}
              animationData={vision}
            />
          </Col>
          <Col md={9} className="d-flex align-items-center">
            <div
              style={{
                boxShadow:
                  "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#F1EFEF",
                margin: "10px",
              }}
            >
              <h2 className="text-center m-2">Our Vision</h2>
              <p style={{ paddingLeft: "10px" }}>
                Our vision at Coin.new is to foster a world where financial
                well-being is within everyone's reach. We aspire to create a
                future where individuals, regardless of their financial
                background, can effortlessly grow their wealth and secure their
                financial futures. Through innovation and user-centric design,
                we aim to become a trusted partner in financial growth, making
                informed investments an integral part of people's lives. Our
                commitment is to empower millions to take control of their
                financial destinies, building a more financially resilient and
                prosperous society
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container fluid>
        <Row
          className="justify-content-evenly"
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >
          <Col md={9} className="d-flex align-items-center">
            <div
              style={{
                boxShadow:
                  "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#F1EFEF",
                margin: "10px",
              }}
            >
              <h2 className=" text-center m-2">Our Values</h2>
              <ul>
                <li>
                  <strong> Accessibility:</strong> We believe that everyone
                  should have the opportunity to achieve financial success, so
                  we work to make investing accessible to all, regardless of
                  financial background.
                </li>
                <li>
                  <strong> Innovation:</strong> We embrace innovation, using
                  cutting-edge technology and user-centric design to provide the
                  best possible investment experience.
                </li>
                <li>
                  <strong> Empowerment:</strong> Our mission is to empower
                  individuals to take control of their financial destinies,
                  fostering a more resilient and prosperous society.
                </li>
                <li>
                  <strong> Transparency:</strong> We are dedicated to providing
                  transparent, honest, and trustworthy financial services to our
                  users.
                </li>
                <li>
                  <strong> Inclusivity:</strong> We're committed to creating an
                  inclusive and diverse community of investors, where everyone
                  can grow and thrive together. We're steadfast in our
                  commitment to helping you achieve your financial goals.
                </li>
              </ul>
            </div>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <Lottie
              style={{ width: "100%", maxWidth: "300px" }}
              animationData={ourvalue}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
