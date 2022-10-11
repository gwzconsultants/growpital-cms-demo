import React from "react";
import {  Col, Row, ProgressBar } from "react-bootstrap";

const TotalInvestment = () => {
  return (
    <>
      <div className="totalinvest p-3 p-lg-4">
        <Row className="d-flex align-items-center justify-content-start border-start border-bottom mt-5 mt-lg-3 ps-3">
          <Col xs={6} className="">
            <div className="">
              <div className="d-flex justify-content-between">
                <p className="text-white fs-18 fw-600">Bank FD</p>
                <p className="text-white fs-18 fw-600">₹36,000</p>
              </div>
              <ProgressBar className="totalinv" now={75} />
            </div>
          </Col>
          <Col xs={8} className="mt-5">
            <div className="">
              <div className="d-flex justify-content-between">
                <p className="text-white fs-18 fw-600">Bank FD</p>
                <p className="text-white fs-18 fw-600">₹42,000</p>
              </div>
              <ProgressBar className="totalinv" now={80} />
            </div>
          </Col>
          <Col xs={12} className="mt-5">
            <div className="">
              <div className="d-flex justify-content-between">
                <p className="text-white fs-18 fw-600">Growpital</p>
                <p className="text-white fs-18 fw-600">₹96,000</p>
              </div>
              <ProgressBar className="totalinv" now={100} />
            </div>
          </Col>
          <Col xs={12} className="text-center">
            <p className="text-white fs-20 fw-600 my-3">Compare the return on investments</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TotalInvestment;
