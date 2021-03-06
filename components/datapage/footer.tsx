import React from "react";
import { Link } from "react-scroll";
import { Product } from "../../pages/data";
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
    <section>
      <div className={styles.cardWrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.195"
          height="12.17"
          viewBox="0 0 17.195 12.17"
        >
          <path
            id="パス_1235"
            data-name="パス 1235"
            d="M40.006,1098.117a14.288,14.288,0,0,0-2.285,5.109h3.946v7.061H34.149v-5.317a12.126,12.126,0,0,1,1.994-6.853Zm10.051,0a16.478,16.478,0,0,0-2.492,5.109h3.779v7.061H43.785v-5.4c-.041-2.409.5-3.945,2.409-6.77Z"
            transform="translate(-34.149 -1098.117)"
            fill="#fff"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.195"
          height="12.169"
          viewBox="0 0 17.195 12.169"
        >
          <path
            id="パス_1236"
            data-name="パス 1236"
            d="M325.943,1293.011a16.578,16.578,0,0,0,2.492-5.108h-3.779v-7.061h7.559v5.4c.041,2.409-.5,3.945-2.409,6.769Zm10.051,0a14.709,14.709,0,0,0,2.285-5.108h-3.946v-7.061h7.518v5.316a12.214,12.214,0,0,1-1.994,6.853Z"
            transform="translate(-324.656 -1280.842)"
            fill="#fff"
          />
        </svg>
        <div className={styles.card}>
          <div>
            <h3>引用元</h3>
            <p>
              <a>水資源</a>
            </p>
            <p>
              <a>温室ガス、土地の使用面積</a>
            </p>
            <p>
              <a>エネルギー消費量</a>
            </p>
          </div>
        </div>
      </div>
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
      <div className={styles.sns}>
        <a>T</a>
        <a>F</a>
        <a>I</a>
      </div>
      <div style={{ textAlign: "center" }}>
        <p className={styles.catch}>
          今日の一食が、
          <br />
          未来につながる。
        </p>
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

export default Component;
