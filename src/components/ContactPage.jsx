import React from 'react'
import { Col, Container, Form, Image, Row } from 'react-bootstrap'
import contactImg from "../assets/img/Rectangle 71.jpg"
import {
    youtube,
    fb,
    linkdin,
    insta,
    map_mark,
    call
} from '../assets/img/contactimg'

const ContactPage = () => {
    return (
        <>

            <section>
                <Container fluid className='my-5'>
                    <div>
                        <Image src={contactImg} alt="" className='img-fluid' />
                    </div>
                </Container>
            </section>

            <section>
                <Container>
                    <Row className='text-white  py-5'>
                        <Col md={5} className="px-4 px-md-5 mb-5">
                            <div className='d-flex flex-column '>

                                <h1 className='fw-bold fs-48 mb-4'>Get in touch</h1>
                                <div className='d-inline-flex mb-4'><img src={map_mark} alt="" className='img-fluid me-3 mb-4' /><p className='ms-1'>S-2, V Cube Lavender, Plot 166A, Vishvesariya Nagar, Gopalpura Bypass, Jaipur RJ 302018  </p></div>
                                <div className='d-inline-flex mb-4'><img src={call} alt="" className='img-fluid me-3 mb-4' /><p className='me-5'>+91-7231844488</p></div>
                                <div className='d-inline-flex mb-4'><i className='fas fa-at me-4 mt-1' /><p className='me-5'>info@growpital.com</p></div>
                                <div className='d-inline-flex mb-4'><i className='fas fa-clock-o me-4 mt-1' /><p className='me-5'>Mon – Fri : 9:00 – 18:00 </p></div>
                            </div>
                            <Row className="me-5 px-4">
                                <Col xs={3} className=" p-0"><img src={fb} alt="" /></Col>
                                <Col xs={3} className=" p-0"><img src={youtube} alt="" /></Col>
                                <Col xs={3} className=" p-0"><img src={linkdin} alt="" /></Col>
                                <Col xs={3} className=" p-0"><img src={insta} alt="" /></Col>
                            </Row>


                        </Col>
                        <Col md={7} className="px-4 px-md-5">

                            <div>
                                <h1 className='fs-48 fw-bold mb-4'>Contact Us</h1>
                                <p className='mb-4'>Would you like to speak to one of our financial advisers over the phone? Just submit your details and we’ll be in touch shortly. You can also e-mail us for any further concern.</p>
                            </div>

                            <Form>
                                <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">

                                    <Form.Control size="lg" type="name" placeholder="name" />
                                </Form.Group>
                                <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">

                                    <Form.Control size="lg" type="tel" placeholder="phone number" pattern="[0-9]{5}-[0-9]{5}" />
                                </Form.Group>
                                <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">

                                    <Form.Control size="lg" type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">

                                    <Form.Control as="textarea" placeholder="Massage" rows={3} />
                                </Form.Group>
                            </Form>

                            <button className="main-btn maincolor mb-2">Submit</button>


                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ContactPage