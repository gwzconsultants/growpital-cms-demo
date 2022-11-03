import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import { blogpage2 } from '../../assets/img/contactimg'
// import blog1 from "../../assets/img/blogLarge.jpg"
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const BlogDetailsTwo = () => {
    return (
        <>
            <Header />
            <section>
                <Container  >
                    <Row className='text-white mb-3'>
                        <Col xs={12}>
                            <div className='profile '>
                                <div className='cover-profile  text-center'>
                                    <img src={blogpage2} alt="" className='cover-img w-100 h-100 rounded-4' />
                                </div>
                            </div>
                            <div>
                                <p className='py-3'>Oct 3,2022</p>
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
                                Farm Sizes by Country
                            </h1>

                            <p>Almost 38% of the global land surface is used for agricultural purposes, in one way or the other. In absolute terms, it is over five billion hectares.</p>
                            <p>However, only one-third of this is for cropland cultivation and the rest are pastures, majorly used for grazing. India has the largest cultivated land area, in terms of percentage of total land mass, amounting to around 53.7%. The country also holds the second position globally, regarding the number of farms, second only to China.</p>
                            <p>However, when it comes to average farm sizes, India is far behind countries like the United States, Brazil, and European countries. The average farm size in India is a meager 1.3 hectares, while in the US it is a whopping 178 hectares! India has the largest arable land area in the world, both in terms of percentage and absolute area coverage. With over 1,656,780 Sq Km of arable land, which is over 50% of its total landmass, India is way ahead of the US, China, Brazil, and other agricultural powerhouses.</p>
                            <p>The United States of America holds the second position globally in terms of total cultivated land and arable landmass. In terms of absolute area coverage, it is not much behind India, however, as a percentage of the total landmass, only 17% of the country comprises cultivated land. Agricultural area usage is categorized into three major categories, namely, arable land, that is land used in a cyclical manner for cultivation; permanent crops; and permanent meadows and pastures.</p>
                            <p>In fact, according to the UN’s Food and Agriculture Organisation, over 69% of the global agricultural area is permanent meadows and pastures, which are primarily used for grazing purposes. To the surprise of many, global agricultural land area has been on a gradual rise over the decades. Even though this sounds like a relief in light of the ever-increasing demand for food, an increase in agricultural land often means a decline in forest cover.</p>
                            <p>This is a delicate tightrope that humanity has to walk.</p>



                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default BlogDetailsTwo