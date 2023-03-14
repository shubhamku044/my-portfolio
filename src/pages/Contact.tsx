import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { SiHashnode } from 'react-icons/si';
import {
  FaDiscord, FaLinkedin, FaWhatsapp, FaInstagram,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SocialHandleCard } from '../components';

interface ISocialHandles {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
}

const socialHandles: ISocialHandles[] = [
  {
    id: 0,
    title: '@shubhamku044',
    icon: <AiOutlineTwitter className='h-5 w-5 text-gray-400 dark:text-gray-300' />,
    link: 'https://twitter.com/shubhamku044',
  },
  {
    id: 1,
    title: '@shubhamku044',
    icon: <SiHashnode className='h-5 w-5 text-gray-400 dark:text-gray-300' />,
    link: 'https://shubhamku044.hashnode.dev/',
  },
  /* {
    id: 2,
    title: 'Shubham Kumar',
    icon: <FaDiscord className='h-5 w-5 text-gray-400 dark:text-gray-300' />,
    link: 'https://discord.com/users/70800000000000000',
  }, */
  {
    id: 3,
    title: 'Shubham Kumar',
    icon: <FaLinkedin className='h-5 w-5 text-gray-400 dark:text-gray-300' />,
    link: 'https://www.linkedin.com/in/shubhamku044/',
  },
  {
    id: 4,
    title: '+91 620-2217968',
    icon: <FaWhatsapp className='h-5 w-5 text-gray-400 dark:text-gray-300' />,
    link: 'https://wa.me/916202217968',
  },
  // {
  //   id: 5,
  //   title: '@shubhamku044',
  //   icon: <FaInstagram className='h-5 w-5 text-gray-400 dark:text-gray-300' />,
  //   link: 'https://www.instagram.com/shubhamku044/',
  // },
  {
    id: 6,
    title: 'shubhamku044@gmail.com',
    icon: <MdEmail className='h-5 w-5 text-gray-400 dark:text-gray-300' />,
    link: 'mailto:shubhamku044@gmail.com',
  },
];

const Contact = () => (
  <div className='space-y-10'>
    <div className='space-y-4'>
      <h1 className='text-3xl font-bold'>Let&apos;s chat 💬</h1>
      <p className='text-gray-700 dark:text-gray-300'>
        I&apos;m always open to discussing new projects,
        creative ideas or opportunities to be part of your visions.
      </p>
    </div>
    <div className='flex flex-col-reverse md:flex-row gap-2'>
      <div className='border bg-gray-200/60 dark:bg-gray-900/60 rounded border-gray-400 dark:border-gray-800 flex-1'>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2'>
        {
          socialHandles.map((socialHandle) => (
            <SocialHandleCard
              key={socialHandle.id}
              title={socialHandle.title}
              link={socialHandle.link}
              icon={socialHandle.icon}
            />
          ))
        }
      </div>
    </div>
  </div>
);

export default Contact;
