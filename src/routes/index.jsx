import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Home from "../pages/Login/Login";
import PrimeiroAcesso from "../pages/PrimeiroAcesso";

const Router = () => {
   return(
       <Routes>
           <Route element={<Home /> }  path="/" />
           <Route element={ <PrimeiroAcesso/> }  path="/primeiro-acesso" />
           <Route element={ <Dashboard/> }  path="/dashboard" />
       </Routes>
   )
}

export default Router;