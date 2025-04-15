import React from 'react';
import styles from '../styles/MainPage.module.scss';

// 이미지 import (src/assets/images 기준)
import parisBaguette from '../assets/images/parisBaqeutte.webp';
import baskinRobbins from '../assets/images/baskinrabins.webp';
import dunkin from '../assets/images/dunkin.webp';
import pascucci from '../assets/images/pasqucci.webp';

const brands = [
  {
    title: '파리바게뜨',
    description: '베이커리 업계의 부동의 1위',
    image: parisBaguette,
  },
  {
    title: '배스킨라빈스',
    description: '행복을 전하는 프리미엄 아이스크림',
    image: baskinRobbins,
  },
  {
    title: '던킨',
    description: '세계 최대의 커피&도넛 전문 브랜드',
    image: dunkin,
  },
  {
    title: '파스쿠찌',
    description: '완벽한 커피, 감각적인 공간',
    image: pascucci,
  },
];

const MainPage = () => {
  return (
    <div className={styles.supportPage}>
      <div className={styles.grid}>
        {brands.map((brand, index) => (
          <div className={styles.card} key={index}>
            <img src={brand.image} alt={brand.title} className={styles.image} />
            <div className={styles.cardText}>
              <h3>{brand.title}</h3>
              <p>{brand.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
