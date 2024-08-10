import React from 'react'
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import ItemListings from './ItemListings/ItemListings';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header type="sales"/>
      <ItemListings offer={true}/>
      <Header/>
      <ItemListings />
    </div>
  );
}

export default Home
/*<div className="container">
        <h1 className='heading'> Simple Portfolio </h1>
        <div className='subSection'>
          <div>
            <p className='description subsub'> Hi....This is Usha Sri </p>
            <button className='email'><a href='mailto:ushasrigudikandula456@gmail..com' target='blank'>Contact</a></button>
          </div>
            <img className='image subsub' src='./profile.jpg'/> 
            
        </div>
        
    </div>*/