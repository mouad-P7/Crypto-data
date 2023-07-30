import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMobileMenu } from '../../../redux/mobileMenu';
import { FaStar, FaXmark, FaSquareFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { activeLink } from '../../../utils/functions';
import Button from '../../common/Button';
import './styles/MobileMenu.css';


export default function MobileMenu() {
  const isMenuOpen = useSelector(state => state.mobileMenu.isMenuOpen);
  const dispatch = useDispatch();


  function toggleMenu(){
    dispatch(toggleMobileMenu());
  };


  return (
    <div id='MobileMenu' style={{ left: isMenuOpen ? 0 : '-100vw' }}>
      <div id='Menu-header'>
        <Link to='.'>
          <img src="./assets/logo.png" alt="logo" />
        </Link>
        <div className="icon-ctr" onClick={toggleMenu}>
          <FaXmark size={25} style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <div id='Menu-ctr'>
        <nav id="nav-menu">
          <NavLink to='exchanges' className={({isActive}) => activeLink(isActive)}>
            Exchanges
          </NavLink>
          <hr />
          <NavLink to='community' className={({isActive}) => activeLink(isActive)}>
            Community
          </NavLink>
          <hr />
          <NavLink to='products' className={({isActive}) => activeLink(isActive)}>
            Products
          </NavLink>
          <hr />
          <NavLink to='learn' className={({isActive}) => activeLink(isActive)}>
            Learn
          </NavLink>
          <hr />
          <NavLink 
            id='watchlist-link-ctr' to='watchlist' 
            className={({isActive}) => activeLink(isActive)}
          >
            <FaStar size={20} color='var(--text-gray-3)' /> Watchlist
          </NavLink>
          <hr />
        </nav>
        <div id="mobile-logIn-signUp-ctr">
          <Button id="signUp" className='blue-btn'>Sign Up</Button>
          <Button id="logIn" className='white-btn' style={{ border: 'solid 1px var(--bg-blue)' }}>Log In</Button>
        </div>
        <hr />
        <div className='follow-us'>
          <h3>Follow us:</h3>
          <FaTwitter size={25} style={{ cursor: 'pointer' }} />
          <FaSquareFacebook size={25} style={{ cursor: 'pointer' }} />
          <FaInstagram size={25} style={{ cursor: 'pointer' }}/>
          <FaLinkedin size={25} style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};
