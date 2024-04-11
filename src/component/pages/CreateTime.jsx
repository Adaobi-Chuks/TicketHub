import React,{useState} from 'react';
import { SelectTimezone } from "reactjs-timezone-select";
import IMG from '../../assets/bg_image.png'
import { useNavigate } from 'react-router-dom';

const CreateTime = () => {
  const navigate = useNavigate();
    const [input, setInput] = useState({
        startDate:'',
        endDate: '',
        location: ''        
      });
      
      const [value, setValue] = useState("WestAfrica/Nigeria");

     
    
     
    
      const handleSubmit = async (e) => {
        e.preventDefault();
          try {
              localStorage.setItem('user', JSON.stringify(input));
              navigate('/CreateSocial', { state: input });
              console.log('User registered successfully');
            } catch (error) {
              console.error('Error registering user:', error);
            } 
          } 
          
      
    
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
                  <button onClick={() => navigate('/CreateEvent')}  className='bg-white text-md text-[#0D2986] rounded-md px-3 py-1'>Cancel</button>
                  <button onClick={handleSubmit} className='bg-[#0D2986] text-md text-[#fff] rounded-md px-4 py-1'>Save</button>
                </div>                     
              </div>
    
              <div >
                <p className='font-bold  text-white my-10'>When is your event? </p>
    
                <div>
    
                <div className="mb-4">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="eventName">
                  
                  </label>
                  <SelectTimezone
                   name="Custom timezone"
                   label="Select time zone *"
                   value={value}
                   onChange={({value }) => setValue(value)}
                   containerStyles={{ width: 450, backgroundColor:'transparent' }}
                   labelStyles={{ color: "white" }}
                    optionLabelFormat={(timezone) =>
                     `${timezone.name} - ${timezone.abbreviation}`
                   }
                   defaultToSystemTimezone
                 />
                 </div>

                 <div className="mb-4">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="eventName">
                  Start Date *
                  </label>
                  <input
                    className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="startDate"
                    type="date"
                    placeholder="Start Date"
                    name="startDate"
                    value={input.startDate}
                    onChange={handleChange}
                  />
                  
                 </div>
    
                 <div className="mb-4">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="eventName">
                  End Date *
                  </label>
                  <input
                    className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="End Date"
                    type="date"
                    placeholder="End Date"
                    name="endDate"
                    value={input.endDate}
                    onChange={handleChange}
                  />
                 
                 </div>
    
                 <div className="mb-4">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="eventName">
                  Location *
                  </label>
                  <input
                    className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    id="location"
                    type="text"
                    placeholder="location"
                    name="location"
                    value={input.location}
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

export default CreateTime
