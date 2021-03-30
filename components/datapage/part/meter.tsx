import React from "react";
import { ItemName } from "../data";
import styles from "./meter.module.scss";
import { getIcon } from "./meterIcons";

type Props = {
  item: ItemName;
  rate: number;
};

const Component = ({ item, rate }: Props): React.ReactElement => {
  const iconNumber = getIcon(item).number;
  const icon = getIcon(item).icon;

  return (
    <div>
      {Array.from({ length: iconNumber }).map((_, i) => {
        return (
          <div
            key={`meter_${i}`}
            className={styles.meter}
            style={{
              display: "inline-block",
              animationPlayState:
                i > Math.floor(rate * iconNumber) ? "running" : "paused",
              animationDelay: `${(iconNumber - i) / 10}s`,
            }}
          >
            {icon}
          </div>
        );
      })}
    </div>
  );
};

export default Component;
