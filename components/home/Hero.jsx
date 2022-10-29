import styles from "../../styles/home/Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4 className={styles.subTitle}>WE ARE READY TO HELP YOU</h4>
          <h1 className={styles.title}>FINANCIAL ANALYSIS & CONSULTING</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className={styles.button}>CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
