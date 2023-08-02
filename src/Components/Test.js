import React from 'react'
import './Test.css'
 import pizza1 from '../images/pizza1.png'
 import pizza2 from '../images/pizza2.png'
 import pizza3 from '../images/pizza3.png'
 import pizza4 from '../images/pizza4.png'
 import pizza5 from '../images/pizza5.png'
 import pizza6 from '../images/pizza6.png'

 
 

const Test = () => {
  return (
    <div className='test'>
    <div className='container'>
    <h2>TYPES OF PIZZA</h2>
    <div className='row'>

    <div className='col-4 '>
    <div className='dev-section'>
    <img src={pizza1} alt="" />
    <div className='test__text'>
    <h1>Pizza Margritta</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam facere aspernatur
     blanditiis consequuntur aliquam tenetur dicta pariatur! Voluptatibus dicta aliquam eveniet 
     autem cum nam deleniti vel tempore, debitis distinctio.</p>
    </div>
    </div>
   
    

    </div>
    <div className='col-4 '>
    
    <img src={pizza2} alt="" />
    <div className='test__text'>
    <h1> Pizza Crust</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam facere aspernatur
     blanditiis consequuntur aliquam tenetur dicta pariatur! Voluptatibus dicta aliquam eveniet 
     autem cum nam deleniti vel tempore, debitis distinctio.</p>
    </div>
    

    </div>
    
    <div className='col-4 '>
    <img src={pizza3} alt="" />
    <div className='test__text'>
    <h1>Pizza  Bake</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam facere aspernatur
     blanditiis consequuntur aliquam tenetur dicta pariatur! Voluptatibus dicta aliquam eveniet 
     autem cum nam deleniti vel tempore, debitis distinctio.</p>
    </div>
    

    </div>
    <div className='col-4 '>
    <img src={pizza4} alt="" />
    <div className='test__text'>
    <h1>Pizza  Meal</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam facere aspernatur
     blanditiis consequuntur aliquam tenetur dicta pariatur! Voluptatibus dicta aliquam eveniet 
     autem cum nam deleniti vel tempore, debitis distinctio.</p>
    </div>
    

    </div>
    <div className='col-4 '>
    <img src={pizza5} alt="" />
    <div className='test__text'>
    <h1>Pizza  Italiano</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam facere aspernatur
     blanditiis consequuntur aliquam tenetur dicta pariatur! Voluptatibus dicta aliquam eveniet 
     autem cum nam deleniti vel tempore, debitis distinctio.</p>
    </div>
    

    </div>
    <div className='col-4 '>
    <div className='dev-section'>
    <img src={pizza6} alt="" />
    <div className='test__text'>
    <h1>Pizza  Essen</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam facere aspernatur
     blanditiis consequuntur aliquam tenetur dicta pariatur! Voluptatibus dicta aliquam eveniet 
     autem cum nam deleniti vel tempore, debitis distinctio.</p>
    </div>
    </div>
   
    

    </div>
     
    
    
    

    </div>

    </div>

    </div>
  )
}

export default Test