// import { useState } from "react";
// import Card from "./Components/Card";
// import Navbar from "./Components/Navbar";

// function App() {
//   const data = [
//     { image: "https://plus.unsplash.com/premium_photo-1681335986095-5a9585e77246?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29uZyUyMGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D", name: "Challenger", artist: "harshi", added: false },
//     { image: "https://images.unsplash.com/photo-1693835777292-cf103dcd2324?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "One day", artist: "bindu", added: false },
//     { image: "https://images.unsplash.com/photo-1707944789575-3a4735380a94?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmclMjBhcnRpc3R8ZW58MHx8MHx8fDA%3D", name: "One love", artist: "subham", added: false },
//     { image: "https://images.unsplash.com/photo-1474959783111-a0f551bdad25?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Together", artist: "shree", added: false }
//   ];

//   const [songData, setSongData] = useState(data);
//   const handleClick = (index) => {
//     setSongData((prev) => {
//       return prev.map((item, itemIndex) => {
//         if (itemIndex === index) return { ...item, added: !item.added };
//         return item;
//       });
//     });
//   };

//   return (
//     <>
//       <div className="w-full h-screen bg-zinc-300">
        
//         <Navbar data={songData} />
//         <div className="px-20 flex gap-10 mt-10 flex-wrap">
//           {songData.map((obj, index) => (
//             <Card data={obj} handleClick={handleClick} index={index} key={index} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// form handling
import React, { useRef } from 'react'

function App() {

  const name=useRef(null);
  const age=useRef(null);
  const email=useRef(null);

  const handleSubmit = (details) => {

    details.preventDefault();
    console.log(name.current.value, age.current.value , email.current.value)
  }

  

  
  return (
    <form action="" onSubmit={handleSubmit}>
      <input  ref={name} type="text"  placeholder='name'/>
      <input  ref={age} type="text"  placeholder='age'/>
      <input  ref={email} type="text"  placeholder='email'/>
      <input   type="submit"/>
    </form>
  )
}

export default App
