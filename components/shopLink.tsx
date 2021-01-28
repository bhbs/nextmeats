import React from "react";

type Props = {
  text: {
    [key: string]: string;
  };
};

const ShopLink = ({ text }: Props): React.ReactElement => {
  return (
    <div className="shoplink">
      <p>
        <b>{text.shoplink}</b>
      </p>
      <a href="https://shop.nextmeats.jp" target="_blank" rel="noreferrer">
        <img src="/img/shoplink/ec_n_240.png" alt="shop.nextmeats" />
      </a>
      <a
        href="https://store.shopping.yahoo.co.jp/whitehole/a5d7a5e9a5.html?X=4#CentSrchFilter1"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/img/shoplink/ec_y_240.png" alt="yahoo" />
      </a>
    </div>
  );
};

export default ShopLink;
