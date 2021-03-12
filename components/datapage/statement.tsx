import React from "react";
import DownArrow from "./part/downArrow";
import styles from "./statement.module.scss";

const Component = (): React.ReactElement => {
  return (
    <section>
      <div className={styles.box}>
        <h3 style={{ lineHeight: "1.4" }}>
          データが裏付ける、
          <br />
          ネクストミーツの
          <br />
          インパクト。
        </h3>
        <p>
          私たちが普段当たり前に食べているお肉。しかし、畜産業は二酸化炭素、水、森林伐採などの側面で環境に及ぼす影響が大きいのが現状です。代替肉は、環境負荷を減らす「食」からのアプローチ！その実態とは？食肉1KG生産にかかる環境負荷VS代替肉の原材料である大豆1KGを生産する際の環境負荷をまとめてみました。
        </p>
        <div className={styles.bd}></div>
        <div className={styles.bd}></div>
        <div className={styles.bd}></div>
        <div className={styles.bd}></div>
      </div>
      <DownArrow />
    </section>
  );
};

export default Component;
