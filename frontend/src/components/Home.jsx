import React, {useState} from 'react'
import train from '../public/train-station.png'
import train1 from '../public/train1.jpg'
import train2 from '../public/train2.jpg'
import left from '../public/left-arrow.png'
import right from '../public/arrow-right.png'
import {useNavigate} from "react-router-dom";
function Home() {
    let [currentTrainImg,setCurrentTrainImg] = useState(0);
    let navigate = useNavigate()
    let trainImages = [
        train1,
        train2
    ]

    function carousal(dir){
        let length = trainImages.length
        if(dir==='left'){
            setCurrentTrainImg(currentTrainImg > 0?currentTrainImg-1:length-1)
        }
        else{
            setCurrentTrainImg(currentTrainImg<length-1?currentTrainImg+1:0)
        }
    }

    return (
        <div>
            {/*nav section*/}
            <div className={"flex flex-row items-center rounded-b-lg shadow-md justify-between"}>
                <div className={"flex flex-row items-center"}>
                    <img src={train} alt={'bus image'} height={40} width={40} className={`m-2`}/>
                    <h1 className={`text-xl font-semibold`}>ApniTrain</h1>
                </div>
                <div className="m-4">
                    <button onClick={()=>navigate('/login')} className="text-xl font-semibold px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200 shadow-md">
                        Login
                    </button>
                </div>
            </div>


            {/*content section*/}
            <div>
                <div className={'items-center justify-center '}>
                    <div>
                        <img
                            className="w-full h-200 object-cover"
                            src={`${trainImages[currentTrainImg]}`}
                            alt="Train Image"
                        />
                    </div>

                    <div className={'m-4 flex flex-row justify-center  w-[100%] '}>
                        <button className={'mr-4'} onClick={()=>carousal('left')}>
                            <img src={left} height={40} width={40}/>
                        </button>
                        <button className={'ml-4'} onClick={()=>carousal('right')}>
                            <img src={right} height={40} width={40}/>
                        </button>
                    </div>
                </div>

                <div className="p-8 bg-gray-100 min-h-screen">
                    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Available Trains</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                            <h2 className="text-xl font-bold text-blue-700 mb-2">Rajdhani Express</h2>
                            <p className="text-gray-600 mb-1">🚆 Train No: 12309</p>
                            <p className="text-gray-600 mb-1">🗓️ Departure: 08:00 AM</p>
                            <p className="text-gray-600 mb-1">📍 From: New Delhi</p>
                            <p className="text-gray-600 mb-1">📍 To: Mumbai Central</p>
                            <p className="text-green-600 font-semibold mt-2">Status: On Time</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                            <h2 className="text-xl font-bold text-green-700 mb-2">Shatabdi Express</h2>
                            <p className="text-gray-600 mb-1">🚆 Train No: 12001</p>
                            <p className="text-gray-600 mb-1">🗓️ Departure: 06:10 AM</p>
                            <p className="text-gray-600 mb-1">📍 From: Bhopal</p>
                            <p className="text-gray-600 mb-1">📍 To: New Delhi</p>
                            <p className="text-red-500 font-semibold mt-2">Status: Delayed</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                            <h2 className="text-xl font-bold text-purple-700 mb-2">Duronto Express</h2>
                            <p className="text-gray-600 mb-1">🚆 Train No: 12263</p>
                            <p className="text-gray-600 mb-1">🗓️ Departure: 10:30 PM</p>
                            <p className="text-gray-600 mb-1">📍 From: Pune</p>
                            <p className="text-gray-600 mb-1">📍 To: Howrah</p>
                            <p className="text-green-600 font-semibold mt-2">Status: On Time</p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                            <h2 className="text-xl font-bold text-yellow-700 mb-2">Garib Rath</h2>
                            <p className="text-gray-600 mb-1">🚆 Train No: 12909</p>
                            <p className="text-gray-600 mb-1">🗓️ Departure: 05:45 PM</p>
                            <p className="text-gray-600 mb-1">📍 From: Chennai</p>
                            <p className="text-gray-600 mb-1">📍 To: Bangalore</p>
                            <p className="text-yellow-500 font-semibold mt-2">Status: Boarding</p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                            <h2 className="text-xl font-bold text-red-700 mb-2">Jan Shatabdi</h2>
                            <p className="text-gray-600 mb-1">🚆 Train No: 12077</p>
                            <p className="text-gray-600 mb-1">🗓️ Departure: 07:20 AM</p>
                            <p className="text-gray-600 mb-1">📍 From: Dehradun</p>
                            <p className="text-gray-600 mb-1">📍 To: Delhi</p>
                            <p className="text-red-500 font-semibold mt-2">Status: Cancelled</p>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                            <h2 className="text-xl font-bold text-indigo-700 mb-2">Tejas Express</h2>
                            <p className="text-gray-600 mb-1">🚆 Train No: 22119</p>
                            <p className="text-gray-600 mb-1">🗓️ Departure: 09:15 AM</p>
                            <p className="text-gray-600 mb-1">📍 From: Mumbai</p>
                            <p className="text-gray-600 mb-1">📍 To: Goa</p>
                            <p className="text-green-600 font-semibold mt-2">Status: On Time</p>
                        </div>
                    </div>
                </div>




            </div>




        </div>

    )
}

export default Home
