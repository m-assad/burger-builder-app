import React, { useState } from 'react';
import Navbar from '../Navbar';
import Signup from './Signup';

const Authentication = () =>{
const [users,setUsers]=useState([]);

const usersHandeler=(user)=>{
  const newUsers = users.map(user=>user)
  newUsers.push(user)
  setUsers(newUsers)
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
