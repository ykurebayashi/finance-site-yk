import styles from "../../styles/home/HomeServices.module.scss";
import Image from "next/image";

import { HomeServiceItems } from "./HomeServiceItems";

const HomeServices = () => {
  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.head}>
            Financial <span>Services</span>
          </h2>
          <span>ALIQUAM ID URNA IMPERDIET LIBERO MOLLIS HENDRERIT</span>
        </div>
        <div className={styles.content}>
          {HomeServiceItems.map((item, index) => {
            return (
              <div className={styles.card} key={index}>
                {/* <Image
                  src={item.img}
                  alt="Service Image"
                  width="100"
                  height="100"
                /> */}
                <div className={styles.text}>
                  <h5 className={styles.title}>{item.title}</h5>
                  <p className={styles.description}>{item.description}</p>
                  <button className={styles.button}>{item.button}</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
