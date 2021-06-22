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
        <meta name="description" content={text.description as string} />

        <meta property="og:title" content={text.title as string} />
        <meta property="og:site_name" content={text.title as string} />
        <meta property="og:description" content={text.description as string} />
      </Head>
      <div className={styles.layout}>
        <aside>
          <ul>
            <li className={nowAt === "message" ? styles.nowAt : ""}>
              <Link href={pagesPath.company.$url({ hash: "message" })}>
                <a>{text.message_h}</a>
              </Link>
            </li>
            <li className={nowAt === "production-system" ? styles.nowAt : ""}>
              <Link
                href={pagesPath.company.$url({ hash: "production-system" })}
              >
                <a>{text.production_h}</a>
              </Link>
            </li>
            <li className={nowAt === "lab" ? styles.nowAt : ""}>
              <Link href={pagesPath.company.$url({ hash: "#lab" })}>
                <a>{text.lab_h}</a>
              </Link>
            </li>
            <li className={nowAt === "domestic-expansion" ? styles.nowAt : ""}>
              <Link
                href={pagesPath.company.$url({ hash: "#domestic-expansion" })}
              >
                <a>{text.japan_h}</a>
              </Link>
            </li>
            <li className={nowAt === "overseas-expansion" ? styles.nowAt : ""}>
              <Link
                href={pagesPath.company.$url({ hash: "#overseas-expansion" })}
              >
                <a>{text.oversea_h}</a>
              </Link>
            </li>
            <li className={nowAt === "tvcm" ? styles.nowAt : ""}>
              <Link href={pagesPath.company.$url({ hash: "#tvcm" })}>
                <a>{text.tvcm_h}</a>
              </Link>
            </li>
            <li className={nowAt === "collaboration" ? styles.nowAt : ""}>
              <Link href={pagesPath.company.$url({ hash: "#collaboration" })}>
                <a>{text.collaboration_h}</a>
              </Link>
            </li>
          </ul>
        </aside>
        <main>
          <h1>About Us</h1>
          <section id="message">
            <h2>{text.message_h}</h2>
            <h3>{text.message}</h3>
            {text.message_description}
            <p>
              <Link href={pagesPath.message.$url()}>
                <a>{text.message_link}</a>
              </Link>
            </p>
            <Image
              src={staticPath.img.company.c_jpg}
              width={640}
              height={360}
            />
            <p style={{ fontSize: ".8em" }}>{text.ceo}</p>
            <p style={{ fontSize: ".8em" }}>{text.founder}</p>
            <h3>{text.founders}</h3>
            <p>
              <Link href="https://forbesjapan.com/articles/detail/40499">
                <a>{text.forbes}</a>
              </Link>
            </p>
          </section>
          <section id="production-system">
            <h2>{text.production_h}</h2>
            <h3>{text.production}</h3>
            <div style={{ margin: "2em 0" }}>
              <p>{text.production_text}</p>
            </div>
            <Image
              src={staticPath.img.company.factory_jpg}
              width={640}
              height={360}
            />
          </section>
          <section id="lab">
            <h2>{text.lab_h}</h2>
            <h3>{text.lab}</h3>
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
                <p>{text.guionet}</p>
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
                <p>{text.lu}</p>
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
                <p>{text.patuk}</p>
              </div>
            </div>
            <div style={{ marginTop: "24px" }}>
              <Image
                src={staticPath.img.company.naric_jpg}
                width={480}
                height={270}
              />
              <p>{text.lab_photo}</p>
            </div>
          </section>
          <section id="domestic-expansion">
            <h2>{text.japan_h}</h2>
            <h3>{text.japan}</h3>
            <p>
              <a href="https://shop.nextmeats.jp">{text.ec}</a>
            </p>
            <Image
              src={staticPath.img.company.supermarket_jpg}
              width={640}
              height={360}
            />
            <div className={styles.flex}>
              {text.supermarket}
              {text.restaurant}
            </div>
          </section>
          <section id="overseas-expansion">
            <h2>{text.oversea_h}</h2>
            <h3>{text.oversea}</h3>
            <Image
              src={staticPath.img.company.world_png}
              width={640}
              height={360}
            />
            <h4>{text.oversea_text}</h4>
            {text.oversea_status}
          </section>
          <section id="tvcm">
            <h2>{text.tvcm_h}</h2>
            <h3>{text.tvcm}</h3>
            <p>{text.firsttry}</p>
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
                      zh: "https://www.youtube.com/embed/ypkd2yYBJaQ",
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
            <h2>{text.collaboration_h}</h2>
            <h3>{text.collaboration}</h3>
            <p>{text.openinnovation}</p>
            <div style={{ margin: "2em 0" }}>
              <h4>{text.euglena_h}</h4>
              <p>{text.euglena}</p>
              <h4>{text.nagaoka_h}</h4>
              <p>{text.nagaoka}</p>
              <h4>{text.sio_h}</h4>
              <p>{text.sio}</p>
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
                        en: "https://www.youtube.com/embed/9EwNL_44U5s",
                        zh: "https://www.youtube.com/embed/9EwNL_44U5s",
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
      <div style={{ margin: "20px" }}>
        <Company languageCode={languageCode} />
      </div>
    </Layout>
  );
};

