import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { IconContext } from 'react-icons';
import { BsSearch } from "react-icons/bs";
import FinanceAccordian  from './FinanceAccordian';
import PostInvestmentAccordian from "./PostInvestmentAccordian";

import FaqsAccordian from './FaqsAccordian';
const FaqsPage = () => {
    return (
        <>
            <section className='py-0 mt-0 mt-md-0'>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center align-items-center text-white">
                            <div className='text-center '>
                                <h1>Frequently Asked Questions</h1>
                                <p className="subheading">Got a question? We've got answers.<br />
                                    If you have some other questions, contact us using email.</p>
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

            <section className='mt-4 mb-3 py-3'>
                <Container className='text-white'>
                    <Row>
                        <Col>
                        <div className='text-center mx-auto mb-3'>
                            <p className='fw-bold fs-32 mb-3 py-3'>GENERAL QUESTIONS</p>
                        </div>
                        <FaqsAccordian />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='mt-5 mb-3 py-0'>
                <Container className='text-white'>
                    <Row>
                        <Col>
                        <div className='text-center mx-auto mb-3'>
                            <p className='fw-bold fs-32 mb-3 py-4'>Finance</p>
                        </div>
                        <FinanceAccordian />
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className='my-5 mb-3 py-0'>
                <Container className='text-white'>
                    <Row>
                        <Col>
                        <div className='text-center mx-auto mb-2'>
                            <p className='fw-bold fs-32 mb-3 py-4'>Banking</p>
                        </div>
                     <PostInvestmentAccordian />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FaqsPage