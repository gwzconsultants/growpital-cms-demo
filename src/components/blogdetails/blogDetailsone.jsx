import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { blogBig } from '../../assets/img/contactimg'
// import blog1 from "../../assets/img/blogLarge.jpg"
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const BlogDetailsone = () => {
    return (
        <>
            <Header />
            <section>
                <Container  >
                    <Row className='text-white'>
                        <Col xs={12}>
                            <Card className='bg-transparent border-0 rounded-5'>
                                <Card.Img variant="top" src={blogBig} className="img-thumbnail  rounded-4" />
                                <Card.Body>
                                    <Row >
                                        <Col><Card.Text><span>jan 29 ,2022</span></Card.Text></Col>
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
                                        Myths about Indian Agriculture !!!
                                    </h1>
                                
                                    <p>In India, around 58% of the total population depends on Agriculture as the primary source of income and livelihood.</p>
                                    <p> The food processing industry in the country accounts for around 32% of the entire food market. That said, there are still many myths about agriculture in this country, and it’s high time to know the reality.</p>
                                    <p>Many people believe that agriculture in India is declining. However, the reality is far from this misconception. In 2020-2021, the sector grew by 3.6% which further increased in the year 2021-2022 to 3.9%. The overall input of agriculture in India’s GDP went up by 9.2% in 2021-2022. So, agriculture is still one of the main contributors to India’s GDP and it is not declining.</p>
                                    <p>Another misconception about this sector is that it is not profitable anymore. However, the facts and figures suggest a different scenario. During 2018-2022, the average income of farmers across the country increased by 1.3x to 1.7x. While in some parts of the country like Maharashtra and Karnataka, the income has been doubled, for certain crops like soybean and Cotton respectively. An increase in the Minimum Support price (MSP) and getting close to market-linked prices are one of the major factors driving this growth in the income of the farmers.</p>
                                    <p>There is another misleading belief that India is lagging behind China in agriculture. However, the reality is even being the second largest producer of crops after China, India exports more agricultural products than it imports. Being a developing country, India is one of the most self-sufficient ones when it comes to agriculture.</p>
                                    <p>If you knew that Indian agriculture is primarily about food grains, then you are again far away from reality. At present, 60% of the agricultural GDP of India comes from vegetables, fruits and animal husbandry. You may be amazed to know that India is the largest producer of milk in the world.</p>
                                    <p>Another myth about Indian agriculture is that it solely depends on rain, but gone are those days. Currently, India is having the largest stretch of land which is under irrigation, across the globe.</p>
                                    <p>Many are shifting to organic vegetables, and fruits as most of us believe that huge quantities of chemicals are used to protect and grow crops in the country. However, Indian farmers use only 0.4 kg of chemicals per hectare of land while in Germany it is 3.7 kg per hectare on average, and 2.8 kg per hectare in the UK.</p>
                                    <p>So, agriculture is still the predominant source of income for the majority of the population in the country and it is not declining rather India is becoming more self-sufficient with innovation in the agriculture sector.</p>
                               
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default BlogDetailsone