import React,{useContext} from "react";
import {AuthContext} from "../context/AuthContext"

function Home(){

    const {toggleAuth}=useContext(AuthContext)
    return(
        <div>
            <h1>Home</h1>
            <button onClick={toggleAuth}>LOG OUT</button>
        </div>
    )
}

export default Home;