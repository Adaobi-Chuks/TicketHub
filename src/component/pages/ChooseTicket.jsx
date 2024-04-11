import React, { useState } from 'react';
import IMG from '../../assets/bg_image.png';
import { useNavigate } from 'react-router-dom';
import { BsTicketPerforated } from "react-icons/bs";


const ChooseTicket = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='absolute bottom-0 right-0'>
        <img src={IMG} className='w-[30rem] h-[20rem]' alt='Background Image' />
      </div>

      <div className=" flex sm:flex-row items-center justify-center mx-20 ">        
        
        <div className='bg-[#142D8E60] mt-[8rem] justify-center items-center w-[40rem] h-[35rem] px-20 py-7 rounded-md'>
        <div className='flex flex-row gap-5 justify-center items-center mt-[10rem]'>
          <button onClick={() => navigate('/GroupTicket')} className='bg-[#5D6AAA] rounded-md p-10 '>            
            <div className='grid justify-center items-center'>
            <div className='flex justify-center items-center'>
            <BsTicketPerforated size={23} color='white'/>
                </div>          
            <p className='text-white'>Group Ticket</p>
            </div>
         </button>
          <button onClick={() => navigate('/SingleTicket')}  className='border rounded-md p-10 ' >            
            <div className='grid justify-center items-center'>
            <div className='flex justify-center items-center'>
              <BsTicketPerforated size={23} color='white'/>
              </div>            
            <p className='text-white text-md'>Single Ticket</p>
            </div>            
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ChooseTicket
