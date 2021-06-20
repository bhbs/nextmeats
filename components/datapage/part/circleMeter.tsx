import React, { useEffect, useState } from "react";
import styles from "./circleMeter.module.scss";

const meterNumber = 50;

type Props = {
  rate: number;
  animation: boolean;
};

const Component = ({ rate, animation }: Props): React.ReactElement => {
  const n = rate * meterNumber;

  return (
    <div className={styles.circleMeterWrapper}>
      <div className={styles.focusVertical}></div>
      <div className={styles.meterWrapper}>
        <div className={styles.focusHorizontal}></div>
        <div className={styles.circleMeter}>
          {Array.from({ length: meterNumber }).map((_, i) => {
            return (
              <div
                key={`circleMeter_${i}`}
                className={styles.meter}
                style={{
                  animationPlayState:
                    i > meterNumber - n ? "paused" : "running",
                  animationDelay: `${i / 50 + 0.3}s`,
                  transform: `
                translate(
                  ${
                    90 *
                    Math.cos(Math.PI * 2 * (i / meterNumber) + Math.PI * -0.5)
                  }px,
                  ${
                    90 *
                    Math.sin(Math.PI * 2 * (i / meterNumber) + Math.PI * -0.5)
                  }px
                )
                rotate(${360 * (i / meterNumber)}deg)
              `,
                }}
              ></div>
            );
          })}
        </div>
        <div className={styles.focusHorizontal}></div>
      </div>
      <div className={styles.focusVertical}></div>
      <Number rate={rate} animation={animation} />
      <p>less!</p>
    </div>
  );
};

const Number = ({ rate, animation }: Props): React.ReactElement => {
  const [number, setNumber] = useState("00");
  const displayRate = Math.floor((1 - rate) * 100);

  useEffect(() => {
    if (!animation) {
      setNumber(("00" + Math.floor(displayRate)).slice(-2));
      return;
    }
    let count = 1;
    const timer = setInterval(() => {
      count++;
      if (count === 8) clearInterval(timer);
      setNumber(("00" + Math.floor((displayRate * count) / 8)).slice(-2));
    }, 100);
  }, []);

  return (
    <p>
      {number}
      <span>%</span>
    </p>
  );
};

export default Component;
