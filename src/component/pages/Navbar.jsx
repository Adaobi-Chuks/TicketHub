import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };
  return (
    <div className=' fixed w-full h-[5rem]  bg-[#232323] px-10 flex items-center justify-between border-b-2 border-white'>
    <div className='w-[10rem] onClick='>
    <a href='/'>
      <img src={Logo} alt='/' className='w-[6rem] h-[4rem]'/></a>
    </div>
    <div className='flex gap-8'>
      <ul className='text-white gap-8 items-center  md:flex hidden'>
        <li className=' text-white '><a href='/Login'>Login</a></li>
        <li className='bg-[#0D2986] p-2 text-white rounded-sm'><a href='/Register'>Sign Up</a></li>
      </ul>
      <div className='grid'>
        
      </div>
    </div>

    <div onClick={handleNav} className='block md:hidden text-white'>
      {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} /> }
    </div>

    <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-[60%]  border-r-gray-900 bg-[#110eca] z-10 ease-in-out duration-500': 'fixed left-[-400%]'}>
       <ul className=' text-color grid items-center justify-center uppercase pt-24 '>
       <li className=' text-white '><a href='/Login'>Login</a></li>
        <li className='bg-[#0D2986] p-2 text-white rounded-sm'><a href='/Register'>Sign Up</a></li>
       </ul>
    </div>
 
  </div>
  )
}

export default Navbar
