import axios from "axios";

const App = () => {

  const getproducts = () =>{

    const api = "https://fakeapi.platzi.com/en/rest/products";
    axios
    .get(api)
    .then((products)=>{

      console.log(products);
    })

    .catch((err)=>console.log(err));
  }
  return (
    <div className="pt-[5%] pl-[5%]">

      <button 
       onClick={getproducts}
      className="rounded px-5 py-2 bg-red-300">
        call product API
      </button>
      
    </div>
  )
}

export default App
