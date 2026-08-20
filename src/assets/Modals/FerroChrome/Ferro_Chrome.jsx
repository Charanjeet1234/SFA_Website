import React from "react";
import "../Modal_Style.css";

function Ferro_Chrome() {
  const productName = "Ferro Chrome";
  const whatsappLink = `https://wa.me/971524426170?text=${encodeURIComponent(
    `Hello SFA Globex FZCO, I would like a quote for ${productName}. Please share pricing, specification and availability.`,
  )}`;

  return (
    <div
      className="modal fade"
      id="Ferro_Chrome"
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
              Ferro Chrome
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
              Ferro Chrome is an alloy with 58% to 65% chrome, 8.5% max carbon,
              0.05% max phosphorus, 4% max silicon and 0.05% max sulphur. With a
              chrome content from 60% minimum, there are several variations on
              High Carbon Ferro Chrome with carbon contents of.
            </p>

            <h5>High carbon Ferro Chrome</h5>
            <div className="ManganeseSpecification">
              <table className="table bordered">
                <thead>
                  <tr>
                    <th scope="col">Specification</th>
                    <th scope="col">size</th>
                    <th scope="col">Packing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Cr – 60%min</th>
                    <td>As per requirement</td>
                    <td>1 MT Bags </td>
                  </tr>
                  <tr>
                    <th scope="row">C – 6-9%max</th>
                  </tr>
                  <tr>
                    <th scope="row">Si – 4%max</th>
                  </tr>
                  <tr>
                    <th scope="row">P – 0.05%max</th>
                  </tr>
                  <tr>
                    <th scope="row">S – 0.05%max</th>
                  </tr>
                </tbody>
              </table>
            </div>
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

export default Ferro_Chrome;
