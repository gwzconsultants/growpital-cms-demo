import React from "react";
import { Col, Container, Image, Row, Nav } from "react-bootstrap";
import Logo from "../assets/img/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube, BsLinkedin, BsInstagram } from "react-icons/bs";
import upi from "../assets/img/upi.png"
const Footer = () => {
  return (
    <>
      <footer className="py-4  margin-top">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <Image src={Logo} className="img-fluid" alt="" />
              <p className="text-white fs-18 fs-sm-22 fw-400 my-3">
                Learn To Love Growth And Change And You Will Be A Success.
                Microsoft Patch
              </p>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h6 className="fs-22 fs-sm-24 mb-4 mb-md-3 mt-4 mt-md-0 fw-600 text-white">Growpital</h6>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/abouts">About Us</Nav.Link>
                <Nav.Link href="/abouts#how_it_works" >How it works?</Nav.Link>
                <Nav.Link href="/abouts#team">Team</Nav.Link>
                <Nav.Link href="/blog">Blogs</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </Nav>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h6 className="fs-22 fs-sm-24 mb-4 mb-md-3 mt-4 mt-md-0 fw-600 text-white">Important Links</h6>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/#calci">Returns Calculator</Nav.Link>
                <Nav.Link href="/faqs">FAQs</Nav.Link>
                <Nav.Link href="https://app.growpital.com/login">Login / Signup</Nav.Link>
                <Nav.Link href="/terms">Terms of Service</Nav.Link>
                <Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
              </Nav>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h6 className="fs-22 fs-sm-24 mb-4 mb-md-3 mt-4 mt-md-0 fw-600 text-white">Contact us</h6>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link eventKey="disabled" disabled>+91-7231844488</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>info@growpital.com</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                  S-2, V Cube Lavender, Plot 166A, Vishvesariya Nagar, Gopalpura
                  Bypass, Jaipur RJ 302018{" "}
                </Nav.Link>
              </Nav>
              <Nav className="justify-content-start " activeKey="/home">
                <Nav.Item className="pe-4 foot-icon ">
                  <Nav.Link ><FaFacebookF className="text-indigo "/></Nav.Link>
                </Nav.Item>
                <Nav.Item className="pe-4 foot-icon">
                  <Nav.Link ><BsYoutube className="text-red "/></Nav.Link>
                </Nav.Item>
                <Nav.Item className="pe-4 foot-icon">
                  <Nav.Link ><BsLinkedin className="text-indigo foot-icon"/></Nav.Link>
                </Nav.Item>
                <Nav.Item className="pe-4 foot-icon">
                  <Nav.Link ><BsInstagram className="text-darkpink"/></Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>

        {/* <div className="bg-shark2 py-2 mt-5">
          <Container>
            <Row>
              <Col>
                <Nav className="flex-column flex-sm-row justify-content-between w-60" activeKey="/home">
                  <Nav.Item className="py-2">
                    <Nav.Link>Investors</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="py-2">
                    <Nav.Link href="/privacy-policy"> Privacy Policy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="py-2">
                    <Nav.Link href="/terms">Terms of Use</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="py-2">
                    <Nav.Link>Disclaimer</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="py-2">
                    <Nav.Link> Intellectual Policy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="py-2">
                    <Nav.Link> Sitemap</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Container>
        </div> */}
        <Container>
          <Row className="d-flex justify-content-between text-center text-lg-start pt-5">
            {/* <Col md={12}>
            <p className="fw-700 fs-24 text-white mb-0">Supported Payment Methods</p>
            <img src={upi} className="img-fluid" alt="" />
            </Col> */}
            <Col lg={9}>
              <p className="text-white fw-400 mb-3 mb-md-0 pt-0"> © Copyright 2021-2022 growpital.com. All Rights Reserved.</p>
            </Col>
            <Col lg={3} className="text-center text-lg-end pt-3 pt-lg-0">
              <p className="text-white fw-400 mb-3 mb-md-0 pt-0">Made with ❤ in India.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
