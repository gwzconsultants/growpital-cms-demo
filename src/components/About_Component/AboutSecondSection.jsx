import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsFillCircleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchaAboutSecondSection } from '../../redux/about-page/AboutSlice'

const AboutSecondSection = () => {
    const { loading, datas, error } = useSelector((state) => ({ ...state.aboutUsPage }))
    const [modifiedData, setModifiedData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchaAboutSecondSection())
    }, [dispatch])


    useEffect(() => {
        if (datas.length !== 0) {

            const {subtitle,title,description  } = datas.attributes


            const newblogDetails = { subtitle,title,description };
            setModifiedData(newblogDetails);
        } else {
            setModifiedData(null);
        }


    }, [datas]);

    if (!datas) {

        <h2>Not this cocktail are present</h2>


    }

    if (error) {
        return (<p className='text-white'>{error.message}</p>)
    }


    if (!modifiedData) {
        return <h2>No Details</h2>;
    } else {
        const { subtitle,title,description } = modifiedData;

        return (
            <>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <>
                        <Row className='d-flex align-items-center'>

                            <Col md={12} className="pe-5 mb-3  " >
                                <p className="text-uppercase fs-18 fs-fm-16 fw-500 text-main-green  text-center pb-1 mb-1 mt-5" data-aos="fade-up" >
                                    <BsFillCircleFill size={8} className="me-1" /> {subtitle}
                                </p>
                                <p className='fw-bold fs-48 text-center content-text pb-3 mt-0 ' data-aos="fade-up">{title}</p>
                                <p className='text-center d-flex align-items-center justify-content-center ms-1' data-aos="fade-up">{description}
                                </p>
                            </Col>
  
                        </Row>
                    </>)}</>)
    }
}
export default AboutSecondSection