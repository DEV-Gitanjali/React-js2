import React from 'react'

function Card() {
  return (
    <div className='w-60 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2 '>
        <div className='image w-[3vw] h-[3vw] rounded-full bg-zinc-800 overflow-hidden'>

          <img  className= 'w-full h-full object-cover' src="" alt="" />
        </div>

        <h1 className=' mt-1 text-xl font-semibold '>Harsh</h1>
        <h4 className='opacity-40 text-xs font-semibold'>harsh@male.com</h4>
        <p className='mt-2 text-center text-xs font-semibold  leading-none tracking-tight '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis labore praesentium cum eveniet! Et sed, eius nulla facilis dignissimos!</p>

        <button className='px-3 py-1 bg-red-600 text-xs rounded-md  font-semibold text-white mt-1'>Remove It</button>
      
    </div>
  )
}

export default Card
