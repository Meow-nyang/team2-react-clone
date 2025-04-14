// src/layout/HeadList.jsx
import styles from "./HeaderList.module.scss";

const menuItems = [
  {
    title: "ABOUT SPC",
    items: ["SPC WAY", "R&D", "관계사", "글로벌", "CI소개"],
  },
  {
    title: "HISTORY",
    items: ["헤리티지", "연혁"],
  },
  {
    title: "BRAND",
    items: ["베이커리", "디저트", "외식/다이닝", "커피/음료", "유통/서비스"],
  },
  {
    title: "SPC NOW",
    items: ["뉴스", "매거진", "SNS"],
  },
  {
    title: "ESG",
    items: ["ESG경영", "정도경영", "안전경영", "행복한 재단", "사회공헌"],
  },
  {
    title: "SUPPORT",
    items: ["가맹문의", "위치 안내", "문의하기"],
  },
];

const HeaderList = ({ onMouse }) => {
  return (
    <div
      className={styles.dropdown}
      onMouseLeave={() => {
        onMouse(false);
      }}
    >
      {menuItems.map((menu, index) => {
        return (
          <div key={index} className={styles.column}>
            <ul className={styles.items}>
              {menu.items.map((item, i) => (
                <li key={i} className={styles.item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default HeaderList;
