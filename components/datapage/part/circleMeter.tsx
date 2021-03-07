import React, { useEffect, useState } from "react";

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
    <div style={{ position: "relative" }}>
      {Array.from({ length: number }).map((_, i) => {
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "78px",
              right: "0",
              left: "0",
              margin: "auto",
              transform: `
                translate(
                  ${
                    100 *
                    Math.cos(Math.PI * 2 * (i / dropNumber) + Math.PI * -0.5)
                  }px,
                  ${
                    100 *
                    Math.sin(Math.PI * 2 * (i / dropNumber) + Math.PI * -0.5)
                  }px
                )
                rotate(${360 * (i / dropNumber)}deg)
              `,
            }}
          >
            |
          </div>
        );
      })}
      {Array.from({ length: dropNumber }).map((_, i) => {
        return (
          <div
            key={i}
            style={{
              opacity: ".2",
              position: "absolute",
              top: "78px",
              right: "0",
              left: "0",
              margin: "auto",
              transform: `
                translate(
                  ${
                    100 *
                    Math.cos(Math.PI * 2 * (i / dropNumber) + Math.PI * -0.5)
                  }px,
                  ${
                    100 *
                    Math.sin(Math.PI * 2 * (i / dropNumber) + Math.PI * -0.5)
                  }px
                )
                rotate(${360 * (i / dropNumber)}deg)
              `,
            }}
          >
            |
          </div>
        );
      })}
    </div>
  );
};

export default Component;
