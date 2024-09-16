import React from 'react'
import './passenger.css'
import NavBar from '../../components/ui/NavBar'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
function Passenger() {
  const ul1items = ["l1", "l2", "l3"]
  
  return (
    <div>
      <NavBar />
      <h1>Select Location and Indicate</h1>
      {/* make the button below toggle on click */}
      <span><input type="radio" id='l1'/> <label htmlFor="l1">Indicate</label></span>
      <h1>Select location <ArrowDropDownCircleIcon></ArrowDropDownCircleIcon> </h1>
      <ul>
        {ul1items.map((data,index)=>{
         return <li key={index}>{data}</li>
        })}
      </ul>
      <input type="text" placeholder='Enter destination'/>
      <h1>View Driver routes <ArrowDropDownCircleIcon></ArrowDropDownCircleIcon> </h1>
        <ul>
         { ul1items.map((li, index)=>{
          return <li key={index}>{li}</li>
         })}
        </ul>
    </div>
  )
}

export default Passenger
