import React, { useEffect, useState } from "react";
import { API } from "../utils/url";
import '../style/banner.css'
function Banner() {
 
   const[hero, setHero] = useState(null)
    useEffect(()=>{
      getData()
    }, [])
    async function getData(){
      let fetchData = await fetch(API+"/editorial")
      let json  = await fetchData.json()
      setHero(json.data[0])
    }
  return (
    <section className="banner">
      <div className="x1"></div>
      <div className="x2"></div>
      <div className="x3"></div>
      <div className="x4"></div>
      <div className="banner__wrapper">
        <div className="banner__img">
          <img src={hero?.imageLink} alt="" />
        </div>
        <div className="banner__content">
          <h2>{hero?.title}</h2>
          <p>{hero?.description}</p>
          <button>Shop the collection</button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
