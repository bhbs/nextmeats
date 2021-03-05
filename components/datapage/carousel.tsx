import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Item } from "../../pages/data";
import styles from "./carousel.module.scss";

type Props = {
  setItem: (value: React.SetStateAction<Item>) => void;
};

type Data = {
  id: "karubi" | "harami" | "chicken";
  name: string;
  img: string;
}[];

const Component = ({ setItem }: Props): React.ReactElement => {
  const items: Data = [
    {
      id: "chicken",
      name: "NEXTチキン",
      img: "/img/accelarator/merit02.jpg",
    },
    {
      id: "karubi",
      name: "NEXTカルビ",
      img: "/img/accelarator/merit02.jpg",
    },
    {
      id: "harami",
      name: "NEXTハラミ",
      img: "/img/accelarator/merit02.jpg",
    },
  ];
  return (
    <section>
      <h2>LINE UP</h2>
      <Swiper
        spaceBetween={24}
        slidesPerView={1.4}
        centeredSlides={true}
        loop={true}
        onSwiper={(swiper) =>
          swiper.on("slideChange", function () {
            const index =
              (this.activeIndex - 1) % items.length
                ? ((this.activeIndex - 1) % items.length) - 1
                : items.length - 1;
            setItem(items[index].id);
            console.log(items[index].name);
          })
        }
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} className={styles.slide}>
            <h3>{item.name}</h3>
            <img src={item.img} alt="" />
            <a>データを見る</a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Component;
