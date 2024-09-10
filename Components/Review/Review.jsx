import React, { useEffect } from "react";
import "./Review.css";
import Aos from "aos";
import "aos/dist/aos.css";
//import icon

import { AiFillStar } from "react-icons/ai";

import image from "../../Assets/claent2.png";
import image1 from "../../Assets/client1.png";
import image2 from "../../Assets/client4.png";
import image3 from "../../Assets/cleint3.png";
import image4 from "../../Assets/clients5.png";
import image6 from "../../Assets/client6.png";

const Review = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText" data-aos="fade-up">
            FROM OUR CLIENTS
          </span>
          <h3 data-aos="fade-up">
            Real travel History from our beloved Clients
          </h3>

          <p data-aos="fade-up">
            By choosing us as their tour agency. Customers can expect an
            enriching and enjoyable travel experince, memories that will last a
            lifetime
          </p>
          <span className="starts flex" data-aos="fade-up">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientsImage flex">
            <img src={image} alt="Image" data-aos="fade-up" />
            <img src={image1} alt="Image" data-aos="fade-up" />
            <img src={image2} alt="Image" data-aos="fade-up" />
            <img src={image3} alt="Image" data-aos="fade-up" />
            <img src={image4} alt="Image" data-aos="fade-up" />
          </div>
        </div>

        <div className="imgDiv">
          <img src={image6} alt="Image" data-aos="fade-down" />
        </div>
      </div>
    </div>
  );
};

export default Review;
