import React, { useState } from 'react';
import styles from '../styles/Header.module.scss';
import { Link } from 'react-router-dom';
import HeaderList from './HeaderList';
import LanguageSelector from './LanguageSelector';
import logo from '../assets/images/SPC_logo_core_alt_color-removebg-preview.png';

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
              <Link to='/'>HISTORY</Link>
            </li>
            <li>
              <Link to='/'>BRAND</Link>
            </li>
            <li>
              <Link to='/'>SPC NOW</Link>
            </li>
            <li>
              {/* /esg -> /esg/management로 수정함  */}
              <Link to='/esg/management'>ESG</Link>
            </li>
            <li>
              <Link to='/support'>SUPPORT</Link>
            </li>
          </ul>

          <ul className={styles.left}>
            <li>
              <button
                className={styles.career}
                onClick={() =>
                  window.open(
                    'https://spc.recruiter.co.kr/career/home',
                    '_blank',
                    'noopener,noreferrer',
                  )
                }
              >
                CAREERS
              </button>
            </li>
            <li>
              <LanguageSelector />
            </li>
          </ul>
        </nav>
        {isHoverMenu && (
          <HeaderList onMouse={handleMouseOn} visible={isHoverMenu} />
        )}
      </div>
    </header>
  );
};

export default Header;
