import { GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import { staticPath } from "../lib/$path";
import { getLanguageCode, LanguageCode, Locale } from "../lib/language";

type Props = {
  languageCode: LanguageCode;
};

const Message = ({ languageCode }: Props): React.ReactElement => {
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
        <h1 className="messageHeading">
          {text.title}
          <br />
          {text.subject}
        </h1>
        <br />
        <h3>{text.state01}</h3>
        <p>{text.state02}</p>
        <br />
        <h3>{text.state03}</h3>
        <p>{text.state04}</p>
        <br />
        <h3>{text.state05}</h3>
        <p>{text.state06}</p>
        <br />
        <p>
          <img src={staticPath.img.message.kou_jpg} />
        </p>
      </div>
    </Layout>
  );
};

const getText = (languageCode: LanguageCode) => {
  return {
    title: {
      jp: "ネクストミーツの理念",
      en: "The Philosophy of NEXT MEATS",
      zh: "NEXT MEATS的理念",
    }[languageCode],
    description: {
      jp: "- 地球を終わらせない",
      en: "- The Next Move from Meat",
      zh: "- 顛覆美味 地球永續優植選擇",
    }[languageCode],
    subject: {
      jp: "- 地球を終わらせない",
      en: "- The Next Move from Meat",
      zh: "- 顛覆美味 地球永續優植選擇",
    }[languageCode],
    state01: {
      jp: "子供達の未来のために我々ができることは？",
      en: "Can we talk about this crazy weather we’re having?",
      zh: "為了孩子們的未來，我們能做什麼？",
    }[languageCode],
    state02: {
      jp: (
        <>
          世界中で洪水、干ばつ、台風、熱波などの災害による被害が増加しています。
          <br />
          人間由来の温室効果ガス排出量のうち、肉の生産による排出量は全体の約15%を占めています。（
          <a href="http://www.fao.org/news/story/en/item/197623/icode/">
            国連
          </a>{" "}
          ）<br />
          温室効果ガスの排出は、動物性食品の消費を減らすことで劇的に改善できます。
          <br />
          畜産のために使われる膨大な量の水資源、排泄される温室効果ガスを減らす必要があります。
        </>
      ),
      en: (
        <>
          According to the
          <a href="http://www.fao.org/news/story/en/item/197623/icode/"> UN</a>,
          meat production accounts for roughly 15% of greenhouse gases emitted
          by us humans every year. As a result, weather events like typhoons and
          heat waves are getting more extreme, causing long-term damage to our
          planet (not to mention us).
          <br />
          The good news is that we can still make a difference and that’s by
          cutting down on our consumption of animal products. So, who are we
          exactly?
        </>
      ),
      zh: (
        <>
          溫室效應導致全球暖化，衝擊生態環境，各地洪水、乾旱、颶風、熱浪等災情不斷。人類經濟活動排放的溫室氣體中，畜養肉品約占了總排放量的15%（
          <a href="http://www.fao.org/news/story/en/item/197623/icode/">
            聯合國
          </a>
          ）。減少消費動物性食品來降低溫室氣體的排放量，是挽救世界飢餓、能源危機和氣候變遷至關重要的一環。
        </>
      ),
    }[languageCode],
    state03: {
      jp: "社会問題解決型フードテックベンチャー NEXT MEATS",
      en: "Bloom Where You Are Planted",
      zh: "NEXT MEATSー致力解決社會問題的食品科技新創公司",
    }[languageCode],
    state04: {
      jp: (
        <>
          地球環境の今後を真剣に考え、ネクストミーツ株式会社はフードテックベンチャーとして立ち上がりました。
          <br />
          動物性の肉に替わる「おいしい植物性の肉」を作って普及させ、新しいライフスタイルを提供しながら、地球環境を良い方向に変えていきたいと考えています。
        </>
      ),
      en: (
        <>
          Next Meats is a food-tech venture founded in Tokyo, by people
          passionate about delivering a better future for our children. We
          strive to create tasty alternatives to your favourite dishes, without
          the same environmental impact of using meat.
          <br />
          We believe in a more ecologically sustainable future for every person.
          Look out for Mother Nature and make a positive impact on your
          wellbeing, without compromising on taste or quality.
        </>
      ),
      zh: (
        <>
          我們認真思考地球環境的未來，成立了NEXT
          MEATS株式會社。身為食品科技新創企業，我們顛覆刻板印象，研發創新美味的優質植物肉品，提供人們嶄新的生活型態和消費選擇，讓地球永續美麗。
        </>
      ),
    }[languageCode],
    state05: {
      jp: "未来に希望の光を",
      en: "Looking To The Future…",
      zh: "為未來點燃希望之光",
    }[languageCode],
    state06: {
      jp: (
        <>
          我々ネクストミーツは、未来に楽観的です。
          <br />
          人類はいつの時代も大きな課題に直面し、その度に必死で向き合い、そして解決してきました。
          <br />
          いま我々が置かれている「危機の時代」を乗り切るためには、今すぐ行動を起こす必要があります。
          <br />
          未来に向かう子供たち、その笑顔を絶やさないように、おいしい代替肉の開発と普及を進めていきます。
        </>
      ),
      en: (
        <>
          Humans are a resilient bunch, but we all have to work together. Here
          at Next Meats, we’re optimistic about the future of our planet. By
          making small changes – like cutting down on factory-farmed meat – we
          can create a greener outlook for everyone.
          <br />
          We hope to continue developing mouth-watering alternatives that make
          plant-based the next move from meat.
        </>
      ),
      zh: (
        <>
          不論在任何時代人類總有面臨巨大的課題，NEXT
          MEATS對未來永遠抱持樂觀的態度，真摯面對挑戰，付諸行動來戰勝目前我們所處的「危機時代」。我們用最新的科技持續研發對地球友善的創新替代肉品，承諾孩子們未來永保燦爛笑容。
        </>
      ),
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

export default Message;
