import React, { useEffect, useState } from 'react';
import "../../styles/home.css";
import image1 from "../../img/buildings.jpg";
import image2 from "../../img/businesman2.jpg";
import image3 from "../../img/city.jpg";
import list from "./sectionList.json"
import logo from "../../img/RF_LOGO.png"

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((activeIndex + 1) % 3);
    }, 10000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <div className='HomeContainer'>
      <div className="mainHeader">
        <div className="header">
          <img src={logo} alt=""width="75px"/>
          <div>co</div>
        </div>
      </div>
      <div className="tittle">
        {
          list.map((opt, key) => (
            <div className={activeIndex === key ? 'active' : ''}>
                <h1>{opt.tittle}</h1>
                <p>{opt.content}</p>
            </div>
          ))
        }
      </div>
      <div class="carousel">
          <div className={activeIndex === 0 ? 'active' : ''}>
            <img src={image1} alt="failed on load" />
          </div>
          <div className={activeIndex === 1 ? 'active' : ''}>
            <img src={image2} alt="failed on load" />
          </div>
          <div className={activeIndex === 2 ? 'active' : ''}>
            <img src={image3} alt="failed on load" />
          </div>
      </div>
    </div>
  )
}
