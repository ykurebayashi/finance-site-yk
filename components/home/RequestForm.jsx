import styles from "../../styles/home/RequestForm.module.scss";

const RequestForm = () => {
  return (
    <div className={styles.request}>
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

export default RequestForm;
