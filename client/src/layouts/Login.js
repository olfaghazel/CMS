import React, { useState, useEffect } from 'react';

import { postApi } from '../utils/Api';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await postApi('user/login', { userName, password });

    setUserName('');
    setPassword('');
  };

  return (
    <form className='register' onSubmit={(e) => onSubmit(e)}>
      <h3>Log in</h3>

      <div className='form-group'>
        <label>User Name</label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter your user name'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck1'
          />
          <label className='custom-control-label' htmlFor='customCheck1'>
            Remember me
          </label>
        </div>
      </div>

      <button type='submit' className='btn btn-dark btn-lg btn-block'>
        Sign in
      </button>
      <p className='forgot-password text-right'>
        Forgot <a href='#'>password?</a>
      </p>
    </form>
  );
};

export default Login;
