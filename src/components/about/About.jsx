import React, { useEffect, useState } from 'react'
import AnimatedOnScroll from "../../context/AnimatedOnScroll.js"
import sections from "./sectionList.json"
import "../../styles/about.css";
import logo from "../../img/RF_LOGO.png";
import examples from "./caseExamples.json";


export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((activeIndex + 1) % examples.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <div className='aboutContainer'>
      <div className="mainHeader">
        <div className="header">
          <img src={logo} alt=""width="75px"/>
          <div>co</div>
        </div>
        <h1>About US</h1>
      </div>
      {
        sections.map((item, key) => (
          <div style={{padding: "50px 0 150px 0"}}>
            {
              item.id===4?
              <AnimatedOnScroll key={key} animation={item.animation}>
              <div className="subContainer">
                <div>
                  <h1>{item.tittle}</h1>
                  <p>{item.content}</p>
                </div>
              </div>
              <div className="image">
              <div class="carousel aboutCarousel">
                  {
                    examples.map((exp, key) => (
                      <div className={activeIndex === key ? 'active' : ''}>
                          <img src={require('../../img/caseExamples/'+exp.image+'.jpg')} alt={exp.image} />
                          <p>{exp.name}</p>
                      </div>
                    ))
                  }
          </div>  
              </div>
            </AnimatedOnScroll>
            :
              <AnimatedOnScroll key={key} animation={item.animation}>
            <div className="subContainer">
              <div>
                <h1>{item.tittle}</h1>
                <p>{item.content}</p>
              </div>
            </div>
            <div className="image"><img src={require('../../img/about/'+item.image+".jpg")} alt={item.image} /></div>
          </AnimatedOnScroll>
            }
            
          </div>
        ))
      }
    </div>
  );
}
