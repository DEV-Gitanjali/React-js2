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

  // beginner level usestate
  
  // const [score, setscore] = useState(100);

  // const [banned, setbanned] = useState(false);
 

   
  // return (
  //   <div>
  //    <h1 className='ml-20'>{banned.toString()}</h1>
  //     <button  onClick={()=> setbanned(!banned)}className='px-2 py-1  ml-20 rounded-full  text-xs bg-blue-500 text-white'>ban  karo</button> 
      

       
  //   </div>
  // )

// intermediate level
  // const [val,setVal]=useState(12);

  // return (
  //   <div className='p-4'>
  //      <h1>{val}</h1>
  //      <button onClick={()=>setVal((prev)=>prev+1)} className='px-3 py-1 bg-blue-400 rounded-full'>change karo</button>
  //   </div>
  // )


  // advanced level

//   const [val,setVal]=useState({name:"subham" , isBanned:false});
// return(
//   <div className='p-4 '>
//     <h1>name:{val.name}</h1>
//     <h1>banned:{val.isBanned.toString()}</h1>
//     <button onClick = {()=>setVal({...val, isBanned:!val.isBanned})} className={`px-3 py-1 ${ val.isBanned ? "bg-blue-500" : "bg-red-500"} rounded-full text-white`}>change</button>

//   </div>
// )

// const [val,setval] = useState([1,2,3,4,4,5,6,7])
//  return(
//    <div className='p-5'>
//      {val.map(item=><h1>{item}</h1>)}
//      <button onClick = {()=>setVal(()=>val.filter((item,index)=> index != val.length-1))} className='px-3 py-1 bg-blue-500 rounded-full text-white'>click</button>

//    </div>
//  )

// filter
// const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7]);

// return (
//   <div className='p-5'>
//     {val.map((item) => (
//       <h1 key={item}>{item}</h1>
//     ))}

//     <button
//       onClick={() => setVal(val.filter((item, index) => index !== 2))}
//       className='px-3 py-1 bg-blue-500 rounded-full text-white'
//     >
//       click
//     </button>
//   </div>
// );

// array addition using filter

// const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7]);

// return (
//   <div className='p-5'>
//     {val.map((item) => (
//       <h1 key={item}>{item}</h1>
//     ))}

//     <button
//       onClick={() => setVal(val.filter(item => item%2 !== 0))}
//       className='px-3 py-1 bg-blue-500 rounded-full text-white'
//     >
//       click
//     </button>
//   </div>
// );
const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7]);

return (
  <div className='p-5'>
    {val.map((item) => (
      <h1 key={item}>{item}</h1>
    ))}

    <button
      onClick={() => setVal([...val, 7])}
      className='px-3 py-1 bg-blue-500 rounded-full text-white'
    >
      click
    </button>
  </div>
);





}

export default App
