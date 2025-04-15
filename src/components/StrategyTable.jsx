import React from 'react';
import styles from '../styles/StrategyTable.module.scss';

const StrategyTable = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.label}>추진 방향</th>
            <td>
              <strong>ESG를 통한 성장 기반 강화</strong>
            </td>
            <td>
              <strong>ESG를 통한 제품 경쟁력 강화</strong>
            </td>
          </tr>
          <tr>
            <th className={styles.label}>전략</th>
            <td>모두가 행복하고 건강한 근무환경 조성</td>
            <td>모두가 행복하고 건강한 제품 확대</td>
          </tr>
          <tr>
            <th className={styles.label}>전략 과제</th>
            <td>
              <ul>
                <li className={styles.innerLi}>안전보건경영 시스템 고도화</li>
                <li className={styles.innerLi}>
                  건강, 행복 증진 프로그램 활성화
                </li>
                <li className={styles.innerLi}>윤리/준법경영 체계 고도화</li>
                <li className={styles.innerLi}>윤리경영 확산 및 내재화</li>
              </ul>
            </td>
            <td>
              <ul>
                <li className={styles.innerLi}>환경을 고려한 제품 개발 확대</li>
                <li className={styles.innerLi}>
                  지역농가 및 소상공인 상생 강화
                </li>
                <li className={styles.innerLi}>건강과 맛을 고려한 제품 개발</li>
                <li className={styles.innerLi}>
                  ESG 제품 개발을 위한 R&D 강화
                </li>
              </ul>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.centerRow}>
            <th className={styles.label}>추진 기반 체계</th>
            <td colSpan='2' className={styles.botItem}>
              <div className={styles.footer}>
                Strengthen & Expand the ESG Management System
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={styles.centerBox}>
        <h2>HAPPY & HEALTHY COMPANY</h2>
        <p>
          SPC그룹은 이해관계자 모두의
          <br />
          행복과 건강을 추구하는 기업이 된다.
        </p>
      </div>
    </div>
  );
};

export default StrategyTable;
