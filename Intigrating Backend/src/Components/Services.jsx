import React, { useEffect } from 'react'

const Services = () => {

useEffect(() => {

    console.log("sevices components is created");

    return()=>{
        console.log("sevices components is destroyed");
    }


})

       
    
  return (
    <div>
      Services
    </div>
  )
}

export default Services
