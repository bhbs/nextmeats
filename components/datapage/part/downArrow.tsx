import React from "react";
import styles from "./downArrow.module.scss";

const Component = (): React.ReactElement => {
  return (
    <div className={styles.downArrow}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23.995"
        height="36.996"
        viewBox="0 0 23.995 36.996"
      >
        <g transform="translate(0)">
          <g transform="translate(0 26.355)">
            <path
              d="M6488.354,1828.609v-2.117l-12-8.524v2.117Z"
              transform="translate(-6476.355 -1817.967)"
              fill="#fff"
            />
            <path
              d="M6486.356,1828.609v-2.117l12-8.524v2.117Z"
              transform="translate(-6474.359 -1817.967)"
              fill="#fff"
            />
          </g>
          <line
            y2="35.422"
            transform="translate(11.998)"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
};

export default Component;
