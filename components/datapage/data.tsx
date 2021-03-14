import Lottie from "lottie-react-web";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
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

SwiperCore.use([Navigation, Pagination]);

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
      <Head>
        <link rel="stylesheet" href="/css/swiper.css" />
      </Head>
      <h2>
        {productData.name}vs.従来{productData.category}
      </h2>
      <p style={{ display: "block", padding: "0 46px" }}>
        大豆 1kg を生産した際にかかる環境負荷と、
        {productData.category} 1kg を生産した際にかかる環境負荷を比べました。
      </p>
      <DownArrow />
      <div className={styles.dataArea}>
        {items.map((item, i) => (
          <div
            key={`data_${i}`}
            className={styles.box}
            onClick={() => setModal(i)}
          >
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
            {i % 2 ? pointerIconLeft : pointerIconRight}
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
                <a href="https://www.env.go.jp/water/virtual_water/kyouzai.html">
                  水資源 {linkIcon}
                </a>
              </p>
              <p>
                <a href="https://ourworldindata.org/environmental-impacts-of-food">
                  温室ガス、土地の使用面積 {linkIcon}
                </a>
              </p>
              <p>
                <a href="https://www.naro.affrc.go.jp/org/nkk/soshiki/soshiki07-shigen/01shigen/pdf/sekkeitohyouka/huzoku-2.pdf">
                  エネルギー消費量 {linkIcon}
                </a>
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
      <div className={styles.modalWrapper} onClick={() => setModal(null)}></div>
      <div className={styles.modal}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          initialSlide={itemIndex}
          loop={true}
          style={{ padding: "20px" }}
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
          pagination={{
            el: `.${styles.swiperPagination}`,
            clickable: false,
          }}
        >
          {items.map((item, i) => {
            const before = productData.data[item.subject].before;
            const after = productData.data[item.subject].after;
            const rate = parseFloat(after) / parseFloat(before);
            return (
              <SwiperSlide key={`modal_${i}`}>
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
                <CircleMeter rate={rate} animation={i === itemIndex} />
                <div className={styles.valueWrapper}>
                  <div className={styles.valueName}>大豆 1kg 生産</div>
                  <div className={styles.value}>
                    約 <span>{after}</span> {item.unit}
                  </div>
                </div>
                <Meter item={item.subject} rate={rate} />
                <div className={styles.valueWrapper}>
                  <div className={styles.valueName}>
                    従来{productData.category} 1kg 生産
                  </div>
                  <div className={styles.value}>
                    約 <span>{before}</span> {item.unit}
                  </div>
                </div>
                <Meter item={item.subject} rate={1} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div onClick={() => setModal(null)} className={styles.close}>
          CLOSE X
        </div>
        <div className={styles.swiperPagination}></div>
        <div className={styles.swiperButtonNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="20"
            viewBox="0 0 5 20"
          >
            <g transform="translate(0 20) rotate(-90)">
              <path
                d="M10,4.8V3.842L0,0V.954Z"
                transform="translate(0 0)"
                fill="#fff"
              />
              <path
                d="M0,4.8V3.842L10,0V.954Z"
                transform="translate(10 0)"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
        <div className={styles.swiperButtonPrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="20"
            viewBox="0 0 5 20"
          >
            <g transform="translate(5) rotate(90)">
              <path
                d="M10,4.8V3.842L0,0V.954Z"
                transform="translate(0 0)"
                fill="#fff"
              />
              <path
                d="M0,4.8V3.842L10,0V.954Z"
                transform="translate(10 0)"
                fill="#fff"
              />
            </g>
          </svg>
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

const pointerIconRight = (
  <svg
    className={styles.pointer}
    xmlns="http://www.w3.org/2000/svg"
    width="66.143"
    height="51.16"
    viewBox="0 0 66.143 51.16"
  >
    <g transform="translate(-193.045 -650.446)">
      <path
        d="M193.045,650.946h15.643l44.58,44.58"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
      <circle
        cx="2"
        cy="2"
        r="2"
        transform="translate(251.188 693.606)"
        fill="#fff"
      />
      <circle
        cx="5.5"
        cy="5.5"
        r="5.5"
        transform="translate(247.688 690.106)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
    </g>
  </svg>
);
const pointerIconLeft = (
  <svg
    className={styles.pointer}
    xmlns="http://www.w3.org/2000/svg"
    width="66.143"
    height="51.16"
    viewBox="0 0 66.143 51.16"
  >
    <g transform="translate(-117.153 -911.071)">
      <path
        d="M183.3,911.571H167.653l-44.58,44.58"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
      <circle
        cx="2"
        cy="2"
        r="2"
        transform="translate(121.153 954.231)"
        fill="#fff"
      />
      <circle
        cx="5.5"
        cy="5.5"
        r="5.5"
        transform="translate(117.653 950.731)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
    </g>
  </svg>
);

export default Component;
