import React from "react";
import home1 from "../../assets/home1.jpg";
import playstore from "../../assets/playstore.jpg";
import downloadbtn from "../../assets/downloadbtn.png";
import howto from "../../assets/howto.png";
import Button from "react-bootstrap/Button";
import classes from "./Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main.css";
import testi1 from "../../assets/testimonials/testimonials-1.jpg";
import testi2 from "../../assets/testimonials/testimonials-2.jpg";
import testi3 from "../../assets/testimonials/testimonials-3.jpg";
import testi4 from "../../assets/testimonials/testimonials-4.jpg";
import testi5 from "../../assets/testimonials/testimonials-5.jpg";
import testi6 from "../../assets/testimonials/testimonials-6.jpg";
import testi7 from "../../assets/testimonials/testimonials-7.jpg";
import testi8 from "../../assets/testimonials/testimonials-8.jpg";

import Carousel from "react-bootstrap/Carousel";

function Home() {
  function scrollToSection() {
    const section = document.getElementById("sectionId");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  const testimonial = [
    {
      name: "Akash",
      at: "Student",
      image: testi1,
      data: "As a student, I often found it challenging to save or invest money. Coinnew has changed the game for me. With its daily auto deposits, I can effortlessly save a portion of my part-time job earnings, no matter how small. It's like having a financial mentor guiding me towards a brighter financial future.!",
    },
    {
      name: "Asif",
      at: "Employee",
      image: testi2,
      data: "As a young professional, I was eager to start investing, but I didn't know where to begin. Coinnew made it easy. The platform's educational resources helped me understand the world of investing, and its user-friendly interface made the process a breeze. Coinnew has been a valuable companion on my journey to financial independence.",
    },
    {
      name: "Swathi",
      at: "User Coin.new ",
      image: testi8,
      data: "I love shopping online, and Coin.new has added a delightful twist to the experience. With features like cashback rewards and spare change investing, I'm not just spending money; I'm growing it. It's a win-win, and it makes my financial journey all the more exciting!",
    },
    {
      name: "Emily",
      at: "Small Business Owner",
      image: testi3,
      data: "Every penny counts as a small business owner. Coinnew has transformed my financial management with its daily auto deposits. It's a win-win – my money grows steadily, helping me invest in providing better services. Coinnew is the bridge to the future of accessible finance for small businesses.",
    },
    {
      name: "Ridham",
      at: "RunSmall Book store",
      image: testi6,
      data: "As a small book store owner, Coin.new has been a breath of fresh air. It's not just about investing spare change; it's a lifeline for my business. The daily smart deposits and chitpool feature are like having a financial advisor right in my pocket, guiding me toward a brighter future for my store and my savings. Coin.new is more than an investment platform; it's a partner in my success.",
    },
    {
      name: "Bhanu Prakash",
      at: "founder Urban Kisan",
      image: testi4,
      data: "Coin.new is a game-changer for anyone looking to take control of their financial future. As the founder of Urban Kisan, I understand the value of making every rupee count. Coin.new's unique approach to ethical investing and smart features like Chitpool align perfectly with responsible financial growth. It's not just a platform; it's a financial partner that brings the future of finance to your fingertips.",
    },
    {
      name: "Praveen AkkiRaju",
      at: "Managing Partner SoftBank",
      image: testi5,
      data: "The financial industry is evolving, and Coin.new is at the forefront of this revolution. I've witnessed many innovations, but Coin.new's commitment to democratizing investing is truly remarkable. This user-friendly platform is opening doors for everyone, regardless of their financial background, to build a brighter financial future. I'm excited to be part of this financial journey.",
    },
    {
      name: "Meraj Faheem",
      at: "Ceo Edventure Park",
      image: testi7,
      data: "At Code for India Foundation, we're dedicated to creating positive social impact through technology. Coin.new's mission aligns perfectly with our values. It's not just a financial platform; it's a tool for change. Coin.new's user-centric design and investing options are empowering individuals to invest in a brighter future. It's a step towards financial inclusivity, and I'm excited to support this movement.",
    },
  ];
  return (
    <div>
      <Container fluid className="mt-5 mb-5">
        <Row style={{ display: "flex", alignItems: "center" }}>
          <Col md={8}>
            <div>
              <h1 style={{ marginLeft: "30px", fontSize: "40px" }}>
                Your Gateway to Affordable{" "}
                <span style={{ color: "red" }}>Investing!</span>
              </h1>
            </div>
            <h4
              className="mt-3"
              style={{ marginLeft: "30px", fontSize: "30px" }}
            >
              At coin.new we empower you to save, invest and take charge of your
              future.
            </h4>
            <Button
              variant="warning"
              className="mt-4"
              onClick={scrollToSection}
              style={{
                fontSize: "20px",
                fontWeight: "400",
                marginLeft: "30px",
              }}
            >
              Get Started
            </Button>
          </Col>
          <Col md={4}>
            <img
              src={home1}
              style={{ width: "100%", padding: "20px", float: "right" }}
            />
          </Col>
        </Row>
      </Container>
      <hr />
      <div id="sectionId">
        <div>
          <img src={howto} style={{ width: "100%", minHeight: "200px" }} />
        </div>
      </div>
      <hr />
      <div>
        <h1 className={classes.featurehead}>Features</h1>
        <Container fluid>
          <Row className="justify-content-evenly">
            <Col className={classes.featuresub}>
              <h5 className="text-center"> Daily Deposit</h5>
              <p className="text-center ">
                Save effortlessly with daily auto-deposits from your bank
                account, helping you build wealth gradually.
              </p>
            </Col>
            <Col className={classes.featuresub}>
              <h5 className="text-center mt-1"> Spare Change</h5>
              <p className="text-center mt-1">
                Turn everyday transactions into savings by rounding up your
                purchases and investing the spare change.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-evenly">
            <Col className={classes.featuresub}>
              <h5 className="text-center mt-1"> Lump Sum</h5>
              <p className="text-center mt-1">
                Take control of your savings with the flexibility to deposit
                fixed amounts whenever you choose.
              </p>
            </Col>
            <Col className={classes.featuresub}>
              <h5 className="text-center mt-1"> ChitPool</h5>
              <p className="text-center mt-1">
                Participate weekly with just 20 rupees and unlock rewards,
                including cash, vouchers, and exciting experiences.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <hr />

      <div>
        <section id="testimonials" className="testimonials section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h1>Validation</h1>
              <p>
                What Are They <span>Saying About Us</span>
              </p>
            </div>
            <Carousel style={{ paddingBottom: "50px" }}>
              {testimonial.map((item) => (
                <Carousel.Item>
                  <div
                    className="slides-1 swiper "
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="row gy-4 justify-content-center">
                            <div className="col-lg-6">
                              <div className="testimonial-content">
                                <i>
                                  <i className="bi bi-quote quote-icon-left"></i>
                                  {item.data}
                                  <i className="bi bi-quote quote-icon-right"></i>
                                </i>
                                <h3> {item.name}</h3>
                                <h4 style={{ color: "red" }}> {item.at}</h4>
                              </div>
                            </div>
                            <div className="col-lg-2 text-center">
                              <img
                                src={item.image}
                                className="img-fluid testimonial-img"
                                alt=""
                                style={{ maxHeight: "128px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </section>
      </div>
      <hr />
      <Container fluid>
        <Row style={{ marginTop: "45px", marginBottom: "40px" }}>
          <Col md={8}>
            <center>
              <div className="section-header ">
                <h1>Stay tuned!</h1>
                <p>
                  we are <span>launching soon...</span>
                </p>
                <a
                  href="https://drive.google.com/drive/folders/13nhCNOZkKchlp7OqBa6d15_zLWi8e1rg?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={downloadbtn}
                    style={{
                      height: "100px",
                      cursor: "pointer",
                      marginTop: "20px",
                    }}
                    alt="Download Button"
                  />
                </a>
              </div>
            </center>
          </Col>
          <Col>
            <img
              src={playstore}
              style={{ width: "90%", minHeight: "200px", marginLeft: "10px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home;
