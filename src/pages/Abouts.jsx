import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsFillCircleFill } from 'react-icons/bs'
import { faqsimg1, faqspage } from '../assets/img/contactimg'
import AboutPage from '../components/AboutPage'
import SuperstarsAbout from '../components/SuperStartAbout'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

const Abouts = () => {
  return (
    <>
      <Header />
      <div className='about'>
        <section className='mb-5' >
          <Container fluid >
            <Row >
              <Col>
                <div className='position-relative'>
                  <img src={faqspage} alt="" className='img-fluid mt-5' />
                  <div className='position-absolute top-50 about-heading'>
                    <h1 className='fs-164 display-2 fw-bold'>About us</h1>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='mb-5 text-start text-white'>
          <Container>
            <div>
              <p className="fs-md-24 fs-16 text-main-green">We are leading in agriculture investment </p>
              <h1 className='fw-bold fs-md-48 fs-22'>What is Growpital</h1>
              <p>
                We open up tax free passive earning avenues for you while increasing income and productivity of agriculture sector.<br />
                Investments in Alternative asset classes was previously reserved only for institutions and the ultra-wealthy. Sub-segmenting it to Agriculture, it is pretty niche and popular as an investment class. We want to provide opportunity to own fraction of Agriculture asset classes and participate in passive income generation for yourself that were typically off-limits.<br />
                Think of us a fund, but for agri projects where the allocation is done on the basis of parameters which fits to agriculture like crop tenure, harvest cycles, insurance, Government MSP, crop segment, crop type etc
              </p>
              <button className="main-btn maincolor mb-3 my-3 fs-5">Get Started</button>

            </div>
          </Container>
        </section>

        <section>
          <Container className='text-white mb-3'>
            <Row className=''>

              <Col md={6} className="pe-5 text-md-start mb-3">
                <p className='fw-bold fs-md-48 fs-22 text-md-start  text-center'>Company Objective</p>
                <p className='text-center text-md-start px-2 ms-1'>Growpital was incepted to radically democratize farm investment by providing access to high profit opportunities to retail investors. We Firmly believe that agriculture is a safe, stable and attractive long-term
                  investment for everyone, if invested with right projects.</p>
              </Col>
              <Col md={6} className="ps-md-5 text-center text-md-end">
                <img src={faqsimg1} alt="" className='img-fluid  h-75' />
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container className='text-white mb-5'>
            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-center">
                <p className="text-uppercase fs-18 fw-500 text-main-green" >
                  <BsFillCircleFill size={8} className="me-1" /> WANT TO MEET OUR TEAM ?
                </p>
                <p className="text-white fw-600 fs-md-48 fs-22 mb-3 mb-md-4" >
                  Why Choose Growpital
                </p>
              </Col>
            </Row>
            <Row className="pt-5">
              <AboutPage />
            </Row>
          </Container>
        </section>
        <section className="py-5">
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-center">
                <p className="text-uppercase fs-18 fw-500 text-main-green" >
                  <BsFillCircleFill size={8} className="me-1" /> WANT TO MEET OUR
                  TEAM ?
                </p>
                <h2 className="text-white fw-600 display-6 mb-3 mb-md-4">
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
        <section className="bg-charade py-5" >
          <Container className="py-5 py-md-5">
            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-center">
                <p className="text-uppercase fs-18 fw-500 text-main-green" >
                  <BsFillCircleFill size={8} className="me-1" /> WANT TO MEET OUR TEAM ?
                </p>
                <p className="text-white fw-600 fs-48 mb-3 mb-md-4" >
                  Marquee Customers
                </p>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center mb-4">

              <Col md={12} className="text-center mt-5 mt-md-0" data-aos="zoom-in-up">

              </Col>
            </Row>
          </Container>
        </section>

      </div>
      <Footer />
    </>
  )
}

export default Abouts