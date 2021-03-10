import React, { useEffect, useState } from "react";
import { getIcon } from "./meterIcons";
import { Item } from "../data";

const dropNumber = 18;

type Props = {
  item: Item;
  rate: number;
};

const Component = ({ item, rate }: Props): React.ReactElement => {
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
      {Array.from({ length: dropNumber }).map((_, i) => {
        return (
          <div
            key={i}
            style={{
              display: "inline-block",
              marginRight: "5px",
              opacity: i > number ? ".4" : "1",
            }}
          >
            {getIcon(item)}
          </div>
        );
      })}
    </div>
  );
};

export default Component;
