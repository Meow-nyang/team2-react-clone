import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}></div>
        <nav className={styles.right}>
          <ul className={styles.title}>
            <li>
              ABOUT SPC
              <ul className={styles.menuList}>
                <li>SPC WAY</li>
                <li>R&D</li>
                <li>관계사</li>
                <li>글로벌</li>
                <li>CI소개</li>
              </ul>
            </li>
            <li>
              HISTORY
              <ul className={styles.menuList}>
                <li>헤리티지</li>
                <li>연혁</li>
              </ul>
            </li>
            <li>
              BRAND
              <ul className={styles.menuList}>
                <li>베이커리</li>
                <li>디저트</li>
                <li>외식/다이닝</li>
                <li>커피/음료</li>
                <li>유통/서비스</li>
              </ul>
            </li>
            <li>
              SPC NOW
              <ul className={styles.menuList}>
                <li>뉴스</li>
                <li>매거진</li>
                <li>SNS</li>
              </ul>
            </li>
            <li>
              ESG
              <ul className={styles.menuList}>
                <li>ESG경영</li>
                <li>정도경영</li>
                <li>안전경영</li>
                <li>행복한 재단</li>
                <li>사회공헌헌</li>
              </ul>
            </li>
            <li>
              SUPPROT
              <ul className={styles.menuList}>
                <li>가맹문의</li>
                <li>위치 안내</li>
                <li>문의하기</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
