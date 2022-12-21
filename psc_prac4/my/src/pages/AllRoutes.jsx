
import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Products from "./Products";
import NotFound from "./NotFound";
import SinglePageUser from "./SinglePageUser";

import PrivateRoute from "../component/PrivateRoute"




function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>}></Route>
            <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>}></Route>
            <Route path="/login" element={<PrivateRoute><Login /></PrivateRoute>}></Route>
            <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>}></Route>
            <Route path="/products/:product_id" element={<PrivateRoute><SinglePageUser /></PrivateRoute>}></Route>
            <Route path="*" element={<NotFound />}></Route>
            

        </Routes>
    )
}

export default AllRoutes;