
import Home from './Components/Home';
import About from './Components/About';
import User from './Components/User';
import { Routes, Route } from 'react-router-dom';

const Routing = () => {
  return (
    
      <Routes>

        <Route path="/Home" element={<Home />} />
        <Route path="/User" element={<User />} />
        <Route path="/About" element={<About />} />
        
      </Routes>
    
  );
};

export default Routing;
