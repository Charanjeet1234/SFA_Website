import React from "react";
import "./BusinessActivity.css";
import video from "../../assets/business_activity_video.mp4";

function BusinessActivity() {
  return (
    <div className="BusinessActivity" id="BusinessActivity">
      <div className="BusinessContent">
        <h1>Business Activity</h1>
        <p>
          SFA Globex FZCO has divided its business activities in three major
          segments:
        </p>
        <ul>
          <li>Trading</li>
          <li>Financing</li>
          <li>Indenting</li>
        </ul>

        <b>Trading</b>
        <p>
          Management of SFA Globex FZCO have very close connections with all
          major producers of ferro alloys in India, which help us to procure
          ferro alloys at very competitive price in India
          <br />
          <br />
          Now, SFA Globex FZCO is also looking to expand their product portfolio
          by expanding our sourcing of other noble alloys, carbon products and
          other consumables products required by steel plant.
        </p>

        <b>Financing:</b>
        <p>
          SFA Globex FZCO also financing raw materials i.e. manganese ore to our
          producers of ferro alloys, this help us to get a better price of
          finished goods from these producers and we can increase our bottom
          line. Sfa Globex is very careful while selecting customers for
          financing, this always depend upon borrower’s capability, their
          products and our relationships with them.
        </p>

        <b>Indenting:</b>
        <p>
          For some products, SFA Globex FZCO chose to work as a indentor for a
          small margin, this help us to increase our product portfolio and our
          profit margins.
        </p>
      </div>

      <div className="businessVideo">
        <video autoPlay muted loop playsInline preload="metadata" aria-label="Industrial manufacturing video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default BusinessActivity;
