import React from 'react';
import { Link } from 'react-router-dom';
// Header 컴포넌트 import
import styles from '../styles/SPCESGPage.module.scss';
import imageEsg_1 from '../assets/images/esg.webp';
import imageEsg_2 from '../assets/images/esg02.webp';

const SPCESGPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className="ko">ESG경영</h2>
        <div className={styles.menuContainer}>
          <ul>
            <li>
              <Link to="/esg/" className={styles.active}>
                ESG경영체계
              </Link>
            </li>
            <li>
              <Link to="/esg/report">최고</Link>
            </li>
           
          </ul>
        </div>
      </div>

      {/* ESG 경영체계 섹션 */}
      <section className={styles.esgManagementSection}>
        <div className={styles.sectionTitle}>
          <h3 className="ko">ESG 경영체계</h3>
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.imageContainer}>
            <img src={imageEsg_2} alt="SPC ESG 경영체계 도표" />
          </div>
          <p className={styles.sectionDescription}>
            SPC그룹은 지속 가능한 성장을 추구하며, 환경(Environment), 사회(Social), 지배구조(Governance)
            각 부문에서 체계적인 관리 시스템을 구축하고 투명한 경영 활동을 실천하고 있습니다.
            <br /><br />
            최고경영자의 ESG 경영 의지를 바탕으로 ESG위원회를 중심으로 ESG 관련 주요 정책 및
            의사결정을 수행하고 있으며, 각 부문별 담당 부서를 통해 ESG 경영 목표 달성을 위해 노력하고 있습니다.
          </p>
        </div>
      </section>

      {/* 지속가능경영보고서 섹션 */}
      <section className={styles.sustainabilityReportSection}>
        <div className={styles.sectionTitle}>
          <h3 className="ko">지속가능경영보고서</h3>
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.imageContainer}>
            <div className={styles['background-wrap']}>
              <div className={styles.content}>
                <span>최고의 품질과 창의적 도전으로
행복한 세상을 만들어 나갑니다.
</span>
                
              </div>
            </div>
          </div>
          <p className={styles.sectionDescription}>
            SPC그룹은 이해관계자에게 ESG 경영 성과와 활동을 투명하게 공개하고 소통하기 위해
            지속가능경영보고서를 발간하고 있습니다. 보고서를 통해 우리의 ESG 경영 철학과 주요 활동,
            성과를 상세히 확인하실 수 있습니다.
            <br /><br />
            <div className={styles.reportLinks}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                2023년 지속가능경영보고서 다운로드
              </a>
            </div>
          </p>
        </div>
      </section>

      {/* HAPPY & HEALTHY COMPANY 섹션 */}
      <section className={styles.happyHealthySection}>
        <div className={styles.sectionTitle}>
          <h3 className="ko">HAPPY & HEALTHY COMPANY</h3>
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.imageContainer}>
       
          </div>
          <p className={styles.sectionDescription}>
            SPC그룹은 "HAPPY & HEALTHY COMPANY"라는 ESG 비전 아래, 모든 이해관계자의 행복과 건강을
            증진하는 것을 최우선 가치로 삼고 있습니다. 이를 위해 안전하고 건강한 근무 환경 조성,
            고객에게 건강하고 맛있는 제품 제공, 환경 보호 및 사회적 책임 실천에 최선을 다하고 있습니다.
          </p>
        </div>
        <div className={styles.strategyTable}>
          <div className={styles.strategyColumn}>
            <h3>추진 방향</h3>
            <ul>
              <li>ESG를 통한 성장 기반 강화</li>
              <li>ESG를 통한 제품 경쟁력 강화</li>
            </ul>
          </div>
          <div className={styles.strategyColumn}>
            <h3>전략</h3>
            <ul>
              <li>모두가 행복하고 건강한 근무환경 조성</li>
              <li>모두가 행복하고 건강한 제품 확대</li>
            </ul>
          </div>
          <div className={styles.strategyColumn}>
            <h3>전략 과제</h3>
            <ul>
              <li>안전보건경영 시스템 고도화</li>
              <li>건강, 행복 증진 프로그램 활성화</li>
              <li>윤리/준법경영 체계 고도화</li>
              <li>윤리경영 확산 및 내재화</li>
              <li>환경을 고려한 제품 개발 확대</li>
              <li>지역농가 및 소상공인 상생 강화</li>
              <li>건강과 맛을 고려한 제품 개발</li>
              <li>ESG 제품 개발을 위한 R&D 강화</li>
            </ul>
          </div>
        </div>
        <div className={styles.footer}>
          Strengthen & Expand the ESG Management System
        </div>
      </section>
    </div>
  );
};

export default SPCESGPage;