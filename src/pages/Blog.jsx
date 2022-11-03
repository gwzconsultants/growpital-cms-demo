import React from 'react'
import {  Card, Col, Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { IconContext } from 'react-icons'
// import { BsSearch } from 'react-icons/bs'
import { blogImg2 } from '../assets/img/contactimg'
import BlogArry from '../components/BlogArry'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

const Blog = () => {
    return (
        <>
            <Header />
            <section className='py-0 mt-0 mt-md-0'>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center align-items-center text-white mt-3">
                            <div className='text-center '>
                                <h1>What's new</h1>
                                <p className="subheading">Read on latest updates about latest investment opportunities, Industry insights and partners update.</p>
                                {/* <div className='faqs-search my-4 py-3'>
                                    <Form className="d-flex ">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="py-2 searchBar bg-transparent text-white border-end-0  "
                                            aria-label="Search"

                                        />
                                        <IconContext.Provider
                                            value={{ color: '#FEBF32', size: '25px' }}
                                        >

                                            <Button className="btn searchbtn bg-transparent py-2 " type="search">
                                                <BsSearch />
                                            </Button>

                                        </IconContext.Provider>
                                    </Form>
                                </div> */}

                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
            <Link to={
            {pathname: `/blog/farm-sizes-by-country`}
            }  style={{ textDecoration: "none" }}>
            <section className='py-5'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={blogImg2} alt="blog-img" className='img-fluid rounded-3' />
                            </div>
                        </Col>
                        <Col md={6}>
                            <Card className='bg-transparent border-0 text-white'>
                                <Card.Body>
                                    <Card.Text>
                                        Oct 3,2022 

                                    </Card.Text>
                                        {/* <Card.Subtitle className="mb-2 ">Banking</Card.Subtitle> */}
                                    <Card.Title>Farm Sizes by Country</Card.Title>

                                    <Card.Text>
                                    Almost 38% of the global land surface is used for agricultural purposes, in one way or the other. In absolute terms, it is over five billion hectares.



However, only one-third of this is for cropland cultivation and the rest are pastures, majorly used for grazing. India has the largest cultivated land area, in terms of percentage of total land mass, amounting to around 53.7%. The country also holds the second position globally, regarding the number of farms, second only to China

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            </Link>
            <section>
                <Container>
                    <Row>
                        <BlogArry />
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Blog