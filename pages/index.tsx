import { GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Company from "../components/company";
import Layout from "../components/layout";
import ProductCard, { ProductCardProps } from "../components/productCard";
import SnsLink from "../components/snsLink";
import TopNews from "../components/topNews";
import { pagesPath, staticPath } from "../lib/$path";
import { getLanguageCode, LanguageCode, Locale } from "../lib/language";
import gyudonEN from "../public/img/index/en_web-top-mobile-720x580-gyudon.jpg";
import topImageEN from "../public/img/index/en_web-top-pc-1920x945.jpg";
import fft from "../public/img/index/futurefoodtech.png";
import gyudonJP from "../public/img/index/jp_web-top-mobile-720x580-gyudon.jpg";
import topImageJP from "../public/img/index/jp_web-top-pc-1920x945.jpg";
import gyudonZH from "../public/img/index/tw_web-top-mobile-720x580-gyudon.jpg";
import topImageZH from "../public/img/index/tw_web-top-pc-1920x945.jpg";
import yakinikuLikeTW from "../public/img/index/tw_yakinikulike.jpg";
import styles from "../styles/index.module.scss";

type Props = {
  languageCode: LanguageCode;
};

type TLD = "jp" | "us" | "tw";

type Text = {
  title: string;
  description: string;
  message: JSX.Element;
  pr01: string;
  pr02: string;
  pr03: string;
  pr04: string;
  pr05: JSX.Element;
  pr06: JSX.Element;
  chicken: (TLD: TLD) => ProductCardProps;
  burger: (TLD: TLD) => ProductCardProps;
  gyudon: (TLD: TLD) => ProductCardProps;
  yakiniku: (TLD: TLD) => ProductCardProps;
  euglena: (TLD: TLD) => ProductCardProps;
  hamburgersteak: (TLD: TLD) => ProductCardProps;
  accelarator: ProductCardProps;
};

const Index = ({ languageCode }: Props): React.ReactElement => {
  const [deviceType, setDevice] = useState("");
  const [TLD, setTLD] = useState<TLD>("jp");

  const text: Text = getText(languageCode);

  useEffect(() => {
    const mobiles =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    mobiles.test(navigator.userAgent) ? setDevice("mobile") : setDevice("pc");
    setTLD(/[^.]*$/.exec(location.host)[0] as TLD);
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
      <div
        style={{
          width: "100%",
          maxWidth: "1920px",
          margin: "58px auto 0",
        }}
      >
        {deviceType === "pc" && (
          <Image
            src={
              {
                jp: topImageJP,
                en: topImageEN,
                zh: topImageZH,
              }[languageCode]
            }
            alt={text.title}
            width={1920}
            height={945}
            layout="responsive"
            placeholder="blur"
          />
        )}
        {deviceType === "mobile" && (
          <Image
            src={
              {
                jp: gyudonJP,
                en: gyudonEN,
                zh: gyudonZH,
              }[languageCode]
            }
            alt={text.title}
            width={720}
            height={580}
            layout="responsive"
            placeholder="blur"
          />
        )}
      </div>
      <div
        className="page"
        style={{
          marginTop: "0",
        }}
      >
        {languageCode === "en" && (
          <section>
            <a href="https://www.futurefoodtechprotein.com/">
              <Image
                src={fft}
                width={1024}
                height={512}
                placeholder="blur"
                alt="futurefoodtech"
              />
            </a>
          </section>
        )}

        <TopNews languageCode={languageCode} />
        <section
          style={{
            margin: "auto",
            textAlign: "center",
          }}
        >
          <div>{"＼　FOLLLOW US　／"}</div>
          <SnsLink languageCode={languageCode} color="black" />
        </section>

        {languageCode === "zh" && (
          <section>
            <Image
              src={yakinikuLikeTW}
              alt=""
              width={4500}
              height={2531}
              placeholder="blur"
            />
          </section>
        )}

        <section>
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
        </section>

        <section>
          <div
            style={{
              textAlign: "center",
              lineHeight: 3,
            }}
          >
            {text.message}
          </div>
        </section>

        <section>
          <div style={{ textAlign: "center" }}>
            <h2>PRODUCTS</h2>
            <div className={styles.productCards}>
              <div className={styles.productCard}>
                <ProductCard {...text.yakiniku(TLD)} />
              </div>
              <div className={styles.productCard}>
                <ProductCard {...text.chicken(TLD)} />
              </div>
              <div className={styles.productCard}>
                <ProductCard {...text.burger(TLD)} />
              </div>
              <div className={styles.productCard}>
                <ProductCard {...text.gyudon(TLD)} />
              </div>
              <div className={styles.productCard}>
                <ProductCard {...text.euglena(TLD)} />
              </div>
              <div className={styles.productCard}>
                <ProductCard {...text.hamburgersteak(TLD)} />
              </div>
            </div>

            <p style={{ marginTop: "60px" }}>
              <b>{text.pr04}</b>
            </p>
            <p
              style={{
                display: "inline-block",
                textAlign: "left",
                maxWidth: "640px",
              }}
            >
              {text.pr05}
            </p>
            <p style={{ marginTop: "60px" }}>{text.pr06}</p>
            <div>
              <Image
                src={
                  staticPath.img.index.sdgs
                    .E_SDG_logo_UN_emblem_horizontal_trans_WEB_png
                }
                alt="sdgs"
                width={320}
                height={50}
              />
            </div>
            <div>
              {[
                staticPath.img.index.sdgs.E_WEB_Goal_02_png,
                staticPath.img.index.sdgs.E_WEB_Goal_09_png,
                staticPath.img.index.sdgs.E_WEB_Goal_13_png,
                staticPath.img.index.sdgs.E_WEB_Goal_15_png,
                staticPath.img.index.sdgs.E_WEB_Goal_17_png,
              ].map((number, i) => (
                <Image
                  key={"sdgs_" + i}
                  src={number}
                  alt="sdgs"
                  width={60}
                  height={60}
                />
              ))}
            </div>

            <div className={styles.productCards} style={{ marginTop: "40px" }}>
              <div className={styles.productCard}>
                <ProductCard {...text.accelarator} />
              </div>
            </div>
          </div>
        </section>

        <Company languageCode={languageCode} />
      </div>
    </Layout>
  );
};

function getText(languageCode: LanguageCode) {
  return {
    title: {
      jp: "NEXT MEATS | 代替肉開発スタートアップ【ネクストミーツ株式会社】人工肉・代替肉・植物肉",
      en: "Next Meats Co., Ltd. WEBSITE",
      zh: "Next Meats Co., Ltd. WEBSITE",
    }[languageCode],
    description: {
      jp: "フェイクミートで次世代の未来をつくる代替肉開発スタートアップ【ネクストミーツ株式会社】 人工肉・代替肉・植物肉",
      en: "Next Meats Co., Ltd. WEBSITE",
      zh: "Next Meats Co., Ltd. WEBSITE",
    }[languageCode],
    message: {
      jp: (
        <>
          <h2>代替肉で地球の未来をつくる</h2>
          <p>
            地球環境の悪化と人口爆発による
            <br className="responsive" />
            食糧危機への対策として
            <br />
            我々ができることは、
            <br className="responsive" />
            食肉を減らすということ。
            <br />
            ネクストミーツ株式会社は、
            <br className="responsive" />
            地球の未来をより良くするため
            <br />
            「代替肉」の研究開発を行なっています。
          </p>
          <p>
            <Link href={pagesPath.message.$url()}>
              <a>ネクストミーツの理念について</a>
            </Link>
          </p>
        </>
      ),
      en: (
        <>
          <div style={{ lineHeight: "1.4" }}>
            <h2 style={{ lineHeight: "1" }}>
              KONNICHIWA
              <br />
              <span style={{ fontSize: ".6em" }}>こんにちは</span>
            </h2>
            <h3>We’re reshaping the future with meat-free alternatives</h3>
            <p style={{ maxWidth: "620px", margin: "auto" }}>
              Worried about the planet? Us too. That’s why, at Next Meats, we’re
              dedicated to creating delicious alternatives to meat products that
              come with a huge carbon footprint. Saving the planet never tasted
              so good.
            </p>
            <p>
              <Link href={pagesPath.message.$url()}>
                <a>The Philosophy of NEXT MEATS</a>
              </Link>
            </p>
          </div>
        </>
      ),
      zh: (
        <>
          <h2>以替代肉開創地球的未來</h2>
          <p>
            對於地球環境惡化與人口增加導致的
            <br className="responsive" />
            糧食危機，我們能做的解決方法，
            <br className="responsive" />
            就是減少吃肉。
            <br />
            NEXT MEATS株式會社
            <br className="responsive" />
            致力於「替代肉」的研發，
            <br className="responsive" />
            希望帶給地球更美好的未來。
          </p>
          <p>
            <Link href={pagesPath.message.$url()}>
              <a>NEXT MEATS的理念</a>
            </Link>
          </p>
        </>
      ),
    }[languageCode],
    pr01: {
      jp: "ビックリする旨さ！\n『NEXT牛丼1.2』",
      en: 'A flavor that will surprise you!\n"NEXT Gyudon 1.2"',
      zh: "令人驚嘆的美味！「NEXT牛肉蓋飯1.2」",
    }[languageCode],
    pr02: {
      jp: "世界初となる焼肉用フェイクミート\n『カルビ1.1』＆『ハラミ1.1』",
      en: 'The world’s very first meat substitute developed for yakiniku NEXT Yakiniku\n"Short Rib 1.1" & "Skirt 1.1"',
      zh: "全球首創的燒肉替代肉 NEXT燒肉\n「牛五花1.1」＆「牛橫隔膜1.1」",
    }[languageCode],
    pr03: {
      jp: "本気で美味しい代替肉\n『NEXTバーガー2.0』",
      en: 'An absolutely delicious meat substitute\n "NEXT Burger 2.0"',
      zh: "精心打造的美味替代肉「NEXT漢堡2.0」",
    }[languageCode],
    pr04: {
      jp: "代替肉専門メディア、コンソーシアムを運営",
      en: "",
      zh: "",
    }[languageCode],
    pr05: {
      jp: (
        <>
          ネクストミーツ株式会社では、出来るだけ多くの方に現状を知ってもらうため、代替肉専門メディア
          <Link href="https://media.nextmeats.jp">
            <a target="_blank" rel="noreferrer">
              「NEXT MEATS MEDIA」
            </a>
          </Link>
          を運営しています。
          <br />
          また、代替肉におけるオープンイノベーションをテーマにした
          <a
            href="https://www.facebook.com/groups/671252940085262"
            target="_blank"
            rel="noreferrer"
          >
            「フェイクミートコンソーシアム」
          </a>
          を運営し、有識者（生命科学・食品工学・遺伝子工学）のネットワークから生まれるアイデア、テクノロジーを駆使して次世代の肉を日々進化させていきます。
        </>
      ),
      en: <></>,
      zh: <></>,
    }[languageCode],
    pr06: {
      jp: <></>,
      en: (
        <>
          Next Meats Co., Ltd is committed to <br className="responsive" />
          global sustainability efforts <br className="responsive" />
          by playing our part in achieving the SDGs.
        </>
      ),
      zh: <>NEXT MEATS依據SDGs的理念，為地球永續的可能性盡一份心力。</>,
    }[languageCode],
    chicken: {
      jp: (TLD: TLD) => ({
        src: "/img/index/chicken_1920x1080-jp.jpg",
        alt: "NEXT チキン 1.0",
        href: TLD === "jp" ? "https://shop.nextmeats.jp/products/chicken" : "",
        caption: TLD === "jp" ? "ショップで見る" : "準備中",
      }),
      en: (TLD: TLD) => ({
        src: "/img/index/chicken_1920x1080-en.jpg",
        alt: "NEXT CHICKEN 1.0",
        href: TLD === "jp" ? "https://shop.nextmeats.jp/products/chicken" : "",
        caption: TLD === "jp" ? "view shop" : "coming soon...",
      }),
      zh: (TLD: TLD) => ({
        src: "/img/index/chicken_1920x1080-tw.jpg",
        alt: "NEXT 炸雞 1.0",
        href: TLD === "jp" ? "https://shop.nextmeats.jp/products/chicken" : "",
        caption: TLD === "jp" ? "view shop" : "coming soon...",
      }),
    }[languageCode],
    burger: {
      jp: (TLD: TLD) => ({
        src: "/img/index/burger_1920x1080-jp.jpg",
        alt: "NEXTバーガー2.0",
        href: TLD === "jp" ? "https://shop.nextmeats.jp/products/burger" : "",
        caption: TLD === "jp" ? "ショップで見る" : "準備中",
      }),
      en: (TLD: TLD) => ({
        src: "/img/index/burger_1920x1080-en.jpg",
        alt: "NEXT Burger 2.0",
        href: TLD === "jp" ? "https://shop.nextmeats.jp/products/burger" : "",
        caption: TLD === "jp" ? "view shop" : "coming soon...",
      }),
      zh: (TLD: TLD) => ({
        src: "/img/index/burger_1920x1080-tw.jpg",
        alt: "NEXT 漢堡 2.0",
        href: TLD === "jp" ? "https://shop.nextmeats.jp/products/burger" : "",
        caption: TLD === "jp" ? "view shop" : "coming soon...",
      }),
    }[languageCode],
    gyudon: {
      jp: (TLD: TLD) => ({
        src: "/img/index/jp_1920x1080-gyudon.jpg",
        alt: "NEXT牛丼1.2",
        href: TLD === "jp" ? "https://shop.nextmeats.jp/products/gyudon" : "",
        caption: TLD === "jp" ? "ショップで見る" : "準備中",
      }),
      en: (TLD: TLD) => ({
        src: "/img/index/en_1920x1080-gyudon.jpg",
        alt: "NEXT Gyudon 1.2",
        href: TLD === "jp" ? "https://shop.nextmeats.jp/products/gyudon" : "",
        caption: TLD === "jp" ? "view shop" : "coming soon...",
      }),
      zh: (TLD: TLD) => ({
        src: "/img/index/tw_1920x1080-gyudon.jpg",
        alt: "NEXT牛丼1.2",
        href: TLD === "jp" ? "https://shop.nextmeats.jp/products/gyudon" : "",
        caption: TLD === "jp" ? "view shop" : "coming soon...",
      }),
    }[languageCode],
    yakiniku: {
      jp: (TLD: TLD) => ({
        src: "/img/index/yakiniku_1920x1080-jp.jpg",
        alt: "NEXT焼肉 カルビ1.1",
        href:
          TLD === "jp"
            ? "https://shop.nextmeats.jp/products/yakiniku-karubi"
            : TLD === "us"
            ? "https://shop.nextmeats.us"
            : "",
        caption: TLD === "jp" || TLD === "us" ? "ショップで見る" : "準備中",
      }),
      en: (TLD: TLD) => ({
        src: "/img/index/yakiniku_1920x1080-en.jpg",
        alt: "NEXT Yakiniku Skirt Steak 1.1",
        href:
          TLD === "jp"
            ? "https://shop.nextmeats.jp/products/yakiniku-karubi"
            : TLD === "us"
            ? "https://shop.nextmeats.us"
            : "",
        caption: TLD === "jp" || TLD === "us" ? "view shop" : "coming soon...",
      }),
      zh: (TLD: TLD) => ({
        src: "/img/index/yakiniku_1920x1080-tw.jpg",
        alt: "NEXT 牛五花 1.1",
        href:
          TLD === "jp"
            ? "https://shop.nextmeats.jp/products/yakiniku-karubi"
            : TLD === "us"
            ? "https://shop.nextmeats.us"
            : "",
        caption: TLD === "jp" || TLD === "us" ? "view shop" : "coming soon...",
      }),
    }[languageCode],
    euglena: {
      jp: (TLD: TLD) => ({
        src: "/img/index/euglena.jpg",
        alt: "NEXTユーグレナ焼肉EX",
        href:
          TLD === "jp"
            ? "https://shop.nextmeats.jp/products/yakiniku-euglena"
            : "",
        caption: TLD === "jp" ? "ショップで見る" : "準備中",
      }),
      en: (TLD: TLD) => ({
        src: "/img/index/euglena.jpg",
        alt: "NEXT Euglena Yakiniku EX",
        href:
          TLD === "jp"
            ? "https://shop.nextmeats.jp/products/yakiniku-euglena"
            : "",
        caption: TLD === "jp" ? "view shop" : "coming soon...",
      }),
      zh: (TLD: TLD) => ({
        src: "/img/index/euglena.jpg",
        alt: "NEXT Euglena Yakiniku EX",
        href:
          TLD === "jp"
            ? "https://shop.nextmeats.jp/products/yakiniku-euglena"
            : "",
        caption: TLD === "jp" ? "view shop" : "coming soon...",
      }),
    }[languageCode],
    hamburgersteak: {
      jp: (TLD: TLD) => ({
        src: "/img/index/hamburgersteak_1920x1080-jp.jpg",
        alt: "NEXT ハンバーグ 1.0",
        href: TLD === "jp" ? pagesPath.hamburgersteak.$url().pathname : "",
        caption: TLD === "jp" ? "詳細を見る" : "準備中",
      }),
      en: (TLD: TLD) => ({
        src: "/img/index/hamburgersteak_1920x1080-en.jpg",
        alt: "NEXT HAMBURGER STEAK 1.0",
        href: TLD === "jp" ? pagesPath.hamburgersteak.$url().pathname : "",
        caption: TLD === "jp" ? "view shop" : "coming soon...",
      }),
      zh: (TLD: TLD) => ({
        src: "/img/index/hamburgersteak_1920x1080-tw.jpg",
        alt: "NEXT 日式漢堡排 1.0",
        href: TLD === "jp" ? pagesPath.hamburgersteak.$url().pathname : "",
        caption: TLD === "jp" ? "view shop" : "coming soon...",
      }),
    }[languageCode],
    accelarator: {
      jp: {
        src: "/img/index/accelarator-jp.jpg",
        alt: "Accelarator program",
        href: pagesPath.accelarator.$url().pathname,
        caption: "詳細を見る",
      },
      en: {
        src: "/img/index/accelarator-en.jpg",
        alt: "Accelarator program",
        href: pagesPath.accelarator.$url().pathname,
        caption: "view page",
      },
      zh: {
        src: "/img/index/accelarator-tw.jpg",
        alt: "Accelarator program",
        href: pagesPath.accelarator.$url().pathname,
        caption: "view page",
      },
    }[languageCode],
  };
}

export const getStaticProps: GetStaticProps = async ({
  locale,
}: {
  locale: Locale;
}): Promise<GetStaticPropsResult<Props>> => {
  const languageCode: LanguageCode = getLanguageCode(locale);

  return { props: { languageCode } };
};

export default Index;
