import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import NavMenu from './components/NavMenu';
import { useContext, useRef, useEffect } from 'react';
import {DataContext} from  "./context/Datacontext.js"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import About from './components/about/About'
import AssetManagement from './components/assetManagement/AssetManagement';
import Construction from './components/construction/Construction';
import RFDevelopment from './components/rf_development/RFDevelopment';
import Home from './components/home/Home';
import RealStateInvestment from './components/real_state_investment/RealStateInvestment';
import Financial from './components/financial/Financial';
import Footer from './components/Footer';

function App() {
  const {menu, setMenu, menuText, setMenuText, color, setColor, inHome} = useContext(DataContext);
  const ref = useRef(null);

  const showMenu = (event) => {
    event.preventDefault();
    if(menu === true){
        setMenu(false);
        setMenuText("menu")
        inHome?
        setColor("white"):setColor("black")
    }else{
      setMenu(true)
      setMenuText("close")
      setColor("white")
    }
    
  }

  
  return (
    
    <Router className="router" ref={ref}>
      <div className='popoverMenu'>
        <div className='menuButton'><p className={menuText} style={{color: color}}>{menuText}</p><button onClick={showMenu}>{menu?<i className="fa-solid fa-circle-xmark" style={{color: color}}></i>:<i className="fa-solid fa-bars" style={{color: color}}></i>}</button></div>
        <TransitionGroup>
          {menu && (
            <CSSTransition classNames="fade" timeout={300}>
              <NavMenu/>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
      <Routes className="routes">
        <Route exact path='/' element={
          <Home/>
        }/>
        <Route exact path='/about' element={
          <About/>
          
        }/>
        <Route exact path='/asset-management' element={
          <AssetManagement />
        }/>
        <Route exact path='/construction' element={
          <Construction/>
        }/>
        <Route exact path='/rf-development' element={
          <RFDevelopment/>
        }/>
        <Route exact path='/rs-investment' element={
          <RealStateInvestment/>
        }/>
        <Route exact path='/financial' element={
          <Financial/>
        }/>
        <Route path="*" element={<Navigate to="/" replace={true} />}/>
      </Routes>
        {
          inHome?
          <></>:<Footer/>
        }
    </Router>
  );
}

export default App;
