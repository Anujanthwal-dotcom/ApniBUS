import React from 'react'
import busTravel from "../public/2209_w015_n003_974b_p15_974.jpg";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";


function User() {

    function getBooked(e){
        alert("Booked")
    }
    function getCancelled(e){
        alert("Cancelled")
    }


    return (
        <div>


            {/*nav section*/}
            <div className={"h-[100px] flex flex-row items-center rounded-b-lg shadow-md justify-center space-x-[80%] px-50"}>
                <div className={"flex flex-row items-center"}>
                    <h1
                        className="flex items-centerfont-sans font-extrabold tracking-tight text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">
                        ApniBUS
                    </h1>
                </div>
                <div className="relative inline-block text-left">
                    <Menu as="div" className="relative">
                        <div>
                            <Menu.Button className="text-lg font-semibold px-10 py-2 rounded-xl text-neutral-500  hover:text-neutral-600 hover:bg-neutral-200 transition-colors duration-300 focus:outline-none">
                                Account
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-8 w-44 rounded-xl bg-white shadow-md focus:outline-none">
                                <div className="">
                                    <Menu.Item>

                                            <button
                                                className={`w-full text-left px-4 py-2 text-sm text-neutral-500  hover:text-neutral-600 hover:bg-neutral-200 rounded-t-xl `}
                                                onClick={() => alert("Account Info")}
                                            >
                                                Account Info
                                            </button>

                                    </Menu.Item>

                                    <Menu.Item>

                                            <button
                                                className={`w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-neutral-200 rounded-b-xl`}
                                                onClick={() => alert("Logged out")}
                                            >
                                                Logout
                                            </button>

                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>

            </div>


            {/*content section*/}
            <div>


                {/*search bar */}
                <div className="flex items-center justify-center">
                    <div
                        className="w-full h-[500px]  bg-cover bg-center items-center justify-center"
                        style={{
                            // Adjust the rgba values for your desired overlay darkness
                            backgroundImage: `url(${busTravel})`,
                            backgroundSize: '100% 100%' // Keeps the image corners pinned
                        }}
                    >
                        <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
                            <form className="flex w-full max-w-6xl shadow-2xl rounded-2xl overflow-hidden">

                                {/* Search Fields */}
                                <div className="flex flex-col sm:flex-row gap-4 w-full bg-white bg-opacity-95 p-6 sm:p-4 sm:gap-2 flex-1">

                                    {/* From Input */}
                                    <input
                                        type="text"
                                        placeholder="From"
                                        className="w-[25%] sm:w-1/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required={true}
                                    />

                                    {/* To Input */}
                                    <input
                                        type="text"
                                        placeholder="To"
                                        className="w-[25%] sm:w-1/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                                        required={true}
                                    />

                                    {/* Date Picker */}
                                    <input
                                        type="date"
                                        className="w-[25%] sm:w-1/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                                        required={true}
                                    />
                                </div>

                                {/* Search Button */}
                                <button className="w-[25%] bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 sm:py-0 sm:px-6 transition-all duration-300 rounded-none sm:rounded-r-2xl">
                                    Search
                                </button>
                            </form>
                        </div>


                    </div>
                </div>

                {/*data section*/}
                <div className="p-8 bg-gray-100 min-h-screen flex space-y-4 flex-col">
                    {/*bar*/}
                    <div className='w-full h-[80px] bg-white rounded-xl flex flex-row items-center'>

                        {/*options*/}
                        <div className="p-10 w-full h-[60px] flex items-center space-x-4">
                            <button onClick={(e)=>getBooked(e)} className="px-10 py-4 rounded-lg bg-white text-gray-800 text-base font-bold tracking-wide hover:bg-gray-100 transition-colors duration-200">
                                Booked
                            </button>
                            <button onClick={(e)=>{getCancelled(e)}} className="px-10 py-4 rounded-lg bg-white text-orange-600 text-base font-bold tracking-wide hover:bg-gray-100 transition-colors duration-200">
                                Cancelled
                            </button>
                        </div>

                        {/*retrieved content*/}


                    </div>

                    {/*show data*/}
                    <div className='w-full h-screen bg-white rounded-xl flex flex-row items-center'>




                    </div>

                </div>



                {/*footer section*/}
                <footer className="bg-gray-800 text-white py-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} ApniBUS. All rights reserved.
                        </p>
                        <div className="mt-4">
                            <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
                        </div>
                    </div>
                </footer>
            </div>




        </div>
    )
}

export default User
