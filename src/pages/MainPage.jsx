import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/MainPage.module.scss';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';

// 이미지 import (src/assets/images 기준)
import parisBaguette from '../assets/images/parisBaqeutte.webp';
import baskinRobbins from '../assets/images/baskinrabins.webp';
import dunkin from '../assets/images/dunkin.webp';
import pascucci from '../assets/images/pasqucci.webp';

const heroImages = [parisBaguette, baskinRobbins, dunkin, pascucci];

const MainPage = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const { t } = useTranslation();

  const brands = [
    {
      title: t('parisBaguette'),
      image: parisBaguette,
    },
    {
      title: t('baskinRobbins'),
      image: baskinRobbins,
    },
    {
      title: t('dunkin'),
      image: dunkin,
    },
  ];

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    resetTimer();
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % heroImages.length);
    resetTimer();
  };

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(intervalRef.current); // 언마운트 시 제거
  }, []);

  return (
    <div className={styles.supportPage}>
      {/* 언어 선택 드롭다운 */}
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <LanguageSelector />
      </div>
      {/* 상단 큰 슬라이드 블록 */}
      <div className={`${styles.heroBanner} ${styles.slideInUp}`}>
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`${styles.slideImage} ${i === index ? styles.active : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <button className={`${styles.arrow} ${styles.left}`} onClick={goPrev}>
          &lt;
        </button>
        <button className={`${styles.arrow} ${styles.right}`} onClick={goNext}>
          &gt;
        </button>

        <div className={styles.heroContent}>
          <h2 className={styles.fadeSlideUp}>{t('mainTitle')}</h2>
          <p className={styles.fadeSlideDown}>Happiness in every bite</p>
        </div>
      </div>

      <div className={`${styles.grid} ${styles.slideIn}`}>
        {brands.map((brand, index) => (
          <div className={styles.card} key={index}>
            <img src={brand.image} alt={brand.title} className={styles.image} />
            <div className={styles.cardText}>
              <h3>{brand.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
