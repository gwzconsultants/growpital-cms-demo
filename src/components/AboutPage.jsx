
import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'

import {
    team,
    eco,
    strong
} from "../assets/img/contactimg"



const AboutPage = () => {
    const Abouter = [
        {
            Id: "",
            Title: "Strong Execution",
            content: "Tech driven and process orientated farm projects with no default till date. ",
            Img: strong
        },
        {
            Id: "",
            Title: "Economies of Scale",
            content: "850+ Acres of farm portfolio",
            Img: eco
        },
        {
            Id: "",
            Title: "Strong Team",
            content: "Cumulative experience in Agriculture, management, finance, marketing and operations.",
            Img: team
        },
    ];
    return (
        <>


            <section>
                <Container  >

                    <Row className='text-white'>
                        {Abouter.map((item, index) => (
                            <Col xs={12} md={12} lg={4} className="d-flex justify-content-center  ps-md-5 ps-lg-3" key={index}>
                                <Card className=" text-center darkcard rounded p-1 d-flex mb-3" style={{ width: '28rem' }} >
                                    <Card.Body className=" bg-dark-gradient rounded">
                                        <Image src={item.Img} className="img-fluid my-3" alt="" />
                                        <div className='mt-3'>
                                            <Card.Title className="fw-600 fs-22 text-white text-uppercase">
                                                {item.Title}
                                            </Card.Title>

                                            <Card.Text className="fw-300 fs-14 text-white ">{item.content}</Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutPage