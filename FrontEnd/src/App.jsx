import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import ProtectedRouter from '../protectRouter'
// import NavBar from './components/navBar' 
import Home from './pages/home'
import Login from './pages/Login'

function App() {

  return (
    <div className="app">
      {/* <NavBar/> */}
      <Routes>
        <Route element={<ProtectedRouter />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes> 
    </div>
  )
}

export default App
