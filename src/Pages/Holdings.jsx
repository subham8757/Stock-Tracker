import { useState ,useEffect} from "react";
import style from "./BoughtStock.module.css"


function Holdings(){

    const [data,setData]=useState((JSON.parse(localStorage.getItem("buy")))===null ? []:JSON.parse(localStorage.getItem("buy")) )

     setData((JSON.parse(localStorage.getItem("buy")))===null ? []:JSON.parse(localStorage.getItem("buy")))
    
    let sum=0;

    
    data.forEach((e)=>{
      sum= sum+ Number(e.buy) * Number(e.quantity)
    })


    
    
    useEffect(()=>{
          
    },[data.length])


    return (
        <div>
               <table id={style.customers}>
                     <tr>
                         <th>Stock Name </th>
                         <th>Quantity </th>
                         <th>Buy Price </th>
                         <th>Capital </th>
                         
                     </tr>
                     {data.map((e,index)=> <tr key={index}>
                           <td>{e.title}</td>
                           <td>{e.quantity}</td>
                           <td>₹{e.buy}</td>
                           
                           <td> ₹{Number(e.buy) * Number(e.quantity)}</td>
                           
                     </tr>)}
               </table>
               
               <div style={{textAlign:"center", marginTop:"40px"}}>
            <h4>Total Investment : ₹{sum} </h4>
                    </div>
        </div>
    )
}

export default Holdings;