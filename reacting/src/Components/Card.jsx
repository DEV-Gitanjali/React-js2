import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen bg-zinc-200'>
      <div className=' w-52 bg-zinc-100 absolute left-1/2 top-1/2 -transalte-x-[50%] -translate-y-[50%] rounded-md overflow-hidden'>
        <div className=' w-full h-40 bg-zinc-300'>
          <img  className='w-full h-full object-cover'src="https://images.unsplash.com/photo-1627630737366-fbd46d8c11f5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div  className='w-full px-3 py-4'></div>
        <h2 className='font-semibold px-10'>Amazon Basics</h2>
        <p className='px-5 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eveniet cumque consectetur asperiores .</p>
      </div>
     
    </div>
  )
}

export default Card
