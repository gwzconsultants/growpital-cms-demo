import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import { blogpage12 } from '../../assets/img/contactimg'
// import blog1 from "../../assets/img/blogLarge.jpg"
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const BlogDetailsTwelve = () => {
    return (
        <>
            <Header />
            <section>
                <Container  >
                    <Row className='text-white mb-3'>
                        <Col xs={12}>
                        <div className='profile '>
                        <div className='cover-profile'>
                            <img src={blogpage12} alt="" className='cover-img w-100 h-100 rounded-4' />
                        </div>
                    </div>
                    <div>
                        <p className='py-3'>Jan 13,2022</p>
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
                            Making balance with recession...
                            </h1>
                        
                                
                                    <p >Goldman Sachs Senior Chairman Lloyd Blankfein urged companies and consumers to gird for a US recession, saying it's a "very, very high risk."</p>
                                    <p>"If I were running a big company, I would be very prepared for it," Blankfein said on CBS's "Face the Nation" Sunday. "If I was a consumer, I'd be prepared for it."</p>
                                    <p>Another stock market analyst said "We are entering into a long term bear market which usually lasts for 280 days."</p>
                                    <p>One analyst suggested that we should not hope for recovery as quickly as happened with the 2020 market crash. At that time, every government passed on the stimulus package that took care of the economy. There were moratoriums, special scheme loans and other measures to uplift and push up the economy.</p>
                                    <p>Right now what we are seeing is the real, post effect of a pandemic. As they say, history repeats itself. The same happened 100 years ago post WW1 when the world was hit by pandemics. What followed was the Great Depression !!!. We don't see a great depression happening again but yes long term recession is at door and we all should be well prepared to face that adequately.</p>
                                    <p>Have a glance at your portfolios carefully, it is time to rebalance and invest smartly. One word of caution: averaging is always not the smartest way when you don't know where the bottom of the market lies. The market always bounces back, the time it takes to reach new heights may vary but choosing the right stock at that time is a huge task. If any particular stock rose by 50% in a span of 5 years. You can calculate your annual returns which will be below 10%. So always calculate the time it took to provide high returns.</p>
                                    <p>The time to invest in assured returns is never more favorable than this. We all have heard how the stock market skyrocketed in the past 10 years but it may not be the same in the coming 10 years. Every generation needs a product of their own to build wealth. Previous generations built wealth via PPF, EPF or NSC. Our parents are building it through the stock market and real estate. While we have many more opportunities than our previous generations but it is up to us how we leverage them for maximum returns. Opportunities at hand- Mutual funds, Cryptos, NFT, and the new shining of Alternative Investments like fractional ownership in Real Estate, Litigation Financing, Asset Financing, Farm Investments, Inventory Financing, Startup Investing and many more.</p>
                                    <p>One should explore all possible options before finalizing ‘the’ one or as it is said, diversification is the key to save for a rainy day. Different times need different strategies. Keeping your capital intact and beating inflation can be the primary goal for now. <br />As the former CEO of Goldman Sachs said <br />"If I was a consumer, I'd be prepared for it."</p>
                                    <p>Disclaimer: The author himself has invested in the stock market, crypto, and alternative investments. This is not a piece of investment advice. Please consult your investment advisor before any investment.</p>
                               
                            
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default BlogDetailsTwelve