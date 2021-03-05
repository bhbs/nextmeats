import React from "react";
import styles from "./statement.module.scss";

const Component = (): React.ReactElement => {
  return (
    <section>
      <div className={styles.box}>
        <h2 style={{ lineHeight: "1.4" }}>
          データが裏付ける、
          <br />
          ネクストミーツの
          <br />
          インパクト。
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eius
          facilis earum laudantium repudiandae explicabo neque reprehenderit
          voluptas a sint cumque, enim porro voluptatem quae, obcaecati amet
          nobis expedita aliquam?
        </p>
        <div className={styles.bd}></div>
        <div className={styles.bd}></div>
        <div className={styles.bd}></div>
        <div className={styles.bd}></div>
      </div>
      <div>↓</div>
    </section>
  );
};

export default Component;
