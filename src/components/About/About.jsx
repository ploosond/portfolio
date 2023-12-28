import React from 'react';

const About = () => {
  const data = [
    {
      id: 1,
      company: 'Kyriba',
      title: 'IT Support Consultant',
      period: '(2022 – 2023)',
      description:
        'Expertly aligned customer needs with business strategies while effectively managing and troubleshooting complex IT systems and provided technical support.',
      bottom: true,
    },
    {
      id: 2,
      company: 'Trustwave',
      title: 'IT Technical Support Analyst',
      period: '(2020 – 2022)',
      description:
        'Demonstrated technical expertise in addressing client IT support requests, processing TLS/SSL certificates.',
      bottom: true,
    },
    {
      id: 3,
      company: 'Labranda Kiotari Bay Hotel',
      title: 'Erasmus Intern',
      period: '(2018 – 2018)',
      description:
        'Proactively managed social media presence, website updates, and IT infrastructure, ensuring seamless operations and upholding data security.',
      bottom: true,
    },
    {
      id: 4,
      company: 'Big Homes Cyber Café',
      title: 'IT Technical Support',
      period: '(2013 – 2015)',
      description:
        'Effectively maintained and updated computer hardware and software, including games, to ensure smooth operation.',
      bottom: false,
    },
  ];

  const experienceList = data.map(
    ({ id, company, title, period, description, bottom }) => {
      return (
        <div key={id} className={bottom && 'border-b-2 mb-4'}>
          <p className='pb-4 text-[24px] leading-[28px] tracking-[-.02em] font-semibold lg:text-[32px] lg:leading-[32px]'>
            {company}
          </p>
          <div className='md:flex justify-between pb-2 text-[16px] leading-[19px] tracking-[.02em] font-semibold'>
            <p className='pb-1'>{title}</p>
            <p>{period}</p>
          </div>
          <p className='mb-6 text-[20px] text-[#6D6D6D] leading-[19px] tracking-[.02em] font-medium'>
            {description}
          </p>
        </div>
      );
    }
  );
  return (
    <div className='p-6 lg:mx-28 bg-[#EFEFEF] text-[#0E0E0E] font-interTight'>
      <p className='pb-4 mb-6  text-[52px] leading-[42px] tracking-[-.06em] font-semibold lg:text-[108px] lg:leading-[86px]'>
        EXPERIENCE
      </p>
      <div className='mb-8'>{experienceList}</div>
      <div className='text-[18px] leading-[20px] tracking-[.02em] lg:text-[20px] font-semibold flex space-x-4'>
        <a className='border-2 rounded-full py-3 px-5 bg-[#FFFFFF]' href=''>
          VIEW WORK
        </a>
        <a
          className='px-5 py-3 border-2 rounded-full'
          href='https://drive.google.com/file/d/1eH5EX1UAblNMbWJzBZ6KkDTve2ArUhkM/view?usp=drive_link'
        >
          VIEW RESUME
        </a>
      </div>
    </div>
  );
};

export default About;
