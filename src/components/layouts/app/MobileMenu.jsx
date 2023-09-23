'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMobileMenu } from '@redux/mobileMenu';
import { FaStar, FaXmark, FaSquareFacebook, FaInstagram, FaTwitter, FaLinkedin } from "@ui/common/Icons";
import ThemeImage from '@ui/common/ThemeImage';
// import Button from '@ui/common/Button';


export default function MobileMenu() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(state => state.mobileMenu.isMenuOpen);

  
  function toggleMenu(){
    dispatch(toggleMobileMenu());
  };


  return (
    <div className={`lg:hidden z-10 h-screen w-screen max-w-[450px] absolute top-0 bg-white shadow-md ${isMenuOpen ? 'left-0' : 'left-[calc(-100vw)]'}`}>
      <div className="p-4 flex justify-between shadow-lg">
        <Link href='/'>
        <ThemeImage 
          lightImg="light-mode-logo.png" 
          darkImg="dark-mode-logo.png"
          width={153} height={30} alt="logo" priority={false}
        />
        </Link>
        <div className="icon-ctr" onClick={toggleMenu}>
          <FaXmark size={28} />
        </div>
      </div>
      <div className="px-4 py-0 flex flex-col">
        <nav className="flex flex-col">
          <Link href='/exchanges' className={pathname === '/exchanges' ? 'isActive font-semibold py-2' : 'font-semibold py-2'}>
            Exchanges
          </Link>
          <hr />
          <Link href='/community' className={pathname === '/community' ? 'isActive font-semibold py-2' : 'font-semibold py-2'}>
            Community
          </Link>
          <hr />
          <Link href='/products' className={pathname === '/products' ? 'isActive font-semibold py-2' : 'font-semibold py-2'}>
            Products
          </Link>
          <hr />
          <Link href='/learn' className={pathname === '/learn' ? 'isActive font-semibold py-2' : 'font-semibold py-2'}>
            Learn
          </Link>
          <hr />
          <Link href='/watchlist' className={`flex items-center gap-1 font-semibold py-2 ${pathname === '/watchlist' ? 'isActive' : ''}`}>
            <FaStar size={20} className="text-gray-3 mb-2px" /> Watchlist
          </Link>
          <hr />
        </nav>
        {/* <div className="py-4 flex flex-col gap-4">
          <Button btn='blue' className="w-full">Sign Up</Button>
          <Button btn='white' className="w-full border border-blue">Log In</Button>
        </div> */}
        <hr />
        <div className="py-2 flex items-center gap-4">
          <h3>Follow us:</h3>
          <FaTwitter size={25} />
          <FaSquareFacebook size={25} />
          <FaInstagram size={25} />
          <FaLinkedin size={25} />
        </div>
      </div>
    </div>
  );
};
