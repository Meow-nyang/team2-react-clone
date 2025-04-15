import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/SPCESGPage.module.scss';
import imageEsg_2 from '../assets/images/esg02.webp';
import StrategyTable from './StrategyTable';

const SPCESGPage = () => {
  return (
    
    <div className={styles.container}>
      <h1 className={`ko ${styles.mainTitle}`}>ESG경영</h1> {/* 클래스 추가 */}
      {/* 타이틀 및 탭 메뉴 */}
      
      <div className={styles.title}>
          
        <div className={styles.tabMenu}>
          
          <Link to="/esg/" className={`${styles.tab} ${styles.active}`}>
            ESG경영 체계
          </Link>
          <Link to="/esg/report" className={styles.tab}>
            지속가능경영보고서
          </Link>
        </div>
      </div>

      {/* ESG 경영체계 섹션 */}
      <section className={styles.esgManagementSection}>
        <div className={styles.sectionTitle}>
        
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.imageContainer}>
            <div className={styles.imageTextBlock}> {/* 클래스 적용 */}
            <img
  src={imageEsg_2}
  alt="SPC ESG 경영체계 도표"
  style={{ maxWidth: '100%', height: 'auto' }}
  className={styles.hoverImage} // 클래스 추가
/>
              SPC그룹은 지속 가능한 성장을 추구하며, 환경(Environment), 사회(Social), 지배구조(Governance)
              각 부문에서 체계적인 관리 시스템을 구축하고 투명한 경영 활동을 실천하고 있습니다.
              <br /><br />
            </div>
            
            <p className={styles.sectionDescription}>
            
            </p>
          </div>
        
        </div>
      </section>

      {/* 지속가능경영보고서 섹션 */}
      <section className={styles.sustainabilityReportSection}>
        <div className={styles.sectionTitle}></div>
        <div className={styles.sectionContent}>
          <div className={styles.imageContainer}>
            <div className={styles['background-wrap']}>
              <div className={styles.content}>
                <span>
                  최고의 품질과 창의적 도전으로<br />
                  행복한 세상을 만들어 나갑니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HAPPY & HEALTHY COMPANY 섹션 */}
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