import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import User from './Components/User';
import Nav from './Components/Nav';

const App = () => {
  return (
    <>
      <Nav/>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/User" element={<User />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
