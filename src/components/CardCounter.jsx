import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import Icon1 from "../assets/img/icon-investment.png";
import Icon2 from "../assets/img/icon-return.png";
import Icon3 from "../assets/img/8.png";

const CardCounter = (props) => {
  const Counter = [
    {
      Id: "",
      Title: "Total Investments",
      Count: "₹480+",
      Tenur: "Lakhs",
      Img: Icon1
    },
    {
      Id: "",
      Title: "Returns",
      Count: "16%",
      Tenur: "Per AnnUm",
      Img: Icon2
    },
    {
      Id: "",
      Title: "Crop Harvested",
      Count: "4500+",
      Tenur: "Tonnes",
      Img: Icon3
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
                  {Item.Count}
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
