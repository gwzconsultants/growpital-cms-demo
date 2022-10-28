import React from "react";
import { Col, Container, Image, Row, Button, Card } from "react-bootstrap";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { BsArrowRight, BsFillCircleFill, BsCheck2Square, BsFillStarFill } from "react-icons/bs";
// import mobile from "../assets/img/mobile.png";
import zero from "../assets/img/zero.png";
import CardDark from "../components/CardDark";
import CardCounter from "../components/CardCounter";
import Accordian from "../components/Accordian";
import Superstars from "../components/Superstars";
import ButtonStar from "../components/ButtonStar";
import TestiSlider from "../components/TestiSlider";
import RangeProgressBar from "../components/RangeProgressBar";
// import TotalInvestment from "../components/TotalInvestment";
import HeroIcon1 from "../assets/img/2.png";
import HeroIcon2 from "../assets/img/1.png";
import HeroIcon3 from "../assets/img/3.png";
// import HeroIcon4 from "../assets/img/15.png";
// import HeroIcon5 from "../assets/img/16.png";
import CardIcon1 from "../assets/img/4.png";
import CardIcon2 from "../assets/img/5.png";
import CardIcon3 from "../assets/img/9.png";
// import gif1 from "../assets/img/Story_02_2.gif"
import telegram from "../assets/img/kisspng-telegram-logo-computer-icons-scalable-vector-graph-png-telegram-transparent-5ab08470747435.671490841521517680477.png"

// import Icon1 from "../assets/img/dark-card-icon.png";
import SingupBtn from "../layout/SingupBtn";
import AccordingQue from "../components/AccordingQue";
import { callImg, homepage,chatIcon } from "../assets/img/contactimg";
import { TopIcon1, TopIcon2 } from "../assets/img/contactimg";
import { Typewriter } from "react-simple-typewriter";


