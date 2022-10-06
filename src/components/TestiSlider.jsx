import React from "react";
import Slider from "react-slick";
import { Card, Col } from "react-bootstrap";
import User from "../assets/img/user.png";
import { BsFillStarFill } from "react-icons/bs";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";

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
      Img: User,
      Title: "Rajeev Malviya",
      Designa: "Directore",
      SubTitle:
        "During the performance review process, you will measure an employee’s performance relative to a set period.",
    },
    {
      Id: "2",
      Img: User,
      Title: "Rajeev Malviya",
      Designa: "Directore",
      SubTitle:
        "During the performance review process, you will measure an employee’s performance relative to a set period.",
    },
    {
      Id: "3",
      Img: User,
      Title: "Rajeev Malviya",
      Designa: "Directore",
      SubTitle:
        "During the performance review process, you will measure an employee’s performance relative to a set period.",
    },
    {
      Id: "4",
      Img: User,
      Title: "Rajeev Malviya",
      Designa: "Directore",
      SubTitle:
        "During the performance review process, you will measure an employee’s performance relative to a set period.",
    },
    {
      Id: "1",
      Img: User,
      Title: "Rajeev Malviya",
      Designa: "Directore",
      SubTitle:
        "During the performance review process, you will measure an employee’s performance relative to a set period.",
    },
    {
      Id: "2",
      Img: User,
      Title: "Rajeev Malviya",
      Designa: "Directore",
      SubTitle:
        "During the performance review process, you will measure an employee’s performance relative to a set period.",
    },
    {
      Id: "3",
      Img: User,
      Title: "Rajeev Malviya",
      Designa: "Directore",
      SubTitle:
        "During the performance review process, you will measure an employee’s performance relative to a set period.",
    },
    {
      Id: "4",
      Img: User,
      Title: "Rajeev Malviya",
      Designa: "Directore",
      SubTitle:
        "During the performance review process, you will measure an employee’s performance relative to a set period.",
    },
  ];
  return (
    <div>
      <div className="testislider">
        <Slider {...settings}>
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
                      <img src={User} className="img-fluid m-0" alt="" />
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
