import React from 'react';

function Card({ values  }) {

  const {name,image ,profession} = values;
   return (
    <div className='w-52 bg-zinc-200 rounded overflow-hidden'>
      <div className='w-full h-32 bg-sky-200'>
        <img className='w-full h-32 object-cover object-center' src={image} alt='' />
      </div>
      <div className='w-full p-3'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h5 className='text-xs'>{profession}</h5>
        <button className='mt-4 px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md'>Add Friend</button>
      </div>
    </div>
  );
}

export default Card;
