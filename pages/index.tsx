import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import TopNews from "../components/topNews";
import Company from "../components/company";
import Layout from "../components/layout";
import { useEffect, useState } from "react";

const Index = ({ locale }) => {
  const [deviceType, setDevice] = useState("");

  const text = getText(locale);

  useEffect(() => {
    const mobiles = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    mobiles.test(navigator.userAgent) ? setDevice("mobile") : setDevice("pc");
  }, []);

  return (
    <Layout locale={locale}>
      <Head>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />

        <meta property="og:title" content={text.title} />
        <meta property="og:site_name" content={text.title} />
        <meta property="og:description" content={text.description} />
      </Head>
      <div
        style={{
          marginTop: "58px",
          width: "100%",
          maxWidth: "1920px",
          margin: "auto",
        }}
      >
        {deviceType === "pc" && (
          <Image
            src={`/img/index/${locale}_web-top-pc-1920x945.jpg`}
            alt={text.title}
            width={1920}
            height={945}
            layout="responsive"
          />
        )}
        {deviceType === "mobile" && (
          <Image
            src={`/img/index/${locale}_web-top-mobile-720x580-gyudon.jpg`}
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
        {locale === "jp" && <TopNews />}

        <section>
          <div
            style={{
              textAlign: "center",
              lineHeight: 3,
            }}
            dangerouslySetInnerHTML={{ __html: text.message }}
          ></div>
        </section>

        <section>
          <div style={{ textAlign: "center" }}>
            <h2>
              <span>PRODUCTS</span>
            </h2>

            <p style={{ marginTop: "60px" }}>
              <b>{text.pr03}</b>
            </p>
            <Link
              href={
                locale == "jp"
                  ? "https://shop.nextmeats.jp/products/burger"
                  : "/burger"
              }
            >
              <a>
                <Image
                  src={`/img/index/${locale}_1920x1080-burger.jpg`}
                  alt={text.pr03}
                  width={800}
                  height={450}
                  layout="responsive"
                />
              </a>
            </Link>

            <p style={{ marginTop: "60px" }}>
              <b>{text.pr01}</b>
            </p>
            <Link href="https://shop.nextmeats.jp/products/gyudon">
              <a>
                <Image
                  src={`/img/index/${locale}_1920x1080-gyudon.jpg`}
                  alt={text.pr01}
                  width={800}
                  height={450}
                  layout="responsive"
                />
              </a>
            </Link>

            <p style={{ marginTop: "60px" }}>
              <b>{text.pr02}</b>
            </p>
            <Link href="/yakiniku">
              <a>
                <Image
                  src="/img/index/yakiniku.jpg"
                  alt={text.pr02}
                  width={800}
                  height={321}
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
                margin: "120px auto 50px",
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
              dangerouslySetInnerHTML={{ __html: text.pr05 }}
            ></p>

            <p
              style={{ marginTop: "60px" }}
              dangerouslySetInnerHTML={{ __html: text.pr06 }}
            ></p>
            <Image
              src="/img/index/sdgs.png"
              alt="sdgs"
              width={887}
              height={283}
              layout="responsive"
            />
          </div>
        </section>

        <Company locale={locale} />
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
      en: "",
      tw: "",
    }[locale],
    message: {
      jp:
        '<h2><span>Message</span></h2><h3>代替肉で地球の未来をつくる</h3><p>地球環境の悪化と人口爆発による<br class="responsive" />食糧危機への対策として<br />我々ができることは、<br class="responsive" />食肉を減らすということ。<br />ネクストミーツ株式会社は、<br class="responsive" />地球の未来をより良くするため<br />「代替肉・植物肉・人工肉」に着目し、<br class="responsive" />その研究開発を行なっています。</p><p><a href="message"> ネクストミーツの理念について</a></p>',
      en:
        '<h2><span>Message</span></h2><h3>Shaping the future of our earth <br class="responsive">with meat alternatives</h3><p>One thing we can all do <br class="responsive">in response to the food crisis<br>caused by the deterioration <br class="responsive">in our global environment<br>and population growth is <br class="responsive">to reduce our meat consumption.<br>Next Meats Co., Ltd. seeks <br class="responsive">to create a better future<br>for our earth by focusing on <br class="responsive">the R&D of meat alternatives.</p><p><a href="message">The Philosophy of NEXT MEATS</a></p>',
      tw:
        '<h2><span>Message</span></h2><h3>以替代肉開創地球的未來</h3><p>對於地球環境惡化與人口增加導致的<br class="responsive" />糧食危機，我們能做的解決方法，<br class="responsive" />就是減少吃肉。<br />NEXT MEATS株式會社<br class="responsive" />致力於「替代肉」的研發，<br class="responsive" />希望帶給地球更美好的未來。</p><p><a href="message">> NEXT MEATS的理念</a></p>',
    }[locale],
    pr01: {
      jp: "ビックリする旨さ！\n『ネクスト牛丼1.2』",
      en: 'A flavor that will surprise you!\n"NEXT Gyudon 1.2"',
      tw: "令人驚嘆的美味！「NEXT牛肉蓋飯1.2」",
    }[locale],
    pr02: {
      jp: "世界初となる焼肉用フェイクミート\n『カルビ1.0』＆『ハラミ1.0』",
      en:
        'The world’s very first meat substitute developed for yakiniku NEXT Yakiniku\n"Short Rib 1.0" & "Skirt 1.0"',
      tw: "全球首創的燒肉替代肉 NEXT燒肉\n「牛五花1.0」＆「牛橫隔膜1.0」",
    }[locale],
    pr03: {
      jp: "本気で美味しい代替肉\n『ネクストバーガー1.2』",
      en: 'An absolutely delicious meat substitute\n "NEXT Burger 1.2"',
      tw: "精心打造的美味替代肉「NEXT漢堡1.2」",
    }[locale],
    pr04: {
      jp: "代替肉専門メディア、コンソーシアムを運営",
      en: "",
      tw: "",
    }[locale],
    pr05: {
      jp:
        'ネクストミーツ株式会社では、出来るだけ多くの方に現状を知ってもらうため、代替肉専門メディア<a href="https://nextmeats.jp/" target="_blank">「NEXT MEATS」</a>を運営しています。<br>　また、代替肉におけるオープンイノベーションをテーマにした<a href="https://www.facebook.com/groups/671252940085262" target="_blank">「フェイクミートコンソーシアム」</a>を運営し、有識者（生命科学・食品工学・遺伝子工学）のネットワークから生まれるアイデア、テクノロジーを駆使して次世代の肉を日々進化させていきます。',
      en: "",
      tw: "",
    }[locale],
    pr06: {
      jp: "",
      en:
        'Next Meats Co., Ltd is committed to <br class="responsive">global sustainability efforts <br class="responsive">by playing our part in achieving the SDGs.',
      tw: "NEXT MEATS依據SDGs的理念，為地球永續的可能性盡一份心力。",
    }[locale],
  };
}

export async function getStaticProps({ locale }) {
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
}

export default Index;
