import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IMG from '../../assets/signup.png';
import logo from '../../assets/logo.png';

const Register = () => {
  const [input, setInput] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!input.fullName.trim()) {
      errors.fullName = 'Full Name is required';
      isValid = false;
    }

    if (!input.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!input.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (input.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setInput(JSON.parse(storedUser));
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
      <div className='flex justify-between items-center'>
        <div className='bg-[#0D2986] h-screen w-[45rem] sm:flex hidden'>
          <img src={logo} className='w-[4rem] h-[3rem] m-6' alt="Logo" />
          <div className='grid justify-center items-center ml-10 gap-4'>
            <img src={IMG} className='w-[30rem]' alt="Signup" />
          </div>
        </div>
        <div className='bg-[#232323] h-screen w-[50rem]'>
          <div className='grid justify-center items-center mt-20 gap-4'>

            <div className='py-6'>
              <h1 className='font-bold text-2xl text-white'>Register</h1>
              <p className=' text-sm text-white'>New here? Provide your details</p>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2">
                  Full Name
                </label>
                <input
                  className="shadow appearance-none bg-[#ededed50] text-sm w-[18rem] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={input.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <p className='text-red-500 text-xs italic'>{errors.fullName}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2">
                  Email address
                </label>
                <input
                  className="shadow appearance-none bg-[#ededed50] text-sm w-[18rem] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                />
                {errors.email && <p className='text-red-500 text-xs italic'>{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none bg-[#ededed50] text-sm w-[18rem] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                />
                {errors.password && <p className='text-red-500 text-xs italic'>{errors.password}</p>}
              </div>
              <button type="submit" className='flex w-[18rem] justify-center cursor-pointer items-center gap-6 bg-[#0D2986] px-4 py-2 text-[rgb(255,255,255)]'>
                Register
              </button>
            </form>

            <div>
              <p onClick={() => navigate("/Login")} className='text-[#ededed50] text-sm cursor-pointer text-center'>Already have an account? <span className='text-[#fff] text-sm font-bold'>Log In</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
