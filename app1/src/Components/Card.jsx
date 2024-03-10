import React from 'react'

function Card() {
  
  return (
    <div className=' h-32 w-60 bg-zinc-100 p-4   rounded-md flex gap-4 pb-10 relative mt-10 '>
      <div className='w-20 bg-orange-600 rounded-md'></div>

      <div className=''>
        <h3 className='text-xl  leading-none font-semibold '>Song Name</h3>
        <h6 className='text-sm'> Artist Name</h6>
      </div>
      <button className='px-10 py-3 whitespace-nowrap bg-orange-600 absolute -bottom-3
       left-1/2 -translate-x-[50%]  text-white text-xs rounded-full '>Add to Favorites</button>
    </div>
  )
}

export default Card
