import React from "react";

type Props = {
  name: "karubi" | "harami" | "chicken";
};

const Component = ({ name }: Props): React.ReactElement => {
  return (
    <section>
      <h2>{name}</h2>
      <div>
        {["CHGE", "ENERGY", "LAND", "WATER"].map((category, i) => (
          <div key={i}>
            <i>icon</i>
            <h3>title</h3>
            <p>キャッチコピー</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Component;
