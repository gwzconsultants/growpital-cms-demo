import React, { useEffect } from "react";
import { useState } from "react";
import { Accordion, Carousel, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { step1, step2, step3, step4 } from "../../assets/img/contactimg";
import { fetchFourStep } from "../../redux/home-page/FourStepSlice";

const Accordian = (props) => {

  const [index, setIndex] = useState();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };



 
  // const AccorianItems = [
  //   {
  //     Id: 0,
  //     no:1,
  //     Title: "Create account and complete KYC",
  //     SubTitle:
  //       "Sign up with username and password. Verify your KYC which includes Pan Card, Adhaar card & Bank account details.",
  //   },
  //   {
  //     Id: 1,
  //     no:2,
  //     Title: " Choose investment option",
  //     SubTitle:
  //       "Select the plan best suited to you and select the number of units you want to invest in.",
  //   },
  //   {
  //     Id: 2,
  //     no:3,
  //     Title: " Add money and invest",
  //     SubTitle:
  //       "Simply add money to Growpital Wallet, e-sign required documents.",
  //   },
  //   {
  //     Id: 3,
  //     no:4,
  //     Title: " Harvest your earnings ",
  //     SubTitle:
  //       "Automate your earnings with assured return at scheduled dates.",
  //   },
  // ];


      
  const { loading ,error, accordian } = useSelector((state) => ({ ...state.fourStep }))
  const [modifiedAccoridan, setModifiedAccoridan] = useState([])

 


  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(fetchFourStep())
  }, [dispatch])

  useEffect(() => {
    if (accordian) {
      const newAccordian = accordian.map((items, index) => {
        const { title , description
        } = items.attributes
        const { id } = items
        return {
          
          id,title
          , description
   
    

        }

      })
      //  const data = item.attributes.faqs_accordians.data;
      setModifiedAccoridan(newAccordian)
    } else {  setModifiedAccoridan([]) }


  }, [accordian]);


  if (loading) {
    return (<h3>Loading...</h3>)
  }
  if (!accordian) {

    <h2>network are slow</h2>


  }

  if (error) {
    return (<p>{error.massage}</p>)
  }

  return (
    <>
<div className="accordian-main">
      <Row className="  pt-5 mx-auto">
        <Col xs={12} md={12} lg={6} className="text-center text-lg-start mb-5 mb-lg-0  d-flex justify-content-center justify-content-lg-start align-items-center" >
          <Carousel activeIndex={index}  className="vertical text-center " controls={false} indicators={false} autoPlay={true} interval={5000} onSelect={handleSelect} >
            <Carousel.Item  >
              <img
              
                className="d-block img-fluid accordian-main-img"
                src={step1}
                alt="First slide"
              style={{width:"24rem"}}
                />

            </Carousel.Item>
            <Carousel.Item>
              <img
               style={{width:"24rem"}}
              // style={{width:"27rem"}}
              className="d-block img-fluid accordian-main-img "
              src={step3}
              alt="First slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
              
              // style={{width:"27rem"}}
                className="d-block img-fluid accordian-main-img"
                src={step2}
                alt="First slide"
              />

            </Carousel.Item>
            <Carousel.Item >
              <img
             
                className="d-block img-fluid accordian-main-img"
                src={step4}
                alt="First slide"
                // style={{width:"27rem"}}
              />

            </Carousel.Item>
          </Carousel>




        </Col>
        <Col xs={12} md={12} lg={6} className="text-center text-md-end" >
          <Accordion activeKey={index}  className="home-accordian"  >
            {modifiedAccoridan.map((Items,index) => (
              <Accordion.Item
                eventKey={index}
                key={Items.id}
                className="mb-3 bg-transparent"
              >
                <Accordion.Header className="text-white fw-600 fs-22" onClick={()=>{ setIndex(index) }} >
                  {/* <span className={props.Display_Sr_No}>0{Items.no}</span>{" "} */}
                  {Items.title}
                </Accordion.Header>
                <Accordion.Body>{Items.description}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>

      </div>

    </>
  );
};

export default Accordian;
