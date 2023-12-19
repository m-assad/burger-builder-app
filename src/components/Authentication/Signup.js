/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const userName = useRef();
  const password = useRef();
  const email = useRef();
  const navigate = useNavigate();

  function submitHandler() {
    const userData = {
      username: userName.current.value,
      password: password.current.value,
      email: email.current.value,
    };

    props.usersHandeler(userData);
    navigate('/');
  }

  return (
    <div className='sign-up-htm'>
      <div className='group'>
        <label htmlFor='user' className='label'>
          Username
        </label>
        <input id='user1' type='text' className='input' ref={userName} />
      </div>
      <div className='group'>
        <label htmlFor='pass' className='label'>
          Password
        </label>
        <input
          id='password'
          type='password'
          className='input'
          data-type='password'
          ref={password}
        />
      </div>
      <div className='group'>
        <label htmlFor='pass' className='label'>
          Email Address
        </label>
        <input id='pass' type='text' className='input' ref={email} />
      </div>
      <div className='group'>
        <input
          type='submit'
          className='button'
          defaultValue='Sign Up'
          onClick={submitHandler}
        />
      </div>
    </div>
  );
};
export default Signup;
