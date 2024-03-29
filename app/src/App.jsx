import React, { useState } from 'react';
import Card from './Components/Card';

function App() {
  const data = [
    { name: "John", profession: "Painter", image: "https://images.unsplash.com/photo-1633887091219-265c29eac4cd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false },
    { name: "Subham", profession: "Coder", image: "https://media.istockphoto.com/id/1204374053/photo/profile-side-view-portrait-of-his-he-nice-attractive-skilled-focused-serious-guy-writing.jpg?s=2048x2048&w=is&k=20&c=lvlmCuevpv8nMKREy56iTX-DfzSuZ3a7VD6nKVCGjV4=", friends: false },
    { name: "Rahul", profession: "Artist", image: "https://images.unsplash.com/photo-1628359355624-855775b5c9c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false },
    { name: "Rabi", profession: "Dancer", image: "https://plus.unsplash.com/premium_photo-1682089706055-d5ef14dc14e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFuY2VyfGVufDB8fDB8fHww", friends: false }
  ];

  const [realdata, setrealdata] = useState(data);

  const handleClick = (changingindex) => {
    setrealdata((previous) => {
      return previous.map((item, index) => {
        if (index === changingindex) {
          return { ...item, friends:!item.friends };
        }
        return item;
      });
    });
  };

  return (
    <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
      {realdata.map((item, index) => (
        <Card key={index} index={index} handleClick={handleClick} values={item} />
      ))}
    </div>
  );
}

export default App;
