import Head from 'next/head'
import ShopLink from '../components/shopLink'

export default function Yakiniku({ locale }) {
  const text = getText(locale)
  return (
    <div>
      <Head>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />
      </Head>
      <div className="page">
        <h1>{text.title}</h1>
        <img src="/img/yakiniku/yakiniku.jpg" alt={text.title} />
        <p><a href="https://shop.nextmeats.jp" target="_blank">{text.subject}</a></p>
        <p>{text.statement}</p>
        <ShopLink text={text} />
        <p><b>{text.pr01}</b></p>
        <p>{text.pr02}</p>
        <p><b>{text.pr03}</b></p>
        <p>{text.pr04}</p>
        <img src="/img/yakiniku/hikaku-karubi.jpg" alt="NEXT KARUBI" />
        <img src="/img/yakiniku/hikaku-harami.jpg" alt="NEXT HARAMI" />
        <p>{text.pr05}</p>
        <p><b>{text.pr06}</b></p>
        <p>{text.pr07}</p>
        <p>{text.pr08}</p>
        <p><b>{text.pr09}</b></p>
        <p>{text.pr10}</p>
        <p><b>{text.pr11}</b></p>
        <p>{text.pr12}</p>
        <div style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingBottom: '56.25%',
            overflow: 'hidden',
            margin: '120px auto 50px',
          }}>
            <iframe src="https://www.youtube.com/embed/BGGfm3I9obc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}></iframe>
          </div>
        <ShopLink text={text} />
        <p><b>{text.pr13}</b></p>
        <a href="https://shop.nextmeats.jp/pages/recipe-002">{text.pr14}</a>
        <img src="/img/yakiniku/recipe.jpg" alt="recipe" />
      </div>
    </div>
  )
}

