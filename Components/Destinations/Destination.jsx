import React, { useEffect } from "react";
import "./Destination.css";

//import icon
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

// import Image
import Image1 from "../../Assets/pexels (1).png";
import Image2 from "../../Assets/pexels (2).png";
import Image3 from "../../Assets/pexels (3).png";
import Image4 from "../../Assets/pexels (4).png";
import Image5 from "../../Assets/pexels (5).png";
import Image6 from "../../Assets/pexels (6).png";
import Image7 from "../../Assets/pexels (7).png";
import Image8 from "../../Assets/pexels (8).png";

import Aos from "aos";
import "aos/dist/aos.css";

const destinations = [
  {
    id: 1,
    img: Image1,
    name: "Kangchenjunga Island",
    location: "Indian Ladhak",
    rating: 4.7,
  },

  {
    id: 2,
    img: Image2,
    name: "Hanuman Tibba Island",
    location: "Indian Jamu",
    rating: 4.2,
  },

  {
    id: 3,
    img: Image3,
    name: "Srinagar, Jammu & Kashmir",
    location: "Indian Jamu & Kashmir",
    rating: 4.9,
  },

  {
    id: 4,
    img: Image4,
    name: "Gulmarg, Jammu & Kashmir.",
    location: "Indian Rishikesh",
    rating: 4.5,
  },

  {
    id: 5,
    img: Image4,
    name: "Manali, Himachal Pradesh",
    location: "Indian  Himachal",
    rating: 4.2,
  },

  {
    id: 6,
    img: Image5,
    name: "Khajjiar, Himachal Pradesh",
    location: " Himachal Pradesh",
    rating: 4.4,
  },

  {
    id: 6,
    img: Image6,
    name: "Munnar, Kerala",
    location: "Indian Kerala",
    rating: 4.4,
  },

  {
    id: 7,
    img: Image7,
    name: "Keylong, Himachal Pradesh.",
    location: "Indian  Keylong",
    rating: 4.4,
  },

  {
    id: 8,
    img: Image8,
    name: "Mussoorie, Uttarakhand",
    location: "Indian Uttarakhand",
    rating: 4.4,
  },
];

const Destination = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText" data-aos="fade-up">
            EXPLORE NOW
          </span>
          <h3 data-aos="fade-up">Find Your Dream Destinations</h3>
          <p data-aos="fade-up">
            Fill in the field below the best spot for your next tour.
          </p>
        </div>

        <div className="searchField  grid">
          <div className="inputField flex" data-aos="fade-up">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Location" />
          </div>

          <div className="inputField  flex" data-aos="fade-up">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>

          <div className="inputField  flex" data-aos="fade-up">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="Date" />
          </div>
          <button className="btn flex" data-aos="fade-up">
            <BiSearchAlt className="icon" />
            Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex" data-aos="fade-up">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
              <div
                className="singleDestination"
                key={destination.id}
                data-aos="fade-up"
              >
                <div className="imgDiv" data-aos="fade-up">
                  <img src={destination.img} alt="" />
                  <div className="desInfo flex">
                    <div className="text">
                      <span className="name">{destination.location}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {destination.name}
                      </p>
                    </div>
                    <span className="rating">{destination.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destination;
