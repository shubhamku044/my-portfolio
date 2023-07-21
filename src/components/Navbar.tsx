'use client';
import { useState, useEffect, use } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import {
  BsGithub, BsTwitter, BsLinkedin, BsEnvelope
} from 'react-icons/bs';
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { AnimateSharedLayout, LayoutGroup, motion } from 'framer-motion';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const styles = {
  rowEl: 'flex items-center',
  navLink: 'px-4 py-2 text-sm rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 pointer transition-all ease-out duration-300',
  activeLink: 'bg-gray-300 dark:bg-gray-700'
};

enum ETheme {
  Dark = 'dark',
  Light = 'light',
}

interface INavItem {
  id: number
  name: string
  path: string
}

const navItems = [
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  {
    id: 2,
    name: 'Blogs',
    path: '/blog'
  },
  {
    id: 3,
    name: 'Contact',
    path: '/contact'
  }
];

const Header = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState<ETheme>(ETheme.Dark);
  const [currPath, setCurrPath] = useState<string>('/' || pathname);
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const toggleTheme = (): void => {
    if (theme === ETheme.Dark) {
      setTheme(ETheme.Light);
    } else {
      setTheme(ETheme.Dark);
    }
  };

  useEffect(() => {
    if (theme === ETheme.Dark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  useEffect(() => {
    const audio = new Audio('/pop_sound_2.mp3');
    if (location.pathname !== currPath) {
      audio.currentTime = 0.31;
      audio.volume = 0.3;
      audio.play();
      setCurrPath(location.pathname);
    }
  }, [pathname, currPath]);

  return (
    <>
      <div className="max-w-3xl sm:border-gray-400 dark:border-gray-800 border-b sm:border bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm fixed w-full sm:w-11/12 left-1/2 top-0 sm:top-auto select-none -translate-x-1/2 px-4 py-3 sm:rounded-md mx-auto flex justify-between items-center">
        <div className={`${styles.rowEl} space-x-5`}>
          <div
            className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 duration-300 transition-all ease-out rounded-md cursor-pointer"
            onClick={toggleTheme}
          >
            {
              theme === ETheme.Light ? <FiMoon className="w-4 h-4" /> : <FiSun className="w-4 h-4" />
            }
          </div>
          <ul className={`${styles.rowEl} hidden sm:flex space-x-2`}>
            <LayoutGroup id='b'>
              {
                navItems.map((item: INavItem) => (
                  <Link onClick={() => { }} href={item.path} key={item.id}>
                    <li key={item.id} className='cursor-pointer'>
                      <div
                        className={`${styles.navLink} relative`}
                      >
                        <span className="z-10 relative">{item.name}</span>
                        {currPath === item.path && (
                          <motion.div className={`absolute rounded-md top-0 left-0 h-full w-full ${styles.activeLink}`} layoutId='underline' />
                        )}
                      </div>
                    </li>
                  </Link>
                ))
              }
            </LayoutGroup>
          </ul>
        </div>
        <div>
          <ul className={`${styles.rowEl} hidden sm:flex space-x-4`}>
            <li>
              <Tippy arrow content={<span>Github</span>}>
                <a href="#">
                  <BsGithub className="w-6 h-6" />
                </a>
              </Tippy>
            </li>
            <li>
              <Tippy arrow content={<span>Tiwtter</span>}>
                <a href="#">
                  <BsTwitter className="w-6 h-6" />
                </a>
              </Tippy>
            </li>
            <li>
              <Tippy arrow content={<span>LinkedIn</span>}>
                <a href="#">
                  <BsLinkedin className="w-6 h-6" />
                </a>
              </Tippy>
            </li>
            <li>
              <Tippy arrow content={<span>Email</span>}>
                <a href="#">
                  <BsEnvelope className="w-6 h-6" />
                </a>
              </Tippy>
            </li>
          </ul>
          {
            !navOpen
              ? (
                <HiMenuAlt3 className="w-8 h-8 sm:hidden cursor-pointer" onClick={() => { setNavOpen((prv) => !prv); }} />
              )
              : (
                <HiOutlineX className="w-8 h-8 sm:hidden cursor-pointer" onClick={() => { setNavOpen((prv) => !prv); }} />
              )
          }
        </div>
      </div>
      <div className={`${!navOpen ? 'hidden' : 'block'} sm:hidden fixed top-[58px] left-0 w-full h-64 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm z-10`}>
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col space-y-4 items-center">
            {
              navItems.map((item: INavItem) => (
                <li key={item.id}>
                  <div
                  // className={({ isActive }) => (`${styles.navLink} ${isActive && styles.activeLink}`)}
                  // to={item.path}
                  >
                    {item.name}
                  </div>
                </li>
              ))
            }
          </ul>
          <ul className="flex space-x-4 mt-4">
            <li>
              <a href="#">
                <BsGithub className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#">
                <BsTwitter className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#">
                <BsLinkedin className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#">
                <BsEnvelope className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
