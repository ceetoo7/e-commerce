import React from 'react'
import Register from './Register'
import Login from './Login'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
