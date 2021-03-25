import { GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Company from "../components/company";
import Layout from "../components/layout";
import SnsLink from "../components/snsLink";
import TopNews from "../components/topNews";
import { getLanguageCode, LanguageCode, Locale } from "../lib/language";

type Props = {
  languageCode: LanguageCode;
};

const Index = ({ languageCode }: Props): React.ReactElement => {
  const [deviceType, setDevice] = useState("");

  const text = getText(languageCode);

  useEffect(() => {
    const mobiles = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    mobiles.test(navigator.userAgent) ? setDevice("mobile") : setDevice("pc");
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
            src={`/img/index/${languageCode}_web-top-pc-1920x945.jpg`}
            alt={text.title}
            width={1920}
            height={945}
            layout="responsive"
          />
        )}
        {deviceType === "mobile" && (
          <Image
            src={`/img/index/${languageCode}_web-top-mobile-720x580-gyudon.jpg`}
            alt={text.title}
            width={720}
            height={580}
            layout="responsive"
          />
        )}
      </div>
      <div
        className="page"
        style={{
          marginTop: "0",
        }}
      >
        <TopNews languageCode={languageCode} />
        <SnsLink languageCode={languageCode} />

        {languageCode === "tw" && (
          <section>
            <Image
              src={`/img/index/tw_yakinikulike.jpg`}
              width={4500}
              height={2531}
            />
          </section>
        )}

        <section>
          <h2>
            <span>
              {
                {
                  jp: "応募受付中！ 3月末まで",
                  en: "Open for entries! ~ March 31st",
                  tw: "Open for entries! ~ March 31st",
                }[languageCode]
              }
            </span>
          </h2>
          <Link href="/accelarator">
            <a>
              <Image
                src={`/img/accelarator/header_${languageCode}_pc.jpg`}
                width={1920}
                height={960}
              />
            </a>
          </Link>
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
            <h2>
              <span>PRODUCTS</span>
            </h2>

            <div style={{ height: "48px" }}></div>

            <Link href={"https://shop.nextmeats.jp/products/chicken"}>
              <a>
                <Image
                  src={`/img/index/chicken_1920x1080-${languageCode}.jpg`}
                  alt={text.pr08}
                  width={800}
                  height={450}
                  layout="responsive"
                />
              </a>
            </Link>

            <div style={{ height: "48px" }}></div>

            <Link href="/hamburgersteak">
              <a>
                <Image
                  src={`/img/index/hamburgersteak_1920x1080-${languageCode}.jpg`}
                  alt={text.pr07}
                  width={800}
                  height={450}
                  layout="responsive"
                />
              </a>
            </Link>

            <div style={{ height: "48px" }}></div>

            <Link href="/burger">
              <a>
                <Image
                  src={`/img/index/burger_1920x1080-${languageCode}.jpg`}
                  alt={text.pr03}
                  width={800}
                  height={450}
                  layout="responsive"
                />
              </a>
            </Link>

            <div style={{ height: "48px" }}></div>

            <Link href="https://shop.nextmeats.jp/products/gyudon">
              <a>
                <Image
                  src={`/img/index/${languageCode}_1920x1080-gyudon.jpg`}
                  alt={text.pr01}
                  width={800}
                  height={450}
                  layout="responsive"
                />
              </a>
            </Link>

            <div style={{ height: "48px" }}></div>

            <Link href="/yakiniku">
              <a>
                <Image
                  src={`/img/index/yakiniku_1920x1080-${languageCode}.jpg`}
                  alt={text.pr02}
                  width={800}
                  height={450}
                  layout="responsive"
                />
              </a>
            </Link>

            <div style={{ height: "48px" }}></div>

            <Link href="https://shop.nextmeats.jp/products/yakiniku-euglena">
              <a>
                <Image
                  src="/img/index/euglena.jpg"
                  alt={text.pr02}
                  width={800}
                  height={450}
                  layout="responsive"
                />
              </a>
            </Link>

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
                src="https://www.youtube.com/embed/videoseries?list=PLumUcr0KxJ-Mc4sW0CF2TxPBhnSspbNrS"
                frameBorder="0"
                allow="autoplay; encrypted-media"
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
            <p>
              <Image
                src="/img/index/sdgs/E_SDG_logo_UN_emblem_horizontal_trans_WEB.png"
                alt="sdgs"
                width={320}
                height={50}
              />
            </p>
            <p>
              {["02", "09", "13", "15", "17"].map((number, i) => (
                <Image
                  key={"sdgs_" + i}
                  src={`/img/index/sdgs/E-WEB-Goal-${number}.png`}
                  alt="sdgs"
                  width={75}
                  height={75}
                />
              ))}
            </p>
          </div>
        </section>

        <Company languageCode={languageCode} />
      </div>
    </Layout>
  );
};

