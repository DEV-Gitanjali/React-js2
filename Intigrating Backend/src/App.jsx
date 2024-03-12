
import { Link, Route, Routes } from "react-router-dom";
import { Show } from "./Components/Show";
import Home from "./Components/Home";
import Services from "./Components/Services";



const App = () => {
  // const addProducts = () => {
  //   const api = "https://fakestoreapi.com/products";
  //   axios
  //     .post(api, {
  //       title: 'test product',
  //       price: 13.5,
  //       description: 'lorem ipsum set',
  //       image: 'https://i.pravatar.cc',
  //       category: 'electronic'
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

// console.log(products);

return (
    <div className="pt-[5%] pl-[5%]">
      <nav className="space-x-4  ">
        <Link to="/">Home</Link>
        <Link to="/Services">Services</Link>
        <Link to="/show">Show</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/Services" element={<Services />} />

         
      </Routes>

      {/* 
      <br /> 
      <br />
      
      <button
        onClick={addProducts}
        className="rounded px-5 py-2 bg-red-300 mt-6"
      >
        Save new product API
      </button>
      
      <hr className="my-10" /> 
      */}
    </div>
);
};
export default App;
