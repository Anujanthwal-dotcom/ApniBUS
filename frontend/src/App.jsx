import React from "react"
import {Navigate, Route, Routes} from "react-router-dom"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import Admin from "./components/Admin.jsx"
import User from "./components/User.jsx"

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path={`/home`} element={<Home/>}/>
            <Route path={`/login`} element={<Login/>}/>
            <Route path={`/signup`} element={<Signup/>}/>
            <Route path={`/admin`} element={<Admin/>}/>
            <Route path={`/user`} element={<User/>}/>
      </Routes>
    </>
  )
}

export default App
