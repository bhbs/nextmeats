import { GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Company from "../components/company";
import Layout from "../components/layout";
import { pagesPath, staticPath } from "../lib/$path";
import { getLanguageCode, LanguageCode, Locale } from "../lib/language";
import styles from "../styles/company.module.scss";

type Props = {
  languageCode: LanguageCode;
};

const CompanyPage = ({ languageCode }: Props): React.ReactElement => {
  const text = getText(languageCode);

  const [nowAt, setNowAt] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.id);
          setNowAt(entry.target.id);
        }
      });
    });

    document.querySelectorAll("main > section").forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <Layout languageCode={languageCode}>
      <Head>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />

        <meta property="og:title" content={text.title} />
        <meta property="og:site_name" content={text.title} />
        <meta property="og:description" content={text.description} />
      </Head>
      {languageCode === "jp" && (
        <div className={styles.layout}>
          <aside>
            <ul>
              <li className={nowAt === "message" ? styles.nowAt : ""}>
                <Link href={pagesPath.company.$url({ hash: "message" })}>
                  <a>ネクストミーツの理念</a>
                </Link>
              </li>
              <li className={nowAt === "production-system" ? styles.nowAt : ""}>
                <Link
                  href={pagesPath.company.$url({ hash: "production-system" })}
                >
                  <a>ネクストミーツの生産体制</a>
                </Link>
              </li>
              <li className={nowAt === "lab" ? styles.nowAt : ""}>
                <Link href={pagesPath.company.$url({ hash: "#lab" })}>
                  <a>ネクストミーツの研究開発</a>
                </Link>
              </li>
              <li
                className={nowAt === "domestic-expansion" ? styles.nowAt : ""}
              >
                <Link
                  href={pagesPath.company.$url({ hash: "#domestic-expansion" })}
                >
                  <a>ネクストミーツの国内展開</a>
                </Link>
              </li>
              <li
                className={nowAt === "overseas-expansion" ? styles.nowAt : ""}
              >
                <Link
                  href={pagesPath.company.$url({ hash: "#overseas-expansion" })}
                >
                  <a>ネクストミーツの海外展開</a>
                </Link>
              </li>
              <li className={nowAt === "tvcm" ? styles.nowAt : ""}>
                <Link href={pagesPath.company.$url({ hash: "#tvcm" })}>
                  <a>ネクストミーツのテレビCM</a>
                </Link>
              </li>
              <li className={nowAt === "collaboration" ? styles.nowAt : ""}>
                <Link href={pagesPath.company.$url({ hash: "#collaboration" })}>
                  <a>ネクストミーツのコラボレーション</a>
                </Link>
              </li>
            </ul>
          </aside>
          <main>
            <h1>About Us</h1>
            <section id="message">
              <h2>
                <span>ネクストミーツの</span>理念
              </h2>
              <h3>- 地球を終わらせない</h3>
              <p>
                過剰な畜産による
                <span style={{ fontSize: "1.2em" }}> 地球温暖化 </span>を
                <span style={{ fontSize: "1.2em" }}> 代替肉 </span>
                によって解決したい。
              </p>
              <p>
                大切な誰かのために、一人一人が今できることは、
                <span style={{ fontSize: "1.2em" }}> ある。 </span>
              </p>
              <p>
                <Link href={pagesPath.message.$url()}>
                  <a>→ 理念について詳しく見る</a>
                </Link>
              </p>
              <Image
                src={staticPath.img.company.c_jpg}
                width={640}
                height={360}
              />
              <p style={{ fontSize: ".8em" }}>左：代表取締役社長 佐々木英之</p>
              <p style={{ fontSize: ".8em" }}>右：取締役会長 白井良</p>
              <h3>共同創業者の想い</h3>
              <p>
                <Link href="https://forbesjapan.com/articles/detail/40499">
                  <a>→ Forbes インタビュー記事はこちら</a>
                </Link>
              </p>
            </section>
            <section id="production-system">
              <h2>
                <span>ネクストミーツの</span>生産体制
              </h2>
              <h3>安心安全の食品づくりを徹底しています。</h3>
              <div style={{ margin: "2em 0" }}>
                <p>
                  大豆やエンドウなどの植物性タンパク質を組み合わせ、熱と圧力で成形することにより、独自の食感と味わいを表現し、無添加で生産しています。また、HACCP、ISO認証、ハラル認証を取得した食品工場での生産を行なっており、品質管理を徹底しています。
                </p>
              </div>
              <Image
                src={staticPath.img.company.factory_jpg}
                width={640}
                height={360}
              />
            </section>
            <section id="lab">
              <h2>
                <span>ネクストミーツの</span>研究開発
              </h2>
              <h3>優秀な研究者が世界から集結しています。</h3>
              <div className={styles.researcherCard}>
                <div className={styles.imgWrapper}>
                  <Image
                    src={staticPath.img.company.r_01_jpg}
                    width={1020}
                    height={1275}
                  />
                </div>
                <div className={styles.profile}>
                  <h3>
                    Alexis Guionet <span>- from France</span>
                  </h3>
                  <p>Ph.D. in Biology</p>
                  <p>
                    微生物と農業食品を専門とする生物物理学者。
                    植物性製品のメイラード反応の改善に注力している。
                    微生物由来のタンパク質で代替肉を作る研究開発を行う。
                  </p>
                </div>
              </div>
              <div className={styles.researcherCard}>
                <div className={styles.imgWrapper}>
                  <Image
                    src={staticPath.img.company.r_02_jpg}
                    width={1020}
                    height={1275}
                  />
                </div>
                <div className={styles.profile}>
                  <h3>
                    Yu Lu <span>- from China</span>
                  </h3>
                  <p>Ph.D. in Life Science</p>
                  <p>
                    環境問題に関心を持ち、炭素と窒素に関する植物の栄養応答の分子メカニズムの解明する研究に従事。
                    epigenetics
                    を取り入れ、持続可能な機能性原料の研究開発を行う。
                  </p>
                </div>
              </div>
              <div className={styles.researcherCard}>
                <div className={styles.imgWrapper}>
                  <Image
                    src={staticPath.img.company.r_03_jpg}
                    width={1020}
                    height={1275}
                  />
                </div>
                <div className={styles.profile}>
                  <h3>
                    Iaroslav Patuk <span>- from Russia</span>
                  </h3>
                  <p>Ph.D. in Agricultual Engineering</p>
                  <p>
                    専門は機械工学。新型装置の開発に着手。
                    筋肉組織を再現するべく、植物性タンパク質を段階的に熱し圧力で組織化させる研究開発を行う。{" "}
                  </p>
                </div>
              </div>
              <div style={{ marginTop: "24px" }}>
                <Image
                  src={staticPath.img.company.naric_jpg}
                  width={480}
                  height={270}
                />
              </div>
            </section>
            <section id="domestic-expansion">
              <h2>
                <span>ネクストミーツの</span>国内展開
              </h2>
              <h3>
                スーパー、外食チェーン等、代替肉ブランドとして幅広く流通しています。
              </h3>
              <p>
                →{" "}
                <a href="https://shop.nextmeats.jp">
                  公式WEBショップはこちらから
                </a>
              </p>
              <Image
                src={staticPath.img.company.supermarket_jpg}
                width={640}
                height={360}
              />
              <div className={styles.flex}>
                <div>
                  <h4>スーパーマーケット</h4>
                  <ul>
                    <li>イトーヨーカドー</li>
                    <li>原信</li>
                    <li>ライフ</li>
                    <li>ザ ガーデン</li>
                    <li>カスミ</li>
                    <li>杏林堂</li>
                    <li>ニッシンワールドデリカッセン</li>
                  </ul>
                </div>
                <div>
                  <h4>外食チェーン</h4>
                  <ul>
                    <li>焼肉ライク</li>
                    <li>イケア</li>
                    <li>テンフィンガーズバーガー</li>
                  </ul>
                </div>
              </div>
            </section>
            <section id="overseas-expansion">
              <h2>
                <span>ネクストミーツの</span>海外展開
              </h2>
              <h3>国外への展開も進んでいます。</h3>
              <Image
                src={staticPath.img.company.world_png}
                width={640}
                height={360}
              />
              <h4>世界の代替肉ブランドへ</h4>
              <div className={styles.flex}>
                <div>
                  <p>リリース済み</p>
                  <ul>
                    <li>台湾</li>
                    <li>シンガポール</li>
                    <li>ベトナム</li>
                    <li>香港</li>
                  </ul>
                </div>
                <div>
                  <p>準備中</p>
                  <ul>
                    <li>アメリカ</li>
                    <li>中国</li>
                    <li>インド</li>
                  </ul>
                </div>
                <div>
                  <p>準備中</p>
                  <ul>
                    <li>フランス</li>
                    <li>イタリア</li>
                    <li>スペイン</li>
                    <li>ロシア</li>
                  </ul>
                </div>
              </div>
            </section>
            <section id="tvcm">
              <h2>
                <span>ネクストミーツの</span>テレビCM
              </h2>
              <h3>2021年4月より、キー局（４局）でのテレビCMを開始しました。</h3>
              <p>日本の代替肉ブランドとして初の試みとなります。</p>
              <div style={{ maxWidth: "640px" }}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 0,
                    paddingBottom: "56.25%",
                    overflow: "hidden",
                    margin: "64px auto 50px",
                  }}
                >
                  <iframe
                    src={
                      {
                        jp: "https://www.youtube.com/embed/gz6q4cp-L_Y",
                        en: "https://www.youtube.com/embed/ld3FXjFLohA",
                        tw: "https://www.youtube.com/embed/ypkd2yYBJaQ",
                      }[languageCode]
                    }
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  ></iframe>
                </div>
              </div>
            </section>
            <section id="collaboration">
              <h2>
                <span>ネクストミーツの</span>コラボレーション
              </h2>
              <h3>多くの企業・大学・専門家とのコラボ</h3>
              <p>オープンイノベーションで価値を創出します。</p>
              <div style={{ margin: "2em 0" }}>
                <h4>株式会社ユーグレナ</h4>
                <p>機能性食品の共同開発を行っています。</p>
                <h4>長岡技術科学大学</h4>
                <p>共同研究契約を締結し、タンパク質の研究を行っています。</p>
                <h4>シェフ 鳥羽周作</h4>
                <p>
                  ミシュラン1つ星「sio」のオーナーシェフである鳥羽周作氏と商品を共同製作しました。
                </p>
                <div style={{ maxWidth: "640px" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 0,
                      paddingBottom: "56.25%",
                      overflow: "hidden",
                      margin: "64px auto 50px",
                    }}
                  >
                    <iframe
                      src={
                        {
                          jp: "https://www.youtube.com/embed/9EwNL_44U5s",
                          en: "https://www.youtube.com/embed/ld3FXjFLohA",
                          tw: "https://www.youtube.com/embed/ypkd2yYBJaQ",
                        }[languageCode]
                      }
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      )}
      <div style={{ margin: "20px" }}>
        <Company languageCode={languageCode} />
      </div>
    </Layout>
  );
};

const getText = (languageCode: LanguageCode): { [key: string]: string } => {
  return {
    title: {
      jp: "会社概要 NEXT MEATS | 代替肉開発スタートアップ【ネクストミーツ株式会社】人工肉・代替肉・植物肉",
      en: "COMPANY | Next Meats Co., Ltd. WEBSITE",
      tw: "COMPANY | Next Meats Co., Ltd. WEBSITE",
    }[languageCode],
    description: {
      jp: "会社概要 フェイクミートで次世代の未来をつくる代替肉開発スタートアップ【ネクストミーツ株式会社】 人工肉・代替肉・植物肉",
      en: "COMPANY | Next Meats Co., Ltd. WEBSITE",
      tw: "COMPANY | Next Meats Co., Ltd. WEBSITE",
    }[languageCode],
    header: {
      jp: "会社概要",
      en: "COMPANY INFORMATION",
      tw: "COMPANY INFORMATION",
    }[languageCode],
  };
};

export const getStaticProps: GetStaticProps = async ({
  locale,
}: {
  locale: Locale;
}): Promise<GetStaticPropsResult<{ languageCode: LanguageCode }>> => {
  const languageCode: LanguageCode = getLanguageCode(locale);
  return { props: { languageCode } };
};

export default CompanyPage;
