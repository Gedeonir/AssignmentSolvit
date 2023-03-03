
import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Pages/Login";
const AppRoutes = (prop) => {
  
    return (
      <div>
        <Routes>
          <Route path="/" index element={<App />} />
          <Route path="home/" index element={<App/>} />
          <Route path="konti-yange" index element={<Login/>} />
        </Routes>
      </div>
    );
  };
  
  export default AppRoutes;