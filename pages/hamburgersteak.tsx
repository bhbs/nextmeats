import { GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../components/layout";
import { getLanguageCode, LanguageCode, Locale } from "../lib/language";

type Props = {
  languageCode: LanguageCode;
};

const Hamburgersteak = ({ languageCode }: Props): React.ReactElement => {
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
          src={`/img/index/hamburgersteak_1920x1080-${languageCode}.jpg`}
          alt={text.title}
          width={800}
          height={450}
          layout="responsive"
        />
        <h2>{text.subject}</h2>
        <p>{text.statement}</p>
        {/* <p>{text.link}</p> */}
        <h3>{text.pr01_h}</h3>
        <p>{text.pr01}</p>
        {languageCode === "jp" && (
          <>
            <h3>{text.recipe_h}</h3>
            {text.recipe01}
            {text.recipe02}
            {text.recipe03}
            <h3>{text.pr02_h}</h3>
            <p>{text.pr02}</p>
            {text.makuake}
            {/* <p>{text.link}</p> */}
          </>
        )}
      </div>
    </Layout>
  );
};

function getText(languageCode: string) {
  return {
    title: {
      jp: "NEXTハンバーグ1.0",
      en: "NEXT Hamburger steak 1.0",
      tw: "NEXT 日式漢堡排 1.0",
    }[languageCode],
    description: {
      jp:
        "NEXTハンバーグ1.0【ネクストミーツ株式会社】人工肉・代替肉・植物肉・フェイクミート",
      en: "NEXT Hamburger steak 1.0",
      tw: "NEXT 日式漢堡排 1.0",
    }[languageCode],
    subject: {
      jp: "100%植物性なのにコクうま、地球を救う新国民食",
      en: "",
      tw: "",
    }[languageCode],
    statement: {
      jp:
        "これまでの代替肉ハンバーグとは異なり、卵・乳成分も不使用で100％植物性となっています。また、地球だけでなく体もよろこぶ商品にすべく、なるべく添加物を使わないとの想いから、今回なんとか添加物を使用せずに満足のいく美味しい味にすることができました。そして今回のハンバーグ用にこだわって開発した、無添加の特製デミグラスソース（植物性）との相性も抜群で、美味しく召し上がれます。",
      en: "",
      tw: "",
    }[languageCode],
    pr01_h: {
      jp: "調理方法",
      en: "",
      tw: "",
    }[languageCode],
    pr01: {
      jp:
        "ハンバーグは冷凍の状態で届きます。冷凍庫で１年間保存することができます。凍ったまま焼くことも可能ですが中まで火が通りづらいため、1時間ほど自然解凍するのがおすすめです。自然解凍後フライパンに油を多めに敷いて（大さじ1杯ほど）、少し焦げ目がつくくらいまで焼きます。中火で片面約4分ずつが目安です。中まで火が通っているのを確認できたら、付属のデミグラスソースをハンバーグに掛けて片面約10秒ずつ加熱したら完成です。",
      en: "",
      tw: "",
    }[languageCode],
    recipe_h: {
      jp: "アレンジレシピ",
      en: "",
      tw: "",
    }[languageCode],
    recipe01: (
      <>
        <h4>1. とろ〜りヴィーガンチーズハンバーグ</h4>
        <Image
          src="/img/hamburgersteak/recipe1.jpg"
          width={1280}
          height={800}
        ></Image>
        <p>【材料】</p>
        <table>
          <tbody>
            <tr>
              <td>NEXTハンバーグ</td>
              <td>1枚</td>
            </tr>
            <tr>
              <td>付属のソース</td>
              <td>1つ</td>
            </tr>
            <tr>
              <td>植物性チーズ</td>
              <td></td>
            </tr>
            <tr>
              <td>プチトマト</td>
              <td>2個</td>
            </tr>
            <tr>
              <td>ブロッコリー</td>
              <td>数片</td>
            </tr>
            <tr>
              <td>黒胡椒</td>
              <td>少々</td>
            </tr>
            <tr>
              <td>オリーブオイル</td>
              <td>大さじ1</td>
            </tr>
          </tbody>
        </table>
        <p>【作り方】</p>
        <p>①ブロッコリーは軽く塩ゆでしておく。</p>
        <p>
          ②フライパンにオリーブオイル大さじ1を引き、NEXTハンバーグの両面を焦げ目がつくくらいまで焼く。
        </p>
        <p>③とろけるチーズを小鍋に入れてとろっとなるまで溶かし混ぜる。</p>
        <p>
          ④焼いたNEXTハンバーグにデミソース、その上から③のチーズを速やかにかけ、お好みに合わせて黒粒コショウを一振りかける。
        </p>
        <p>⑤トマトとブロッコリーを盛り付けて出来上がり。</p>
        <br />
      </>
    ),
    recipe02: (
      <>
        <h4>2. さっぱり和風おろし梅ハンバーグ</h4>
        <Image
          src="/img/hamburgersteak/recipe2.jpg"
          width={1280}
          height={800}
        ></Image>
        <p>【材料】</p>
        <table>
          <tbody>
            <tr>
              <td>NEXTハンバーグ</td>
              <td>1枚</td>
            </tr>
            <tr>
              <td>大根おろし</td>
              <td>適量</td>
            </tr>
            <tr>
              <td>大葉</td>
              <td>1枚</td>
            </tr>
            <tr>
              <td>梅干し</td>
              <td>1個</td>
            </tr>
            <tr>
              <td>ごま油</td>
              <td>大さじ1</td>
            </tr>
            <tr>
              <td>オリーブオイル</td>
              <td>大さじ1</td>
            </tr>
            <tr>
              <td>- ソース -</td>
              <td></td>
            </tr>
            <tr>
              <td>醤油</td>
              <td>大さじ1</td>
            </tr>
            <tr>
              <td>みりん</td>
              <td>大さじ1</td>
            </tr>
            <tr>
              <td>バルサミコ酢</td>
              <td>小さじ1</td>
            </tr>
          </tbody>
        </table>
        <p>【作り方】</p>
        <p>①大根をおろしておく。</p>
        <p>②ソースの醤油、みりん、バルサミコ酢を混ぜておく。</p>
        <p>
          ③フライパンにごま油大さじ1杯を引き、NEXTハンバーグの両面を焦げ目がつくくらいまで焼く。
        </p>
        <p>
          ④焼き上がったNEXTハンバーグに大葉を引き、大根おろしと梅干しをのせ、ソースを適量かけて出来上がり。
        </p>
        <br />
      </>
    ),
    recipe03: (
      <>
        <h4>3. ロコモコ風ハンバーグ</h4>
        <Image
          src="/img/hamburgersteak/recipe3.jpg"
          width={1280}
          height={800}
        ></Image>
        <p>【材料】</p>
        <table>
          <tbody>
            <tr>
              <td>NEXTハンバーグ</td>
              <td>1枚</td>
            </tr>
            <tr>
              <td>付属のソース</td>
              <td>1つ</td>
            </tr>
            <tr>
              <td>オリーブオイル</td>
              <td>大さじ1</td>
            </tr>
            <tr>
              <td>雑穀米ご飯</td>
              <td>180g</td>
            </tr>
            <tr>
              <td>- 付け合わせA -</td>
              <td></td>
            </tr>
            <tr>
              <td>木綿豆腐</td>
              <td>100g</td>
            </tr>
            <tr>
              <td>ターメリック</td>
              <td>少々</td>
            </tr>
            <tr>
              <td>ハーブソルト</td>
              <td>少々</td>
            </tr>
            <tr>
              <td>- 付け合わせB -</td>
              <td></td>
            </tr>
            <tr>
              <td>玉ねぎ</td>
              <td>1/4</td>
            </tr>
            <tr>
              <td>プチトマト</td>
              <td>2個</td>
            </tr>
            <tr>
              <td>アボカド</td>
              <td>1/2個</td>
            </tr>
            <tr>
              <td>リーフレタス</td>
              <td>1枚</td>
            </tr>
          </tbody>
        </table>
        <p>【作り方】</p>
        <p>①付け合せA（炒り卵風豆腐）</p>
        <p>
          フライパンにオリーブオイルを引き、木綿豆腐をさい箸で崩しながら、ターメリックを加える。全体に色が行き渡ったら、ハーブソルトで味を整え、お皿によけておく。
        </p>
        <p>②付け合せB</p>
        <p>
          アボカド、玉ねぎはスライスしておく。（玉ねぎは水にさらしておくと辛みがやわらぐ）
        </p>
        <p>
          ③フライパンにオリーブオイル大さじ1杯引き、NEXTハンバーグの両面を焦げ目がつくくらいまで焼く。
        </p>
        <p>
          ④お皿に炊いた雑穀米ご飯をよそい、リーフレタスを引き、NEXTハンバーグ、付け合せA、Bを盛り付け、デミソースをかけて出来上がり。
        </p>
        <br />
      </>
    ),
    pr02_h: {
      jp: "仕様",
      en: "",
      tw: "",
    }[languageCode],
    pr02: {
      jp:
        "1パッケージに4個入っているハンバーグセット【冷凍】\n＜内容＞\n・「NEXTハンバーグ1.0」100g×4個\n・特製デミグラスソース（植物性） 4個\n\n原材料：オニオンソテー、大豆（遺伝子組み換えでない）、パン粉、ひよこ豆パウダー、食用植物油脂、小麦粉、エンドウ豆たん白、馬鈴薯澱粉、塩、乾燥椎茸、酵母エキス、米紅麹、香辛料（ブラックペッパー、ホワイトペッパー、ナツメグ、オールスパイス）\n\n※ハンバーグ、ソースともに動物性の原料は一切使用しておりません。パームオイルや、牛骨炭を用いた白砂糖も使用しておらず、工場の生産ラインでも動物性の原料を扱っておりません。",
      en: "",
      tw: "",
    }[languageCode],
    makuake: (
      <>
        <Link href="https://www.makuake.com/project/nextmeats2/">
          <Image
            src="/img/hamburgersteak/makuake.jpg"
            width={1200}
            height={630}
          ></Image>
        </Link>
        <p>
          おかげさまで『NEXTハンバーグ
          1.0』は、Makuakeでサポーター558人、達成率711%という素晴らしい結果で終えることができました。
          ご支援くださったみなさま、本当にありがとうございました！
          ネクストミーツは今後も「地球を終わらせない」という理念に向かって頑張ってまいりますので、応援のほどよろしくお願いいたします！
        </p>
        <h4>＜＜プレミアムリターン 購入サポーター＞＞</h4>
        <p>● 坂元 康宏（サカモト ヤスヒロ）さま</p>
      </>
    ),
    link: {
      jp: (
        <>
          <a href="https://shop.nextmeats.jp/products/hamburgersteak">
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

export default Hamburgersteak;
