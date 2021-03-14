import React, { useEffect, useState } from "react";
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
    <section className={styles.footer}>
      <div className={styles.cardWrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.195"
          height="12.17"
          viewBox="0 0 17.195 12.17"
          className={styles.quotes}
        >
          <path
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
          className={styles.quotes}
        >
          <path
            d="M325.943,1293.011a16.578,16.578,0,0,0,2.492-5.108h-3.779v-7.061h7.559v5.4c.041,2.409-.5,3.945-2.409,6.769Zm10.051,0a14.709,14.709,0,0,0,2.285-5.108h-3.946v-7.061h7.518v5.316a12.214,12.214,0,0,1-1.994,6.853Z"
            transform="translate(-324.656 -1280.842)"
            fill="#fff"
          />
        </svg>
        <div className={styles.card}>
          <div>
            <h3>引用元</h3>
            <p>
              <a>水資源 {linkIcon}</a>
            </p>
            <p>
              <a>温室ガス、土地の使用面積 {linkIcon}</a>
            </p>
            <p>
              <a>エネルギー消費量 {linkIcon}</a>
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
        <a href="https://twitter.com/MeatsNext">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="22.753"
            viewBox="0 0 28 22.753"
          >
            <path
              id="white_background"
              data-name="white background"
              d="M144.3,1534.359c.017.247.017.494.017.743,0,7.591-5.779,16.345-16.345,16.345h0a16.256,16.256,0,0,1-8.805-2.58,11.518,11.518,0,0,0,8.5-2.381,5.751,5.751,0,0,1-5.365-3.988,5.715,5.715,0,0,0,2.594-.1,5.744,5.744,0,0,1-4.609-5.63v-.07a5.7,5.7,0,0,0,2.607.719,5.751,5.751,0,0,1-1.777-7.674,16.3,16.3,0,0,0,11.839,6,5.75,5.75,0,0,1,9.789-5.239,11.526,11.526,0,0,0,3.648-1.4,5.764,5.764,0,0,1-2.526,3.179,11.4,11.4,0,0,0,3.3-.9A11.652,11.652,0,0,1,144.3,1534.359Z"
              transform="translate(-119.166 -1528.694)"
              fill="#fff"
            />
          </svg>
        </a>
        <a href="https://www.facebook.com/NextMeats">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
          >
            <path
              d="M200.619,1526.695H175.713a1.547,1.547,0,0,0-1.547,1.547v24.906a1.547,1.547,0,0,0,1.547,1.547h13.411v-10.807h-3.658v-4.259h3.64v-3.109c0-3.62,2.206-5.59,5.433-5.59a30.719,30.719,0,0,1,3.281.187v3.778h-2.23c-1.754,0-2.093.83-2.093,2.053v2.7h4.2l-.545,4.239H193.5v10.808h7.123a1.547,1.547,0,0,0,1.547-1.547h0v-24.906a1.547,1.547,0,0,0-1.547-1.547Z"
              transform="translate(-174.166 -1526.695)"
              fill="#fff"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/nextmeatsjapan/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27.999"
            height="28"
            viewBox="0 0 27.999 28"
          >
            <g transform="translate(-228.835 -1526.695)">
              <g>
                <g>
                  <g>
                    <path
                      d="M248.863,1554.695H236.8a7.977,7.977,0,0,1-7.966-7.971v-12.06a7.978,7.978,0,0,1,7.969-7.969h12.061a7.978,7.978,0,0,1,7.969,7.969v12.06A7.978,7.978,0,0,1,248.863,1554.695Zm-12.061-25.6a5.576,5.576,0,0,0-5.569,5.569v12.06a5.576,5.576,0,0,0,5.569,5.569h12.061a5.576,5.576,0,0,0,5.572-5.569v-12.06a5.576,5.576,0,0,0-5.569-5.569Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="M242.833,1548.008a7.309,7.309,0,1,1,7.308-7.31h0A7.317,7.317,0,0,1,242.833,1548.008Zm0-12.17a4.862,4.862,0,1,0,4.862,4.862h0a4.868,4.868,0,0,0-4.862-4.866Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="M252.045,1533.136a1.757,1.757,0,1,1-1.758-1.756h0A1.756,1.756,0,0,1,252.045,1533.136Z"
                      fill="#fff"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </div>
      <div style={{ textAlign: "center" }}>
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

const linkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
  >
    <g transform="translate(-190.39 -1240.376)">
      <path
        d="M203.754,1248.012a.637.637,0,0,0-.636.637v3.818a.637.637,0,0,1-.637.636H192.3a.637.637,0,0,1-.637-.636v-10.182a.636.636,0,0,1,.637-.636h3.818a.637.637,0,0,0,0-1.273H192.3a1.91,1.91,0,0,0-1.91,1.909v10.182a1.91,1.91,0,0,0,1.91,1.909h10.181a1.909,1.909,0,0,0,1.909-1.909v-3.818A.636.636,0,0,0,203.754,1248.012Z"
        fill="#fff"
      />
      <path
        d="M202.481,1240.376h-2.545a.637.637,0,0,0,0,1.273h2.106l-6.109,6.115a.636.636,0,1,0,.9.885l6.288-6.275v2.457a.636.636,0,0,0,1.272,0v-2.546A1.909,1.909,0,0,0,202.481,1240.376Z"
        fill="#fff"
      />
    </g>
  </svg>
);

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
    new IntersectionObserver(
      (entries) => {
        setDisplayed(entries[0].isIntersecting);
      },
      {
        rootMargin: "0px",
      }
    ).observe(dish);
  }, []);

  return (
    <div style={{ overflow: "hidden", marginTop: "-75px" }} id="dish">
      <img
        src={`/img/datapage/footer/dish_${product}.png`}
        style={{
          transform: displayed ? "translateY(0%)" : "translateY(60%)",
          transition: "2s",
        }}
      />
    </div>
  );
};

export default Component;
