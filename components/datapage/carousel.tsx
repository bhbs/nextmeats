import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./carousel.module.scss";

const Component = (): React.ReactElement => {
  const items = [
    {
      name: "NEXTチキン",
      img: "/img/accelarator/merit02.jpg",
    },
    {
      name: "NEXTカルビ",
      img: "/img/accelarator/merit02.jpg",
    },
    {
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
              this.activeIndex % items.length
                ? (this.activeIndex % items.length) - 1
                : items.length - 1;
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
