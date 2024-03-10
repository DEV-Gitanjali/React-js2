

import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {

  const data=[{image: "https://plus.unsplash.com/premium_photo-1709311452506-80def0868c0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"Challenger" , artist:"harshi"  , added:false},
  {image:"https://images.unsplash.com/photo-1693835777292-cf103dcd2324?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"" , artist:"bindu" , added:false},
  {image: "https://images.unsplash.com/photo-1707944789575-3a4735380a94?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmclMjBhcnRpc3R8ZW58MHx8MHx8fDA%3D" , name:"Challenger" , artist:"subham"  , added:false},
  {image :"https://plus.unsplash.com/premium_photo-1681335986095-5a9585e77246?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29uZyUyMGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D" , name:"Challenger" , artist:"shree"  , added:false}, ];
  
  
  return (

    <>
    <div className="w-full h-screen bg-zinc-300">
      <Navbar />
      <div className="px-20 flex gap-10 mt-10 flex-wrap">
      <Card />

      </div>

    </div>
    </>
    
  )
}

export default App

