import React, { useEffect, useRef, useState } from "react";
import { API } from "../utils/url";

function Category() {

  const [cat, setCat] = useState(null);
  const [tanla, setTanla] = useState(null);
  const[id, setId] = useState("")

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    let fetchData = await fetch(API + "/category");
    let json = await fetchData.json();
    setCat(json.data);
  }
  let nomi = useRef()
  function createCat(e) {
    e.preventDefault()
    let ready ={
      cat_name:nomi.current.value
    }
    fetch(API+"/category", {
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(ready)
    })
  }
  let upnomi = useRef()
  function updateCat(e) {
    e.preventDefault()
    let ready ={
      cat_name:upnomi.current.value
    }
    fetch(API+"/category/"+id, {
      method:"PUT",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(ready)
    })
  }
  let upform = useRef()
  function openUpForm(e) {
    upform.current.classList.add("showUpForm")
    setId(e.target.id)
    let tanlangan  =cat?.find((item)=>item._id ===e.target.id)
    setTanla(tanlangan)
  }
  function deleteCat(e) {
    fetch(API+"/category/"+e.target.id, {
      method:"DELETE"
    })
    e.target.parentElement.style.display = "none"
  }
  return (
    <div className="container grid">
      <div>
        <form onSubmit={(e)=>createCat(e)} className="form">
          <input ref={nomi} type="text" placeholder="category name" />
          <button type="submit">Create</button>
        </form>
      </div>
      <div>
      <form ref={upform} onSubmit={(e)=>updateCat(e)} className="form upform">
          <input ref={upnomi} type="text" defaultValue={tanla?.cat_name} />
          <button type="submit">Update</button>
        </form>
      </div>
      <div className="wrapper">
        {cat?.map((item) => {
          return (
            <div className="card" key={item._id}>
              <h4>{item.cat_name}</h4>
              <button id={item._id} onClick={(e)=>openUpForm(e)}>Update</button>
              <button id={item._id} onClick={(e)=>deleteCat(e)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
