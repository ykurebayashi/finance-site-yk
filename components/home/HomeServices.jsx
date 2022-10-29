import styles from "../../styles/home/HomeServices.module.scss";

const HomeServices = () => {
  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>
            Financial <span>Services</span>
          </h2>
          <span>ALIQUAM ID URNA IMPERDIET LIBERO MOLLIS HENDRERIT</span>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
