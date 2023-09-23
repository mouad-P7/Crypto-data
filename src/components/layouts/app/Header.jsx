'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { FaStar, FaBars, FaMagnifyingGlass } from "@ui/common/Icons";
import { toggleMobileMenu } from '@redux/mobileMenu';
import Button from '@ui/common/Button';
import Search from './Search';
import ThemeImage from '@ui/common/ThemeImage';


export default function Header() {
  const pathname = usePathname();
  const dispatch = useDispatch();


  function toggleMenu(){
    dispatch(toggleMobileMenu());
  };

  
  return (
    <header className="flex items-center p-4 justify-between gap-5">
      <Link href='/'>
        <ThemeImage 
          lightImg="light-mode-logo.png" 
          darkImg="dark-mode-logo.png"
          width={153} height={30} alt="logo" priority={false}
        />
      </Link>
      <nav className="hidden items-center flex-grow justify-start gap-5 lg:flex">
        <Link href='/exchanges' className={pathname === '/exchanges' ? 'isActive font-semibold' : 'font-semibold'}>
          Exchanges
        </Link>
        <Link href='/community' className={pathname === '/community' ? 'isActive font-semibold' : 'font-semibold'}>
          Community
        </Link>
        <Link href='/products' className={pathname === '/products' ? 'isActive font-semibold' : 'font-semibold'}>
          Products
        </Link>
        <Link href='/learn' className={pathname === '/learn' ? 'isActive font-semibold' : 'font-semibold'}>
          Learn
        </Link>
      </nav>
      <div className="hidden items-center justify-between gap-4 lg:flex">
        <Link href='/watchlist' className={pathname === '/watchlist' ? 'isActive' : ''}>
          <Button btn='transparent'>
            <FaStar size={20} className="text-gray-3" /> Watchlist
          </Button>
        </Link>
        <Search />
      </div>
      <div className="flex items-center gap-4 lg:hidden">
        <div className="flex items-center">
          <FaMagnifyingGlass />
        </div>
        <div className="flex items-center" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </header>
  );
};
