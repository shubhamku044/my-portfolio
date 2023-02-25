import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';

interface ISocialHandleCard {
  title: string;
  link: string;
  icon: React.ReactNode;
}

const SocialHandleCard: React.FC<ISocialHandleCard> = ({
  title, link, icon,
}) => (
  <a href={link} target={'_blank'} className='border hover:scale-[1.02] duration-150 bg-gray-200/60 dark:bg-gray-900/60 rounded border-gray-400 dark:border-gray-800 block px-4 py-3' rel="noreferrer">
    <div className='flex items-center space-x-2'>
      {icon}
      <p className='text-sm text-gray-900 dark:text-gray-300'>{title}</p>
      <HiOutlineExternalLink className='block font-light h-4 w-4 text-gray-400 dark:text-gray-500' />
    </div>
  </a>
);

export default SocialHandleCard;
