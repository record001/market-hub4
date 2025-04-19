import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { API } from "../utils/url";

function LoginPage() {
  let navigation = useNavigate()
  const[open, setOpen] = useState(true)
  const[allusers, setAllUsers] =useState(null)
  useEffect(()=>{
    getUsers()
  }, [])
  async function getUsers() {
    let fetchData = await fetch(API+"/users")
    let json = await fetchData.json()
    setAllUsers(json.data)
  }

  function changeEye() {
    setOpen((pre)=> !pre)
  }
  let admin = {
    email:"ithub4@gmail.com",
    password:"ithub4"
  }
  let user_email = useRef()
  let user_password = useRef()
  function checkUser(e) {
    e.preventDefault()

    let selectedUser = allusers?.find((item)=>item.email ===user_email.current.value)

    if(user_email.current.value ===admin.email && user_password.current.value===admin.password) {
      navigation("/admin/7902ca62-e2ed-4044-96d8-1cd7dce26270")
    }else {
      if(user_password.current.value === selectedUser?.password) {
        navigation("/home")
      }else {
        alert("password or email is wrong")
      }
    }

  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e)=>checkUser(e)} className="form">
        <input ref={user_email} type="text" placeholder="email" />
        <input ref={user_password} type={open ? "password":"text"} placeholder="password" />
        <div onClick={changeEye}>
          {open ?  <img className="eye" src="https://static-00.iconduck.com/assets.00/eye-icon-256x178-st3w1d5w.png" alt="" /> :  <img className="close_eye" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HROJZA6zzd_YMwrPOSZj3x0ZhPJjX9UAfQ&s" alt="" />}
        </div>
      
       
       
        <button type="submit">Login</button>

        <NavLink to="/register">Register</NavLink>
      </form>
    </div>
  );
}

export default LoginPage;
