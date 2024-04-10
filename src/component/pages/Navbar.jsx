import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; 
// Import useAuth hook

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const { isLoggedIn, logout } = useAuth(); // Use the isLoggedIn state and logout function from useAuth hook

  const handleNav = () => {
    setNav(!nav);
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
          
          <div onClick={handleNav} className='flex gap-2'>
          <AiOutlineUser size={30} className='bg-white p-2 rounded-2xl'/>
          
        {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      

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

      <div onClick={handleNav} className='block md:hidden text-white'>
        {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

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
