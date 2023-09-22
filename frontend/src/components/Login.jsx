import React, { useState, useEffect } from 'react';
import './Student_dashboard.css';
import LoginImage from '../images/login.png';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { reset, login } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import Spinner from '../Spinner/Spinner';

function Login({ setAuthToken , setUserDBData}) {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = ({ currentTarget:input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleClick =  (e) => {
    e.preventDefault();
    dispatch(login(data))

  };
  const { user,  isError, isLoading, isSuccess, message } = useSelector((state) => state.auth);
  
  useEffect((()=>{
    if(isError){
      toast.error(message);
    }
    if(isSuccess && user){
      console.log("From Login User Token",user.token)
      setUserDBData(user);
      console.log("From Login",user);
      setAuthToken(user.token);
      
      navigate('/studentdashboard')
    }
    dispatch(reset());
  }),[user, isError, isLoading, isSuccess, message]);

  return (
    <div className='login'>
      <div className='login-box'>
        <div className='login-left'>
          <h2>Login</h2>
          <div className='login-div'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              placeholder='Email...'
              name='email'
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='login-div'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              placeholder='Password...'
              name='password'
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>
          <button onClick={handleClick}>Login</button>
          <div className='login-bottom'>
            <h1>Create an account? </h1>
            <Link to='/signup'>Here!</Link>
          </div>
        </div>
        <div className='login-right'>
          <img src={LoginImage} alt='' className='login-image' />
        </div>
      </div>
    </div>
  );
}

export default Login;
