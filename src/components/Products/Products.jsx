import React from "react";
import { Link } from "react-router-dom";
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
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <button className="btn btn-light" type="button" data-bs-toggle="modal" data-bs-target={`#${item.collapse}`}>
                  Explore Specification
                </button>
                <Link to={`/products/${item.slug}`} className="btn btn-outline-light">
                  Product SEO Page
                </Link>
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
