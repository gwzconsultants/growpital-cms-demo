import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import { blogpage7 } from '../../assets/img/contactimg'
// import blog1 from "../../assets/img/blogLarge.jpg"
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const BlogDetailsSeven = () => {
    return (
        <>
            <Header />
            <section>
                <Container  >
                    <Row className='text-white mb-3'>
                        <Col xs={12}>
                        <div className='profile '>
                        <div className='cover-profile'>
                            <img src={blogpage7} alt="" className='cover-img w-100 h-100  rounded-4' />
                        </div>
                    </div>
                    <div>
                        <p className='py-3'>May 23,2022</p>
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
                           
                                
                                    <p className='py-3'>India’s agricultural exports grew at 17.5% during the peak pandemic year, 2020-2021, even when overall exports dipped by 7.2%. And this is not so surprising. Even though India enjoys a large quantum of global agricultural produce, its Agri export sector has just started to consolidate and grow. In 2019, the country made it to WTO’s list of top 10 agricultural produce exporters. In the early decades of its independence, India was faced with the stark challenge of feeding its huge population. Eventually, we managed to overcome the demand at home, and these days the country is at full sails in growing its Agri export sector.</p>
                                    <p className='py-3'>And, quite frankly, it's a huge opportunity! The US is the second-largest exporter of Agri produced after the EU, and brings in billions of dollars every year. In 2021 itself, it earned a whopping $177 billion from Agri exports, while India managed to settle at $41.8 billion. But this is actually good news for the Indian agricultural sector!</p>
                                    <p className='py-3'>While the US has probably maxed out, India has just started to focus on Agri exports. In 2021, the country’s agricultural exports grew by 17.5% despite the pandemic. In 2021-2022, it further grew by 19.92% year-on-year, crossing $50 billion. Top crops exported from India include non-basmati rice, basmati rice, sugar, spices, wheat, raw cotton, castor oil, etc. Other than crops, marine products, and buffalo meat are also major sources of export income for the country. India is the largest exporter of rice, accounting for over 37% of global rice exports, and also a major exporter of wheat. After China, India is the second-largest producer of food! We have a huge domestic market to cater to, and that acts as a crutch for the agriculture sector.</p>
                                    <p className='py-3'>Even though our cultivable land is decreasing year on year, food production has been on an increasing trend. Overall it can be said India’s Agriculture sector is likely to maintain its praiseworthy performance in the coming years.</p>
                               
                            
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default BlogDetailsSeven