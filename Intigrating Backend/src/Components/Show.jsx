import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Show = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
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
