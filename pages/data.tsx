import Head from "next/head";
import React, { useState } from "react";
import Carousel from "../components/datapage/carousel";
import Data from "../components/datapage/data";
import Footer from "../components/datapage/footer";
import Fv from "../components/datapage/fv";
import Stars from "../components/datapage/stars";
import Statement from "../components/datapage/statement";
import Layout from "../components/layout";

export type Product = "karubi" | "harami" | "chicken";
export type ProductData = {
  name: string;
  category: string;
};
export type Products = {
  [key in Product]: ProductData;
};

const products: Products = {
  chicken: {
    name: "NEXTチキン",
    category: "チキン",
  },
  karubi: {
    name: "NEXTカルビ",
    category: "牛肉",
  },
  harami: {
    name: "NEXTハラミ",
    category: "牛肉",
  },
};

type Data = {
  id: Product;
  name: string;
  img: string;
}[];

const items: Data = [
  {
    id: "chicken",
    name: "NEXTチキン",
    img: "/img/datapage/carousel/chicken.png",
  },
  {
    id: "karubi",
    name: "NEXTカルビ",
    img: "/img/datapage/carousel/karubi.png",
  },
  {
    id: "harami",
    name: "NEXTハラミ",
    img: "/img/datapage/carousel/harami.png",
  },
];

const Index = (): React.ReactElement => {
  const [product, setProduct] = useState<Product>("chicken");
  return (
    <div
      style={{
        background: "black",
        color: "white",
        paddingTop: "58px",
      }}
    >
      <Layout languageCode="jp" hideFooter={true}>
        <Head>
          <meta name="viewport" content="width=375px" />
        </Head>
        <Stars />
        <Fv />
        <Statement />
        <Carousel items={items} product={product} setProduct={setProduct} />
        <Data productData={products[product]} />
        <Footer items={items} product={product} setProduct={setProduct} />
      </Layout>
    </div>
  );
};

export default Index;
