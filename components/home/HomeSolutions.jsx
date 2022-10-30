import styles from "../../styles/home/HomeSolutions.module.scss";
import { HomeSolutionItems } from "./HomeSolutionItems";

const HomeSolutions = () => {
  return (
    <div className={styles.solutions}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.subHead}>LOREM IPSUM DOLOR SIT AMET</span>
          <h2 className={styles.head}>
            Our solutions for your <span>business growth</span>
          </h2>
          <p className={styles.description}>
            Pellentesque ultrices at turpis in vestibulum. Aenean pretium elit
            nec congue elementum. Nulla luctus laoreet porta. Maecenas at nisi
            tempus, porta metus vitae, faucibus augue.
          </p>
          <p className={styles.description}>
            Fusce et venenatis ex. Quisque varius, velit quis dictum sagittis,
            odio velit molestie nunc, ut posuere ante tortor ut neque.
          </p>
          <button className={styles.button}>READ MORE</button>
        </div>
        <div className={styles.cards}>
          {HomeSolutionItems.map((item, index) => {
            return (
              <div className={styles.card} key={index}>
                <div className={styles.number}>{item.number}</div>
                <h3 className={styles.title}>{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeSolutions;
