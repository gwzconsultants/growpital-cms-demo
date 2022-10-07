import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {
    faqspage,
    // faqsimg1,
    // faqsimg2,
} from "../assets/img/contactimg"

const AboutPage = () => {
    return (
        <>
            <section className='my-5' >
                <Container fluid >
                    <Row >
                        <Col>
                            <div className='position-relative'>
                                <img src={faqspage} alt="" className='img-fluid mt-5' />
                                <div className='position-absolute top-50 start-0 translate-middle'>
                                    <h1 className=''>About us</h1>
                                    <p>Fusce gravida cursus ante nec fringilla. Curabitur hendrerit
                                        <br />pretium auctor. Mauris sit amet aliquet nulla.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='mb-3 text-start text-white'>
                <Container>
                    <div>
                        <p>We are leading in agriculture investment</p>
                        <h1>Farm investments demystified!</h1>
                        <p>
                            Growpital was incepted to radically democratize farm investment by providing access to high profit
                            opportunities to retail investors. We Firmly believe that agriculture is a safe, stable and attractive long-term
                            investment for everyone, if invested with right projects.
                        </p>
                        <button className="main-btn maincolor mb-3 my-3">Submit</button>

                    </div>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col >
                            <Row>
                                <Col md={6}></Col>
                                <Col md={6}></Col>
                            </Row>
                        </Col>

                        <Col ></Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutPage