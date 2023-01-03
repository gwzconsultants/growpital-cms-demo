import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { BsFillCircleFill } from "react-icons/bs";
// import mobile from "../assets/img/mobile.png";
// import zero from "../assets/img/zero.png";
// import CardDark from "../components/CardDark";
// import CardCounter from "../components/Home_Component/counter_Section/CardCounter";
import Accordian from "../components/Home_Component/fourstep/Accordian";
// import Superstars from "../components/Superstars";
import ButtonStar from "../components/ButtonStar";
import TestiSlider from "../components/Home_Component/testimonial/TestiSlider";
import RangeProgressBar from "../components/Home_Component/calculator/RangeProgressBar";
// import TotalInvestment from "../components/TotalInvestment";
// import HeroIcon1 from "../assets/img/2.png";
// import HeroIcon2 from "../assets/img/1.png";
// import HeroIcon3 from "../assets/img/3.png";
// // import HeroIcon4 from "../assets/img/15.png";
// // import HeroIcon5 from "../assets/img/16.png";
// import CardIcon1 from "../assets/img/4.png";
// import CardIcon2 from "../assets/img/5.png";
// import CardIcon3 from "../assets/img/9.png";
// // import gif1 from "../assets/img/Story_02_2.gif"
// import telegram from "../assets/img/kisspng-telegram-logo-computer-icons-scalable-vector-graph-png-telegram-transparent-5ab08470747435.671490841521517680477.png"

// import Icon1 from "../assets/img/dark-card-icon.png";
import SingupBtn from "../layout/SingupBtn";
// import AccordingQue from "../components/Home_Component/AccordingQue";
// import { callImg, homepage, chatIcon } from "../assets/img/contactimg";
// import { TopIcon1, TopIcon2 } from "../assets/img/contactimg";
// import { Typewriter } from "react-simple-typewriter";
import SuperStars from "../components/Home_Component/superstart home/SuperStarsHome";
import ServiceCard from "../components/Home_Component/service card/ServiceCard";
import HomePageIntro from "../components/Home_Component/home_page_intro/HomePageIntro";
import HomeSecondSection from "../components/Home_Component/home-second-section/HomeSecondSection";
import CounterSection from "../components/Home_Component/counter_Section/CounterSection";
import HaveQue from "../components/Home_Component/have que/HaveQue";
import JoinTelegram from "../components/Home_Component/home_last_Section/JoinTelegram";




const Home = () => {
  (function (h, o, t, j, a, r) {
    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
    h._hjSettings = { hjid: 3275465, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script'); r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

  return (
    <>

      <Header />
      <SingupBtn />
      <section className=" py-md-5 pt-3 pb-5  "  >
        <Container>
          <HomePageIntro />
        </Container>
      </section>

      <section className="py-5 " >
        <Container>
          <HomeSecondSection />
        </Container>
      </section>


      <section className="py-5 d-flex justify-content-center align-items-center bg-charade">
        <Container className="">

          <CounterSection />
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center" data-aos="fade-up">
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
            <Col className="text-center text-md-end" data-aos="fade-up" >
              <Accordian Display_Sr_No="text-main-gold me-3" />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center mt-5 mt-md-5" data-aos="fade-up">
              <ButtonStar />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-3" >
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center" data-aos="fade-up">
              <p className="text-uppercase fs-18 fw-500 text-main-green" >
                <BsFillCircleFill size={8} className="me-1" />WHICH PLAN WHOULD YOU LIKE TO INVEST IN ?
              </p>
              <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" >
                Invest in our
                <span className="text-main-green">   high return </span>
                plans
              </h2>
            </Col>
          </Row>
          {/* <Row className=" pt-2 " > */}
          <Row className="d-flex justify-content-center px-md-5  align-items-center pt-2 " >

            <ServiceCard />

          </Row>


        </Container>
      </section>

      <section className="py-5" id="calci">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center" data-aos="fade-up">
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
          <Row className=" pt-2 " >
            {/* <Row className="d-flex justify-content-center px-md-5  align-items-center pt-2 " > */}

            <RangeProgressBar />


          </Row>
          <Row>
            <Col md={12} className="text-center mt-5 mt-md-4" data-aos="fade-up">
              <ButtonStar />{" "}

            </Col>
          </Row>

        </Container>
      </section>

      <section className="py-5 bg-charade">
        <Container>
      <HaveQue />
        </Container>
      </section>

      <section className="py-md-5 ">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-center" data-aos="fade-up" data-aos-offset="500">
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

          {/* <Superstars /> */}
          <SuperStars />
        </Container>
      </section>

      <section className="py-5">
        <Container fluid>
         
              <TestiSlider />
        
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <JoinTelegram />
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Home;
