import React from 'react'
import IMG1  from '../../assets/hero-image3.png'

const Custom = () => {
  return (
    <section  className="min-h-screen  flex md:flex-row grid-col-2 items-center justify-center">
    <div className='grid justify-center items-center w-[80rem]'>
   <div className='max-w-full mx-auto grid md:grid-cols-2 gap-16 px-20 justify-center items-center '>
   <img src={IMG1}  alt='' className="md:w-[30rem] h-[25rem] object-contain"/>
   <div className='md:w-[40rem]'>
     <h1 className='md:font-bold text-4xl text-start text-[#fff]'>Create brilliantly customizable event registration and online RSVP forms.</h1>
     <p className='md:pt-4 text-start text-[#fff]'>From themes to layout, custom questions to secondary events, online payments to online invitations, RSVPify gives you complete control over your entire event registration and RSVP form.</p>    
   </div>     
   </div> 
   
   </div>
 </section>
  )
}

export default Custom
