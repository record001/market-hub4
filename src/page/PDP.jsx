import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import { useParams } from 'react-router-dom'
import { API } from '../utils/url';

function PDP() {
  let id = useParams()
  console.log(id.proID);
 

    const [pros, setPros] = useState(null);
    useEffect(() => {
      getProducts();
    }, []);
    async function getProducts() {
      let fetchData = await fetch(API + "/products");
      let json = await fetchData.json();
      setPros(json.data);
    }

    let selectedPro = pros?.find((item)=>item._id ===id.proID)
    console.log(selectedPro);
    
  return (
    <div>
      <Header />
      <img width={400} src={selectedPro?.imageLink} alt="" />
    </div>
  )
}

export default PDP
