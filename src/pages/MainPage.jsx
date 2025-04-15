import React, { useEffect, useState } from 'react';
import styles from '../styles/MainPage.module.scss';

// 이미지 import (src/assets/images 기준)
import parisBaguette from '../assets/images/parisBaqeutte.webp';
import baskinRobbins from '../assets/images/baskinrabins.webp';
import dunkin from '../assets/images/dunkin.webp';
import pascucci from '../assets/images/pasqucci.webp';

const heroImages = [parisBaguette, baskinRobbins, dunkin, pascucci];

const brands = [
  {
    title: '파리바게뜨',
    image: parisBaguette,
  },
  {
    title: '배스킨라빈스',
    image: baskinRobbins,
  },
  {
    title: '던킨',
    image: dunkin,
  },
  // {
  //   title: '파스쿠찌',
  //   image: pascucci,
  // },
];

const MainPage = () => {
  const [index, setIndex] = useState(0);

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <div className={styles.supportPage}>
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
          <h2 className={styles.fadeSlideUp}>일상을 맛있게 행복하게</h2>
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
