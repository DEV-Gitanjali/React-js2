
import { Link ,NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='mt-10 flex justify-center gap-10'>
      <NavLink 
      style={(e)=>{
        console.log(e);

        return {
            object:e.isActive?"tomato": "",
        }
      }}
       to="/">Home</NavLink>
      <NavLink
      style={(e)=>{
        console.log(e);

        return {
            object:e.isActive?"tomato": "",
        }
      }}
       to="/User">
        User</NavLink>



      <NavLink 

style={(e)=>{
    console.log(e);

    return {
        object:e.isActive?"tomato": "",
    }
  }}
      
      to="/About">About</NavLink>
    </nav>
  );
};

export default Nav;
