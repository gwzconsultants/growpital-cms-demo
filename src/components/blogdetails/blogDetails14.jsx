import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { blogpage14 } from '../../assets/img/contactimg'
// import blog1 from "../../assets/img/blogLarge.jpg"
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const BlogDetails14 = () => {
    return (
        <>
            <Header />
            <section>
                <Container  >
                    <Row className='text-white mb-3'>
                        <Col xs={12}>
                            <div className='profile '>
                                <div className='cover-profile '>
                                    <img src={blogpage14} alt="" className='cover-img w-100 h-100 rounded-4' />
                                </div>
                            </div>
                            <div>
                            <p className='py-3'>Nov 15,2022</p>
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
                            Lack of Financing in Farmland
                            </h1>

                            <p className='py-2'>The global agricultural market size is estimated to be around $12,541.15 billion in 2022, yet
                                finding farmland funding is an increasing challenge. Studies suggest that the global food demand will increase by 70% by 2050, calling for billions of dollars in investments, from the public and private sectors.
                            </p>
                            <p className='py-2'>Most of this capital needs to come from the private sector. This is especially in light of the
                                commercialization of the agricultural industry as a whole, a positive shift towards large-scale
                                mechanization, climate-smart technologies, processing, and agri-food logistics.
                            </p>
                            <p className='py-2'> However, the financial systems in large parts of the world is still ill-equipped to deal with the
                                urgency. Financial systems in most developing countries are ill-prepared to finance the shift to
                                sustainable agriculture and agri-food industries.
                            </p>
                            <p className='py-2 lh-18'>Organized financing options rarely reach medium and small-scale farmers, and they are often
                                left at the mercy of moneylenders. Agriculture loans and investments portfolios currently are
                                disproportionately low compared to the agriculture sector’s share of GDP.
                            </p>
                            <p className='py-2 lh-18'>Traditionally, capital flow in farmland has been dependent on two flanks, funding from the
                                organised sector, which entails banks, etc. and the unorganised sector, dominated by landlords
                                and moneylenders. The organised sector has been largely unable to penetrate the lower strata
                                of the industry which employs a large section of the population.

                            </p>
                            <p className='py-2 lh-18'>However, with the adoption and popularization of fintech services, investment avenues that
                                were traditionally inaccessible to average investors are now being democratized and made
                                accessible to everyone.


                            </p>
                            <p className='py-2 lh-18'>Agricultural bonds, Farmland REITs, and commodity trading is now bolstering the flow of capital
                                in this sector. However, it’s still not enough! Governments across the world should encourage the private sector to invest in agriculture, and the investment products should be designed and promoted.



                            </p>
                            <p className='py-2 lh-18'>Agriculture funding is for land, equipment, seed, fertilizers, pesticides, and irrigation. Then,
                                money to grow, harvest, ship and process the crop. It is after all these process that food
                                reaches the consum

                            </p>


                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default BlogDetails14