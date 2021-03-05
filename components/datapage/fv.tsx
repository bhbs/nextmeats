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
  const [count, setCount] = useState(Math.floor(Math.random() * 99));
  useEffect(() => {
    setTimeout(() => {
      setCount(count > 98 ? Math.floor(Math.random() * 99) : count + 1);
    }, Math.floor(Math.random() * 777));
  });
  return (
    <>
      <div className={styles.counter}>{("00" + count).slice(-2)}%</div>
    </>
  );
};

export default Component;
