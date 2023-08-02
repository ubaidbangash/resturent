import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div classNameName='form'>
        <div className='container'>
        <div className='row'>
        <div className='col-8'>
        <h2> RESTURANT MANAGEMENT SOFTWARE</h2>
        <div className='dev-text'>
        <p>Jolt’s restaurant management software helps restaurants run smoothly. It allows managers to monitor operations,
         manage employees and exceed customer expectations, even when not on site.</p>
        </div>

        <div className='dev-heading'>
         <h2>EFFICIENT DIGITAL FOOD SAFETY</h2>
         <p className='dev-text'>Create pre-programmed date code, nutrition fact, or grab-and-go labels that print at the touch of a button and cost fractions of a penny.Wireless sensors monitor your walk-in freezer, reach-in fridge, or other sensitive environments and receive alerts when temperatures fall outside a set range.
Quickly and accurately check temperatures with wireless probes that transmit readings to your Jolt checklists automatically.</p>   
        </div>
       

        </div>
<div>
        <div className="login">
                       <div className="row pt-3">
                           <div className="col-4 mx-auto ">
                               <h4 className="text-center ">LogIn</h4>

                           </div>

                       </div>

                       <form >
                        <div className="mb-3">
                               
                         Name <input type="name" className="form-control" placeholder="name"/>

                        </div>
                           <div className="mb-3">
                               
                             Email  <input type="email" className="form-control" placeholder="email"/>

                           </div>
                           <div className="mb-3">
                           Password <input type="password" className="form-control" placeholder="password"/>

                        </div>
                        <div className="mb-3">
                            Address<input type="address" className="form-control" placeholder="Address"/>
                             
                         </div>
                        <div className="ml-3 pt-2 ">
                            <a href="log.html" className="btn-form btn-info btn-lg">log in</a>

                        </div>

                       </form>

                   </div>
                   </div>
        
       
       

        </div>

        </div>

        </div>
    
  );
}

export default Form