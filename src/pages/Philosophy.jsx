import React from 'react';
import styles from '../styles/Philosophy.module.scss';

const Philosophy = () => {
  return (
    <section className={styles.philosophy}>
      <div className={styles.philosophyList}>
        <div className={styles.item}>
          <br />
          <br />
          <ab>경영철학</ab>
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
          <br />
          <br />
          <ab>비전</ab>
          <h4>GREAT FOOD COMPANY</h4>
          <p>
            SPC그룹의 비전은 전 세계인에게 존경받고 지속 성장 가능한
            <br />
            경쟁력을 갖춘 글로벌 종합식품기업이 되는 것입니다.
          </p>
        </div>

        <div className={styles.item}>
          <br />
          <ab>핵심가치</ab>
          <h4>
            핵심가치를 지키고 실천할 때 SPC그룹이 <br />
            추구하는 행복한 세상이 펼쳐집니다.
          </h4>
          <p>
            SPC그룹의 핵심가치는 SPC문화를 구성하는 신조이며 <br />
            최고의 기업으로 성장할 수 있는 성공 DNA입니다.
          </p>
          <ul className={styles.innerTag}>
            <li className={styles.innerBox}>
              <div className={styles.innerText}>
                <h4>정직</h4>
                <p>
                  우리는 기본에 충실하며
                  <br />
                  올바르게 행동한다.
                </p>
              </div>
            </li>
            <li className={styles.innerBox}>
              <div className={styles.innerText}>
                <h4>혁신</h4>
                <p>
                  우리는 변화를 추구하며
                  <br />
                  열정적으로 도전한다.
                </p>
              </div>
            </li>
            <li className={styles.innerBox}>
              <div className={styles.innerText}>
                <h4>협업</h4>
                <p>
                  우리는 다양성을 존중하며
                  <br />
                  유기적으로 협력한다.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
