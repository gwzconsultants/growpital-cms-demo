import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { Col } from 'react-bootstrap';
import Slider from 'react-slick';
import { logo1, logo2, logo3, logo4, logo5, logo6 } from "../../assets/img/contactimg";
import { fetchPatnerLogo } from '../../redux/about-page/PatnerLogo';


const LogoSlider = () => {
    var settings = {
        className: "center",
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
        rows: 1,
        slidesPerRow: 1,
        slidesToScroll: 1,
        // dots: true,
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


    const { loading, Logo, error } = useSelector((state) => ({ ...state.patnerLogo }))
    const [modifiedLogo, setModifiedLogo] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPatnerLogo())
    }, [dispatch])


    useEffect(() => {
        if (Logo) {
            const newLogo = Logo.map(item => {
                const { url } = item.attributes.Logo_img.data.attributes;

                // NewDate.split('T')[0];


                return {
                    url

                }
            })
            setModifiedLogo(newLogo)
        } else { setModifiedLogo([]) }



    }, [Logo]);

    if (loading) {
        return (<h3>Loading...</h3>)
    }
    if (!Logo) {

        <h2>Not this cocktail are present</h2>


    }

    if (error) {
        return (<p>{error.massage}</p>)
    }
    return (
        <div className='about-logo pb-4 '>
            {/* <Col className='d-flex justify-content-evenly p-3'> */}
            <Slider {...settings} className="bg-white p-4  about-slider" >
                {modifiedLogo.map((items,index) => (

                    <div className='about-slider' key={index}>
                        <Image src={`${process.env.REACT_APP_BASE_URL}${items.url}`} className=" me-4" alt="" />
                    </div >
                ))}
              

            </Slider>
            {/* </Col> */}
        </div>
    )
}

export default LogoSlider