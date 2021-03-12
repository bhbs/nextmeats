import Lottie from "lottie-react-web";
import React, { useEffect, useState } from "react";
import SwiperCore, { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { ProductData } from "../../pages/data";
import styles from "./data.module.scss";
import co2Animation from "./lottie/icon_co2.json";
import energyAnimation from "./lottie/icon_energy.json";
import landAnimation from "./lottie/icon_land.json";
import waterAnimation from "./lottie/icon_water.json";
import CircleMeter from "./part/circleMeter";
import DownArrow from "./part/downArrow";
import Meter from "./part/meter";

SwiperCore.use([A11y]);

type Props = {
  productData: ProductData;
};

export type Item = "WATER" | "LAND" | "CHGE" | "ENERGY";

type Items = {
  subject: Item;
  img: Record<string, unknown>;
  rubi: string;
  unit: string;
}[];

const items: Items = [
  {
    subject: "CHGE",
    img: co2Animation,
    rubi: "温室ガス",
    unit: "kg",
  },
  {
    subject: "ENERGY",
    img: energyAnimation,
    rubi: "エネルギー消費量",
    unit: "MJ",
  },
  {
    subject: "LAND",
    img: landAnimation,
    rubi: "土地の使用量",
    unit: "平米",
  },
  {
    subject: "WATER",
    img: waterAnimation,
    rubi: "水資源",
    unit: "L",
  },
];

const Component = ({ productData }: Props): React.ReactElement => {
  const [modal, setModal] = useState<null | number>();
  const [animation, activateAnimation] = useState(false);

  useEffect(() => {
    activateAnimation(true);
    setTimeout(() => activateAnimation(false), 1000);
  }, [productData.name]);

  return (
    <section className={`${animation && styles.renderAnimation}`}>
      <h2>
        {productData.name}vs.従来{productData.category}
      </h2>
      <p style={{ display: "block", padding: "0 46px" }}>
        大豆1kgを生産した際にかかる環境負荷と、
        {productData.category}1kgを生産した際にかかる環境負荷を比べました。
      </p>
      <DownArrow />
      <div className={styles.dataArea}>
        {items.map((item, i) => (
          <div key={i} className={styles.box} onClick={() => setModal(i)}>
            <div className={styles.boxInner}>
              <Lottie
                options={{
                  animationData: item.img,
                }}
                width={80}
              />
              <h3>{item.subject}</h3>
              <p className={styles.rubi}>{item.rubi}</p>
              <p className={styles.text}>
                {productData.data[item.subject].text}
              </p>
            </div>
          </div>
        ))}
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
      </div>
      <Modal itemIndex={modal} productData={productData} setModal={setModal} />
    </section>
  );
};

type ModalProps = {
  itemIndex: null | number;
  productData: ProductData;
  setModal: (value: React.SetStateAction<null | number>) => void;
};

const Modal = ({
  itemIndex,
  productData,
  setModal,
}: ModalProps): React.ReactElement => {
  return typeof itemIndex == "number" ? (
    <>
      <div className={styles.modal}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          initialSlide={itemIndex}
          loop={true}
          style={{ padding: "20px" }}
        >
          {items.map((item, i) => {
            const before = productData.data[item.subject].before;
            const after = productData.data[item.subject].after;
            const rate = parseFloat(after) / parseFloat(before);
            console.log(parseFloat(before), parseFloat(after), rate);
            return (
              <SwiperSlide key={i}>
                <div className={styles.modalHeader}>
                  <div>
                    <Lottie
                      options={{
                        animationData: item.img,
                      }}
                      width={80}
                    />
                  </div>
                  <div>
                    <h3>{item.subject}</h3>
                    <p>{item.rubi}</p>
                  </div>
                </div>
                <div className={styles.modalTitle}>環境負荷削減率</div>
                <CircleMeter rate={rate} />
                <div className={styles.valueWrapper}>
                  <p className={styles.valueName}>大豆1kg生産</p>
                  <p className={styles.value}>
                    約 <span>{after}</span> {item.unit}
                  </p>
                  <Meter item={item.subject} rate={rate} />
                </div>
                <div className={styles.valueWrapper}>
                  <p className={styles.valueName}>
                    従来{productData.category}1kg生産
                  </p>
                  <p className={styles.value}>
                    約 <span>{before}</span> {item.unit}
                  </p>
                  <Meter item={item.subject} rate={1} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div onClick={() => setModal(null)} className={styles.close}>
          CLOSE X
        </div>
      </div>
    </>
  ) : (
    <></>
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

export default Component;
