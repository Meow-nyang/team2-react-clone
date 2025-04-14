import React, { useState } from 'react';
import styles from '../styles/EsgReport.module.scss';
import CategoryNav from '../components/CategoryNav';
import image from '../assets/img/sec01_img1.webp';

const EsgReport = () => {
  const [activeCategory, setActiveCategory] = useState('report');
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.esg}>ESG경영</h1>
        <CategoryNav
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>

      <section className={styles.section}>
        <h2 className={styles.title}>SPC그룹 지속가능경영보고서 2024</h2>
        <div className={styles.grid}>
          <div className={styles.img}>
            <img src={image} alt='설명 텍스트' />
          </div>

          <div className={styles.content}>
            <div className={styles.txt}>
              <h3 className={styles.body}>
                SPC그룹은 최고의 품질과 창의적인 도전으로 이해관계자 모두의
                행복과 건강을 <br />
                추구할 수 있도록 ESG 측면에서의 성장 기반과 제품 경쟁력 강화를
                고려하여 ESG <br />
                전략을 수립하였습니다.
              </h3>
              <div className={styles.btn}>
                <a
                  href='https://www.spc.co.kr/img/front/sub/esg/esg_management/report/2024%20SPC%EA%B7%B8%EB%A3%B9%20%EC%A7%80%EC%86%8D%EA%B0%80%EB%8A%A5%EA%B2%BD%EC%98%81%EB%B3%B4%EA%B3%A0%EC%84%9C.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  보고서 다운로드
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EsgReport;
