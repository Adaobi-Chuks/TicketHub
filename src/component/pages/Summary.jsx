import React,{useState} from 'react';
import IMG from '../../assets/bg_image.png'
import { BsQrCode } from "react-icons/bs";

const Summary = () => {
  return (
    <div>
      <div className='absolute bottom-0 right-0'>
        <img src={IMG} className='w-[30rem] h-[20rem]' alt='Background Image' />
      </div>

      <div className="flex sm:flex-row items-center justify-center mx-20">
        <div className='mx-auto grid sm:flex-rows-2 justify-center items-center'>
          <div className='bg-[#142D8E60] mt-[8rem] justify-center items-center w-[40rem] h-[35rem] px-20 py-7 rounded-md'>

            <div className='grid justify-center mt-20'>
                <p className='text-white font-bold text-center text-2xl'>Welcome!</p>    
                <p className='text-white font-semibold text-center text-xl'>We’re glad to have you here</p>      
                <p className='text-white text-center text-md'>Scan code below</p>  
            </div>
                <div className='flex justify-center mt-[2rem]' >
                <BsQrCode size={110}  className='bg-white p-4'/>
                </div>
            <div className=' mt-20'>
            <div className='flex justify-between '> 
               <p className='text-white'>Registration ID :</p>
               <p className='text-white'>NYSCT6534267</p>
             </div>
             <div className='flex justify-between '> 
               <p className='text-white'>Amount:</p>
               <p className='text-white'>$1000</p>
             </div>
             <div className='flex justify-between '> 
               <p className='text-white'>Guest:</p>
               <p className='text-white'>1</p>
             </div>
            </div>
                       
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
