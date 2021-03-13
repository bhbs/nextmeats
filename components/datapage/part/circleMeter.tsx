import React, { useEffect, useState } from "react";
import styles from "./circleMeter.module.scss";

const meterNumber = 50;

type Props = {
  rate: number;
};

const Component = ({ rate }: Props): React.ReactElement => {
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
      <Number rate={rate} />
      <p>less!</p>
    </div>
  );
};

const Number = ({ rate }: Props): React.ReactElement => {
  const [number, setNumber] = useState("00");
  const displayRate = Math.floor((1 - rate) * 100);

  useEffect(() => {
    let count = 30;
    const timer = setInterval(() => {
      count--;
      if (count === 1) clearInterval(timer);
      setNumber(("00" + Math.floor(displayRate / count)).slice(-2));
    }, 30);
  }, []);

  return (
    <p>
      {number}
      <span>%</span>
    </p>
  );
};

export default Component;
