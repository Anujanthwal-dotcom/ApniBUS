import React, {useEffect, useState} from 'react';
import train from '../public/rail.png'
import {useNavigate} from "react-router-dom";
import axios from "axios";
function Signup() {
    let navigate = useNavigate()
    let [otpverified,setOtpverified] = useState(false)
    let [otpGenerated,setOtpGenerated] = useState(false)
    let [userDetails,setUserDetails] = useState({
        email:"",
        password:"",
        username:"",
        role:""
    })


    let token = localStorage.getItem('token')

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



    function generateOTP(){
        if(userDetails.email===""){
            alert("Email should not be empty")
        }
        else{
            alert("OTP sent")
        }
    }

    function verifyOTP(){
        console.log("otp verified")
    }

    async function handleSignup(){

    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="items-center max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">

                {/* Image Section */}
                <div className="md:w-1/2 h-64 md:h-auto">
                    <img src={train} alt="Train background" className="w-[80%] h-[80%] object-cover m-4"/>
                </div>

                {/* Form Section */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Your Account 🚉</h2>

                    <form className="space-y-4">

                        {/*email section*/}
                        <div>
                            <label className="block text-gray-600">Email</label>
                            <input onChange={(e)=>{setUserDetails({...userDetails,email: e.target.value})}} type="email" placeholder="you@example.com" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        {/*generate otp button*/}
                        <button onClick={generateOTP} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200">
                            Generate OTP
                        </button>

                        {/*otp verify button */}
                        <div className={otpGenerated?'block':'hidden'}>
                            <div>
                                <label className="block text-gray-600">OTP</label>
                                <input type="email" placeholder="" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <button onClick={verifyOTP} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200">
                                Verify OTP
                            </button>
                        </div>

                        {/*details section password, role and name */}
                        <div className={otpverified?'block':'hidden'}>
                            <div>
                                <label className="block text-gray-600">Password</label>
                                <input onChange={(e)=>{setUserDetails({...userDetails,password: e.target.value})}} type="password" placeholder="••••••••" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>

                            <div>
                                <label className="block text-gray-600">Full Name</label>
                                <input onChange={(e)=>{setUserDetails({...userDetails,username: e.target.value})}} type="text" placeholder="John Doe" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>

                            <div>
                                <label className="block text-gray-600">Role</label>
                                <select onChange={(e) => { setUserDetails({ ...userDetails, role: e.target.value }) }} value={userDetails.role} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>

                            <button onClick={()=>handleSignup()} type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200">
                                Sign Up
                            </button>
                        </div>

                    </form>

                    <div className="flex flex-row mt-4 text-sm text-gray-500">
                        <span>Already have an account?</span>
                        <button onClick={() => navigate('/login')} className="ml-2 text-blue-500 font-medium hover:underline hover:text-blue-600 transition duration-150" >
                           login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
