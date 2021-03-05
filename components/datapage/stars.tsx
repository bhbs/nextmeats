import React from "react";
import styles from "./stars.module.scss";

const Component = (): React.ReactElement => {
  return (
    <div className={styles.space}>
      <div className={styles.stars}></div>
      <div className={styles.stars}></div>
      <div className={styles.stars}></div>
      <div className={styles.stars}></div>
      <div className={styles.stars}></div>
    </div>
  );
};

export default Component;
