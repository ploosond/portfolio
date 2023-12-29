import React from 'react';
import DeveloperImage from '../../assets/developer_image.jpg';

const Home = () => {
  return (
    <>
      {/* homepage */}
      <div
        className='flex flex-col items-center space-y-1 pt-20 pb-4 font-interTight text-[52px] leading-[42px] tracking-[-.06em] font-semibold md:text-[108px]
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
      <div className='w-full px-[30%] py-10'>
        <img
          className='border-transparent rounded-[7%] shadow-2xl'
          src={DeveloperImage}
          alt="developers' image"
        />
      </div>
    </>
  );
};

export default Home;
