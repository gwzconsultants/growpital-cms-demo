import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import User from "../assets/img/user.png";
import { BsFillStarFill } from "react-icons/bs";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";

import { aditya, gujan, prashenjeet ,  saurabh,  shanshank, shuman, vipul } from "../assets/img/contactimg";

const TestiSlider = () => {
  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    rows: 2,
    slidesPerRow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 700,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "10px",
          slidesToShow: 2,
          rows: 2,
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
  const Testimoni = [
    {
      Id: "1",
      Img: aditya,
      Title: "Aditya Patra",
      Designa: "Bhubaneswar",
      SubTitle: "One of THE BEST alternative investment platforms I've come across. With the stock market being unreliable, I was looking for safer investment opportunities and BANG - Came across Growpital 🤩. The best part - the RETURNS ARE TAX FREE!.",
    },
    {
      Id: "2",
      Img: vipul,
      Title: "Vipul Rawal",
      Designa: "Delhi",
      SubTitle:"Growpital allows to invest in a market which can barely has bad times. Agriproduce will always find buyers, use of technology to maximise the output is so obvious but rare.",
    },
    {
      Id: "3",
      Img:  prashenjeet,
      Title: "Prashenjeet Biswas",
      Designa: "Odisha",
      SubTitle:"It is a unique alternative investment platform. I wish it grows big and helps investors as well as country in improving farming sector. I love that I'm investing for a better cause like farming which will help the bottom line of our country.",
    },
    {
      Id: "4",
      Img: shanshank,
      Title: "Shashank Tiwari",
      Designa: "Pune",
      SubTitle: "Unique concept and kudos to Rituraj for being available to clear any queries. May you grow further and create wealth for investors as well as help build sustainable environment.",
    },
    {
      Id: "1",
      Img: shuman,
      Title: "Suman Sarkar",
      Designa: "Kolkata",
      SubTitle:
        "Very good unique Platform for totally different type of tax free Investment.",
    },
    {
      Id: "2",
      Img: User,
      Title: "Mehul Anil Doshi",
      Designa: "Bengaluru",
      SubTitle:"Growpital is a really convenient & high ROI, tax-free alternative investment option to diversify your portfolio. Having interacted with the key team members I really trust their business model & am sure it's going to do well.",
    },
    {
      Id: "3",
      Img: saurabh,
      Title: "Saurabh Sharma",
      Designa: "Nagpur",
      SubTitle:
        "A great platform and opportunity presented by Growpital for safe investments with high returns. The income being tax-free is another cherry on top. Have invested in 1 plan till now, planning to invest more.",
    },
    {
      Id: "4",
      Img: gujan,
      Title: "Gunjan Dhote",
      Designa: "Nagpur",
      SubTitle:
        "Investing in farms is something I have wished for since a long time. I have started investing with Growpital since last 6 months and have been really impressed with the customer support and the high returns. Great job!",
    },
  ];
  return (
    <div>
      <div className="testislider">
        <Slider {...settings} >
          {Testimoni.map((Items) => (
            <div key={Items.Id} className="mx-2">
              <Card className="darkcard mx-2 mb-md-4 p-0 rounded text-start text-white">
                <Card.Body className="m-1 bg-dark-gradient rounded px-3 py-3">
                  <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center mb-0">
                    <RiDoubleQuotesL className="text-white" />
                  </p>
                  <div className="px-4">
                    <p className="mb-1 mt-2">
                      <BsFillStarFill size={13} className="text-sunglow me-1" />
                      <BsFillStarFill size={13} className="text-sunglow me-1" />
                      <BsFillStarFill size={13} className="text-sunglow me-1" />
                      <BsFillStarFill size={13} className="text-sunglow me-1" />
                      <BsFillStarFill size={13} className="text-sunglow me-1" />
                    </p>
                    <p className="fw-300 fs-13 lh-24">{Items.SubTitle}</p>
                    <div className="d-flex justify-content-start align-items-center m-0">
                      <img src={Items.Img} className="img-fluid m-0 rounded-circle" alt="" style={{width:"45px" ,height:"45px"}}/>
                      <div className="ms-3 text-start">
                        <h6 className="fw-600 fs-13 mb-0 pt-2">
                          {Items.Title}
                        </h6>
                        <p className="fw-300 fs-12 mb-0 pt-2 text-start">
                          {Items.Designa}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="colan-icon text-center d-inline-block mb-0 d-flex justify-content-center align-items-center float-end">
                    <RiDoubleQuotesR className="text-white" />
                  </p>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestiSlider;
