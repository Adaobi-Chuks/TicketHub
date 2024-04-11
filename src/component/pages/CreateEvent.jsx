import React,{useState} from 'react';
import IMG from '../../assets/bg_image.png'
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    eventName:'',
    eventType: '',
    eventPattern: '',
    eventDes: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!input.eventName.trim()) {
      errors.eventName = 'Event Name is required';
      isValid = false;
    }

    if (!input.eventType.trim()) {
      errors.eventType = 'Event type is required';
      isValid = false;
    }

  

    if (!input.eventDes.trim()) {
      errors.eventDes = 'Event description is required';
      isValid = false;
    }

    

    setErrors(errors);
    return isValid;
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
       if (validate()) {
         try {
          localStorage.setItem('user', JSON.stringify(input));
          navigate('/CreateTime', { state: input });
          console.log('User registered successfully');
        } catch (error) {
          console.error('Error registering user:', error);
        } 
      } else {
        console.log("Form is invalid, please fix errors");
      }
      
  };

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
              <button onClick={() => navigate('/Home')}  className='bg-white text-md text-[#0D2986] rounded-md px-3 py-1'>Cancel</button>
              <button  onClick={handleSubmit} className='bg-[#0D2986] text-md text-[#fff] rounded-md px-4 py-1'>Save</button>
            </div>                     
          </div>

          <div >
            <p className='font-bold  text-white my-10'>Event Details</p>

            <div>

            <div className="mb-4">
              <label className="block text-white text-sm  mb-2" htmlFor="eventName">
              Event Name *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="eventName"
                type="text"
                placeholder="Event Name"
                name="eventName"
                value={input.eventName}
                onChange={handleChange}
              />
              {errors.eventName && <p className='text-red-500 text-xs italic'>{errors.eventName}</p>}
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="eventName">
              Event Type *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="eventType"
                type="text"
                placeholder="Event Type"
                name="eventType"
                value={input.eventType}
                onChange={handleChange}
              />
              {errors.eventType && <p className='text-red-500 text-xs italic'>{errors.eventType}</p>}
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="eventName">
              Event Pattern*
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="eventPattern"
                type="text"
                placeholder="Event Pattern"
                name="eventPattern"
                value={input.eventPattern}
                onChange={handleChange}
              />
             
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="eventName">
              Describe your event*
              </label>
              <textarea
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="eventName"
                type="text"
                placeholder="Describe your event"
                name="eventDes"
                value={input.eventDes}
                onChange={handleChange}
              />
              {errors.eventDes && <p className='text-red-500 text-xs italic'>{errors.eventDes}</p>}
             </div>


            </div>

            

          </div>
          </div>  
          </div>
       </div>
    </div>
  )
}

export default CreateEvent
