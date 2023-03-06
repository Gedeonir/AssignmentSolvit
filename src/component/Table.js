/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Table=()=>{
    return(
        
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-yellow-300 uppercase bg-cyan-800">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Blog title
                </th>
                <th scope="col" className="px-6 py-3">
                    Blog Contents
                </th>
                <th scope="col" className="px-6 py-3">
                    Author
                </th>
                <th scope="col" className="px-6 py-3">
                   Posted_at
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b hover:bg-gray-100">
                <th scope="row" className="px-6 py-4 font-medium text-cyan-800 whitespace-nowrap ">
                    Noteworthy technology acquisitions 2021
                </th>
                <td className="px-6 py-4 text-cyan-800">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </td>
                <td className="px-6 py-4 text-cyan-800">
                   IG
                </td>
                <td className="px-6 py-4 text-cyan-800">
                    2023-03-06
                </td>
                <td className="px-6 py-4 text-cyan-800">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2">Edit</a>
                    <a href="#" className="font-medium text-red-600  hover:underline">Delete</a>

                </td>
            </tr>

            <tr className="bg-white border-b hover:bg-gray-100">
                <th scope="row" className="px-6 py-4 font-medium text-cyan-800 whitespace-nowrap ">
                    Noteworthy technology acquisitions 2021
                </th>
                <td className="px-6 py-4 text-cyan-800">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </td>
                <td className="px-6 py-4 text-cyan-800">
                   IG
                </td>
                <td className="px-6 py-4 text-cyan-800">
                    2023-03-06
                </td>
                <td className="px-6 py-4" text-cyan-800>
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2">Edit</a>
                    <a href="#" className="font-medium text-red-600  hover:underline">Delete</a>

                </td>
            </tr>
            
        </tbody>
    </table>
</div>

    )
}

export default Table