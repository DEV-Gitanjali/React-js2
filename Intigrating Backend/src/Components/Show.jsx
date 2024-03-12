import React, { useEffect, useState } from 'react';
import axios from '../Utils/axios';

export const Show = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    
    axios
      .get(products)
      .then((products) => {
        console.log(products.data);
        setProducts(products.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ul className='p-10'>
        {products.length > 0 ? (
          products.map((p) => (
            <li key={p.id} className="rounded mb-2 p-5 bg-red-200">
              {p.title}
            </li>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </ul>
    </>
  );
};
