import React from 'react';
import DeveloperImage from '../assets/developer_image.jpg';

const Navbar = () => {
  const email = 'prajwol.devkota016@gmail.com';
  return (
    <div className='flex justify-center min-w-[640px] h-20 bg-[#EFEFEF] font-inter text-[#0E0E0E]'>
      {/* logo and navbar */}
      <div className='relative flex justify-between min-w-[85%] h-20 py-6'>
        <div className='flex justify-start items-center xl:basis-2/4 space-x-16'>
          <a
            href='/'
            className='uppercase text-xl font-semibold leading-[20px]'
          >
            prajwol devkota
          </a>
          <div className='flex space-x-11 justify-evenly'>
            <a
              className='hidden xl:block uppercase text-base font-medium leading-[19px]'
              href='/'
            >
              about
            </a>
            <a
              className='hidden xl:block uppercase text-base font-medium leading-[19px]'
              href='/'
            >
              work
            </a>
          </div>
        </div>
        <div className='flex justify-end items-center xl:basis-2/4 space-x-2'>
          <p className='hidden xl:block uppercase text-base font-medium leading-[19px]'>
            let's connect
          </p>
          <p className='hidden xl:block bg-[#FFFFFF] border-2 rounded-full py-2 px-4 shadow-lg shadow-cyan-500/50 text-base font-medium leading-[22px]'>
            prajwol.devkota016@gmail.com
            <svg
              className='inline ml-2'
              width='24'
              height='24'
              viewBox='0 0 48 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163'
                stroke='#333'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z'
                fill='none'
                stroke='#333'
                stroke-width='2'
                stroke-linejoin='round'
              />
            </svg>
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
