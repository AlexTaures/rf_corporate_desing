import React, { useContext } from 'react';
import logo from "../img/RF_LOGO.png";
import "../styles/navMenu.css";
import { NavLink, useNavigate } from "react-router-dom"
import {DataContext} from  "../context/Datacontext.js";
import data from "./contactUsData.json"

export default function NavMenu() {
  const {setMenu, setMenuText, setColor, setInHome} = useContext(DataContext);
  const navigate = useNavigate();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const hide = (event) => {
    event.preventDefault();
    setMenu(false);
    setMenuText("menu");
    setColor("black");
    setInHome(false);
    handleScrollTop();
  }

  
  const goHome = (event) => {
    event.preventDefault();
    setMenu(false);
    setMenuText("menu");
    setColor("white");
    setInHome(true)
    return(navigate('/'))
  }
  return (
    <div className="menuContainer">
      <div className="header">
        <NavLink replace={true} onClick={goHome}><img src={logo} alt=""width="75px"/></NavLink>
        <div>co</div>
      </div>
      <div className="flexContainer">
        <div className="container">
          <ol>
            <li onClick={hide}><NavLink className="navlink" to ='/about' replace={true}>About</NavLink></li>
            <li onClick={hide}><NavLink className="navlink" to ='/asset-management' replace={true}>Asset Management</NavLink></li>
            <li onClick={hide}><NavLink className="navlink" to ='/construction' replace={true}>Construction</NavLink></li>
            <li onClick={hide}><NavLink className="navlink" to ='/rf-development' replace={true}>RF Development</NavLink></li>
            <li onClick={hide}><NavLink className="navlink" to ='/rs-investment' replace={true}>Real State Investment</NavLink></li>
            <li onClick={hide}><NavLink className="navlink" to ='/financial' replace={true}>Financial + PE</NavLink></li>
          </ol>
        </div>
        <div className="infoContainer">
            <h5><i className="fa-solid fa-address-card"></i>Contact Us</h5>
            <p><i className="fa-solid fa-square-phone"></i>{data.phone}</p>
            <p><i className="fa-solid fa-envelope"></i>{data.email}</p>
            {
              data.adress.map((opt, key) => (
                <div key={key} style={{display: "flex"}}>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{opt}</p>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}
