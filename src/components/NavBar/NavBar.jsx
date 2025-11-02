import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './NavBar.css';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { auth } from '../../firebase/Firebase.init';

const NavBar = () => {

  const {user, signOutUser} = use(AuthContext);

  const handleSignOut = () =>{
    signOutUser(auth)
    .then(() =>{

    })
    .catch(error =>{
      console.log(error)
    })
  }
  

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>

        {
          user && <>
                      <li><NavLink to="/orders">Orders</NavLink></li>
                      <li><NavLink to="/profile">Profile</NavLink></li>
                      

          </>
        }
        
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <NavLink to="/" className="btn btn-ghost text-xl hover:text-2xl hover:text-green-200">TMT BROWS</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <a href="https://www.facebook.com/TMTBrows" className="btn hover:text-2xl hover:text-red-500">Follow?</a>
    
    {user ? <a onClick={handleSignOut} className='btn'>Sign Out</a> : <Link className='btn' to="/login"> <span className='hover:text-6xl'>?😒</span></Link> }
  </div>
</div>
    );
};

export default NavBar;