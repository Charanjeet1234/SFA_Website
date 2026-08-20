import React from "react";
import "../Modal_Style.css";

function Ferro_Manganese() {
  const productName = "Ferro Manganese";
  const whatsappLink = `https://wa.me/971524426170?text=${encodeURIComponent(
    `Hello SFA Globex FZCO, I would like a quote for ${productName}. Please share pricing, specificication and availability.`,
  )}`;

  return (
    <div
      className="modal fade"
      id="Ferro_Manganese"
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
              Ferro Manganese
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
              Ferro Manganese is an alloy with high percentage of manganese,
              which is made by heating a mixture of oxides, MnO2 and Fe2O3 with
              high carbon content in blast furnace or an electric arc
              furnace-type system. The oxides go through carbothermal reduction
              in the furnaces that result in producing Ferro Manganese. Ferro
              Manganese is used as deoxidizer and desulfurizer for production of
              steel.
            </p>
            <b>There are three variants of Ferro Manganese:​</b>
            <ul>
              <li>High Carbon Ferro Manganese</li>
              <li>Medium Carbon Ferro Manganese</li>
              <li>Low Carbon Ferro Manganese</li>
            </ul>
            <h5>High carbon Ferro Mananese</h5>
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
                    <th scope="row">Mn - 65%, 70%, 73%, 75% & 76%min</th>
                    <td>As per requirement</td>
                    <td>1 MT Bags </td>
                  </tr>
                  <tr>
                    <th scope="row">C - 6-8%max </th>
                  </tr>
                  <tr>
                    <th scope="row">Si – 1.5%max</th>
                  </tr>
                  <tr>
                    <th scope="row">P – 0.3%max</th>
                  </tr>
                  <tr>
                    <th scope="row">S – 0.03%max</th>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ///////////////////////////////////// Medium carbon //////////////////////////// */}

            <h5>Medium carbon Ferro Mananese</h5>
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
                    <th scope="row">Mn – 70%,75% & 78%Min</th>
                    <td>As per requirement</td>
                    <td>1 MT Bags </td>
                  </tr>
                  <tr>
                    <th scope="row">C – 1% & 1.5%Max</th>
                  </tr>
                  <tr>
                    <th scope="row">Si – 1.5%max</th>
                  </tr>
                  <tr>
                    <th scope="row">P – 0.25%max</th>
                  </tr>
                  <tr>
                    <th scope="row">S – 0.03%max</th>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ///////////////////////////////////// Low carbon //////////////////////////// */}

            <h5>Low carbon Ferro Mananese</h5>
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
                    <th scope="row">Mn – 70%, 75% & 78%Min</th>
                    <td>As per requirement</td>
                    <td>1 MT Bags </td>
                  </tr>
                  <tr>
                    <th scope="row">C - 0.5% & 0.8%max</th>
                  </tr>
                  <tr>
                    <th scope="row">Si – 1% & 1.5%max</th>
                  </tr>
                  <tr>
                    <th scope="row">P – 0.25%max</th>
                  </tr>
                  <tr>
                    <th scope="row">S – 0.02%max</th>
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

export default Ferro_Manganese;
