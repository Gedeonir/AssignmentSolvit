/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from "react-router-dom";

const Card=({img,name,population,capital,setShowDetails,key,setID})=>{
    return(
        <a href="#" onClick={setID(key)}>
            <div className="lg:w-76  my-4   h-96 dark:bg-gray-700 dark:text-gray-50  bg-gray-50 rounded-xs shadow bg--800 hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className='h-56 w-full'>
                    <img className="w-full h-full" src={img} alt="flag Image" />
                </div>
                <div className="py-2 px-4">
                    <h2 className='py-3 font-bold'>{name}</h2>
                    <div className='flex'>
                        <p className="font-medium">Population:</p>
                        <p className='font-light'>{population}</p>
                    </div>
                    <div className='flex'>
                        <p className="font-medium">Population:</p>
                        <p className='font-light'>{population}</p>
                    </div>
                    <div className='flex'>
                        <p className="font-medium">Capital:</p>
                        <p className='font-light'>{capital}</p>
                    </div>
                </div>
                
            </div>
        </a>
    )
}

export default Card