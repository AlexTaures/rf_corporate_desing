import React, { useState } from 'react';
import "../../styles/about.css";
import logo from "../../img/RF_LOGO.png"
import list from "./sectionList.json"
import Europe from './Europe.jsx';

export default function AssetManagement() {
  const  [show, setShow] = useState({
    "main": true, "corval": false, "rf":false
  })
  let from = ""; let to = "";


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
        <h1>Asset Management</h1>
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
                      <i className="fa-solid fa-earth-europe"></i>
                      <p>{list[0].buttons[0].content}</p>
                      <button from='main' to='corval' onClick={showComponent}>{list[0].buttons[0].name}</button>
                  </div>
                  <div className="button">
                      <i className="fa-solid fa-users"></i>
                      <p>{list[0].buttons[1].content}</p>
                      <button from='main' to='rf' onClick={showComponent}>{list[0].buttons[1].name}</button>
                  </div>
                </div>
              </div>
          </div>
            <div className="image" style={{height: "600px"}}><img src="" alt={list[0].image} /></div>
        </div>:<></>
        }{
        show["corval"]?
        <div className={`currentSection fade visible`}>
          <div className="subContainer">
              <div>
                <div className="button" style={{height: "80px"}}><button style={{background: "gray"}}from='corval' to='main' onClick={showComponent}>Go Back</button></div>
                <h1>{list[1].tittle}</h1>
                <p>{list[1].content}</p>
                <div>
                </div>
              </div>
          </div>
            <div className="image-svg" style={{height: "600px"}}>
              <Europe/>
              </div>
        </div>:<></>}{
        show["rf"]?
        <div className={`currentSection fade visible`}>
          <div className="subContainer">
              <div>
                <div className="button" style={{height: "80px"}}><button style={{background: "gray"}}from='rf' to='main' onClick={showComponent}>Go Back</button></div>
                <h1>{list[2].tittle}</h1>
                <p>{list[2].content}</p>
                <div>
                </div>
              </div>
          </div>
            <div className="image" style={{height: "600px", textAlign: "center", background: "none", boxShadow: "none"}}><img src={logo} style={{width: "auto"}}/></div>
        </div>:<></>}
    </div>
  )
}
