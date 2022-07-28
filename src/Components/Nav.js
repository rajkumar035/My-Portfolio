import React from 'react';
import '../Assets/CSS/Nav.css';
import Brand from '../Assets/Brand.png';
import { BiMenuAltRight } from 'react-icons/bi';

const Nav = ({ homeId, aboutId, specializationId, contactId }) => {
  return (
    <nav id='nav'>
      <input type='checkbox' id='check' />
      <label for='check' className='checkbtn'>
        <BiMenuAltRight className='menu-icon' />
      </label>
      <img className='brand' src={Brand} alt='logo' />
      <ul>
        <li>
          <a href={homeId}>Home</a>
        </li>
        <li>
          <a href={aboutId}>About</a>
        </li>
        <li>
          <a href={specializationId}>Works</a>
        </li>
        <li>
          <a href={contactId}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
