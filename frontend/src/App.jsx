import React from 'react'
import Register from './Register'
import Login from './Login'
import Navbar from './Navbar'
// import NotFound from '?\./NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'

const App = () => {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
