import React, { useEffect, useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { BsFillCircleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHowItWork } from '../../redux/about-page/AboutSlice'

const AboutHowItWork = () => {

    const { loading, howItWork, error } = useSelector((state) => ({ ...state.aboutUsPage }))
    const [modifiedData, setModifiedData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHowItWork())
    }, [dispatch])

   
    useEffect(() => {
        if (howItWork.length !== 0 || howItWork.id >0) {

            const { subtitle, title } = howItWork.attributes
            const { url } = howItWork.attributes.image.data.attributes


            const newblogDetails = { subtitle, title,url };
            setModifiedData(newblogDetails);
        } else {
            setModifiedData(null);
        }


    }, [howItWork]);

    if (!howItWork) {

        <h2>Not this cocktail are present</h2>


    }

    if (error) {
        return (<p className='text-white'>{error.message}</p>)
    }


    if (!modifiedData) {
        return <h2>No Details</h2>;
    } else {
        const { subtitle, title,url } = modifiedData;

        return (
            <>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <>
                        <Row className="d-flex justify-content-center align-items-center">
                            <Col className="text-center">
                                <p className="text-uppercase fs-18 fw-500 fs-fm-16 text-main-green pb-1 mb-1" data-aos="fade-up">
                                    <BsFillCircleFill size={8} className="me-1" /> {subtitle}
                                </p>
                                <h2 className="text-white fw-600 display-6 mb-0 mb-md-4 content-text" data-aos="fade-up">
                                {title}
                                    {/* <span className="text-main-green">Growpital</span> */}
                                </h2>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center align-items-start pt-3 pt-md-0">
                            <Col data-aos="fade-up">
                                <Image src={`${process.env.REACT_APP_BASE_URL}${url}`} alt="" className='img-fluid w-100' />
                            </Col>
                        </Row>
                    </>
                )}</>)
    }
}

export default AboutHowItWork