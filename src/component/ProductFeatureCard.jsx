import React from "react";
import "../style/productFeatureCard.css";

function ProductFeatureCard({ rasm, nomi, narxi }) {
  return(
  <div className="productFeature__card">
    <img src={rasm} alt="" />
    <div>
    <h4>{nomi}</h4>
    <h5>{narxi}</h5>
    </div>
  </div>
  );
  
}

export default ProductFeatureCard;
