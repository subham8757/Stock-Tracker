import { NavLink } from "react-router-dom"
import style from "./SubNavbar.module.css"


function SubNavbar(){
      
    const links =[
        {path:"/" , title :"Home"},
        {path:"/boughtstocks" , title :"Bought Stocks"},
        {path:"/soldstocks" , title :"Sold Stocks"},
        {path:"/profitandloss" , title :"P&L"},
        {path:"/holdings" , title :"Holdings"},
    ]

    return(
        <div className={style.navdiv}>
              {links.map((e,index)=> <NavLink className={ (({isActive})=> {
                return isActive ? style.active : style.default
              })} key={index} to={e.path}>
                    {e.title}
              </NavLink> )}
        </div>
    )
}

export default SubNavbar