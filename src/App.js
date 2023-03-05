/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {Component} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import React from 'react';
import Coursel from './component/coursel';
import Card from './component/cards';
import Footer from './component/footer';
class App extends Component{

   render(){
      return(
        <div className=" bg-cyan-900 block">         
          <Navbar/>
          <Coursel/>
          <Card/>
          <Footer/>
        </div>
      )
  }}
export default App;

