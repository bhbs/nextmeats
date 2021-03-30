import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { Item } from "../data";

type Props = {
  item: Item;
};

const Component = ({ item }: Props): React.ReactElement => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      path: item.path,
    });
  }, []);

  return (
    <>
      <div style={{ width: "80px", margin: "auto" }} ref={animationContainer} />
    </>
  );
};

export default Component;
