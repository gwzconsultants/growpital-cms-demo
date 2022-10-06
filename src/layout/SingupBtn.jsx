import React, { useEffect } from 'react'
import { useState } from 'react';
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Call24 from "../assets/img/24call.png";
import useScrollDirection from '../hooks/HidenShow';




const SingupBtn = () => {

    const scrollDirection = useScrollDirection();

  
    return (
        <>
            <Container className={`fixed-bottom ${ scrollDirection === "down" ? "translate-middle-y" : "bottom-0 "} d-block d-sm-none` }  >
                <Row >
                    <Col className='d-flex align-content-center singupBtn'>
                        <div className=" me-3">
                            <Link to="/singup"> <Button className="main-btn maincolor  fs-11">singup/login</Button></Link>
                        </div>
                        <div className='darkcard z-index-1 mx-auto d-flex justify-content-center align-items-center'>
                           <div className='darkcard-icon p-2'>

                              <Link><img src={Call24} alt="" className='img-fluid' /></Link>
                           </div>
                        </div>
                    </Col>
                </Row>


            </Container>
        </>


    )
}

export default SingupBtn

