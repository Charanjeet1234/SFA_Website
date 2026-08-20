import React from "react";
import "./Products.css";
import Ferro_Manganese from "../../assets/Modals/FerroManganese/Ferro_Manganese";
import Silico_Manganese from "../../assets/Modals/SilicoManganese/Silico_Manganese";
import Ferro_Chrome from "../../assets/Modals/FerroChrome/Ferro_Chrome";
import Ferro_Silicon from "../../assets/Modals/FerroSilicon/Ferro_Silicon";
import Manganese_Ore from "../../assets/Modals/ManganeseOre/Manganese_Ore";
import Ferro_Molybdenum from "../../assets/Modals/FerroMolybdenum/Ferro_Molybdenum";
import { ferro_products } from "../../assets/assets";
function Products() {
  return (
    <div className="products" id="products">
      {ferro_products.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <dl className="product-specs">
                <div>
                  <dt>Grade</dt>
                  <dd>{item.grade}</dd>
                </div>
                <div>
                  <dt>Form</dt>
                  <dd>{item.form}</dd>
                </div>
                <div>
                  <dt>Composition</dt>
                  <dd>{item.composition}</dd>
                </div>
              </dl>
              <div className="product-actions">
                <button className="btn btn-light" type="button" data-bs-toggle="modal" data-bs-target={`#${item.collapse}`}>
                  View Spec Sheet
                </button>
                <a className="btn btn-download" href="/FerroAlloys_Specifications.pdf" download>
                  Download Technical Data Sheet
                </a>
                <a
                  href={`mailto:marketing@sfaglobex.ae?subject=${encodeURIComponent(
                    `Bulk quote request: ${item.name}`
                  )}`}
                  className="btn btn-outline-light"
                >
                  Request Bulk Quote
                </a>
              </div>
            </div>
          </div>
        );
      })}
      <Ferro_Manganese />
      <Silico_Manganese />
      <Ferro_Chrome />
      <Ferro_Silicon />
      <Manganese_Ore />
      <Ferro_Molybdenum />
    </div>
  );
}

export default Products;
