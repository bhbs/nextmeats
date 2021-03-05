import React, { useState, Dispatch, SetStateAction } from "react";
import styles from "./data.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

type Props = {
  name: "karubi" | "harami" | "chicken";
};

type Item = {
  subject: string;
  rubi: string;
  text: string;
  percentage: number;
  before: number;
  after: number;
};

const items = [
  { subject: "CHGE", rubi: "", text: "", percentage: 0, before: 0, after: 0 },
  { subject: "ENERGY", rubi: "", text: "", percentage: 0, before: 0, after: 0 },
  { subject: "LAND", rubi: "", text: "", percentage: 0, before: 0, after: 0 },
  { subject: "WATER", rubi: "", text: "", percentage: 0, before: 0, after: 0 },
];

const Component = ({ name }: Props): React.ReactElement => {
  const [modal, setModal] = useState<null | Item>();
  return (
    <section>
      <h2>{name}</h2>
      <div>
        {items.map((item, i) => (
          <div key={i} className={styles.box} onClick={() => setModal(item)}>
            <i>icon</i>
            <h3>title</h3>
            <p>キャッチコピー</p>
          </div>
        ))}
      </div>
      <Modal item={modal} setModal={setModal} />
    </section>
  );
};

type ModalProps = {
  item: Item;
  setModal: (value: React.SetStateAction<Item>) => void;
};

const Modal = ({ item, setModal }: ModalProps): React.ReactElement => {
  return item ? (
    <>
      <div className={styles.modal}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          initialSlide={2}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <h3>{item.subject}</h3>
              <p>{item.rubi}</p>
              <p>{item.percentage}</p>
              <p>{item.before}</p>
              <p>{item.after}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <p onClick={() => setModal(null)}>xxx</p>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Component;
