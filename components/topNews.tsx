import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageCode } from "../lib/language";

const TopNews = ({
  languageCode,
}: {
  languageCode: LanguageCode;
}): React.ReactElement => {
  const [newsList, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://script.google.com/macros/s/AKfycbwwvPU8LEqSwCOyKXqtSFvrQlU-C2Zap7NpkR0ZR1dgGVFXOq_b/exec?index=true&languageCode=${languageCode}`
    )
      .then((response) => response.json())
      .then((news) => setNews(news));
  }, []);

  return (
    <section>
      <h2>
        <span>NEWS</span>
      </h2>
      <div className="newsList">
        {newsList.length !== 0 ? (
          newsList.map((x) => (
            <div key={x[2]}>
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
          <p>now loading...</p>
        )}

        <p className="readMore">
          <Link href="/news">
            <a>一覧を見る...</a>
          </Link>
        </p>
      </div>
    </section>
  );
};
export default TopNews;
