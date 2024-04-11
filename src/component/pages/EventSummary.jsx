import React, { useState, useEffect } from 'react';
import IMG from '../../assets/bg_image.png'

const EventSummary = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem('user');
        if (storedData) {
            setUserData(JSON.parse(storedData));
        }
    }, []);
  return (
    <div>
    <div className='absolute bottom-0 right-0'>
      <img src={IMG} className='w-[30rem] h-[20rem]'/>
    </div>


    <div className=" flex  sm:flex-row items-center justify-center mx-20">
      <div className='  mx-auto grid sm:flex-rows-2  justify-center items-center'>
    <div  className=' bg-[#142D8E50] mt-[8rem] justify-center items-center   h-[35rem] px-20 py-7'>

        {userData && (
        <div className='w-[50rem] mx-auto grid md:grid-cols-2 gap-16 justify-center items-center  pt-[5rem]'>  
            

          <div className='border-r-2 p-8 border-white gap-2'>
              <p className='text-white font-bold text-2xl'>Event Summary</p>

              <div className='my-10 gap-4 grid'>
                  <p className='text-white font-bold text-lg'>{userData.eventName}</p>
                  <p className='text-white font-bold text-lg'>{userData.eventType}</p>

                  <div className='flex justify-between '> 
                      <p className='text-white'>Start Date :</p>
                      <p className='text-white'>{userData.startDate}</p>
                  </div>

                  <div className='flex justify-between '> 
                      <p className='text-white'>End Date :</p>
                      <p className='text-white'>{userData.endDate}</p>
                  </div>
                  <div className='flex justify-between '> 
                      <p className='text-white'>Location :</p>
                      <p className='text-white'>{userData.location}</p>
                  </div>
              </div>

                <div>
                <p className='text-[white]'>Event Description</p>
                <p className='text-[white]'>{userData.eventDes}</p>
                </div>
              
          </div>  
            
          <div className=' border-white gap-2'>
              <div className='my-10 gap-4 grid'>
                  <p className='text-white font-bold text-md'>Social URL</p>

                  <div className='flex justify-between '> 
                      <p className='text-white'>Your URL:</p>
                      <p className='text-white'>{userData.yourUrl}</p>
                  </div>

                  <div className='flex justify-between '> 
                      <p className='text-white'>Linkedin URL:</p>
                      <p className='text-white'>{userData.linkedinUrl}</p>
                  </div>

                  <div className='flex justify-between '> 
                      <p className='text-white'>Twitter URL:</p>
                      <p className='text-white'>{userData.twitterUrl}</p>
                  </div>

                  <div className='flex justify-between '> 
                      <p className='text-white'>Instagram URL:</p>
                      <p className='text-white'>{userData.instagramUrl}</p>
                  </div>
              </div>
                  <div className='flex gap-3'>
                  <button onClick={() => navigate('/CreateEvent')}  className='text-[#0D2986] bg-[white] w-[10rem] py-2'>Cancel</button>
                  <button onClick={() => navigate('/Summary')}  className='text-[white] bg-[#0D2986] w-[10rem] py-2'>Proceed</button>
                  </div>
              
          </div>   

        </div>
    )} 


        </div>  
        </div>
     </div>
  </div>
  )
}

export default EventSummary
