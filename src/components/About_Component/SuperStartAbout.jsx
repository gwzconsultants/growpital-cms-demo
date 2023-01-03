import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillLinkedin } from "react-icons/ai";
import 'swiper/css';
import { Autoplay, EffectCards } from 'swiper';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { fetchSuperstar } from "../../redux/about-page/AboutSlice";



const SuperstarsAbout = (props) => {
 

  const { loading,teem , error } = useSelector((state) => ({ ...state.aboutUsPage}))
  const [modifiedTeam, setModifiedTeam] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSuperstar())
  }, [dispatch])
  

  useEffect(() => {
    if (teem) {
      const newTeam = teem.map(item => {
        const { name,position,about_us,linkdin_url } = item.attributes;
        const { id } = item;
        const { url } = item.attributes.image.data.attributes;
        // NewDate.split('T')[0];


        return {
          name,position,about: about_us,url,id,linkdin:linkdin_url

        }
      })
      setModifiedTeam(newTeam)
    } else { setModifiedTeam([]) }



  }, [teem]);

  if (loading) {
    return (<h3>Loading...</h3>)
  }
  if (!teem) {

    <h2>Not this cocktail are present</h2>


  }

  if (error) {
    return (<p>{error.massage}</p>)
  }
  return (
    <>
     <div className="superstarsAbout"> 
     {/* desktop view mode */}
     <Row>
        {modifiedTeam.map((Items) => (
          <Col md={6}    className="d-none d-lg-block" data-aos="fade-up" key={Items.id}>
            
            <Card className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white">
              <Card.Body className="m-1 bg-dark-gradient rounded p-3">
                <Row>
                
                    
                  <Col xs={12} md={4}>
                  
                   <Image  src={`${process.env.REACT_APP_BASE_URL}${Items.url}`} className="img-fluid w-100 mb-md-0 mb-3" alt="profile pic" />
                    
                  </Col>
                  
                  
                  <Col xs={12} md={8}>
                    <Card.Title className="fw-600 fs-20 mb-0 pt-2">
                      {Items.name}
                    </Card.Title>
                    <Card.Title className="fw-600 fs-14 mb-3 pt-2 text-italian">
                      <cite>{Items.position}</cite>
                      <a href={Items.linkdin} target="blank">
                      <AiFillLinkedin size={18} className="ms-2 text-indigo" />
                      </a>
                    </Card.Title>
                    <Card.Text className="fw-300 fs-15 lh-24">
                      {Items.about}
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
           
          </Col>
        ))}
        </Row>


       {/* mobile view slider */}
       <Swiper
    breakpoints={{
0:{
    spaceBetween:10,
          slidesPerView: 1,
},

        576: {
       spaceBetween:10,
          slidesPerView: 1,
        },
        768: {
          
          slidesPerView: 1,
        },
       1000: {
          
          slidesPerView: 2,
        },
        1200: {
          
          slidesPerView: 2,
        },

      }}
    modules={[Autoplay ,EffectCards]}
    spaceBetween={5}
    speed={500}
    // slidesPerView={2}
    grabCursor={true}
    loop={true}
    effect={"fade"}
    autoplay={
       { delay: 3000,
        disableOnInteraction: false,}
    }
    className="d-lg-none"
   
  >
     {modifiedTeam.map((Items) => (
       <SwiperSlide key={Items.Id} >
          <Col md={12} lg={6} >
            <Card className="darkcard mb-4 mb-md-4 p-0 rounded text-start text-white">
              <Card.Body className="m-1 bg-dark-gradient rounded p-4">
                <Row>
                  <Col xs={12} md={4}>
                    <Image src={`${process.env.REACT_APP_BASE_URL}${Items.url}`} className="img-fluid w-100 mb-md-0 mb-3" alt="" />
                  </Col>
                  <Col xs={12} md={8}>
                    <Card.Title className="fw-600 fs-20 mb-0 pt-2">
                      {Items.name}
                    </Card.Title>
                    <Card.Title className="fw-600 fs-14 mb-3 pt-2 text-italian">
                      <cite>{Items.position}</cite>
                      <a href={Items.link} target="blank">

                      <AiFillLinkedin size={18} className="ms-2 text-indigo" />
                      </a>
                    </Card.Title>
                    <Card.Text className="fw-300 fs-15 lh-24">
                      {Items.about}
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          </SwiperSlide>
        ))}
        {/* </Slider> */}
        </Swiper>
        </div>
    </>
  );
};

export default SuperstarsAbout;
