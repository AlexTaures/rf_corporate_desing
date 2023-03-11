import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DataProvider} from "./context/Datacontext.js"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
    <div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
  </React.StrictMode>
);


