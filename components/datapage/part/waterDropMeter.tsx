import React, { useEffect, useState } from "react";

const dropNumber = 18;

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
      }, 20);
    }
  }, [number]);

  return (
    <div>
      {Array.from({ length: number }).map((_, i) => {
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="9.134"
            height="15"
            viewBox="0 0 9.134 15"
            style={{ marginRight: "5px" }}
          >
            <path
              id="パス_1182"
              data-name="パス 1182"
              d="M151.815,329s4.567,4.257,4.567,9.8c0,2.874-2.045,5.2-4.567,5.2s-4.567-2.33-4.567-5.2C147.248,333.257,151.815,329,151.815,329Z"
              transform="translate(-147.248 -329)"
              fill="#fff"
            />
          </svg>
        );
      })}
      {Array.from({ length: dropNumber - number }).map((_, i) => {
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="9.134"
            height="15"
            viewBox="0 0 9.134 15"
            style={{ marginRight: "5px", opacity: ".4" }}
          >
            <path
              id="パス_1182"
              data-name="パス 1182"
              d="M151.815,329s4.567,4.257,4.567,9.8c0,2.874-2.045,5.2-4.567,5.2s-4.567-2.33-4.567-5.2C147.248,333.257,151.815,329,151.815,329Z"
              transform="translate(-147.248 -329)"
              fill="#fff"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default Component;
