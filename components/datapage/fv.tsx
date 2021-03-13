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
  const [displayCount, setCount] = useState("00");
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    let count = Math.floor(Math.random() * 100);
    const timer = setInterval(() => {
      count++;
      if (count > 99) count = 0;
      if (count == target) {
        clearInterval(timer);
        setFixed(true);
      }
      setCount(("00" + count).slice(-2));
    }, Math.random() * 100 + 100);
  }, []);

  return (
    <>
      <div
        className={styles.counter}
        style={{ opacity, color: fixed && "#009BBF" }}
      >
        {displayCount}%
      </div>
    </>
  );
};

export default Component;
