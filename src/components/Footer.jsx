import React, { useContext } from 'react';
import logo from "../img/RF_LOGO.png";
import "../styles/navMenu.css";
import { NavLink, useNavigate } from "react-router-dom"
import {DataContext} from  "../context/Datacontext.js";
import "../styles/footer.css"

export default function Footer() {
  const {setMenu, setMenuText, setColor, setInHome} = useContext(DataContext);
  const navigate = useNavigate();

  const hide = (event) => {
    event.preventDefault();
    setMenu(false);
    setMenuText("menu");
    setColor("black");
    setInHome(false);
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
    <div className="footerContainer">
      <div className="top"></div>
      <div className="middle">
        <p>Lorem ipsum dolor sit amet. Nam odit nihil aut incidunt velit rem itaque sequi id consequatur ipsam est nulla sint. </p>
        <i className="fa-solid fa-building-user"></i>
      </div>
      <div className="bottom">
        <img src={logo} alt="logo" />
        <div className="menu">
          <h4>This site</h4>
        <ol>
            <li onClick={hide}><NavLink className="navlink" to ='/about' replace={true}>About</NavLink></li>
            <li onClick={hide}><NavLink className="navlink" to ='/asset-management' replace={true}>Asset Management</NavLink></li>
            <li onClick={hide}><NavLink className="navlink" to ='/construction' replace={true}>Construction</NavLink></li>
            <li onClick={hide}><NavLink className="navlink" to ='/rf-development' replace={true}>RF Development</NavLink></li>
            <li onClick={hide}><NavLink className="navlink" to ='/rs-investment' replace={true}>Real State Investment</NavLink></li>
            <li onClick={hide}><NavLink className="navlink" to ='/financial' replace={true}>Financial + PE</NavLink></li>
          </ol>
        </div>
        <div className="info">
          <h4>Location</h4>
          <p><strong>RF corporation</strong></p>
          <p>Lorem ipsum dolor sit amet.</p>
          <br />
          <p><strong>RF corporation</strong></p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="contactYou">
          <h4>Contact You</h4>
          <p>For more information, give us your contact</p>
          <div>
            <input type="text" placeholder='Please type your email' />
            <button onClick={()=>(alert("Information submited"))}>Submit</button>
          </div>
        </div>
      </div>
      <div className='follow'>
        <p>Follow US in:</p>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className  ="fa-brands fa-square-instagram"></i>
        <p className='copyright'>&copy; 2023 "copyright text" All right Reserved</p>
      </div>
      </div>
  )
}
