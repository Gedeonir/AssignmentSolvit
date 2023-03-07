/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {Component} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import React from 'react';
import Cards from './component/cards';
const App=()=>{


    return(
      <div className=" bg-gray-200 block min-h-screen dark:bg-gray-800">       
        <Navbar/>
        <Cards/>
      </div>
    )
  }
export default App;

