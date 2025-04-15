import React from 'react';
import styles from '../styles/Philosophy.module.scss';
import img1 from '../assets/images/philo01.webp';
import img2 from '../assets/images/philo02.webp';
import img3 from '../assets/images/philo03.webp';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';
import { Trans } from 'react-i18next';

const Philosophy = () => {
  const { t } = useTranslation();

  console.log(t('p').length);

  return (
    <section className={styles.philosophy}>
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <LanguageSelector />
      </div>
      <div className={styles.philosophyList}>
        <div className={styles.item}>
          <img src={img1} alt='11' className={styles.top} />
          <br />
          <br />
          <ab>{t('philosophy')}</ab>
          <h4>
            <Trans i18nKey='h4' />
          </h4>
          <p className={t('p').length > 150 ? styles.innerEnP : styles.innerP}>
            <Trans i18nKey='p' />
          </p>
        </div>

        <div className={styles.item}>
          <img src={img2} alt='22' className={styles.top} />

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
          <img src={img3} alt='33' className={styles.bot} />
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
