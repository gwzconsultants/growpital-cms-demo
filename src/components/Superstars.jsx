import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
// import Start1 from "../assets/img/start.png";
import { AiFillLinkedin } from "react-icons/ai";
import Slider from "react-slick";

import { Star1, Star2, Star3, Star4, Star5, Star6, Star7, Star8 } from "../assets/img/contactimg";


const Superstars = (props) => {
  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "15px",
    slidesToShow: 2,
    rows: 1,
    slidesPerRow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 700,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "10px",
          slidesToShow: 1,
          rows: 2,
          slidesPerRow: 1,
          slidesToScroll: 1,
          speed: 3000,
          autoplaySpeed: 700,
        },
      },
      {
        breakpoint: 768,
        settings: {
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
      Id: "1",
      Img: Star1,
      Title: "Rituraj Sharma",
      Designa: "Founder, CEO",
      link:"https://www.linkedin.com/in/riturajsharma123/",
      SubTitle:
        "Rituraj is an alumnus of IMT Nagpur and an engineer. He has over 10 years of experience being a serial entrepreneur in industries related to Solar Energy & Agriculture. Apart from being a true leader and motivator for the team, his rich experience and business acumen helps organizations to manoeuvre through all challenges.",
    },
    {
      Id: "2",
      Img: Star2,
      Title: "Krishna Joshi",
      Designa: "CoFounder & Farming Operations Lead",
      link:"https://www.linkedin.com/in/krishnna-joshi-a33638118/",
      SubTitle:
        "Krishna is a process oriented and operations freak person. His educational background in commerce & business management have led him to see through various industries. He comes with vast experience of 12 years across industries ranging from BFSI, Marketing & automobile. His operations expertise across industries makes him one of a kind. ",
    },
    {
      Id: "3",
      Img: Star3,
      Title: "Sudhir Paswan",
      Designa: "Operations & Agronomy",
      link:"https://www.linkedin.com/in/sudhir-paswan-19326969/",
      SubTitle:
        "An Agriculture Graduate with 16+ years of agribusiness experience with Corporates and social organisations like Reliance, REI, PepsiCo, KGVK, Swades Foundation. Married to Srilagna who is an IT Analyst with TCS and son Sourish who is 3 years studying in nursery with DPS.",
    },
    {
      Id: "4",
      Img: Star4,
      Title: "Karan Agrawal",
      Designa: "Growth & Operations",
      link:"https://www.linkedin.com/in/karan-agrawal-623b5531/",
      SubTitle:
        "Karan is a motivated and self driven person with diverse experience of around 10 years in power and agriculture sector. He is B. Tech (Honors) in Mechanical engineering from NIT Raipur and PGDM Operations and Strategy from MDI Gurgaon. He has a rich experience in operations & growth and comes with an entrepreneurial mindset.",
    },
  ];
  const SuperStars2 = [
    {
      Id: "1",
      Img: Star5,
      Title: "Ankush Agrawal",
      Designa: "CRO (Post Harvest Sales)",
      link:"https://www.linkedin.com/in/ankushragrawal/",
      SubTitle:
        "Ankush is a Problem Solver and Knowledge Seeker. He has 10+ years experience spanning Social Media & Digital Marketing, Market Research & Consumer Insights, Data Analytics & Business Strategy responsibilities across multiple sectors. A PGDM in Marketing & Operations from IMT Nagpur & B Tech UDCT Mumbai graduate.",
    },
    {
      Id: "2",
      Img: Star6,
      Title: "Utkarsh Srivastava",
      Designa: "Marketing",
      link:"https://www.linkedin.com/in/utkarsh-srivastava-30210417/",
      SubTitle:
        "Utkarsh is a first principles person. Graduated from IMT Nagpur & did his B Tech in computer science prior to that. He is also an Alumnus of IIM Lucknow. He has an analytical bent of mind and looks for exponential growth in every sphere of life. He has over a decade of diversified experience in BFSI, Fintech and Edtech industries.",
    },
    {
      Id: "3",
      Img: Star7,
      Title: "Shubhanshu Chouhan",
      Designa: "CTO",
      link:"https://www.linkedin.com/in/shubhanshu-chouhan/",
      SubTitle:
        "Passionate about developing high-performing teams and using transformational leadership to accelerate business capabilities and optimize IT value. Recognized for creating impactful relationships, strategic sourcing, consensus building, and leading full-cycle global projects to enhance the portfolio of enterprise applications.",
    },
    {
      Id: "4",
      Img: Star8,
      Title: "Fahad Shaikh",
      Designa: "Farm Operations",
      link:"https://www.linkedin.com/in/fahad-shaikh-611b43217/",
      SubTitle:
        "Fahad is an energetic & goal driven individual. His experience spans more than a decade in Supply Chain, Agriculture, Restaurants, Entrepreneurship and Telecommunication sector. He has operational skills and also possesses expertise in team management, vendor management, client management, and quality assurance.",
    },
  ];
  return (
    < >
     {/* <section className="">  */}
     <Row className="d-flex justify-content-center align-items-start pt-3 superstars">
       <Col md={12}   className="d-none d-md-block">
     <Slider {...settings} className="d-md-none" >
        {SuperStars.map((Items) => (
            <Card className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white" key={Items.Id}>
              <Card.Body className="m-1 bg-dark-gradient rounded p-4 d-flex">
               
                  <div className="star-img" >
                    <Image src={Items.Img} alt="" />
                  </div>
                  <div className="ms-3">
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
                  </div>
        
              </Card.Body>
            </Card>
        ))}
        {/* </section> */}
        </Slider>
        </Col>
        </Row>
        <Slider {...settings}  >
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
       <Slider {...settings}  >
     {SuperStars2.map((Items) => (
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

    </>
  );
};

export default Superstars;
