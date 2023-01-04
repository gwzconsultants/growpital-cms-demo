import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row, Nav } from "react-bootstrap";
import Logo from "../assets/img/newlogo.png";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube, BsLinkedin, BsInstagram, BsWhatsapp, BsTelegram } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFooter, fetchFooterCategory } from "../redux/footer/FooterSlice";
import { CircularProgress } from "@mui/material";

const Footer = () => {
  let currentRoute = useLocation().pathname;

  const { loading, footer, footer_category, error } = useSelector((state) => ({ ...state.Footer }))
  const [modifiedFooter, setModifiedFooter] = useState([])
  const [modifiedFooterData, setModifiedFooterDAta] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFooter())
    dispatch(fetchFooterCategory())
  }, [dispatch])
  
  useEffect(() => {
    if (footer_category) {
      const newfooter =  footer_category.map(item => {
        const { heading } = item.attributes
        
        if (footer) {
          const newfooter = footer.map(item => {
            const{title,url,} = item.attributes
            const{heading:category} = item.attributes.footer_category.data.attributes
        
            return {
              title,url ,category }
          })
          setModifiedFooterDAta(newfooter)
        } else { setModifiedFooterDAta([]) }
        return {
          heading ,

        }
      })
      setModifiedFooter(newfooter)
    } else { setModifiedFooter([]) }



  }, [footer]);

  if (loading) {
    return (<CircularProgress color="secondary" />)
  }
  if (!footer) {

    <h2>Not this cocktail are present</h2>


  }

  if (error) {
    return (<p className='text-white'>{error.message}</p>)
  }
  return (
    <>


      <footer className="py-4  margin-top">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <Image src={Logo} className="img-fluid w-75" alt="logo" />
              <p className="text-white fs-18 fs-sm-22 fw-400 my-3">
                We connect you to the world of agri investment.
              </p>
            </Col>
            {modifiedFooter.map((items) =>
            (<Col lg={3}>
              <h6 className="fs-22 fs-sm-24  mb-md-3 mt-4 mt-md-0 fw-600 text-white">{items.heading }</h6>
              <Nav defaultActiveKey="/home" className="flex-column">
                {modifiedFooterData.filter(value =>  value.category === items.heading  ).map((data)=>(
                <Nav.Link href="" className={currentRoute.includes(``)}>{data.title }</Nav.Link>
                 ))} 
                {/* <Nav.Link href="/about#how_it_works" className={currentRoute.endsWith("about#how_it_works")}>How it works?</Nav.Link>
                <Nav.Link href="/about#team" className={currentRoute.endsWith("/about#team")}> Team</Nav.Link>
                <Nav.Link href="/blog" className={currentRoute.endsWith("/blog")}>Blogs</Nav.Link>
                <Nav.Link href="/contact" className={currentRoute.endsWith("/contact")}>Contact Us</Nav.Link> */}
              </Nav>
            </Col>)
            )}
            {/* <Col xs={12} md={6} lg={3}>
              <h6 className="fs-22 fs-sm-24  mb-md-3 mt-4 mt-md-0 fw-600 text-white">Important Links</h6>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home#calci">Returns Calculator</Nav.Link>
                <Nav.Link href="/faqs">FAQs</Nav.Link>
                <Nav.Link href="https://app.growpital.com/signup?_gl=1*jb0rsu*_ga*MTM4OTAyNDk1Ny4xNjY1Mzg2MTc4*_ga_YFL1QCKH2V*MTY2NjI3NTU3Ny4xOC4xLjE2NjYyNzU1NzcuMC4wLjA.">Sign up/Login </Nav.Link>
                <Nav.Link href="/terms">Terms of Service</Nav.Link>
                <Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
              </Nav>
            </Col> */}
            {/* <Col xs={12} md={6} lg={3}>
              <h6 className="fs-22 fs-sm-24  mb-md-3 mt-4 mt-md-0 fw-600 text-white">Contact us</h6>
              <Nav defaultActiveKey="/home" className="flex-column">
                <a href='tel:+91-7231844488' style={{ color: "#07e57d", textDecorationColor: "#17171a" }}>+91-7231844488</a>
                <a href="mailto:info@growpital.com" style={{ color: "#07e57d", textDecorationColor: "#17171a" }}>info@growpital.com</a>
                <Nav.Link eventKey="disabled" disabled>
                  S-2, V Cube Lavender, Plot 166A, Vishvesariya Nagar, Gopalpura
                  Bypass, Jaipur RJ 302018{" "}
                </Nav.Link>
              </Nav>
              <Nav className="justify-content-start " activeKey="/home">
                <Nav.Item className="pe-4 foot-icon ">
                  <Nav.Link href=" https://www.facebook.com/growpital" ><FaFacebookF className="text-indigo " /></Nav.Link>
                </Nav.Item>
                <Nav.Item className="pe-4 foot-icon">
                  <Nav.Link href="https://www.youtube.com/channel/UC01PIsA1RufWKdul_yve63g" ><BsYoutube className="text-red " /></Nav.Link>
                </Nav.Item>
                <Nav.Item className="pe-4 foot-icon">
                  <Nav.Link href=" https://www.linkedin.com/company/growpital/"><BsLinkedin className="text-indigo foot-icon" /></Nav.Link>
                </Nav.Item>
                <Nav.Item className="pe-4 foot-icon">
                  <Nav.Link href="https://www.instagram.com/growpital/" ><BsInstagram className="text-darkpink" /></Nav.Link>
                </Nav.Item>
                <Nav.Item className="pe-4 foot-icon">
                  <Nav.Link href="https://wa.me/message/FCMTNVU3NDJOB1" ><BsWhatsapp className="text-darkgreen" /></Nav.Link>
                </Nav.Item>
                <Nav.Item className="pe-4 foot-icon">
                  <Nav.Link href="https://t.me/growpitalofficial" ><BsTelegram className="text-blue" /></Nav.Link>
                </Nav.Item>
              </Nav>
            </Col> */}
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
              <p className="text-white fw-400 mb-3 mb-md-0 pt-0"> © Copyright 2021-2022 <a href="/" style={{ color: "#07e57d", textDecorationColor: "#17171a" }}><span >www.growpital.com </span></a>. All Rights Reserved.</p>
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
