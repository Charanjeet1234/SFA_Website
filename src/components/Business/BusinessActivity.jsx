import React from "react";
import "./BusinessActivity.css";
import video from "../../assets/business_activity_video1.mp4";

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
          The management of SFA Globex FZCO has close connections with major
          ferro-alloy producers in India, helping us procure materials at
          competitive prices.
          <br />
          <br />
          SFA Globex FZCO is also expanding its product portfolio by sourcing
          other noble alloys, carbon products, and consumables required by steel
          plants.
        </p>

        <b>Financing:</b>
        <p>
          SFA Globex FZCO also finances raw materials, such as manganese ore, for
          ferro-alloy producers. This helps us negotiate competitive prices for
          finished goods. SFA Globex carefully selects financing customers based
          on the borrower's capabilities, products, and relationship with our
          company.
        </p>

        <b>Indenting:</b>
        <p>
          For some products, SFA Globex FZCO works as an indenting agent for a
          small margin. This helps us expand our product portfolio and serve more
          customer requirements.
        </p>
      </div>

      <div className="businessVideo">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="SFA Globex FZCO business activity video"
          controls
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default BusinessActivity;
