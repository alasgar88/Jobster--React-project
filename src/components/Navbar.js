import React from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import { FaHome, FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Logo } from '../components/';
import { toggleSidebar, logoutUser } from '../features/user/userSlice';
import { useState } from 'react';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div className='nav-center'>
        <button className='toggle-btn' type='button' onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => dispatch(logoutUser('Logging out...'))}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
