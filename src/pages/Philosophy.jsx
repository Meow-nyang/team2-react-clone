import React from 'react';
import styles from '../styles/Philosophy.module.scss';
import philosophy1 from '../assets/images/philo01.webp';
import philosophy2 from '../assets/images/philo02.webp';
import philosophy3 from '../assets/images/philo03.webp';

const Philosophy = () => {
  return (
    <section className={styles.philosophy}>
      <div className={styles.philosophyList}>
        <div className={styles.item}>
          <h4>
            최고의 품질과 고객중심, <br />
            창의적 도전으로 세상을 행복하게 한다.
          </h4>
          <p>
            경영철학은 최고경양자의 신념이자 우리 그룹의 존재 이유입니다. <br />
            SPC그룹은 창의적 도전정신을 바탕으로 <br />
            맛있고 건강한 제품을 통해 언제나 고객의 행복과 함께하겠습니다.
          </p>
        </div>

        <div className={styles.item}>
          <h4>고객 만족</h4>
          <p>고객의 기대를 넘는 서비스와 경험을 제공하겠습니다.</p>
        </div>

        <div className={styles.item}>
          <h4>지속 가능한 성장</h4>
          <p>환경과 사회를 생각하며, 함께 성장하는 기업이 되겠습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
