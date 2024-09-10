import React, { useEffect } from "react";
import "./Home.css";
// video imports
import Video from "../../Assets/175876 (1080p).mp4";
//Import icons
import { AiOutlineSwapRight } from "react-icons/ai";
//imprt image
import Image5 from "../../Assets/pexels (5).png";
import Image6 from "../../Assets/pexels (6).png";
import Image7 from "../../Assets/pexels (7).png";
import Image8 from "../../Assets/pexels (8).png";

import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>
      <div className="sectionText">
        <h1 data-aos="fade-up">Unlock Your Travel Dream With Us!</h1>
        <p data-aos="fade-up">
          Disocover the world's most adventures Nature , Life os so short for a
          Trip.
        </p>
        <button className="btn" data-aos="fade-up">
          GET STARED
          <AiOutlineSwapRight className="icon" />
        </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos="fade-up">Popular Places</h3>
          <div className="images flex" data-aos="fade-up">
            <img src={Image5} alt="Destination Image" />
            <img src={Image6} alt="Destination Image" />
            <img src={Image7} alt="Destination Image" />
            <img src={Image8} alt="Destination Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
