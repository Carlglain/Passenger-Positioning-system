import React from 'react'

import { Link } from 'react-router-dom'
import './Home.css'
import NavBar from '../../components/ui/NavBar'
function Home() {
  return (
    <div>
        <NavBar />
        <div className='homecontainer'>
     <h1>Passepos</h1>
      <p>Welcome to Passepos</p>
      <p>Track, Navigate, Arrive 
        <span style={{display:'block',padding:'3px'}}></span>
        Effortlessly </p>
       <Link className='Link' to='login'> Login</Link>
       <p>or</p>
       <Link className='Link' to='signup'> SignUp</Link>
            
        </div>
    </div>
  )
}

export default Home
