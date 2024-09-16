import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
function SignUp() {
  return (
    <div className='signcontainer'>
      <h1>Start your journey <br /> today with <br /> PassePos</h1>
    <form>
        <input type="text" placeholder='name' name='name'/> <br />
        <input type="text" placeholder='user name' name='username'/> <br />
        <input type="email" placeholder='email'/> <br />
        <input type="password" placeholder='password' name='password'/> <br />
        <input type="radio" name='r1' /> <span>Passenger</span> <input type="radio"  name='r1'/><span>Driver</span>
    <br /> <button>sign-up</button>
    </form>
    <p>Already have an account? </p>
    <button><Link className='linksignup' to ="/login">sign in</Link></button>
    </div>
  )
}

export default SignUp
