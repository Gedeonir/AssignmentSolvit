/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "./card";
import loadingGif from '../image/loading.gif'
import countries from '../utils/countries.json'
import Details from "./Details";

  const Cards=()=>{
    const [posts,setCountries] = useState(countries);
    const [searchWord,setSearchWord]=React.useState('')
    const [open,setOpen]=React.useState(false);
    const [region,setRegion]=React.useState('')
    const [ID,setID]=React.useState('');

    const filteredData=posts?.filter(country=>{
        return country.name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()) && country.region.toLocaleLowerCase().includes(region.toLocaleLowerCase())
    });

  

console.log(ID);



    
    return (
        <>
        <div className="block py-20">
                <div className="lg:flex justify-between px-5 sm:block">
                    <div className="mb-6 lg:w-64 sm:w-full">
                        <input type="text"
                            value={searchWord}
                            onChange={(e) => { setSearchWord(e.target.value); } }
                            id="searchWord"
                            className="bg-gray-50 dark:bg-gray-700 dark:text-gray-50 shadow text-gray-900 text-sm rounded-xs outline-none focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5"
                            placeholder="Search for country" required />
                    </div>
                    <button onClick={() => setOpen(!open)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="w-48 dark:bg-gray-700 dark:text-gray-50 justify-between bg-gray-50 hover:bg-gray-100 focus:ring-1 focus:outline-none font-medium rounded-xs text-sm px-4 py-1 h-10 text-center inline-flex items-center " type="button">{region !== '' ? (region) : (<>Filter by Region</>)}<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                    {open &&
                        <div id="dropdown" class="z-10 absolute lg:right-0 sm:right-10 sm:top-45 lg:top-40 bg-white divide-y dark:bg-gray-700 dark:text-gray-50 divide-gray-100 rounded-lg shadow w-44">
                            <ul class="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
                                <button className="px-3 py-2 w-full text-left" onClick={() => { setRegion('Asia'); } }>
                                    Asia
                                </button>
                                <button className="px-3 py-2 w-full text-left" onClick={() => { setRegion('Africa'); } }>
                                    Africa
                                </button>
                                <button className="px-3 py-2 w-full text-left" onClick={() => setRegion('Europe')}>
                                    Europe
                                </button>
                                <button className="px-3 py-2 w-full text-left" onClick={() => setRegion('America')}>
                                    America
                                </button>
                                <button className="px-3 py-2 w-full text-left" onClick={() => setRegion('America')}>
                                    Oceania
                                </button>
                            </ul>
                        </div>
                    }
                </div>
                {filteredData.length === 0 ? (<p className="px-5">No result found</p>) : (
                    <div className="lg:grid lg:grid-cols-5 lg:gap-3 sm:block my-8 lg:px-5">
                        {filteredData?.map((post) => {
                            return <Card key={post.name} name={post.name} population={post.population} region={post.region} img={post.flag} capital={post.capital} setID={setID}/>;
                        })}
                    </div>

                )}


            </div>
            </>
    

      );
    }

    export default Cards
    