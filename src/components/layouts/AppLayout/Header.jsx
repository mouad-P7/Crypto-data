import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaStar, FaBars, FaMoon, FaMagnifyingGlass } from "../../common/Icons";
import { toggleMobileMenu } from '../../../redux/mobileMenu';
import { activeLink } from '../../../utils/functions';
import Button from '../../common/Button';
import Search from './Search';
import './styles/Header.css';


export default function Header() {
  const dispatch = useDispatch();


  function toggleMenu(){
    dispatch(toggleMobileMenu());
  };

  
  return (
    <header>
      <Link id='home-link' to='.'>
        <img src="/images/logo.png" alt="logo" />
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
      <div id='header-right-ctr'>
        <NavLink to='watchlist' className={({isActive}) => activeLink(isActive)}>
          <Button className='transparent-btn'>
            <FaStar size={20} style={{ color:'var(--text-gray-3)' }} /> Watchlist
          </Button>
        </NavLink>
        <Search />
      </div>
      <div id='menu-icons-ctr'>
        <div className="icon-ctr">
          <FaMagnifyingGlass />
        </div>
        <div className="icon-ctr">
          <FaMoon />
        </div>
        <div className="icon-ctr" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </header>
  );
};
