import React from "react";
import { useState } from "react";
import { Accordion, Carousel, Col, Row } from "react-bootstrap";
import { step1, step2, step3, step4 } from "../assets/img/contactimg";

const Accordian = (props) => {

  const [index, setIndex] = useState();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };



 
  const AccorianItems = [
    {
      Id: 0,
      no:1,
      Title: "Create account and complete KYC",
      SubTitle:
        "Sign up with username and password. Verify your KYC which includes Pan Card, Adhaar card & Bank account details.",
    },
    {
      Id: 1,
      no:2,
      Title: " Choose investment option",
      SubTitle:
        "Select the plan best suited to you and select the number of units you want to invest in.",
    },
    {
      Id: 2,
      no:3,
      Title: " Add money and invest",
      SubTitle:
        "Simply add money to Growpital Wallet, e-sign required documents.",
    },
    {
      Id: 3,
      no:4,
      Title: " Harvest your earnings ",
      SubTitle:
        "Automate your earnings with assured return at scheduled dates.",
    },
  ];
  return (
    <>
<div className="accordian-main">
      <Row className="  pt-5 mx-auto">
        <Col xs={12} md={12} lg={6} className="text-center text-lg-start mb-5 mb-lg-0  d-flex justify-content-center justify-content-lg-start align-items-center" >
          <Carousel activeIndex={index}  className="vertical text-center " controls={false} indicators={false} autoPlay={true} interval={5000} onSelect={handleSelect} >
            <Carousel.Item  >
              <img
              
                className="d-block img-fluid accordian-main-img"
                src={step1}
                alt="First slide"
              style={{width:"24rem"}}
                />

            </Carousel.Item>
            <Carousel.Item>
              <img
               style={{width:"24rem"}}
              // style={{width:"27rem"}}
              className="d-block img-fluid accordian-main-img "
              src={step3}
              alt="First slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
              
              // style={{width:"27rem"}}
                className="d-block img-fluid accordian-main-img"
                src={step2}
                alt="First slide"
              />

            </Carousel.Item>
            <Carousel.Item >
              <img
             
                className="d-block img-fluid accordian-main-img"
                src={step4}
                alt="First slide"
                // style={{width:"27rem"}}
              />

            </Carousel.Item>
          </Carousel>




        </Col>
        <Col xs={12} md={12} lg={6} className="text-center text-md-end" >
          <Accordion activeKey={index}  className="home-accordian"  >
            {AccorianItems.map((Items) => (
              <Accordion.Item
                eventKey={Items.Id}
                key={Items.Id}
                className="mb-3 bg-transparent"
              >
                <Accordion.Header className="text-white fw-600 fs-22" onClick={()=>{ setIndex(Items.Id) }} >
                  <span className={props.Display_Sr_No}>0{Items.no}</span>{" "}
                  {Items.Title}
                </Accordion.Header>
                <Accordion.Body>{Items.SubTitle}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>

      </div>

    </>
  );
};

export default Accordian;
