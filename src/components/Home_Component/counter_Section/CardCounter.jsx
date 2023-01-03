import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import CountUp  from 'react-countup';



const CardCounter = (props) => {
const {url,after,before,heading,value,units} =props
  return (
    <>
      {/* {modifiedCounter.map((Item, index) => ( */}
        <Col xs={12} md={12} lg={4} className="d-flex justify-content-start justify-content-lg-center ps-5 ps-md-5 ps-lg-3" data-aos="fade-up">
          <Card className="mt-4 mb-md-4 p-0 border-0 text-start bg-transparent"  >
            <Card.Body className="d-flex justify-content-start align-items-center px-0">
              <Image src={`${process.env.REACT_APP_BASE_URL}${url}`} className="img-fluid me-3" alt="" />
              <div>
                <Card.Title className="fw-600 fs-22 text-white text-uppercase">
                  {heading}
                </Card.Title>
                <Card.Title className="fw-700 display-5 text-main-green mb-0">

                  <CountUp end={value} duration={2} enableScrollSpy prefix={before} suffix={after} scrollSpyOnce={true}  >
                 
                  </CountUp>
                </Card.Title>
                <Card.Text className="fw-500 fs-14 text-white text-uppercase">{units}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      {/* ))} */}
    </>
  );
};

export default CardCounter;
