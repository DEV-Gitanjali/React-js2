
import { Link ,NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='mt-10 flex justify-center gap-10'>
      <NavLink 
      style={(e)=>{
        

        return {
            color:e.isActive?"tomato": "",
            fontWeight:e.isActive? "bold" : "" ,
        };
      }}
       to="/">Home</NavLink>
      <NavLink
      style={(e)=>{

        return {
            color:e.isActive?"tomato": "",
        };
      }}
       to="/User">
        User</NavLink>



      <NavLink 

className={(e)=>{
    

    return [
        e.isActive ? "text-red-200" : "",
        e.isActive ? "text-bold" : "" ,
    ].join(" ");
  }}
      
      to="/About">About</NavLink>
    </nav>
  );
};

export default Nav;
