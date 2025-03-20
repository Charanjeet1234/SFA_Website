import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";

function About() {
  return (
    <div className="about" id="about">
      <div className="organisation">
        <h2>Organisation</h2>
        <p>
          SFA Globex DMCC is a Dubai based trading company with a objective to
          cater the market of Indian sub-continent with Middle East market.
          Management of SFA Globex DMCC have deep rooted techno commercial
          experience in supplying to complex, tailor made demands of Ferro
          Alloys from various Steel producers. Our customers are in Europe,
          Turkey, Middle East, Africa, India and Far East Countries.
        </p>
        <p>
          SFA Globex DMCC would like to establish itself as a ‘Truly GLOBAL
          Company’ with a mantra of “Think Globally and act locally”. Which
          reflected through our diverse globally sourcing partners/agents to
          source products at a very competitive prices without compromising on
          qualities and would serve its buyer locally by understand their demand
          and reducing their cost by supplying raw materials ‘Just in Time’
          (JIT) basis.
        </p>
      </div>

      <div className="Product-right">
        {" "}
        <p>Our main ferro alloys products are :</p>
        <ul>
          <li>HC Ferro Manganese of grades 70% and 75%. </li>
          <li>MC Ferro Manganese of grades 75% and 78%.</li>
          <li>LC Ferro Manganese of Grade 75% and 78%.</li>
          <li>Silico Manganese of grades 60/14, 65/15 and 65/16.</li>
        </ul>
        <div className="carousel-inner">
          <img src={assets.product} alt="product" />
        </div>
      </div>
    </div>
  );
}

export default About;
