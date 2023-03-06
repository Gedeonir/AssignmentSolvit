/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../component/footer";
import Navbar from "../component/Navbar";

const Login=()=>{
    return(
        <div className=" bg-cyan-900 block pt-16">
            <Navbar/>
            <div className="w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-md bg-cyan-800 ">
                <div className="px-6 py-4 mt-16">
                    <div className="flex justify-center mx-auto">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
                    </div>

                    <h3 className="mt-3 text-xl font-medium text-center text-yellow-300">Welcome Back</h3>

                    <p className="mt-1 text-center text-yellow-100">Login or create account</p>

                    <form>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 border rounded-lg bg-cyan-900 border-cyan-900 placeholder-yellow-100 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
                        </div>

                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2  border rounded-lg bg-cyan-900 border-cyan-900 placeholder-yellow-100 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <a href="#" className="text-sm text-yellow-100 hover:text-yellow-300">Forget Password?</a>

                            <button className="px-6 py-2 text-sm font-medium tracking-wide text-cyan-900 capitalize transition-colors duration-300 transform bg-yellow-300 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-cyan-700">
                    <span className="text-sm text-yellow-100">Don't have an account? </span>

                    <a href="#" className="mx-2 text-sm font-bold text-yellow-300 hover:underline">Register</a>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Login