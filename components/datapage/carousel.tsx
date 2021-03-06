import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Product } from "../../pages/data";
import styles from "./carousel.module.scss";

type Props = {
  items: {
    id: Product;
    name: string;
    img: string;
  }[];
  product: Product;
  setProduct: (value: React.SetStateAction<Product>) => void;
};

const Component = ({
  items,
  product,
  setProduct,
}: Props): React.ReactElement => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", function () {
        const index = swiper.activeIndex % items.length;
        setProduct(items[index].id);
      });
    }
  }, [swiper]);

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(
        items.findIndex((item) => item.id === product),
        1600,
        false
      );
    }
  }, [product]);

  return (
    <section id="carousel">
      <h2>LINE UP</h2>
      <Swiper
        spaceBetween={24}
        slidesPerView={1.4}
        centeredSlides={true}
        onSwiper={setSwiper}
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
