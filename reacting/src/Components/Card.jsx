import React from 'react';

function Card() {
  const data = [
    {
      image: 'https://images.unsplash.com/photo-1709656541505-36bc9c102434?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Engagged',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eveniet cumque consectetur asperiores'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1709065154533-d53fb085f2f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Couple pic ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eveniet cumque consectetur asperiores'
    },
    {
      image: 'https://images.unsplash.com/photo-1535615615570-3b839f4359be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Heart',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eveniet cumque consectetur asperiores'
    }
  ];

  return (
    <div className='w-full h-screen flex  items-center justify-center  gap-10 bg-zinc-200'>
      {data.map((elem, index) => (
        <div key={index} className='w-full flex items-center justify-center'>
          <div className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
            <div className='w-full h-40 bg-zinc-300'>
              <img className='w-full h-full object-cover' src={elem.image} alt="" />
            </div>
            <div className='w-full px-3 py-4'>
              <h2 className='font-semibold'>{elem.name}</h2>
              <p className='px-5 py-2'>{elem.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
