import React from 'react'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import IMG1  from '../../assets/logo.png'

const Footer = () => {
  return (
    <section id="Steps" className="min-h-[10rem] flex py-10 md:flex-row grid-col-2 items-center justify-center ">
    <div className=' mx-auto grid md:grid-cols-2 gap-16 px-8 py-10 justify-center items-center border-t-2 border-white'>            
      <img src={IMG1} alt='/'  className='w-[6rem] h-[4rem]'/>
      <div className=' mx-auto grid md:grid-cols-3 gap-16  justify-between items-center'> 
      <div>
         <ul className='text-white'>
          <li className='font-bold'>Product</li>
          <li><a href='/'>Ticketing</a></li>
          <li>Box office</li>
          <li><a href='/Design'>Cashless payment</a></li>
        </ul>
      </div>
      <div>
        <ul className='text-white'>
          <li className='font-bold'>Company</li>
          <li><a href='/'>About Us</a></li>
          <li>FQA</li>
          <li>Blog</li>
          
        </ul>
      </div>
      <div>
      <p className='font-bold text-white text-2xl'>Follow Us</p>
        <ul className='text-white flex gap-8 py-3'>
          <li><BsLinkedin size={30}/></li>
          <li><AiFillTwitterCircle size={30}/></li>
          <li><BsFacebook size={30}/></li>
        </ul>
      </div>
      </div>
    </div>
  </section>
  )
}

export default Footer
