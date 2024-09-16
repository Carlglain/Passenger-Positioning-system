import React from 'react'
import { Link } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import './login.css'

function Login() {
  return (
    <div className='signupcontainer'>
      <h1>Passepos</h1>
      <p>Welcome to Passepos</p>
      <form >
        <input type="text" placeholder='username or email'/> <br />
        <input type="password" placeholder='Password' /> <br />
        <button style={{marginRight:'10px'}}>Login</button> <Link to='#' className='link'> forgot password </Link>
      </form>
      <p>or</p>
      <button >
        <GoogleIcon style={{fontSize:'medium', marginRight:'3px'}}/>
       Sign in with Google
       </button>
       <p>new here? <Link to="/signup" className='link'>Create Account</Link></p>
    </div>
  )
}

export default Login
