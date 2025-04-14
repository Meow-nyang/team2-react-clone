import React, { useState } from 'react';
import styles from '../styles/Header.module.scss';
import { Link } from 'react-router-dom';
import HeaderList from './HeaderList';
import logo from '../assets/images/SPC_logo_core_alt_color.jpg';

const Header = () => {
  const [isHoverMenu, setIsHoverMenu] = useState(false);

  const handleMouseOn = (flag) => {
    setIsHoverMenu(flag);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to='/' className={styles.logo}>
          <img src={logo} alt='SPC 로고' />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.right} onMouseEnter={() => handleMouseOn(true)}>
            <li>
              <Link to='/about'>ABOUT SPC</Link>
            </li>
            <li>
              <Link to='/history'>HISTORY</Link>
            </li>
            <li>
              <Link to='/brand'>BRAND</Link>
            </li>
            <li>
              <Link to='/spcNow'>SPC NOW</Link>
            </li>
            <li>
              <Link to='/esg'>ESG</Link>
            </li>
            <li>
              <Link to='/support'>SUPPORT</Link>
            </li>
          </ul>
          <br />
          <ul className={styles.left}>
            <li>
              <button className={styles.career}>CAREERS</button>
            </li>
            <li>
              <select>
                <option value='korean'>KO</option>
                <option value='english'>EN</option>
                <option value='chinese'>CN</option>
              </select>
            </li>
          </ul>
        </nav>
        {isHoverMenu && (
          <div className={styles.dropdown}>
            <HeaderList onMouse={handleMouseOn} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
