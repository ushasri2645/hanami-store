import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className="container">
        <h1 className='heading'> Simple Portfolio </h1>
        <div className='subSection'>
          <div>
            <p className='description subsub'> Hi....This is Usha Sri </p>
            <button className='email'><a href='mailto:ushasrigudikandula456@gmail..com' target='blank'>Contact</a></button>
          </div>
            <img className='image subsub' src='./profile.jpg'/> 
            
        </div>
        
    </div>
  );
}

export default Home
