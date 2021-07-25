import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-inverse'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a className='navbar-brand' href='#'>
            Some Blogs
          </a>
        </div>
        <ul className='nav navbar-nav'>
          <li className='active'>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>About Us</Link>
          </li>
        </ul>
        <ul className='nav navbar-nav navbar-right'>
          <li>
            <Link to='/register'>
              <span className='glyphicon glyphicon-user'></span> Sign Up
            </Link>
          </li>
          <li>
            <Link to='/login'>
              <span className='glyphicon glyphicon-log-in'></span> Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
