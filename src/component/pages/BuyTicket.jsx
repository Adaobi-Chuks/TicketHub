import React, { useState } from 'react';
import IMG from '../../assets/bg_image.png';
import { useNavigate } from 'react-router-dom';

const ticket = [
  {
    name: 'Oracle Nft ',
    status: 'Buy'
  },
  {
    name: 'Silicon  Nft  Event',
    status: 'Buy'
  },
  {
    name: 'Oracle Nft ',
    status: 'Buy'
  }
]
const BuyTicket = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    eventName:'',
    });

    const handleChange = (e) => {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
    };

  return (
    <div>
      <div className='absolute bottom-0 right-0'>
        <img src={IMG} className='w-[30rem] h-[20rem]' alt='Background Image' />
      </div>

      <div className="flex sm:flex-row items-center justify-center mx-20">
        <div className='mx-auto grid sm:flex-rows-2 justify-center items-center'>
          <div className='bg-[#142D8E60] mt-[8rem] justify-center items-center w-[40rem] h-[35rem] px-20 py-7 rounded-md'>

            <div className='grid justify-center mt-20'>

            <div className='flex justify-centre items-center '>
              <div className='flex justify-center'>
                <div>
                <input
                className="shadow appearance-none border bg-white text-sm pl-10 rounded-l-2xl w-[18rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="eventName"
                type="text"
                placeholder="find your  event......"
                name="eventName"
                value={input.eventName}
                onChange={handleChange}
              />
                </div>
                <button className='text-sm text-white rounded-r-2xl bg-[#0D2986] px-5'>Search</button>
             
              </div>


            </div>
            </div>

            <div className='grid justify-center mt-20'>
            <div className=' w-[25rem] '>
              <p className='text-2xl font-bold text-white'>Live event</p>
              {ticket.map(({name,status}, index) => (
                <ul key={index} className='flex justify-between text-white text-md mt-5'>
                  <li>{name}</li>
                  <button onClick={() => navigate('/ChooseTicket')} className='text-green-600'>{status}</button>
                </ul>
              ))}
            </div> 
            </div>
                       
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyTicket
