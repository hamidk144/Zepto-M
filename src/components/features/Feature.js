import React from "react";
import "./Feature.css";
import { FaAccessibleIcon } from "react-icons/fa";
import { BsHexagon } from "react-icons/bs";

const Feature = ({ icon, heading, text }) => {
  return (
    <div className="feature">
      <div className="feature-icon">
        <BsHexagon color="#fc5412" size={55} />
        <div className="inner-icon">{icon}</div>
      </div>

      <div className="feature-text">
        <h3>{heading}</h3>
        <p className="u-text-small">ZeptoM app has Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi labore, harum officiis error quia cupiditate?</p>
      </div>
    </div>
  );
};

export default Feature;
