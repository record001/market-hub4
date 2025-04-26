import React, { useEffect, useRef, useState } from "react";
import { API } from "../utils/url";

function Products() {
  const [pros, setPros] = useState(null);
  const [cat, setCat] = useState(null);
  const [id, setId] = useState("");
  const [tanlangan, setTanlangan] = useState({});
  useEffect(() => {
    getProducts();
    getCat();
  }, []);
  async function getProducts() {
    let fetchData = await fetch(API + "/products");
    let json = await fetchData.json();
    setPros(json.data);
  }
  async function getCat() {
    let fetchData = await fetch(API + "/category");
    let json = await fetchData.json();
    setCat(json.data);
  }
  let nomi = useRef();
  let soni = useRef();
  let rasm = useRef();
  let narx = useRef();
  let desc = useRef();
  let det = useRef();
  let categ = useRef();
  let upnomi = useRef();
  let upsoni = useRef();
  let uprasm = useRef();
  let upnarx = useRef();
  let updesc = useRef();
  let updet = useRef();
  let upcateg = useRef();

  function createPro(e) {
    e.preventDefault();
    let ready = {
      name: nomi.current.value,
      count: soni.current.value,
      imageLink: rasm.current.value,
      price: narx.current.value,
      sizes: [],
      description: desc.current.value,
      details: det.current.value,
      shipping: "ok",
      cat_ref_id: [categ.current.value],
    };

    fetch(API+"/products", {
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(ready)
    })
  }
  let upForm = useRef()
  function openUpForm(e) {
    upForm.current.classList.add("showUpForm")
    setId(e.target.parentElement.id)
    let selected= pros?.find((item)=>item._id ===e.target.parentElement.id)
    setTanlangan(selected)
  }

  function updatePro(e) {
    e.preventDefault()
    let ready = {
      name: upnomi.current.value,
      count: upsoni.current.value,
      imageLink: uprasm.current.value,
      price: upnarx.current.value,
      size: [],
      description: updesc.current.value,
      details: updet.current.value,
      shipping: "ok",
      cat_ref_id: [upcateg.current.value],
    };

    fetch(API+"/products/"+id, {
      method:"PUT",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(ready)
    })
  }

  function deletePro(e) {
    fetch(API+"/products/"+e.target.parentElement.id, {
      method:"DELETE"
    })

    e.target.parentElement.style.display = "none"

  }
  return (
    <div className=" grid">
      <div>
        <form onSubmit={(e) => createPro(e)} className="form">
          <h2>Create</h2>
          <input ref={nomi} type="text" placeholder="name" />
          <input ref={soni} type="number" placeholder="count" />
          <input ref={rasm} type="text" placeholder="Photo" />
          <input ref={narx} type="number" placeholder="price" />
          <input ref={desc} type="text" placeholder="Description" />
          <input ref={det} type="text" placeholder="Detail" />
          <select ref={categ}>
            {cat?.map((item) => {
              return (
                <option key={item._id} value={item._id}>
                  {item.cat_name}
                </option>
              );
            })}
          </select>
          <button type="submit">Create</button>
        </form>
      </div>
      <div>
      <form onSubmit={(e)=>updatePro(e)} ref={upForm}  className="form upform">
          <h2>Update</h2>
          <input ref={upnomi} type="text" defaultValue={tanlangan?.name} />
          <input ref={upsoni} type="number" defaultValue={tanlangan?.count} />
          <input ref={uprasm} type="text" defaultValue={tanlangan?.imageLink} />
          <input ref={upnarx} type="number" defaultValue={tanlangan?.price} />
          <input ref={updesc} type="text" defaultValue={tanlangan?.description} />
          <input ref={updet} type="text" defaultValue={tanlangan?.details} />
          <select defaultValue={tanlangan?.cat_ref_id} ref={upcateg}>
            {cat?.map((item) => {
              return (
                <option key={item._id} value={item._id}>
                  {item.cat_name}
                </option>
              );
            })}
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
      <div className="wrapper">
        {pros?.map((item) => {
          return (
            <div className="card" key={item._id} id={item._id}>
              <img width={50} src={item.imageLink} alt="" />
              <h4>{item.name}</h4>
              <button onClick={(e)=>openUpForm(e)} >Update</button>
              <button onClick={(e)=>deletePro(e)} >delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
