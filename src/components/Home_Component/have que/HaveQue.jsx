import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { BsCheck2Square, BsFillCircleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHaveQue } from '../../../redux/home-page/HomePageSlice'

const HaveQue = () => {
  
    const { loading,que, error } = useSelector((state) => ({ ...state.home }))
    const [modifiedData, setModifiedData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHaveQue())
    }, [dispatch])


    useEffect(() => {
        if (que.length !== 0 || que.id > 0) {

            const { subtitle, title ,heading ,checkbox_first,checkbox_second,chechbox_third ,call_text,call_url,chat_text,chat_url,community_text,community_url           } = que.attributes
            const { url:call_icon } = que.attributes.call_icon.data.attributes
            const { url:chat_icon } = que.attributes.chat_icon.data.attributes
            const { url:community_icon } = que.attributes.community_icon.data.attributes


            const newblogDetails = { subtitle, title ,heading,checkbox_first,checkbox_second,chechbox_third ,call_text,call_url,chat_text,chat_url,community_text,community_url,call_icon,chat_icon,community_icon
            };
            setModifiedData(newblogDetails);
        } else {
            setModifiedData(null);
        }


    }, [que]);

    if (!que) {

        <h2>Not this cocktail are present</h2>


    }

    if (error) {
        return (<p className='text-white'>{error.message}</p>)
    }


    if (!modifiedData) {
        return <h2>No Details</h2>;
    } else {
        const { subtitle, title,heading   ,checkbox_first,checkbox_second,chechbox_third,call_text,call_url,chat_text,chat_url,community_text,community_url ,call_icon,chat_icon,community_icon     } = modifiedData;

        return (
            <>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <>
                    <Row className="d-flex justify-content-center align-items-center">
                    <Col className="text-center" data-aos="fade-up">
                      <p className="text-uppercase fs-18 fw-500 text-main-green" >
                        <BsFillCircleFill size={8} className="me-1" /> { subtitle}
                      </p>
                      <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" >
                       { title}
                      </h2>
                    </Col>3
                  </Row>
                  <Row className="d-flex justify-content-center align-items-strech pt-5">
                    <Col xs={12} md={12} lg={5} className="text-center text-md-start" data-aos="fade-up">
                      <p className="fs-26 fs-sm-22 fw-500 text-white mb-5" >
                       {heading}
                      </p>
                      <ul className="list-unstyled fs-20 fs-sm-18 fw-500 text-white text-start" >
        
                        <li className="d-flex justify-content-start mt-3">
                          <BsCheck2Square className="text-main-gold mt-2 me-3" />{" "}
                         {checkbox_first}
                        </li>
        
                        <li className="d-flex justify-content-start mt-3">
                          <BsCheck2Square className="text-main-gold mt-2 me-3" />{" "}
                          {checkbox_second}
                        </li>
                        <li className="d-flex justify-content-start mt-3">
                          <BsCheck2Square className="text-main-gold mt-2 me-3" />
                          {chechbox_third}
                        </li>
                      </ul>
                    </Col>
                    <Col
                      xs={12}
                      md={12}
                      lg={7}
                      className="text-center d-flex justify-content-md-end justify-content-center align-items-center"
                    >
                      <Row className="mt-5 mt-lg-0 pe-md-5 me-md-5">
                        <Col xs={12} className="d-grid gap-4" data-aos="fade-up">
                          <div>
                            <a href={call_url}>
                              <Button
                                variant="dark"
                                size="lg"
                                className="px-3 px-md-5 py-3 w-100"
        
        
                              >
                                <img src={`${process.env.REACT_APP_BASE_URL}${call_icon}`} className="img-fluid me-3 bg-yellow" alt="" style={{ width: "3rem" }} />{" "}
                               {call_text}
                              </Button>
                            </a>
                          </div>
        
                          <div>
                            <a href={chat_url}>
                              <Button
                                variant="dark"
                                size="lg"
                                className="px-3 px-md-5 py-3 w-100"
        
                              >
                                <img src={`${process.env.REACT_APP_BASE_URL}${chat_icon}`} className="img-fluid me-3 " style={{ width: "3rem" }} alt="" />{" "}
                                {chat_text}
                              </Button>
                            </a>
                          </div>
        
                          <div>
                            <a href={community_url}>
                              <Button
                                variant="dark"
                                size="lg"
                                className="px-3 px-md-5 py-3"
        
                              >
                                <img src={`${process.env.REACT_APP_BASE_URL}${community_icon}`} className="img-fluid me-3" style={{ maxWidth: "50px" }} alt="" />{" "}
                               {community_text}
                              </Button>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </>
  )}</>)
}
}
export default HaveQue