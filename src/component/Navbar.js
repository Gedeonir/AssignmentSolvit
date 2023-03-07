/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Switcher from "./Switcher";

const Navbar=()=>{

        return(
            
          <nav className="flex justify-between px-4 py-3 drop-shadow-md border-gray-200 bg-gray-50  fixed top-0 left-0 right-0 dark:bg-gray-700 dark:text-gray-50">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <a href="https://flowbite.com/" class="flex items-center">
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-900  dark:text-gray-50">Where in the world!</span>
              </a>
            </div>
            <Switcher/>
          </nav>

        )
    
    
}

export default Navbar;