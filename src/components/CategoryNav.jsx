import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/CategoryNav.module.scss';

const CategoryNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={styles.category}>
      <Link to='/esg/management'>
        <button
          className={`${styles.categoryBtn} ${currentPath === '/esg/management' ? styles.active : ''}`}
        >
          ESG경영 체계
        </button>
      </Link>

      <Link to='/esg/esgreport'>
        <button
          className={`${styles.categoryBtn} ${currentPath === '/esg/esgreport' ? styles.active : ''}`}
        >
          지속가능경영보고서
        </button>
      </Link>
    </div>
  );
};

export default CategoryNav;
