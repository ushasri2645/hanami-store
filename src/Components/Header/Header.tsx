import React from 'react'
import './Header.css'
const Header = ({type}:{type?:string}) => {
  return (
    <div>
      {type==='sales' ? (
        <div>
          <h1 className='title title-sale'>Exclusive sale</h1>
          <p className='decsription'>Get in on the trend with our curated selection of best-selling styles</p>
        </div>
      ) : (
      <div>
      <h1 className='title'>Our Products</h1>
      </div>
    )}
    </div>
  )
}

export default Header
