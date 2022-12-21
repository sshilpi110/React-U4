

import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css"

const links=[
    {path:"/",title:"Home"},
    {path:"/about" ,title:"About"},
    {path:"/contact" ,title:"Contact"},
    {path:"/login" ,title:"Login"},
    {path:"/products" ,title:"Products"}
]


function Navbar(){
    return(
        <div
        style={{
            display:"flex",
            justifyContent:"space-around",
            alignItem:"center",
            width:"80%"
        }}
        >
            {links.map((link)=>(
               <NavLink
               className={({isActive})=>{
                return isActive ?  styles.default : styles.active
               }} 
                key={link.path} to={link.path}>{link.title}</NavLink> 
            ))}
        </div>

    )
}

export default Navbar;