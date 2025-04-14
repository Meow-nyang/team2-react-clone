import React from 'react';
import styles from '../styles/spirit.module.scss';
import spirit1 from '../assets/images/sangMiDang01.webp';
import spirit2 from '../assets/images/sangMiDang02.webp';
import spirit3 from '../assets/images/sangMiDang03.webp';

const Spirit = () => {
  const values = [
    {
      image: spirit1,
      title: '품질 우선',
      desc: '최고의 재료와 정성을 담아 고객에게 최상의 제품을 제공합니다.',
    },
    {
      image: spirit2,
      title: '고객 중심',
      desc: '고객의 만족을 최우선으로 생각하며, 지속적인 개선을 추구합니다.',
    },
    {
      image: spirit3,
      title: '혁신 추구',
      desc: '끊임없는 연구와 개발로 새로운 가치를 창출합니다.',
    },
  ];

  return (
    <div className={styles.sangMiDang}>
      <div className={styles.intro}>
        <h3>상미당 정신</h3>
        <p>
          SPC그룹의 뿌리인 상미당 정신은 창업주 故 허창성 선대 회장이 1945년
          개성에서 설립한 ‘상미당(尙味堂)’에서 비롯되었습니다.
        </p>
        <p>
          ‘최고의 맛을 추구하는 집’이라는 뜻의 상미당 정신은 고객에게 최고의
          품질과 서비스를 제공하겠다는 신념을 담고 있습니다.
        </p>
      </div>

      <div className={styles.values}>
        {values.map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spirit;
