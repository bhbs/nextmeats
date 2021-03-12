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
  data: {
    [key in Item]: {
      text: string;
      before: string;
      after: string;
    };
  };
};
export type Products = {
  [key in Product]: ProductData;
};

export type Item = "WATER" | "LAND" | "CHGE" | "ENERGY";

const products: Products = {
  chicken: {
    name: "NEXTチキン",
    category: "チキン",
    data: {
      WATER: {
        text: "ペットボトル\n4000本分削減！\n*500ml",
        before: "4500",
        after: "2500",
      },
      LAND: {
        text: "ワンルーム分節約！",
        before: "12.2",
        after: "7.5",
      },
      CHGE: {
        text: "サッカーボール\n530個分削減！",
        before: "5.7",
        after: "0.44",
      },
      ENERGY: {
        text: "スマホ充電\n60時間分節約！",
        before: "6.75",
        after: "4.18",
      },
    },
  },
  karubi: {
    name: "NEXTカルビ",
    category: "牛肉",
    data: {
      WATER: {
        text: "お風呂90杯分削減！\n*200L浴槽",
        before: "20600",
        after: "2500",
      },
      LAND: {
        text: "テニスコート\n約2枚分節約！",
        before: "326",
        after: "7.5",
      },
      CHGE: {
        text: "サッカーボール\n4950個分削減！",
        before: "49.9",
        after: "0.44",
      },
      ENERGY: {
        text: "パソコン充電\n60時間分節約！",
        before: "22",
        after: "4.18",
      },
    },
  },
  harami: {
    name: "NEXTハラミ",
    category: "牛肉",
    data: {
      WATER: {
        text: "お風呂90杯分削減！\n*200L浴槽",
        before: "20600",
        after: "2500",
      },
      LAND: {
        text: "テニスコート\n約2枚分節約！",
        before: "326",
        after: "7.5",
      },
      CHGE: {
        text: "サッカーボール\n4950個分削減！",
        before: "49.9",
        after: "0.44",
      },
      ENERGY: {
        text: "パソコン充電\n60時間分節約！",
        before: "22",
        after: "4.18",
      },
    },
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
