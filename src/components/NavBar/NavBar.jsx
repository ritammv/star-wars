import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './NavBar.scss';

const NavBar = () => {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px',

    },
    bmBurgerBars: {
      background: 'white',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '34px',
      width: '34px',
    },
    bmCross: {
      background: 'white',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: 'grey',
      padding: '2.5em 1.5em 0',
      fontSize: '1.1em',
      fontFamily: 'Arial',
      fontWeight: '100',
      color: 'white',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'black',
    },
  };

  return (
    <div className="nav_bar_container">
      <h3>May the Force be with you!</h3>
      <Menu styles={styles} right>
        <ul>
          <li><a id="home" className="menu-item" href="/">Home</a></li>
          <li><a id="faveChar" className="menu-item" href="/faveChar">Fave Characters</a></li>
          <li><a id="faveMovie" className="menu-item" href="/faveMovie">Fave Movies</a></li>

        </ul>
      </Menu>
    </div>
  );
};

export default NavBar;
