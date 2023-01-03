import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { BsFillCircleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Typewriter } from 'react-simple-typewriter'
import { fetchHomeSecondSection } from '../../../redux/home-page/HomePageSlice'
import ButtonStar from '../../ButtonStar'
import CardDark from '../../CardDark'
const HomeSecondSection = () => {
    const { loading, homeSecond, error } = useSelector((state) => ({ ...state.home }))
    const [modifiedData, setModifiedData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchHomeSecondSection())
    }, [dispatch])
    
 
    
    useEffect(() => {
        if ( homeSecond.length !== 0 ) {
            
            const{subtitle ,title, zero_text_1,zero_text_2,zero_text_3 ,typewriter_text,card_A_title,card_A_details,card_B_title,card_B_details,card_C_title,card_C_details           } = homeSecond.attributes
            const{url:zero   } = homeSecond.attributes.zero_image.data.attributes
            const{url:A_url  } = homeSecond.attributes.card_A_icon.data.attributes
            const{url:B_url   } = homeSecond.attributes.card_B_icon.data.attributes
            const{url:C_url   } = homeSecond.attributes.card_C_icon.data.attributes
            const titleArry = title.split(",")
             const typeWriteArry = typewriter_text.split(",")
            const first_title = titleArry[0]
            const second_title = titleArry[1]
            const typeWrite_1 = typeWriteArry[0]
            const typeWrite_2 = typeWriteArry[1]
          
            const newblogDetails= {
                subtitle , titleArry,zero  , zero_text_1,zero_text_2,zero_text_3 ,typeWriteArry    ,first_title,second_title ,typeWrite_1,
                typeWrite_2,card_A_title,card_A_details,A_url,B_url,  C_url,card_B_title,card_B_details,card_C_title,card_C_details 
            };
            setModifiedData(newblogDetails);
        } else {
            setModifiedData(null);
        }
  
  
    }, [homeSecond]);

    if (!homeSecond) {
  
      <h2>Not this cocktail are present</h2>
  
  
    }
  
    if (error) {
      return (<p className='text-white'>{error.message}</p>)
    }

    
    if (!modifiedData) {
        return <h2>No Details</h2>;
    } else {
        const {  subtitle , first_title,second_title   ,zero  , zero_text_1,zero_text_2,zero_text_3  ,typeWrite_1
           , typeWrite_2 ,card_A_title,card_A_details ,A_url,B_url,  C_url,card_B_title,card_B_details,card_C_title,card_C_details      } = modifiedData;

        return (
            <>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (


    <>
    <Row className="d-flex justify-content-center align-items-center pb-0 ">
    <Col xs={12} md={12} lg={6} className="text-center text-md-start ">
      <p className="text-uppercase fs-18 fw-500 text-main-green" data-aos="fade-up">
        <BsFillCircleFill size={8} className="me-1" />{ subtitle }
      </p>
      <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" data-aos="fade-up">
      { first_title}{" "}
        <span className="text-main-green" >
          <Typewriter
            words={[typeWrite_1 ,typeWrite_2]}
            loop={2}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={3000}
          /></span>{" "}
{ second_title }
      </h2>
      <div className="d-flex justify-content-md-start justify-content-center align-items-center my-5 my-md-5 py-4 py-md-4" data-aos="fade-up">
        {/* <h2 className="display-1 fw-900 text-main-gold mb-0">0</h2> */}
        <Image src={`${process.env.REACT_APP_BASE_URL}${zero}`} className="img-fluid" alt="" />
        <div className="text-start">
          <p className="fs-24 fs-sm-18 fw-400 text-white ms-2 mb-5">
            {zero_text_1}
          </p>
          <p className="fs-24 fs-sm-18 fw-400 text-white ms-4 mb-5">{zero_text_2}</p>
          <p className="fs-24 fs-sm-18 fw-400 text-white ms-2 mb-0">
           {zero_text_3}
          </p>
        </div>
      </div>
      <div className="mb-2" data-aos="fade-up" >
        <ButtonStar />
      </div>
    </Col>
    <Col xs={12} md={12} lg={6} className="text-center text-md-end mt-5 mt-md-5 mt-lg-0 position-relative">
      <Row className="d-flex justify-content-center align-items-center ">
        <Col md={6} >
          <div data-aos="fade-up">
            <CardDark
              Cardicon={`${process.env.REACT_APP_BASE_URL}${A_url}`}
              Title={card_A_title}
              SubTitle={card_A_details}

            />
          </div>
          <div data-aos="fade-up">
            <CardDark
              Cardicon={`${process.env.REACT_APP_BASE_URL}${B_url}`}
              Title={card_B_title}
              SubTitle={card_B_details}
            />
          </div>
        </Col>
        <Col md={6} data-aos="fade-up">
          <CardDark
            Cardicon={`${process.env.REACT_APP_BASE_URL}${C_url}`}
            Title={card_C_title}
            SubTitle={card_C_details}
          />
        </Col>
        {/* <div>
        <img src={ tractormain} alt="" className="position-absolute main-gift-tractor" />
      </div> */}
      </Row>
    </Col>
  </Row>
  </>
  )}</>)
}}

export default HomeSecondSection