import { GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import { getLanguageCode, LanguageCode, Locale } from "../lib/language";

type Props = {
  languageCode: LanguageCode;
};

const Burger = ({ languageCode }: Props): React.ReactElement => {
  const text = getText(languageCode);
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
        <h1>{text.title}</h1>
        <img src="/img/burger/makuake-top.jpg" alt={text.title} />
        <h3>{text.subject}</h3>
        <p>{text.statement}</p>
        <img src="/img/burger/makuake-pr.jpg" alt={text.title} />
        <p>
          <b>{text.pr01}</b>
        </p>
        <p>{text.pr02}</p>
        <img src="/img/burger/makuake-logo.jpg" alt="makuake" />
        <p>{text.pr03}</p>
        <p>
          <a
            href="https://www.makuake.com/project/nextmeats/"
            target="_blank"
            rel="noreferrer"
          >
            {text.shoplink}
          </a>
        </p>
        <p>{text.pr04}</p>
      </div>
    </Layout>
  );
};

function getText(languageCode: string) {
  return {
    title: {
      jp: "NEXT BURGER\nネクストバーガー 1.2",
      en: "NEXT BURGER",
      tw: "NEXT BURGER",
    }[languageCode],
    description: {
      jp:
        "ネクストバーガー【ネクストミーツ株式会社】 人工肉・代替肉・植物肉・フェイクミート",
      en: "NEXT BURGER",
      tw: "NEXT BURGER",
    }[languageCode],
    subject: {
      jp: "地球温暖化と向き合う代替肉ハンバーガー\n「ネクストバーガー 1.2」",
      en:
        'A meat substitute-based hamburger that mitigates global warming "NEXT Burger 1.2"',
      tw: '因應地球暖化的替代肉漢堡\n"NEXT漢堡 1.2"',
    }[languageCode],
    statement: {
      jp:
        "ネクストミーツ社が技術を結集させ完成させた日本発のプラントベースハンバーガー。\n天然成分のサラシアを配合で美味しくヘルシーに出来上がりました。\nハードウェアスタートアップのように、このハンバーガーは随時アップデートをしていきます。\n原点となるネクストバーガー1.2は今しか食ベることができません。これをベンチマークに更なる進化を遂げていきます。",
      en:
        "NEXT MEATS has harnessed our food technology to develop this plant-based hamburger in Japan.\nThis burger contains the natural ingredient “Salacia” which makes it delicious and healthy.\nLike a hardware startup company, we will continue to improve this hamburger and make it even better moving forward.",
      tw:
        "NEXT MEATS集結技術創造出源自日本的植物肉漢堡。\n添加天然成分莎拉木，吃得到美味與健康。\n如同硬體新創企業般，這款漢堡將會時常進行改良。",
    }[languageCode],
    shoplink: {
      jp: "【 Makuakeで詳細を見る】",
      en: "",
      tw: "",
    }[languageCode],
    pr01: {
      jp: "＜仕様＞",
      en: "< Product information >",
      tw: "< 商品規格 >",
    }[languageCode],
    pr02: {
      jp:
        "内容：パティ80g×4個、こだわりバンズ×4個、ソース×4つ\n原材料（パティ）：国産大豆（遺伝子組み換えではない）、エンドウタンパク、オニオンソテー、パン粉、食用植物油脂、小麦粉、馬鈴薯澱粉、乾燥椎茸、塩、香辛料（ブラックペッパー、ホワイトペッパー、ナツメグ、オールスパイス）、酵母エキス、米紅麹\n※ハンバーガーパティに、パーム油や白砂糖は使われておりません。\n※弊社使用工場の生産ラインでは、動物性原料は一切使用していません。",
      en:
        "Contents: 80g patty x4, sauce x4\nIngredients (patty): Soybeans produced in Japan (not genetically modified), pea protein, sautéed onion, bread crumbs, vegetable oil, wheat flour, potato starch, dried shiitake mushroom, salt, spices (black pepper, white pepper, nutmeg, allspice), yeast extract, red fermented rice.\n※The hamburger patties do not contain palm oil or white sugar.",
      tw:
        "\n內容物：漢堡肉80g×4個、醬汁×4份\n原料（漢堡肉）：國產大豆（非基改）、碗豆粉、洋蔥醬、麵包粉、食用植物油脂、麵粉、馬鈴薯澱粉、乾燥香菇、鹽、辛香料（黑胡椒、白胡椒、肉豆蔻、多香果）、酵母萃取物、米紅麴\n※漢堡肉未使用棕櫚油以及牛骨炭漂白的白砂糖。",
    }[languageCode],
    pr03: {
      jp:
        "おかげさまで『ネクストバーガー 1.2』は、Makuakeで 425% 達成いたしました！\n多くの方からご支援をいただき、ありがとうございました！",
      en: "",
      tw: "",
    }[languageCode],
    pr04: {
      jp: "※一般での販売は12月1日〜予定しております。",
      en: "",
      tw: "",
    }[languageCode],
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

export default Burger;
