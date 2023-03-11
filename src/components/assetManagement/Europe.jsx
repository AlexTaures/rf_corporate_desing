import React, { useState } from 'react';
import europe from './europe.json'

export default function Europe() {
  const [attributeValue, setAttributeValue] = useState('');

  const handleHover = (event) => {
    setAttributeValue(event.target.getAttribute('data-hover-attribute'));
  };

  const handleMouseLeave = () => {
    setAttributeValue('');
  };
  return (
    <div style={{height: "600px", width: "800px", boxSizing: "border-box", position: "relative"}}>
      <svg version="1.2" viewbox="0 0 1000 684" width="1000" xmlns="http://www.w3.org/2000/svg" height="684" style={{scale:"0.8", position: "absolute", left: "-150", top: "-30"}}>
      {
        europe.map((path, key)=>(
          <path key={key} d={path.d} id={path.id} name={path.name} className={`active-${path.active}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          data-hover-attribute={path.name}
          ></path>
          
        ))
      }
    <circle cx="399.9" cy="390.8" id="0">
    </circle>
    <circle cx="575.4" cy="412" id="1">
    </circle>
    <circle cx="521" cy="266.6" id="2">
    </circle>
    </svg>  
    {attributeValue && (
        <span x="10" y="15">{attributeValue}</span>
      )}
    </div>
  )
}
