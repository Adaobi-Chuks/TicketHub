import React,{useState} from 'react';
import IMG from '../../assets/bg_image.png'
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className='absolute bottom-0 right-0'>
        <img src={IMG} className='w-[30rem] h-[20rem]'/>
      </div>


      <div className=" flex  sm:flex-row items-center justify-center mx-20">
      <div className='  mx-auto grid sm:flex-rows-2  justify-center items-center'>
      <div  className=' bg-[#142D8E50] mt-[8rem] justify-center items-center   h-[35rem] px-20 py-7'>
      <div className='w-[50rem] mx-auto grid md:grid-cols-2 gap-16 justify-center items-center  pt-[5rem]'>          

            <div className='border-r-2 p-8 border-white gap-2'>
                <p className='text-white font-bold text-2xl'>Check Out</p>

                <div className='my-10 gap-4 grid'>
                    <p className='text-white font-bold text-lg'>Oracle NFT Event</p>

                    <div className='flex justify-between '> 
                        <p className='text-white'>Date :</p>
                        <p className='text-white'>Wednesday, February 21 2024</p>
                    </div>

                    <div className='flex justify-between '> 
                        <p className='text-white'>Guest :</p>
                        <p className='text-white'>1</p>
                    </div>

                    <div className='flex justify-between '> 
                        <p className='text-white'>Amount :</p>
                        <p className='text-white'>$50</p>
                    </div>
                </div>

                <p className='text-[white]'>this payment requires you pay bank charges and no payment is refundable</p>
            </div>    
            <div className=' border-white gap-2'>
                <p className='text-white font-bold text-2xl'>Summary</p>

                <div className='my-10 gap-4 grid'>
                    <p className='text-white font-bold text-lg'>Oracle NFT Event</p>

                    <div className='flex justify-between '> 
                        <p className='text-white'>1 X Oracle NFT :</p>
                        <p className='text-white'>$55</p>
                    </div>

                    <div className='flex justify-between '> 
                        <p className='text-white'>Fees :</p>
                        <p className='text-white'>$5</p>
                    </div>

                    <div className='flex justify-between '> 
                        <p className='text-white'>Subtotal :</p>
                        <p className='text-white'>$55</p>
                    </div>

                    <div className='flex justify-between '> 
                        <p className='text-white'>Total :</p>
                        <p className='text-white'>$55</p>
                    </div>
                </div>
                    <div className='flex gap-3'>
                    <button onClick={() => navigate('/ChooseTicket')}  className='text-[#0D2986] bg-[white] w-[10rem] py-2'>Cancel</button>
                    <button onClick={() => navigate('/Summary')}  className='text-[white] bg-[#0D2986] w-[10rem] py-2'>Pay Now</button>
                    </div>
                
            </div>   

          </div>         
          </div>  
          </div>
       </div>
    </div>
  )
}

export default CheckOut
