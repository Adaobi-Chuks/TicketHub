import React from 'react'
import IMG1  from '../../assets/hero-image2.png'

const Management = () => {
  return (
    <section id="home" className="min-h-screen  flex  md:flex-row grid-col-2 items-center justify-center">
    <div className='grid justify-center items-center w-[80rem]'>
   <div className='max-w-full mx-auto grid md:grid-cols-2 gap-24 px-20 justify-center items-center '>
   <div className='md:w-[30rem]'>
     <h1 className='md:font-bold text-4xl text-start text-[#fff]'>Event management with ease. From invite, to RSVP, to showtime.</h1>
     <p className='md:pt-4 text-start text-[#ffff]'>Start from a ready-made template, and customize your event website and registration or RSVP experience from end-to-end. Track event invitees from invitation with RSVP link to registration to check-in.</p>
     
   </div>
     <img src={IMG1}  alt='' className="md:w-[40rem] h-[40rem] object-contain"/>
   </div>
   
   </div>
 </section>
  )
}

export default Management
