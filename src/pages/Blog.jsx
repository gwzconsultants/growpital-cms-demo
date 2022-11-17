import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { IconContext } from 'react-icons'
// import { BsSearch } from 'react-icons/bs'
import {  blogImg14 } from '../assets/img/contactimg'
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
                            <div className='text-center ' data-aos="fade-up">
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
                { pathname: `/blog/Lack-of-Financing-in-Farmland` }
            } style={{ textDecoration: "none" }}>
                <section className='py-5'>
                    <Container>
                        <Row>
                            <Col md={6} data-aos="fade-up">
                                <div>
                                    <img src={blogImg14} alt="blog-img" className='img-fluid rounded-3' />
                                </div>
                            </Col>
                            <Col md={6} data-aos="fade-up">
                                <Card className='bg-transparent border-0 text-white'>
                                    <Card.Body>
                                        <Card.Text>
                                        Nov 15,2022

                                        </Card.Text>
                                        {/* <Card.Subtitle className="mb-2 ">Banking</Card.Subtitle> */}
                                        <Card.Title className='fw-bold fs-4'>Lack of Financing in Farmland</Card.Title>

                                        <Card.Text>
                                        The global agricultural market size is estimated to be around $12,541.15 billion in 2022, yet
finding farmland funding is an increasing challenge. Studies suggest that the global food demand will increase by 70% by 2050, calling for billions of dollars in investments, from the public and private sectors.
Most of this capital needs to come from the private sector. This is especially in light of the
commercialization of the agricultural industry as a whole, a positive shift towards large-scale
mechanization, climate-smart technologies, processing, and agri-food logistics

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