import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { BsTelegram, BsWhatsapp } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'

import {
    youtube,
    fb,
    linkdin,
    insta,
   } from '../../assets/img/contactimg'
import { fetchContact } from '../../redux/contact-page/contactUsSlice'


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
    const { loading, contact, error } = useSelector((state) => ({ ...state.contactUs }))
    const [modifiedData, setModifiedData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchContact())
    }, [dispatch])

    console.log(contact);
    useEffect(() => {
        if (contact.length !== 0 || contact.length > 0) {
            
            const { address, aviable_day, checkbox_text, close_time, company_email, description, facebook_address, heading, input_heading, insta_address, linkdin_address, mobile_num, telegram_address, whatsapp_address, youtube_address, start_time } = contact.attributes
            const {url:mar_icon} = contact.attributes.addres_logo.data.attributes
            const {url:phone_icon} = contact.attributes.phone_icon.data.attributes
            const {url:email_icon} = contact.attributes.email_icon.data.attributes
            const {url:time_icon} = contact.attributes.time_icon.data.attributes
        
            
            const newblogDetails = {
                address, aviable_day, checkbox_text, close_time, company_email, description, facebook_address, heading, input_heading, insta_address, linkdin_address, mobile_num, telegram_address, whatsapp_address, youtube_address, start_time
           ,mar_icon,phone_icon,
           email_icon,
           time_icon };
            setModifiedData(newblogDetails);
        } else {
            setModifiedData(null);
        }


    }, [contact]);

    if (!contact) {

        <h2>Not this cocktail are present</h2>


    }

    if (error) {
        return (<p className='text-white'>{error.message}</p>)
    }


    if (!modifiedData) {
        return <h2>No Details</h2>;
    } else {
        const { phone_icon,
            email_icon,
            time_icon,mar_icon,address, aviable_day, checkbox_text, close_time, company_email, description, facebook_address, heading, input_heading, insta_address, linkdin_address, mobile_num, telegram_address, whatsapp_address, youtube_address, start_time } = modifiedData;

        return (
            <>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
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

                                                <h1 className='fw-bold fs-md-48 fs-40 mb-4'>{heading}</h1>
                                                <div className='d-inline-flex mb-4'><img src={`${process.env.REACT_APP_BASE_URL}${mar_icon}`} alt="" className='img-fluid me-3 mb-4' /><p className='ms-1'>{address}  </p></div>
                                                <div className='d-inline-flex mb-4'><img src={`${process.env.REACT_APP_BASE_URL}${phone_icon}`} alt="" className='img-fluid me-3 mb-4' /><a href='tel:+91-{mobile_num}' style={{ color: "#07e57d", textDecorationColor: "#17171a" }}> +91-{mobile_num}</a></div>
                                                <div className='d-inline-flex mb-4 d-flex'><img src={`${process.env.REACT_APP_BASE_URL}${email_icon}`} alt="" className='img-fluid me-3 mb-4' /><a href="mailto:info@growpital.com" style={{ color: "#07e57d", textDecorationColor: "#17171a" }}>{company_email}</a></div>
                                                <div className='d-inline-flex mb-4'><img src={`${process.env.REACT_APP_BASE_URL}${time_icon}`} alt="" className='img-fluid me-3 mb-4' /> <p className='me-5'>{aviable_day} : {start_time}– {close_time}</p></div>
                                            </div>
                                            <Row className="me-5 px-2 mb-5">
                                                <Col xs={2} className=" p-0"><a href={facebook_address}><img src={fb} alt="" /></a></Col>
                                                <Col xs={2} className=" p-0"><a href={youtube_address}><img src={youtube} alt="" /></a></Col>
                                                <Col xs={2} className=" p-0"><a href={linkdin_address}><img src={linkdin} alt="" /></a></Col>
                                                <Col xs={2} className=" p-0"><a href={insta_address}><img src={insta} alt="" /></a></Col>
                                                <Col xs={2} className=" p-0"><a href={telegram_address}><BsTelegram className="" style={{ fontSize: "32" }} /></a></Col>
                                                <Col xs={2} className=" p-0"> <a href={whatsapp_address}><BsWhatsapp className="fs-32" style={{ color: "lightgreen", fontSize: "32" }} /></a></Col>

                                            </Row>
                                            {/* <Row className='my-3'>
                                <Col >
                                <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=372&height=272&hl=en&q=166A, Triveni Nagar, Arjun Nagar, Jaipur, Rajasthan 302018&t=&z=14&ie=UTF8&iwloc=B&output=embed" /><a href="https://mcpenation.com/">https://mcpenation.com</a></div><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;width:100%;height:272px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:272px;}.gmap_iframe {height:272px!important;}" }} /></div>

                                </Col>
                            </Row> */}



                                        </Col>
                                        <Col md={7} className="px-4 px-md-5" data-aos="fade-up">
                                            <div>
                                                <h1 className='fs-md-48 fs-40 fw-bold mb-4'>{input_heading}</h1>
                                                <p className='mb-4'>{description}</p>
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
                                                                label={checkbox_text}
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
                    </>)}</>)

    }
}

export default ContactPage