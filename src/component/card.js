/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from "react-router-dom";

const Card=()=>{
    return(
        <div className="max-w-sm  m-auto  border  rounded-lg shadow bg-cyan-800 border-cyan-700 hover:bg-cyan-700">
            <a href="#">
                <img className="rounded-t-lg" src="https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754__340.jpg" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-300">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-yellow-100">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex m-3 items-center px-3 py-2 text-sm font-medium text-center text-cyan-800 bg-yellow-300 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-300">
                    Read more
                </a>
            </div>
            
        </div>
    )
}

export default Card