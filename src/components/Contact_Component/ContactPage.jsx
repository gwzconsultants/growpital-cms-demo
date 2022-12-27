import React from 'react'
import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { BsClock, BsTelegram, BsWhatsapp } from 'react-icons/bs'

import {
    youtube,
    fb,
    linkdin,
    insta,
    map_mark,
    call
} from '../../assets/img/contactimg'


const ContactPage = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
            <div className='contact-us' >
                {/* <section className=''>
                <Container fluid className='my-0'>
                    <div>
                        <Image src={contactImg} alt="" className='img-fluid' />
                    </div>
                </Container>
            </section> */}

                <section>
                    <Container>
                        <Row className='text-white  '>
                            <Col md={5} className="px-4 px-md-5 mb-5" data-aos="fade-up">
                                <div className='d-flex flex-column '>

                                    <h1 className='fw-bold fs-md-48 fs-40 mb-4'>Get in touch</h1>
                                    <div className='d-inline-flex mb-4'><img src={map_mark} alt="" className='img-fluid me-3 mb-4' /><p className='ms-1'>S-2, V Cube Lavender, Plot 166A, Vishvesariya Nagar, Gopalpura Bypass, Jaipur RJ 302018  </p></div>
                                    <div className='d-inline-flex mb-4'><img src={call} alt="" className='img-fluid me-3 mb-4' /><a href='tel:+91-7231844488' style={{ color: "#07e57d", textDecorationColor: "#17171a" }}> +91-7231844488</a></div>
                                    <div className='d-inline-flex mb-4 d-flex'><span className='me-3 mb-4 fs-5'> @ </span><a href="mailto:info@growpital.com" style={{ color: "#07e57d", textDecorationColor: "#17171a" }}>info@growpital.com</a></div>
                                    <div className='d-inline-flex mb-4'><span className='me-3 mb-4'> <BsClock className='fs-5' /> </span> <p className='me-5'> Mon – Fri : 9:00 – 18:00 </p></div>
                                </div>
                                <Row className="me-5 px-2 mb-5">
                                    <Col xs={2} className=" p-0"><a href=" https://www.facebook.com/growpital"><img src={fb} alt="" /></a></Col>
                                    <Col xs={2} className=" p-0"><a href="https://www.youtube.com/channel/UC01PIsA1RufWKdul_yve63g"><img src={youtube} alt="" /></a></Col>
                                    <Col xs={2} className=" p-0"><a href=" https://www.linkedin.com/company/growpital/"><img src={linkdin} alt="" /></a></Col>
                                    <Col xs={2} className=" p-0"><a href="https://www.instagram.com/growpital/"><img src={insta} alt="" /></a></Col>
                                    <Col xs={2} className=" p-0"><a href="https://t.me/growpitalofficial"><BsTelegram className="" style={{ fontSize: "32" }} /></a></Col>
                                    <Col xs={2} className=" p-0"> <a href="https://wa.me/message/FCMTNVU3NDJOB1"><BsWhatsapp className="fs-32" style={{ color: "lightgreen", fontSize: "32" }} /></a></Col>

                                </Row>
                                {/* <Row className='my-3'>
                                <Col >
                                <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=372&height=272&hl=en&q=166A, Triveni Nagar, Arjun Nagar, Jaipur, Rajasthan 302018&t=&z=14&ie=UTF8&iwloc=B&output=embed" /><a href="https://mcpenation.com/">https://mcpenation.com</a></div><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;width:100%;height:272px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:272px;}.gmap_iframe {height:272px!important;}" }} /></div>

                                </Col>
                            </Row> */}



                            </Col>
                            <Col md={7} className="px-4 px-md-5" data-aos="fade-up">
                                <div>
                                    <h1 className='fs-md-48 fs-40 fw-bold mb-4'>Contact Us</h1>
                                    <p className='mb-4'>Would you like to speak to one of our financial advisers over the phone? Just submit your details and we’ll be in touch shortly. You can also e-mail us for any further concern.</p>
                                </div>

                                <div className='contact-from text-white'>
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} xs={12} controlId="validationCustom03" className="mb-4">
                                                {/* <Form.Label>City</Form.Label> */}
                                                <Form.Control type="text" placeholder="Name" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid name.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={12} controlId="validationCustom04" className="mb-4">
                                                {/* <Form.Label>State</Form.Label> */}
                                                <Form.Control type="tel" placeholder="Phone Number" pattern="[0-9]*" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid Phone Number.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} xs={12} controlId="validationCustom05" className="mb-4">
                                                {/* <Form.Label>Zip</Form.Label> */}
                                                <Form.Control type="email" placeholder="Email" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid Email.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">

                                                <Form.Control as="textarea" placeholder="Message" rows={3} />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Check
                                                    required
                                                    label="You are signing up to receive transaction , promotions and other commercial messages that are relevant to you "
                                                    feedback="You must agree before submitting."
                                                    feedbackType="invalid"
                                                />
                                            </Form.Group>
                                        </Row>
                                        <Button type="submit" className="main-btn maincolor mb-2">Submit</Button>
                                    </Form>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default ContactPage