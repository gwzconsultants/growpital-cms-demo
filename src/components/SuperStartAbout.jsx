import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import Start1 from "../assets/img/start.png";
import { AiFillLinkedin } from "react-icons/ai";
import Slider from "react-slick";
import { Link } from "react-router-dom";



const SuperstarsAbout = (props) => {
  var settings = {
    responsive: [
     
       {
        breakpoint: 1000,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          autoplay: true,
          cssEase: "linear",
          arrows: false,
          centerPadding: "10px",
          slidesToShow: 1,
          rows: 1,
          slidesPerRow: 1,
          slidesToScroll: 1,
          speed: 2000,
          dots: true,
          autoplaySpeed: 1000,
        },
        
      },
    ],
  };

  const SuperStars = [
    {
      Id: "0",
      Img: Start1,
      Title: "Rituraj Sharma",
      Designa: "Founder, CEO",
      link:
        "https://www.linkedin.com/in/riturajsharma123/",
    },
    {
      Id: "1",
      Img: Start1,
      Title: "Krishna Sharma",
      Designa: "Co-founder, COO",
      link:
        "https://www.linkedin.com/in/krishnna-joshi-a33638118/",
    },
    {
      Id: "2",
      Img: Start1,
      Title: "Sudhir Paswan",
      Designa: "CEO - Agriculture Projects",
      link:
        "https://www.linkedin.com/in/sudhir-paswan-19326969/",
    },
    {
      Id: "3",
      Img: Start1,
      Title: "Karan Agrawal",
      Designa: "Growth & Operations",
      link:
        "https://www.linkedin.com/in/karan-agrawal-623b5531/",
    },
    {
      Id: "4",
      Img: Start1,
      Title: "Ankush Agrawal",
      Designa: "Arhtiya",
      link:
        "https://www.linkedin.com/in/ankushragrawal/",
    },
    {
      Id: "5",
      Img: Start1,
      Title: "Utkarsh Srivastava",
      Designa: "",
      link:
        "https://www.linkedin.com/in/utkarsh-srivastava-30210417/",
    },
    {
      Id: "6",
      Img: Start1,
      Title: "Shubhanshu Chouhan",
      Designa: "CTO",
      link:
        "https://www.linkedin.com/in/shubhanshu-chouhan/",
    },
    {
      Id: "7",
      Img: Start1,
      Title: "Fahad Shaikh",
      Designa: "Head of Operations",
      link:"https://www.linkedin.com/in/fahad-shaikh-611b43217/",
    },
  ]
  return (
    <>
     <div className="superstarsAbout"> 
     <Row>
        {SuperStars.map((Items) => (
          <Col md={6}  key={Items.Id}  className="d-none d-lg-block">
            
            <Card className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white">
              <Card.Body className="m-1 bg-dark-gradient rounded p-3">
                <Row>
                
                    
                  <Col xs={12} md={4}>
                  
                    <Image  src={Items.Img} className="img-fluid w-100 mb-md-0 mb-3" alt="profile pic" />
                    
                  </Col>
                  
                  
                  <Col xs={12} md={8}>
                    <Card.Title className="fw-600 fs-20 mb-0 pt-2">
                      {Items.Title}
                    </Card.Title>
                    <Card.Title className="fw-600 fs-14 mb-3 pt-2 text-italian">
                      <cite>{Items.Designa}</cite>
                      <a href={Items.link} >
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
        ))}
        </Row>


       <Slider {...settings} className="d-lg-none" >
     {SuperStars.map((Items) => (
          <Col md={12} lg={6} key={Items.Id} >
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
                      <AiFillLinkedin size={18} className="ms-2 text-indigo" />
                    </Card.Title>
                    <Card.Text className="fw-300 fs-15 lh-24">
                      {Items.SubTitle}
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Slider>
        </div>
    </>
  );
};

export default SuperstarsAbout;
