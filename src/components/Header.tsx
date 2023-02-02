import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import {
  BsGithub, BsTwitter, BsLinkedin, BsEnvelope,
} from 'react-icons/bs';

const styles = {
  rowEl: 'flex items-center',
  navLink: 'px-4 py-2 text-sm rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 pointer transition-all ease-out duration-300',
  activeLink: 'bg-gray-300 dark:bg-gray-700',
};

enum ETheme {
  Dark = 'dark',
  Light = 'light',
}

const Header = () => {
  const [theme, setTheme] = useState<ETheme>(ETheme.Dark);

  const toggleTheme = ():void => {
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

  return (
    <div className="max-w-3xl border-gray-400 dark:border-gray-800 border bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm fixed w-11/12 left-1/2 select-none -translate-x-1/2 px-4 py-3 rounded-md mx-auto flex justify-between items-center">
      <div className={`${styles.rowEl} space-x-5`}>
        <div
          className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 duration-300 transition-all ease-out rounded-md cursor-pointer"
          onClick={toggleTheme}
        >
          {
            theme === ETheme.Light ? <FiMoon className="w-4 h-4" /> : <FiSun className="w-4 h-4"/>
          }
        </div>
        <ul className={`${styles.rowEl} space-x-2`}>
          <li><NavLink className={({ isActive }) => `${styles.navLink} ${isActive && styles.activeLink}`} to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => `${styles.navLink} ${isActive && styles.activeLink}`} to="/blog">Blogs</NavLink></li>
          <li><NavLink className={({ isActive }) => `${styles.navLink} ${isActive && styles.activeLink}`} to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      <div>
        <ul className={`${styles.rowEl} space-x-4`}>
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
  );
};

export default Header;
