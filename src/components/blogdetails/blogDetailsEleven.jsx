import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import { blogpage11 } from '../../assets/img/contactimg'
// import blog1 from "../../assets/img/blogLarge.jpg"
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const BlogDetailsEleven = () => {
    return (
        <>
            <Header />
            <section>
                <Container  >
                    <Row className='text-white mb-3'>
                        <Col xs={12}>
                        <div className='profile '>
                        <div className='cover-profile'>
                            <img src={blogpage11} alt="" className='cover-img w-100 h-100 text-center rounded-4'  />
                        </div>
                    </div>
                    <div>
                        <p className='py-3'>Mar 20,2022</p>
                    </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className='text-white'>
                        <Col xs={12}>
                            <h1 className='pb-3'>
                                Exports: Future of India's agriculture
                            </h1>
                           
                                    <p className=' mb-0 fw-bold fs-4'>Introduction</p>
                                    <ul type="none" className='pb-3'>
                                        <li>Consider the stock market as a person with mood swings. It can go from being irritated to being ecstatic within no time, “it can overreact hastily one day and make amends the next” (Mclure Ben, 2021, March20, p.1). Behavioral finance states that financial decisions are based on human emotions, biases and that humans are not as nearly rational as defined by the traditional financial theory. Behavioral finance is insightful in analyzing market returns in reminiscence but has been unsuccessful in helping the investor to develop a strategy to get higher returns in future.</li>
                                    </ul>
                                    <p className=' mb-0 fw-bold fs-4'>Difference between behavioral finance & traditional finance</p>
                                    <ul type="none" className='pb-3'>
                                        <li className='py-2'>Traditional finance theory assumes that people are ‘rational’, which means that they are utility maximizers and are free from the effects of social relations or emotions. Additionally, it is also posed that the firms are profit maximizing organizations and the markets are efficient in their working.</li>
                                        <li className='py-2'>Although the notion of traditional financial theory seems simple to understand, the above stated assumptions don’t hold true. In fact, according to Lin Melissa, “80% of individual investors and 30% of institutional investors are more inertia than logical” (p.1). These deviations from theoretical predictions have helped to build the framework for behavioral finance. Analytical and emotional aspects of investing like psychology and sociology are focused upon under behavioral finance.</li>
                                    </ul>
                                    <p className=' mb-0 fw-bold fs-4'>Alternative investments and human behavior</p>
                                    <ul type="none" className='pb-3'>
                                        <li className='py-2'>In recent times, when investing in alternative investments (like cryptocurrency) is gaining popularity, the problem of over-optimism is the most persistent psychological bias in the market. This over-optimism arises when people start believing that investing in any market always gives good returns because their acquaintance was rewarded with good returns. When people start following the herd mentality and do not do proper analysis of the market, the problem of over optimism prevails.</li>
                                        <li className='py-2'>High returns offered by any investment also poses the risk of ‘bubble formation’. When a bubble forms, the price of an investment rises today solely because investors expect the selling price will rise the next day. The prices thus increase because of the psychological beliefs of investors, and when the average prices increase above the fundamental level, the bubble bursts and leads to market crash. Asset bubbles are widely recognized as the likely cause of economic, financial, and residential market volatility in many countries. Thus, it is always advisable to go through extensive research before investing in any form of investment.</li>
                                    </ul>


                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default BlogDetailsEleven