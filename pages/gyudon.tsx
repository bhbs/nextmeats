import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPropsResult } from "next";
import ShopLink from "../components/shopLink";
import Layout from "../components/layout";

type Props = {
  locale: string;
};

const Gyudon = ({ locale }: Props): React.ReactElement => {
  const text = getText(locale);
  return (
    <Layout locale={locale}>
      <Head>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />

        <meta property="og:title" content={text.title} />
        <meta property="og:site_name" content={text.title} />
        <meta property="og:description" content={text.description} />
      </Head>
      <div className="page">
        <h1>{text.title}</h1>
        <img src="/img/gyudon/gyudon.jpg" alt={text.title} />
        <p>{text.statement}</p>
        <p>
          <b>{text.pr01}</b>
        </p>
        <p>{text.pr02}</p>
        <p>
          <b>{text.pr03}</b>
        </p>
        <p>{text.pr04}</p>
        <p>{text.pr05}</p>
        <p>{text.pr06}</p>
        <p>
          <b>{text.pr07}</b>
        </p>
        <p>{text.pr08}</p>
        <ShopLink text={text} />
      </div>
    </Layout>
  );
};

function getText(locale) {
  return {
    title: {
      jp: "世界初となる代替肉のレトルト牛丼\n「ネクスト牛丼1.2」",
      en:
        'The world’s very first pre-packaged meat substitute-based gyudon "NEXT Gyudon 1.2"',
      tw: "全球首創的替代肉牛肉蓋飯調理包「NEXT牛肉蓋飯1.2」",
    }[locale],
    description: {
      jp:
        "ネクスト焼肉【ネクストミーツ株式会社】 人工肉・代替肉・植物肉・フェイクミート",
      en:
        'The world’s very first pre-packaged meat substitute-based gyudon "NEXT Gyudon 1.2"',
      tw: "全球首創的替代肉牛肉蓋飯調理包「NEXT牛肉蓋飯1.2」",
    }[locale],
    statement: {
      jp:
        "今後、代替肉は進化を遂げ、牛丼店にも通常メニューとして置かれる時代がやってきます。\nネクストミーツ株式会社では、世界で初めてとなる牛丼用フェイクミート（代替肉）の開発および商品化に成功しました。\n代替肉のレトルト牛丼「ネクスト牛丼1.2」は通販限定での販売ですので、ぜひこの機会にお求めください。",
      en:
        "Plant-based meat will continue to evolve and there will be a day when it finally takes its place in the regular menus of gyudon restaurants.\nNEXT MEATS Co., Ltd. has successfully developed and launched the world’s very first meat substitute for gyudon.",
      tw:
        "今後，替代肉品將升級進化，出現在一般牛肉蓋飯店菜單的時代就要來了。\nNEXT MEATS株式會社成功開發出全球首創的牛肉蓋飯替代肉，並已推出商品販售。",
    }[locale],
    shoplink: {
      jp: "お試しはこちらから【ネクスト焼肉の通信販売】",
      en: "",
      tw: "",
    }[locale],
    pr01: {
      jp: "＜本当においしい無添加のプラントベースフード＞",
      en: "< Additive-free plant-based food that is absolutely delicious >",
      tw: "< 真正美味無添加的植物肉 >",
    }[locale],
    pr02: {
      jp:
        "食感、味、共に牛丼そっくりに仕上がっており、言われなければ代替肉だとわからないほどの完成度。\nプラントベース＝体に良いけど美味しくない、という概念を根底から変えていきます。\n動物性の食材は一切使用せず、さらには無添加で作られているので、地球環境にも身体にも優しい牛丼です。\nタンパク質を豊富に摂取できるうえ、脂質は抑えられるので、アスリートの方にもぴったり。\n夜食として遅い時間に食べても罪悪感がありません。",
      en:
        "The texture and flavor of this product are so similar to those of a regular gyudon that there is no way you can tell it is a meat substitute unless you have been told.\nWe hope to fundamentally alter the perception that plant-based food is healthy but does not taste good.\nThis gyudon does not contain any animal-derived ingredients or additives, and it will have a positive impact on both your health and our global environment.\nWith its high protein and low fat content, this gyudon is the perfect choice for athletes. You can even enjoy it as a late-night snack without feeling guilty about it.",
      tw:
        "不論口感還是味道都像極了真正的牛肉蓋飯，如此細膩的完成度，不說是替代肉還真吃不出來。\n我們徹底改變普遍認為「植物性＝對身體好但不好吃」的觀念。\n完全不使用動物性食材，而且不含食品添加物，是一款友善地球環境兼顧營養攝取的牛肉蓋飯。\n不僅可攝取豐富的蛋白質，還可減少脂肪的攝取，因此也非常適合運動選手食用。當作宵夜享用也不會讓人有罪惡感。",
    }[locale],
    pr03: {
      jp: "＜ 原材料および栄養成分＞",
      en: "< Ingredients and nutrition facts >",
      tw: "< 原料及營養成分 >",
    }[locale],
    pr04: {
      jp:
        "原材料：大豆加工品（脱脂大豆、食塩）（国内製造・遺伝子組み換えでない）、調味液（しょうゆ、砂糖、米発酵調味料、酵母エキス、昆布エキス、食塩、醸造酢、椎茸エキス、ジンジャーパウダー）、たまねぎ、食用なたね油 / 着色料（カラメル色素）、（一部に大豆・小麦を含む）",
      en:
        "Ingredients: Processed soybeans (defatted soybeans produced in Japan, salt), seasonings (soy sauce, sugar, fermented rice seasonings, yeast extract, kombu extract, salt, brewed vinegar, shiitake mushroom extract, ginger powder), onion, canola oil, coloring (caramel color). (This product contains soybean and wheat ingredients.)",
      tw:
        "原料：大豆加工品（脫脂大豆、食鹽）（日本國內製造）、調味醬（醬油、砂糖、米發酵調味料、酵母萃取物、昆布萃取物、食鹽、釀造醋、香菇萃取物、生薑粉）、洋蔥、食用菜籽油 / 著色劑（焦糖色素）、（部分含大豆、小麥）",
    }[locale],
    pr05: {
      jp:
        "栄養成分表示(100gあたり)：熱量196kcal、たんぱく質4.9g、脂質15.7g、炭水化物8.6g、食塩相当量1.4g",
      en:
        "Nutrition facts (per 100g): Calories: 196kcal. Protein: 4.9g. Total fat: 15.7g.\nTotal carbohydrate: 8.6g. Salt equivalent: 1.4g.",
      tw:
        "營養成分標示（每100g）：熱量196kcal、蛋白質4.9g、脂肪15.7g、碳水化合物8.6g、相當於食鹽含量1.4g",
    }[locale],
    pr06: {
      jp:
        "※動物性の原料は使用しておりません。パームオイルや、牛骨炭を用いた白砂糖も使用しておらず、工場の生産ラインでも動物性の原料を扱っておりません。ヴィーガンの方にも対応した商品です。",
      en: "※This product is also suitable for vegans.",
      tw: "※純素食者也可食用。",
    }[locale],
    pr07: {
      jp: "＜ おいしい食べ方 ＞",
      en: "< How to enjoy this product >",
      tw: "< 美味的食用方法 >",
    }[locale],
    pr08: {
      jp:
        "・湯煎の場合（簡単）\n冷凍の状態のまま湯煎で５分ほど温め、そのままご飯にかけて食べることができます。\n・お鍋で煮る場合（さらに美味しく）\n自然解凍後、お鍋で直接煮ることで、植物肉に味を染み込ませて食べるのもオススメです。\nお好みで紅生姜、七味唐辛子をかけて熱々でお召し上がりください。",
      en:
        "Heat up using a double boiler (the easier method)\nYou can heat up the product when it is still frozen using a double boiler for around 5 minutes and serve it on top of rice.\nSimmer in a pot (the more delicious method)\nWe also recommend allowing the frozen product to thaw before cooking it directly in a pot so that the plant-based meat can absorb the flavors of the broth.",
      tw:
        "隔水加熱（簡單）\n在冷凍狀態下隔水加熱5分鐘左右，即可直接倒在白飯上食用。\n以鍋子烹煮（更美味）\n建議在自然解凍後，倒入鍋子直接烹煮，藉此可讓植物肉更加入味。",
    }[locale],
  };
}

type Locale = {
  locale: string;
};

export const getStaticProps: GetStaticProps = async ({
  locale,
}: Locale): Promise<GetStaticPropsResult<Locale>> => {
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
};
export default Gyudon;
