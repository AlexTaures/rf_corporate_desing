import React, { useRef, useEffect, useState, useContext } from 'react';
import { DataContext } from './Datacontext.js';


const AnimatedOnScroll = ({ animation, children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const { menu } = useContext(DataContext)

  useEffect(() => {
    if(menu === false){ /// critical because it doesn't work without conditional when no imports this js
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          //console.log(entry.target)
          setIsVisible(true);
        }/*else{
          //console.log(entry.target)
          setIsVisible(false);
        }*/
      });
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        observer.unobserve(ref.current);
      };
    }
  }, [menu]);

  return (
    <div
      ref={ref}
      className={`${animation} ${isVisible ? 'visible' :"hidden"}`} //"hidden"
    >
      {children}
    </div>
  );
};

export default AnimatedOnScroll;
