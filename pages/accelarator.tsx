import { GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { getLanguageCode, LanguageCode, Locale } from "../lib/language";
import styles from "./accelarator.module.scss";

type Props = {
  languageCode: LanguageCode;
};

const Accerlarator = ({ languageCode }: Props): React.ReactElement => {
  const [deviceType, setDevice] = useState("");

  const text = getText(languageCode);

  useEffect(() => {
    const mobiles = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    mobiles.test(navigator.userAgent) ? setDevice("mobile") : setDevice("pc");
  }, []);

  return (
    <Layout languageCode={"jp"}>
      <Head>
        <meta
          property="og:image"
          content="https://nextmeats.co.jp/img/accelarator/header.jpg"
        />
      </Head>
      <div className={styles.back}>
        <div className={styles.fv}>
          {deviceType == "pc" && (
            <Image
              src="/img/accelarator/header-pc.jpg"
              alt=""
              width={1920}
              height={960}
            />
          )}
          {deviceType == "mobile" && (
            <Image
              src="/img/accelarator/header-mobile.jpg"
              alt=""
              width={900}
              height={1200}
            />
          )}
        </div>
        <div className={styles.sheet}>
          <section className={styles.about}>
            <h2>{text.statement_h}</h2>
            <div>{text.statement}</div>
          </section>
          <section className={styles.purpose}>
            <h2>{text.purpose_h}</h2>
            <div>
              {[
                "/img/accelarator/169_hands.jpg",
                "/img/accelarator/169_light.jpg",
                "/img/accelarator/169_earth.jpg",
              ].map((imgUrl, i) => (
                <div key={`purpose_${i + 1}`}>
                  <Image src={imgUrl} alt="" width={640} height={360} />
                  <h3>{text[`purpose_${i + 1}_h`]}</h3>
                  <p>{text[`purpose_${i + 1}`]}</p>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.target}>
            <h2>{text.target_h}</h2>

            {[
              ["/img/accelarator/food.jpg", "Food Tech"],
              ["/img/accelarator/bio.jpg", "Bio Tech"],
              ["/img/accelarator/agri.jpg", "Agri Tech"],
              ["/img/accelarator/hardware.jpg", "Hard Ware"],
            ].map((data, i) => (
              <div
                key={`target_${i}`}
                style={{
                  backgroundImage: `url(${data[0]})`,
                }}
              >
                <h3>
                  <span>{data[1]}</span>
                </h3>
                <p>
                  <span>{text[`target_${i}`]}</span>
                </p>
              </div>
            ))}
            <p>{text.target_explanation}</p>
          </section>
          <section className={styles.schedule}>
            <h2>{text.schedule_h}</h2>
            <div className={styles.grid}>
              {[
                "/img/accelarator/icon/slacklogo.png",
                "/img/accelarator/icon/gform.png",
                "/img/accelarator/icon/zoomlogo.png",
                "/img/accelarator/icon/poc.png",
                "/img/accelarator/icon/marketing.png",
              ].map((imgUrl, i) => (
                <>
                  <div className={styles.item}>
                    <Image src={imgUrl} width={72} height={72} />
                  </div>
                  <div className={styles.item}>
                    <p>{text[`schedule_${i + 1}`]}</p>
                  </div>
                  <div className={`${styles.item} ${styles.flow}`}>
                    {deviceType === "pc" &&
                      Array.from<JSX.Element>({ length: i }).fill(<div></div>)}
                    <div className={styles.arrow}>
                      <p>{text[`schedule_${i + 1}_period`]}</p>
                    </div>
                    {deviceType === "pc" &&
                      Array.from<JSX.Element>({ length: 4 - i }).fill(
                        <div></div>
                      )}
                  </div>
                </>
              ))}
            </div>
          </section>
          <section className={styles.merit}>
            <h2></h2>
            <div>
              {[
                "/img/accelarator/merit01.png",
                "/img/accelarator/merit02.jpg",
                "/img/accelarator/merit03.jpg",
              ].map((imgUrl, i) => (
                <div key={`merit_1_${i}`}>
                  <Image src={imgUrl} alt="" width={220} height={220} />
                  <h3>{text[`merit_${i + 1}_h`]}</h3>
                  <p>{text[`merit_${i + 1}`]}</p>
                </div>
              ))}
            </div>
            <div>
              {[
                "/img/accelarator/merit04.jpg",
                "/img/accelarator/merit05.jpg",
                "/img/accelarator/merit06.jpg",
              ].map((imgUrl, i) => (
                <div key={`merit_2_${i}`}>
                  <Image src={imgUrl} alt="" width={220} height={220} />
                  <h3>{text[`merit_${i + 4}_h`]}</h3>
                  <p>{text[`merit_${i + 4}`]}</p>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.contact}>
            <div>
              <a href="">{text.contact}</a>
            </div>
            <p style={{ fontSize: "0.8em" }}>{text.contact_explanation}</p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

const getText = (locale: LanguageCode) => {
  return {
    title: {
      jp:
        "NEXT MEATS | 代替肉開発スタートアップ【ネクストミーツ株式会社】人工肉・代替肉・植物肉",
      en: "",
      tw: "",
    }[locale],
    description: {
      jp:
        "フェイクミートで次世代の未来をつくる代替肉開発スタートアップ【ネクストミーツ株式会社】 人工肉・代替肉・植物肉",
      en: "",
      tw: "",
    }[locale],
    statement_h: {
      jp: (
        <>
          ネクストミーツ
          <br className="responsive" />
          アクセラレータープログラムとは
          <br />
          <span>
            世界同時開催で
            <br className="responsive" />
            クロスボーダーオープンイノベーションを起こす
          </span>
        </>
      ),
      en: "",
      tw: "",
    }[locale],
    statement: {
      jp: (
        <>
          <p>
            「地球を終わらせない」という理念をもとに、私たちは代替肉の開発と普及を進めてきました。
          </p>
          <p>
            日本では2020年に「代替肉元年」として市場に商品が出始めましたが、世界と比べるとまだまだ遅れています。代替肉は健康食としても活躍できますが、あらゆる生命のため、地球環境を守るために必要な食品です。
          </p>
          <p>
            気候変動問題は待った無しの状態です。今後、SDGsの目標達成を掲げる企業は、利益追求型で市場シェアの争いをするのではなく、持てる技術やネットワークを組み合わせて、オープンイノベーションを起こす必要があります。
          </p>
          <p>
            本プログラムは業界の壁を超え、地球の未来をより良くするため、世界に通用する「ものづくり」をするための共創プログラムです。ネクストミーツの持つリソース（資金、技術、顧客、商品、事業開発力）と、参加企業による技術やアセットを組み合わせることで、世界でスケールできる事業をつくることができると考えています。
          </p>
          <p>
            本プログラムを通じてWIN-WINとなる協業を実現し、消費者にも環境問題への意識を持ってもらえる事業をつくる。それがネクストミーツのアクセラレータープログラムです。
          </p>
          <p>※ 本プログラムは3ヶ国語での世界同時開催となります。</p>
        </>
      ),
      en: "",
      tw: "",
    }[locale],
    purpose_h: {
      jp: "目的",
      en: "",
      tw: "",
    }[locale],
    purpose_1_h: {
      jp: "代替肉のイノベーション",
      en: "",
      tw: "",
    }[locale],
    purpose_1: {
      jp:
        "参加者それぞれが持っている知見や技術を持ち合わせることで代替肉事業にイノベーションを起こします。",
      en: "",
      tw: "",
    }[locale],
    purpose_2_h: {
      jp: "地球をよくするための共創",
      en: "",
      tw: "",
    }[locale],
    purpose_2: {
      jp:
        "競争ではなく共創することを目指し、地球をよくしていくために手を取り合っていきます。",
      en: "",
      tw: "",
    }[locale],
    purpose_3_h: {
      jp: "世界市場獲得",
      en: "",
      tw: "",
    }[locale],
    purpose_3: {
      jp: "企業同士がタッグを組み、世界市場を取りにいきます。",
      en: "",
      tw: "",
    }[locale],
    target_h: {
      jp: (
        <>
          「地球のことを真剣に考える」
          <br />
          企業、個人、研究者の方を募集いたします。
        </>
      ),
      en: "",
      tw: "",
    }[locale],
    target_1: {
      jp:
        "原料・加工・調味・栄養学的なアプローチなどの技術を活用し、今までにない代替肉開発に貢献する。",
      en: "",
      tw: "",
    }[locale],
    target_2: {
      jp:
        "微細藻類・遺伝子・培養技術などを活用し、新たな代替肉開発に貢献する。",
      en: "",
      tw: "",
    }[locale],
    target_3: {
      jp:
        "IoTやブロックチェーンなどの農業技術を活用し、新たな代替肉の原材料の分野で貢献する。",
      en: "",
      tw: "",
    }[locale],
    target_4: {
      jp:
        "機会設備、包装技術などの強みを活かし、代替肉の生産過程の分野で貢献する。",
      en: "",
      tw: "",
    }[locale],
    target_explanation: {
      jp:
        "上記以外でも、代替肉を作っていく上でのイノベーションになればどんな企業、個人、研究者の方でもご参加いただけます。",
      en: "",
      tw: "",
    }[locale],
    schedule_h: {
      jp: "スケジュール",
      en: "",
      tw: "",
    }[locale],
    schedule_1: {
      jp: "応募期間",
      en: "",
      tw: "",
    }[locale],
    schedule_1_period: {
      jp: "1ヶ月",
      en: "",
      tw: "",
    }[locale],
    schedule_2: {
      jp: (
        <>
          一次審査
          <br />
          【書類審査】
        </>
      ),
      en: "",
      tw: "",
    }[locale],
    schedule_2_period: {
      jp: "2〜4週間",
      en: "",
      tw: "",
    }[locale],
    schedule_3: {
      jp: (
        <>
          二次審査
          <br />
          【オンラインピッチ】
        </>
      ),
      en: "",
      tw: "",
    }[locale],
    schedule_3_period: {
      jp: "2〜4週間",
      en: "",
      tw: "",
    }[locale],
    schedule_4: {
      jp: (
        <>
          実験開始
          <br />
          POC
        </>
      ),
      en: "",
      tw: "",
    }[locale],
    schedule_4_period: {
      jp: "3〜6ヶ月",
      en: "",
      tw: "",
    }[locale],
    schedule_5: {
      jp: "テストマーケティング",
      en: "",
      tw: "",
    }[locale],
    schedule_5_period: {
      jp: "3ヶ月",
      en: "",
      tw: "",
    }[locale],
    merit_h: {
      jp: "メリット",
      en: "",
      tw: "",
    }[locale],
    merit_1_h: {
      jp: "ブランド力",
      en: "",
      tw: "",
    }[locale],
    merit_1: {
      jp:
        "代替肉の焼肉「NEXT焼肉シリーズ」を全国チェーンで展開、テレビ番組にも多数取り上げられ、日本をはじめ海外でも代替肉ブランドとして定着しました。植物性代替肉市場におけるネクストミーツのブランド力を使えます。",
      en: "",
      tw: "",
    }[locale],
    merit_2_h: {
      jp: "ノウハウ・技術",
      en: "",
      tw: "",
    }[locale],
    merit_2: {
      jp:
        "焼肉、牛丼、ハンバーグといった多様な代替肉製品を開発する中培われたノウハウ、技術を使って商品開発を行えます。",
      en: "",
      tw: "",
    }[locale],
    merit_3_h: {
      jp: "スピード",
      en: "",
      tw: "",
    }[locale],
    merit_3: {
      jp:
        "迅速に意思決定・テストを行い、商品化まで進められます。ネクストミーツのスピード感を体感することで、自社の新規事業などにも活かせます。",
      en: "",
      tw: "",
    }[locale],
    merit_4_h: {
      jp: "環境への取り組み",
      en: "",
      tw: "",
    }[locale],
    merit_4: {
      jp:
        "ネクストミーツは「地球を終わらせない」を理念に代替肉の開発を行っています。企業のCSR活動としても取り組めます。",
      en: "",
      tw: "",
    }[locale],
    merit_5_h: {
      jp: "ネットワーク",
      en: "",
      tw: "",
    }[locale],
    merit_5: {
      jp:
        "アメリカ、台湾、ベトナムとグローバルに事業を展開しています。また、2021年1月にはOTCBB（アメリカ）へ上場しました。",
      en: "",
      tw: "",
    }[locale],
    merit_6_h: {
      jp: "資金",
      en: "",
      tw: "",
    }[locale],
    merit_6: {
      jp:
        "事業化に向けてのPoC（実証実験）にかかる各種費用や研究費をネクストミーツがサポートすることもできます。必要に応じて出資も検討いたします。",
      en: "",
      tw: "",
    }[locale],
    contact: {
      jp: (
        <>
          Slack に参加して
          <br className="responsive" />
          アクセラレータープログラムに応募する
        </>
      ),
      en: "",
      tw: "",
    }[locale],
    contact_explanation: {
      jp:
        "※ 不具合・お問い合わせ等ございましたら xxxxxx@nextmeats.co.jp までご連絡ください。",
      en: "",
      tw: "",
    }[locale],
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

export default Accerlarator;
