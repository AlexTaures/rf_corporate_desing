import React, { useRef, useEffect, useState, useContext } from 'react';
import { DataContext } from './Datacontext.js';
import "../styles/AnimatedOnScroll.css"


const AnimatedOnScroll = ({ animation, children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const { menu } = useContext(DataContext)

  useEffect(() => {
    if(menu === false){ /// critical because it doesn't work without conditional when no imports this js
      const observer = new IntersectionObserver(entries => {
      
        entries.forEach(entry => {
          console.log(entry.target)
          if (entry.isIntersecting) {
            setIsVisible(true);
          }else{
            setIsVisible(false);
          }
        });
      });
  
     observer.observe(ref.current);
     //console.log(observer.unobserve(ref.current))
      
      return () => {
        observer.observe(ref.current);
      };
    }
  }, [menu]);

  return (
    <div
      ref={ref}
      className={`animated ${animation} ${isVisible ? 'visible' : 'hidden'}`}
    >
      {children}
    </div>
  );
};

export default AnimatedOnScroll;
