import { useState } from "react";
import style from "./BoughtStock.module.css"


function BoughtStocks(){

    const [data,setData]=useState((JSON.parse(localStorage.getItem("buy")))===null ? []:JSON.parse(localStorage.getItem("buy")) )


    console.log(data)

    return (
        <div>
               <table id={style.customers}>
                     <tr>
                         <th>Stock Name </th>
                         <th>Quantity </th>
                         <th>Buy Price </th>
                         <th>Date</th>
                         <th>Capital </th>
                         
                     </tr>
                     {data.map((e,index)=> <tr key={index}>
                           <td>{e.title}</td>
                           <td>{e.quantity}</td>
                           <td>₹{e.buy}</td>
                           <td>{e.date}</td>
                           <td> ₹{Number(e.buy) * Number(e.quantity)}</td>
                           
                     </tr>)}
               </table>
        </div>
    )
}

export default BoughtStocks;