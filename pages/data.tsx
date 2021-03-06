import Head from "next/head";
import React, { useState } from "react";
import Carousel from "../components/datapage/carousel";
import Data from "../components/datapage/data";
import Footer from "../components/datapage/footer";
import Fv from "../components/datapage/fv";
import Stars from "../components/datapage/stars";
import Statement from "../components/datapage/statement";
import Layout from "../components/layout";
import styles from "./data.module.scss";

export type Product = "karubi" | "harami" | "chicken";

const Index = (): React.ReactElement => {
  const [product, setProduct] = useState<Product>("chicken");
  return (
    <div
      style={{
        background: "linear-gradient(rgb(0, 24, 56), black)",
        color: "white",
        paddingTop: "58px",
      }}
    >
      <Layout languageCode="jp">
        <Head>
          <meta name="viewport" content="width=375px" />
        </Head>
        <Stars />
        <Fv />
        <Statement />
        <Carousel setProduct={setProduct} />
        <Data product={product} />
        <Footer />
      </Layout>
    </div>
  );
};

export default Index;