function getText(locale) {
  return {
    title: {
      jp:
        "NEXT MEATS | 代替肉開発スタートアップ【ネクストミーツ株式会社】人工肉・代替肉・植物肉",
      en: "Next Meats Co., Ltd. WEBSITE",
      tw: "Next Meats Co., Ltd. WEBSITE",
    }[locale],
    description: {
      jp:
        "フェイクミートで次世代の未来をつくる代替肉開発スタートアップ【ネクストミーツ株式会社】 人工肉・代替肉・植物肉",
      en: "Next Meats Co., Ltd. WEBSITE",
      tw: "Next Meats Co., Ltd. WEBSITE",
    }[locale],
    message: {
      jp: (
        <>
          <h2>
            <span>Message</span>
          </h2>
          <h3>代替肉で地球の未来をつくる</h3>
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
            <a href="message">ネクストミーツの理念について</a>
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
              <a href="message">The Philosophy of NEXT MEATS</a>
            </p>
          </div>
        </>
      ),
      tw: (
        <>
          <h2>
            <span>Message</span>
          </h2>
          <h3>以替代肉開創地球的未來</h3>
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
            <a href="message">NEXT MEATS的理念</a>
          </p>
        </>
      ),
    }[locale],
    pr01: {
      jp: "ビックリする旨さ！\n『NEXT牛丼1.2』",
      en: 'A flavor that will surprise you!\n"NEXT Gyudon 1.2"',
      tw: "令人驚嘆的美味！「NEXT牛肉蓋飯1.2」",
    }[locale],
    pr02: {
      jp: "世界初となる焼肉用フェイクミート\n『カルビ1.1』＆『ハラミ1.1』",
      en:
        'The world’s very first meat substitute developed for yakiniku NEXT Yakiniku\n"Short Rib 1.1" & "Skirt 1.1"',
      tw: "全球首創的燒肉替代肉 NEXT燒肉\n「牛五花1.1」＆「牛橫隔膜1.1」",
    }[locale],
    pr03: {
      jp: "本気で美味しい代替肉\n『NEXTバーガー2.0』",
      en: 'An absolutely delicious meat substitute\n "NEXT Burger 2.0"',
      tw: "精心打造的美味替代肉「NEXT漢堡2.0」",
    }[locale],
    pr04: {
      jp: "代替肉専門メディア、コンソーシアムを運営",
      en: "",
      tw: "",
    }[locale],
    pr05: {
      jp: (
        <>
          ネクストミーツ株式会社では、出来るだけ多くの方に現状を知ってもらうため、代替肉専門メディア
          <a href="https://nextmeats.jp/" target="_blank" rel="noreferrer">
            「NEXT MEATS」
          </a>
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
      en: "",
      tw: "",
    }[locale],
    pr06: {
      jp: "",
      en: (
        <>
          Next Meats Co., Ltd is committed to <br className="responsive" />
          global sustainability efforts <br className="responsive" />
          by playing our part in achieving the SDGs.
        </>
      ),
      tw: "NEXT MEATS依據SDGs的理念，為地球永續的可能性盡一份心力。",
    }[locale],
    pr07: {
      jp: "NEXT ハンバーグ 1.0",
      en: "NEXT HAMBURGER STEAK 1.0",
      tw: "NEXT 日式漢堡排 1.0",
    }[locale],
    pr08: {
      jp: "NEXT チキン 1.0",
      en: "NEXT CHICKEN 1.0",
      tw: "NEXT 炸雞 1.0",
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

export default Index;
