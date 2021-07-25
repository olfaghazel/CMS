import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { isAuth } from '../utils/Auth';

const Navbar = () => {
  const history = useHistory();

  const [active, setActive] = useState('home');
  const [auth, setAuth] = useState(isAuth());

  return (
    <nav
      class='navbar navbar-inverse navbar-dark bg-dark'
      style={{ marginBottom: '2%' }}
    >
      <div class='container-fluid'>
        <div className='d-flex align-items-center' style={{ width: '70%' }}>
          {/* *************Logo************** */}
          <div class='navbar-header'>
            <Link className='navbar-brand' to={'/'}>
              Logo
            </Link>
          </div>
          {/* **************Nav************** */}

          <ul
            className='nav navbar-nav d-flex flex-row align-items-center'
            style={{ width: '80%' }}
          >
            <li
              style={{ marginRight: '20px' }}
              className='nav-item'
              onClick={() => setActive('home')}
            >
              <Link
                className={active === 'home' ? 'nav-link active' : 'nav-link'}
                to='/'
              >
                Home
              </Link>
            </li>
            <li
              style={{ marginRight: '20px' }}
              className='nav-item'
              onClick={() => setActive('about')}
            >
              <Link
                className={active === 'about' ? 'nav-link active' : 'nav-link'}
                to='/'
              >
                About Us
              </Link>
            </li>
            {auth && (
              <li
                style={{ marginRight: '20px' }}
                className='nav-item'
                onClick={() => setActive('logged')}
              >
                <Link
                  className={
                    active === 'logged' ? 'nav-link active' : 'nav-link'
                  }
                  to='/createblog'
                >
                  Add Blog
                </Link>
              </li>
            )}
          </ul>
        </div>
        {/* **********Right Side*********** */}
        {auth ? (
          <ul className='nav navbar-right '>
            <li style={{ marginRight: '20px' }}>
              <div
                className='collapse navbar-collapse d-flex justify-content-end  d-sm-none d-md-block'
                id='navbarNav'
              >
                <form className='d-flex'>
                  <div className='dropdown drpdwnMenuBtn ml-2'>
                    <button
                      className='btn dropdown-toggle px-0 py-0'
                      type='button'
                      id='dropdownMenuButton'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <img
                        src='http://www.gravatar.com/avatar/c1a276b8587995e9f29e1b7fe9148169?s=200&r=pg&d=mm'
                        className=' rounded-circle mr-3 '
                        width='40'
                        alt=''
                      />
                    </button>
                    <div
                      className='dropdown-menu dropdown-menu-right'
                      aria-labelledby='dropdownMenuButton'
                    >
                      <Link className='dropdown-item px-3' to='#'>
                        View profile
                      </Link>

                      <Link
                        className='nav-link'
                        className='dropdown-item px-3'
                        to='/'
                        onClick={() => {
                          localStorage.removeItem('token');
                          history.push('/');
                          window.location.reload();
                        }}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </li>
          </ul>
        ) : (
          <ul
            style={{ width: '15%' }}
            className='nav navbar-nav navbar-right d-flex flex-row'
          >
            <li
              style={{ marginRight: '20px' }}
              className='nav-item'
              onClick={() => setActive('register')}
            >
              <Link
                className={
                  active === 'register' ? 'nav-link active' : 'nav-link'
                }
                to='/register'
              >
                <i className='fas fa-user'></i> Sign Up
              </Link>
            </li>
            <li
              style={{ marginRight: '20px' }}
              className='nav-item'
              onClick={() => setActive('login')}
            >
              <Link
                className={active === 'login' ? 'nav-link active' : 'nav-link'}
                to='/login'
              >
                <i className='fas fa-sign-in-alt'></i> Login
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
Navbar.defaultProps = {
  logged: false,
};
export default Navbar;
