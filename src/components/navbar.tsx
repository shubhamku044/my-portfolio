"use client";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { BsGithub, BsTwitter, BsLinkedin, BsEnvelope } from "react-icons/bs";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import Link from "next/link";

const styles = {
  navLink:
    "px-4 py-2 text-sm lg:text-base rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 pointer",
  activeLink: "bg-gray-300 dark:bg-gray-700",
};

enum ETheme {
  Dark = "dark",
  Light = "light",
}

interface INavItem {
  id: number;
  name: string;
  path: string;
}

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  // {
  //   id: 2,
  //   name: 'Blogs',
  //   path: '/blog'
  // },
  {
    id: 3,
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [theme, setTheme] = useState<ETheme>(ETheme.Dark);
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
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return (
    <>
      <div className="fixed left-1/2 top-0 mx-auto flex w-full max-w-4xl -translate-x-1/2 select-none items-center justify-between border-b bg-gray-50/50 px-4 py-3 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50 sm:top-auto sm:w-11/12 sm:rounded-md sm:border sm:border-gray-400">
        <div className={`flex items-center space-x-5`}>
          <div
            className="cursor-pointer rounded-md p-2 transition-all duration-300 ease-out hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={toggleTheme}
          >
            {theme === ETheme.Light ? (
              <FiMoon className="h-4 w-4" />
            ) : (
              <FiSun className="h-4 w-4" />
            )}
          </div>
          <ul className={`hidden items-center space-x-2 sm:flex`}>
            {navItems.map((item: INavItem) => (
              <li key={item.id} className="cursor-pointer">
                <Link className={`${styles.navLink} relative`} href={item.path}>
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className={`hidden items-center space-x-8 sm:flex`}>
            <li>
              <Link href="https://www.github.com/shubhamku044" target="_blank">
                <BsGithub className="h-6 w-6" />
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com/shubhamku044" target="_blank">
                <BsTwitter className="h-6 w-6" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/shubhamku044"
                target="_blank"
              >
                <BsLinkedin className="h-6 w-6" />
              </Link>
            </li>
            <li>
              <Link href="mailto:shubhamku044@gmail.com">
                <BsEnvelope className="h-6 w-6" />
              </Link>
            </li>
          </ul>
          {!navOpen ? (
            <HiMenuAlt3
              className="h-8 w-8 cursor-pointer sm:hidden"
              onClick={() => {
                setNavOpen((prv) => !prv);
              }}
            />
          ) : (
            <HiOutlineX
              className="h-8 w-8 cursor-pointer sm:hidden"
              onClick={() => {
                setNavOpen((prv) => !prv);
              }}
            />
          )}
        </div>
      </div>
      <div
        className={`${
          !navOpen ? "hidden" : "block"
        } fixed left-0 top-[58px] z-10 h-64 w-full bg-gray-50/50 backdrop-blur-sm dark:bg-gray-900/50 sm:hidden`}
      >
        <div className="flex h-full flex-col items-center justify-center">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item: INavItem) => (
              <li key={item.name}>
                <div>{item.name}</div>
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex space-x-4">
            <li>
              <a href="#">
                <BsGithub className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="#">
                <BsTwitter className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="#">
                <BsLinkedin className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="#">
                <BsEnvelope className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
