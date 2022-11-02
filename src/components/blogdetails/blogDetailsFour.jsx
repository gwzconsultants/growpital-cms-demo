import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { blogpage4 } from '../../assets/img/contactimg'
// import blog1 from "../../assets/img/blogLarge.jpg"
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const BlogDetailsFour = () => {
    return (
        <>
            <Header />
            <section>
                <Container  >
                    <Row className='text-white'>
                        <Col xs={12}>
                            <Card className='bg-transparent border-0'>
                                <Card.Img variant="top" src={blogpage4} className="img-thumbnail  rounded-4" />
                                <Card.Body>
                                    <Row className='py-3'>
                                        <Col><Card.Text><span> april 11,2022</span></Card.Text></Col>
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
                                What are Hydroponics and Aquaponics farming techniques?
                            </h1>
        
                 
                                    <p>Soil is one of the essential elements of agriculture. Right?</p>
                                    <p>Well, yes and no!</p>
                                    <p>Yes, because most plants do need soil for their large-scale production. And no because, hydroponics and aquaponics are two farming techniques, recently gaining traction that uses a soil-less base to cultivate organic vegetables & herbs.</p>
                                    <p>These two techniques are becoming increasingly popular as urban farming methods, for terrace and roof-top gardening. However, these techniques can also be used for commercial cultivation of certain herbs, vegetables, and fruits.</p>
                                    <p>Hydroponics is a method of growing plants in a soil-free base. Instead of soil, the roots are usually immersed in water. The water runs through a set drainage system and it keeps cycling through the system. This way, the plants keep on receiving fresh water, and there’s no need for manually watering the plants. In some cases, instead of soil, a base called a growing medium is used, like rockwool or hydroton. The water is often added with nutrient solutions to make up for the soil less base.</p>
                                    <p>Aquaponics combines the technique of hydroponics with aquaculture. In addition to growing plants in water, it also introduces fish into the system. Fish waste in the water acts as a natural source of nutrients for the plants. While aquaponics can be a bit tedious, hydroponics is being largely accepted as a fun and efficient farming techniqu</p>
                                    <p>The major benefit of hydroponics is that it can be easily set up. The lack of soil makes it easierfor urban farm enthusiasts, as you don’t need to pay any attention to soil quality. Secondly, hydroponics is a great technique for indoor farming. There are several vegetables and herbs that can be cultivated using this method. These include lettuce, spinach, tomatoes, etc. One can also use vertical farming techniques using equipment like the grow towers, reducing the space needed to set up a hydroponics system.</p>


            
            
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default BlogDetailsFour 