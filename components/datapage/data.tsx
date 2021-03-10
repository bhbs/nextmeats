import Lottie from "lottie-react-web";
import React, { useEffect, useState } from "react";
import SwiperCore, { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { ProductData } from "../../pages/data";
import styles from "./data.module.scss";
import co2Animation from "./lottie/icon_co2.json";
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
  text: string;
  percentage: number;
  before: number;
  after: number;
}[];

const items: Items = [
  {
    subject: "CHGE",
    img: co2Animation,
    rubi: "温室ガス",
    text: "キャッチコピーキャッチコピーキャッチコピーキャッチコピー",
    percentage: 80,
    before: 0,
    after: 0,
  },
  {
    subject: "ENERGY",
    img: co2Animation,
    rubi: "エネルギー消費量",
    text: "キャッチコピーキャッチコピーキャッチコピーキャッチコピー",
    percentage: 40,
    before: 0,
    after: 0,
  },
  {
    subject: "LAND",
    img: co2Animation,
    rubi: "土地の使用量",
    text: "キャッチコピーキャッチコピーキャッチコピーキャッチコピー",
    percentage: 60,
    before: 0,
    after: 0,
  },
  {
    subject: "WATER",
    img: co2Animation,
    rubi: "水資源",
    text: "キャッチコピーキャッチコピーキャッチコピーキャッチコピー",
    percentage: 90,
    before: 0,
    after: 0,
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
    <section className={animation && styles.renderAnimation}>
      <h2>
        {productData.name}vs.従来{productData.category}
      </h2>
      <p style={{ display: "block", padding: "0 46px" }}>
        大豆を1kg生産した際にかかる環境負荷と、
        {productData.category}1kgを生産した際にかかる環境負荷を比べました。
      </p>
      <DownArrow />
      <div>
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
              <p className={styles.text}>{item.text}</p>
            </div>
          </div>
        ))}
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
          {items.map((item, i) => (
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
              <div className={styles.modalLess}>
                <CircleMeter rate={item.percentage / 100} />
                <p>
                  {item.percentage}
                  <span>%</span>
                </p>
                <p>less!</p>
              </div>
              <div>
                <p>
                  {productData.name}
                  <span>約 {item.after} L</span>
                </p>
                <Meter item={item.subject} rate={item.percentage / 100} />
              </div>
              <div>
                <p>
                  従来{productData.category}
                  <span>約 {item.before} L</span>
                  <Meter item={item.subject} rate={1} />
                </p>
              </div>
            </SwiperSlide>
          ))}
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

export default Component;
