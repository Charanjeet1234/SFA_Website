import React from 'react'
import "../Modal_Style.css"
function Silico_Manganese() {
  return (
    <div
    className="modal fade"
    id="Silico_Manganese"
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
          Silico Manganese
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
          Silico Manganese is an alloy with 60% to 70% manganese, 14% to 16% silicon, and 1.5% to 2% carbon. It is produced by smelting of slag from high-carbon Ferro Manganese or of Manganese ore with coke and a quartz flux. Smelting temperatures are high and greater energy is needed to reduce the quartz to silicon. So, the process requires power consumption of about 3,800 to 4,800 kilowatt-hours per tonne.
          </p>
          <b>There are three variants of Silico Manganese:​</b>
          <ul>
            <li>High Carbon Silico Manganese</li>
            <li>Medium Carbon Silico Manganese</li>
            <li>Low Carbon Silico Manganese</li>
          </ul>
          <h5>High carbon Silico Manganese</h5>
          <div className="ManganeseSpecification">
            <table class="table bordered">
              <thead>
                <tr>
                  <th scope="col">Specification</th>
                  <th scope="col">size</th>
                  <th scope="col">Packing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mn – 60%, 65% & 70%Min</th>
                  <td>As per requirement</td>
                  <td>1 MT Bags </td>
                </tr>
                <tr>
                  <th scope="row">C – 2.25% & 2.5%Max </th>
                </tr>
                <tr>
                  <th scope="row">Si – 14%& 15%Min</th>
                </tr>
                <tr>
                  <th scope="row">P – 0.25 & 0.3%Max</th>
                </tr>
                <tr>
                  <th scope="row">S – 0.03Max</th>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ///////////////////////////////////// Medium carbon //////////////////////////// */}

          <h5>Medium carbon Silico Manganese</h5>
          <div className="ManganeseSpecification">
            <table class="table bordered">
              <thead>
                <tr>
                  <th scope="col">Specification</th>
                  <th scope="col">size</th>
                  <th scope="col">Packing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mn – 55%Min</th>
                  <td>As per requirement</td>
                  <td>1 MT Bags </td>
                </tr>
                <tr>
                  <th scope="row">C – 0.5%Max</th>
                </tr>
                <tr>
                  <th scope="row">Si – 22%Min</th>
                </tr>
                <tr>
                  <th scope="row">P – 0.15%Max</th>
                </tr>
                <tr>
                  <th scope="row">S – 0.02%Max</th>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ///////////////////////////////////// Low carbon //////////////////////////// */}

          <h5>Low carbon Silico Manganese</h5>
          <div className="ManganeseSpecification">
            <table class="table bordered">
              <thead>
                <tr>
                  <th scope="col">Specification</th>
                  <th scope="col">size</th>
                  <th scope="col">Packing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mn – 55%Min</th>
                  <td>As per requirement</td>
                  <td>1 MT Bags </td>
                </tr>
                <tr>
                  <th scope="row">C – 0.1% & 0.2%Max</th>
                </tr>
                <tr>
                  <th scope="row">Si – 25 and 27 min</th>
                </tr>
                <tr>
                  <th scope="row">P – 0.15%Max</th>
                </tr>
                <tr>
                  <th scope="row">S – 0.02%Max</th>
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
          <button type="button" className="btn btn-light" data-bs-dismiss="modal">
            Understood
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Silico_Manganese