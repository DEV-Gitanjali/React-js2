import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import User from './Components/User';

const App = () => {
  return (
    <>
      <nav className='mt-10 flex justify-center gap-10'>
        <Link to="/Home">Home</Link>
        <Link to="/User">User</Link>
        <Link to="/About">About</Link>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/User" element={<User />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
