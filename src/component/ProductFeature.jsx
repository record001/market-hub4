import React, { useEffect, useState } from "react";
import "../style/productFeature.css";
import { API } from "../utils/url";
import ProductFeatureCard from "./ProductFeatureCard";
function ProductFeature() {

  const[data, setData] = useState(null)
  useEffect(()=>{
    getData()
  }, [])
  async function getData(){
    let fetchData = await fetch(API+"/product-features")
    let json  = await fetchData.json()
    setData(json.data[0])
  }
  return (
    <section className="productFeature">
      <div className="container">
        <h2>{data?.title}</h2>
        <div className="productFeature__wrapper">
          {data?.product_ref_id?.map((item)=>{
            return(
              <ProductFeatureCard key={item._id} rasm={item.imageLink} nomi={item.name} narxi={item.price} />
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductFeature;
