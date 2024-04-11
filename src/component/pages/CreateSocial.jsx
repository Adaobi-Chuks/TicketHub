import React,{useState} from 'react';
import IMG from '../../assets/bg_image.png';
import { useNavigate } from 'react-router-dom';

const CreateSocial = () => {
  const navigate = useNavigate();
    const [input, setInput] = useState({
        yourUrl:'',
        linkedinUrl: '',
        twitterUrl: '',
        instagramUrl: ''
      });

      const [errors, setErrors] = useState({});

      const validate = () => {
        let errors = {};
        let isValid = true;
    
        if (!input.yourUrl.trim()) {
          errors.yourUrl = 'Your URL is required';
          isValid = false;
        }
    
        if (!input.linkedinUrl.trim()) {
          errors.linkedinUrl = 'Linkedin URL is required';
          isValid = false;
        }
    
        if (!input.twitterUrl.trim()) {
          errors.twitterUrl = 'Twitter URL is required';
          isValid = false;
        }
    
    
        if (!input.instagramUrl.trim()) {
          errors.instagramUrl = 'Instagram URL is required';
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
              navigate('/CreateImage', { state: input });
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
      <div  className=' bg-[#142D8E50] mt-[5rem] justify-center items-center  w-[40rem] h-[40rem] px-20 py-7'>
          <div className='flex justify-between '>            
            <h1 className='font-bold text-lg text-white'>Create  Event</h1>
            <div className='flex gap-2'>
              <button onClick={() => navigate('/CreateTime')} className='bg-white text-md text-[#0D2986] rounded-md px-3 py-1'>Cancel</button>
              <button onClick={handleSubmit} className='bg-[#0D2986] text-md text-[#fff] rounded-md px-4 py-1'>Save</button>
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
                id="yourUrl"
                type="text"
                placeholder="Your URL "
                name="yourUrl"
                value={input.yourUrl}
                onChange={handleChange}
              />
              {errors.yourUrl && <p className='text-red-500 text-xs italic'>{errors.yourUrl}</p>}
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="eventName">
              Linkedin URL  *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="linkedinUrl"
                type="text"
                placeholder="Linkedin URL "
                name="linkedinUrl"
                value={input.linkedinUrl}
                onChange={handleChange}
              />
              {errors.linkedinUrl && <p className='text-red-500 text-xs italic'>{errors.linkedinUrl}</p>}
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm  mb-2" htmlFor="eventName">
              Twitter URL *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="twitterUrl"
                type="text"
                placeholder="Twitter URL"
                name="twitterUrl"
                value={input.twitterUrl}
                onChange={handleChange}
              />
              {errors.twitterUrl && <p className='text-red-500 text-xs italic'>{errors.twitterUrl}</p>}
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm  mb-2" htmlFor="eventName">
              Instagram URL *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="instagramUrl"
                type="text"
                placeholder="Instagram URL"
                name="instagramUrl"
                value={input.instagramUrl}
                onChange={handleChange}
              />
              {errors.instagramUrl && <p className='text-red-500 text-xs italic'>{errors.instagramUrl}</p>}
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
