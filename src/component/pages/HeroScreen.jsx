import React from 'react'
import IMG1  from '../../assets/hero-image1.png'
 
const HeroScreen = () => {
  return (
    <section id="home" className="min-h-screen  flex  md:flex-row pt-10 grid-col-2 items-center justify-center">
       <div className='grid justify-center items-center w-[80rem]'>
      <div className='max-w-full mx-auto grid md:grid-cols-2 gap-16 px-20 justify-center items-center  pt-[5rem]'>
      <div className='md:w-[40rem]'>
        <h1 className='md:font-bold text-4xl text-start text-[#fff]'>Create any event in minutes.</h1>
        <p className='md:pt-4 text-start text-[#fff]'>Simple to use tools for a successful and profitable event</p>
        <button className='flex items-center justify-center mt-10 bg-gradient-to-r from-cyan-500 to-blue-500  w-[10rem] h-[3rem] text-[#fff] font-semibold rounded-md text-center'>Get Stared</button>
      </div>
        <img src={IMG1}  alt='' className="md:w-[30rem] h-[25rem] object-contain"/>
      </div>
      
      </div>
    </section>
  )
}

export default HeroScreen
