import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Card, Col, Row } from "react-bootstrap";
// import User from "../assets/img/user.png";
import { BsFillCircleFill, BsFillStarFill } from "react-icons/bs";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";

// import { aditya, gujan, prashenjeet, saurabh, shanshank, shuman, user_icon, vipul } from "../../assets/img/contactimg";
import { AiFillLinkedin } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchTestimonial } from "../../../redux/home-page/HomePageSlice";

const TestiSlider = () => {
  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    rows: 2,
    slidesPerRow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 700,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "10px",
          slidesToShow: 2,
          rows: 2,
          slidesPerRow: 1,
          slidesToScroll: 1,
          speed: 2000,
          autoplaySpeed: 1000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10px",
          slidesToShow: 1,
          rows: 1,
          slidesPerRow: 1,
          slidesToScroll: 1,
          speed: 2000,
          dots: true,
          autoplaySpeed: 1000,
        },
      },
    ],
  };

  const { loading,testimonial, error } = useSelector((state) => ({ ...state.home }))
  const [modifiedData, setModifiedData] = useState([])
  const [modifiedTestimonial,  setModifiedTestimonial] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTestimonial())
  }, [dispatch])

  
  useEffect(() => {
      if (testimonial.length !== 0   || testimonial.id > 0) {
          const {subtitle,title ,} =testimonial.attributes
          const {data} =testimonial.attributes.testimonials

          if (data) {
            const newPlans = data.map((items) => {
              const {  city,name,comments,linkdin_url } = items.attributes;
              const {  url } = items.attributes.image.data.attributes
          
      
              const { id } = items
      
      
              return {
                city,name,comments,linkdin_url,url  ,id
              }
      
      
      
      
      
      
            })
            //  const data = item.attributes.faqs_accordians.data;
            setModifiedTestimonial(newPlans)
          } else {setModifiedTestimonial([]) }
      
  
        
          const newblogDetails= {
             title,subtitle
          };
          setModifiedData(newblogDetails);
      } else {
          setModifiedData(null);
      }


  }, [testimonial]);

  if (!testimonial) {

    <h2>Not this cocktail are present</h2>


  }

  if (error) {
    return (<p className='text-white'>{error.message}</p>)
  }

  
  if (!modifiedData) {
      return <h2>No Details</h2>;
  } else {
      const { subtitle   } = modifiedData;

      return (
          <>
              {loading ? (
                  <h2>Loading...</h2>
              ) : (

          <>
            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-center" data-aos="fade-up" >
                <p className="text-uppercase fs-18 fw-500 text-main-green" >
                  <BsFillCircleFill size={8} className="me-1" /> {subtitle}
                </p>
                <h2 className="text-white fw-600 display-6 mb-3 mb-md-4"  dangerouslySetInnerHTML={{__html: modifiedData["title"]}}>
                  {/* Happy to boast a <span className="text-main-green"> 4.7 rating</span>  by customers */}
                </h2>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-start pt-3">
              <Col className="text-center text-md-start" data-aos="fade-up">
                <div>
                  <div className="testislider">
                    <Slider {...settings} >
                      {modifiedTestimonial.map((Items) => (
                        <div key={Items.id} className="mx-2">
                          <Card className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white">
                            <Card.Body className="m-1 bg-dark-gradient rounded px-3 py-3">
                              <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                                <RiDoubleQuotesL className="text-white" />
                              </p>
                              <div className="px-4">
                                <p className="mb-1 mt-2">
                                  <BsFillStarFill size={13} className="text-sunglow me-1" />
                                  <BsFillStarFill size={13} className="text-sunglow me-1" />
                                  <BsFillStarFill size={13} className="text-sunglow me-1" />
                                  <BsFillStarFill size={13} className="text-sunglow me-1" />
                                  <BsFillStarFill size={13} className="text-sunglow me-1" />
                                </p>
                                <p className="fw-300 fs-13 lh-24">{Items.comments}</p>
                                <div className="d-flex justify-content-start align-items-center m-0">
                                  <img src={`${process.env.REACT_APP_BASE_URL}${Items.url}`} className="img-fluid m-0 rounded-circle" alt="" style={{ width: "45px", height: "45px" }} />
                                  <div className="ms-3 text-start">
                                    <h6 className="fw-600 fs-13 mb-0 pt-2">
                                      {Items.name}
                                      <a href={Items.linkdin_url} target="blank">
                                        <AiFillLinkedin size={18} className="ms-2 text-indigo" />
                                      </a>
                                    </h6>
                                    <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                                      {Items.city}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                                <RiDoubleQuotesR className="text-white" />
                              </p>
                            </Card.Body>
                          </Card>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </Col>
            </Row>
          </>
        )}</>)
  };
}
export default TestiSlider;
