import React,{useState} from 'react';
import IMG from '../../assets/bg_image.png';
import { useNavigate } from 'react-router-dom';

const SingleTicket = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    ticketName:'',
    ticketPrice: '',
    ticketPurchase: '',
    ticketDes: '',
    customInfo: ''
  });

   const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!input.ticketName.trim()) {
      errors.ticketName = 'Ticket Name is required';
      isValid = false;
    }

    if (!input.ticketPrice.trim()) {
      errors.ticketPrice = 'Ticket Price is required';
      isValid = false;
    }

    if (!input.ticketPurchase.trim()) {
      errors.ticketPurchase = 'Ticket Purchase Limit is required';
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
          navigate('/CheckOut', { state: input });
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
              <button onClick={() => navigate('/BuyTicket')} className='bg-white text-md text-[#0D2986] rounded-md px-3 py-1'>Cancel</button>
              <button onClick={handleSubmit}  className='bg-[#0D2986] text-md text-[#fff] rounded-md px-4 py-1'>Save</button>
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
                id="ticketName"
                type="text"
                placeholder="Ticket Name"
                name="ticketName"
                value={input.ticketName}
                onChange={handleChange}
              />
              {errors.ticketName && <p className='text-red-500 text-xs italic'>{errors.ticketName}</p>}
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="eventName">
              Ticket Price *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="ticketPrice"
                type="number"
                placeholder="Ticket Price"
                name="ticketPrice"
                value={input.ticketPrice}
                onChange={handleChange}
              />
              {errors.ticketPrice && <p className='text-red-500 text-xs italic'>{errors.ticketPrice}</p>}
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="eventName">
              Ticket Purchase Limit *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="ticketPurchase"
                type="number"
                placeholder="5"
                name="ticketPurchase"
                value={input.ticketPurchase}
                onChange={handleChange}
              />
              {errors.ticketPurchase && <p className='text-red-500 text-xs italic'>{errors.ticketPurchase}</p>}
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="eventName">
              Ticket description *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="ticketDes"
                type="text"
                placeholder="Ticket description"
                name="ticketDes"
                value={input.ticketDes}
                onChange={handleChange}
              />
             </div>

             <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="eventName">
              Custom Information *
              </label>
              <input
                className="shadow appearance-none border bg-white text-sm  rounded w-[28rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="customInfo"
                type="text"
                placeholder="Custom Information"
                name="customInfo"
                value={input.customInfo}
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
