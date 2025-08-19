import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { StarBg } from '@/Components/StarBg';

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storageTheme = localStorage.getItem('theme');
    setIsDarkMode(storageTheme === 'dark');

    storageTheme === 'dark'
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {

    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode?'light':'dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleTheme} className={cn('fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full',
            'transition-colors duration-300 focus:outline-hidden hover:cursor-pointer '
            )}>
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};