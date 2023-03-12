import React from 'react'
import AnimatedOnScroll from "../../context/AnimatedOnScroll.js"
import sections from "./sectionList.json"
import "../../styles/about.css";
import logo from "../../img/RF_LOGO.png"


export default function RFDevelopment() {
  

  return (
    <div className='aboutContainer'>
      <div className="mainHeader">
        <div className="header">
          <img src={logo} alt=""width="75px"/>
          <div>co</div>
        </div>
        <h1>RF Development</h1>
      </div>
      {
        sections.map((item, key) => (
          <div style={{padding: "50px 0 150px 0"}}>
            <AnimatedOnScroll key={key} animation={item.animation}>
            <div className="subContainer" >
              <div>
                <h1>{item.tittle}</h1>
                <p>{item.content}</p>
                <div>
                  <div className="button">
                      <button>Details</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="image"><img src={require('../../img/rf_development/'+item.image+'.jpg')} alt={item.image}/></div>
          </AnimatedOnScroll>
          </div>
        ))
      }
    </div>
  );
}
