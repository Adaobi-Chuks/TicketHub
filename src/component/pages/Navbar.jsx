import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; 
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";


const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [show, setShow] = useState(true);
   const { isLoggedIn, logout } = useAuth(); 

  const handleNav = () => {
    setNav(!nav);
  };


  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className='fixed w-full h-[5rem] bg-[#232323] px-10 flex items-center justify-between border-b-2 border-white'>
      <div className='w-[10rem]'>
        <a href='/'>
          <img src={Logo} alt='/' className='w-[6rem] h-[4rem]' />
        </a>
      </div>
      <div className='flex gap-8'>
        {isLoggedIn ? (
          
          <div onClick={handleShow} className='flex gap-2'>
          <AiOutlineUser size={30} className='bg-white p-2 rounded-2xl'/>
          
        {
        !show ? <MdArrowDropDown size={30} color='#fff'/>
         : <MdArrowDropUp size={30} color='#fff'/>
         }
        <div className={!show ? 'fixed right-10 top-[8%]  p-4  border-r-gray-900 bg-[#8a8a8a] z-10 ease-in-out duration-500' : 'fixed left-[-400%]'}>
        <ul className='text-color grid items-center justify-center uppercase gap-2'>
        <li className='text-white hover:bg-blue-500 p-1 rounded-md'>
    <NavLink to='/Home'>Home</NavLink>
  </li>
  <li className='text-white hover:bg-blue-500 p-1 rounded-md'>
    <NavLink to='/Account'>Account</NavLink>
  </li>
  <li className='text-white hover:bg-blue-500 p-1 rounded-md'>
    <NavLink to='/Checking'>Check-ins</NavLink>
  </li>
  <li className='text-white hover:bg-blue-500 p-1 rounded-md'>
    <NavLink to='/EventList'>Events</NavLink>
  </li>
  <li className='text-white hover:bg-blue-500 p-1 rounded-md'>
    <NavLink to='/Transaction'>Transactions</NavLink>
  </li>
  <li className='text-white hover:bg-blue-500 p-1 rounded-md'>
    <button onClick={logout}>Sign Out</button>
  </li>
</ul>

      </div>

          </div>
        ) : (
          <ul className='text-white gap-8 items-center md:flex hidden'>
            <li className='text-white'>
              <NavLink exact to='/Login'>
                Login
              </NavLink>
            </li>
            <li className='bg-[#0D2986] p-2 text-white rounded-sm'>
              <NavLink exact to='/Register'>
                Sign Up
              </NavLink>
            </li>
          </ul>
        )}
      </div>
        
      {!isLoggedIn && (
  <div onClick={handleNav} className='block md:hidden text-white'>
    {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
  </div>
)}


      <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-[60%]  border-r-gray-900 bg-[#110eca] z-10 ease-in-out duration-500' : 'fixed left-[-400%]'}>
        <ul className=' text-color grid items-center justify-center uppercase pt-24 '>
          <li className=' text-white '>
            <NavLink to='/Login'>Login</NavLink>
          </li>
          <li className='bg-[#0D2986] p-2 text-white rounded-sm'>
            <NavLink to='/Register'>Sign Up</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
