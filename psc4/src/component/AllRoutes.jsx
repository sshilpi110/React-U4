

import React from "react";

import {Routes,Route} from "react-router-dom"; 

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Products from "../pages/Products";
import SinglePage from "../pages/SinglePage";
import NotFound from "../pages/NotFound";

  const AllRoutes=()=>{
    return(
        <Routes>

            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/products/:product-id" element={<SinglePage/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
            
        </Routes>
    )
}

export default AllRoutes;