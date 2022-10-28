import styles from "../../styles/HeroBottom.module.scss";

const HeroBottom = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4 className={styles.title}>Request a call back right now?</h4>
          <p className={styles.description}>
            Mauris ut dapibus velit cras interdum nisl ac urna tempor mollis.
          </p>
        </div>
        <button className={styles.button}>CONTACT US</button>
      </div>
    </div>
  );
};

export default HeroBottom;
