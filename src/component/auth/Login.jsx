import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IMG from '../../assets/login.png';
import logo from '../../assets/logo.png';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!input.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    }

    if (!input.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        localStorage.setItem('user', JSON.stringify(input));
        navigate('/Home');
        console.log('User logged in successfully');
      } catch (error) {
        console.error('Error logging in:', error);
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
      <div className='flex justify-between items-center'>
        <div className='bg-[#0D2986] h-screen w-[45rem] sm:flex hidden'>
          <img src={logo} className='w-[4rem] h-[3rem] m-6' alt="Logo" />
          <div className='grid justify-center items-center ml-10 gap-4'>
            <img src={IMG} className='w-[30rem]' alt="Login" />
          </div>
        </div>
        <div className='bg-[#232323] h-screen w-[50rem]'>
          <div className='grid justify-center items-center mt-20 gap-4'>

            <div className='py-6'>
              <h1 className='font-bold text-2xl text-white'>Login</h1>
              <p className='text-sm text-white'>Welcome back, please provide your details.</p>
            </div>

            <form onSubmit={handleSubmit}>

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
                <p className='text-[#ededed90] text-sm'><a href='/SignUp'>Forgot your password?</a></p>
              </div>

              <button type="submit" className='flex w-[18rem] justify-center cursor-pointer items-center gap-6 bg-[#0D2986] px-4 py-2 text-[rgb(255,255,255)]'>
                Login
              </button>
            </form>

            <div>
              <p onClick={() => navigate("/Register")} className='text-[#ededed50] text-sm cursor-pointer text-center'>Don't have an account? <span className='text-[#fff] text-sm font-bold'>Register</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
