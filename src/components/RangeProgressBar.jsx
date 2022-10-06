import React from "react";
import { Card, Col, Row,Form } from "react-bootstrap";
import { BsFillCircleFill } from "react-icons/bs";

const RangeProgressBar = () => {
  return (
    <>
      <div className="range-progress">
        <Card className="darkcard mt-3 mt-md-4 p-0 rounded text-start text-white">
          <Card.Body className="m-1 bg-dark-gradient rounded p-4">
            <div className="text-center">
              <h2 className="text-main-green fw-600 fs-30 text-capitalize mb-3 mb-md-3">
                Investment Amount
                <span className="text-main-gold"> ₹20,000</span>
              </h2>
              <p className="fs-14 fw-500 text-white my-4">
                Move the slider to change thd investment amount
              </p>
            </div>
            <div>
              <div className="mb-3">
                <Form.Range now={60} min={0} max={3}/>
                <div className="d-flex justify-content-between pt-3">
                  <p className="fs-14 fw-600 text-white">$1000</p>
                  <p className="fs-14 fw-600 text-white">$1000</p>
                  <p className="fs-14 fw-600 text-white">$1000</p>
                  <p className="fs-14 fw-600 text-white">$1000</p>
                </div>
              </div>
            </div>
            <Row className="d-flex justify-content-between">
              <Col xs={12} md={6} className="text-start text-center">
                <p className="text-uppercase fs-18 fw-500 text-white">
                  <BsFillCircleFill size={8} className="me-1 text-main-green" />{" "}
                  Tenure: 36 Months
                </p>
              </Col>
              <Col xs={12} md={6} className="text-end text-center">
                <p className="text-uppercase fs-18 fw-500 text-white">
                  <BsFillCircleFill size={8} className="me-1 text-main-green" />{" "}
                  Lock In: 12 Months
                </p>
              </Col>
            </Row>
            <div className="text-center">
              <h3 className="text-main-gold fw-600 fs-30 my-3 my-md-4">
                Planty Returns
              </h3>
            </div>
            <Row className="pt-4">
              <Col className="text-center">
                <h2 className="text-main-green fw-600 fs-30 text-capitalize mb-1">
                  12%
                </h2>
                <p className="fs-18 fw-500 text-white mb-4 mb-md-0">ROI</p>
              </Col>
              <Col className="text-center">
                <h2 className="text-main-green fw-600 fs-30 text-capitalize mb-1">
                  ₹36,000
                </h2>
                <p className="fs-18 fw-500 text-white mb-4 mb-md-0">
                  12 Months
                </p>
              </Col>
              <Col className="text-center">
                <h2 className="text-main-green fw-600 fs-30 text-capitalize mb-1">
                  ₹98,000
                </h2>
                <p className="fs-18 fw-500 text-white mb-4 mb-md-0">
                  26 Months
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default RangeProgressBar;
