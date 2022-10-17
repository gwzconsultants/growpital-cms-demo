import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import Start1 from "../assets/img/start.png";
import { AiFillLinkedin } from "react-icons/ai";
import Slider from "react-slick";



const Superstars = (props) => {
  var settings = {
    className: "center",
    responsive: [
     
       {
        breakpoint: 800,
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
      Id: "1",
      Img: Start1,
      Title: "Rajeev Malviya",
      Designa: "Directore",
      SubTitle:
        "During the performance review process, you will measure an employee’s performance relative to a set period.",
    },
    {
      Id: "2",
      Img: Start1,
      Title: "Rajeev Malviya",
      Designa: "Directore",
      SubTitle:
        "During the performance review process, you will measure an employee’s performance relative to a set period.",
    },
    {
      Id: "3",
      Img: Start1,
      Title: "Rajeev Malviya",
      Designa: "Directore",
      SubTitle:
        "During the performance review process, you will measure an employee’s performance relative to a set period.",
    },
    {
      Id: "4",
      Img: Start1,
      Title: "Rajeev Malviya",
      Designa: "Directore",
      SubTitle:
        "During the performance review process, you will measure an employee’s performance relative to a set period.",
    },
  ];
  return (
    < >
     {/* <section className="">  */}
     
        {SuperStars.map((Items) => (
          <Col md={12} lg={6} key={Items.Id}  className="d-none d-md-block">
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
        {/* </section> */}

       <Slider {...settings} className="d-md-none" >
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

    </>
  );
};

export default Superstars;
