import React from "react";
import styles from "./footer.module.scss";

const Component = (): React.ReactElement => {
  return (
    <section>
      <div className={styles.card}>
        <h3>references</h3>
        <p>
          <a>h2o</a>
        </p>
        <p>
          <a>cho</a>
        </p>
        <p>
          <a>cal</a>
        </p>
      </div>
      <div className={styles.card}>NEXTカルビを見る</div>
      <div className={styles.card}>NEXTハラミを見る</div>
      <div className={styles.sns}>
        <a>T</a>
        <a>F</a>
        <a>I</a>
      </div>
      <div style={{ textAlign: "center" }}>
        <p className={styles.catch}>
          今日の一食が、
          <br />
          未来につながる。
        </p>
      </div>
    </section>
  );
};

export default Component;
