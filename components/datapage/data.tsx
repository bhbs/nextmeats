import Lottie from "lottie-react-web";
import React, { useEffect, useState } from "react";
import SwiperCore, { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { ProductData } from "../../pages/data";
import { default as style, default as styles } from "./data.module.scss";
import co2Animation from "./lottie/icon_co2.json";
import DownArrow from "./part/downArrow";

SwiperCore.use([A11y]);

type Props = {
  productData: ProductData;
};

const items = [
  {
    subject: "CHGE",
    img: "/img/accelarator/icon/poc.png",
    rubi: "音室ガス",
    text: "キャッチコピーキャッチコピーキャッチコピーキャッチコピー",
    percentage: 0,
    before: 0,
    after: 0,
  },
  {
    subject: "ENERGY",
    img: "/img/accelarator/icon/poc.png",
    rubi: "エネルギー消費量",
    text: "キャッチコピーキャッチコピーキャッチコピーキャッチコピー",
    percentage: 0,
    before: 0,
    after: 0,
  },
  {
    subject: "LAND",
    img: "/img/accelarator/icon/poc.png",
    rubi: "土地の使用量",
    text: "キャッチコピーキャッチコピーキャッチコピーキャッチコピー",
    percentage: 0,
    before: 0,
    after: 0,
  },
  {
    subject: "WATER",
    img: "/img/accelarator/icon/poc.png",
    rubi: "水資源",
    text: "キャッチコピーキャッチコピーキャッチコピーキャッチコピー",
    percentage: 0,
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
    <section className={animation && style.renderAnimation}>
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
                  animationData: co2Animation,
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
                  <img src={item.img} />
                </div>
                <div>
                  <h3>{item.subject}</h3>
                  <p>{item.rubi}</p>
                </div>
              </div>
              <div className={styles.modalTitle}>環境負荷削減率</div>
              <div className={styles.modalLess}>
                <p>
                  {item.percentage}%<span>less!</span>
                </p>
              </div>
              <div>
                <p>
                  {productData.name}
                  <span>約 {item.after} L</span>
                </p>
              </div>
              <div>
                <p>
                  従来{productData.category}
                  <span>約 {item.before} L</span>
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
