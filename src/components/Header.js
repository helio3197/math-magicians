import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
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

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '12px 24px',
      }}
    >
      <header
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '960px',
          justifyContent: 'space-between',
          alignItems: 'center',
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
          <ul
            style={{
              margin: '0',
              padding: '0',
              listStyle: 'none',
              display: 'flex',
              gap: '16px',
            }}
          >
            {navLinks.map((item) => (
              <li className={styles.navItem} key={item.id}>
                <NavLink style={({ isActive }) => ((isActive) ? { color: 'red' } : {})} to={item.path}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
