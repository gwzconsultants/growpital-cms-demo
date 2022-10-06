import React from "react";
import { Card, Col } from "react-bootstrap";
import User from "../assets/img/user.png";

const TestimonialCard = () => {
  const Testimoni = [
    {
      Id: "1",
      Img: User,
      Title: "Rajeev Malviya",
      Designa: "Directore",
      SubTitle:
        "During the performance review process, you will measure an employee’s performance relative to a set period.",
    },
    {
      Id: "2",
      Img: User,
      Title: "Rajeev Malviya",
      Designa: "Directore",
      SubTitle:
        "During the performance review process, you will measure an employee’s performance relative to a set period.",
    },
    {
      Id: "3",
      Img: User,
      Title: "Rajeev Malviya",
      Designa: "Directore",
      SubTitle:
        "During the performance review process, you will measure an employee’s performance relative to a set period.",
    },
    {
      Id: "4",
      Img: User,
      Title: "Rajeev Malviya",
      Designa: "Directore",
      SubTitle:
        "During the performance review process, you will measure an employee’s performance relative to a set period.",
    },
  ];
  return (
    <div>
      {Testimoni.map((Items) => (
        <Col md={3} key={Items.Id} className="text-center text-md-start">
        <Card
          
          className="darkcard mb-3 mb-md-4 p-0 rounded text-start text-white"
        >
          <Card.Body className="m-1 bg-dark-gradient rounded p-4">
            <div className="d-flex justify-content-start align-items-center">
              <img src={User} alt="" />
              <div>
                <Card.Title className="fw-600 fs-20 mb-0 pt-2">
                  {Items.Title}
                </Card.Title>
                <Card.Title className="fw-600 fs-14 mb-3 pt-2">
                  {Items.Designa}
                </Card.Title>
              </div>
            </div>
            <Card.Text className="fw-300 fs-15 lh-24">
              {Items.SubTitle}
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      ))}
    </div>
  );
};

export default TestimonialCard;
