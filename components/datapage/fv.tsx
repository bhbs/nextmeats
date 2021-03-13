import React, { useEffect, useState } from "react";
import styles from "./fv.module.scss";

const mainFv = "/img/datapage/fv/cyber_chicken_2.gif";
const lightFv = "/img/datapage/fv/cyber_chicken_light.gif";

const Component = (): React.ReactElement => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = mainFv;
    image.onload = () => {
      setLoaded(true);
    };
  }, []);

  return (
    <section className={styles.fv}>
      <img
        src={loaded ? mainFv : lightFv}
        style={{
          display: "block",
          boxSizing: "border-box",
        }}
      />
      <div className={styles.counters}>
        <Counter opacity={0.3} />
        <Counter opacity={0.3} />
        <Counter opacity={0.3} />
        <Counter opacity={0.3} />
        <Counter opacity={0.5} />
        <Counter opacity={0.5} />
        <Counter opacity={0.5} />
        <Counter opacity={0.5} />
        <Counter opacity={0.7} />
        <Counter opacity={0.7} />
        <Counter opacity={0.7} />
        <Counter opacity={0.7} />
        <Counter opacity={0.9} />
        <Counter opacity={0.9} />
        <Counter opacity={0.9} />
        <Counter opacity={0.9} />
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
    }, Math.floor(Math.random() * 500));
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
