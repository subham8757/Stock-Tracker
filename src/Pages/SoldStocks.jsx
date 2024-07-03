import { useState } from "react";
import style from "./SoldStocks.module.css"

function SoldStocks(){

    const [data,setData]=useState((JSON.parse(localStorage.getItem("sell")))===null ? []:JSON.parse(localStorage.getItem("sell")) )

    setData((JSON.parse(localStorage.getItem("sell")))===null ? []:JSON.parse(localStorage.getItem("sell")))
    return (
        <div>
        <table id={style.customers}>
              <tr>
                  <th>Stock Name </th>
                  <th>Quantity </th>
                  <th>Sell Price </th>
                  <th>Date</th>
                  
              </tr>
              {data.map((e,index)=> <tr key={index}>
                    <td>{e.title}</td>
                    <td>{e.quantity}</td>
                    <td>₹{e.sell}</td>
                    <td>{e.date}</td>
                    
              </tr>)}
        </table>
 </div>
    )
}

export default SoldStocks;