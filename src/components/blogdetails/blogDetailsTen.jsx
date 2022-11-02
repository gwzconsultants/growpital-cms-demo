import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { blogpage10 } from '../../assets/img/contactimg'
// import blog1 from "../../assets/img/blogLarge.jpg"
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const BlogDetailsTen = () => {
    return (
        <>
            <Header />
            <section>
                <Container  >
                    <Row className='text-white'>
                        <Col xs={12}>
                            <Card className='bg-transparent border-0'>
                                <Card.Img variant="top" src={blogpage10} className="img-thumbnail  rounded-4" />
                                <Card.Body>
                                    <Row >
                                        <Col><Card.Text><span>sept 9,2022</span> </Card.Text></Col>
                                        {/* <Col className='text-end'><Card.Text>Banking</Card.Text></Col> */}
                                    </Row>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className='text-white'>
                        <Col xs={12}>
                            <h1 className='pb-3'>
                                Exploring new and safe investment options
                            </h1>
                            <p>‘Accident hurts, safety doesn’t’ – A quote by which most of the Indian investors live by. Today, when multiple market linked investment options are catching the eye of investors, there is still a major chunk of the society who believes in investing in Fixed deposits and Public Provident Funds. In terms of having a safety net of meeting their financial goals, Indian investors prefer these two investments for fixed returns and capital preservation. Fixed returns offered on FDs and PPFs is the most sought after investment option for people who do not want to risk their money in other investment options. </p>
                            <p>However, investors who go for FDs and PPFs are chasing merely 5-8% return they would get at the cost of long lock-in periods. The lock-in term for an FD account is very much like the maturity period or deposit term. This simply implies that you will not be able to withdraw the funds within this stipulated time frame, in case you do, there will be a penalty levied. Then comes Growpital, which not only addresses these problems, also offers safe and assured higher returns. Growpital is an alternative investment option giving tax free fixed returns of minimum 10% p.a. and easy investing procedure. Moreover, any market linked fluctuations are eliminated since Growpital is not linked to financial markets.</p>
                            <p>Growpital is a safe and trusted alternative investment platform which is registered with the Ministry of Corporate Affairs (MCA). Assured returns are guaranteed by the contract between an investor and Business entity (Growpital). Furthermore, investing in Growpital is like investing directly in agriculture and profits are directly passed to the investor, just as the case of investing in underlying business and not in the individual stocks of the business. Here, returns are not made of the speculative value of a particular company’s shares as it happens in the stock market. Returns are earned by sale of farm produce and profit is distributed as per agreement to each Investor.</p>
                            <p>Growpital stands as a perfect alternative to users who are looking for diversification with assured tax free returns beyond Stocks, Mutual funds, Gold bonds, Fixed deposits and Corporate bonds.</p>

                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default BlogDetailsTen