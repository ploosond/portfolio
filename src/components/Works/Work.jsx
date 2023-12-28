import React from 'react';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'Tenzies Game',
      image: '/src/assets/idwwZIIqbma8TEQVuw7zr8Em7g.webp',
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
        className='bg-gradient-to-t from-[#92969B] to-[#C9CFD5] rounded-2xl text-[#0E0E0E] font-interTight text-[24px] lg:text-[32px]  leading-[28px] lg:leading-[32px] tracking-[-0.02em] font-semibold'
      >
        <a
          href={url}
          className='bg-cover h-[200px] lg:h-[400px] mx-20 lg:mx-0 lg:rounded-2xl flex justify-center items-center'
          style={{ backgroundImage: `url(${image})` }}
        >
          {title}
        </a>
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
