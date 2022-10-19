import React from 'react'
import { Col } from 'react-bootstrap';
import Slider from 'react-slick';
import Logo from "../assets/img/logo.png";


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
        <div className='about-logo pb-4'>
            {/* <Col className='d-flex justify-content-evenly p-3'> */}
            <Slider {...settings} >

                    <div >
                    <img src={Logo} alt="" className='me-4'/>
                    </div>
                    <div>
                    <img src={Logo} alt="" className='me-4'/>
                    </div>
                    <div>
                    <img src={Logo} alt="" className='me-4'/>
                    </div>
                    <div>
                    <img src={Logo} alt="" className='me-4'/>
                    </div>
                    <div>
                    <img src={Logo} alt="" className='me-4'/>
                    </div>

            </Slider>
            {/* </Col> */}
        </div>
    )
}

export default LogoSlider