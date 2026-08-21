import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
          SFA Globex FZCO is a Dubai-based trading company focused on serving steel producers and industrial buyers across the Middle East, Europe, Turkey, Africa, and India with reliable ferro alloy supply solutions.
          </p>
        </div>
        <div className="footer-content-center">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#banner">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#BusinessActivity">Business Activity</a>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>2005, Dubai Star/Preatoni Tower</li>
            <li>Cluster L, Dubai, JLT (UAE)</li>
            <li>
              <a href="tel:+971524426170">+971-524426170</a>
            </li>
            <li>
              <a href="tel:+97144580205">+971-44580205</a>
            </li>
            <li>
              <a href="mailto:marketing@sfaglobex.ae">marketing@sfaglobex.ae</a>
            </li>
            <li>
              <a href="mailto:sfa.globex@gmail.com">sfa.globex@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>OPERATING HOURS</h2>
          <ul>
            <li>Monday - Saturday</li>
            <li>10:00 AM - 6:00 PM</li>
          </ul>
          <div className="map-frame">
            <div className="map-label">SFA Globex FZCO</div>
            <iframe
              title="SFA Globex FZCO location map"
              src="https://www.google.com/maps?q=25.065562837019325%2C55.13699157570754&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
      Copyright &#169; {currentYear} SFA Globex FZCO | Traders of Ferro Alloys - All rights reserved.{" "}
      </p>
    </div>
  );
}

export default Footer;
