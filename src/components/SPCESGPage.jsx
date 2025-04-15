import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/SPCESGPage.module.scss';
import imageEsg_2 from '../assets/images/esg02.webp';
import StrategyTable from './StrategyTable';

const SPCESGPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={`ko ${styles.mainTitle}`}>ESG경영</h1>
      <div className={styles.title}>
        <div className={styles.tabMenu}>
         
        </div>
      </div>

      {/* ESG 경영체계 섹션 (좌우 배치) */}
      <section className={styles.esgManagementSectionFull}>
        <div className={styles.sectionContentFull}>
          <div className={styles.imageContainerFull}>
            <img
              src={imageEsg_2}
              alt="SPC ESG 경영체계 도표"
              style={{ maxWidth: '100%', height: 'auto' }}
              className={styles.hoverImage}
            />
          </div>
          <div className={styles.textContainerFull}>
            <p className={styles.sectionDescriptionFull}>
              SPC그룹은 지속 가능한 성장을 추구하며, 환경(Environment), 사회(Social), 지배구조(Governance)
              각 부문에서 체계적인 관리 시스템을 구축하고 투명한 경영 활동을 실천하고 있습니다.
              <br /><br />
            </p>
          </div>
        </div>
      </section>

      {/* 지속가능경영보고서 섹션 (하단 중앙 배치) */}
      <section className={styles.sustainabilityReportBottom}>
        <div className={styles['background-wrap-bottom']}>
          <div className={styles.contentBottom}>
            <span>
              최고의 품질과 창의적 도전으로<br />
              행복한 세상을 만들어 나갑니다.
            </span>
          </div>
        </div>
      </section>

      {/* HAPPY & HEALTHY COMPANY 섹션 (기존 유지) */}
      <section className={styles.happyHealthySection}>
        <div className={styles.sectionTitle}></div>
        <div className={styles.sectionContent}>
          <div className={styles.imageContainer}></div>
        </div>
        <StrategyTable />
      </section>
    </div>
  );
};

export default SPCESGPage;