import React from 'react'
import "../Modal_Style.css"
function Ferro_Molybdenum() {
  return (
    <div
    className="modal fade"
    id="Ferro_Molybdenum"
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
          Ferro molybdenum is an important iron-molybdenum metal alloy, with a molybdenum content of 60-75% It is the main source for molybdenum.
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
          <button type="button" className="btn btn-light" data-bs-dismiss="modal">
            Understood
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Ferro_Molybdenum