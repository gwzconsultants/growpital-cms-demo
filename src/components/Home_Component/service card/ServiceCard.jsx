import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Row, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Autoplay, Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import { locking, payoutIcon, timerglass } from '../../../assets/img/contactimg'
// import { service } from '../data/ServicePlanData'
;
import { fetchServicePlan } from '../../../redux/home-page/HomePageSlice';


const ServiceCard = () => {

    const { loading, plans, error } = useSelector((state) => ({ ...state.home }))
  const [modifiedService, setModifiedService] = useState([])
 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchServicePlan())
  }, [dispatch])


  useEffect(() => {
  if (plans) {
      const newPlans = plans.map((items) => {
        const {  PlanName,amount,units,roi,payout} = items.attributes;
     const{url} = items.attributes.planImg.data.attributes; 

        const { id } = items


        return {
            PlanName,amount,units,roi,payout,url ,
          id
        }






      })
      //  const data = item.attributes.faqs_accordians.data;
      setModifiedService(newPlans)
    } else { setModifiedService([]) }}


  , [plans]);



  if (loading) {
    return (<h3>Loading...</h3>)
  }
  if (!plans) {

    <h2>network are slow</h2>


  }

  if (error) {
    return (<p>{error.massage}</p>)
  }
  return (

        <>


            {/* check changes on both mode */}
            {/* desktop mode view */}
            <Col md={9} className='Service-Card d-none d-xl-block '>
                <Row className="d-flex justify-content-center  align-items-center   ">
                    {modifiedService.map((item) => (

                        <Col lg={6} className="d-flex justify-content-center  align-items-center  mb-5 " key={item.id} data-aos="fade-up">
                            <Card


                                style={{ width: '25rem' }}
                                className="mb-2 bg-dark-gradient text-white px-3"
                            >
                                <Card.Header className='d-inline-flex align-items-center py-3 fw-bold fs-4 '>
                                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                                        <img src={`${process.env.REACT_APP_BASE_URL}${item.url}`} alt="" className="img-fluid" style={{ width: "1rem" }} />
                                    </p>
                                    {item.PlanName}
                                </Card.Header>
                                <Card.Header className='d-flex align-items-center justify-content-between py-3'>
                                    <div>
                                        <Card.Title className='text-main-green'>₹ {item.amount}/unit </Card.Title>
                                        <Card.Text>
                                            Investment
                                         
                                        </Card.Text>
                                    </div>
                                    <div>
                                        <Card.Title className='text-main-green'>{item.roi}% </Card.Title>
                                        <Card.Text>
                                            ROI
                                        </Card.Text>
                                    </div>
                                </Card.Header>
                                <Card.Body className='text-center' >
                                    <div className='d-flex align-items-center justify-content-between mb-3 text-start'>
                                        <div>
                                            <Card.Text className=''>
                                                <img src={timerglass} alt="" style={{ width: "1rem" }} className="mb-1" />{" "}   Tenure
                                                {/* <OverlayTrigger
                                                    placement="right"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>} >
                                                    <img src={item.i_img} alt="" className='ms-1 ' style={{ width: "1rem" }} />
                                                </OverlayTrigger> */}
                                            </Card.Text>
                                            <Card.Text className=''>
                                                <img src={locking} alt="locking" className="img-fluid mb-1" style={{ width: "1rem" }} />{" "}  Lockin period
                                                {/* <OverlayTrigger
                                                    placement="right"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>} >
                                                    <img src={item.i_img} alt="" className='ms-1' style={{ width: "1rem" }} />
                                                </OverlayTrigger> */}
                                            </Card.Text>
                                            <Card.Text>
                                                <img src={payoutIcon} alt="locking" className="img-fluid mb-1" style={{ width: "1.2rem" }} />{" "}  Payout
                                                {/* <OverlayTrigger
                                                    placement="right"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>} >
                                                    <img src={item.i_img} alt="" className='ms-1' style={{ width: "1rem" }} />
                                                </OverlayTrigger> */}
                                            </Card.Text>
                                        </div>
                                        <div>
                                            <Card.Text>
                                                :
                                            </Card.Text>
                                            <Card.Text>
                                                :
                                            </Card.Text>
                                            <Card.Text>
                                                :
                                            </Card.Text>
                                        </div>
                                        <div>
                                            <Card.Text>
                                                36 Months
                                            </Card.Text>
                                            <Card.Text>
                                                12 Months
                                            </Card.Text>
                                            <Card.Text>
                                                {item.payout}
                                            </Card.Text>
                                        </div>
                                    </div>
                                    <div className='py-2'>
                                        <a href="https://app.growpital.com/signup">   <Button className=" main-btn-service maincolor bg-transparent ">Invest know</Button> </a>
                                    </div>
                                    <div className='py-2'>
                                        <a href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view" className="fs-16 fw-700 text-white text-center py-2">Know more</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>


                    ))}
                </Row>

            </Col>

            {/* check changes on both mode */}
            {/* mobile view swiper */}
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                grabCursor={true}
                loop={true}
                effect={"fade"}
                pagination={true}
                autoplay={
                    {
                        delay: 3000,
                        disableOnInteraction: false,
                    }
                }
                navigation={
                    true
                }


                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 50,

                    },
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 20,

                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,

                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,

                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 10,

                    },
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="d-xl-none Service-Card"

            >
                <Col md={12} className=''>
                    <Row className="d-flex justify-content-center  align-items-center   ">
                        {modifiedService.map((item) => (
                            <SwiperSlide key={item.id} className="mb-5">
                                 <Col md={12} className="d-flex justify-content-center  align-items-center  mb-5 " key={item.id} data-aos="fade-up">
                            <Card


                                style={{ width: '25rem' }}
                                className="mb-2 bg-dark-gradient text-white px-3"
                            >
                                <Card.Header className='d-inline-flex align-items-center py-3 fw-bold fs-4 '>
                                    <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center me-4 p-2">
                                        <img src={`${process.env.REACT_APP_BASE_URL}${item.url}`} alt="" className="img-fluid" style={{ width: "1rem" }} />
                                    </p>
                                    {item.PlanName}
                                </Card.Header>
                                <Card.Header className='d-flex align-items-center justify-content-between py-3'>
                                    <div>
                                        <Card.Title className='text-main-green'>₹ {item.amount}/unit </Card.Title>
                                        <Card.Text>
                                            Investment
                                         
                                        </Card.Text>
                                    </div>
                                    <div>
                                        <Card.Title className='text-main-green'>{item.roi}% </Card.Title>
                                        <Card.Text>
                                            ROI
                                        </Card.Text>
                                    </div>
                                </Card.Header>
                                <Card.Body className='text-center' >
                                    <div className='d-flex align-items-center justify-content-between mb-3 text-start'>
                                        <div>
                                            <Card.Text className=''>
                                                <img src={timerglass} alt="" style={{ width: "1rem" }} className="mb-1" />{" "}   Tenure
                                                {/* <OverlayTrigger
                                                    placement="right"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>} >
                                                    <img src={item.i_img} alt="" className='ms-1 ' style={{ width: "1rem" }} />
                                                </OverlayTrigger> */}
                                            </Card.Text>
                                            <Card.Text className=''>
                                                <img src={locking} alt="locking" className="img-fluid mb-1" style={{ width: "1rem" }} />{" "}  Lockin period
                                                {/* <OverlayTrigger
                                                    placement="right"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>} >
                                                    <img src={item.i_img} alt="" className='ms-1' style={{ width: "1rem" }} />
                                                </OverlayTrigger> */}
                                            </Card.Text>
                                            <Card.Text>
                                                <img src={payoutIcon} alt="locking" className="img-fluid mb-1" style={{ width: "1.2rem" }} />{" "}  Payout
                                                {/* <OverlayTrigger
                                                    placement="right"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>} >
                                                    <img src={item.i_img} alt="" className='ms-1' style={{ width: "1rem" }} />
                                                </OverlayTrigger> */}
                                            </Card.Text>
                                        </div>
                                        <div>
                                            <Card.Text>
                                                :
                                            </Card.Text>
                                            <Card.Text>
                                                :
                                            </Card.Text>
                                            <Card.Text>
                                                :
                                            </Card.Text>
                                        </div>
                                        <div>
                                            <Card.Text>
                                                36 Months
                                            </Card.Text>
                                            <Card.Text>
                                                12 Months
                                            </Card.Text>
                                            <Card.Text>
                                                {item.payout}
                                            </Card.Text>
                                        </div>
                                    </div>
                                    <div className='py-2'>
                                        <a href="https://app.growpital.com/signup">   <Button className=" main-btn-service maincolor bg-transparent ">Invest know</Button> </a>
                                    </div>
                                    <div className='py-2'>
                                        <a href="https://drive.google.com/file/d/1bUF3cdfk5gGHGSK7Jh35kQD9ZwrQMLTK/view" className="fs-16 fw-700 text-white text-center py-2">Know more</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>


                            </SwiperSlide>

                        ))}
                    </Row>

                </Col>
            </Swiper>
        </>
    )

}

export default ServiceCard