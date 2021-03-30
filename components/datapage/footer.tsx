import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Product } from "../../pages/data";
import SnsLink from "../snsLink";
import styles from "./footer.module.scss";

type Props = {
  items: {
    id: Product;
    name: string;
    img: string;
  }[];
  product: Product;
  setProduct: (value: React.SetStateAction<Product>) => void;
};

const Component = ({
  items,
  product,
  setProduct,
}: Props): React.ReactElement => {
  const nextItem = getNextItem(items, product);
  const prevItem = getPrevItem(items, product);

  return (
    <section className={styles.footer}>
      <Link to="carousel" onClick={() => setProduct(prevItem.id)}>
        <div className={styles.prev}>
          <div>{prevItem.name}を見る</div>
        </div>
      </Link>
      <Link to="carousel" onClick={() => setProduct(nextItem.id)}>
        <div className={styles.next}>
          <div>{nextItem.name}を見る</div>
        </div>
      </Link>
      <div style={{ textAlign: "center" }}>
        <SnsLink languageCode="jp" color="white" />
        <p className={styles.catch}>
          今日の一食が、
          <br />
          未来につながる。
        </p>
      </div>
      <Dish product={product} />
      <div
        style={{
          textAlign: "center",
          fontStyle: "italic",
          padding: "24px",
          background: "black",
          marginTop: "-80px",
          position: "relative",
          zIndex: 2,
        }}
      >
        © 2021 Next Meats Co., Ltd.
      </div>
    </section>
  );
};

const getNextItem = (items, product) => {
  const index = items.findIndex((item) => {
    return item.id === product;
  });

  const nextIndex = index + 1;
  const availableNextIndex = nextIndex % items.length;

  return items[availableNextIndex];
};
const getPrevItem = (items, product) => {
  const index = items.findIndex((item) => {
    return item.id === product;
  });

  const prevIndex = index - 1;
  const availablePrevIndex = (prevIndex + items.length) % items.length;

  return items[availablePrevIndex];
};

const Dish = ({ product }: { product: Product }) => {
  const [displayed, setDisplayed] = useState(false);

  useEffect(() => {
    const dish = document.querySelector("#dish");
    new IntersectionObserver((entries) => {
      setDisplayed(entries[0].isIntersecting);
    }).observe(dish);
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        marginTop: "-75px",
      }}
      id="dish"
    >
      <div
        style={{
          transform: displayed ? "translateY(0%)" : "translateY(60%)",
          transition: "2s",
        }}
      >
        <Image
          src={`/img/datapage/footer/dish_${product}.png`}
          width={375}
          height={375}
        />
      </div>
    </div>
  );
};

export default Component;
