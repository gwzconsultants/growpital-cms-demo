import React from "react";
import { useState } from "react";
import { Accordion, Carousel, Col, Row } from "react-bootstrap";
import img1 from "../assets/img/pic-1.png";
import img2 from "../assets/img/pic-2.png";
import img3 from "../assets/img/pic-3.png";
import img4 from "../assets/img/pic-4.png";

const Accordian = (props) => {

  const [index, setIndex] = useState();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleClick =()=>{
    setIndex()
    
  }

 
  const AccorianItems = [
    {
      Id: 0,
      Title: "Create account and complete KYC",
      SubTitle:
        "KYC process includes ID card verification, face verification, document verification such as utility bills as proof of address, and biometric verification.",
    },
    {
      Id: 1,
      Title: " Choose investment option",
      SubTitle:
        "KYC process includes ID card verification, face verification, document verification such as utility bills as proof of address, and biometric verification.",
    },
    {
      Id: 2,
      Title: " Add money and invest",
      SubTitle:
        "KYC process includes ID card verification, face verification, document verification such as utility bills as proof of address, and biometric verification.",
    },
    {
      Id: 3,
      Title: " Harvest your earnings ",
      SubTitle:
        "KYC process includes ID card verification, face verification, document verification such as utility bills as proof of address, and biometric verification.",
    },
  ];
  return (
    <>

      <Row className="d-flex justify-content-center align-items-start pt-5">
        <Col xs={12} md={12} lg={6} className="text-center text-lg-start mb-5 mb-lg-0" >
          <Carousel activeIndex={index}  className="vertical" controls={false} indicators={false} autoPlay={true} interval={5000} onSelect={handleSelect}  >
            <Carousel.Item  >
              <img
              
                className="d-block w-100"
                src={img1}
                alt="First slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
              
                className="d-block w-100"
                src={img2}
                alt="First slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
              
                className="d-block w-100"
                src={img3}
                alt="First slide"
              />

            </Carousel.Item>
            <Carousel.Item >
              <img
             
                className="d-block w-100"
                src={img4}
                alt="First slide"
              />

            </Carousel.Item>
          </Carousel>




        </Col>
        <Col xs={12} md={12} lg={6} className="text-center text-md-end" >
          <Accordion activeKey={index} className="home-accordian" onClick={handleClick} >
            {AccorianItems.map((Items) => (
              <Accordion.Item
                eventKey={Items.Id}
                key={Items.Id}
                className="mb-3 bg-transparent"
              >
                <Accordion.Header className="text-white fw-600 fs-22">
                  <span className={props.Display_Sr_No}>0{Items.Id}</span>{" "}
                  {Items.Title}
                </Accordion.Header>
                <Accordion.Body>{Items.SubTitle}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>



    </>
  );
};

export default Accordian;
