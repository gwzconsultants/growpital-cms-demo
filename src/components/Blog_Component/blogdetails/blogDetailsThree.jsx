import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { blogpage3, blogpage3_graph } from '../../assets/img/blog_imgs'
// import blog1 from "../../assets/img/blogLarge.jpg"
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const BlogDetailsThree = () => {
    return (
        <>
            <Header />
            <section>
                <Container>
                    <Row className='mb-3 text-white'>
                        <Col>

                            <div className='profile '>
                                <div className='cover-profile'>
                                    <img src={blogpage3} alt="" className='cover-img w-100 h-100 rounded-4' />
                                </div>
                            </div>
                            <div className='py-3'>
                                <p>Aug 25,2022</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className='text-white'>
                        <Col xs={12}>
                            <h1 className='pb-3' >
                                Markets are now pricing in 100% risk of a U.S. recession before year’s end: Deutsche Bank
                            </h1>


                            <p>Something big shifted in the market following Wednesday’s U.S. consumer-price index report, according to George Saravelos, global head of currency research at Deutsche Bank.</p>
                            <p>Based on moves in U.S. stocks SPX, -0.30% and the U.S. dollar EURUSD, 0.05% which finally achieved parity with the euro on Thursday, Saravelos said in a note to clients on Thursday that futures markets are now pricing in 100% odds that the U.S. economy will slide into a recession before the end of the year.</p>
                            <p>Using the peak in the Fed funds futures curve as a proxy for recession expectations, Saravelos pointed out that the market’s views on the timing of the start of the next recession have shifted substantially since February, when investors were bracing for a recession to arrive in December 2024. As of Thursday, futures traders were bracing for a recession to start in January 2023.</p>
                            <img src={blogpage3_graph} alt="" />
                            <h5>SOURCE: DEUTSCHE BANK</h5>
                            <p>Saravelos added that recession risk has supplanted inflation as the most important factor driving markets.Now that investors are pricing in risk of a recession sooner rather than later, there are a few factors investors should keep in mind.
                                <ul style={{ listStyleType: "disc" }}>
                                    <li className='py-2'>Be wary of the labor market. Weakening demand coupled with robust labor markets is a recipe for collapsing productivity and profit margins, Saravelos said. This could be especially negative for risk assets. But a turn in the labor market will be needed before the Federal Reserve and other global central banks can start the transition back to cutting interest rates.</li>
                                    <li className='py-2'>Keep an eye out for bubbles. The longer central banks maintain tight monetary policy, the greater the risk of leverage unwinds. Scandinavia is particularly exposed to leverage, Saravelos said.</li>
                                    <li className='py-2'>Beware history. The market is pricing the start of an aggressive easing cycle from the Fed next year, which makes sense given that over the last three decades, central banks pivoted as soon as economic growth started to slow. However, it has been a long time since there’s been an inflation problem. Saravelos notes that during the 1970s, when inflation persisted for roughly a decade, the U.S. price-to-earnings ratio declined from 20 to 7. As of Thursday, the forward price-to-earnings ratio for the S&P 500 stood at roughly 16.01, according to FactSet data.</li>

                                </ul>
                            </p>
                            <p>Fed funds futures are anticipating the first Fed rate cut to arrive next summer. Of course, so long as inflation persists, the Fed will likely keep monetary policy tight, unless a dramatic economic slowdown forces the central bank to capitulate.

                            </p>



                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default BlogDetailsThree