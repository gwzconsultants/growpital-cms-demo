import { Slider,  } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsFillCircleFill } from "react-icons/bs";
import { alpha,styled} from '@mui/material/styles';
import { marks } from "../data/InventData";
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

// const finalTheme = createTheme({
//   overrides: {
//     MuiTableCell: {
//       root: {
//         paddingTop: 3,
//         paddingBottom: 3,
//         "&:last-child": {
//           paddingRight: 50
//         }
//       }
//     },
//     MuiSlider: {
//       markLabel: {
//         color: "red",
//         transform: "none",
//         "&:last-child": {
//           color: "green",
//           transform: "translateX(-100%)"
//         }
//       },
//       markLabelActive: {
//         color: "red"
//       }
//     }
//   }

    
// });


const RangeProgressBar = () => {
  const [value, setValue] = useState(0);
  const [calculetOne, setCalculetOne] = useState(500)
  const [calculetThree, setCalculetThree] = useState(1500)

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
    const remainder = value % 1;
    if (remainder === 0) {

      return previousMark.scaledValue;
    }

    const nextMark = marks[previousMarkIndex + 1];
    console.log(nextMark)
    const increment = (nextMark.scaledValue - previousMark.scaledValue) / 1;
    return remainder * increment + previousMark.scaledValue;

  };

  const roi = (value) => {
    const previousMarkIndex = value;
    const previousMark = marks[previousMarkIndex];
    const remainder = value % 1;
    if (remainder === 0) {
      return  previousMark.roi;
    } 
    const nextMark = marks[previousMarkIndex + 1];
    const increment = (nextMark.scaledValue - previousMark.scaledValue) / 1;
    return remainder * increment + previousMark.scaledValue;
  }

  const name = (value) => {
    const previousMarkIndex = value;
    const previousMark = marks[previousMarkIndex];
    const remainder = value % 1;
    if (remainder === 0) {
      return  previousMark.name;
    } 
    const nextMark = marks[previousMarkIndex + 1];
    const increment = (nextMark.scaledValue - previousMark.scaledValue) / 1;
    return remainder * increment + previousMark.scaledValue;
  }




  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCalculetOne(((scale(value) * roi(value)) / 100) * 1);
    setCalculetThree(((scale(value) * roi(value)) / 100) * 3);

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
                <span className="text-main-gold">  ₹ { rupee_format(scale(value))}</span>
              </h2>
              <p className="fs-14 fw-500 text-white my-4">
                Move the slider to change thd investment amount
              </p>
            </div>
            <div>
              <div className="mb-3">
              {/* <ThemeProvider theme={finalTheme}> */}
                <Box  >
               
                  <SuccessSlider marks={marks} min={0} step={1} max={6} value={value} scale={scale} onChange={handleChange} valueLabelDisplay="auto" aria-labelledby="non-linear-slider" />
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
            <div className="text-center">
              <h3 className="text-main-gold fw-600 fs-30 my-3 my-md-4">
              {name(value)}
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
                ₹ { rupee_format(calculetOne)}
                </h2>
                <p className="fs-18 fw-500 text-white mb-4 mb-md-0">
                  12 Months
                </p>
              </Col>
              <Col className="text-center">
                <h2 className="text-main-green fw-600 fs-30 text-capitalize mb-1">
                ₹ {rupee_format(calculetThree)}
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
