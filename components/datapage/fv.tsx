import React, { useEffect, useState } from "react";
import styles from "./fv.module.scss";

const Component = (): React.ReactElement => {
  return (
    <section className={styles.fv}>
      <img
        src="./img/datapage/fv/logo.png"
        style={{ display: "block", padding: "32px", boxSizing: "border-box" }}
      />
      <div className={styles.counters}>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </section>
  );
};

const Counter = (): React.ReactElement => {
  const [count, setCount] = useState(Math.floor(Math.random() * 100));
  useEffect(() => {
    setTimeout(() => {
      setCount(count > 90 ? Math.floor(Math.random() * 90) : count + 7);
    }, count * 10);
  });
  return (
    <>
      <div className={styles.counter}>{count}%</div>
    </>
  );
};

export default Component;
