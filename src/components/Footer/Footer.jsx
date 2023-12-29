import React, { useRef, useState } from 'react';
import { CopyLink } from '@icon-park/react';
import {
  LinkedinLogo,
  TwitterLogo,
  InstagramLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';

const Footer = () => {
  const emailRef = useRef();
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const email = emailRef.current.textContent;
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <>
      {/* footer */}
      <div className='bg-[#0E0E0E] text-[#FFFFFF] font-interTight p-6 space-y-2'>
        <div className='flex flex-col items-start space-y-2 lg:mx-28'>
          <p className='text-[24px] 2xl:text-[28px] font-semibold leading-[28px] tracking-[-.02em] mb-6'>
            Think I'd be a good fit for your team or the project? Let's connect
          </p>
          <div className='flex items-center space-x-2'>
            <div className='bg-[#FFFFFF] flex text-[#0E0E0E] px-4 py-2 space-x-1 border-2 rounded-full'>
              <p
                ref={emailRef}
                className='text-[16px] font-semibold leading-[22px]'
              >
                prajwol.devkota016@gmail.com
              </p>
              <button type='button' onClick={copyToClipboard}>
                <CopyLink
                  theme={!isCopied ? 'filled' : 'outline'}
                  size='24'
                  fill='#333'
                  strokeWidth={2}
                />
              </button>
            </div>
            {isCopied && <p className=''>Email copied!</p>}
          </div>
        </div>
        {/* socials */}
        <div className='lg:mx-28'>
          <p className='text-[#999999] font-inter text-[16px] font-semibold pt-6 pb-4'>
            SOCIALS
          </p>
          <ul className='grid grid-cols-4 grid-rows-1 gap-y-2 font-inter text-[16px] font-semibold'>
            <li className=''>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/prajwol-devkota/'
                className='flex items-center space-x-1'
              >
                <LinkedinLogo size={20} color='#fdfcfc' weight='fill' />
                <p>Linkedin</p>
              </a>
            </li>
            <li className=''>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://twitter.com/ploosond'
                className='flex items-center space-x-1'
              >
                <TwitterLogo size={20} color='#fdfcfc' weight='fill' />
                <p>Twitter</p>
              </a>
            </li>

            <li className='row-start-3'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.instagram.com/ploosond/'
                className='flex items-center space-x-1'
              >
                <InstagramLogo size={20} color='#fdfcfc' weight='fill' />
                <p>Instagram</p>
              </a>
            </li>
            <li className='row-start-3'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.youtube.com/channel/UCNdXvRU7qFj3rG4yEO8srHQ'
                className='flex items-center space-x-1'
              >
                <YoutubeLogo size={20} color='#fdfcfc' weight='fill' />
                <p>Youtube</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-[#1E1E1E] p-6 text-center'>
        <p className='text-[#8F8F8F] text-[12px] font-medium leading-[12px]'>
          DESIGNED & BUILT FROM THE DESK OF&nbsp;
          <span className='text-[#FFFFFF]'>PRAJWOL DEVKOTA</span>&nbsp;KLEVE,
          GERMANY
        </p>
      </div>
    </>
  );
};

export default Footer;
