import React from 'react';

function Card({ values, handleClick, index }) {
  const { name, image, profession, Friends } = values;

  return (
    <div className='w-52 bg-zinc-200 rounded overflow-hidden'>
      <div className='w-full h-32 bg-sky-200'>
        <img className='w-full h-32 object-cover object-center' src={image} alt='' />
      </div>
      <div className='w-full p-3'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h5 className='text-xs'>{profession}</h5>
        <button onClick={()=> handleClick(index)} className='mt-4 px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md'>
          {Friends ? "Friends" : "Add friend"}
        </button>
      </div>
    </div>
  );
}

export default Card;
