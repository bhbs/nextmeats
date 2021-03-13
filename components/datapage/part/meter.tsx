import React, { useEffect, useState } from "react";
import { getIcon } from "./meterIcons";
import { Item } from "../data";

type Props = {
  item: Item;
  rate: number;
};

const Component = ({ item, rate }: Props): React.ReactElement => {
  const [number, setNumber] = useState(0);

  const iconNumber = getIcon(item).number;
  const icon = getIcon(item).icon;

  useEffect(() => {
    const n = Math.floor(rate * iconNumber);

    if (n > number) {
      setTimeout(() => {
        setNumber(number + 1);
      }, 20);
    }
  }, [number]);

  return (
    <div>
      {Array.from({ length: iconNumber }).map((_, i) => {
        return (
          <div
            key={`meter_${i}`}
            style={{
              display: "inline-block",
              opacity: i > number ? ".4" : "1",
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
