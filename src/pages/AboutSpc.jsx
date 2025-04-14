import React, { useState } from 'react';
import styles from '../styles/AboutSpc.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import spirit1 from '../assets/img/sangMiDang01.webp';
import spirit2 from '../assets/img/sangMiDang02.webp';
import spirit3 from '../assets/img/sangMiDang03.webp';

const AboutSpc = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const tabs = [
    { label: '경영 철학', link: '#' },
    { label: '상미당 정신', link: '#' },
  ];

  const handleClick = (index, link) => {
    setActiveIndex(index);
    navigate(link);
  };

  return (
    <section className={styles.spiritSection}>
      <div className={styles.intro}>
        <h2 className={styles.title}>SPC WAY</h2>
        <ul className={styles.changeButton}>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`${styles.chan} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => handleClick(index, tab.link)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSpc;
