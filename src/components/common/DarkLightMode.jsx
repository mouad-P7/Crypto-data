'use client';

import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from "@ui/common/Icons";


export default function DarkLightMode() {
  const [theme, setTheme] = useState('');


  function getThemeColor() {
    if (typeof window === 'undefined') 
      return 'light';// Default to 'light'
    if (localStorage.getItem('theme-preference')) 
      return localStorage.getItem('theme-preference');
    else
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';    
  };


  function setThemeColor(newTheme) {
    localStorage.setItem('theme-preference', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };


  function handleThemeChange() {
    setThemeColor(theme === 'dark' ? 'light' : 'dark');
    // setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
    console.log('Theme: ' + theme);
  };


  useEffect(() => {
    setThemeColor(getThemeColor());
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleThemeChange);
    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);


  return (
    <div className="flex items-center" onClick={handleThemeChange}>
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </div>
  );
};
