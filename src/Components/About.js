import React from 'react'
import './About.css'

// import img2 from "../images/img2.webp"
import pizza from "../images/pizza.jpg"

const About = () => {
  return (
    <div className='about'>
      <div className='contianer '> 
      <div className='row'>    
    <div className='col-6'>
    <h2>ABOUT US</h2>
    <h3>Welcome To Maestro Pizzini</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloremque error qui dolores eos similique ab,
     dolorem nemo nisi officia facere quas vel unde cumque a sunt earum atque nihil repellendus vero?
      Expedita tempore blanditiis atque. Dolorem ducimus, dicta beatae fugiat fugit quasi
       magni quam quis placeat temporibus tempore ipsum!</p>
     <div className='about__btn'>
     <a href="" className='btn btn-smart'>
        Read More
     </a>

     </div>

     
    </div>
    
 <div className='col-6'>
  <img src={pizza} alt="" />

 </div>
    

     </div> 
    

     </div> 

       </div>
  )
}

export default About