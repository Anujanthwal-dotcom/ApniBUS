import React, {useEffect, useState} from 'react'
import bus from '../public/bus-school.png'
import busTravel from '../public/2209_w015_n003_974b_p15_974.jpg'
import passenger from '../public/8574950.jpg'
import travel from '../public/9372541.jpg'

import {useNavigate} from "react-router-dom";
import axios from "axios";

function Home() {
    let [currentBusImg,setCurrentBusImg] = useState(0);
    let navigate = useNavigate()

    let token = localStorage.getItem('token')

    //before loading
    useEffect(() => {

        axios.get("http://localhost:8080/role", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }).then((role)=>{
            if (role.data==='USER'){
                navigate('/user')
            }
            else if(role.data === 'ADMIN'){
                navigate('/admin')
            }
            else{
                alert("Role for this user is not found")
            }
        }).catch((error)=>{
            console.log("Error in getting role",error)
        })


    },[navigate, token])

    function carousal(dir){
        let length = busImages.length
        if(dir==='left'){
            setCurrentBusImg(currentBusImg > 0?currentBusImg-1:length-1)
        }
        else{
            setCurrentBusImg(currentBusImg<length-1?currentBusImg+1:0)
        }
    }

    return (
        <div>
            {/*nav section*/}
            <div className={"h-[100px] flex flex-row items-center rounded-b-lg shadow-md justify-center space-x-[80%] p-10"}>
                <div className={"flex flex-row items-center"}>
                    <img src={bus} alt={'bus image'} height={60} width={60} className={`m-2`}/>
                    <h1 className={`text-3xl font-bold`}>ApniBUS</h1>
                </div>
                <div className="m-4">
                    <button onClick={()=>navigate('/login')} className="text-xl font-semibold px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200 shadow-md">
                        Login
                    </button>
                </div>
            </div>

            <div>
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
                            <div className="flex w-full max-w-6xl shadow-2xl rounded-2xl overflow-hidden">

                                {/* Search Fields */}
                                <div className="flex flex-col sm:flex-row gap-4 w-full bg-white bg-opacity-95 p-6 sm:p-4 sm:gap-2 flex-1">

                                    {/* From Input */}
                                    <input
                                        type="text"
                                        placeholder="From"
                                        className="w-[25%] sm:w-1/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />

                                    {/* To Input */}
                                    <input
                                        type="text"
                                        placeholder="To"
                                        className="w-[25%] sm:w-1/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                                    />

                                    {/* Date Picker */}
                                    <input
                                        type="date"
                                        className="w-[25%] sm:w-1/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                                    />
                                </div>

                                {/* Search Button */}
                                <button className="w-[25%] bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 sm:py-0 sm:px-6 transition-all duration-300 rounded-none sm:rounded-r-2xl">
                                    Search
                                </button>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="p-8 bg-gray-100 min-h-screen flex justify-center">

                    <div className='flex-col w-[80%] space-y-10'>
                        <div className="h-[400px] w-full bg-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row gap-6 text-gray-800">
                            {/* Left Side - Image */}
                            <div className="w-full sm:w-1/3 rounded-xl shadow-md">
                                <img
                                    src={passenger}
                                    alt="Subscription Offer"
                                    className="w-full h-full object-fit rounded-2xl"
                                />
                            </div>

                            {/* Right Side - Text Content */}
                            <div className="w-full sm:w-2/3 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-3xl font-bold mb-2 text-gray-900">ApniBUS Prime Membership</h3>
                                    <p className="text-base mb-4 opacity-90">
                                        Unlock premium features with <span className="font-semibold">ApniBUS Prime</span>. Get exclusive offers, faster booking, and zero cancellation fees!
                                    </p>

                                    <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                                        <li>Extra 20% off on all bookings</li>
                                        <li>Priority customer support</li>
                                        <li>Zero cancellation charges</li>
                                    </ul>

                                    <div className="bg-gray-100 border border-gray-300 rounded-md p-3 text-sm">
                                        Subscribe now and save more with code <span className="font-semibold text-blue-600">PRIME20</span>
                                    </div>
                                </div>

                                <div className="flex justify-end mt-6">
                                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300">
                                        Get Prime
                                    </button>
                                </div>
                            </div>
                        </div>



                        <div className="h-[400px] w-full bg-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row gap-6 text-gray-800">
                            {/* Left Side - Image */}


                            {/* Right Side - Text Content */}
                            <div className="w-full sm:w-2/3 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-3xl font-bold mb-2 text-gray-900">ApniBUS Travel Pack</h3>
                                    <p className="text-base mb-4 opacity-90">
                                        Whether it’s your daily commute or spontaneous weekend plans, the <span className="font-semibold">ApniBUS Travel Pack</span> brings you the best travel experience—efficient, affordable, and reliable.
                                    </p>

                                    <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                                        <li>Instant 10% off on all bookings</li>
                                        <li>Free travel insurance for every ride</li>
                                        <li>Special deals on round trips</li>
                                    </ul>

                                    <div className="bg-gray-100 border border-gray-300 rounded-md p-3 text-sm">
                                        Activate your Travel Pack now and enjoy seamless journeys. Use promo code <span className="font-semibold text-blue-600">TRAVEL10</span>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300">
                                        Get Travel Pack
                                    </button>
                                </div>
                            </div>

                            <div className="w-full sm:w-1/3 rounded-xl shadow-md">
                                <img
                                    src={travel}
                                    alt="Travel Pack"
                                    className="w-full h-full object-fit rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>







                </div>
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

export default Home