function getText(locale) {
return {
    title: {
      ja: 'NEXT YAKINIKU\nネクスト焼肉',
      en: 'NEXT YAKINIKU',
      tw: 'NEXT YAKINIKU',
    }[locale],
    description: {
      ja: 'ネクスト焼肉【ネクストミーツ株式会社】 人工肉・代替肉・植物肉・フェイクミート',
      en: '',
      tw: '',
    }[locale],
    subject: {
      ja: '世界初となる焼肉用フェイクミート『カルビ1.0』＆『ハラミ1.0』を同時リリース！！',
      en: '',
      tw: '',
    }[locale],
    statement: {
      ja: '待望の焼肉シリーズが遂に完成しました。\n今後、植物肉は進化を遂げ、焼肉店にも通常メニューとして置かれる時代がやってきます。ネクストミーツ株式会社では、世界で初めてとなる焼肉用フェイクミート（代替肉）の開発および商品化に成功しました。',
      en: 'Our highly anticipated yakiniku series is finally here.\nPlant-based meat will continue to evolve and there will be a day when it finally takes its place in the regular menus of yakiniku restaurants.\nNEXT MEATS Co., Ltd. has successfully developed and launched the world’s very first meat substitute for yakiniku.',
      tw: '讓人期待已久的燒肉系列終於完成了。\n今後，植物肉品將升級進化，出現在一般燒肉店菜單的時代就要來了。\nNEXT MEATS株式會社成功開發出全球首創的燒肉替代肉，並已推出商品販售。',
    }[locale],
    shoplink: {
      ja: 'お試しはこちらから【ネクスト焼肉の通信販売】',
      en: '',
      tw: '',
    }[locale],
    pr01: {
      ja: '＜ 選べる２種類の味 ＞',
      en: '< 2 products with different textures are available >',
      tw: '< 口感任選的二款植物燒肉 >',
    }[locale],
    pr02: {
      ja: 'カルビ風に仕上げた香ばしい味の『カルビ 1.0』と、柔らかめの食感でジュワッと美味しい『ハラミ 1.0』を用意。無添加で安心。お約束の「オン・ザ・ライス」も絶品です。',
      en: 'We offer the aromatic “Short Rib 1.0” which is inspired by short ribs as well as the delicious “Skirt 1.0” which has a softer texture. Both products are additive-free and can be enjoyed with a peace of mind.',
      tw: '我們提供香味誘人的牛五花風味的「牛五花 1.0」，以及口感柔嫩、多汁美味的「牛橫隔膜 1.0」。\n二者均不含添加物，可安心食用',
    }[locale],
    pr03: {
      ja: '＜ 魅力的な栄養価 ＞',
      en: '< Superior nutritional value >',
      tw: '< 值得關注的營養價值 >',
    }[locale],
    pr04: {
      ja: 'ネクスト焼肉シリーズは、一般的な焼肉と比べると脂質が半分以下で、タンパク質は約2倍。栄養価も申し分なく、健康的な食生活を意識している方や、プロテインを必要とするアスリートの方などにも受け入れてもらえる商品となります。',
      en: 'The products in our NEXT Yakiniku series have less than half the fat content and twice the protein of regular yakiniku products. Boasting superior nutritional value, they are the perfect choice for health-conscious individuals and athletes who need more protein.',
      tw: 'NEXT MEATS燒肉系列相較於一般燒肉，只有不到一半的脂肪含量，且蛋白質含量約為二倍。營養價值無可挑剔，是注重健康飲食生活者，或需要攝取大量蛋白質的運動選手等族群都適合食用的商品。',
    }[locale],
    pr05: {
      ja: '100g当たりの栄養価比較',
      en: 'A comparison of the nutritional value in 100g of the respective products',
      tw: '每100g的營養價值比較',
    }[locale],
    pr06: {
      ja: '＜ 食べ方 ＞',
      en: '< How to enjoy this product >',
      tw: '< 食用方法  >',
    }[locale],
    pr07: {
      ja: '大豆タンパク質を基本とした植物肉。焼肉用によく合う漬けダレを開発し、下味をつけています。\n冷凍のパッケージを少し自然解凍（20〜30分ほど）したあと、そのままフライパンなどで軽く焦げ目が付くまで焼いてください。\n下味はついていますが、お好みで焼肉のタレなどを付けると更に美味しく楽しめます。',
      en: 'This is a vegetable-based meat product made using soy protein. We have developed a marinade that serves as the perfect yakiniku seasoning for this product.\nPlease remove the product from the freezer and allow it to thaw for around 20 to 30 minutes before adding it to your frying pan and browning it until it is lightly seared.\nAlthough this product has been pre-seasoned, you can enjoy it with your favorite yakiniku dipping sauce to make it even more delicious.',
      tw: '大豆蛋白質是構成植物肉的基本成分。我們開發了非常適合燒肉的醃醬來調味。\n先讓冷凍包稍微自然解凍（20至30分左右）後，直接在平底鍋等煎烤至微焦即可。\n植物肉已事先調味過，亦可依個人喜好沾燒肉醬等食用，更添美味。',
    }[locale],
    pr08: {
      ja: '※動物性の原料は使用しておりません。パームオイルや、牛骨炭を用いた白砂糖も使用しておらず、工場の生産ラインでも動物性の原料を扱っておりません。',
      en: '※This product does not contain any animal-derived ingredients.\nNo palm oil or white sugar processed using bovine-derived bone char is used.',
      tw: '※未使用動物性原料。未使用棕櫚油以及牛骨炭漂白的白砂糖。',
    }[locale],
    pr09: {
      ja: '＜ハラミ1.0の原材料と栄養成分＞',
      en: '< Ingredients and nutrition facts of Short Rib 1.0 >',
      tw: '< 牛五花1.0的原料和營養成分 >',
    }[locale],
    pr10: {
      ja: '原材料：大豆加工品（大豆（国産））、調味液（醤油、砂糖、米発酵調味料、酵母エキス、りんご、醸造酢、にんにく、食塩、ごま油、豆板醤、コショウ）、食用なたね油、（一部に小麦、大豆、りんご、ごまを含む）\n栄養成分表示（100g当たり）：エネルギー　348kcal タンパク質　33.7g 脂質　11.2g 炭水化物　28.2g',
      en: 'Ingredients: Processed soybeans (produced in Japan), seasonings (soy sauce, sugar, fermented rice seasonings, yeast extract, apple, brewed vinegar, garlic, salt, sesame oil, bean paste, pepper), canola oil. (This product contains wheat, soybean, apple, and sesame ingredients.)\nNutrition facts (per 100g): Calories: 266kcal. Protein: 33.0g. Total fat: 2.9g. \nTotal carbohydrate: 32.6g.',
      tw: '原料：大豆加工品（日本國內製造）、調味醬（醬油、砂糖、米發酵調味料、酵母萃取物、蘋果、釀造醋、大蒜、食鹽、芝麻油、豆瓣醬、胡椒）、食用菜籽油、（部分含小麥、大豆、蘋果、芝麻）\n營養成分標示（每100g）：熱量　266kcal 蛋白質　33.0g 脂肪　2.9g 碳水化合物　32.6g',
    }[locale],
    pr11: {
      ja: '＜カルビ1.0の原材料と栄養成分＞',
      en: '< Ingredients and nutrition facts of Skirt 1.0 >',
      tw: '< 牛橫隔膜1.0的原料和營養成分 >',
    }[locale],
    pr12: {
      ja: '原材料：大豆加工品（国内製造）、調味液（醤油、砂糖、米発酵調味料、酵母エキス、りんご、醸造酢、にんにく、食塩、ごま油、豆板醤、コショウ）、食用なたね油、（一部に小麦、大豆、りんご、ごまを含む）\n栄養成分表示（100g当たり）：エネルギー　266kcal タンパク質　33.0g 脂質　2.9g 炭水化物　32.6g',
      en: 'Ingredients: Processed soybeans (soybeans produced in Japan), seasonings (soy sauce, sugar, fermented rice seasonings, yeast extract, apple, brewed vinegar, garlic, salt, sesame oil, bean paste, pepper), canola oil. (This product contains wheat, soybean, apple, and sesame ingredients.)\nNutrition facts (per 100g): Calories: 348kcal. Protein: 33.7g. Total fat: 11.2g. \nTotal carbohydrate: 28.2g.',
      tw: '原料：大豆加工品（日本國產大豆）、調味醬（醬油、砂糖、米發酵調味料、酵母萃取物、蘋果、釀造醋、大蒜、食鹽、芝麻油、豆瓣醬、胡椒）、食用菜籽油、（部分含小麥、大豆、蘋果、芝麻）\n營養成分標示（每100g）：熱量　348kcal 蛋白質　33.7g 脂肪　11.2g 碳水化合物　28.2g',
    }[locale],
    pr13: {
      ja: '焼いて食べるだけじゃない！ネクスト焼肉を使ったレシピも公開中!',
      en: '',
      tw: '',
    }[locale],
    pr14: {
      ja: '詳しくはこちらから',
      en: '',
      tw: '',
    }[locale],
    pr: {
      ja: '',
      en: '',
      tw: '',
    }[locale],
  }
}

export async function getStaticProps() {
  const locale = process.env.locale

  return { props: { locale } }
}
