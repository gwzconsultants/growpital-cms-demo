import React from "react";
import { Col, Card, Image } from "react-bootstrap";

import CountUp from 'react-countup';
import { CropHarvestedImg, Returns, TotalInvestments } from "../assets/img/contactimg";

const CardCounter = (props) => {
  const Counter = [
    {
      Id: "",
      Title: "Total Investments",
      before:"₹",
      Count: "10",
      after:"+",
      Tenur: "Crores",
      Img: TotalInvestments,
    },
    {
      Id: "",
      Title: "Returns",
      Count: "16",
      after:"%",
      Tenur: "Per AnnUm",
      Img: Returns
    },
    {
      Id: "",
      Title: "Managed Area",
      Count: "1600",
      after:"+",
      Tenur: "Acres",
      Img: CropHarvestedImg
    },
  ];
  return (
    <>
      {Counter.map((Item,index) => (
        <Col xs={12} md={12} lg={4} className="d-flex justify-content-start justify-content-lg-center ps-5 ps-md-5 ps-lg-3"  key={index}>
          <Card className="mt-4 mb-md-4 p-0 border-0 text-start bg-transparent"  >
            <Card.Body className="d-flex justify-content-start align-items-center px-0">
              <Image src={Item.Img} className="img-fluid me-3" alt="" />
              <div>
                <Card.Title className="fw-600 fs-22 text-white text-uppercase">
                  {Item.Title}
                </Card.Title>
                <Card.Title className="fw-700 display-5 text-main-green mb-0">
                {Item.before}
                <CountUp end={Item.Count} duration={2} enableScrollSpy> </CountUp>
                {Item.after}
                </Card.Title>
                <Card.Text className="fw-500 fs-14 text-white text-uppercase">{Item.Tenur}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default CardCounter;
