import { Link, NavLink } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import Button from '../../common/Button';
import Search from './Search';
import './styles/Header.css';


export default function Header() {
  function activeLink(isActive){
    return isActive ? "isActive" : null;
  };

  
  return (
    <header>
      <Link id='home-link' to='.'>
        <img src="./assets/logo.png" alt="logo" />
      </Link>
      <nav id='header-middle-ctr'>
        <NavLink to='exchanges' className={({isActive}) => activeLink(isActive)}>
          Exchanges
        </NavLink>
        <NavLink to='community' className={({isActive}) => activeLink(isActive)}>
          Community
        </NavLink>
        <NavLink to='products' className={({isActive}) => activeLink(isActive)}>
          Products
        </NavLink>
        <NavLink to='learn' className={({isActive}) => activeLink(isActive)}>
          Learn
        </NavLink>
      </nav>
      <div id='header-left-ctr'>
        <NavLink to='watchlist' className={({isActive}) => activeLink(isActive)}>
          <Button className='transparent-btn'>
            <FaStar size={17} color='var(--text-gray-3)' /> Watchlist
          </Button>
        </NavLink>
        <Search />
      </div>
    </header>
  );
};
