import React from 'react'
// import style from "./style.modules.css";

function Navbar({data}) {
  return (
    <div className='w-full  px-4 py-3  flex justify-between items-center'>
        <h3>Orange</h3>
        <div className='flex p-2 bg-orange-600 text-white px-4 rounded-md text-sm gap-3'>
            <h3>Favorites</h3>

            <h4>{data.filter (item=>item.added).length}</h4>
        </div>
      
    </div>
  )
}

export default Navbar
