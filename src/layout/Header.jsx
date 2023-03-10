
// import React, { useState } from "react";
import { Container, Nav, Navbar, Button, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
import Logo from "../assets/img/newlogo.png";

const Header = () => {
    // const [active, setActive] = useState('default');
    let currentRoute = useLocation().pathname;
    const homeLink = useLocation().pathname.endsWith("/")
 

    let link = "/"
    if(!homeLink){
     link = "/home"
    } 
    return (
        <>
            <Navbar expand="lg" className="py-3 sticky-top overflow-hidden top-0 mb-3" >
                <Container>
                    <Navbar.Brand href="/" className="d-none d-lg-block">
                        <Image src={Logo} className="img-fluid" alt="logo" style={{ width: "12rem" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand href="/" className="d-lg-none mx-auto">
                        <Image src={Logo} className="logo-img" alt="logo" style={{ width: "12rem" }} />
                    </Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="m-auto" activeKey="/">
                            <Nav.Link href={link} eventKey="default"  className={currentRoute.includes(link) ? "nav-link active" : "nav-link"}  >Home</Nav.Link>
                            <Nav.Link href="/about" eventKey="link-1" className={currentRoute.includes("about") ? "nav-link active" : "nav-link"} >About</Nav.Link>
                            {/* <Nav.Link href="https://blogs.growpital.com/" eventKey="link-2">Blogs</Nav.Link> */}
                            <Nav.Link href="/blog" eventKey="link-2" className={currentRoute.endsWith("/blog") ? "nav-link active" : "nav-link"} >Blogs</Nav.Link>
                            <Nav.Link href="/faqs" eventKey="link-3" className={currentRoute.endsWith("/faqs") ? "nav-link active" : "nav-link"} >FAQs</Nav.Link>
                            <Nav.Link href="/contact" eventKey="link-4" className={currentRoute.endsWith("/contact") ? "nav-link active" : "nav-link"} >Contact Us</Nav.Link>

                        </Nav>
                        <div className="d-flex d-none d-md-block">
                            <a href="https://app.growpital.com/signup"> <Button className="main-btn-nav maincolor mb-2 fs-11">Sign up/Login</Button></a>
                        </div>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;
