import React, { useEffect, useState } from 'react';

const Services = () => {
  const [first, setFirst] = useState("this is normal data");
  const [second, setSecond] = useState("this is very large data");

  useEffect(() => {
    console.log("Services component is created");

    return () => {
      console.log("Services component is destroyed");
    };
  }, [second]);

  return (
    <div>
      <h1>{first}</h1>
      <button
        onClick={() => setFirst("Normal data has been changed")}
        className='rounded mb-10 bg-red-200 p-2'
      >
        Change Normal Data
      </button>

      <h1>{second}</h1>
      <button
        onClick={() => setSecond("Very large data has been changed")}
        className='rounded mb-10 bg-blue-200 p-2'
      >
        Change Large Data
      </button>
    </div>

  );
};

export default Services;
