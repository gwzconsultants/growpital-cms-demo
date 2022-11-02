import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { blogpage9 } from '../../assets/img/contactimg'
// import blog1 from "../../assets/img/blogLarge.jpg"
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const BlogDetailsNine = () => {
    return (
        <>
            <Header />
            <section>
                <Container  >
                    <Row className='text-white'>
                        <Col xs={12}>
                            <Card className='bg-transparent border-0'>
                                <Card.Img variant="top" src={blogpage9} className="img-thumbnail  rounded-4" />
                                <Card.Body>
                                    <Row >
                                        <Col><Card.Text><span>aug 24,2022</span></Card.Text></Col>
                                        {/*<Col className='text-end'><Card.Text>Banking</Card.Text></Col> */}
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
                                Alternative investments : Pros & Cons
                            </h1>
                            
                                    <p>Investment means to set money to generate more money. This is done by putting an amount of money/capital in a productive industry, in order to get returns/profits in exchange for the same. For example, providing a loan to an individual or constructing a factory and so on.</p>
                                    <p>Majorly, there are two types of traditional investments-</p>

                                    <ol type='1'>
                                        <li className='py-2'> Equity concerns the buying and selling of a company’s share which is listed in the stock market. Investing in equity gives a part of the ownership of the company to the investor/ equity holder. Returns in this type of investment comes in the form of dividends and also from the fluctuations in the price of the stocks. Market volatility has an important role to play in equity and thus the risk is high.</li>
                                        <li className='py-2' >Debt is the second type of investment which includes lending money to a firm in exchange of interest and the principal amount. This type of investment doesn’t provide any ownership to the investor and these are not affected by market trends, thus they are also called ‘fixed and assured investment.’ </li>

                                    </ol>
                                    <p>Traditional investments are highly regulated by Securities and Exchange Board of India (SEBI) and they do not provide diversification to the individuals who look for high returns at the cost of lower risks. To fulfill this demand of diversification, alternative investments step into the picture.</p>
                                    <p>Alternative investment is a Special Purpose Vehicle (SPV) which invests in non traditional assets. Here SPV acts as a tool for the pool of money by partners in trust, company or Limited Liability Partnerships (LLPs). Let us now see some of the features of alternative investments to understand them better-</p>
                                    <ol type='1'>
                                        <li className='py-2'> There is a high degree of private pooling since these investments are mostly managed by private players</li>
                                        <li className='py-2'>These investments are excluded from most of the regulations of SEBI </li>
                                        <li className='py-2'>These investments are focused on one particular industry or product. </li>
                                        <li className='py-2'>These assets are illiquid meaning that they have a lock-in period.</li>

                                    </ol>
                                    <p>Let us look at the types of alternative investments-</p>
                                    <ul type="none" className='py-2'>
                                        <li>Type 1</li>
                                        <ul type="none">
                                            <li>These include investments in startups, social ventures, SMEs etc. Government provides sponsorship to these investments since the degree of social well being is high. </li>
                                        </ul>
                                    </ul>
                                    <ul type="none" className='py-2'>
                                        <li>Type 2</li>
                                        <ul type="none">
                                            <li>This section of alternative investments include private equity funds or debt funds. Government has little intervention in such investments.For example, National Investment and Infrastructure Fund (NIIF) is a collective investment platform for national as well as foreign investors, which is anchored by the government of India. NIIF is responsible for investing across infrastructure and growth equity by staying focused on sustainable investing principles. It collaborates with the government and commercial stakeholders on crucial economic and investment issues that lead to policy improvements and the establishment of new investment possibilities in India.</li>
                                        </ul>
                                    </ul>
                                    <ul type="none" className='py-2'>
                                        <li>Type 3</li>
                                        <ul type="none">
                                            <li>Lastly, this type of investment includes Short term return. These assets aim at maximizing private profits and the degree of social well being is the least. Type 3 of alternative investments are open ended i.e they do not have a lock-in period. </li>
                                        </ul>
                                    </ul>
                                    <p>Alternative investment reduces the risk of market volatility, provides better diversification and improved economic performance. However, they also require high investments and they are very complex to understand. Even though this type of investment has its own limitations, it is one of the most talked about subjects in today’s time. Growpital is one such alternative investment option which focuses on democratizing farm investment by providing access to high profit opportunities to retail investors. Moreover, the returns are guaranteed and tax free. If an individual invests with proper knowledge and research, alternative investments are indeed a very good option.</p>
                                
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default BlogDetailsNine