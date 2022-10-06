import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const ButtonStar = () => {
  return (
    <>
      <div className="d-inline-block">
        <button className="main-btn maincolor mb-2">Invest Now</button>
        <p className="mb-1 text-center">
          <span className="text-white fs-12 me-2">Rated </span>
          <BsFillStarFill size={13} className="text-sunglow me-1" />
          <BsFillStarFill size={13} className="text-sunglow me-1" />
          <BsFillStarFill size={13} className="text-sunglow me-1" />
          <BsFillStarFill size={13} className="text-sunglow me-1" />
          <BsFillStarFill size={13} className="text-sunglow me-1" />
          <span className="text-white fs-12 ms-1">4.7 by user</span>
        </p>
      </div>
    </>
  );
};

export default ButtonStar;
