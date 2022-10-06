import React from "react";
import { Col, Container, Image, Row, Button, Card } from "react-bootstrap";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { BsArrowRight, BsFillCircleFill, BsCheck2Square } from "react-icons/bs";
import mobile from "../assets/img/mobile.png";
import zero from "../assets/img/zero.png";
import CardDark from "../components/CardDark";
import CardCounter from "../components/CardCounter";
import Accordian from "../components/Accordian";
import Superstars from "../components/Superstars";
import ButtonStar from "../components/ButtonStar";
import TestiSlider from "../components/TestiSlider";
import Call24 from "../assets/img/24call.png";
import WhatsapIcon from "../assets/img/whatsapp-icon.png";
import RangeProgressBar from "../components/RangeProgressBar";
import TotalInvestment from "../components/TotalInvestment";
import HeroIcon1 from "../assets/img/2.png";
import HeroIcon2 from "../assets/img/1.png";
import HeroIcon3 from "../assets/img/3.png";
import HeroIcon4 from "../assets/img/15.png";
import HeroIcon5 from "../assets/img/16.png";
import CardIcon1 from "../assets/img/4.png";
import CardIcon2 from "../assets/img/5.png";
import CardIcon3 from "../assets/img/9.png";
// import Icon1 from "../assets/img/dark-card-icon.png";
import SingupBtn from "../layout/SingupBtn";

