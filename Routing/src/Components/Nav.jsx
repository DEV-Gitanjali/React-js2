import React from 'react'
import { Link } from 'react-router-dom'

const Nav=()=> {
  return (
    <nav className='mt-10 flex justify-center gap-10'>
        <Link to="/Home">Home</Link>
        <Link to="/User">User</Link>
        <Link to="/About">About</Link>
      </nav>
  );
};

export default Nav;
