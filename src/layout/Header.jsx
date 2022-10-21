
// import React, { useState } from "react";
import { Container, Nav, Navbar, Button, Image } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

const Header = () => {
    // const [active, setActive] = useState('default');
    return (
        <>
            <Navbar expand="lg" className="py-3 sticky-top overflow-hidden top-0 mb-3" >
                <Container>
                    <Navbar.Brand href="/" className="d-none d-lg-block">
                        <Image src={Logo} className="img-fluid" alt="logo" style={{width:"12rem"}} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand href="/" className="d-lg-none mx-auto">
                        <Image src={Logo} className="logo-img" alt="logo" style={{width:"12rem"}} />
                    </Navbar.Brand>
                   
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="m-auto"  activeKey="/home">
                            <Nav.Link href="/" eventKey="default" >Home</Nav.Link>
                            <Nav.Link href="/about" eventKey="link-1">About</Nav.Link>
                          <Nav.Link href="https://www.growpital.com/blog" eventKey="link-2">Blog</Nav.Link>
                            <Nav.Link href="/faqs" eventKey="link-3">FAQs</Nav.Link>
                            <Nav.Link href="/contact" eventKey="link-4">Contact Us</Nav.Link>

                        </Nav>
                        <div className="d-flex d-none d-md-block">
                            <a href="https://app.growpital.com/signup?_gl=1*jb0rsu*_ga*MTM4OTAyNDk1Ny4xNjY1Mzg2MTc4*_ga_YFL1QCKH2V*MTY2NjI3NTU3Ny4xOC4xLjE2NjYyNzU1NzcuMC4wLjA."> <Button className="main-btn-nav maincolor mb-2 fs-11">Sign up/Login</Button></a>
                        </div>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
