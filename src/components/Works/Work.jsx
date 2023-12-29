import React from 'react';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'Tenzies Game',
      image: '/src/assets/project1.png',
      url: 'https://github.com/ploosond/tenzies-game',
    },
    {
      id: 2,
      title: 'TailwindCSS Landing Page',
      image: '/src/assets/project2.png',
      url: 'https://github.com/ploosond/Landing_Page_TailwindCSS',
    },
    {
      id: 3,
      title: 'Meme Generator',
      image: '/src/assets/project3.png',
      url: 'https://github.com/ploosond/meme-generator',
    },
    {
      id: 4,
      title: 'Airbnb Experiences',
      image: '/src/assets/project4.png',
      url: 'https://github.com/ploosond/airbnb-experiences',
    },
  ];
  const projectLists = projects.map(({ id, title, image, url }) => {
    return (
      <div
        key={id}
        className='bg-gradient-to-t from-[#33373a] to-[#e3e5e7] rounded-2xl text-[#0E0E0E] font-interTight text-[24px] lg:text-[32px]  leading-[28px] lg:leading-[32px] tracking-[-0.02em] font-semibold flex flex-col justify-center items-center px-16 md:px-32 py-4'
      >
        <p>{title}</p>
        <img
          className='object-cover object-top w-full h-48 p-4 md:h-56 lg:h-72 xl:h-96 rounded-2xl'
          src={image}
          alt=''
        />
        <p className='text-[#FFFFFF] text-[12px] lg:text-[24px]  leading-[14px] lg:leading-[16px] font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    );
  });
  return (
    <>
      <div
        className='flex-col flex justify-center items-center space-y-1 pt-20 pb-4 font-interTight text-[52px] leading-[42px] tracking-[-.06em] font-semibold md:text-[108px]
        md:leading-[86px] lg:text-[150px]
        lg:leading-[128px]'
      >
        <p>SELECTED</p>
        <p>WORKS</p>
      </div>
      <div className='px-6 py-20 space-y-4 lg:mx-28'>{projectLists}</div>
    </>
  );
};

export default Work;
