import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { API } from "../utils/url";

function RegisterPage() {
  const [allUsers, setAllUsers] = useState(null);
  let user_name = useRef();
  let user_email = useRef();
  let user_password = useRef();
  let user_date = useRef();

  useEffect(() => {
    getUsers();
  }, []);
  async function getUsers() {
    let fetchData = await fetch(API + "/users");
    let json = await fetchData.json();
    setAllUsers(json.data);
  }
  function registerUser(e) {
    e.preventDefault();

    let ready = {
      username: user_name.current.value,
      email: user_email.current.value,
      password: user_password.current.value,
      birth_date: user_date.current.value,
    };

    let email_bormi = allUsers?.filter(
      (item) => item.email === user_email.current.value
    );
    console.log(email_bormi);

    if (email_bormi.length === 0) {
      fetch(API + "/users/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(ready),
      });
    }else {
      alert("bu emaildan foydalanilgan ! LOGIN PAGEGA O`TING")
    }
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={(e) => registerUser(e)} className="form">
        <input ref={user_name} type="text" placeholder="user name" />
        <input ref={user_email} type="email" placeholder="email" />
        <input ref={user_password} type="text" placeholder="password" />
        <input ref={user_date} type="date" placeholder="birthdate" />
        <button type="submit">Register</button>

        <NavLink to="/">login</NavLink>
      </form>
    </div>
  );
}

export default RegisterPage;
