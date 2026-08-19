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
          <h3>{count}+</h3>
          <h3>Customers Worldwide</h3>
        </div>
        <div className="deliver">
          <h3>{deliverCount}+</h3>
          <h3>Metric Tonnes Delivered Worldwide</h3>
        </div>
      </div>
      <div className="title" id="home">
        <h2>
          Ferro alloys are essential raw materials used in steelmaking to improve
          strength, hardness, corrosion resistance, ductility, and wear
          resistance. As a trusted ferro alloys supplier in Dubai, UAE, SFA
          Globex DMCC delivers high-quality ferro manganese, silico manganese,
          ferro chrome, ferro silicon, manganese ore, and ferro molybdenum to
          steel producers across the Middle East, Europe, Africa, India, and
          Turkey.
        </h2>
      </div>

      <div className="market-coverage" aria-label="Global market coverage">
        <div className="market-header">
          <span className="eyebrow">Global Reach</span>
          <h3>Supplied across five strategic markets</h3>
        </div>

        <div className="route-map">
          <div className="route-line"></div>

          <span className="route-node route-node--dubai">Dubai</span>
          <span className="route-node route-node--europe">Europe</span>
          <span className="route-node route-node--africa">Africa</span>
          <span className="route-node route-node--india">India</span>
          <span className="route-node route-node--turkey">Turkey</span>

          <div className="ship" aria-label="Shipping route animation">
            <span className="ship-hull"></span>
            <span className="container c1"></span>
            <span className="container c2"></span>
            <span className="container c3"></span>
          </div>
        </div>
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
            class="bi bi-arrow-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
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
              class="bi bi-whatsapp"
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
