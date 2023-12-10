import React from 'react';
import { Copy, HamburgerButton } from '@icon-park/react';
import DeveloperImage from '../assets/developer_image.jpg';
import Logo from '../assets/logo.svg';

const Navbar = () => {
  const email = 'prajwol.devkota016@gmail.com';
  return (
    <div className='flex justify-center min-w-[640px] h-20 bg-[#EFEFEF]'>
      <div className='relative flex justify-between min-w-[92.5%] h-20 py-6'>
        <div className='flex justify-start items-center xl:basis-2/4 space-x-2'>
          <img className='w-8 h-8 mr-8' src={Logo} alt='logo' />
          <div className='flex space-x-4 justify-evenly'>
            <a className='hidden xl:block' href='/'>
              about
            </a>
            <a className='hidden xl:block' href='/'>
              work
            </a>
          </div>
        </div>
        <div className='flex justify-end items-center xl:basis-2/4 space-x-2'>
          <p className='hidden xl:block'>let's connect</p>
          <p className='hidden xl:block bg-[#FFFFFF] border-2 rounded-full py-2 px-4 shadow-lg shadow-cyan-500/50'>
            prajwol.devkota016@gmail.com
          </p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2.5}
            stroke='currentColor'
            className='w-8 h-8 xl:hidden'
          >
            <path
              strokeLinecap='square'
              strokeLinejoin='miter'
              d='M3.75 9h16.5m-16.5 6.75h16.5'
            />
          </svg>
        </div>
      </div>
      {/* logo and navbar */}

      {/* <div className='flex flex-col justify-center text-center h-full'>
        <p className='font-interTight text-[150px] leading-[128px] tracking-[-6px] font-semibold'>
          FULL STACK
        </p>
        <p className='font-interTight text-[150px] leading-[128px] tracking-[-6px] font-semibold'>
          SOFTWARE
        </p>
        <p className='font-interTight text-[150px] leading-[128px] tracking-[-6px] font-semibold'>
          DEVELOPER<span className='ml-4 text-[#FF0066]'>.</span>
        </p>
        <div className='flex flex-row justify-center font-semibold text-[16px] leading-[19px] uppercase'>
          <p className='mr-20'>
            currently stuyding <br /> Master Degree at HSRW
          </p>
          <p className='flex flex-row justify-center items-center'>
            (2022-present)
          </p>
        </div>
      </div>
      <div className='flex flex-row justify-center w-full h-screen'>
        <img
          className='border-transparent rounded-[7%] shadow-2xl'
          src={DeveloperImage}
          alt="developers' image"
        />
      </div> */}
    </div>
  );
};

export default Navbar;
