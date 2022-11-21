import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { blogpage13 } from '../../assets/img/blog_imgs'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const BlogDetails13 = () => {
    return (
        <>
            <Header />
            <section>
                <Container  >
                    <Row className='text-white mb-3'>
                        <Col xs={12}>
                            <div className='profile '>
                                <div className='cover-profile '>
                                    <img src={blogpage13} alt="" className='cover-img w-100 h-100 rounded-4' />
                                </div>
                            </div>
                            <div>
                                <p className='py-3'> Nov 5,2022 </p>
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
                            India is importer or exporter of Farm produce?
                            </h1>


                            <p>India is known for being an agricultural powerhouse. In fact, it has been self-sufficient for much of its agricultural needs for the last few decades. However, India still depends on agrarian imports for Agri and allied commodities .</p>
                            <p>The country has a place in both the lists of top 10 agricultural exporters and top 10 importers . You must have heard or read in the news that India’s agricultural exports have increased manifolds in the last one decade. However, it needs to be noted that during the same time our imports have gone up too.</p>
                            <p>The imports of Agri and allied commodities during April 2020 – Feb 2021 were Rs. 141034.25 Crore as compared to Rs. 137014.39 Crore in the same period last year witnessing a slight increase of 2.93%. In fact, India’s Agri imports have gone up at a slightly higher pace than its exports. In the last 15 years, exports have gone up 7 times, while agri imports have multiplied 8 times.</p>
                            <p>However, it needs to be appreciated that the country is self-sufficient or even a surplus producer of staple food grain crops like wheat, rice, maize, etc. and is a significant exporter of the same. Much of our agricultural imports consist of vegetable oils, fruits, pulses, spices, and allied commodities.</p>
                            <p>Vegetables oils account for more than 54% of India’s agricultural imports. Other major agri-imports are fresh fruits, pulses, spices, and cashew. Together, the five products account for 80% of India’s agri-imports. Agricultural imports also entail the import of high-value agricultural products, like alcoholic beverages, cocoa products, marine products, etc.</p>
                            <p>At present, India has been maintaining a trade surplus in agricultural products. India’s agricultural and allied exports during 2019-20 were Rs. 2.52 lakh Crores and imports were Rs. 1.47 lakh Crores. However, both these parameters continue to be on an upward trend.</p>
                            <p>It is a relief, that the country is a surplus producer of staple food grains, and is now focusing on becoming not just self-sufficient, but an exporter of high-value agricultural products.</p>
                            

                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default BlogDetails13