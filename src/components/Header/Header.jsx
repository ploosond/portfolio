import React from 'react';
import { CopyLink, HamburgerButton } from '@icon-park/react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const email = 'prajwol.devkota016@gmail.com';
  return (
    <>
      {/* nav-bar */}
      <div className='bg-[#EFEFEF] h-20 xl:mx-28 p-6 flex font-inter text-[#0E0E0E]'>
        <div className='flex items-center justify-start space-x-16 basis-1/2'>
          <Link to='/' className='text-xl font-semibold leading-[20px]'>
            PRAJWOL DEVKOTA
          </Link>
          <NavLink
            to='/about'
            className='hidden xl:block text-base font-semibold leading-[19px]'
          >
            ABOUT
          </NavLink>
          <NavLink
            to='/work'
            className='hidden xl:block text-base font-semibold leading-[19px]'
          >
            WORK
          </NavLink>
        </div>
        <div className='flex items-center justify-end space-x-4 basis-1/2'>
          <p className='hidden xl:block text-base font-semibold leading-[19px]'>
            LET'S CONNECT
          </p>
          <div className='hidden xl:flex items-center space-x-1 bg-[#FFFFFF] border-2 rounded-full py-2 px-4 shadow-lg shadow-cyan-500/50'>
            <p className='hidden xl:block text-base font-semibold leading-[22px]'>
              prajwol.devkota016@gmail.com
            </p>
            <a href='' className='flex '>
              <CopyLink
                className='hidden xl:block'
                theme='filled'
                size='24'
                fill='#333'
                strokeWidth={2}
              />
            </a>
          </div>

          <HamburgerButton
            className='xl:hidden'
            theme='outline'
            size='24'
            fill='#333'
            strokeLinecap='square'
          />
        </div>
      </div>
    </>
  );
};

export default Header;
