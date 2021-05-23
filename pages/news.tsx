import { GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { getLanguageCode, LanguageCode, Locale } from "../lib/language";

type Props = {
  languageCode: LanguageCode;
};

type News = [date: string, category: string, title: string, url: string];

const News = ({ languageCode }: Props): React.ReactElement => {
  const text = getText(languageCode);
  const [newsList, setNews] = useState({
    original: null,
    filtered: null,
    option: {},
  });

  useEffect(() => {
    fetch(
      `https://script.google.com/macros/s/AKfycbwwvPU8LEqSwCOyKXqtSFvrQlU-C2Zap7NpkR0ZR1dgGVFXOq_b/exec?languageCode=${languageCode}`
    )
      .then((response) => response.json())
      .then((news) =>
        setNews({
          original: news,
          filtered: news,
          option: {},
        })
      );
  }, []);

  const textSearch = (e) => {
    const text = e.target.value;
    const option = { ...newsList.option, text };
    const originalList = newsList.original;
    const filteredList = newsFilter(originalList, option);
    setNews({
      original: originalList,
      filtered: filteredList,
      option: option,
    });
  };

  const defaultCategory = "カテゴリで絞る";

  const categorySearch = (e) => {
    const category = e.target.value;
    const option = { ...newsList.option, category };
    const originalList = newsList.original;
    const filteredList = newsFilter(originalList, option);

    setNews({
      original: originalList,
      filtered: filteredList,
      option: option,
    });
  };

  const newsFilter = (originalList: News[], option): News[] => {
    let filteredList: News[] = originalList;

    if (option.text) {
      filteredList = filteredList.filter((news: News) =>
        news[2].includes(option.text)
      );
    }
    if (option.category && option.category !== defaultCategory) {
      filteredList = filteredList.filter((news: News) =>
        news[1].includes(option.category)
      );
    }

    return filteredList;
  };

  return (
    <Layout languageCode={languageCode}>
      <Head>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />

        <meta property="og:title" content={text.title} />
        <meta property="og:site_name" content={text.title} />
        <meta property="og:description" content={text.description} />
      </Head>
      <div className="page">
        <h2 style={{ textAlign: "center" }}>NEWS</h2>
        {languageCode === "jp" && (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <input
              type="text"
              placeholder="タイトルで検索する"
              onChange={textSearch}
              style={{
                marginRight: "1em",
              }}
            />
            <select onChange={categorySearch}>
              <option>{defaultCategory}</option>
              <option>メディア情報</option>
              <option>お知らせ</option>
              <option>プレスリリース</option>
            </select>
          </div>
        )}
        <div className="newsList">
          {newsList.original ? (
            newsList.filtered.map((x: News) => (
              <div key={JSON.stringify(x)}>
                <a href={x[3]}>
                  <span className="date">
                    {new Date(x[0]).toLocaleDateString()}
                  </span>
                  <span className="category">{x[1]}</span>
                  <span className="title">{x[2]}</span>
                </a>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>now loading...</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

function getText(locale: LanguageCode) {
  return {
    title: {
      jp: "Next Meats Co., Ltd.",
      en: "Next Meats Co., Ltd.",
      tw: "Next Meats Co., Ltd.",
    }[locale],
    description: {
      jp: "NEWS",
      en: "NEWS",
      tw: "NEWS",
    }[locale],
  };
}

export const getStaticProps: GetStaticProps = async ({
  locale,
}: {
  locale: Locale;
}): Promise<GetStaticPropsResult<{ languageCode: LanguageCode }>> => {
  const languageCode: LanguageCode = getLanguageCode(locale);
  return { props: { languageCode } };
};

export default News;
