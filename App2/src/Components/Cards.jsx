import React from 'react';
import Card from './Card';

function Cards({ users, handleRemove }) {
  return (
    <div className='w-full max-h-96 min-h-96 p-4 flex justify-center gap-4 flex-wrap max-h-96 overflow-auto'>
      {users.map((user, index) => (
        <Card handleRemove={handleRemove} id={index} key={index} user={user} />
      ))}
    </div>
  );
}

export default Cards;
