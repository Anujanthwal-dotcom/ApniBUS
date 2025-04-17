import React, {useEffect, useState} from 'react';
import bus from '../public/bus-image.png'
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {


    let [userDetails,setUserDetails] = useState({
        email:'',
        password:''
    })
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




    //handle login
    async function handleLogin(e){
        e.preventDefault()
        //request
        let response = await axios.post('http://localhost:8080/login',userDetails)

        if(response!==null){
            console.log(response.data)
            localStorage.setItem('token',response.data.token)

            token = localStorage.getItem('token')
            console.log(token)
            //get role
            let role = await axios.get("http://localhost:8080/role", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })

            if(role.data ==='USER'){
                navigate('/User')
            }
            else if(role.data === 'ADMIN'){
                navigate('/admin')
            }
            else{
                alert("Role for this user is not found")
            }
        }
        else{
            alert('User not found with these credentials.')
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
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome Back 🚆</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-600">Email</label>
                            <input onChange={(e)=>setUserDetails({...userDetails,email: e.target.value})} type="email" placeholder="you@example.com" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        <div>
                            <label className="block text-gray-600">Password</label>
                            <input onChange={(e)=>setUserDetails({...userDetails,password: e.target.value})} type="password" placeholder="••••••••" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        <button onClick={(e)=>handleLogin(e)} type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200">
                            Login
                        </button>
                    </form>


                    <div className="flex flex-row mt-4 text-sm text-gray-500">
                        <span>Don’t have an account?</span>
                        <button onClick={() => navigate('/signup')} className="ml-2 text-blue-500 font-medium hover:underline hover:text-blue-600 transition duration-150" >
                            Sign up
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;

