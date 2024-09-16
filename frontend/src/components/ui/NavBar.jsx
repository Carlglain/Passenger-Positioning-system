import React from 'react'
import Logo from './Logo.jpg'
import './styles.css'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <header>
       <img className='logo' src={Logo} alt="Passeposs" />
      <nav>
       <ul>
        <li><Link className='na-link' to="#">User Profile</Link></li>
        <li><Link className='na-link' to="#">About Us</Link></li>
        <li><Link className='na-link' to="#">Contact Us</Link></li>
        <li><Link className='na-link' to="#">Help</Link></li>
        <li><Link className='na-link' to="#">Switch to Passenger</Link></li>
        <li><Link className='na-link' to="#">feed back</Link></li>
        <li><Link className='na-link' to="#">log out</Link></li>
        <li><button>Close</button></li>
       </ul>
       <button>Open</button>
       </nav>
    </header>
  )
}

export default NavBar
