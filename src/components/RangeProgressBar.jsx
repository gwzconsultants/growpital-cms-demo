import { Slider,  } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsFillCircleFill } from "react-icons/bs";
import { alpha,styled} from '@mui/material/styles';
import { marks } from "../data/InventData";
import moneyWings from "../assets/img/emojione-v1_money-with-wings.svg"
// import { red } from "@mui/material/colors";





const SuccessSlider = styled(Slider)(({ theme }) => ({

  height:"12px",
  trackColor: "yellow",
  selectionColor: "white",
  color: 'var(--color-main-green)',
  "& .MuiSlider-markLabel":{color:"white",fontWeight: "600",marginTop:"4px",
  fontSize: "18px"},
  '& .MuiSlider-thumb': {
    color:"white",
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
  const [calculetOne, setCalculetOne] = useState(6500)
  // const [calculetThree, setCalculetThree] = useState(6500)
  // const[newValue,setNewValue] = useState()

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
    const previousMarkIndex = value/1;
    const previousMark = marks[previousMarkIndex];
    const remainder = value % 1;
    if (remainder === 0) {
      return  previousMark.roi;
    } 
    
  }

  const name = (value) => {
    const previousMarkIndex = value;
    const previousMark = marks[previousMarkIndex];
    const remainder = value % 1;
    if (remainder === 0) {
   
      return  previousMark.name;
    }
   
  }
  const frequen = (value) => {
    const previousMarkIndex = value;
    const previousMark = marks[previousMarkIndex];
    const remainder = value % 1;
    if (remainder === 0) {
   
      return  previousMark.frequency;
    }
   
  }
  const scaleValue = scale(value) 
  const scaleRoi = roi(value)

  const handleChangeCommit =() =>{

    setCalculetOne( ((scaleValue * scaleRoi / 100) * 3) + scale(value) )
    // setCalculetThree(((scale(value) * roi(value) / 100) * 3) + scale(value));
  }


  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

 

  // console.log(value)
  return (
    <>
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
              <div className="mb-3 px-2">
              {/* <ThemeProvider theme={finalTheme}> */}
                <Box  >
               
                  <SuccessSlider marks={marks} min={0} step={1} max={6} value={value} scale={scale}  onChange={handleChange} onChangeCommitted={handleChangeCommit}  valueLabelDisplay="off" aria-labelledby="non-linear-slider" />
                  {/* <Form.Range value={value} onChange={handleChange}/> */}
                </Box>
               
                {/* </ThemeProvider> */}
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
            <div className="text-center ">
              
              <h3 className="text-main-gold fw-600 fs-30 my-3 my-md-4">
              <img src={moneyWings} alt="" className="img-fluid"/> {name(value)}
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
                <span className="px-1">₹</span>{ rupee_format(calculetOne)}
                </h2>
                <p className="fs-18 fs-sm-16 fw-500 text-white mb-4 mb-md-0">
                 <span className="pe-2">Total Returns</span>
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-main-green fw-600 fs-30 fs-sm-22 text-capitalize mb-1">
                {/* <span className="px-1">₹</span>{rupee_format(calculetThree)} */}
                {frequen(value)}
                </h2>
                <p className="fs-18 fs-sm-16 fw-500 text-white mb-4 mb-md-0">
                <span className="pe-2">Payout Frequency</span>
                </p>
              </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default RangeProgressBar;
