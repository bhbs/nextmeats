import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./productCard.module.scss";

type Props = {
  src: string;
  alt: string;
  href: string;
  caption: string;
};

const ProductCard = ({
  src,
  alt,
  href,
  caption,
}: Props): React.ReactElement => {
  return href ? (
    <Link href={href}>
      <a>
        <div className={styles.card}>
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            layout="responsive"
            sizes="375px"
          />
          <div className={styles.mask}>
            <div className={styles.caption}>{caption}</div>
          </div>
        </div>
      </a>
    </Link>
  ) : (
    <div className={styles.card}>
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        layout="responsive"
      />
      <div className={styles.mask}>
        <div className={styles.caption}>{caption}</div>
      </div>
    </div>
  );
};

export default ProductCard;
