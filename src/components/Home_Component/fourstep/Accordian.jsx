import React, { useEffect } from "react";
import { useState } from "react";
import { Accordion, Carousel, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { step1, step2, step3, step4 } from "../../assets/img/contactimg";
import { fetchFourStepobj } from "../../../redux/home-page/HomePageSlice";


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



  const { loading, error,  accordianobj } = useSelector((state) => ({ ...state.home }))
  const [modifiedAccoridan, setModifiedAccoridan] = useState([])




  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(fetchFourStepobj())
  }, [dispatch])

  useEffect(() => {
    if (accordianobj.length !== 0 || accordianobj.id > 0 ) {
      const { accord_title1, accord_title2, accord_title3, accord_title4, details1, details2, details3, details4, index1, index2, index3, index4, } = accordianobj.attributes
      const { url: image1 } = accordianobj.attributes.image1.data.attributes
      const { url: image2 } = accordianobj.attributes.image2.data.attributes
      const { url: image3 } = accordianobj.attributes.image3.data.attributes
      const { url: image4 } = accordianobj.attributes.image4.data.attributes

      // console.log(image1);
      const newblogDetails = {
        accord_title1, accord_title2, details1, index1, index2, details2, image1, image2, image3, image4, accord_title3, accord_title4, details3, details4, index3, index4,
      };
      setModifiedAccoridan(newblogDetails);
    } else {
      setModifiedAccoridan(null);
    }


  }, [accordianobj]);


  if (loading) {
    return (<h3>Loading...</h3>)
  }
  if (error) {
    return (<h3>{error.massage}</h3>)
  }
  if (!modifiedAccoridan) {
    return <h2>No Details</h2>;
  } else {
    const { accord_title1, accord_title2, details1, index1, index2, details2, image1, image2, image3, image4, accord_title3, accord_title4, details3, details4, index3, index4, } = modifiedAccoridan;

    return (

      <>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="accordian-main">
            <Row className="  pt-5 mx-auto">
              <Col xs={12} md={12} lg={6} className="text-center text-lg-start mb-5 mb-lg-0  d-flex justify-content-center justify-content-lg-start align-items-center" >
                <Carousel activeIndex={index} className="vertical text-center " controls={false} indicators={false} autoPlay={true} interval={5000} onSelect={handleSelect} >
                  <Carousel.Item  >
                    <img

                      className="d-block img-fluid accordian-main-img"
                      src={`${process.env.REACT_APP_BASE_URL}${image1}`}
                      alt="First slide"
                      style={{ width: "24rem" }}
                    />

                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ width: "24rem" }}
                      // style={{width:"27rem"}}
                      className="d-block img-fluid accordian-main-img "
                      src={`${process.env.REACT_APP_BASE_URL}${image3}`}
                      alt="First slide"
                    />

                  </Carousel.Item>
                  <Carousel.Item>
                    <img

                      // style={{width:"27rem"}}
                      className="d-block img-fluid accordian-main-img"
                      src={`${process.env.REACT_APP_BASE_URL}${image2}`}
                      alt="First slide"
                    />

                  </Carousel.Item>
                  <Carousel.Item >
                    <img

                      className="d-block img-fluid accordian-main-img"
                      src={`${process.env.REACT_APP_BASE_URL}${image4}`}
                      alt="First slide"
                    // style={{width:"27rem"}}
                    />

                  </Carousel.Item>
                </Carousel>




              </Col>

              <Col xs={12} md={12} lg={6} className="text-center text-md-end" >
                <Accordion activeKey={index} className="home-accordian"  >
                  <Accordion.Item
                    eventKey={index1}
                    className="mb-3 bg-transparent"
                  >
                    <Accordion.Header className="text-white fw-600 fs-22" onClick={() => { setIndex(index1) }} >
                      {accord_title1}

                    </Accordion.Header>
                    <Accordion.Body>{details1}</Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item
                    eventKey={index2}
                    className="mb-3 bg-transparent"
                  >
                    <Accordion.Header className="text-white fw-600 fs-22" onClick={() => { setIndex(index2) }} >
                      {accord_title2}

                    </Accordion.Header>
                    <Accordion.Body>{details2}</Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item
                    eventKey={index3}
                    className="mb-3 bg-transparent"
                  >
                    <Accordion.Header className="text-white fw-600 fs-22" onClick={() => { setIndex(index3) }} >
                      {accord_title3}

                    </Accordion.Header>
                    <Accordion.Body>{details3}</Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item
                    eventKey={index4}
                    className="mb-3 bg-transparent"
                  >
                    <Accordion.Header className="text-white fw-600 fs-22" onClick={() => { setIndex(index4) }} >
                      {accord_title4}

                    </Accordion.Header>
                    <Accordion.Body>{details4}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>

          </div>

        )};
      </>)
  }
};

export default Accordian;
