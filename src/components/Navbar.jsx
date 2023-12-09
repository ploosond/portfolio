import React from 'react';
import { Copy } from '@icon-park/react';
import DeveloperImage from '../assets/developer_image.jpg';
import Logo from '../assets/logo.svg';

const Navbar = () => {
  const email = 'prajwol.devkota016@gmail.com';
  return (
    <div className='w-full h-screen'>
      {/* logo and navbar */}
      <div className='flex flex-row justify-around items-center mt-10'>
        <div className='flex flex-row w-[50%] justify-center items-center'>
          <a href='/'>
            <img className='w-20 h-20 basis-1/6' src={Logo} alt='logo' />
          </a>
          <a
            href='/'
            className='font-medium  text-lg  uppercase basis-1/5 text-center'
          >
            about
          </a>
          <a href='/' className='font-medium  text-lg uppercase basis-1/5'>
            work
          </a>
        </div>
        <p className='font-medium text-lg uppercase -mr-24'>let's connect</p>
        <div className='flex flex-row items-center border rounded-full px-6 py-2 bg-[#FFFFFF] shadow shadow-blue-500/50 cursor-pointer'>
          <p className='font-light  text-base flex flex-row justify-center items-center mr-2'>
            {email}
          </p>

          <Copy
            theme=''
            size='20'
            fill='#333'
            strokeWidth={1}
            strokeLinejoin='bevel'
          />
        </div>
      </div>
      {/* introduction and current status */}
      <div className='flex flex-col justify-center text-center h-full -mt-10 px-20'>
        <p className='font-serif text-6xl font-black self-start ml-48 text-slate-800'>
          I'm a
        </p>
        <p className='font-serif text-9xl font-black -mb-4'>FULL STACK</p>
        <p className='font-serif text-9xl font-black -mb-4'>SOFTWARE</p>
        <p className='font-serif text-9xl font-black'>
          DEVELOPER<span className='ml-4 text-[#FF0066]'>.</span>
        </p>
        {/* current status */}
        <div className='uppercase flex flex-row justify-center font-medium  text-base py-6'>
          <p className='mr-20'>
            currently stuyding <br /> Master Degree at HSRW
          </p>
          <p className='flex flex-row justify-center items-center'>
            (2022-present)
          </p>
        </div>
      </div>
      {/* full fledged image holder */}
      <div className='flex flex-row justify-center w-full h-screen'>
        <img
          className='border-transparent rounded-[7%] shadow-2xl'
          src={DeveloperImage}
          alt="developers' image"
        />
      </div>
      {/* description and motivatation */}
    </div>
  );
};

export default Navbar;
