import React from 'react'
import NavBar from '../../components/ui/NavBar'
import ArrowDropDownCircle from '@mui/icons-material/ArrowDropDownCircle'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import "./driver.css"
function Driver() {
  const passengers = [{name:"passenger1", status:"active"},
    {name:"passenger2", status:"inactive"},
    {name:"passenger3", status:"active"},
    {name:"passenger4", status:"active"},
    {name:"passenger5", status:"inactive"}
  ]
  return (
    <div>
      <NavBar />
      <h1>Choose Routes <ArrowDropDownCircle></ArrowDropDownCircle></h1>
      <div className='display-passengers-container'>
        {/* use backend logic to sort the passengers in relation to closeness to the driver  */}
        {
        passengers.map((passenger,index)=>{
          if(passenger.status == "active"){
            return <div className="display-passengers" key={index}>{passenger.name} <RadioButtonCheckedIcon color='success' className='icon-active-passenger'/></div>
          }
        })
        }
        
        

      </div>
    </div>
  )
}

export default Driver
