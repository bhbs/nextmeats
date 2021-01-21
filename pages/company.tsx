import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPropsResult } from "next";
import Company from "../components/company";
import Layout from "../components/layout";

type Props = {
  locale: string;
};

const CompanyPage = ({ locale }: Props): React.ReactElement => {
  const text = getText(locale);

  return (
    <Layout locale={locale}>
      <Head>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />

        <meta property="og:title" content={text.title} />
        <meta property="og:site_name" content={text.title} />
        <meta property="og:description" content={text.description} />
      </Head>
      <div className="page" style={{ marginTop: "60px" }}>
        <Company locale={locale} />
      </div>
    </Layout>
  );
};

function getText(locale) {
  return {
    title: {
      jp:
        "会社概要 NEXT MEATS | 代替肉開発スタートアップ【ネクストミーツ株式会社】人工肉・代替肉・植物肉",
      en: "COMPANY | Next Meats Co., Ltd. WEBSITE",
      tw: "COMPANY | Next Meats Co., Ltd. WEBSITE",
    }[locale],
    description: {
      jp:
        "会社概要 フェイクミートで次世代の未来をつくる代替肉開発スタートアップ【ネクストミーツ株式会社】 人工肉・代替肉・植物肉",
      en: "COMPANY | Next Meats Co., Ltd. WEBSITE",
      tw: "COMPANY | Next Meats Co., Ltd. WEBSITE",
    }[locale],
    header: {
      jp: "会社概要",
      en: "COMPANY INFORMATION",
      tw: "COMPANY INFORMATION",
    }[locale],
  };
}

type Locale = {
  locale: string;
};

export const getStaticProps: GetStaticProps = async ({
  locale,
}: Locale): Promise<GetStaticPropsResult<Locale>> => {
  switch (locale) {
    case "ja":
      locale = "jp";
      break;
    case "en-US":
      locale = "en";
      break;
    case "zh":
      locale = "tw";
      break;
  }
  return { props: { locale } };
};

export default CompanyPage;
