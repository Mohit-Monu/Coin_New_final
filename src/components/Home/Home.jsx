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
import testi1 from "../../assets/testimonials/testimonials-4.jpg";
import testi2 from "../../assets/testimonials/testimonials-3.jpg";
import testi3 from "../../assets/testimonials/testimonials-2.jpg";
import testi4 from "../../assets/testimonials/testimonials-1.jpg";
import testi5 from "../../assets/testimonials/testimonials-2.jpg";
import Carousel from "react-bootstrap/Carousel";
function Home() {
  const testimonial = [
    {
      name: "Samantha",
      at: "Entrepreneur",
      image: testi1,
      data: "I love how effortless saving has become with this platform. Daily deposits, spare change, and the chance to participate in Chitpool make saving and investing a breeze. It's like having a financial advisor in my pocket!",
    },
    {
      name: "Raj",
      at: "Tech",
      image: testi2,
      data: "The flexibility to invest both small and large sums on my own terms is a game-changer. This platform aligns perfectly with my financial goals. I see a brighter financial future ahead.",
    },
    {
      name: "Neha",
      at: "Designer",
      image: testi3,
      data: "As someone who values ethical investing, I appreciate the option to invest in ethical mutual funds. It feels great to know my money is making a positive impact while it grows.",
    },
    {
      name: "Akshay",
      at: "Tech",
      image: testi4,
      data: "Chitpool adds an element of excitement to saving. I eagerly await the weekly draws for rewards and cash prizes. It's a fun way to boost my savings while staying engaged.",
    },
    {
      name: "Riya",
      at: "Designer",
      image: testi5,
      data: "The future of finance is here, and I'm loving it! This platform makes investing accessible to everyone, no matter their financial background. It's user-friendly and has opened up new possibilities for my financial journey.",
    },
  ];
  return (
    <div>
      <div>
        <div className={classes.container}>
          <img
            src={home1}
            style={{ width: "100%", maxHeight: "500px", minHeight: "400px" }}
          />
          <div className={classes.box}>
            <h1 className={classes.textStyled}>
              We Helps you in saving & investing
            </h1>
            <p className={classes.textStyled2}>
              Invest spare change, invest while you bank, earn bonus
              investments, grow your knowledge and more.
            </p>
            <Button className={classes.buttonStyled} variant="primary">
              Start Now
            </Button>
            <Button
              className={classes.buttonStyled2}
              style={{ marginTop: "10px" }}
              variant="primary"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <hr/>

      <div>
        <h1 className={classes.featurehead}>Features</h1>
        <Container>
          <Row>
            <Col className={classes.featuresub}>
              <h5 className="text-center mt-1"> Daily Deposit:</h5>
              <p className="text-center mt-1">
                Save effortlessly with daily auto-deposits from your bank
                account, helping you build wealth gradually.
              </p>
            </Col>
            <Col className={classes.featuresub}>
              <h5 className="text-center mt-1"> Spare Change:</h5>
              <p className="text-center mt-1">
                Turn everyday transactions into savings by rounding up your
                purchases and investing the spare change.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className={classes.featuresub}>
              <h5 className="text-center mt-1"> Lump Sum:</h5>
              <p className="text-center mt-1">
                Take control of your savings with the flexibility to deposit
                fixed amounts whenever you choose.
              </p>
            </Col>
            <Col className={classes.featuresub}>
              <h5 className="text-center mt-1"> Chitpool:</h5>
              <p className="text-center mt-1">
                Participate weekly with just 20 rupees and unlock rewards,
                including cash, vouchers, and exciting experiences.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <hr/>

      <div>
        <div className={classes.container2}>
          <img src={howto} style={{ width: "100%", minHeight: "200px" }} />
          {/* <p className={classes.firststep}>Register using your mobile no.</p>
          <p className={classes.secondstep}>Complete your KYC.</p>
          <p className={classes.thirdstep}> Link bank account via UPI.</p>
          <p className={classes.fourthstep}>Start investing with minimum ₹1.</p> */}
        </div>
      </div>
      <hr/>

      <div>
        <section
          id="testimonials"
          className="testimonials section-bg"
        >
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h1>Validation</h1>
              <p>
                What Are They <span>Saying About Us</span>
              </p>
            </div>
            <Carousel style={{paddingBottom:"50px"}}>
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
                                <b>
                                  <i className="bi bi-quote quote-icon-left"></i>
                                  {item.data}
                                  <i className="bi bi-quote quote-icon-right"></i>
                                </b>
                                <h3> {item.name}</h3>
                                <h4 style={{color:"red"}}> {item.at}</h4>
                              </div>
                            </div>
                            <div className="col-lg-2 text-center">
                              <img
                                src={item.image}
                                className="img-fluid testimonial-img"
                                alt=""
                                style={{maxHeight:"128px"}}
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
      <hr/>
      <Container fluid>
        <Row>
          <Col md={8} className="d-flex align-items-center">
            <div style={{ paddingBottom: "20px" }}>
              <h1 className={classes.downloadhead}>
                Download the new-gen fast Investing app launching soon
              </h1>
              <center>
                <a
                  href="https://drive.google.com/drive/folders/13nhCNOZkKchlp7OqBa6d15_zLWi8e1rg?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={downloadbtn}
                    style={{ height: "50px", cursor: "pointer" }}
                    alt="Download Button"
                  />
                </a>
              </center>
            </div>
          </Col>
          <Col className="d-flex align-items-center p-2">
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