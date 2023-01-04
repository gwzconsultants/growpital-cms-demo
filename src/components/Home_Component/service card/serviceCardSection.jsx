import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsFillCircleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHomePageServiceCard } from '../../../redux/home-page/HomePageSlice'
import ServiceCard from './ServiceCard'

const ServiceCardSection = () => {

    const { loading, error, ServiceCard_heading } = useSelector((state) => ({ ...state.home }))
    const [modifiedAccoridan, setModifiedAccoridan] = useState([])




    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchHomePageServiceCard())
    }, [dispatch])

    useEffect(() => {
        if (ServiceCard_heading.length !== 0 || ServiceCard_heading.id > 0) {
            const { section_title, section_subtitle } = ServiceCard_heading.attributes

            // console.log(image1);
            const newblogDetails = {
                section_title, section_subtitle
            };
            setModifiedAccoridan(newblogDetails);
        } else {
            setModifiedAccoridan(null);
        }


    }, [ServiceCard_heading]);


    if (error) {
        return (<h3>{error.massage}</h3>)
    }
    if (!modifiedAccoridan) {
        return <h2>No Details</h2>;
    } else {
        const { section_title, section_subtitle } = modifiedAccoridan;

        return (
<>
            {loading ? (
                <h2>Loading...</h2>
              ) : (
      
                    <>
                        <Row className="d-flex justify-content-center align-items-center">
                            <Col className="text-center" data-aos="fade-up">
                                <p className="text-uppercase fs-18 fw-500 text-main-green" >
                                    <BsFillCircleFill size={8} className="me-1" />{section_subtitle}
                                </p>
                                <h2 className="text-white fw-600 display-6 mb-3 mb-md-4" dangerouslySetInnerHTML={{__html: modifiedAccoridan["section_title"]}} >
                                   
                                </h2>
                            </Col>
                        </Row>
                        {/* <Row className=" pt-2 " > */}
            
            </>
        )}</>)
    }
}
export default ServiceCardSection