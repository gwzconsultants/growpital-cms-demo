import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { blogpage8 } from '../../assets/img/contactimg'
// import blog1 from "../../assets/img/blogLarge.jpg"
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const BlogDetailsEight = () => {
    return (
        <>
            <Header />
            <section>
                <Container  >
                    <Row className='text-white'>
                        <Col xs={12}>
                            <Card className='bg-transparent border-0'>
                                <Card.Img variant="top" src={blogpage8} className="img-thumbnail  rounded-4" />
                                <Card.Body>
                                    <Row >
                                        <Col><Card.Text><span>aug 12,2022</span> </Card.Text></Col>
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
                                Beyond Traditional Investment !!!
                            </h1>
                            
                                    <p className='py-2'>India’s agricultural exports grew at 17.5% during the peak pandemic year, 2020-2021, even when overall exports dipped by 7.2%. And this is not so surprising. Even though India enjoys a large quantum of global agricultural produce, its Agri export sector has just started to consolidate and grow. In 2019, the country made it to WTO’s list of top 10 agricultural produce exporters. In the early decades of its independence, India was faced with the stark challenge of feeding its huge population. Eventually, we managed to overcome the demand at home, and these days the country is at full sails in growing its Agri export sector.</p>
                                    <p className='py-2'>Farms are always backed by a tangible asset, agricultural land investment in India ensures a high degree of capital security. Agricultural land investment is becoming increasingly popular across the country. It's your turn now !!! Individuals who are engaged in salaried jobs or the ones who are residing in cities and are not near farmland may have difficulty in buying agricultural land and cultivating the same. To ensure that such individuals do not miss on the benefits of agricultural investment, Growpital steps up.</p>
                                    <p className='py-2'> Growpital was conceived to radically democratize farm investment in India by providing access to high profit opportunities to retail investors. Growpital has cultivated over 850+ acres of land over the last 2 years while impacting 68+ farmers. </p>
                                    <p className='py-2 lh-18'>The following are some of the advantages that agriculture investment through Growpital offers-  </p>
                                    <ul style={{ listStyleType: "disc" }} className="">
                                        <li> The returns on agriculture are fixed and tax free </li>
                                        <li> As the value appreciates over time, you will undoubtedly earn substantial benefits. </li>
                                        <li> Since agriculture investments are unaffected by market trends, it is a trusted hedge against inflation. </li>
                                        <li>Great returns are offered which goes upto 16% pa </li>
                                        <li>The investments starts from ₹5,000 only </li>
                                        <li>Growpital has investment projects suitable for every type of pocket size, ranging from investment of ₹2,00,000/ unit to ₹5,000/ unit. Growpital is a registered platform with the Ministry of Corporate Affairs (MCA). In order to ensure that assured returns reach the investors, returns are guaranteed by the contract between an investor and Business entity (Growpital). Furthermore, investing in Growpital is like investing directly in agriculture and profits are directly passed to the investor, just as the case of investing in underlying business and not in the individual stocks of the business. </li>
                                    </ul>
                              
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default BlogDetailsEight