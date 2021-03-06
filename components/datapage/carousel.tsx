import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Product } from "../../pages/data";
import styles from "./carousel.module.scss";

type Props = {
  setProduct: (value: React.SetStateAction<Product>) => void;
};

type Data = {
  id: Product;
  name: string;
  img: string;
}[];

const Component = ({ setProduct }: Props): React.ReactElement => {
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
            setProduct(items[index].id);
            console.log(items[index].name);
          })
        }
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} className={styles.slide}>
            {({ isActive }) => (
              <div className={`${isActive && styles.active} ${styles.slide}`}>
                <div className={styles.slideTitle}>
                  <h3>{item.name}</h3>
                </div>
                <img src={item.img} alt="" />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Component;
