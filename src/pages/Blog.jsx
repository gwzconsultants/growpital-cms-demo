import React, { useState } from 'react'
import { useRef } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import BlogArry from '../components/Blog_Component/BlogArry'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import { fetchBlogSearch } from '../redux/blog-page/BlogSlice'

const Blog = () => {
    const [value, setValue] = useState()
    const [show, setShow] = useState(false)
    const searchTerm = useRef();
    const dispatch = useDispatch()
    const handleChange = () => {
        const searchText = searchTerm.current.value
        setValue(searchText)

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchBlogSearch({ value }))
        if (value === null || value === undefined || value === '') {
            setShow(false)
        } else {
            setShow(true)
        }

    }
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
                                <div className='faqs-search my-4 py-3'>
                                    <Form className="d-flex " onSubmit={handleSubmit} >
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="py-2 searchBar bg-transparent text-white border-end-0  "
                                            aria-label="Search"
                                            onChange={handleChange}
                                            ref={searchTerm}

                                        />
                                        <IconContext.Provider
                                            value={{ color: '#FEBF32', size: '25px' }}
                                        >

                                            <Button className="btn searchbtn bg-transparent py-2 " type="submit" >
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

            <section>
                <Container>
                    <Row>
                        <BlogArry show={show} />
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Blog