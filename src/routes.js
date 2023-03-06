
import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import DashBoard from "./Pages/Dashboard";
import Events from "./Pages/Events";
import Login from "./Pages/Login";
const AppRoutes = (prop) => {
  
    return (
      <div>
        <Routes>
          <Route path="/" index element={<App />} />
          <Route path="home/" index element={<App/>} />
          <Route path="konti-yange" element={<Login/>} />
          <Route path="read-more/:id" element={<Login/>} />
          <Route path="events" element={<Events/>} />
          <Route path="adminPortal" element={<DashBoard/>} />
        </Routes>
      </div>
    );
  };
  
  export default AppRoutes;