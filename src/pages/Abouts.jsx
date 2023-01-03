import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsFillCircleFill } from 'react-icons/bs'
import { about_gif } from '../assets/img/contactimg'
// import { faqsimg1, faqspage } from '../assets/img/contactimg'
import AboutCard from '../components/About_Component/AboutCard'
import SuperstarsAbout from '../components/About_Component/SuperStartAbout'
import LogoSlider from '../components/About_Component/LogoSlider'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import AboutSecondSection from '../components/About_Component/AboutSecondSection'
import AboutHowItWork from '../components/About_Component/AboutHowItWork'
// import contactImg from "../assets/img/Rectangle 71.jpg"
// import { About_us_img, tractor } from "../assets/img/contactimg";
const Abouts = () => {

  return (
    <>
      <Header />
      <div className='about'>
        {/* <section className='mb-md-5 mb-3  '  >
          <Container  >
            <Row >
              <Col>
                <div className='position-relative'>
                  <img src={About_us_img} alt="" className='w-100 h-auto mt-0' />
                  <div className='position-absolute  about-heading'>
                    <h1 className='fs-164 fw-bold about-text'>About us</h1>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}

        <section className='mb-md-5 mb-3 pt-3 text-start text-white' >
          <Container>
            <div>
              <Row>
                <Col md={6} data-aos="fade-up">
                  <p className="text-uppercase fs-18 fs-fm-16 fw-500 text-main-green pb-1 mb-1" > <BsFillCircleFill size={8} className="me-1" /> Diversify your investment portfolio with farm projects </p>
                  <h1 className='fw-bold fs-48 content-text '>Farm investments demystified!</h1>
                  <p>
                    Growpital was incepted to radically democratize farm investment by providing access to high profit opportunities to retail investors. We Firmly believe that agriculture is a safe, stable and attractive long-term investment for everyone, if invested with right projects.
                  </p>
                  <a href="https://app.growpital.com/signup">     <button className="main-btn maincolor mb-3 my-3 fs-5">Get Started</button> </a>
                </Col>
                <Col md={6} className="px-4" data-aos="fade-up">
                  <img src={about_gif} alt="Farm GIF " className='img-fluid w-100' />
                  {/* <p>Farm GIF</p> */}
                </Col>
              </Row>

            </div>
          </Container>
        </section>

        <section className='mb-md-5 mb-3 ' id="how_it_works">
          <Container className='text-white'>
           <AboutSecondSection />
          </Container>
        </section>
        <section className='mb-md-3 mb-3'>
          <Container className='text-white'>
          
              <AboutCard />
          </Container>
        </section>
        <section className="pt-5 mb-md-4 mb-3" id="team">
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-center " >
                <p className="text-uppercase fs-18 fw-500 fs-fm-16 text-main-green pb-1 mb-1" data-aos="fade-up">
                  <BsFillCircleFill size={8} className="me-1" /> We are not just a team, we are a family
                </p>
                <h2 className="text-white fw-600 display-6 mb-0 mb-md-4 content-text" data-aos="fade-up">
                  Meet the spirit behind {" "}
                  <span className="text-main-green">Growpital</span>
                </h2>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-start py-5 pt-md-0 ">
              <SuperstarsAbout />
            </Row>
          </Container>
        </section>
        <section className=" mb-md-5 mb-3">
          <Container>
           <AboutHowItWork />
          </Container>
        </section>
        <section className="bg-charade py-5 mb-md-5 mb-3" >
          <Container className="py-0 py-md-0">
            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-center" data-aos="fade-up">
                <p className="text-uppercase fs-18 fs-fm-16 fw-500 text-main-green pb-0 mb-0" >
                  <BsFillCircleFill size={8} className="me-1" /> We waited until we could do it right
                </p>
                <p className="text-white fw-600 fs-48 mb-3 mb-md-4 content-text" >
                  Meet our Portolio Partners
                </p>
              </Col>
            </Row>
            <Row data-aos="fade-up">

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