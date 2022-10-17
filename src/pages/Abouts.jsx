import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsFillCircleFill } from 'react-icons/bs'
import { faqsimg1, faqspage } from '../assets/img/contactimg'
import AboutPage from '../components/AboutPage'
import LogoSlider from '../components/LogoSlider'
import SuperstarsAbout from '../components/SuperStartAbout'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
// import contactImg from "../assets/img/Rectangle 71.jpg"
const Abouts = () => {
  return (
    <>
      <Header />
      <div className='about'>
        <section className='mb-md-5 mb-3' >
          <Container fluid >
            <Row >
              <Col>
                <div className='position-relative'>
                  <img src={faqspage} alt="" className='w-100 h-auto mt-5' />
                  <div className='position-absolute  about-heading'>
                    <h1 className='fs-164 fw-bold about-text'>About us</h1>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='mb-md-5 mb-3 text-start text-white'>
          <Container>
            <div>
            <p className="text-uppercase fs-18 fs-fm-16 fw-500 text-main-green pb-1 mb-1" > <BsFillCircleFill size={8} className="me-1" />We are leading in agriculture investment </p>
              <h1 className='fw-bold fs-48 content-text '>What is Growpital</h1>
              <p>
                We open up tax free passive earning avenues for you while increasing income and productivity of agriculture sector.<br />
                Investments in Alternative asset classes was previously reserved only for institutions and the ultra-wealthy. Sub-segmenting it to Agriculture, it is pretty niche and popular as an investment class. We want to provide opportunity to own fraction of Agriculture asset classes and participate in passive income generation for yourself that were typically off-limits.<br />
                Think of us a fund, but for agri projects where the allocation is done on the basis of parameters which fits to agriculture like crop tenure, harvest cycles, insurance, Government MSP, crop segment, crop type etc
              </p>
              <button className="main-btn maincolor mb-3 my-3 fs-5">Get Started</button>

            </div>
          </Container>
        </section>

        <section className='mb-md-5 mb-3'>
          <Container className='text-white'>
            <Row className='d-flex align-items-center'>

              <Col md={6} className="pe-5 text-md-start mb-3">
              <p className="text-uppercase fs-18 fs-fm-16 fw-500 text-main-green text-md-start  text-center pb-1 mb-1" >
                  <BsFillCircleFill size={8} className="me-1" /> WANT TO MEET OUR TEAM ?
                </p>
                <p className='fw-bold fs-48  text-md-start  text-center content-text'>Company Objective</p>
                <p className='text-center text-md-start ms-1'>Growpital was incepted to radically democratize farm investment by providing access to high profit opportunities to retail investors. We Firmly believe that agriculture is a safe, stable and attractive long-term
                  investment for everyone, if invested with right projects.</p>
              </Col>
              <Col md={6} className="ps-md-5 text-center text-md-end py-5 px-5">
                <img src={faqsimg1} alt="" className='img-fluid px-5' />
              </Col>
            </Row>
          </Container>
        </section>
        <section className='mb-md-5 mb-3'>
          <Container className='text-white'>
            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-center">
                <p className="text-uppercase fs-18 fs-fm-16 fw-500 text-main-green pb-1 mb-1" >
                  <BsFillCircleFill size={8} className="me-1" /> WANT TO MEET OUR TEAM ?
                </p>
                <p className="text-white fw-600 display-6 mb-3 mb-md-4 content-text" >
                  Why Choose Growpital
                </p>
              </Col>
            </Row>
            <Row className="pt-5">
              <AboutPage />
            </Row>
          </Container>
        </section>
        <section className="py-5 mb-md-5 mb-3">
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-center">
                <p className="text-uppercase fs-18 fw-500 fs-fm-16 text-main-green pb-1 mb-1" >
                  <BsFillCircleFill size={8} className="me-1" /> WANT TO MEET OUR
                  TEAM ?
                </p>
                <h2 className="text-white fw-600 display-6 mb-3 mb-md-4 content-text">
                  The superstar behind{" "}
                  <span className="text-main-green">Growpital</span>
                </h2>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-start pt-5">
              <SuperstarsAbout />
            </Row>
          </Container>
        </section>
        <section className="bg-charade py-5 mb-md-5 mb-3" >
          <Container className="py-5 py-md-5">
            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-center">
                <p className="text-uppercase fs-18 fs-fm-16 fw-500 text-main-green pb-1 mb-1" >
                  <BsFillCircleFill size={8} className="me-1" /> WANT TO MEET OUR TEAM ?
                </p>
                <p className="text-white fw-600 fs-48 mb-3 mb-md-4 content-text" >
                  Marquee Customers
                </p>
              </Col>
            </Row>
            <Row >

              <LogoSlider />
            </Row>
          </Container>
        </section>

      </div>
      <Footer />
    </>
  )
}

export default Abouts