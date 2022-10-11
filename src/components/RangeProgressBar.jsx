import { Slider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsFillCircleFill } from "react-icons/bs";

import { marks } from "../data/InventData";








const RangeProgressBar = () => {
  const [value, setValue] = useState(0);
  const [calculetOne, setCalculetOne] = useState()
  const [calculetThree, setCalculetThree] = useState()


  const scale = (value) => {

    const previousMarkIndex = value;
    const previousMark = marks[previousMarkIndex];
    const remainder = value % 1;
    if (remainder === 0) {

      return previousMark.scaledValue;
    }

  };

  const roi = (value) => {
    const previousMarkIndex = value;
    const previousMark = marks[previousMarkIndex];
    const remainder = value % 1;
    if (remainder === 0) {

      return previousMark.roi;
    }
  }




  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCalculetOne(((scale(value) * roi(value)) / 100) * 1);
    setCalculetThree(((scale(value) * roi(value)) / 100) * 3);

  };

  console.log(calculetOne)

  // console.log(value)
  return (
    <>
      <div className="range-progress">
        <Card className="darkcard mt-3 mt-md-4 p-0 rounded text-start text-white">
          <Card.Body className="m-1 bg-dark-gradient rounded p-4">
            <div className="text-center">
              <h2 className="text-main-green fw-600 fs-30 text-capitalize mb-3 mb-md-3">
                Investment Amount
                <span className="text-main-gold"> {scale(value)}</span>
              </h2>
              <p className="fs-14 fw-500 text-white my-4">
                Move the slider to change thd investment amount
              </p>
            </div>
            <div>
              <div className="mb-3">
                <Box sx={{}}>
                  <Slider
                    // value={value}
                    min={0}
                    step={1}
                    max={6}
                    value={value}
                    // valueLabelFormat={numFormatter}
                    scale={scale}
                    marks={marks}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="non-linear-slider"
                  />
                </Box>
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
                  {roi(value)}%
                </h2>
                <p className="fs-18 fw-500 text-white mb-4 mb-md-0">ROI</p>
              </Col>
              <Col className="text-center">
                <h2 className="text-main-green fw-600 fs-30 text-capitalize mb-1">
                  {calculetOne}
                </h2>
                <p className="fs-18 fw-500 text-white mb-4 mb-md-0">
                  12 Months
                </p>
              </Col>
              <Col className="text-center">
                <h2 className="text-main-green fw-600 fs-30 text-capitalize mb-1">
                  {calculetThree}
                </h2>
                <p className="fs-18 fw-500 text-white mb-4 mb-md-0">
                  36 Months
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
