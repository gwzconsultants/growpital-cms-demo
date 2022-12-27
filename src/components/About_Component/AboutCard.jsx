
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

// import {
//     team,
//     eco,
//     strong
// } from "../../assets/img/contactimg"
import { fetchChoosegrowpital } from '../../redux/about-page/ChooseGropital';



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

    const { loading, cards, error } = useSelector((state) => ({ ...state.choiceCard }))
    const [modifiedCard, setModifiedCard] = useState([])
    const dispatch = useDispatch()
console.log(cards);
    useEffect(() => {
        dispatch(fetchChoosegrowpital())
    }, [dispatch])


    useEffect(() => {
        if (cards) {
            const newLogo = cards.map(item => {
                const { url } = item.attributes.logo.data.attributes;
                 const { description,title
                 } = item.attributes;

                // NewDate.split('T')[0];


                return {
                    url,
                    description,title
                }
            })
            setModifiedCard(newLogo)
        } else { setModifiedCard([]) }



    }, [cards]);

    if (loading) {
        return (<h3>Loading...</h3>)
    }
    if (!cards) {

        <h2>Not this cocktail are present</h2>


    }

    if (error) {
        return (<p>{error.massage}</p>)
    }
    return (
        <>


            <section>
                <Container  >

                    <Row className='text-white'>
                        {modifiedCard.map((item, index) => (
                            <Col xs={12} md={12} lg={4} className="d-flex justify-content-center  ps-md-5 ps-lg-3" key={index} data-aos="fade-up">
                                <Card className=" text-center darkcard rounded p-1 d-flex mb-3" style={{ width: '28rem' }} >
                                    <Card.Body className=" bg-dark-gradient rounded">
                                        <Image src={`${process.env.REACT_APP_BASE_URL}${item.url}`} className="img-fluid my-3" alt="" />
                                        <div className='mt-3'>
                                            <Card.Title className="fw-600 fs-22 text-white text-uppercase">
                                                {item.title}
                                            </Card.Title>

                                            <Card.Text className="fw-300 fs-14 text-white ">{item. description}</Card.Text>
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

export default AboutCard