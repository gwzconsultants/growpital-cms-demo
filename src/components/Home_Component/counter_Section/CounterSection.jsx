import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsFillCircleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCounter, fetchCounterText } from '../../../redux/home-page/HomePageSlice'
import ButtonStar from '../../ButtonStar'
import CardCounter from './CardCounter'

const CounterSection = () => {
    const { loading, counterText, counter, error } = useSelector((state) => ({ ...state.home }))
    const [modifiedData, setModifiedData] = useState([])
    const [modifiedCounter, setModifiedCounter] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCounterText())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchCounter())
    }, [dispatch])
    // console.log(counterText);

    useEffect(() => {
        if (counter) {
            const newCounter = counter.map(item => {
                const { url } = item.attributes.logo.data.attributes;
                const { back_counter_symbol, front_counter_symbol, heading, units, value } = item.attributes;


                return {
                    url, after: back_counter_symbol, before: front_counter_symbol, heading, units, value


                }
            })
            setModifiedCounter(newCounter)
        } else { setModifiedCounter([]) }



    }, [counter]);

    useEffect(() => {
        if (counterText.length !== 0 || counterText.id > 0) {
            const { subtitle, bottom_text1, bottom_text2, title } = counterText.attributes
            const bottomArry = bottom_text1.split(",")
            const bottomText1 = bottomArry[0]
            const bottomText2 = bottomArry[1]


            const newblogDetails = {
                subtitle, bottom_text1, bottom_text2, title ,bottomText1,
                bottomText2 
            };
            setModifiedData(newblogDetails);
        } else {
            setModifiedData(null);
        }


    }, [counterText]);

    if (!counterText || counter) {

        <h2>Not this cocktail are present</h2>


    }

    if (error) {
        return (<p className='text-white'>{error.message}</p>)
    }


    if (!modifiedData) {
        return <h2>No Details</h2>;
    } else {
        const { subtitle, bottomText1, bottomText2 , title  } = modifiedData;

        return (
            <>
                {loading ? (
                    <h2>Loading...hora gandu</h2>
                ) : (
                    <>
                        <Row className="d-flex justify-content-center align-items-center">
                            <Col className="text-center" data-aos="fade-up">
                                <p className="text-uppercase fs-18 fw-500 text-main-green" >
                                    <BsFillCircleFill size={8} className="me-1" /> {subtitle}
                                </p>
                                <p className="text-white fw-600 fs-24 mb-3 mb-md-4" >
                                    {title}
                                </p>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center align-items-center ">
                            {modifiedCounter.map((item, index) => (

                                <CardCounter
                                    url={item.url}
                                    heading={item.heading}
                                    before={item.before}
                                    after={item.after}
                                    key={index}
                                    units={item.units}
                                    value={item.value}
                                />
                            ))}
                            <Col md={12} className="text-center mt-5 mt-md-0" data-aos="fade-up">
                                <ButtonStar />
                                <div className="pt-3">
                                    <p className="text-white fw-600 fs-24 fs-sm-16  mb-3 mb-md-4" >
                                        {bottomText1} <a href='tel:+91-7231844488' style={{ color: "#07e57d", textDecoration: "none" }}> {bottomText2}</a>
                                    </p>
                                    <p className="text-white fw-600 fs-24 fs-sm-16 mb-3 mb-md-4" dangerouslySetInnerHTML={{ __html: modifiedData["bottom_text2"] }}>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </>
                )}</>)
    }
}
export default CounterSection