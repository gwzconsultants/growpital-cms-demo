import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Star1, Star2, Star3, Star4, Star5, Star6, Star7, Star8 } from "../assets/img/contactimg";
import { Card, Col, Image, Row } from "react-bootstrap";
import { AiFillLinkedin } from 'react-icons/ai';

import { Autoplay, EffectCards } from 'swiper';

const SuperStars2 = () => {

  const SuperStars = [
    {
      Id: "1",
      Img: Star1,
      Title: "Rituraj Sharma",
      Designa: "Founder, CEO",
      link:
        "https://www.linkedin.com/in/riturajsharma123/",
      SubTitle:
        "Rituraj is an alumnus of IMT Nagpur and an engineer. He has over 10 years of experience being a serial entrepreneur in industries related to Solar Energy & Agriculture.",
    },
    {
      Id: "2",
      Img: Star2,
      Title: "Krishna Joshi",
      Designa: "Co-Founder & COO",
      link: "https://www.linkedin.com/in/krishnna-joshi-a33638118/",
      SubTitle:
        "Krishna comes with vast experience of 12 years across industries ranging from BFSI, Marketing & automobile. His educational background in commerce & business management have led him to see through various industries.",
    },
    {
      Id: "3",
      Img: Star3,
      Title: "Sudhir Paswan",
      Designa: "BU Head - Farm Portfolio",
      link: "https://www.linkedin.com/in/sudhir-paswan-19326969/",
      SubTitle:
        "An Agriculture Graduate with 16+ years of agribusiness experience with Corporates and social organisations like Reliance, REI, PepsiCo, KGVK, Swades Foundation.",
    },
    {
      Id: "4",
      Img: Star4,
      Title: "Karan Agrawal",
      Designa: "Strategic Partnership",
      link: "https://www.linkedin.com/in/karan-agrawal-623b5531/",
      SubTitle:
        "Karan is a self driven person with diverse experience of around 10 years in power and agriculture sector. He is B. Tech (Honors) in Mechanical engineering from NIT Raipur & PGDM Operations and Strategy from MDI Gurgaon.",
    },
    // ];
    // const SuperStars2 = [
    {
      Id: "5",
      Img: Star5,
      Title: "Ankush Agrawal",
      Designa: "Head - Business Operations",
      link: "https://www.linkedin.com/in/ankushragrawal/",
      SubTitle:
        "Ankush has 10+ years experience spanning Social Media & Digital Marketing, Market Research & Consumer Insights, Data Analytics & Business Strategy responsibilities across multiple sectors. A PGDM in Marketing & Operations from IMT Nagpur & B Tech UDCT Mumbai graduate.",
    },
    {
      Id: "6",
      Img: Star6,
      Title: "Utkarsh Srivastava",
      Designa: "Chief Business Oficer",
      link: "https://www.linkedin.com/in/utkarsh-srivastava-30210417/",
      SubTitle:
        "Utkarsh is a first principles person. Graduated from IMT Nagpur & did his B Tech in computer science prior to that. He is also an Alumnus of IIM Lucknow. He has over a decade of diversified experience in BFSI, Fintech and Edtech industries.",
    },
    {
      Id: "7",
      Img: Star7,
      Title: "Shubhanshu Chouhan",
      Designa: "Chief Technical Officer",
      link: "https://www.linkedin.com/in/shubhanshu-chouhan/",
      SubTitle:
        "Passionate about developing high-performing teams using transformational leadership to accelerate business capabilities and optimize IT value. Recognized for creating impactful relationships, strategic sourcing, consensus building, and leading full-cycle global projects.",
    },
    {
      Id: "8",
      Img: Star8,
      Title: "Fahad Shaikh",
      Designa: "VP- Farm Operations",
      link: "https://www.linkedin.com/in/fahad-shaikh-611b43217/",
      SubTitle:
        "Fahad's experience spans more than a decade in Supply Chain, Agriculture, Restaurants, Entrepreneurship and Telecommunication sector. He has operational skills and also possesses expertise in team management, vendor management, client management, and quality assurance.",
    },
  ];

  return (
    <Swiper
      breakpoints={{
        0: {
          spaceBetween: 10,
          slidesPerView: 1,
        },

        576: {
          spaceBetween: 10,
          slidesPerView: 1,
        },
        768: {

          slidesPerView: 1,
        },
        1000: {

          slidesPerView: 2,
        },
        1200: {

          slidesPerView: 2,
        },

      }}
      modules={[Autoplay, EffectCards]}
      spaceBetween={5}
      speed={500}
      slidesPerView={2}
      grabCursor={true}
      loop={true}
      effect={"fade"}
      autoplay={
        {
          delay: 3000,
          disableOnInteraction: false,
        }
      }


    >

      <Row className="d-flex justify-content-center align-items-start pt-3 superstars">
        <Col md={12} className="d-none d-md-block px-5">
          {SuperStars.map((Items) => (
            <SwiperSlide key={Items.Id} >
              <Col md={12} className=" px-1 " >
                <Card className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white">
                  <Card.Body className="m-1 bg-dark-gradient rounded p-4">
                    <Row>
                      <Col xs={12} md={4}>
                        <Image src={Items.Img} className="img-fluid w-100 mb-md-0 mb-3" alt="" />
                      </Col>
                      <Col xs={12} md={8}>
                        <Card.Title className="fw-600 fs-20 mb-0 pt-2">
                          {Items.Title}
                        </Card.Title>
                        <Card.Title className="fw-600 fs-14 mb-3 pt-2 text-italian">
                          <cite>{Items.Designa}</cite>
                          <a href={Items.link} target="blank">
                            <AiFillLinkedin size={18} className="ms-2 text-indigo" />
                          </a>
                        </Card.Title>
                        <Card.Text className="fw-300 fs-15 lh-24">
                          {Items.SubTitle}
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </SwiperSlide>
          ))}
          {/* </section> */}
        </Col>
      </Row>

      ...
    </Swiper>
  )
}

export default SuperStars2