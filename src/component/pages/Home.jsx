import React, { useState } from 'react';
import IMG from '../../assets/bg_image.png';
import { MdAdd } from "react-icons/md";
import { BsTicketPerforated } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='absolute bottom-0 right-0'>
        <img src={IMG} className='w-[30rem] h-[20rem]' alt='Background Image' />
      </div>

      <div className="flex sm:flex-row items-center justify-center mx-20 ">
        <div className='flex flex-row gap-5 justify-center items-center mt-[20rem]'>
          <button onClick={() => navigate('/CreateEvent')}  className='bg-[#5D6AAA] rounded-md p-10 '>
           <div className='grid justify-center items-center'>
            <div className='flex justify-center items-center'>
                <MdAdd size={23} color='white'/>
                </div>
            
            <p className='text-white'>Create Event</p>
            </div>
           </button>


          <button onClick={() => navigate('/BuyTicket')} className='border rounded-md p-10 '>            
            <div className='grid justify-center items-center'>
            <div className='flex justify-center items-center'>
              <BsTicketPerforated size={23} color='white'/>
              </div>            
            <p className='text-white text-md'>Buy Ticket</p>
            </div>            
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
