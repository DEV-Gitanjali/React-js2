import React from 'react'

function Card() {
  return (
    <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2 '>
        <div className='image w-[3vw] h-[3vw] rounded-full bg-blue-800 overflow-hidden'></div>
        <h1 className='text-xl font-semibold '>Harsh</h1>
        <p className='text-center text-xs font-semibold  leading-none tracking-tight '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis labore praesentium cum eveniet! Et sed, eius nulla facilis dignissimos, aut asperiores fuga eaque quibusdam porro consequuntur corporis, in deserunt quo!</p>
      
    </div>
  )
}

export default Card
