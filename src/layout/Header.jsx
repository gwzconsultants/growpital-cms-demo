import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="py-3 fixed-top mb-4" data-aos="zoom-in-down">
                <Container>
                    <Navbar.Brand href="/" className="d-none d-lg-block">
                        <Image src={Logo} className="img-fluid" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand href="/" className="d-lg-none mx-auto">
                        <Image src={Logo} className="logo-img" alt=""  />
                    </Navbar.Brand>
                   
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/abouts">About</Nav.Link>
                          
                            
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/faqs">FAQs</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>

                        </Nav>
                        <div className="d-flex d-none d-md-block">
                            <Link to="/singup"> <Button className="main-btn maincolor mb-2 fs-11">Singup/Login</Button></Link>
                        </div>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
