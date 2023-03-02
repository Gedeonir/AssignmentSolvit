/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Navbar extends Component{
    render(){
        return(
            <nav className="shadow dark:bg-gray-700 px-6 py-4 mx-auto flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <a href="#">
                      <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt=""/>
                  </a>
                </div>
                <ul className='flex flex-col capitalize text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center'>
                  <li>
                    <a href='#' className='mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500'>Ahabanza</a>
                  </li>
                  <li>
                    <a href='#' className='mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500'>Konti Yange</a>
                  </li>
                  <li>
                    <a href='#' className='mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-500'>FAQ</a>
                  </li>
                </ul>
              </nav>
        )
    }
    
}

export default Navbar;