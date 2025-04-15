import React from 'react';
import styles from '../styles/MainPage.module.scss';

// 이미지 import (src/assets/images 기준)
import parisBaguette from '../assets/images/parisBaqeutte.webp';
import baskinRobbins from '../assets/images/baskinrabins.webp';
import dunkin from '../assets/images/dunkin.webp';
// import pascucci from '../assets/images/pasqucci.webp';

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
  return (
    <div className={styles.supportPage}>
      {/* 상단 큰 블록 */}
      <div className={`${styles.heroBanner} ${styles.slideInUp}`}>
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
