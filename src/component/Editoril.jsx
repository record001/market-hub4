import React, { useEffect, useState } from "react";
import "../style/editoril.css";
import { API } from "../utils/url";
function Editoril() {
  const [edit, setEdit] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    let fetchData = await fetch(API + "/editoril");
    let json = await fetchData.json();
    setEdit(json.data[0]);
  }
  return (
    <section
      className="edit"
      style={{ backgroundImage: `url(${edit?.imageLink})` }}
    >
      <div className="container">
        <form>
          <div className="edit__content">
            <h2>{edit?.description}</h2>
            <input type="text" placeholder="Enter your Email" />
          </div>
            <button type="submit">Sign up</button>
        </form>
      </div>
    </section>
  );
}

export default Editoril;
