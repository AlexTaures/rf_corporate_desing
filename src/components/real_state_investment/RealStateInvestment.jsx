import React, { useEffect, useState } from 'react';
import "../../styles/about.css";
import logo from "../../img/RF_LOGO.png"
import list from "./sectionList.json";
import properties from "./rfProperties.json";

export default function RealStateInvestment() {
  const  [show, setShow] = useState({
    "main": true, "rf_properties": false
  })
  const [activeIndex, setActiveIndex] = useState(0);
  let from = ""; let to = "";
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((activeIndex + 1) % properties.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const showComponent = (event) => {
    event.preventDefault();
    from = event.target.getAttribute('from');
    to = event.target.getAttribute('to');
    setShow({[from]:false, [to]:true})
  }
  return (
    <div className='aboutContainer'>
      <div className="mainHeader">
        <div className="header">
          <img src={logo} alt=""width="75px"/>
          <div>co</div>
        </div>
        <h1>Real State Investment</h1>
       </div>
       {
        show["main"]?
        <div className={`currentSection ${list[0].animation} visible`}>
          <div className="subContainer">
              <div>
                <h1>{list[0].tittle}</h1>
                <p>{list[0].content}</p>
                <div>
                  <div className="button">
                    <i className="fa-solid fa-warehouse"></i>
                      <p>{list[0].buttons[0].content}</p>
                      <button from='main' to='rf_properties' onClick={showComponent}>{list[0].buttons[0].name}</button>
                  </div>
                </div>
              </div>
          </div>
            <div className="image" style={{height: "600px"}}><img src={require('../../img/'+list[0].image+'.jpg')} alt={list[0].image} /></div>
        </div>:<></>
        }{
        show["rf_properties"]?
        <div className={`currentSection left visible`}>
          <div className="subContainer">
              <div>
                <div className="button" style={{height: "80px"}}><button style={{background: "gray"}}from='rf_properties' to='main' onClick={showComponent}>Go Back</button></div>
                <h1>{list[1].tittle}</h1>
                <p>{list[1].content}</p>
                <div>
                </div>
              </div>
          </div>
            <div className="image" style={{height: "600px"}}>
            <div class="carousel aboutCarousel">
                  {
                    properties.map((exp, key) => (
                      <div className={activeIndex === key ? 'active' : ''}>
                          <img src={require('../../img/caseExamples/'+exp.image+'.jpg')} alt={exp.image} />
                          <p>{exp.name}</p>
                      </div>
                    ))
                  }
            </div>
            </div>
        </div>:<></>}
    </div>
  )
}
