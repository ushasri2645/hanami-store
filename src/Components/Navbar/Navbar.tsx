import React from 'react'
import './Navbar.css'
import { CiShoppingCart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";


const Navbar = ({cartCount}:{cartCount:number}) => {
  return (
      <nav className="navbar">
        <img className='logo' src='./logo.jpg'/>
        <h1 className='store-name'>Hanami</h1>
        <div className="search-cart">
            <div className="search-container">
                <input className='search-bar' placeholder='Search item'/>
                <SlMagnifier className="search-icon"/>
            </div>
            <div className='cart'>
              <span className='badge'>{cartCount}</span>
              <CiShoppingCart size={34} className="cart-icon"/>
            </div>
            <button className="btn">Login</button>
        </div>
      </nav>
  )
}

export default Navbar
