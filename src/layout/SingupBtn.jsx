import React from 'react'
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Call24 from "../assets/img/24call.png";
import useScrollDirection from '../hooks/HidenShow';




const SingupBtn = () => {

    const scrollDirection = useScrollDirection();


    return (
        <>
            <section className='signup-page signup-trans'>
                <Container className={`position-sticky ${scrollDirection === "down" ? "bottom-100" : "bottom-0"} d-block d-sm-none`}  >
                    <Row >
                        <Col className='d-flex align-items-center singupBtn mb-0'>
                            <div className="mx-2">
                                <Link to="/singup"> <Button className="main-btn-sign maincolor  fs-11">Signup/Login</Button></Link>
                            </div>
                            <div className='darkcard p-1 rounded-4 z-index-1 mx-auto d-flex justify-content-center align-items-center'>
                                <div className='darkcard-icon p-2 shadow-none'>

                                    <Link><img src={Call24} alt="" className='img-fluid' /></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>


                </Container>
            </section>
        </>


    )
}

export default SingupBtn

