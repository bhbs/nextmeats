import React, { useState } from "react";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./data.module.scss";
import { Product } from "../../pages/data";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

type Props = {
  product: Product;
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

const Component = ({ product }: Props): React.ReactElement => {
  const [modal, setModal] = useState<null | number>();
  return (
    <section>
      <h2>{product}</h2>
      <div>
        {items.map((item, i) => (
          <div key={i} className={styles.box} onClick={() => setModal(i)}>
            <div className={styles.boxInner}>
              <img src={item.img} />
              <h3>{item.subject}</h3>
              <p className={styles.rubi}>{item.rubi}</p>
              <p className={styles.text}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <Modal itemIndex={modal} product={product} setModal={setModal} />
    </section>
  );
};

type ModalProps = {
  itemIndex: null | number;
  product: Product;
  setModal: (value: React.SetStateAction<null | number>) => void;
};

const Modal = ({
  itemIndex,
  product,
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
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
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
                <p>NEXT{product}</p>
                <p>{item.after}</p>
              </div>
              <div>
                <p>従来{product}</p>
                <p>{item.before}</p>
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
