import { Slider, } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { Card, Col, Row,} from "react-bootstrap";
import { alpha, styled } from '@mui/material/styles';
import {  marks } from "../data/InventData";
import { locking, timerglass } from "../assets/img/contactimg";
// import BarGraph from "./BarGraph";





const SuccessSlider = styled(Slider)(({ theme }) => ({

  height: "12px",
  trackColor: "yellow",
  selectionColor: "white",
  color: 'var(--color-main-green)',
  "& .MuiSlider-mark": {
    backgroundColor: "transparent"
  },
  "& .MuiSlider-markLabel": {
    color: "white", fontWeight: "600", marginTop: "4px",
    fontSize: "18px"
  },
  "& .MuiSlider-rail": {
    backgroundColor: "white"
  },
  '& .MuiSlider-thumb': {
    color: "white",
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${alpha("#07e67d", 0.16)}`,
    },
    '&.Mui-active': {
      boxShadow: `0px 0px 0px 14px ${alpha("#07e67d", 0.16)}`,

    },




  },

  overrides: {
    MuiSlider: {
      markLabel: {
        color: "red",
        transform: "none",
        "&:last-child": {
          color: "green",
          transform: "translateX(-100%)"
        }
      },
      markLabelActive: {
        color: "red"
      }
    }
  }


}));




const RangeProgressBar = () => {
  const [value, setValue] = useState(0);
  // const [fdProfitValue, setFdProfitValue] = useState(300)
  // const [mfProfitValue, setMfProfitValue] = useState(400)
  // const [gpProfitValue, setGpProfitValue] = useState(500)
  
  const rupee_format = (str) => {
    if (str) {
      var x = str;
      x = x.toString();
      var lastThree = x.substring(x.length - 3);
      var otherNumbers = x.substring(0, x.length - 3);
      if (otherNumbers !== "") lastThree = "," + lastThree;
      var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
      return res;
    } else {
      return;
    }
  };


  const scale = (value) => {
    const previousMarkIndex = value;
    const previousMark = marks[previousMarkIndex];
    const remainder = value % 1
    if (remainder === 0) {

      return previousMark.scaledValue;
    }


  };



  const roi = (value) => {
    const previousMarkIndex = value / 1;
    const previousMark = marks[previousMarkIndex];
    const remainder = value % 1;
    if (remainder === 0) {
      return previousMark.roi;
    }

  }
  const CalLogo = (value) => {
    const previousMarkIndex = value / 1;
    const previousMark = marks[previousMarkIndex];
    const remainder = value % 1;
    if (remainder === 0) {
      return previousMark.img;
    }

  }

  const name = (value) => {
    const previousMarkIndex = value;
    const previousMark = marks[previousMarkIndex];
    const remainder = value % 1;
    if (remainder === 0) {

      return previousMark.name;
    }

  }
  const total = (value) => {
    const previousMarkIndex = value;
    const previousMark = marks[previousMarkIndex];
    const remainder = value % 1;
    if (remainder === 0) {

      return previousMark.total;
    }

  }
  const frequen = (value) => {
    const previousMarkIndex = value;
    const previousMark = marks[previousMarkIndex];
    const remainder = value % 1;
    if (remainder === 0) {

      return previousMark.frequency;
    }

  }
  const scaleRoi = roi(value)
  const scaleValue = scale(value)
  const calLogo = CalLogo(value)
  const TotalReturn = total(value)


  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  const handleChangeCommit = () => {
    // calculetOne
    // setFdProfitValue((scaleValue * 6)/100);
    // setMfProfitValue((scaleValue * 8)/100);
    // setGpProfitValue( (scaleValue * scaleRoi / 100)  )
  }




  return (
    <>
      <Col xs={12} md={12}  className="text-center" style={{ maxWidth: "40rem" }} data-aos="fade-up" >
        <div className="range-progress">
          <Card className="darkcard mt-3 mt-md-4 p-0 rounded text-start text-white">
            <Card.Body className="m-1 bg-dark-gradient rounded p-4">
              <div className="text-center">
                <h2 className="text-main-green fw-600 fs-30 text-capitalize mb-3 mb-md-3">
                  Investment Amount {" "}
                  <span className="text-main-gold">  <span className="px-1">₹</span>{rupee_format(scaleValue)}</span>
                </h2>
                <p className="fs-14 fw-500 text-white my-4">
                  Move the slider to change the investment amount
                </p>
              </div>
              <div>
                <div className="mb-3 px-3">
                  {/* <ThemeProvider theme={finalTheme}> */}
                  <Box  >

                    <SuccessSlider marks={marks} min={0} step={1} max={6} value={value} scale={scale} onChange={handleChange} onChangeCommitted={handleChangeCommit} valueLabelDisplay="on" aria-labelledby="non-linear-slider" />
                    {/* <Form.Range value={value} onChange={handleChange}/> */}
                  </Box>

                  {/* </ThemeProvider> */}
                </div>
              </div>
              <Row className="d-flex justify-content-between">
                <Col xs={12} md={6} className="text-start text-center">
                  <p className="text-uppercase fs-18 fw-500 text-white">
                    {/* <BsFillCircleFill size={8} className="me-1 text-main-green" />{" "} */}
                    <img src={locking} alt="locking" className="img-fluid me-2" style={{ width: "1.5rem" }} />{" "}
                    <span>Lock In: 12 Months</span>
                  </p>
                </Col>
                <Col xs={12} md={6} className="text-end text-center">
                  <p className="text-uppercase fs-18 fw-500 text-white">
                    <img src={timerglass} alt="" style={{ width: "1.5rem" }} />{" "}

                    Tenure: 36 Months
                  </p>
                </Col>
              </Row>
              <div className="text-center ">

                <h3 className="text-main-gold fw-600 fs-30 my-3 my-md-4">
                  <img src={calLogo} alt="" className="img-fluid me-2" style={{ width: "6%" }} /> {name(value)}
                </h3>
              </div>
              <Row className="pt-4">
                <Col className="d-flex justify-content-around">
                  <div className="text-center px-2 mx-0">
                    <h2 className="text-main-green fw-600 fs-30 fs-sm-22 text-capitalize mb-1">
                      {scaleRoi}%
                    </h2>
                    <p className="fs-18 fs-sm-16 fw-500 text-white mb-4 mb-md-0">ROI</p>
                  </div>
                  <div className="text-center px-2">
                    <h2 className="text-main-green fw-600 fs-30 fs-sm-22 text-capitalize mb-1">
                      <span className="px-1">₹</span>{rupee_format(TotalReturn)}
                    </h2>
                    <p className="fs-18 fs-sm-16 fw-500 text-white mb-4 mb-md-0">
                      <span className="pe-2">Takeaway</span>
                    </p>
                  </div>
                  <div className="text-center">
                    <h2 className="text-main-green fw-600 fs-30 fs-sm-22 text-capitalize mb-1">
                      {/* <span className="px-1">₹</span>{rupee_format(calculetThree)} */}
                      {frequen(value)}
                    </h2>
                    <p className="fs-18 fs-sm-16 fw-500 text-white mb-4 mb-md-0">
                      <span className="pe-2">Payout </span>
                    </p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Col>

      {/* bargraph  */}
      {/* <Col xs={12} md={6}  >
        <BarGraph 
        fd={fdProfitValue}
        mf={mfProfitValue}
        gp={gpProfitValue}
        />
      </Col> */}

    </>
  );
};

export default RangeProgressBar;
