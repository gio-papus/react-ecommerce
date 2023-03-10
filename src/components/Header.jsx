import React from 'react'
import Logo from "../img/logoCuchillo.png"
import Profile from "../img/davitiA.png"
import "./header.css"

export const Header = () => {
    return (
      <>
      <div className='header__div'>
          <img className='logo__img--css' src={Logo} alt=""></img>
          <input className='input__search' type="search"></input>
          <img className='profile__img--css' src={Profile} alt=""></img>
      </div>
      </>
    )
  }
export default Header