/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {Component} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import React from 'react';
import Coursel from './component/coursel';
import Card from './component/cards';
class App extends Component{

   render(){
      return(
        <div className=" bg-gray-800 block">
                  
          <Navbar/>
          <Coursel/>
          <Card/>



       

          <footer class="bg-gray-700 mt-3 max-w-screen-xl m-auto p-5">
            <div class="flex flex-col items-center sm:flex-row sm:justify-between">
              <p class="text-sm text-gray-300">© Copyright 2023. All Rights Reserved.</p>

              <div class="flex mt-3 -mx-2 sm:mt-0">
                  <a href="#" class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>

                  <a href="#" class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                  <a href="#" class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
              </div>
            </div>
          </footer>

        </div>
      )
  }}
export default App;

