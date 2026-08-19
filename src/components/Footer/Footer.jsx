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
          SFA Globex DMCC is a Dubai-based trading company focused on serving steel producers and industrial buyers across the Middle East, Europe, Turkey, Africa, and India with reliable ferro alloy supply solutions.
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
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.0715824891317!2d55.13699157570754!3d25.065562837019325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6da96024b231%3A0xfa042d5d805b33d0!2sSFA%20Globex%20DMCC!5e0!3m2!1sen!2sae!4v1742372204827!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
      Copyright &#169; {currentYear} SFA GLOBEX DMCC | Traders of Ferro Alloys - All rights reserved.{" "}
      </p>
    </div>
  );
}

export default Footer;
