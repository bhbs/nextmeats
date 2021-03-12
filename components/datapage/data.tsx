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
    <section className={animation && styles.renderAnimation}>
      <h2>
        {productData.name}vs.従来{productData.category}
      </h2>
      <p style={{ display: "block", padding: "0 46px" }}>
        大豆1kgを生産した際にかかる環境負荷と、
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
              <p className={styles.text}>
                {productData.data[item.subject].text}
              </p>
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

export default Component;
