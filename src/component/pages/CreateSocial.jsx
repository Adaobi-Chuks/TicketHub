import React,{useState} from 'react';
import IMG from '../../assets/bg_image.png'

const CreateSocial = () => {
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
              <p className='bg-white text-md text-[#0D2986] rounded-md px-3 py-1'>Cancel</p>
              <p className='bg-[#0D2986] text-md text-[#fff] rounded-md px-4 py-1'><a href='/CreateImage'>Save</a></p>
            </div>                     
          </div>

          <div >
            <p className='font-bold  text-white my-10'>Social details</p>

            <div>

            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="eventName">
              Your URL  *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="eventName"
                type="text"
                placeholder="Your URL "
                name="eventName"
                value={input.eventName}
                onChange={handleChange}
              />
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="eventName">
              Linkedin URL  *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="eventName"
                type="text"
                placeholder="Linkedin URL "
                name="eventName"
                value={input.eventName}
                onChange={handleChange}
              />
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm  mb-2" htmlFor="eventName">
              Twitter URL *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="eventName"
                type="text"
                placeholder="Twitter URL"
                name="eventName"
                value={input.eventName}
                onChange={handleChange}
              />
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm  mb-2" htmlFor="eventName">
              Instagram URL *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="eventName"
                type="text"
                placeholder="Instagram URL"
                name="eventName"
                value={input.eventName}
                onChange={handleChange}
              />
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm  mb-2" htmlFor="eventName">
              Facebook URL *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="eventName"
                type="text"
                placeholder="Facebook URL"
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

export default CreateSocial