const getText = (
  languageCode: LanguageCode
): { [key: string]: string | JSX.Element } => {
  return {
    title: {
      jp: "会社概要 NEXT MEATS | 代替肉開発スタートアップ【ネクストミーツ株式会社】人工肉・代替肉・植物肉",
      en: "COMPANY | Next Meats Co., Ltd. WEBSITE",
      zh: "COMPANY | Next Meats Co., Ltd. WEBSITE",
    }[languageCode],
    description: {
      jp: "会社概要 フェイクミートで次世代の未来をつくる代替肉開発スタートアップ【ネクストミーツ株式会社】 人工肉・代替肉・植物肉",
      en: "COMPANY | Next Meats Co., Ltd. WEBSITE",
      zh: "COMPANY | Next Meats Co., Ltd. WEBSITE",
    }[languageCode],
    header: {
      jp: "会社概要",
      en: "COMPANY INFORMATION",
      zh: "COMPANY INFORMATION",
    }[languageCode],
    message_h: {
      jp: "ネクストミーツの理念",
      en: "Philosophy",
      zh: "Philosophy",
    }[languageCode],
    message: {
      jp: "- 地球を終わらせない",
      en: "- The Next Move from Meat",
      zh: "- The Next Move from Meat",
    }[languageCode],
    message_description: {
      jp: (
        <p>
          過剰な畜産による
          <span style={{ fontSize: "1.2em" }}> 地球温暖化 </span>を
          <span style={{ fontSize: "1.2em" }}> 代替肉 </span>
          によって解決したい。
          <br />
          大切な誰かのために、一人一人が今できることは、
          <span style={{ fontSize: "1.2em" }}> ある。 </span>
        </p>
      ),
      en: "Worried about the planet? Us too. That’s why, at Next Meats, we’re dedicated to creating delicious alternatives to meat products that come with a huge carbon footprint. Saving the planet never tasted so good.",
      zh: "Worried about the planet? Us too. That’s why, at Next Meats, we’re dedicated to creating delicious alternatives to meat products that come with a huge carbon footprint. Saving the planet never tasted so good.",
    }[languageCode],
    message_link: {
      jp: "→ 理念について詳しく見る",
      en: "- The Philosophy of NEXT MEATS",
      zh: "- The Philosophy of NEXT MEATS",
    }[languageCode],
    ceo: {
      jp: "左：代表取締役社長 佐々木英之",
      en: "L: Hideyuki Sasaki,CEO",
      zh: "L: CEO Hideyuki Sasaki",
    }[languageCode],
    founder: {
      jp: "右：取締役会長 白井良",
      en: "R: Ryo Shirai, Founder",
      zh: "R: Ryo Shirai, Founder",
    }[languageCode],
    founders: {
      jp: "共同創業者の想い",
      en: "Thoughts of the co-founders",
      zh: "Thoughts of the co-founders",
    }[languageCode],
    forbes: {
      jp: "→ Forbes インタビュー記事はこちら",
      en: "- Read the Forbes interview (Only in Japanese)",
      zh: "- Read the Forbes interview (Only in Japanese)",
    }[languageCode],
    production_h: {
      jp: "ネクストミーツの生産体制",
      en: "Production System",
      zh: "Production System",
    }[languageCode],
    production: {
      jp: "安心安全の食品づくりを徹底しています。",
      en: "We only want to offer our best.",
      zh: "We only want to offer our best.",
    }[languageCode],
    production_text: {
      jp: "大豆やエンドウなどの植物性タンパク質を組み合わせ、熱と圧力で成形することにより、独自の食感と味わいを表現し、無添加で生産しています。また、HACCP、ISO認証、ハラル認証を取得した食品工場での生産を行なっており、品質管理を徹底しています。",
      en: "Our products are carefully produced using Non-GMO soy and pea proteins in factories that meet HACCP, ISO, and Halal certification standards. Our products do not use any artificial additives either.",
      zh: "Our products are carefully produced using Non-GMO soy and pea proteins in factories that meet HACCP, ISO, and Halal certification standards. Our products do not use any artificial additives either.",
    }[languageCode],
    lab_h: {
      jp: "ネクストミーツの研究開発",
      en: "Research and Development Team",
      zh: "Research and Development Team",
    }[languageCode],
    lab: {
      jp: "優秀な研究者が世界から集結しています。",
      en: "Excellent researchers from all over the world are gathering here.",
      zh: "Excellent researchers from all over the world are gathering here.",
    }[languageCode],
    guionet: {
      jp: "微生物と農業食品を専門とする生物物理学者。 植物性製品のメイラード反応の改善に注力している。 微生物由来のタンパク質で代替肉を作る研究開発を行う。",
      en: "Guionet is a biophysicist specializing in microbiology and agri-food. His work focuses on improving Maillard reactions in plant-based products. He is conducting research to create meat substitute from plant material and microbial cultures.",
      zh: "Guionet is a Biophysicist specializing in microbiology and agri-food. His work focuses on improving Maillard reactions in plant-based products. He is conducting research to create meat substitute from plant material and microbial cultures.",
    }[languageCode],
    lu: {
      jp: "環境問題に関心を持ち、炭素と窒素に関する植物の栄養応答の分子メカニズムの解明する研究に従事。 epigenetics を取り入れ、持続可能な機能性原料の研究開発を行う。",
      en: "Yu has always been interested in environmental issues. Yu currently focuses on epigenetics and researches the molecular basis of protein storage in soybean and other plants. Using advanced technologies, he aims to cultivate high-quality plant resources to be used in our products.",
      zh: "Yu has always been interested in environmental issues. Yu currently focuses on epigenetics and researches the molecular basis of protein storage in soybean and other plants. Using advanced technologies, he aims to cultivate high-quality plant resources to be used in our products.",
    }[languageCode],
    patuk: {
      jp: "専門は機械工学。新型装置の開発に着手。 筋肉組織を再現するべく、植物性タンパク質を段階的に熱し圧力で組織化させる研究開発を行う。",
      en: "Iaroslav has been working to develop original patented machinery and also conducts research on the various texturizing methods of vegetable proteins by extrusion processing.",
      zh: "Iaroslav has been working to develop original patented machinery and also conducts research on the various texturizing methods of vegetable proteins by extrusion processing.",
    }[languageCode],
    lab_photo: {
      jp: "NEXT Lab（研究所）",
      en: "NEXT Lab",
      zh: "NEXT Lab",
    }[languageCode],
    japan_h: {
      jp: "ネクストミーツの国内展開",
      en: "Available stores in Japan",
      zh: "Available stores in Japan",
    }[languageCode],
    japan: {
      jp: "スーパー、外食チェーン等、代替肉ブランドとして幅広く流通しています。",
      en: "You can find Next Meats products in the following stores:",
      zh: "You can find Next Meats products in the following stores:",
    }[languageCode],
    ec: {
      jp: "→ 公式WEBショップはこちらから",
      en: "Click here for the official web store.",
      zh: "Click here for the official web store.",
    }[languageCode],
    supermarket_h: {
      jp: "スーパーマーケット",
      en: "Supermarket",
      zh: "Supermarket",
    }[languageCode],
    supermarket: {
      jp: (
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
      ),
      en: (
        <div>
          <h4>Supermarket</h4>
          <ul>
            <li>Ito-Yokado</li>
            <li>Harashin</li>
            <li>LIFE</li>
            <li>The garden</li>
            <li>Kasumi</li>
            <li>Kyorindo</li>
            <li>Nissin World Delicatessen</li>
          </ul>
        </div>
      ),
      zh: (
        <div>
          <h4>Supermarket</h4>
          <ul>
            <li>Ito-Yokado</li>
            <li>Harashin</li>
            <li>LIFE</li>
            <li>The garden</li>
            <li>Kasumi</li>
            <li>Kyorindo</li>
            <li>Nissin World Delicatessen</li>
          </ul>
        </div>
      ),
    }[languageCode],
    restaurant: {
      jp: (
        <div>
          <h4>外食チェーン</h4>
          <ul>
            <li>焼肉ライク</li>
            <li>イケア</li>
            <li>テンフィンガーズバーガー</li>
          </ul>
        </div>
      ),
      en: (
        <div>
          <h4>Restaurant</h4>
          <ul>
            <li>YAKINIKU LIKE</li>
            <li>IKEA</li>
            <li>TEN FINGERS BURGER</li>
          </ul>
        </div>
      ),
      zh: (
        <div>
          <h4>Restaurant</h4>
          <ul>
            <li>YAKINIKU LIKE</li>
            <li>IKEA</li>
            <li>TEN FINGERS BURGER</li>
          </ul>
        </div>
      ),
    }[languageCode],
    oversea_h: {
      jp: "ネクストミーツの海外展開",
      en: "Global Expansion Map",
      zh: "Global Expansion Map",
    }[languageCode],
    oversea: {
      jp: "国外への展開も進んでいます",
      en: "We are expanding our business at NEXT Speed to bring you delicious meat alternatives and save the Earth!",
      zh: "We are expanding our business at NEXT Speed to bring you delicious meat alternatives and save the Earth!",
    }[languageCode],
    oversea_text: {
      jp: "世界の代替肉ブランドへ",
      en: "",
      zh: "",
    }[languageCode],
    oversea_status: {
      jp: (
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
      ),
      en: (
        <div className={styles.flex}>
          <div>
            <p>Launched</p>
            <ul>
              <li>Taiwan</li>
              <li>Singapore</li>
              <li>Vietnam</li>
              <li>Hong Kong</li>
            </ul>
          </div>
          <div>
            <p>Preparing</p>
            <ul>
              <li>United States</li>
              <li>China</li>
              <li>India</li>
            </ul>
          </div>
          <div>
            <p>Preparing</p>
            <ul>
              <li>France</li>
              <li>Italy</li>
              <li>Spain</li>
              <li>Russia</li>
            </ul>
          </div>
        </div>
      ),
      zh: (
        <div className={styles.flex}>
          <div>
            <p>Launched</p>
            <ul>
              <li>Taiwan</li>
              <li>Singapore</li>
              <li>Vietnam</li>
              <li>Hong Kong</li>
            </ul>
          </div>
          <div>
            <p>Preparing</p>
            <ul>
              <li>United States</li>
              <li>China</li>
              <li>India</li>
            </ul>
          </div>
          <div>
            <p>Preparing</p>
            <ul>
              <li>France</li>
              <li>Italy</li>
              <li>Spain</li>
              <li>Russia</li>
            </ul>
          </div>
        </div>
      ),
    }[languageCode],
    tvcm_h: {
      jp: "ネクストミーツのテレビCM",
      en: "Television Commercial",
      zh: "Television Commercial",
    }[languageCode],
    tvcm: {
      jp: "2021年4月より、キー局（４局）でのテレビCMを開始しました。",
      en: "Our television commercial that was released in April was the first ever commercial from an alternative protein company in Japan.",
      zh: "Our television commercial that was released in April was the first ever commercial from an alternative protein company in Japan.",
    }[languageCode],
    firsttry: {
      jp: "日本の代替肉ブランドとして初の試みとなります。",
      en: "This is the first attempt for an alternative meat brand in Japan.",
      zh: "This is the first attempt for an alternative meat brand in Japan.",
    }[languageCode],
    collaboration_h: {
      jp: "ネクストミーツのコラボレーション",
      en: "Collaborative partners",
      zh: "Collaborative partners",
    }[languageCode],
    collaboration: {
      jp: "多くの企業・大学・専門家とのコラボ",
      en: "",
      zh: "",
    }[languageCode],
    openinnovation: {
      jp: "オープンイノベーションで価値を創出します。",
      en: "We are constantly working with different companies, universities, and experts to better our products, ourselves, and the world. Some of them include:",
      zh: "We are constantly working with different companies, universities, and experts to better our products, ourselves, and the world. Some of them include:",
    }[languageCode],
    euglena_h: {
      jp: "株式会社ユーグレナ",
      en: "euglena Co.,Ltd.",
      zh: "euglena Co.,Ltd.",
    }[languageCode],
    euglena: {
      jp: "機能性食品の共同開発を行っています。",
      en: "We are co-developing super functional foods by bringing our technologies together.",
      zh: "We are co-developing super functional foods by bringing our technologies together.",
    }[languageCode],
    nagaoka_h: {
      jp: "長岡技術科学大学",
      en: "Nagaoka University of Technology",
      zh: "Nagaoka University of Technology",
    }[languageCode],
    nagaoka: {
      jp: "共同研究契約を締結し、タンパク質の研究を行っています。",
      en: "We have signed a joint research agreement and are conducting research on proteins.",
      zh: "We have signed a joint research agreement and are conducting research on proteins.",
    }[languageCode],
    sio_h: {
      jp: "シェフ 鳥羽周作",
      en: "Chef Shusaku Toba",
      zh: "Chef Shusaku Toba",
    }[languageCode],
    sio: {
      jp: "ミシュラン1つ星「sio」のオーナーシェフである鳥羽周作氏と商品を共同製作しました。",
      en: "We came together with Michelin-star chef Shusaku Toba, to share a recipe that everybody can try at home.",
      zh: "We came together with Michelin-star chef Shusaku Toba, to share a recipe that everybody can try at home.",
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
