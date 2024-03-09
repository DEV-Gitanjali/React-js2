// import React from 'react';

// function Card() {
//   const data = [
//     {
//       image: 'https://images.unsplash.com/photo-1709656541505-36bc9c102434?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       name: 'Engagged',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eveniet cumque consectetur asperiores',
//       KnowMore:true
//     },
//     {
//       image: 'https://plus.unsplash.com/premium_photo-1709065154533-d53fb085f2f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       name: 'Couple pic ',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eveniet cumque consectetur asperiores',
//       NoMore:false
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1535615615570-3b839f4359be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       name: 'Heart',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eveniet cumque consectetur asperiores',
//       KnowMore:true
//     }
//   ];

//   return (
//     <div className='w-full h-screen flex  items-center justify-center  gap-10 bg-zinc-200'>
//       {data.map((elem, index) => (
//         <div key={index} className='w-full flex items-center justify-center'>
//           <div className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
//             <div className='w-full h-40 bg-zinc-300'>
//               <img className='w-full h-full object-cover' src={elem.image} alt="" />
//             </div>
//             <div className='w-full px-3 py-4'>
//               <h2 className='font-semibold'>{elem.name}</h2>
//               <p className='px-5 py-2'>{elem.description}</p>
//               <button className={`px-4 py-1 ${elem.KnowMore? 'bg-sky-600' : 'bg-red-200' } text-xs rounded text-zinc-100 mt-3`}>{elem.KnowMore ? "Yes" : "No"}</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Card;


// handling events

// function Card() {
//   const data = [
//     { name: "Mahiye Ve", description: "the name of the card that will be displayed" },
//     { name: "Junoon", description: "the name of the card that will be displayed" },
//   ];

//   const handleClickDownload =() => {alert("chal raha hai")};

//   return (
//     <div className='w-full h-screen bg-zinc-300 flex flex-col items-center justify-center'>
//       {data.map((item, index) => (
//         <div key={index} className='w-65 px-3 py-2 bg-zinc-100 rounded'>
//           <h3 className='font-semibold text-xl'>{item.name}</h3>
//           <p className='text-sm'>{item.description}</p>
//           <button  onClick ={handleClickDownload} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3'>Download Now</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Card;

import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Card() {

  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center '>
      <div className=' relative w-60  h-32 bg-zinc rounded overflow-hidden'>
        <img  className= ' w-full h-full object-cover 'src="https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

     <span className='w-8  h-8 flex items-center   justify-center rounded-full  bg-[#dadada7a]  absolute bottom-[.0%]  left-1/2  -tarnslate-x-[50%] -translate-y-[50%]'>
      <FaArrowRightLong size={".7em"} />
     </span>
         
      </div>
    </div>
  )
}

export default Card


