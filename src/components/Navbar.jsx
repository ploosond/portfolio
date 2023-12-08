import React from 'react';
import { Copy } from '@icon-park/react';

const Navbar = () => {
  const email = 'prajwol.devkota016@gmail.com';
  return (
    <div className='w-full h-screen'>
      {/* logo and navbar */}
      <div className='flex flex-row justify-around items-center mt-10 antialiased'>
        <div className='flex flex-row justify-around items-center'>
          <div className='font-bold text-xl uppercase'>prajwol devkota</div>
          <div className='font-medium  text-base ml-10 uppercase'>about</div>
          <div className='font-medium  text-base ml-5 uppercase'>work</div>
        </div>
        <div className='antialiased font-medium  text-base -mr-72 uppercase pt-2'>
          let's connect
        </div>
        <div className='flex flex-row justify-center items-center border rounded-full px-6 py-2 bg-[#FFFFFF] shadow shadow-blue-500/50 cursor-pointer'>
          <div className='font-extralight mr-2'>{email}</div>

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
        <div className='font-serif text-6xl font-black self-start ml-48 text-slate-800'>
          I'm a
        </div>
        <div className='font-serif text-9xl font-black text-slate-800 -mb-4'>
          FULL STACK
        </div>
        <div className='font-serif text-9xl font-black text-slate-800 -mb-4'>
          SOFTWARE
        </div>
        <div className='font-serif text-9xl font-black text-slate-800'>
          DEVELOPER<span className='ml-4 text-rose-500'>.</span>
        </div>
        {/* current status */}
        <div className='uppercase flex flex-row justify-center font-medium  text-base py-6'>
          <div className='mr-20'>
            currently stuyding <br /> Master Degree at HSRW
          </div>
          <div className='flex flex-row justify-center items-center'>
            (2022-present)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
