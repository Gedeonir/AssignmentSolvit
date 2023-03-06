/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            
          <nav className="px-2 border-gray-200 bg-cyan-800 dark:border-gray-700 fixed top-0 left-0 right-0">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <a href="https://flowbite.com/" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Logo" />

                  <span class="self-center text-2xl font-semibold whitespace-nowrap text-yellow-300">IG</span>
              </a>
              <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </button>
              <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-cyan-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-cyan-800 dark:bg-cyan-800 md:dark:bg-cyan-800 dark:border-gray-700">
                  <li>
                    <Link to='/home' className="block py-2 pl-3 pr-4 text-yellow-300 bg-cyan-800 rounded md:bg-transparent md:text-yellow-300 md:p-0 md:dark:text-yellow-300 dark:bg-blue-600 md:dark:bg-transparent">Home</Link>
                  </li>                 
                  <li>
                    <Link to='/konti-yange' className="block py-2 pl-3 pr-4 text-yellow-100 rounded  md:border-0 md:p-0 dark:text-yellow-100 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Konti yanjye</Link>
                  </li>
                  <li>
                    <Link to='/events' className="block py-2 pl-3 pr-4 text-yellow-100 rounded  md:border-0 md:p-0 dark:text-yellow-100 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Events</Link>
                  </li>
                  <li>
                    <Link to='/adminPortal' className="block py-2 pl-3 pr-4 text-yellow-100 rounded  md:border-0 md:p-0 dark:text-yellow-100 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Admin Portal</Link>
                  </li>

                </ul>
              </div>
            </div>
          </nav>

        )
    }
    
}

export default Navbar;