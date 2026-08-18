import React from "react";
import "../Modal_Style.css";

function Manganese_Ore() {
  const productName = "Manganese Ore";
  const whatsappLink = `https://wa.me/971524426170?text=${encodeURIComponent(
    `Hello SFA Globex DMCC, I would like a quote for ${productName}. Please share pricing, specification and availability.`,
  )}`;

  return (
    <div
      className="modal fade"
      id="Manganese_Ore"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Manganese Ore
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
              Manganese Ore is a chemical element with symbol Mn and atomic
              number 25. It is not found as a free element in nature; it is
              often found in minerals in combination with iron.We offer high and
              fine quality Manganese Ore low Fe which can be used for blending
              with High Fe material & Hi grade Mn ore to our most reliable
              customers which are situated all-round the nation. The manganese
              ore that we provide to the esteemed customers is available at
              highly affordable prices to be used in varied applications. We are
              the trustworthy manganese ore supplier. These Manganese Ore are
              available at industrial leading prices.
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

export default Manganese_Ore;
