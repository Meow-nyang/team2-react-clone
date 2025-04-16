import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/MobileMenu.module.scss';

function MobileMenu() {
  return (
    <nav className={styles.gnbMobile}>
      <FontAwesomeIcon icon={faBars} />
    </nav>
  );
}

export default MobileMenu;
