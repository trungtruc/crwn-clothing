import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = (props) => (
  <div className='header'>
    <Link to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link to='/shop'>Shop</Link>
      <Link to='/'>Contact</Link>
    </div>
  </div>
);

export default Header;
