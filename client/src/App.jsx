import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import Signin from './Pages/Signin'
import Singup from './Pages/Singup'



export default function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/sing-in' element={<Signin />} />
        <Route path='/sing-up' element={<Singup />} />

        </Routes>
      </BrowserRouter> 
  )
}
