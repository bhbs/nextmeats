import React, { useEffect, useState } from "react";
import styles from "./circleMeter.module.scss";

const meterNumber = 50;

type Props = {
  rate: number;
};

const Component = ({ rate }: Props): React.ReactElement => {
  const n = Math.floor(rate * meterNumber);

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
                  animationPlayState: i > n ? "running" : "paused",
                  animationDelay: `${(meterNumber - i) / 50}s`,
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
      <Number n={n} />
      <p>less!</p>
    </div>
  );
};

const Number = ({ n }: { n: number }): React.ReactElement => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (meterNumber - n > number) {
      setTimeout(() => {
        setNumber(number + 1);
      }, 10);
    }
  }, [number]);

  return (
    <p>
      {number * (100 / meterNumber) - 1}
      <span>%</span>
    </p>
  );
};

export default Component;
