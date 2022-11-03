import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import {  blogpage6 } from '../../assets/img/contactimg'
// import blog1 from "../../assets/img/blogLarge.jpg"
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const  BlogDetailsSix = () => {
    return (
        <>
            <Header />
            <section>
                <Container  >
                    <Row className='text-white mb-3'>
                        <Col xs={12}>
                        <div className='profile '>
                        <div className='cover-profile'>
                            <img src={blogpage6} alt="" className='cover-img w-100 h-100  rounded-4' />
                        </div>
                    </div>
                    <div>
                        <p className='py-3'>June 15,2022</p>
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
                                    What are different types of Farming?
                                    </h1>
                            <Col>
                                    <h4 className='pt-3'>TYPES OF FARMING</h4>
                                    <ul type="none">
                                        <li>Crop production and rearing livestock is referred to as farming. This sector is very important in building the economic strength of a country and thus it is important that adequate efforts are made in order to flourish the farming sector. Factors like demand of the produce, geographical location of the farms, technology used in harvesting affect the farm activities. In India, there are a number of farming types and the major ones are discussed below-</li>
                                    </ul>
                                <ul type="none">
                                    <h5 className='pt-3'>Open field farming: </h5>
                                    <ul type="none">
                                        <li>In this type of farming, each settlement has two or three huge fields, each covering several hundred acres and split into several small strips. Tenants of these lands usually farm the strips.</li>
                                    </ul>
                                    <h5 className='pt-3'>Shade net farming:  </h5>
                                    <ul type="none">
                                        <li>A shade house is a building that is encased with Agro nets or other woven materials with holes that enable sunshine, moisture, and air to flow through. It produces a microclimate that is beneficial to plant development. </li>
                                    </ul>
                                    <h5 className='pt-3'>Hydroponics:   </h5>
                                    <ul type="none">
                                        <li>It's a means to grow crops directly in nutrient-rich water without using soil. Instead, it uses a different substance to support the plant's roots. Molten rock spun into fibers, fused sedimentary rock, clay pebble, coconut coir, sand, pumice, and vermiculite have all been effectively employed as substrates. The frequency and concentration of fertilizer solution, which is commonly produced from fish or duck feces or synthetic fertilizers, is injected through the plant on a regular basis, depending on the plant and environmental variables such as light and temperature. The solution drains into a tank, which is normally pumped automatically.</li>
                                    </ul>
                                    <h5 className='pt-3'>Sandoponics:    </h5>
                                    <ul type="none">
                                        <li>It is a way of growing agricultural plants in water without soil using mineral nutrition solutions. Terrestrial plants can be cultivated with their roots solely in the mineral fertilizer solution or in an inert medium like perlite, gravel, sand, or other inert materials. Instead of relying on the soil, it is the art and science of producing crops with balanced quantities of plant nourishment in the form of fertilizers and water. </li>
                                    </ul>
                                    <h5 className='pt-3'>Aquaponics:    </h5>
                                    <ul type="none">
                                        <li>Here aquaculture (raising aquatic animals such as fish, crayfish, snails, or prawns in tanks) and hydroponics (growing plants in water) are combined and nutrient-rich aquaculture water is given to hydroponically grown plants, where ammonia is converted to nitrates by nitrifying bacteria. </li>
                                    </ul>
                                    <h5 className='pt-3'>Indoor vertical farming:    </h5>
                                    <ul type="none">
                                        <li>Vertical farming is the practice of growing plants in layers utilizing LED illumination and carefully regulated growth and feeding systems. Growing more food in far less space and avoiding pesticides are two advantages of this type of agriculture. Because the plants are stacked in layers vertically, many of the farms resemble warehouses with massive shelving units. However, the high cost of real estate and technology, as well as the use of fossil fuels by farmers, are some of the barriers to widespread implementation.</li>
                                    </ul>
                                    <h5 className='pt-3'>Others:     </h5>
                                    <ul type="none">
                                        <li>Beekeeping is also one of the farming types where there is human management of bee colonies, usually in man-made hives. Another type is the cultivation of mushrooms and other fungus which is known as fungiculture. Fungi can be grown for food, medicine, building materials, and other uses. Additionally, poultry farming is the practice of raising domesticated birds such as chickens, ducks, turkeys, and geese for the purpose of producing meat or eggs for human use. Goat farming is another sort of animal husbandry that entails the keeping and breeding of domestic goats. Goats are raised primarily for their meat, milk, fiber, and skin. In low-quality grazing areas, goat farming might be a good fit for production with other animals (such as sheep and cattle). </li>
                                        <li>Finally, in recent years, "micro-farming" has buzzed through trendy agricultural circles like a bee in a pollinator garden, leaving many farmers bewildered as to what it implies. Micro farming is a type of urban or suburban farming that is small-scale, high-yielding, and ecologically friendly. Terrace garden and home garden farming are examples of such micro farming techniques. </li>
                                    </ul>
                                   
                                    
                                </ul>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default BlogDetailsSix 