import { GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout from "../components/layout";
import { staticPath } from "../lib/$path";
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
        <Image
          src={
            {
              jp: staticPath.img.index.burger_1920x1080_jp_jpg,
              en: staticPath.img.index.burger_1920x1080_en_jpg,
              tw: staticPath.img.index.burger_1920x1080_tw_jpg,
            }[languageCode]
          }
          alt={text.pr03}
          width={800}
          height={450}
          layout="responsive"
        />
        <h3>{text.subject}</h3>
        <p>{text.link}</p>
        <p>
          <b>{text.pr01_h}</b>
        </p>
        <p>{text.pr01}</p>
        <p>
          <b>{text.pr02_h}</b>
        </p>
        <p>{text.pr02}</p>
        <p>{text.pr03}</p>
        <p>{text.link}</p>
      </div>
    </Layout>
  );
};

function getText(languageCode: string) {
  return {
    title: {
      jp: "NEXTバーガー2.0",
      en: "NEXT BURGER 2.0",
      tw: "NEXT BURGER 2.0",
    }[languageCode],
    description: {
      jp:
        "NEXTバーガー2.0【ネクストミーツ株式会社】人工肉・代替肉・植物肉・フェイクミート",
      en: "NEXT BURGER 2.0 - Next Meats Co., Ltd.",
      tw: "NEXT BURGER 2.0 - Next Meats Co., Ltd.",
    }[languageCode],
    subject: {
      jp:
        "ヘルシーで美味しい、そして地球にも優しい「ギルトフリー」なプラントベースバーガー「NEXTバーガー2.0」",
      en:
        "Healthy, Delicious, and Environmentally-friendly! Guilt-Free Plant-based Burger “NEXT Burger 2.0”",
      tw:
        "Healthy, Delicious, and Environmentally-friendly! Guilt-Free Plant-based Burger “NEXT Burger 2.0”",
    }[languageCode],
    statement: {
      jp:
        "クラウドファンディングサイト「Makuake」で限定販売されていた「NEXTバーガー1.2」が、大好評につきアップデートして戻ってきました。今回の「NEXTバーガー2.0」は、肉の食感と風味をアップデートしたことで、これまでのプラントベースバーガーとは一線を画すおいしさに！\nおいしさ、健康、そして地球環境にも優しい。もう何も我慢しなくていい、そんな“ギルトフリー”なプラントベースバーガー「NEXTバーガー2.0」が食べられるのは今だけ。ぜひこの機会にご賞味ください。\n\n＜ヘルシーなうえに美味しい＞\n通常のハンバーガーは美味しいけれど、ジャンキーで健康に良くない？\nプラントベースバーガーはヘルシーだけれど、美味しさが欠けている？\nそんな問題を解決します！\n「NEXTバーガー2.0」は、エンドウ豆と大豆のタンパク質を絶妙に組み合わせて作られた代替肉（プラントベース）のパティ。しっかりと食べ応えを保ちながらもヘルシーで体に優しい。あと引く旨味がほんのり「和」を感じさせるパティに仕上がりました。さらに、食感に弾力（肉感）がついたことで、おいしさがさらに増しました。付属のオリジナルソースを絡めたら、クセになってしまいそう！\nヘルシーなうえに美味しい。どちらも妥協しないバーガーが出来上がりました！",
      en:
        "“NEXT Burger 1.2”, which was sold for a limited time on the Crowdfunding platform “Makuake”, was very popular and a new, improved version is now in stock. “NEXT Burger 2.0” has an even more meaty texture and flavour, and it also tastes better than before! It’s delicious, healthy, and environmentally-friendly. You don’t have to compromise on anything – enjoy our “guilt-free” plant-based burger NEXT Burger 2.0 while it’s available.",
      tw:
        "“NEXT Burger 1.2”, which was sold for a limited time on the Crowdfunding platform “Makuake”, was very popular and a new, improved version is now in stock. “NEXT Burger 2.0” has an even more meaty texture and flavour, and it also tastes better than before! It’s delicious, healthy, and environmentally-friendly. You don’t have to compromise on anything – enjoy our “guilt-free” plant-based burger NEXT Burger 2.0 while it’s available.",
    }[languageCode],
    pr01_h: {
      jp: "＜ヘルシーなうえに美味しい＞",
      en: "Healthy and Delicious",
      tw: "Healthy and Delicious",
    }[languageCode],
    pr01: {
      jp:
        "通常のハンバーガーは美味しいけれど、ジャンキーで健康に良くない？\nプラントベースバーガーはヘルシーだけれど、美味しさが欠けている？\nそんな問題を解決します！\n「NEXTバーガー2.0」は、エンドウ豆と大豆のタンパク質を絶妙に組み合わせて作られた代替肉（プラントベース）のパティ。しっかりと食べ応えを保ちながらもヘルシーで体に優しい。あと引く旨味がほんのり「和」を感じさせるパティに仕上がりました。さらに、食感に弾力（肉感）がついたことで、おいしさがさらに増しました。付属のオリジナルソースを絡めたら、クセになってしまいそう！\nヘルシーなうえに美味しい。どちらも妥協しないバーガーが出来上がりました！",
      en:
        'Regular burgers are delicious, but are they unhealthy junk food? Plant-based burgers are healthy, but lacking in flavour? We have the solution! "NEXT Burger 2.0" is a plant-based alternative meat patty made by the perfect ratio of two types of plant proteins: soybean and pea. It’s healthy and gentle on the body while also filling and tasty. You’ll enjoy an aftertaste of “umami” (the famous Japanese flavour) when you eat the patty. In addition, the texture has become more elastic and meaty, which makes it even more delicious. The special sauce that came with the patty will make it even more tasty! Healthy, delicious, plant-based and guilt-free “NEXT Burger 2.0” is now available!',
      tw:
        'Regular burgers are delicious, but are they unhealthy junk food? Plant-based burgers are healthy, but lacking in flavour? We have the solution! "NEXT Burger 2.0" is a plant-based alternative meat patty made by the perfect ratio of two types of plant proteins: soybean and pea. It’s healthy and gentle on the body while also filling and tasty. You’ll enjoy an aftertaste of “umami” (the famous Japanese flavour) when you eat the patty. In addition, the texture has become more elastic and meaty, which makes it even more delicious. The special sauce that came with the patty will make it even more tasty! Healthy, delicious, plant-based and guilt-free “NEXT Burger 2.0” is now available!',
    }[languageCode],
    pr02_h: {
      jp: "＜地球を救う未来のバーガー＞",
      en: "Future Burger that Saves the Earth",
      tw: "Future Burger that Saves the Earth",
    }[languageCode],
    pr02: {
      jp:
        "NEXTバーガーは、地球にも優しいのです。\nお肉を使用した通常のハンバーガーの場合\n・一個作るのに 約3,000リットルの水が必要\n・パティ1個あたり、ガソリン車が約18km走るのに匹敵する温室効果ガスを排出している\nというデータがあり、地球に大きな環境的負荷を与えてしまうことになります。\n\nこれをNEXTバーガーへ置き換えることにより、大量の節水と90%以上の温室効果ガス削減に貢献できます。まさに地球環境を救うバーガーでもあるのです。",
      en:
        "NEXT Burger is kind to the earth. Some studies showed that for regular hamburgers made by animal meat,\n・ Approximately 3,000 liters of water is required to make one burger.\n・ Each patty emits greenhouse gases equivalent to a gasoline-powered vehicle running about 18 km.\nFactory farmed meat will cause a great environmental impact on the earth.\nReplacing animal meat with NEXT Burger can contribute to saving a large amount of water and reducing greenhouse gases by 90% or more.\nIt is, for sure, a burger that saves the planet.",
      tw:
        "NEXT Burger is kind to the earth. Some studies showed that for regular hamburgers made by animal meat,\n・ Approximately 3,000 liters of water is required to make one burger.\n・ Each patty emits greenhouse gases equivalent to a gasoline-powered vehicle running about 18 km.\nFactory farmed meat will cause a great environmental impact on the earth.\nReplacing animal meat with NEXT Burger can contribute to saving a large amount of water and reducing greenhouse gases by 90% or more.\nIt is, for sure, a burger that saves the planet.",
    }[languageCode],
    pr03: {
      jp:
        "■内容\nパティ80g × 4枚入りパッケージ、オリジナルソース 4個\n\n■原材料および栄養成分\n原材料（パティ）\n大豆（遺伝子組み換えでない）、エンドウタンパク、オニオンソテー、パン粉、食用植物油脂、小麦粉、馬鈴薯澱粉、乾燥椎茸、塩、香辛料（ブラックペッパー、ホワイトペッパー、ナツメグ、オールスパイス）、酵母エキス、米紅麹、ジェランガム\n\n栄養成分表示（パティ80g）\n熱量：150.4kcal　タンパク質：9.36g　脂質：7.12g　炭水化物：12.64g　ナトリウム：408.8mg\n\n※パティ、ソースともに動物性の原料は一切使用しておりません。パームオイルや、牛骨炭を用いた白砂糖も使用しておらず、工場の生産ラインでも動物性の原料を扱っておりません。ヴィーガンの方にも対応した商品です。 \n\n■召し上がり方\n冷凍のパティを袋から取り出し、フライパンに油を敷いて少し焦げ目がつくくらいまで焼きます。中火で片面3~4分ずつが目安です（凍ったまま焼いてもOK）。バンズ以外でもベーグルや食パンで食べたり、ハンバーグ代わりにロコモコ丼などにも使えます。",
      en:
        "■Contents\n80g patty*4, sauces*4\n\n■Ingredients and Nutrition Facts\nIngredients (patty)\nsoybeans (Non-GMO), pea protein, sautéed onion, bread crumbs, vegetable oil, wheat flour, potato starch, dried shiitake mushrooms, salt, spices (black pepper, white pepper, nutmeg, allspice), yeast extract, red fermented rice, gellan gum.\n\nNutrition facts (80g patty)\nCalories: 150.4kcal Protein: 9.36g Total fat: 7.12g Total carbohydrates: 12.64g Sodium: 408.8mg\n\n*This product does not contain any animal-derived ingredients. No palm oil or white sugar processed using bovine-derived bone char is used in the product, and we do not use any animal-derived ingredients in factory lines. Suitable for vegans.\n\n■Cooking Instructions\nTake the frozen patties out of the bag. Add some oil to a frying pan and fry it until it becomes slightly brown. It is recommended to cook it on medium heat for 3 to 4 minutes on each side (you can cook it without thawing it first). Besides buns, you can eat it with bagels or bread, or use it as a substitute for hamburg steak in a loco moco dish.",
      tw:
        "■Contents\n80g patty*4, sauces*4\n\n■Ingredients and Nutrition Facts\nIngredients (patty)\nsoybeans (Non-GMO), pea protein, sautéed onion, bread crumbs, vegetable oil, wheat flour, potato starch, dried shiitake mushrooms, salt, spices (black pepper, white pepper, nutmeg, allspice), yeast extract, red fermented rice, gellan gum.\n\nNutrition facts (80g patty)\nCalories: 150.4kcal Protein: 9.36g Total fat: 7.12g Total carbohydrates: 12.64g Sodium: 408.8mg\n\n*This product does not contain any animal-derived ingredients. No palm oil or white sugar processed using bovine-derived bone char is used in the product, and we do not use any animal-derived ingredients in factory lines. Suitable for vegans.\n\n■Cooking Instructions\nTake the frozen patties out of the bag. Add some oil to a frying pan and fry it until it becomes slightly brown. It is recommended to cook it on medium heat for 3 to 4 minutes on each side (you can cook it without thawing it first). Besides buns, you can eat it with bagels or bread, or use it as a substitute for hamburg steak in a loco moco dish.",
    }[languageCode],
    link: {
      jp: (
        <>
          <a href="https://shop.nextmeats.jp/products/burger">
            → ショップで購入する
          </a>
        </>
      ),
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
