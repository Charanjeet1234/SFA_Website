import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";

function About() {
  return (
    <div className="about" id="about">
      <div className="organisation">
        <h2>About SFA Globex FZCO</h2>
        <p>
          SFA Globex FZCO is a Dubai-based ferro alloys supplier and trading
          company serving steel producers, foundries, and industrial buyers. With
          deep techno-commercial expertise, we supply tailored raw material
          solutions to meet complex production and quality requirements.
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
            alt="Ferro alloys product range from SFA Globex FZCO"
          />
        </div>
      </div>

      <section className="company-profile" aria-labelledby="profile-title">
        <div className="profile-copy">
          <span className="profile-eyebrow">For buyers and producers</span>
          <h2 id="profile-title">Keep our full company profile close at hand.</h2>
          <p>
            Explore our complete product range, sourcing approach, contact details,
            and company information in one concise reference document.
          </p>
        </div>

        <div className="profile-details">
          <div>
            <span className="detail-label">Inside the profile</span>
            <p>Products, capabilities, and the SFA Globex story.</p>
          </div>
          <div>
            <span className="detail-label">Format</span>
            <p>Print-ready company reference</p>
          </div>
          <div>
            <a
              className="profile-download"
              href="/SFA_Globex_Company_Profile.html"
              download="SFA_Globex_Company_Profile.html"
            >
              <span className="download-icon" aria-hidden="true">↓</span>
              Download profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
