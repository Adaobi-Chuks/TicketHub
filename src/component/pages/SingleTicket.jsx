import React,{useState} from 'react';
import IMG from '../../assets/bg_image.png'
const SingleTicket = () => {

  const [input, setInput] = useState({
    eventName:'',
    email: '',
    phoneNumber: '',
    password: ''
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
      <img src={IMG} className='w-[30rem] h-[20rem]'/>
    </div>


    <div className=" flex  sm:flex-row items-center justify-center mx-20">
      <div className='  mx-auto grid sm:flex-rows-2  justify-center items-center'>
      <div  className=' bg-[#142D8E50] mt-[8rem] justify-center items-center  w-[40rem] h-[35rem] px-20 py-7'>
          <div className='flex justify-between '>            
            <h1 className='font-bold text-lg text-white'>Create  Event</h1>
            <div className='flex gap-2'>
              <button  className='bg-white text-md text-[#0D2986] rounded-md px-3 py-1'>Cancel</button>
              <button  className='bg-[#0D2986] text-md text-[#fff] rounded-md px-4 py-1'><a href='/CheckOut '>Save</a></button>
            </div>                     
          </div>

          <div >
            <p className='font-bold  text-white my-10'>Single tickets</p>

            <div>

            <div className="mb-4">
              <label className="block text-white text-sm  mb-2" htmlFor="eventName">
              Ticket Name *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="eventName"
                type="text"
                placeholder="Ticket Name"
                name="eventName"
                value={input.eventName}
                onChange={handleChange}
              />
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="eventName">
              Ticket Price *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="eventName"
                type="number"
                placeholder="Ticket Price"
                name="eventName"
                value={input.eventName}
                onChange={handleChange}
              />
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="eventName">
              Ticket Purchase Limit *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="eventName"
                type="number"
                placeholder="5"
                name="eventName"
                value={input.eventName}
                onChange={handleChange}
              />
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="eventName">
              Ticket description *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="eventName"
                type="text"
                placeholder="Ticket description"
                name="eventName"
                value={input.eventName}
                onChange={handleChange}
              />
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="eventName">
              Custom Information *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="eventName"
                type="text"
                placeholder="Custom Information"
                name="eventName"
                value={input.eventName}
                onChange={handleChange}
              />
             </div>


            </div>

            

          </div>
          </div>  
          </div>
       </div>
  </div>
  )
}

export default SingleTicket
