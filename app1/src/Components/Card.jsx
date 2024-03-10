import React from 'react';

function Card({ data, handleClick, index }) {
  const { image, artist, name, added } = data;
  return (
    <div className='h-32 w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-10 relative mt-10'>
      <div className='w-20 bg-orange-600 rounded-md'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>

      <div>
        <h3 className='text-xl leading-none font-semibold'>{name}</h3>
        <h6 className='text-sm'>{artist}</h6>
      </div>
      <button onClick={() => handleClick(index)} className={`px-10 py-3 whitespace-nowrap ${added === false ? "bg-orange-600" : "bg-yellow-400"} absolute -bottom-3 left-1/2 -translate-x-[50%] text-white text-xs rounded-full`}>
        {added === false ? "Add To Favorites" : "Added"}
      </button>
    </div>
  );
}

export default Card;
