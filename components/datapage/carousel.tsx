import React from "react";

const Component = (): React.ReactElement => {
  return (
    <section>
      <h2>LINE UP</h2>
      {["NEXTチキン", "NEXTカルビ", "NEXTハラミ"].map((name, i) => (
        <div key={i}>
          <h3>{name}</h3>
          <img src="/img/accelarator/merit02.jpg" alt="" />
          <a>データを見る</a>
        </div>
      ))}
      <p>↓</p>
    </section>
  );
};

export default Component;
