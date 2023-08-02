import React from 'react'
import './Main.css'
import pizza from '../images/pizza.jpg'

const Main = () => {
  return (
    <div className='main'>
<div className='contianer '> 
      <div className='row'>    
    <div className='col-6'>
    <h2>The Pizza Menu</h2>
    <h3>CHICAGO THIN CRUST</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloremque error qui dolores eos similique ab,
     dolorem nemo nisi officia facere quas vel unde cumque a sunt earum atque nihil repellendus vero?
      Expedita tempore blanditiis atque. Dolorem ducimus, dicta beatae fugiat fugit quasi
       magni quam quis placeat temporibus tempore ipsum!</p>
     <div className='about__btn'>
     <a href="" className='btn btn-smart'>
        View More
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

export default Main