import React, { useRef } from 'react'
import '../style/header.css'
import logo_oq from '../image/logo_oq.svg'
import logo_qora from '../image/logo_qora.svg'
import { NavLink, useLocation } from 'react-router-dom'
function Header() {
  let location =useLocation()

  let modal = useRef()
  function openModal() {
    modal.current.classList.add("show_modal")
  }
  function closeModal() {
    modal.current.classList.remove("show_modal")
  }
  return (
    <div>
      <header className={location.pathname ==="/home" ? "header" : "main__header"}>
      <ul className='header__list'>
        <li><NavLink to="/plp">Shop</NavLink></li>
        <li>About</li>
        <li>Contact</li>
        <li>Archive</li>
      </ul>

     <NavLink to="/home">
     {location.pathname ==="/home" ? <img src={logo_oq} alt="" /> : <img src={logo_qora} alt="" />}
     </NavLink>

      <ul className='header__list'>
        <li>Search</li>
        <li>Account</li>
        <li>Cart (0)</li>
      </ul>

      <div onClick={openModal} className="burger">
        <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png" alt="" />
      </div>

      
    </header>
     <div ref={modal} className="modal">
      <div onClick={closeModal} className="close_btn">
        <img width={50} src="https://www.freeiconspng.com/uploads/close-button-png-28.png" alt="" />
      </div>
        <ul>
          <li onClick={closeModal} ><NavLink to="/plp">Shop</NavLink></li>
          <li>About</li>
          <li>Contact</li>
          <li>Archive</li>
        </ul>
      </div>
    </div>
    
    
  )
}

export default Header
