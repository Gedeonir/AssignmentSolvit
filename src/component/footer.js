/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer=()=>{
    return(
        <footer className="bg-gray-700 mt-3 max-w-screen-xl m-auto p-5">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
              <p className="text-sm text-gray-300">© Copyright 2023. All Rights Reserved.</p>

              <div className="flex mt-3 -mx-2 sm:mt-0">
                  <a href="#" className="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>

                  <a href="#" className="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                  <a href="#" className="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
              </div>
            </div>
          </footer>
    )
}

export default Footer