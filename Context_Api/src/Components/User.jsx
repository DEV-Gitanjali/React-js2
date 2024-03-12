import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/Context'

const User = () => {

  const {users, setusers} =UserContext(UserContext);

  
  return (
    <div>
     <h1 className="text-4xl">User List</h1>
     <div className='flex w-1/2 flex-col mg-10 gapy-10'> 
     {users.map(u)=>{

     <Link  className='p-3 bg-blue-100 w-full'>User name</Link>
     ))};

     </div>
    </div>
  )
}

export default User;
