import React, {useEffect, useState} from 'react';
import bus from '../public/bus-image.png'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import user from "./User.jsx";

function Signup() {
    let navigate = useNavigate()
    let [otpverified,setOtpverified] = useState(false)
    let [otpGenerated,setOtpGenerated] = useState(false)
    let [otp,setOtp] = useState('');
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



    async function generateOTP(e){
        e.preventDefault()
        if(userDetails.email===""){
            alert("Email should not be empty")
        }
        else{
            let formData = new FormData()
            formData.append('email',userDetails.email)
            let response = await axios.post('http://localhost:8080/generateOTP',formData)
            if(response.data===true){
                alert("OTP sent")
                setOtpGenerated(true)
            }
            else{
                alert('Error in sending OTP to the given email. Email may already exists')
            }
        }
    }

    async function verifyOTP(e){
        e.preventDefault()
        let formData = new FormData()
        formData.append('email',userDetails.email)
        formData.append('otp',otp)

        let response = await axios.post('http://localhost:8080/verifyOTP',formData)

        if(response.data===true){
            setOtpverified(true)
        }
        else{
            alert('Enter OTP is wrong')
        }

        alert('OTP verified')
    }

    async function handleSignup(e){
        e.preventDefault()
        let response = await axios.post('http://localhost:8080/register',userDetails)
        console.log(response.data)
        console.log(userDetails)
        if(response.data!==null){
            localStorage.setItem('token',response.data.token)

            if(userDetails.role==='USER'){
                navigate('/user')
            }
            else if(userDetails.role==='ADMIN'){
                navigate('/admin')
            }
            else{
                alert('Error in getting role')
            }
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="items-center max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">

                {/* Image Section */}
                <div className="md:w-1/2 h-64 md:h-auto">
                    <img src={bus} alt="Train background" className="w-[80%] h-[80%] object-cover m-4"/>
                </div>

                {/* Form Section */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Your Account</h2>

                    <form className="space-y-4">

                        {/*email section*/}
                        <div>
                            <label className="block text-gray-600">Email</label>
                            <input onChange={(e)=>{setUserDetails({...userDetails,email: e.target.value})}} type="email" placeholder="you@example.com" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        {/*generate otp button*/}
                        <button onClick={(e)=>generateOTP(e)} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200">
                            Generate OTP
                        </button>

                        {/*otp verify button */}
                        <div className={otpGenerated?'block':'hidden'}>
                            <div>
                                <label className="block text-gray-600">OTP</label>
                                <input onChange={(e)=>setOtp(e.target.value)} type="email" placeholder="" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <button onClick={(e)=>verifyOTP(e)} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200">
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
                                <select onChange={(e) => {console.log(e.target.value); setUserDetails({ ...userDetails, role: e.target.value }) }} value={userDetails.role} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="" disabled hidden>
                                        Select a role
                                    </option>
                                    <option value="USER">User</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                            </div>

                            <button onClick={(e)=>handleSignup(e)} type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200">
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
