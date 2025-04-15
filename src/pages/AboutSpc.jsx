import React, { useState } from 'react';
import styles from '../styles/AboutSpc.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import Philosophy from './Philosophy';
import Spirit from './Spirit';

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
      {/* ✅ 조건부 렌더링 */}
      {activeIndex === 0 && <Philosophy />}
      {activeIndex === 1 && <Spirit />}
    </section>
  );
};

export default AboutSpc;
