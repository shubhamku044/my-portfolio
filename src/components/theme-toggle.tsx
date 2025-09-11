'use client';

import { useTheme } from './theme-provider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 print:hidden"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="size-5 text-gray-700" />
      ) : (
        <SunIcon className="size-5 text-yellow-500" />
      )}
    </button>
  );
}
