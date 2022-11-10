import React from 'react'
import {  Card, Col, Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { IconContext } from 'react-icons'
// import { BsSearch } from 'react-icons/bs'
import { blogImg13} from '../assets/img/contactimg'
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
            {pathname: `/blog/India-is-importer-or-exporter-of-Farm-produce`}
            }  style={{ textDecoration: "none" }}>
            <section className='py-5'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={blogImg13} alt="blog-img" className='img-fluid rounded-3' />
                            </div>
                        </Col>
                        <Col md={6}>
                            <Card className='bg-transparent border-0 text-white'>
                                <Card.Body>
                                    <Card.Text>
                                        Nov 5,2022 

                                    </Card.Text>
                                        {/* <Card.Subtitle className="mb-2 ">Banking</Card.Subtitle> */}
                                    <Card.Title>India is importer or exporter of Farm produce?</Card.Title>

                                    <Card.Text>
                                    India is known for being an agricultural powerhouse. In fact, it has been self-sufficient for much of its agricultural needs for the last few decades. However, India still depends on agrarian imports for Agri and allied commodities .
                                    The country has a place in both the lists of top 10 agricultural exporters and top 10 importers . You must have heard or read in the news that India’s agricultural exports have increased manifolds in the last one decade. However, it needs to be noted that during the same time our imports have gone up too.
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