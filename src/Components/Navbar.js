import React from 'react'
import './Navbar.css'

import logo from "../images/logo.png"



const Navbar = () => {
  return (
    <div className='menu'>
          
            <div className='contianer'>
           <div className='row'> 
           <div className='col-md-12 col-sm-12'>
           <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
           <a href="" className='navbar-brand '> <img src={logo} alt="" /> </a>
           
          
           <button className="navbar-toggler" data-toggle="collapse" data-target="#my-navbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="my-navbar">
           <ul className='navbar nav mx-auto'>
           <li className='nav-item'>
           <a href="" className='nav-link '>Home</a>

           </li>
           <li className='nav-item'>
           <a href="" className='nav-link'>Menu</a>

           </li>
           <li className='nav-item'>
           <a href="" className='nav-link'>Shop</a>

           </li>
           <li className='nav-item'>
           <a href="" className='nav-link'>News</a>

           </li>
           <li className='nav-item'>
           <a href="" className='nav-link'>Contact</a>

           </li>
           
           

           </ul>
           
           </div>
        
           </nav>

           </div>

           </div>

          </div>

           
     </div>
  );
}

export default Navbar