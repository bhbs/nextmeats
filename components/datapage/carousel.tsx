import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

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
        spaceBetween={50}
        slidesPerView={1}
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
          <SwiperSlide key={i}>
            <h3>{item.name}</h3>
            <img src={item.img} alt="" />
            <a>データを見る</a>
          </SwiperSlide>
        ))}
      </Swiper>
      <p>↓</p>
    </section>
  );
};

export default Component;
