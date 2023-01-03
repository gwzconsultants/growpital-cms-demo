import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { BsFillCircleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJoinTelegram } from '../../../redux/home-page/HomePageSlice'
import AccordingQue from './AccordingQue'

const JoinTelegram = () => {
    const { loading,joinTelegram, error } = useSelector((state) => ({ ...state.home }))
    const [modifiedData, setModifiedData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchJoinTelegram())
    }, [dispatch])
  
    useEffect(() => {
        if (joinTelegram.length !== 0  ||joinTelegram.id > 0) {
            const {title,subtitle,telegram_address,description,telegram_title            } = joinTelegram.attributes
            const {url} = joinTelegram.attributes.telegram_icon.data.attributes
            

    
          
            const newblogDetails= {
                title,subtitle,telegram_address,description,telegram_title ,url
            };
            setModifiedData(newblogDetails);
        } else {
            setModifiedData(null);
        }
  
  
    }, [joinTelegram]);

    if (!joinTelegram) {
  
      <h2>Not this cocktail are present</h2>
  
  
    }
  
    if (error) {
      return (<p className='text-white'>{error.message}</p>)
    }

    
    if (!modifiedData) {
        return <h2>No Details</h2>;
    } else {
        const {      title,subtitle,telegram_address,description,telegram_title ,url } = modifiedData;

        return (
            <>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <Row className="d-flex justify-content-center align-items-start">
                    <Col xs={12} md={12} lg={6} className="text-center text-lg-start" data-aos="fade-up">
                      <p className="text-uppercase fs-18 fw-500 text-main-green text-uppercase" >
                        <BsFillCircleFill size={8} className="me-1" />{subtitle}
                      </p>
                      <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" >
                        {title}
                      </h2>
                      <p className="text-white fw-400 fs-18 py-4" >
                       {description}
                      </p>
                      {/* <div className="mt-5 d-none d-md-block "> */}
                      <div data-aos="fade-up">
                        <a href={telegram_address}>
                          <Button
                            variant="dark"
                            size="lg"
                            className="px-3 px-md-5 py-3"
        
                          >
                            <img src={`${process.env.REACT_APP_BASE_URL}${url}`} className="img-fluid me-3" style={{ maxWidth: "50px" }} alt="" />{" "}
                           {telegram_title}
                          </Button>
                        </a>
                      </div>
                      {/* </div> */}
                    </Col>
                    <Col xs={12} md={12} lg={6} className="  mt-5 mt-lg-0">
                      <div className="faq-accordian text-center text-lg-end" data-aos="fade-up" >
                        <AccordingQue Display_Sr_No="text-main-gold me-3 d-none" />
                      </div>
                      <a href="/faqs" className="fs-16 fw-700 text-white text-start">More FAQs</a>
                    </Col>
                  </Row>   
  )}</>)}
}

export default JoinTelegram