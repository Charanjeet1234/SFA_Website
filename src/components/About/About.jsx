import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";

function About() {
  return (
    <div className="about" id="about">
      <div className="organisation">
        <h2>About SFA Globex DMCC</h2>
        <p>
          SFA Globex DMCC is a Dubai-based ferro alloys supplier and trading
          company serving steel producers, foundries, and industrial buyers across
          the Indian subcontinent, Middle East, Europe, Turkey, Africa, India,
          and the Far East. With deep techno-commercial expertise, we supply
          tailored ferro alloy solutions to meet complex production and quality
          requirements.
        </p>
        <p>
          Our goal is to become a truly global industrial sourcing partner by
          connecting buyers with trusted producers and delivering raw materials on
          a just-in-time basis. We focus on cost efficiency, dependable supply,
          and consistent quality across all ferro manganese, silico manganese,
          ferro chrome, ferro silicon, manganese ore, and ferro molybdenum
          products.
        </p>
      </div>

      <div className="Product-right">
        <p>Our main ferro alloys products include:</p>
        <ul>
          <li>HC Ferro Manganese of grades 70% and 75%.</li>
          <li>MC Ferro Manganese of grades 75% and 78%.</li>
          <li>LC Ferro Manganese of Grade 75% and 78%.</li>
          <li>Silico Manganese of grades 60/14, 65/15 and 65/16.</li>
        </ul>
        <div className="carousel-inner">
          <img
            src={assets.product}
            alt="Ferro alloys product range from SFA Globex DMCC"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
