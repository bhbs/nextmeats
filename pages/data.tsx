import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Data from "../components/datapage/data";
import Footer from "../components/datapage/footer";
import Caroucel from "../components/datapage/caroucel";
import Fv from "../components/datapage/fv";
import Statement from "../components/datapage/statement";

const Index = (): React.ReactElement => {
  return (
    <Layout languageCode="jp">
      <Head>
        <meta name="viewport" content="width=375px" />
      </Head>
      <Fv />
      <Statement />
      <Caroucel />
      <Data />
      <Footer />
    </Layout>
  );
};

export default Index;
