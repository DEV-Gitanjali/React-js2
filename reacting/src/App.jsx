import React, { useState }  from "react";
// import Card from "./Components/Card";




// function App(){


//   return(
//     <>
//       {/* <Card/> */}
       
//     </>
//   );
// }
// export default App;



function App() {
  // const [score, setscore] = useState(100);

  // const [banned, setbanned] = useState(false);
 

   
  // return (
  //   <div>
  //    <h1 className='ml-20'>{banned.toString()}</h1>
  //     <button  onClick={()=> setbanned(!banned)}className='px-2 py-1  ml-20 rounded-full  text-xs bg-blue-500 text-white'>ban  karo</button> 
      

       
  //   </div>
  // )

  const [val,setVal]=useState(12);

  return (
    <div className='p-4'>
       <h1>{val}</h1>
       <button onClick={()=>setVal((prev)=>prev+1)} className='px-3 py-1 bg-blue-400 rounded-full'>change karo</button>
    </div>
  )
}

export default App
