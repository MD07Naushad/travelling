import React, { useEffect } from "react";
import "./Subscribe.css";

import image from "../../Assets/subcribe.png";

import Aos from "aos";
import "aos/dist/aos.css";
const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={image} alt="Div Image" data-aos="fade-down" />

        <div className="textDiv">
          <h4 data-aos="fade-up">Best Way To Start Your Journey!</h4>
          <p data-aos="fade-up">
            We offer personlized intineraries tailored to individual perferences
            and interests
          </p>

          <button className="btn" data-aos="fade-up">
            Start Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
