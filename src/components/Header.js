import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import styles from './Header.module.css';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: 'Home',
      path: '/',
      id: 1,
    },
    {
      name: 'Calculator',
      path: '/calculator',
      id: 2,
    },
    {
      name: 'Quote',
      path: '/quote',
      id: 3,
    },
  ];

  const menuHandler = () => {
    setMenuOpen((state) => !state);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '12px 24px',
        background: 'lightslategrey',
      }}
    >
      <header
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '960px',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <h1
          style={{
            margin: '0',
          }}
        >
          Math Magicians
        </h1>
        <nav>
          <button type="button" onClick={menuHandler} className="menuButton">
            {(menuOpen)
              ? <MdClose />
              : <FiMenu />}
          </button>
          <ul
            className="navLinksWrap"
            style={{
              margin: '0',
              listStyle: 'none',
              gap: '16px',
              display: (menuOpen) ? 'flex' : 'none',
            }}
          >
            {navLinks.map((item) => (
              <li className={styles.navItem} key={item.id}>
                <NavLink
                  className={({ isActive }) => ((isActive) ? `${styles.navActive}` : '')}
                  onClick={closeMenu}
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
