import React, { useEffect, useState } from "react";
import styles from "./fv.module.scss";

const Component = (): React.ReactElement => {
  return (
    <section className={styles.fv}>
      <img
        src="./img/datapage/fv/cyber_chicken.gif"
        style={{
          display: "block",
          boxSizing: "border-box",
        }}
      />
      <div className={styles.counters}>
        <Counter opacity={0.1} />
        <Counter opacity={0.1} />
        <Counter opacity={0.1} />
        <Counter opacity={0.1} />
        <Counter opacity={0.2} />
        <Counter opacity={0.2} />
        <Counter opacity={0.2} />
        <Counter opacity={0.2} />
        <Counter opacity={0.3} />
        <Counter opacity={0.3} />
        <Counter opacity={0.3} />
        <Counter opacity={0.3} />
        <Counter opacity={0.8} />
        <Counter opacity={0.8} />
        <Counter opacity={0.8} />
        <Counter opacity={0.8} />
        <Counter opacity={1} target={99} />
        <Counter opacity={1} target={77} />
        <Counter opacity={1} target={99} />
        <Counter opacity={1} target={22} />
      </div>
    </section>
  );
};

type CounterProps = {
  opacity?: number;
  target?: number;
};

const Counter = ({ opacity, target }: CounterProps): React.ReactElement => {
  const [count, setCount] = useState(Math.floor(Math.random() * 99));
  useEffect(() => {
    if (count == target) return;
    setTimeout(() => {
      setCount(count > 98 ? Math.floor(Math.random() * 99) : count + 1);
    }, Math.floor(Math.random() * 77));
  });
  return (
    <>
      <div
        className={styles.counter}
        style={{ opacity, color: count == target && "#009BBF" }}
      >
        {("00" + count).slice(-2)}%
      </div>
    </>
  );
};

export default Component;