const Home = () => {
  return (
    <>
      <Header />
      <SingupBtn />

      <section className="hero-area py-5 mt-5 mt-md-0">
        <Container>
          <Row className="d-flex justify-content-center align-items-center py-0 py-md-5 mt-0 mt-lg-5" data-aos="zoom-in-up">
            <Col xs={12} md={12} lg={7} className="text-center text-md-start">
              <div className="bg-shark3 rounded py-3 px-3 px-md-4 d-inline-block mb-5 mb-md-3">
                <h5 className="text-main-gradient fw-500 fs-22 fs-sm-20 mb-0">
                  <Image src={HeroIcon5} className="img-fluid me-2" alt="" />
                  Agriculture Investments
                  <Image src={HeroIcon4} className="img-fluid ms-2" alt="" />
                </h5>
              </div>
              <h1 className="text-white fw-600 display-5 mb-5 mb-md-4">
                Invest and earn regular assured return
                <span className="text-main-green">
                  <BsArrowRight /> Tax Free
                </span>
              </h1>
              <p className="text-white fw-400 fs-24 mb-5 mb-md-4 pt-2">
                Diversify your portfolio with safe agri-investments.
              </p>
              <div className="px-5 px-md-0">
                <Row>
                  <Col md={4} lg={4}>
                    <Card className="darkcard mb-5 mb-md-4 p-0 rounded text-start text-white">
                      <Card.Body className="m-1 bg-dark-gradient rounded px-4 py-5 py-md-4">
                        <div className="darkcard-icon p-3 mx-auto mb-4 mb-md-2 d-flex justify-content-center align-items-center">
                          <Image src={HeroIcon1} className="img-fluid" alt="" />
                        </div>
                        <Card.Title className="fw-400 text-center fs-20 mb-0 pt-2">
                          Pay{" "}
                          <span className="fw-600 text-main-gold">ZERO</span>{" "}
                          tax on gains
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} lg={4}>
                    <Card className="darkcard mb-5 mb-md-4 p-0 rounded text-start text-white">
                      <Card.Body className="m-1 bg-dark-gradient rounded px-4 py-5 py-md-4">
                        <div className="darkcard-icon p-3 mx-auto mb-4 mb-md-2 d-flex justify-content-center align-items-center">
                          <Image src={HeroIcon2} className="img-fluid" alt="" />
                        </div>
                        <Card.Title className="fw-400 text-center fs-20 mb-0 pt-2">
                          <span className="fw-600 text-main-gold">12%</span> to{" "}
                          <span className="fw-600 text-main-gold">16%</span>{" "}
                          returns
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} lg={4}>
                    <Card className="darkcard mb-5 mb-md-4 p-0 rounded text-start text-white">
                      <Card.Body className="m-1 bg-dark-gradient rounded px-4 py-5 py-md-4">
                        <div className="darkcard-icon px-3 py-1 mx-auto mb-4 mb-md-2 d-flex justify-content-center align-items-center">
                          <Image src={HeroIcon3} className="img-fluid" alt="" />
                        </div>
                        <Card.Title className="fw-400 text-center fs-20 mb-0 pt-2">
                          <span className="fw-600 text-main-gold">#1</span>{" "}
                          Green investments
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>

              <ButtonStar />
            </Col>
            <Col
              xs={12}
              md={12}
              lg={5}
              className="text-center text-lg-end mt-lg-0 mt-md-5 mt-5"
              
            >
              <Image src={mobile} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 mt-5" >
        <Container>
          <Row className="d-flex justify-content-center align-items-center pb-0 pb-md-5">
            <Col xs={12} md={12} lg={6} className="text-center text-md-start">
              <p className="text-uppercase fs-18 fw-500 text-main-green" data-aos="zoom-in-up">
                <BsFillCircleFill size={8} className="me-1" /> wHAT ARE
                GROWPITAL INVESTMENTS LIKE?
              </p>
              <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" data-aos="zoom-in-up">
                Its like a{" "}
                <span className="text-main-green">Fixed Deposit</span> but a
                much better one!
              </h2>
              <div className="d-flex justify-content-start align-items-center my-5 my-md-5 py-4 py-md-4" data-aos="zoom-in-up">
                {/* <h2 className="display-1 fw-900 text-main-gold mb-0">0</h2> */}
                <Image src={zero} className="img-fluid" alt="" />
                <div className="text-start">
                  <p className="fs-24 fs-sm-18 fw-400 text-white ms-2 mb-5">
                    Charge on early withdrawal
                  </p>
                  <p className="fs-24 fs-sm-18 fw-400 text-white ms-4 mb-5">Default</p>
                  <p className="fs-24 fs-sm-18 fw-400 text-white ms-2 mb-0">
                    Brokerage fees
                  </p>
                </div>
              </div>
              <div>
              <ButtonStar/>
              </div>
            </Col>
            <Col xs={12} md={12} lg={6} className="text-center text-md-end mt-5 mt-md-5 mt-lg-0">
              <Row className="d-flex justify-content-center align-items-center">
                <Col md={6}>
                  <CardDark
                  Cardicon={CardIcon1}
                    Title="Assured Growth "
                    SubTitle="Free from Stock Mad...rash, As safe as bank Fixed Deposits."
                  />
                  <CardDark
                  Cardicon={CardIcon3}
                    Title="Safe, Secure"
                    SubTitle="Our team is dedicated to support you anytime, anywhere."
                  />
                </Col>
                <Col md={6}>
                  <CardDark
                  Cardicon={CardIcon2}
                    Title="Consistent Returns"
                    SubTitle="We providing much higher returns than FD, Bank and several mutual funds."
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-charade py-5" data-aos="zoom-in-up">
        <Container className="py-5 py-md-5">
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center">
              <p className="text-uppercase fs-18 fw-500 text-main-green" data-aos="zoom-in-up">
                <BsFillCircleFill size={8} className="me-1" /> WHAT ARE WE PROUD
                ABOUT?
              </p>
              <p className="text-white fw-600 fs-24 mb-3 mb-md-4" data-aos="zoom-in-up">
                Agriculture Sector is growing rapidly. Join us in the fast
                growing industry
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center mb-4">
            <CardCounter />
            <Col md={12} className="text-center mt-5 mt-md-0" data-aos="zoom-in-up">
              <ButtonStar />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 my-4 my-md-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center">
              <p className="text-uppercase fs-18 fw-500 text-main-green" data-aos="zoom-in-up">
                <BsFillCircleFill size={8} className="me-1" /> HOW TO GET
                STARTED?
              </p>
              <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" data-aos="zoom-in-up">
                Start investing in{" "}
                <span className="text-main-green">4 simple steps</span>
              </h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-start pt-5">
            <Col xs={12} md={12} lg={6} className="text-center text-lg-start mb-5 mb-lg-0" data-aos="zoom-in-up">
              <Image src={mobile} className="img-fluid w-75" alt="" />
            </Col>
            <Col xs={12} md={12} lg={6} className="text-center text-md-end" data-aos="zoom-in-up">
              <Accordian Display_Sr_No="text-main-gold me-3"/>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center mt-5 mt-md-5" >
              <ButtonStar />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center">
              <p className="text-uppercase fs-18 fw-500 text-main-green" data-aos="zoom-in-up">
                <BsFillCircleFill size={8} className="me-1" /> WANT TO MEET OUR
                TEAM
              </p>
              <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" data-aos="zoom-in-up">
                The superstar bheind
                <span className="text-main-green"> Growpital</span>
              </h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center pt-5">
            <Col xs={12} md={12} lg={6} className="text-center text-md-start" data-aos="zoom-in-up">
              <RangeProgressBar />
            </Col>
            <Col xs={12} md={12} lg={6} className="text-center text-md-start" data-aos="zoom-in-up">
              <TotalInvestment/>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center mt-5 mt-md-4">
              <ButtonStar />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center">
              <p className="text-uppercase fs-18 fw-500 text-main-green" data-aos="zoom-in-up">
                <BsFillCircleFill size={8} className="me-1" /> HAVE QUATIONS YOU
                WANT TO ASK?
              </p>
              <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" data-aos="zoom-in-up">
                Connect with us & get all your answers
              </h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-strech pt-5">
            <Col xs={12} md={12} lg={5} className="text-center text-md-start">
              <p className="fs-26 fs-sm-22 fw-500 text-white mb-5" data-aos="zoom-in-up">
                Doubts, questions, queries and suggensions? We here for you
              </p>
              <ul className="list-unstyled fs-20 fs-sm-18 fw-500 text-white text-start" data-aos="zoom-in-up">
                <li className="d-flex justify-content-start mt-3">
                  <BsCheck2Square className="text-main-gold mt-2 me-3" />{" "}
                  connect with os over call or whatsapp
                </li>
                <li className="d-flex justify-content-start mt-3">
                  <BsCheck2Square className="text-main-gold mt-2 me-3" />{" "}
                  Available for you, even on sundays
                </li>
                <li className="d-flex justify-content-start mt-3">
                  <BsCheck2Square className="text-main-gold mt-2 me-3" /> Get
                  your answers instantly
                </li>
              </ul>
            </Col>
            <Col
              xs={12}
              md={12}
              lg={7}
              className="text-center d-flex justify-content-center align-items-center"
            >
              <Row className="mt-5 mt-lg-0">
                <Col xs={12} className="d-grid gap-4">
                  <Button
                    variant="dark"
                    size="lg"
                    className="px-3 px-md-5 py-3"
                    data-aos="zoom-in-up"
                  >
                    <img src={Call24} className="img-fluid me-3" alt="" />{" "}
                    Schedule a call
                  </Button>
                  <Button
                    variant="dark"
                    size="lg"
                    className="px-3 px-md-5 py-3"
                    data-aos="zoom-in-up"
                  >
                    <img src={WhatsapIcon} className="img-fluid me-3" alt="" />{" "}
                    Message on Whatsapp
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center">
              <p className="text-uppercase fs-18 fw-500 text-main-green" data-aos="zoom-in-up">
                <BsFillCircleFill size={8} className="me-1" /> WANT TO MEET OUR
                TEAM ?
              </p>
              <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" data-aos="zoom-in-up">
                The superstar behind{" "}
                <span className="text-main-green">Growpital</span>
              </h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-start pt-5">
            <Superstars />
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center">
              <p className="text-uppercase fs-18 fw-500 text-main-green" data-aos="zoom-in-up">
                <BsFillCircleFill size={8} className="me-1" /> HOW TO GET
                STARTED?
              </p>
              <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" data-aos="zoom-in-up">
                Happy to boast a <span className="text-main-green"> 4.7 rating</span>  by customers
              </h2>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="d-flex justify-content-center align-items-start pt-5">
            <Col className="text-center text-md-start" data-aos="zoom-in">
              <TestiSlider />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-start">
            <Col xs={12} md={12} lg={6} className="text-center text-lg-start">
              <p className="text-uppercase fs-18 fw-500 text-main-green" data-aos="zoom-in-up">
                <BsFillCircleFill size={8} className="me-1" /> ASK ANY QUESTIONS
              </p>
              <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" data-aos="zoom-in-up">
                Any questions? We got you.
              </h2>
              <p className="text-white fw-400 fs-18 py-4" data-aos="zoom-in-up">
                Yet bed any for assistance indulgence unpleasing. Not thoughts
                all exercise blessing. Indulgence way everything joy alteration
                boisterous the attachment.
              </p>
              <a href="/" className="fs-16 fw-700 text-white">More FAQs</a>
              <div className="mt-5">
              <ButtonStar />
              </div>
            </Col>
            <Col xs={12} md={12} lg={6} className="text-center text-lg-end mt-5 mt-lg-0">
              <div className="faq-accordian" data-aos="zoom-in-up">
              <Accordian Display_Sr_No="text-main-gold me-3 d-none"/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Home;
