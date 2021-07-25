import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { postApi } from '../utils/Api';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      // dispatch(
      //   setAlert({ msg: 'Passwords do not match', alertType: 'danger' })
      // );
      console.log('error');
    } else {
      await postApi('user/register', { fullName, userName, email, password });
      setFullName('');
      setUserName('');
      setEmail('');
      setPassword('');
      setPassword2('');
    }
  };
  return (
    <form className='register' onSubmit={(e) => onSubmit(e)}>
      <h3>Register</h3>

      <div className='form-group'>
        <label>Full name</label>
        <input
          type='text'
          className='form-control'
          placeholder='Full name'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label>User name</label>
        <input
          type='text'
          className='form-control'
          placeholder='User name'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label>Email</label>
        <input
          type='email'
          className='form-control'
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Repeat password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Repeat password'
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </div>

      <button type='submit' className='btn btn-dark btn-lg btn-block'>
        Register
      </button>
      <p className='forgot-password text-right'>
        Already registered <Link to='/login'>log in?</Link>
      </p>
    </form>
  );
};

export default Register;