const Home = () => {


  return (
    <>
      <Header />
      <SingupBtn />

      <section className="hero-area py-5 ">
        <Container>
          <Row className="d-flex justify-content-center align-items-center py-0  mt-0 " >
            <Col xs={12} md={12} lg={7} className="text-center text-md-start">
              <div className="bg-shark3 rounded p-1 p-md-2 d-inline-block mb-3 ">
                <h5 className="text-main-gradient fw-500 fs-22 fs-sm-18 mb-0">
                  <Image src={TopIcon2} className="img-fluid me-2" alt="" />
                  Agriculture Investments
                  <Image src={TopIcon1} className="img-fluid ms-2" alt="" />
                </h5>
              </div>
              <h1 className="text-white fw-600 display-5 mb-3 mb-md-4">
                Invest and earn assured returns  <span className="text-main-green pe-2"> <BsArrowRight /></span>
                <span className="text-main-green ">
                <Typewriter
            words={['Tax Free', 'Regular Payout', 'Fixed Payout']}
            loop={3}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={3000}
          />
                </span>
              </h1>
              <p className="text-white fw-400 fs-24 my-3 mb-md-4 py-2">
                Diversify your portfolio with safe agri-investments.
              </p>
              <div className="px-5 px-lg-0">
                <Row>
                  <Col md={4} lg={4}>
                    <Card className="darkcard mb-3 mb-md-4 p-0 rounded text-start text-white">
                      <Card.Body className="m-1 bg-dark-gradient rounded px-4 py-5 py-md-4">
                        <div className="darkcard-icon p-3 mx-auto mb-4 mb-md-2 d-flex justify-content-center align-items-center">
                          <Image src={HeroIcon1} className="img-fluid" alt="" />
                        </div>
                        <Card.Title className="fw-400 text-center fs-20 mb-0 pt-2">
                          Grow your {" "}
                          <span className="fw-600 text-main-gold">capital</span>


                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} lg={4}>
                    <Card className="darkcard mb-3 mb-md-4 p-0 rounded text-start text-white">
                      <Card.Body className="m-1 bg-dark-gradient rounded px-4 py-5 py-md-4">
                        <div className="darkcard-icon p-3 mx-auto mb-4 mb-md-2 d-flex justify-content-center align-items-center">
                          <Image src={HeroIcon2} className="img-fluid" alt="" />
                        </div>
                        <Card.Title className="fw-400 text-center fs-20 mb-0 pt-2">
                          <span className="fw-600 text-main-gold">10%</span> to{" "}
                          <span className="fw-600 text-main-gold">17%</span>{" "}
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
                          {/* <span className="fw-600 text-main-gold">#1</span>{" "} */}
                          Managed {" "}<span className="fw-600 text-main-gold">farm</span> {" "}projects
                        </Card.Title>

                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>

              <ButtonStar />
              <div className="mx-2 py-1">
                <p className="mb-1 text-md-start  text-center ">
                  <span className="text-white fs-18 me-2">Rated </span>

                  <BsFillStarFill size={18} className="text-sunglow me-1" />
                  <BsFillStarFill size={18} className="text-sunglow me-1" />
                  <BsFillStarFill size={18} className="text-sunglow me-1" />
                  <BsFillStarFill size={18} className="text-sunglow me-1" />
                  <BsFillStarFill size={18} className="text-sunglow me-1" />

                  <span className="text-white fs-18 ms-1">4.7 by user</span>
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              md={12}
              lg={5}
              className="text-center text-lg-end mt-lg-0 mt-md-5 mt-5 p-3 mb-4"

            >
              {/* <img src="BrowserPreview_tmp.gif?1666269773" className="img-fluid"  alt=""/> */}
              <Image src={homepage} className="img-fluid rounded-4" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 " >
        <Container>
          <Row className="d-flex justify-content-center align-items-center pb-0 ">
            <Col xs={12} md={12} lg={6} className="text-center text-md-start ">
              <p className="text-uppercase fs-18 fw-500 text-main-green" >
                <BsFillCircleFill size={8} className="me-1" /> WHAT ARE
                GROWPITAL INVESTMENTS LIKE?
              </p>
              <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" >
                Its like a{" "}
                <span className="text-main-green">
                <Typewriter
            words={['Fixed Deposit', 'Mutual Fund']}
            loop={2}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={3000}
          /></span>{" "}
               
                much better one!
              </h2>
              <div className="d-flex justify-content-md-start justify-content-center align-items-center my-5 my-md-5 py-4 py-md-4" >
                {/* <h2 className="display-1 fw-900 text-main-gold mb-0">0</h2> */}
                <Image src={zero} className="img-fluid" alt="" />
                <div className="text-start">
                  <p className="fs-24 fs-sm-18 fw-400 text-white ms-2 mb-5">
                    Exit Fee
                  </p>
                  <p className="fs-24 fs-sm-18 fw-400 text-white ms-4 mb-5">Delay</p>
                  <p className="fs-24 fs-sm-18 fw-400 text-white ms-2 mb-0">
                    Brokerage
                  </p>
                </div>
              </div>
              <div className="mb-2">
                <ButtonStar />
              </div>
            </Col>
            <Col xs={12} md={12} lg={6} className="text-center text-md-end mt-5 mt-md-5 mt-lg-0 position-relative">
              <Row className="d-flex justify-content-center align-items-center ">
                <Col md={6}>
                  <CardDark
                    Cardicon={CardIcon1}
                    Title="Assured Growth "
                    SubTitle="We provide much higher returns than FD and several bonds."

                  />
                  <CardDark
                    Cardicon={CardIcon3}
                    Title="Safe & Secure"
                    SubTitle="Sales contracts, crop insurance & professional farming, ensure assured returns."
                  />
                </Col>
                <Col md={6}>
                  <CardDark
                    Cardicon={CardIcon2}
                    Title="Consistent Returns"
                    SubTitle="Free from Stock market volatality. Quaterly payouts in your wallet."
                  />
                </Col>
                {/* <div>
                <img src={ tractormain} alt="" className="position-absolute main-gift-tractor" />
              </div> */}
              </Row>
            </Col>
          </Row>

        </Container>
      </section>


      <section className="py-5 d-flex justify-content-center align-items-center bg-charade">
        <Container className="">
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center">
              <p className="text-uppercase fs-18 fw-500 text-main-green" >
                <BsFillCircleFill size={8} className="me-1" /> WHAT ARE WE PROUD
                ABOUT?
              </p>
              <p className="text-white fw-600 fs-24 mb-3 mb-md-4" >
                Agriculture Sector is growing rapidly. Join us in the fast
                growing industry
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center ">
            <CardCounter />
            <Col md={12} className="text-center mt-5 mt-md-0" >
              <ButtonStar />
              <div className="pt-3">
                <p className="text-white fw-600 fs-24 fs-sm-16  mb-3 mb-md-4" >
                  Subscribed 100% in 6 hours on  <a href='tel:+91-7231844488' style={{ color: "#07e57d", textDecoration: "none" }}> Tyke Invest</a>
                </p>
                <p className="text-white fw-600 fs-24 fs-sm-16 mb-3 mb-md-4" >
                  Trusted by investor community spread across <span style={{ color: "#07e57d" }}>10+ </span> countries and <span style={{ color: "#07e57d" }}>150+ </span> cities
                </p>
              </div>
            </Col>
          </Row>

        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center">
              <p className="text-uppercase fs-18 fw-500 text-main-green" >
                <BsFillCircleFill size={8} className="me-1" /> HOW TO GET
                STARTED?
              </p>
              <h2 className="text-white fw-600 display-6 mb-3 mb-md-3" >
                Start investing in{" "}
                <span className="text-main-green">4 simple steps</span>
              </h2>
            </Col>
          </Row>
          <Row className="d-flex  pt-3">
            <Col className="text-center text-md-end" >
              <Accordian Display_Sr_No="text-main-gold me-3" />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center mt-5 mt-md-5" >
              <ButtonStar />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5" id="calci">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center">
              <p className="text-uppercase fs-18 fw-500 text-main-green" >
                <BsFillCircleFill size={8} className="me-1" />CALCULATE YOUR RETURNS ON INVESTMENT
              </p>
              <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" >
                Estimate your
                <span className="text-main-green">  Earnings </span>
                before Investing
              </h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center px-md-5  align-items-center pt-2 " >
            <Col xs={12} md={12} lg={12} className="text-center" style={{ maxWidth: "40rem" }}  >
              <RangeProgressBar />
            </Col>
            {/* <Col xs={12} md={12} lg={6} className="text-center text-md-start" >
              <TotalInvestment />
            </Col> */}
          </Row>
          <Row>
            <Col md={12} className="text-center mt-5 mt-md-4">
              <ButtonStar />{" "}
              <div>
              <a href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view" className="fs-16 fw-700 text-white text-center py-2">Know more</a>
              </div>
            </Col>
          </Row>
          
        </Container>
      </section>

      <section className="py-5 bg-charade">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center">
              <p className="text-uppercase fs-18 fw-500 text-main-green" >
                <BsFillCircleFill size={8} className="me-1" /> HAVE QUESTIONS?
              </p>
              <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" >
                Connect with us & get your answers
              </h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-strech pt-5">
            <Col xs={12} md={12} lg={5} className="text-center text-md-start">
              <p className="fs-26 fs-sm-22 fw-500 text-white mb-5" >
                Curiosity is one of the greatest secrets of Success.
              </p>
              <ul className="list-unstyled fs-20 fs-sm-18 fw-500 text-white text-start" >

                <li className="d-flex justify-content-start mt-3">
                  <BsCheck2Square className="text-main-gold mt-2 me-3" />{" "}
                  Personalised discussion to clear all your queries.
                </li>

                <li className="d-flex justify-content-start mt-3">
                  <BsCheck2Square className="text-main-gold mt-2 me-3" />{" "}
                  Looking for quick answers? Chat with us now.
                </li>
                <li className="d-flex justify-content-start mt-3">
                  <BsCheck2Square className="text-main-gold mt-2 me-3" />
                  Learn and grow with your peers.
                </li>
              </ul>
            </Col>
            <Col
              xs={12}
              md={12}
              lg={7}
              className="text-center d-flex justify-content-md-end justify-content-center align-items-center"
            >
              <Row className="mt-5 mt-lg-0 pe-md-5 me-md-5">
                <Col xs={12} className="d-grid gap-4">
                  <div>
                    <a href="https://koalendar.com/e/know-growpital-pc">
                      <Button
                        variant="dark"
                        size="lg"
                        className="px-3 px-md-5 py-3 w-100"


                      >
                        <img src={callImg} className="img-fluid me-3 bg-yellow" alt="" style={{ width: "3rem" }} />{" "}
                        Call
                      </Button>
                    </a>
                  </div>

                  <div>
                    <a href="#sibConversationsExpanded">
                      <Button
                        variant="dark"
                        size="lg"
                        className="px-3 px-md-5 py-3 w-100"

                      >
                        <img src={chatIcon} className="img-fluid me-3 " style={{width:"3rem"}}  alt="" />{" "}
                        Chat
                      </Button>
                    </a>
                  </div>

                  <div>
                    <a href="https://t.me/growpitalofficial">
                      <Button
                        variant="dark"
                        size="lg"
                        className="px-3 px-md-5 py-3"

                      >
                        <img src={telegram} className="img-fluid me-3" style={{ maxWidth: "50px" }} alt="" />{" "}
                        Community
                      </Button>
                    </a>
                  </div>
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
              <p className="text-uppercase fs-18 fw-500 text-main-green" >
                <BsFillCircleFill size={8} className="me-1" />  MEET OUR
                TEAM
              </p>
              <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" >
                The spirit behind{" "}
                <span className="text-main-green">Growpital</span>
              </h2>
            </Col>
          </Row>

          <Superstars />

        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center">
              <p className="text-uppercase fs-18 fw-500 text-main-green" >
                <BsFillCircleFill size={8} className="me-1" /> What our investors say about us!
              </p>
              <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" >
                Happy to boast a <span className="text-main-green"> 4.7 rating</span>  by customers
              </h2>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="d-flex justify-content-center align-items-start pt-3">
            <Col className="text-center text-md-start">
              <TestiSlider />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-start">
            <Col xs={12} md={12} lg={6} className="text-center text-lg-start">
              <p className="text-uppercase fs-18 fw-500 text-main-green text-uppercase" >
                <BsFillCircleFill size={8} className="me-1" />Join us on our Telegram channel
              </p>
              <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" >
                Be part of our community!
              </h2>
              <p className="text-white fw-400 fs-18 py-4" >
                Get content straight to you.
                Be the first to learn the news about new features and product updates. What is going on in agri industry, promotions and more.
              </p>
              {/* <div className="mt-5 d-none d-md-block "> */}
                <div>
                  <a href="https://t.me/growpitalofficial">
                    <Button
                      variant="dark"
                      size="lg"
                      className="px-3 px-md-5 py-3"

                    >
                      <img src={telegram} className="img-fluid me-3" style={{maxWidth: "50px" }} alt="" />{" "}
                      Join Telegram Channel
                    </Button>
                  </a>
                </div>
              {/* </div> */}
            </Col>
            <Col xs={12} md={12} lg={6} className="  mt-5 mt-lg-0">
              <div className="faq-accordian text-center text-lg-end"  >
                <AccordingQue Display_Sr_No="text-main-gold me-3 d-none" />
              </div>
              <a href="/faqs" className="fs-16 fw-700 text-white text-start">More FAQs</a>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Home;
