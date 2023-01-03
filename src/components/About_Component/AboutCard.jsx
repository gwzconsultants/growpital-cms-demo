
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { BsFillCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChoosegrowpital } from '../../redux/about-page/AboutSlice';


// import {
//     team,
//     eco,
//     strong
// } from "../../assets/img/contactimg"




const AboutCard = () => {
    // const Abouter = [
    //     {
    //         Id: "",
    //         Title: "Strong Execution",
    //         content: "Tech driven and process orientated farm projects with no default till date. ",
    //         Img: strong
    //     },
    //     {
    //         Id: "",
    //         Title: "Economies of Scale",
    //         content: "850+ Acres of farm portfolio",
    //         Img: eco
    //     },
    //     {
    //         Id: "",
    //         Title: "Strong Team",
    //         content: "Cumulative experience in Agriculture, management, finance, marketing and operations.",
    //         Img: team
    //     },
    // ];

    const { loading, cards, error } = useSelector((state) => ({ ...state.aboutUsPage }))
    const [modifiedData, setModifiedData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchChoosegrowpital())
    }, [dispatch])


    useEffect(() => {
        if (cards.length !== 0 || cards.id >0) {

            const { first_card_details, first_card_title, second_card_details, second_card_title, third_card_details, third_card_title, title, subtitle } = cards.attributes
            const { url: first_icon } = cards.attributes.first_icon.data.attributes
            const { url: second_icon } = cards.attributes.second_icon.data.attributes
            const { url: third_icon } = cards.attributes.third_icon.data.attributes



            const newblogDetails = { first_card_details, first_card_title, second_card_details, second_card_title, third_card_details, third_card_title, title, subtitle, first_icon, second_icon, third_icon };
            setModifiedData(newblogDetails);
        } else {
            setModifiedData(null);
        }


    }, [cards]);

    if (!cards) {

        <h2>Not this cocktail are present</h2>


    }

    if (error) {
        return (<p className='text-white'>{error.message}</p>)
    }


    if (!modifiedData) {
        return <h2>No Details</h2>;
    } else {
        const { first_card_details, first_card_title, second_card_details, second_card_title, third_card_details, third_card_title, title, subtitle, first_icon, second_icon, third_icon } = modifiedData;

        return (
            <>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <>


                        <section>
                            <Container  >
                                <Row className="d-flex justify-content-center align-items-center">
                                    <Col className="text-center mb-4" >
                                        <p className="text-uppercase fs-18 fs-fm-16 fw-500 text-main-green pb-1 mb-1" data-aos="fade-up">
                                            <BsFillCircleFill size={8} className="me-1" /> {subtitle}
                                        </p>
                                        <p className="text-white fw-600 display-6 mb-3 mb-md-4 content-text" data-aos="fade-up">
                                           {title}
                                        </p>
                                    </Col>
                                </Row>
                                <Row className='text-white'>

                                    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center  ps-md-5 ps-lg-3" data-aos="fade-up">
                                        <Card className=" text-center darkcard rounded p-1 d-flex mb-3" style={{ width: '28rem' }} >
                                            <Card.Body className=" bg-dark-gradient rounded">
                                                <Image src={`${process.env.REACT_APP_BASE_URL}${first_icon}`} className="img-fluid my-3" alt="" />
                                                <div className='mt-3'>
                                                    <Card.Title className="fw-600 fs-22 text-white text-uppercase">
                                                        {first_card_title}
                                                    </Card.Title>

                                                    <Card.Text className="fw-300 fs-14 text-white ">{first_card_details}</Card.Text>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center  ps-md-5 ps-lg-3" data-aos="fade-up">
                                        <Card className=" text-center darkcard rounded p-1 d-flex mb-3" style={{ width: '28rem' }} >
                                            <Card.Body className=" bg-dark-gradient rounded">
                                                <Image src={`${process.env.REACT_APP_BASE_URL}${second_icon}`} className="img-fluid my-3" alt="" />
                                                <div className='mt-3'>
                                                    <Card.Title className="fw-600 fs-22 text-white text-uppercase">
                                                        {second_card_title}
                                                    </Card.Title>

                                                    <Card.Text className="fw-300 fs-14 text-white ">{second_card_details}</Card.Text>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={12} lg={4} className="d-flex justify-content-center  ps-md-5 ps-lg-3" data-aos="fade-up">
                                        <Card className=" text-center darkcard rounded p-1 d-flex mb-3" style={{ width: '28rem' }} >
                                            <Card.Body className=" bg-dark-gradient rounded">
                                                <Image src={`${process.env.REACT_APP_BASE_URL}${third_icon}`} className="img-fluid my-3" alt="" />
                                                <div className='mt-3'>
                                                    <Card.Title className="fw-600 fs-22 text-white text-uppercase">
                                                        {third_card_title}
                                                    </Card.Title>

                                                    <Card.Text className="fw-300 fs-14 text-white ">{third_card_details}</Card.Text>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                </Row>
                            </Container>
                        </section>
                    </>
                )}</>)
    }
}

export default AboutCard