import React, { useEffect, useState } from "react";
import styles from "./circleMeter.module.scss";

const dropNumber = 50;

type Props = {
  rate: number;
};

const Component = ({ rate }: Props): React.ReactElement => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const n = Math.floor(rate * dropNumber);

    if (n > number) {
      setTimeout(() => {
        setNumber(number + 1);
      }, 10);
    }
  }, [number]);

  return (
    <div>
      <div className={styles.focusVertical}></div>
      <div className={styles.meterWrapper}>
        <div className={styles.focusHorizontal}></div>
        <div className={styles.circleMeter}>
          {Array.from({ length: dropNumber }).map((_, i) => {
            return (
              <div
                key={i}
                style={{
                  opacity: i > number ? ".2" : "1",
                  position: "absolute",
                  top: "108px",
                  right: "0",
                  left: "0",
                  margin: "auto",
                  borderRadius: "1.5px",
                  width: "3px",
                  height: "10px",
                  background: "white",
                  transform: `
                translate(
                  ${
                    90 *
                    Math.cos(Math.PI * 2 * (i / dropNumber) + Math.PI * -0.5)
                  }px,
                  ${
                    90 *
                    Math.sin(Math.PI * 2 * (i / dropNumber) + Math.PI * -0.5)
                  }px
                )
                rotate(${360 * (i / dropNumber)}deg)
              `,
                }}
              ></div>
            );
          })}
        </div>
        <div className={styles.focusHorizontal}></div>
      </div>
      <div className={styles.focusVertical}></div>
    </div>
  );
};

export default Component;
