import React, { useState, useEffect } from "react";
import "./Question.css";
import Accordion from "./Accordion";

import Aos from "aos";
import "aos/dist/aos.css";
const Question = () => {
  const [active, setActive] = useState(
    " How do i choose the right travel destination for me?"
  );

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3 data-aos="fade-up">Frequenty Asked Questions</h3>
      </div>

      <div className="secContainer grid" data-aos="fade-up">
        {/* we will import a component of the diffrent file */}

        <div className="accordion grid">
          <Accordion
            title=" How do i choose the right travel destination for me?"
            desc="Consider you intersest , budeget , dessired experiencees, and the type
          of environment you enjoy .Research destinations that align with your
          perfrences and offer attractions or activites you find appealing."
            active={active}
            setActive={setActive}
          />

          <Accordion
            title="What are the best times to visite specific destinations? "
            desc="Consider you intersest , budeget , dessired experiencees, and the type
          of environment you enjoy .Research destinations that align with your
          perfrences and offer attractions or activites you find appealing."
            active={active}
            setActive={setActive}
          />

          <Accordion
            title=" How can I find buget-friendly tevael options and deals?"
            desc="Consider you intersest , budeget , dessired experiencees, and the type
          of environment you enjoy .Research destinations that align with your
          perfrences and offer attractions or activites you find appealing."
            active={active}
            setActive={setActive}
          />

          <Accordion
            title=" What essential items should I pack for my adventure?"
            desc="Consider you intersest , budeget , dessired experiencees, and the type
          of environment you enjoy .Research destinations that align with your
          perfrences and offer attractions or activites you find appealing."
            active={active}
            setActive={setActive}
          />
        </div>

        <div className="form">
          <div className="secHeading">
            <h4>Do you have any specific question?</h4>
            <p>
              Please fill the form below and our dedicted team will get intouch
              with you as soon possible.
            </p>
          </div>

          <div className="formContent grid">
            <input
              type="email"
              placeholder="Enter email address"
              data-aos="fade-up"
            ></input>
            <textarea
              placeholder="Enter your Qustion here"
              data-aos="fade-up"
            ></textarea>
            <button className="btn" data-aos="fade-up">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
