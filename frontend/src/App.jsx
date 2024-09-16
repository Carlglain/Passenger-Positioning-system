import React from 'react'
import {Route, Routes} from 'react-router-dom'
import "./App.css"
import SignUp from './pages/signUpPage/SignUp'
import Login from './pages/loginPage/Login'
import Home from './pages/homPage/Home'
import ContactUs from './pages/contactUsPage/ContactUs'
import About from './pages/aboutUsPage/About'
import Passenger from './pages/passengerPage/Passenger'
import Driver from './pages/driverPage/Driver'
function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path='/passenger' element={<Passenger />}></Route>
          <Route path='/driver' element={<Driver />} />
        </Routes>
  
      
    </div>
  )
}

export default App
