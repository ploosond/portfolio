import React from 'react';
import { CopyLink, HamburgerButton } from '@icon-park/react';
import DeveloperImage from '../assets/developer_image.jpg';

const Navbar = () => {
  const email = 'prajwol.devkota016@gmail.com';
  return (
    <>
      {/* nav-bar */}
      <div className='bg-[#EFEFEF] h-20 xl:mx-28 p-6 flex font-inter text-[#0E0E0E]'>
        <div className='basis-1/2 flex justify-start items-center space-x-16'>
          <a className='text-xl font-semibold leading-[20px]' href='/'>
            PRAJWOL DEVKOTA
          </a>
          <p className='hidden xl:block text-base font-semibold leading-[19px]'>
            ABOUT
          </p>
          <p className='hidden xl:block text-base font-semibold leading-[19px]'>
            WORK
          </p>
        </div>
        <div className='basis-1/2 flex justify-end items-center space-x-4'>
          <p className='hidden xl:block text-base font-semibold leading-[19px]'>
            LET'S CONNECT
          </p>
          <div className='hidden xl:flex items-center space-x-1 bg-[#FFFFFF] border-2 rounded-full py-2 px-4 shadow-lg shadow-cyan-500/50'>
            <p className='hidden xl:block text-base font-medium leading-[22px] '>
              prajwol.devkota016@gmail.com
            </p>
            <CopyLink
              className='hidden xl:block'
              theme='filled'
              size='24'
              fill='#333'
              strokeWidth={2}
            />
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
      {/* motivatation */}
      <div
        className='flex flex-col justify-center items-center space-y-1 pt-20 pb-4 font-interTight text-[52px] leading-[42px] tracking-[-.06em] font-semibold md:text-[108px]
        md:leading-[86px] lg:text-[150px]
        lg:leading-[128px]'
      >
        <p>FULL STACK</p>
        <p>SOFTWARE</p>
        <p>
          DEVELOPER
          <span className=' text-[#FF0066]'>.</span>
        </p>
      </div>
      {/* current status */}
      <div className='flex flex-col lg:flex-row lg:justify-center lg:space-x-10 text-center font-inter text-[16px] font-medium leading-[19px] tracking-[-.06em] text-[#6D6D6D]'>
        <div className='lg:grow-0'>
          <p>CURRENTLY PURSUING A MASTER DEGREE</p>
          <p>AT HOCHSCHULE RHEIN-WAAL</p>
        </div>
        <p className='mt-2'>(2022-PRESENT)</p>
      </div>
      {/* developer_image */}
      <div className='w-full p-20'>
        <img
          className='border-transparent rounded-[7%] shadow-2xl'
          src={DeveloperImage}
          alt="developers' image"
        />
      </div>
    </>
  );
};

export default Navbar;
