import Head from "next/head";
import React, { useState } from "react";
import Carousel from "../components/datapage/carousel";
import Data from "../components/datapage/data";
import Footer from "../components/datapage/footer";
import Fv from "../components/datapage/fv";
import Stars from "../components/datapage/stars";
import Statement from "../components/datapage/statement";
import Layout from "../components/layout";

export type Item = "karubi" | "harami" | "chicken";

const Index = (): React.ReactElement => {
  const [item, setItem] = useState<Item>("chicken");
  return (
    <div style={{ background: "black", color: "white" }}>
      <Layout languageCode="jp">
        <Head>
          <meta name="viewport" content="width=375px" />
        </Head>
        <Stars />
        <Fv />
        <Statement />
        <Carousel setItem={setItem} />
        <Data name={item} />
        <Footer />
      </Layout>
    </div>
  );
};

export default Index;
