import React from 'react';
import styles from '../styles/spirit.module.scss';
import spirit1 from '../assets/images/sangMiDang01.webp';
import spirit2 from '../assets/images/sangMiDang02.webp';
import spirit3 from '../assets/images/sangMiDang03.webp';
import mark from '../assets/images/sangMidangSpirit.webp';

const Spirit = () => {
  return (
    <section className={styles.spirit}>
      <div className={styles.container}>
        <div className={styles.item}>
          <img src={spirit1} alt='11' />
          <div className={styles.topItem}>
            <img src={mark} className={styles.mark} />
            <div className={styles.topText}>
              <h3>상미당(賞美堂)</h3>
              <p>
                가장 맛있고 건강한 빵으로 세상을 행복하게 만들겠다는 소중한 꿈,
                <br />
                최고의 빵을 위해 단 하나의 빵도 소홀히 하지 않겠다는 장인의
                고집,
                <br />
                지금까지 이어져온 상미당의 정신입니다.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src={spirit2} alt='22' />
          <div className={styles.bottomText}>
            <h3>고객과 품질</h3>
            <p>
              "빵을 수백만개 만들어도 <br />
              고객은 빵 하나로 평가한다."
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img src={spirit3} alt='33' />
          <div className={styles.bottomText}>
            <h3>나눔과 상생</h3>
            <p>
              "빵을 나누면 끼니가 되지만,
              <br />
              기술을 나누면 꿈이 된다."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spirit;
