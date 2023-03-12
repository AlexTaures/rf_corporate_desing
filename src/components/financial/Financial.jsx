import React, { useState } from 'react';
import "../../styles/about.css";
import logo from "../../img/RF_LOGO.png";
import data from "./financialData.json";
import {Bar, Line} from "react-chartjs-2";
import Chart from 'chart.js/auto'; //important

export default function Financial() {
  let total1 = [];
  let debt =[];
  let total2=[];
  let i=0;
  let source = data[0].tableData
  let pe = []
  /*****to set conditional to show sections */
  const  [show, setShow] = useState({
    "main": true, "pe": false
  })
  let from = ""; let to = "";
/**************************** */
/************to set totals */
  for(i=1;i<13;i++){
    total1[i-1]=(-source.operationCost[i]-source.adminCost[i]+source.incomes[i]).toFixed(2)
  }
  for(i=1;i<13;i++){
    debt[i-1] = (total1[i-1]*0.2).toFixed(2)
  }
  for(i=1;i<13;i++){
    total2[i-1] = (total1[i-1]-debt[i-1]).toFixed(2)
  }
/************************ */
/*****************to set bar graph******** */
for(i=1;i<13;i++){
  pe[i-1] = ((source.operationCost[i]+source.adminCost[i])/total2[i-1]).toFixed(2)
}

const graphData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets:[{
    label: "PE",
    backgroundColor: '#60BBAB',
    borderColor: 'black',
    borderWidth: 1,
    hoverBackgroundcolor: 'rgba(0,255,0,0.2)',
    hoverBorderColor: '#F0000',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowBlur: 10,
      shadowOffsetX: 8,
      shadowOffsetY: 8,
    data: pe
  }]
}
const options ={
  maintainAspectRatio: false,
  resposive: true,
  maxBarThickness: 60
}

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
        <h1>Finantial</h1>
      </div>
      {
        show["main"]?
        <div>
          <div className="subContainer down visible">
              <div>
                <h1 id='financial'>{data[0].tittle}</h1>
                <p id='financial'>{data[0].content}</p>
              </div>
      </div>
      <div className="tableContainer down visible">
          <table id='financialTable'>
          <thead>
            <tr>
              {
              data[0].tableData.headers.map((hed, key) => (
                <th key={key}>{hed}</th>
              ))
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              {
                data[0].tableData.operationCost.map((data,key)=>(
                  <td key={key}>-${data}</td>
                ))
              }
            </tr>
            <tr>
              {
                data[0].tableData.adminCost.map((data,key)=>(
                  <td key={key}>-${data}</td>
                ))
              }
            </tr>
            <tr>
              {
                data[0].tableData.incomes.map((data,key)=>(
                  <td key={key}>${data}</td>
                ))
              }
            </tr>
            <tr>
              <td style={{fontWeight: "bold"}}>Subtotal</td>
              {
                total1.map((data, key)=>(
                  <td key={key} style={{fontWeight: "bold"}}>${data}</td>
                ))
              }
            </tr>
            <tr>
              <td>Debt (-20%)</td>
              {
                debt.map((data, key)=>(
                  <td key={key}>-${data}</td>
                ))
              }
            </tr>
            <tr>
              <td className='total'>Total</td>
              {
                total2.map((data, key)=>(
                  <td key={key} className="total">${data}</td>
                ))
              }
            </tr>
          </tbody>
          </table>
      </div>
        <div className="subContainer">
          <div>
            <div className="button PE">
              <button from="main" to="pe" onClick={showComponent}>PE</button>
            </div>
          </div>
        </div>
        </div>:<></>
      }
      {
        show["pe"]?
        <div>
          <div className="subContainer">
            <div>
              <div className="button PE">
                <button from="pe" to="main" onClick={showComponent}>Go Back</button>
              </div>
            </div>
          </div>
          <div className="graphContainer" >
            <h2>PE Year 20XX</h2>
            <Bar data={graphData} options={options}/>
          </div>
        </div>:<></>
      }
    </div>
  )
}
