import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { CiShoppingCart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import { data } from '../../Data/Data';
import { TItem } from '../../Types/ItemType';
import ItemListings from '../ItemListings/ItemListings';
import IndividualItem from '../IndividualItem/IndividualItem';


const Navbar = ({cartCount,cartUpdate,updateResults}:{cartCount:number,cartUpdate:Function,updateResults:Function}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: any) => {
    console.log("HI")
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    updateResults(searchTerm)
  }, [searchTerm]);
  return (
    <div>
      <nav className="navbar">
        <img className='logo' src='./logo.jpg'/>
        <h1 className='store-name'>Hanami</h1>
        <div className="search-cart">
            <div className="search-container">
                <input id="query" className='search-bar' placeholder='Search item' value={searchTerm} onChange={handleSearch}/>
                <SlMagnifier className="search-icon"/>
            </div>
            <div className='cart'>
              <span className='badge'>{cartCount}</span>
              <CiShoppingCart size={34} className="cart-icon"/>
            </div>
            <button className="btn">Login</button>
        </div>
      </nav>
      {/* <div className="items-container">
      {searchResults.map((item:TItem)=>
        <IndividualItem item={item} cartUpdate={cartUpdate}/>
      )}
    </div> */}
    </div>
  )
}

export default Navbar
