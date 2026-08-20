import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
function Home() {
  const [count, setCount] = useState(0);
  const [deliverCount, setDeliverCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 500 ? prevCount + 1 : 500)); //Increment count
    }, 1);

    return () => clearInterval(interval); //Clear interval when component unmounts
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDeliverCount((prevCount) =>
        prevCount < 100000 ? prevCount + 200 : 100000
      ); //Increment deliver count
    }, 1);

    return () => clearInterval(interval); //Clear interval when component unmounts
  }, []);
  return (
    <>
      <Banner pdfFileName="FerroAlloys_Specifications.pdf" />
      <br />
      <div className="countdown">
        <div className="customers">
          <span className="stat-label">Global customer base</span>
          <h3>{count}+</h3>
          <h3 className="stat-title">Customers Worldwide</h3>
        </div>
        <div className="deliver">
          <span className="stat-label">Supply delivered</span>
          <h3>{deliverCount}+</h3>
          <h3 className="stat-title">Metric Tonnes Delivered Worldwide</h3>
        </div>
      </div>

      <div className="global-reach" id="home">
        <div className="global-copy">
          <span className="section-tag">Worldwide Delivery</span>
          <h2>Products delivered across major industrial markets</h2>
          <p>
            SFA Globex FZCO supplies ferro alloys and raw materials to steel mills,
            foundries, and industrial buyers across the Middle East, Europe,
            Africa, India, and Turkey—ensuring efficient supply, dependable
            quality, and on-time delivery.
          </p>
          <ul className="market-list">
            <li>Middle East</li>
            <li>Europe</li>
            <li>Africa</li>
            <li>India</li>
            <li>Turkey</li>
          </ul>
        </div>

        <div className="global-map-panel">
          <div className="map-chip">Trusted Global Supply</div>
          <svg className="mini-map" viewBox="0 0 600 320" role="img" aria-label="Global market coverage map">
            <defs>
              <linearGradient id="routeGlow" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(125,211,252,0.2)" />
                <stop offset="50%" stopColor="rgba(96,165,250,0.85)" />
                <stop offset="100%" stopColor="rgba(34,211,238,0.2)" />
              </linearGradient>
            </defs>

            <g fill="rgba(125,211,252,0.22)" stroke="rgba(125,211,252,0.7)" strokeWidth="2">
              <path d="M74 151l48-23 47-17 25 11 20 17 9 19-12 18-30 12-30 4-26-8-26-18-17-17z" />
              <path d="M258 92l26-13 39 2 20 17 12 17-8 19-25 10-29 1-17-12-10-19z" />
              <path d="M366 116l38-10 45 7 24 19-8 23-36 19-41 2-23-13-10-17z" />
              <path d="M472 157l31-8 41 10 26 24-16 22-39 5-31-19-18-21z" />
              <path d="M516 94l20-9 34 5 15 20-12 17-28 6-23-11-18-14z" />
            </g>

            <g className="map-routes">
              <path className="shipping-route route-europe" d="M392 147 C 340 136, 274 144, 170 178" />
              <path className="shipping-route route-africa" d="M392 147 C 358 170, 327 200, 290 230" />
              <path className="shipping-route route-india" d="M392 147 C 416 157, 459 168, 495 180" />
              <path className="shipping-route route-turkey" d="M392 147 C 430 126, 495 112, 565 129" />
            </g>

            <g className="shipping-ships">
              <g className="ship ship-europe">
                <path className="ship-body" d="M0 0 L16 0 L20 4 L18 10 L16 12 L0 12 L-2 8 L-2 4 Z" />
                <path className="ship-cabin" d="M5 0 L10 -4 L14 -4 L14 0 Z" />
                <circle className="ship-window" cx="9" cy="12" r="2.5" />
                <animateMotion
                  path="M392 147 C 340 136, 274 144, 170 178"
                  dur="11s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </g>

              <g className="ship ship-africa">
                <path className="ship-body" d="M0 0 L16 0 L20 4 L18 10 L16 12 L0 12 L-2 8 L-2 4 Z" />
                <path className="ship-cabin" d="M5 0 L10 -4 L14 -4 L14 0 Z" />
                <circle className="ship-window" cx="9" cy="12" r="2.5" />
                <animateMotion
                  path="M392 147 C 358 170, 327 200, 290 230"
                  dur="12s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </g>

              <g className="ship ship-india">
                <path className="ship-body" d="M0 0 L16 0 L20 4 L18 10 L16 12 L0 12 L-2 8 L-2 4 Z" />
                <path className="ship-cabin" d="M5 0 L10 -4 L14 -4 L14 0 Z" />
                <circle className="ship-window" cx="9" cy="12" r="2.5" />
                <animateMotion
                  path="M392 147 C 416 157, 459 168, 495 180"
                  dur="10s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </g>

              <g className="ship ship-turkey">
                <path className="ship-body" d="M0 0 L16 0 L20 4 L18 10 L16 12 L0 12 L-2 8 L-2 4 Z" />
                <path className="ship-cabin" d="M5 0 L10 -4 L14 -4 L14 0 Z" />
                <circle className="ship-window" cx="9" cy="12" r="2.5" />
                <animateMotion
                  path="M392 147 C 430 126, 495 112, 565 129"
                  dur="13s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </g>
            </g>

            <g className="origin-points">
              <g className="origin-point origin-uae">
                <circle cx="392" cy="147" r="9" className="mini-dot dot-uae" />
                <text x="392" y="132" textAnchor="middle">Dubai, UAE</text>
              </g>
              <g className="origin-point origin-europe">
                <circle cx="170" cy="178" r="8" className="mini-dot dot-europe" />
                <text x="170" y="202" textAnchor="middle">Europe</text>
              </g>
              <g className="origin-point origin-india">
                <circle cx="495" cy="180" r="8" className="mini-dot dot-asia" />
                <text x="495" y="204" textAnchor="middle">India</text>
              </g>
              <g className="origin-point origin-africa">
                <circle cx="290" cy="230" r="8" className="mini-dot dot-africa" />
                <text x="290" y="255" textAnchor="middle">Africa</text>
              </g>
              <g className="origin-point origin-turkey">
                <circle cx="565" cy="129" r="8" className="mini-dot dot-east" />
                <text x="565" y="113" textAnchor="middle">Turkey</text>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div className="title" id="home">
        <h2>
          Ferro alloys are essential raw materials used in steelmaking to improve
          strength, hardness, corrosion resistance, ductility, and wear
          resistance. As a trusted ferro alloys supplier in Dubai, UAE, SFA
          Globex FZCO delivers high-quality ferro manganese, silico manganese,
          ferro chrome, ferro silicon, manganese ore, and ferro molybdenum to
          steel producers across the Middle East, Europe, Africa, India, and
          Turkey.
        </h2>
      </div>
      <div
        className="Button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "5px 10px",
          backgroundColor: "#F0F0F0",
          color: "#49557e",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
            />
          </svg>
        </span>
        {/* whatsapp icon */}
        <a
          href="https://wa.me/971524426170"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </span>
        </a>
      </div>
    </>
  );
}

export default Home;
