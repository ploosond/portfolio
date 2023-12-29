import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ toggleNav }) => {
  return (
    <>
      {/* mini nav-bar */}
      <div className='bg-[#EFEFEF] h-20 space-x-4 p-6 flex justify-between font-inter text-[#0E0E0E]'>
        <div className='flex items-center'>
          <Link
            onClick={toggleNav}
            to='/'
            className='text-xl font-semibold leading-[20px]'
          >
            PRAJWOL DEVKOTA
          </Link>
        </div>
        <div className='flex items-center justify-end'>
          <FontAwesomeIcon onClick={toggleNav} icon={faXmark} size='2xl' />
        </div>
      </div>
      <div className='flex flex-col items-center justify-around space-y-20 p-28 font-interTight'>
        <NavLink
          onClick={toggleNav}
          to='/'
          className=' text-[52px] font-semibold leading-[19px]'
        >
          HOME
        </NavLink>
        <NavLink
          onClick={toggleNav}
          to='/about'
          className=' text-[52px] font-semibold leading-[19px]'
        >
          ABOUT
        </NavLink>
        <NavLink
          onClick={toggleNav}
          to='/work'
          className=' text-[52px] font-semibold leading-[19px]'
        >
          WORK
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
