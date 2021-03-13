import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./fv.module.scss";

const mainFv = "/img/datapage/fv/cyber_chicken_2.gif";
const lightFv = "/img/datapage/fv/cyber_chicken_light.gif";

const Component = (): React.ReactElement => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = document.createElement("img");
    image.src = mainFv;
    image.onload = () => {
      setLoaded(true);
    };
  }, []);

  return (
    <section className={styles.fv}>
      <div
        style={{
          display: "block",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Image src={loaded ? mainFv : lightFv} width={375} height={375} />
      </div>
      <div className={styles.counters}>
        <Counter opacity={0.2} />
        <Counter opacity={0.2} />
        <Counter opacity={0.2} />
        <Counter opacity={0.2} />
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
        <Counter opacity={1} target={93} />
        <Counter opacity={1} target={39} />
        <Counter opacity={1} target={39} />
        <Counter opacity={1} target={45} />
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
    }, count * Math.random() * 10);
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
