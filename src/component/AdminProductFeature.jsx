import React, { useEffect, useRef, useState } from "react";
import { API } from "../utils/url";

function AdminProductFeature() {
  
   const[data, setData] = useState(null)
   const[pros, setPros] = useState(null)
    useEffect(()=>{
      getData()
      getProducts()
    }, [])
    async function getData(){
      let fetchData = await fetch(API+"/product-features")
      let json  = await fetchData.json()
      setData(json.data[0])
    }
    async function getProducts(){
      let fetchData = await fetch(API+"/products")
      let json  = await fetchData.json()
      setPros(json.data)
    }

    function selectPro(e) {
      e.target.classList.toggle("tanlandi")
    }

    let title = useRef()
    
    function handleSubmit(e) {
      e.preventDefault()
      let arr = document.querySelectorAll(".tanlandi")
      let tanlanganlar =[]
      
      arr.forEach((item)=>{
        tanlanganlar.push(item.id)
      })
      
      

      let ready = {
        title:title.current.value,
        product_ref_id:tanlanganlar
      }
     fetch(API+"/product-features/669795e9be42387d8060942d", {
      method:"PUT", 
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(ready)
     })
      
    }
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)} className="form formBoshqa">
        <h2>Admin product feature</h2>
        <input ref={title} type="text" defaultValue={data?.title} />
        <div className="wrapper">
          {pros?.map((item)=>{
            return(
              <div onClick={(e)=>selectPro(e)} className="card" id={item._id} key={item._id}>
                <img width={50} src={item.imageLink} alt="" />
                <h4>{item.name}</h4>
             </div>
            )
          })}
          
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default AdminProductFeature;
