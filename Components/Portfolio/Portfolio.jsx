import React, { useEffect } from "react";
import "./Portfolio.css";

import icon1 from "../../Assets/Secure_server.png";
import icon2 from "../../Assets/destination.png";
import icon3 from "../../Assets/Online_chat.png";
import image from "../../Assets/pexels-pixabay-210106.png";

import Aos from "aos";
import "aos/dist/aos.css";
const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="portifolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos="fade-up">Why should you Choose Us</h3>
            <p data-aos="fade-up">
              We have extensive knowledge and experience in the travel industry.
            </p>
          </div>

          <div className="grid">
            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon1} alt="Icon Image" />
              </div>
              <div className="infor" data-aos="fade-up">
                <h4 data-aos="fade-up">Safety And Support</h4>
                <p data-aos="fade-up">
                  ipsum dolor, sit amet consectetur adipisicing elit and
                  Excepturi natus, libero . deserunt accusantium omnis sint
                  quos, sit temporibus eius soluta enim ad adipisci doloribus
                  accusantium adipisci. A, culpa architecto.
                </p>
              </div>
            </div>

            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon2} alt="Icon Image" />
              </div>
              <div className="infor">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  ipsum dolor, sit amet consectetur adipisicing elit and
                  Excepturi natus, libero . deserunt accusantium omnis sint
                  quos, sit temporibus eius soluta enim ad adipisci doloribus
                  accusantium adipisci. A, culpa architecto.
                </p>
              </div>
            </div>

            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon3} alt="Icon Image" />
              </div>
              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>
                  ipsum dolor, sit amet consectetur adipisicing elit and
                  Excepturi natus, libero . deserunt accusantium omnis sint
                  quos, sit temporibus eius soluta enim ad adipisci doloribus
                  accusantium adipisci. A, culpa architecto.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContent" data-aos="fade-down">
          <img src={image} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
