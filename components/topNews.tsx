import Link from "next/link";
import { useEffect, useState } from "react";

const TopNews = () => {
  const [newsList, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbwwvPU8LEqSwCOyKXqtSFvrQlU-C2Zap7NpkR0ZR1dgGVFXOq_b/exec?index=true"
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

        <div
          style={{
            margin: "auto",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <p>＼　FOLLLOW US　／</p>
          <p>
            <a href="https://www.facebook.com/NextMeats" target="_blank">
              <img src="/img/topNews/facebook.png" alt="facebook" />
            </a>
            <a href="https://twitter.com/MeatsNext" target="_blank">
              <img src="/img/topNews/twitter.png" alt="twitter" />
            </a>
            <a href="https://www.instagram.com/nextmeats/" target="_blank">
              <img src="/img/topNews/instagram.png" alt="instagram" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default TopNews;
