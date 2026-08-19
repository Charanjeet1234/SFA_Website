import React from "react";
import "../Modal_Style.css";

function Ferro_Molybdenum() {
  const productName = "Ferro Molybdenum";
  const whatsappLink = `https://wa.me/971524426170?text=${encodeURIComponent(
    `Hello SFA Globex DMCC, I would like a quote for ${productName}. Please share pricing, specification and availability.`,
  )}`;

  return (
    <div
      className="modal fade"
      id="Ferro_Molybdenum"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Ferro Molybdenum
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              Ferro molybdenum is an important iron-molybdenum metal alloy, with
              a molybdenum content of 60-75% It is the main source for
              molybdenum.
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Request Quote on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ferro_Molybdenum;
