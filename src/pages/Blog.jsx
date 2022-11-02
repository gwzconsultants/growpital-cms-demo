import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { BsSearch } from 'react-icons/bs'
import { blogsmall } from '../assets/img/contactimg'
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
                                <p className="subheading">Got a question? We've got answers.<br />
                                    If you have some other questions, contact us using email.</p>
                                <div className='faqs-search my-4 py-3'>
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
                                </div>

                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='py-5'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={blogsmall} alt="blog-img" className='img-fluid rounded-3' />
                            </div>
                        </Col>
                        <Col md={6}>
                            <Card className='bg-transparent border-0 text-white'>
                                <Card.Body>
                                    <Card.Text>
                                        oct 3,2022 | 15mit read

                                    </Card.Text>
                                        <Card.Subtitle className="mb-2 ">Banking</Card.Subtitle>
                                    <Card.Title>What are Hydroponics and Aquaponics farming techniques?</Card.Title>

                                    <Card.Text>
                                    The major benefit of hydroponics is that it can be easily set up. The lack of soil makes it easier

                                        for urban farm enthusiasts, as you don’t need to pay any attention to soil quality. Secondly, hydroponics is a great technique for indoor farming. There are several vegetables and herbs that can be cultivated using this method.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
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