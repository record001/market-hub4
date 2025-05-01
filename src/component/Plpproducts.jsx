import React, { useEffect, useState } from "react";
import { API } from "../utils/url";
import '../style/plp_products.css'
import { NavLink } from "react-router-dom";
function Plpproducts() {
  const [pros, setPros] = useState(null);
  useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
    let fetchData = await fetch(API + "/products");
    let json = await fetchData.json();
    setPros(json.data);
  }
  return (
    <div className="container ">
     <div className="plp_wrapper">
      <div className="card1"></div>
      <div className="card2"></div>
     {pros?.map((item) => {
        return (
          <NavLink to={`/pdp/${item._id}`} className="pro_card" key={item._id}>
            <img src={item.imageLink} alt="" />
            <h4>{item.name}</h4>
          </NavLink>
        );
      })}
     </div>
    </div>
  );
}

export default Plpproducts;
