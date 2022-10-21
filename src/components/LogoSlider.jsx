import React from 'react'
// import { Col } from 'react-bootstrap';
import Slider from 'react-slick';
import {logo1, logo2, logo3,logo4,logo5,logo6} from "../assets/img/contactimg";


const LogoSlider = () => {
    var settings = {
        className: "center",
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
        rows: 1,
        slidesPerRow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: "10px",
                    slidesToShow: 1,
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToScroll: 1,
                    speed: 2000,
                    autoplaySpeed: 1000,
                },
            },
            { 
                breakpoint: 768,
                settings: {
                    centerPadding: "10px",
                    slidesToShow: 1,
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToScroll: 1,
                    speed: 2000,
                    dots: true,
                    autoplaySpeed: 1000,
                },
            },
        ],
    };
    return (
        <div className='about-logo pb-4 '>
            {/* <Col className='d-flex justify-content-evenly p-3'> */}
            <Slider {...settings}  className="bg-white p-4  about-slider" >

                    <div  className='about-slider'>
                    <img src={logo1} alt="" className='me-4'/>
                    </div >
                    <div className='about-slider'>
                    <img src={logo2} alt="" className='me-4'/>
                    </div>
                    <div className='about-slider'>
                    <img src={logo3} alt="" className='me-4'/>
                    </div>
                    <div className='about-slider'>
                    <img src={logo4} alt="" className='me-4'/>
                    </div>
                    <div className='about-slider'>
                    <img src={logo5} alt="" className='me-4'/>
                    </div >
                    <div className='about-slider'>
                    <img src={logo6} alt="" className='me-4'/>
                    </div>

            </Slider>
            {/* </Col> */}
        </div>
    )
}

export default LogoSlider