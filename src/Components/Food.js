import React from "react";
import "./Food.css";

import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import icon5 from "../images/icon5.webp";
import icon6 from "../images/icon6.png";
import icon7 from "../images/icon7.webp";
import icon8 from "../images/icon8.webp";

const productData = [
  {
    title: "Jolt Lists",
    para: "With Jolt Lists, your entire team naturally does the right thing, at the right time, in the right way. Turn guesswork into great work",
    img: icon1
  },

  {
    title: "Jolt Lists",
    para: "With Jolt Lists, your entire team naturally does the right thing, at the right time, in the right way. Turn guesswork into great work",
    img: icon2

  },
  {
    title: "Jolt Lists",
    para: "With Jolt Lists, your entire team naturally does the right thing, at the right time, in the right way. Turn guesswork into great work",
    img: icon3
  },
  {
    title: "Jolt Lists",
    para: "With Jolt Lists, your entire team naturally does the right thing, at the right time, in the right way. Turn guesswork into great work",
    img: icon4
  },
  {
    title: "Jolt Lists",
    para: "With Jolt Lists, your entire team naturally does the right thing, at the right time, in the right way. Turn guesswork into great work",
    img: icon5
  },
  {
    title: "Jolt Lists",
    para: "With Jolt Lists, your entire team naturally does the right thing, at the right time, in the right way. Turn guesswork into great work",
    img: icon6
  },
  {
    title: "Jolt Lists",
    para: "With Jolt Lists, your entire team naturally does the right thing, at the right time, in the right way. Turn guesswork into great work",
    img: icon7
  },
  {
    title: "Jolt Lists",
    para: "With Jolt Lists, your entire team naturally does the right thing, at the right time, in the right way. Turn guesswork into great work",
    img: icon8
  },
];
const Food = () => {
  return (
    <div className="icon-dev">
      <div className="container">
        <div className="row">
          <h2>An Entire Suite of Products for Restaurants</h2>

          {productData.map((item) => {
            return (
              <>
                <div className="col-3">
                  <div className="icon-dev-search">
                    <img src={item.img} alt="" />
                    <h4>{item.title}</h4>
                    <p className="icon-dev-para">{item.para}</p>
                  </div>
                </div>
              </>
            );
          })}
          {/* <div className='icon-dev-search'> 
       
     <img src={icon1} alt="" />
     <h4>Jolt Lists</h4>
     <p className='icon-dev-para'>With Jolt Lists, your entire team naturally does the right thing,
      at the right time, in the right way. Turn guesswork into great work</p>

        </div> */}

          {/* 
        <div className='col-3'>
        <div className='icon-dev-search'> 
       
     <img src={icon2} alt="" />
     <h4>Jolt Sensors</h4>
     <p className='icon-dev-para'>With Jolt Lists, your entire team naturally does the right thing,
      at the right time, in the right way. Turn guesswork into great work</p>

        </div>
        </div>

        <div className='col-3'>
        <div className='icon-dev-search'> 
       
     <img src={icon3} alt="" />
     <h4>Jolt Labeling </h4>
     <p className='icon-dev-para'>With Jolt Lists, your entire team naturally does the right thing,
      at the right time, in the right way. Turn guesswork into great work</p>

        </div>
        </div>

        <div className='col-3'>
        <div className='icon-dev-search'> 
       
     <img src={icon4} alt="" />
     <h4>Jolt Temp Probes</h4>
     <p className='icon-dev-para'>With Jolt Lists, your entire team naturally does the right thing,
      at the right time, in the right way. Turn guesswork into great work</p>

        </div>
        </div>
        <div className='col-3'>
        <div className='icon-dev-search'> 
       
     <img src={icon5} alt="" />
     <h4>Jolt Library</h4>
     <p className='icon-dev-para'>With Jolt Lists, your entire team naturally does the right thing,
      at the right time, in the right way. Turn guesswork into great work</p>

        </div>
        </div>
        <div className='col-3'>
        <div className='icon-dev-search'> 
       
     <img src={icon6} alt="" />
     <h4>Jolt  Scheduling</h4>
     <p className='icon-dev-para'>With Jolt Lists, your entire team naturally does the right thing,
      at the right time, in the right way. Turn guesswork into great work</p>

        </div>
        </div>
        <div className='col-3'>
        <div className='icon-dev-search'> 
       
     <img src={icon7} alt="" />
     <h4>Jolt Time Clock</h4>
     <p className='icon-dev-para'>With Jolt Lists, your entire team naturally does the right thing,
      at the right time, in the right way. Turn guesswork into great work</p>

        </div>
        </div>
        <div className='col-3'>
        <div className='icon-dev-search'> 
       
     <img src={icon8} alt="" />
     <h4>Jolt Communication</h4>
     <p className='icon-dev-para'>With Jolt Lists, your entire team naturally does the right thing,
      at the right time, in the right way. Turn guesswork into great work</p>

        </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Food;
