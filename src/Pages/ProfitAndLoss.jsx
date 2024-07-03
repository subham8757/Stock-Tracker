import { useEffect, useState } from "react";
import style from "./ProfitAndLoss.module.css"

function ProfirAndLoss(){

    const [data,setData]=useState((JSON.parse(localStorage.getItem("sell")))===null ? []:JSON.parse(localStorage.getItem("sell")) )
   
    setData((JSON.parse(localStorage.getItem("sell")))===null ? []:JSON.parse(localStorage.getItem("sell")) )
   
    let sum=0;

    
    data.forEach((e)=>{
      sum= sum+(((Number(e.sell))-(Number(e.buy))) * (e.quantity)) -50
    })


    
    
    useEffect(()=>{
          
    },[data.length])

    

    return (
        <div>
        <table id={style.customers}>
              <tr>
                  <th>Stock Name </th>
                  <th>Quantity </th>
                  <th>Buy Price</th>
                  <th>Sell Price </th>
                  <th>Date</th>
                  <th>P&L *note ₹50 brokerage charge inculded</th>
              </tr>
              {data.map((e,index)=> <tr key={index}>
                    <td>{e.title}</td>
                    <td>{e.quantity}</td>
                    <td>{e.buy}</td>
                    <td>₹{e.sell}</td>
                    <td>{e.date}</td>
                    <td>₹{Math.ceil((((Number(e.sell))-(Number(e.buy))) * (e.quantity)) -50)}</td>

                    
              </tr>)}
        </table>

        <div style={{textAlign:"center", marginTop:"40px"}}>
            <h4>Total Profit : ₹{Math.ceil(sum)} approximately</h4>
        </div>
 </div>
    )
}



export default ProfirAndLoss;