import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

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
                    <Row className='text-white  py-5'>
                        <Col md={5} className="px-4 px-md-5 mb-5">
                            <div className='d-flex flex-column '>

                                <h1 className='fw-bold fs-md-48 fs-40 mb-4'>Get in touch</h1>
                                <div className='d-inline-flex mb-4'><img src={map_mark} alt="" className='img-fluid me-3 mb-4' /><p className='ms-1'>S-2, V Cube Lavender, Plot 166A, Vishvesariya Nagar, Gopalpura Bypass, Jaipur RJ 302018  </p></div>
                                <div className='d-inline-flex mb-4'><img src={call} alt="" className='img-fluid me-3 mb-4' /><a href='tel:+91-7231844488' style={{ color: "#07e57d", textDecorationColor: "#17171a"}}>+91-7231844488</a></div>
                                <div className='d-inline-flex mb-4'><i className='fas fa-at me-4 mt-1' /><a  href="mailto:info@growpital.com" style={{ color: "#07e57d" ,textDecorationColor: "#17171a" }}>info@growpital.com</a></div>
                                <div className='d-inline-flex mb-4'><i className='fas fa-clock-o me-4 mt-1' /><p className='me-5'>Mon – Fri : 9:00 – 18:00 </p></div>
                            </div>
                            <Row className="me-5 px-4 mb-5">
                                <Col xs={3} className=" p-0"><img src={fb} alt="" /></Col>
                                <Col xs={3} className=" p-0"><img src={youtube} alt="" /></Col>
                                <Col xs={3} className=" p-0"><img src={linkdin} alt="" /></Col>
                                <Col xs={3} className=" p-0"><img src={insta} alt="" /></Col>
                            </Row>
                            {/* <Row className='my-3'>
                                <Col >
                                <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=372&height=272&hl=en&q=166A, Triveni Nagar, Arjun Nagar, Jaipur, Rajasthan 302018&t=&z=14&ie=UTF8&iwloc=B&output=embed" /><a href="https://mcpenation.com/">https://mcpenation.com</a></div><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;width:100%;height:272px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:272px;}.gmap_iframe {height:272px!important;}" }} /></div>

                                </Col>
                            </Row> */}



                        </Col>
                        <Col md={7} className="px-4 px-md-5">

                            <div>
                                <h1 className='fs-md-48 fs-40 fw-bold mb-4'>Contact Us</h1>
                                <p className='mb-4'>Would you like to speak to one of our financial advisers over the phone? Just submit your details and we’ll be in touch shortly. You can also e-mail us for any further concern.</p>
                            </div>
                            <div className='contact-from'>
                                <Form>
                                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">

                                        <Form.Control size="lg" type="name" placeholder="Name" required />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">

                                        <Form.Control size="lg" type="tel" placeholder="Phone Number" pattern="[0-9]{5}-[0-9]{5}" required/>
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">

                                        <Form.Control size="lg" type="email" placeholder="Email" required/>
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">

                                        <Form.Control as="textarea" placeholder="message" rows={3} />
                                    </Form.Group>
                                </Form>

                                <button className="main-btn maincolor mb-2">Submit</button>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
            </div>,
        </>
    )
}

export default ContactPage