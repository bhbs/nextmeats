import React, { useEffect, useState } from "react";

const Component = (): React.ReactElement => {
  return (
    <section>
      <img src="./logo" alt="" />
      <div>100% 100%</div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </section>
  );
};

const Counter = (): React.ReactElement => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, count * 10);
  });
  return (
    <>
      <div>count: {count}</div>
    </>
  );
};

export default Component;
