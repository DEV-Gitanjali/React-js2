import React from 'react'

function Card() {
  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-4' pb>
      <div className='w-20 bg-orange-600 rounded-md'></div>

      <div className=''>
        <h3 className='text-xl  leading-none font-semibold '>Song Name</h3>
        <h6 className='text-sm'> Artist Name</h6>
      </div>
      <button className='px-4 py-3 bg-orange-600 absolute text-white text-xs rounded-full '></button>
    </div>
  )
}

export default Card
