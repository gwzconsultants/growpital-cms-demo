import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { Col, Card, Image } from "react-bootstrap";

import CountUp  from 'react-countup';
import { useDispatch, useSelector } from "react-redux";
// import ReactVisibilitySensor from "react-visibility-sensor";
// import { CropHarvestedImg, Returns, TotalInvestments } from "../../assets/img/contactimg";
import { fetchCounter } from "../../redux/home-page/CounterSlice";

const CardCounter = (props) => {
  // const Counter = [
  //   {
  //     Id: "",
  //     Title: "Total Investments",
  //     before:"₹",
  //     Count: "10",
  //     after:"+",
  //     Tenur: "Crores",
  //     Img: TotalInvestments,
  //   },
  //   {
  //     Id: "",
  //     Title: "Returns",
  //     Count: "16",
  //     after:"%",
  //     Tenur: "Per AnnUm",
  //     Img: Returns
  //   },
  //   {
  //     Id: "",
  //     Title: "Managed Area",
  //     Count: "1600",
  //     after:"+",
  //     Tenur: "Acres",
  //     Img: CropHarvestedImg
  //   },
  // ];

  const { loading, counter, error } = useSelector((state) => ({ ...state.counterUp }))
  const [modifiedCounter, setModifiedCounter] = useState([])

  const dispatch = useDispatch()
 




  useEffect(() => {
    dispatch(fetchCounter())
  }, [dispatch])


  useEffect(() => {
    if (counter) {
      const newCounter = counter.map(item => {
        const { url } = item.attributes.logo.data.attributes;
        const { back_counter_symbol, front_counter_symbol, heading, units, value } = item.attributes;


        return {
          url, after: back_counter_symbol, before: front_counter_symbol, heading, units, value


        }
      })
      setModifiedCounter(newCounter)
    } else { setModifiedCounter([]) }



  }, [counter]);

  if (loading) {
    return (<h3>Loading...</h3>)
  }
  if (!counter) {

    <h2>Not this counter are present</h2>


  }

  if (error) {
    return (<p>{error.massage}</p>)
  }

  return (
    <>
      {modifiedCounter.map((Item, index) => (
        <Col xs={12} md={12} lg={4} className="d-flex justify-content-start justify-content-lg-center ps-5 ps-md-5 ps-lg-3" key={index} data-aos="fade-up">
          <Card className="mt-4 mb-md-4 p-0 border-0 text-start bg-transparent"  >
            <Card.Body className="d-flex justify-content-start align-items-center px-0">
              <Image src={`${process.env.REACT_APP_BASE_URL}${Item.url}`} className="img-fluid me-3" alt="" />
              <div>
                <Card.Title className="fw-600 fs-22 text-white text-uppercase">
                  {Item.heading}
                </Card.Title>
                <Card.Title className="fw-700 display-5 text-main-green mb-0">

                  <CountUp end={Item.value} duration={2} enableScrollSpy prefix={Item.before} suffix={Item.after} scrollSpyOnce={true}  >
                    {/* {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start} >
                        <span ref={countUpRef} />
                      </ReactVisibilitySensor>
                    )} */}
                  </CountUp>
                </Card.Title>
                <Card.Text className="fw-500 fs-14 text-white text-uppercase">{Item.units}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default CardCounter;
