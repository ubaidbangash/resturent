import React from 'react'
import './Header.css'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='banner'>
    <Navbar/>
         <div className='banner__content'>
              <div className='container'>
              <div className='banner__text'>
              <h3>PIZZA DELIVERY</h3>
                <h1>MAESTROO PIZZINI</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, excepturi.</p>

                <div className='banner__btn'>
                <a href="" className='btn btn-smart'>Delivery Now</a>
                  
                </div>
              </div>
                
              </div>
         </div>
    </div>
  )
}

export default Header