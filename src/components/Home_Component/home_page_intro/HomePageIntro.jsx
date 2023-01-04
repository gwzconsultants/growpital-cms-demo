
import React, { useEffect, useState } from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { BsArrowRight, BsFillStarFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Typewriter } from 'react-simple-typewriter'
import { TopIcon1, TopIcon2 } from '../../../assets/img/contactimg'
import { fetchHomeIntroSection } from '../../../redux/home-page/HomePageSlice'
import ButtonStar from '../../ButtonStar'

const HomePageIntro = () => {
    const { loading,homeIntro, error } = useSelector((state) => ({ ...state.home }))
    const [modifiedData, setModifiedData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchHomeIntroSection())
    }, [dispatch])
  

    
    useEffect(() => {
        if (homeIntro.length !== 0   ||homeIntro.id > 0) {
            const {typewriter_text,subtitle,card_A_title,card_B_title,card_C_title,gredian_text,title} = homeIntro.attributes
            const {url:card_A_url} = homeIntro.attributes.card_A_icon.data.attributes
            const {url:card_B_url} = homeIntro.attributes.card_B_icon.data.attributes
            const {url:card_C_url} = homeIntro.attributes.card_C_icon.data.attributes
            const {url:image} = homeIntro.attributes.image.data.attributes
            const typeWriteArry = typewriter_text.split(",")
            const typeWrite_1 = typeWriteArry[0]
            const typeWrite_2 = typeWriteArry[1]
            const typeWrite_3 = typeWriteArry[2]
      
    
          
            const newblogDetails= {
              typeWrite_1,typeWrite_2,typeWrite_3 , gredian_text,  title,subtitle,card_A_title,card_B_title,card_C_title ,card_A_url,card_B_url, card_C_url,image
            };
            setModifiedData(newblogDetails);
        } else {
            setModifiedData(null);
        }
  
  
    }, [homeIntro]);

    if (!homeIntro) {
  
      <h2>Not this cocktail are present</h2>
  
  
    }
  
    if (error) {
      return (<p className='text-white'>{error.message}</p>)
    }

    
    if (!modifiedData) {
        return <h2>No Details</h2>;
    } else {
        const { title,subtitle,gredian_text,card_A_url,card_B_url, card_C_url,image  ,typeWrite_1, typeWrite_2, typeWrite_3  } = modifiedData;

        return (
            <>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (

  
    <>  <Row className="d-flex justify-content-center align-items-center py-0  mt-0 " >
    <Col xs={12} md={12} lg={7} className="text-center text-md-start"  >
      <div className="bg-shark3 rounded p-1 p-md-2 d-inline-block mb-3 "   >
        <h5 className="text-main-gradient fw-500 fs-22 fs-sm-18 mb-0">
          <Image
         src={TopIcon2} className="img-fluid me-2" alt="" />
        {  gredian_text }
          <Image src={TopIcon1} className="img-fluid ms-2" alt="" />
        </h5>
      </div>
      <div  >
        <h1 className="text-white fw-600 display-5 mb-3 mb-md-4">
          {title} <span className="text-main-green pe-2"> <BsArrowRight /></span>
          <span className="text-main-green ">
            <Typewriter
              words={[typeWrite_1,typeWrite_2 ,typeWrite_3]}
              loop={3}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </span>
        </h1>
        <p className="text-white fw-400 fs-24 my-3 mb-md-4 py-2">
          {subtitle}
        </p>
      </div>
      <div className="px-5 px-lg-0">
        <Row>
          <Col md={4} lg={4} data-aos="fade-up">
            <Card className="darkcard mb-3 mb-md-4 p-0 rounded text-start text-white">
              <Card.Body className="m-1 bg-dark-gradient rounded px-4 py-5 py-md-4">
                <div className="darkcard-icon p-3 mx-auto mb-4 mb-md-2 d-flex justify-content-center align-items-center">
                  <Image src={`${process.env.REACT_APP_BASE_URL}${card_A_url}`} className="img-fluid" alt="" />
                </div>
                <Card.Title dangerouslySetInnerHTML={{__html: modifiedData["card_A_title"]}} className="fw-400 text-center fs-20 mb-0 pt-2"> 
           
             </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={4} data-aos="fade-up">
            <Card className="darkcard mb-3 mb-md-4 p-0 rounded text-start text-white">
              <Card.Body className="m-1 bg-dark-gradient rounded px-4 py-5 py-md-4">
                <div className="darkcard-icon p-3 mx-auto mb-4 mb-md-2 d-flex justify-content-center align-items-center">
                  <Image src={`${process.env.REACT_APP_BASE_URL}${card_B_url}`} className="img-fluid" alt="" />
                </div>
                <Card.Title dangerouslySetInnerHTML={{__html: modifiedData["card_B_title"]}} className="fw-400 text-center fs-20 mb-0 pt-2"> 
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={4} data-aos="fade-up">

            <Card className="darkcard mb-5 mb-md-4 p-0 rounded text-start text-white">
              <Card.Body className="m-1 bg-dark-gradient rounded px-4 py-5 py-md-4">

                <div className="darkcard-icon px-3 py-1 mx-auto mb-4 mb-md-2 d-flex justify-content-center align-items-center">
                  <Image src={`${process.env.REACT_APP_BASE_URL}${card_C_url}`} className="img-fluid" alt="" />
                </div>
                <Card.Title dangerouslySetInnerHTML={{__html: modifiedData["card_C_title"]}} className="fw-400 text-center fs-20 mb-0 pt-2"> 

                </Card.Title>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div data-aos="fade-up" data-aos-offset="50" >
        <ButtonStar />
      </div>
      <div className="mx-2 py-1" data-aos="fade-up" data-aos-offset="50">
        <p className="mb-1 text-md-start  text-center ">
          <span className="text-white fs-18 me-2">Rated </span>

          <BsFillStarFill size={18} className="text-sunglow me-1" />
          <BsFillStarFill size={18} className="text-sunglow me-1" />
          <BsFillStarFill size={18} className="text-sunglow me-1" />
          <BsFillStarFill size={18} className="text-sunglow me-1" />
          <BsFillStarFill size={18} className="text-sunglow me-1" />

          <span className="text-white fs-18 ms-1">4.7 by user</span>
        </p>
      </div>
    </Col>
    <Col
      xs={12}
      md={12}
      lg={5}
      className="text-center text-lg-end mt-lg-0 mt-md-5 mt-5 p-3 mb-4"
      data-aos="fade-up"
    >
      {/* <img src="BrowserPreview_tmp.gif?1666269773" className="img-fluid"  alt=""/> */}
      <Image src={`${process.env.REACT_APP_BASE_URL}${image}`} className="img-fluid rounded-4" alt="" />
    </Col>
  </Row>
    </>)

    }</>
  )
}}

export default HomePageIntro