import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Signup from './Signup';
import { USER_DATA_URL } from '../../constants';
const Authentication = () =>{
  const [users,setUsers]=useState([]);
  const navigate = useNavigate();

  const usersHandeler=(user)=>{
    const newUsers = users.map(user=>user)
    // correct password = 9uQFF1Lh
    axios.get(USER_DATA_URL)
        .then((response) => {
          if (response.data.password === user.password) {
            newUsers.push(user)
            setUsers(newUsers)
            toast('Logged in successfully')
            navigate('/');

          } else {
            toast('Invalid credential')
          }
        });
  }

return (
  <div>
    <Navbar />
    <div>
      <div className='login-wrap'>
        <div className='login-html'>

          <input id='tab-2' type='radio' name='tab' className='sign-up' defaultChecked/>
          <label htmlFor='tab-2' className='tab'>
            Sign Up
          </label>
          <div className='login-form'>
            <Signup usersHandeler={usersHandeler} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
export default Authentication;
