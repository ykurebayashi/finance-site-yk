import {
  FaClock,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
import styles from "../styles/SubHeader.module.scss";

const SubHeader = () => {
  return (
    <div className={styles.subHeader}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.column}>
            <FaClock size="18" />
            <p>Mon-Fri 09:00-17:00</p>
          </div>
          <div className={styles.column}>
            <FaPhone size="18" />
            <p>090-080-0760</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.box}>
            <FaFacebookF size="18" />
          </div>
          <div className={styles.box}>
            <FaTwitter size="18" />
          </div>
          <div className={styles.box}>
            <FaLinkedinIn size="18" />
          </div>
          <div className={styles.box}>
            <FaBehance size="18" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
