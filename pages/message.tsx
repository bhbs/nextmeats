import Head from "next/head";
import Layout from "../components/layout";

const Message = ({ locale }) => {
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
        <h1 className="messageHeading">
          {text.title}
          <br />
          {text.subject}
        </h1>
        <br />
        <h3>{text.state01}</h3>
        <p dangerouslySetInnerHTML={{ __html: text.state02 }}></p>
        <br />
        <h3>{text.state03}</h3>
        <p dangerouslySetInnerHTML={{ __html: text.state04 }}></p>
        <br />
        <h3>{text.state05}</h3>
        <p dangerouslySetInnerHTML={{ __html: text.state06 }}></p>
        <br />
        <p>
          <img src="/img/message/kou.jpg" />
        </p>
      </div>
    </Layout>
  );
};

function getText(locale) {
  return {
    title: {
      jp: "ネクストミーツの理念 ー",
      en: "The Philosophy of NEXT MEATS -",
      tw: "NEXT MEATS的理念 ー",
    }[locale],
    description: {
      jp: "地球を終わらせない",
      en: "Ensuring a sustainable future for the earth",
      tw: "顛覆美味 地球永續優植選擇",
    }[locale],
    subject: {
      jp: "地球を終わらせない",
      en: "Ensuring a sustainable future for the earth",
      tw: "顛覆美味 地球永續優植選擇",
    }[locale],
    state01: {
      jp: "子供達の未来のために我々ができることは？",
      en: "What can we do for the future of our children?",
      tw: "為了孩子們的未來，我們能做什麼？",
    }[locale],
    state02: {
      jp:
        '世界中で洪水、干ばつ、台風、熱波などの災害による被害が増加しています。<br>人間由来の温室効果ガス排出量のうち、肉の生産による排出量は全体の約15%を占めています。（<a href="http://www.fao.org/news/story/en/item/197623/icode/">国連</a> ）<br>温室効果ガスの排出は、動物性食品の消費を減らすことで劇的に改善できます。<br>畜産のために使われる膨大な量の水資源、排泄される温室効果ガスを減らす必要があります。',
      en:
        'The damage caused by disasters such as floods, droughts, typhoons, and heat waves has become increasingly severe around the world.<br>Out of all human activities, the total volume of greenhouse gas emissions deriving from meat production activities is calculated to be around 15%. (<a href="http://www.fao.org/news/story/en/item/197623/icode/">UN</a>)<br>We can drastically reduce this number by cutting back on our consumption of animal products.<br>With the world’s population expected to reach over 10 billion and other natural resources like fresh water rapidly depleting, it is critical that we do what we can now to help lower these carbon emissions.',
      tw:
        '溫室效應導致全球暖化，衝擊生態環境，各地洪水、乾旱、颶風、熱浪等災情不斷。人類經濟活動排放的溫室氣體中，畜養肉品約占了總排放量的15%（<a href="http://www.fao.org/news/story/en/item/197623/icode/">聯合國</a>）。減少消費動物性食品來降低溫室氣體的排放量，是挽救世界飢餓、能源危機和氣候變遷至關重要的一環。',
    }[locale],
    state03: {
      jp: "社会問題解決型フードテックベンチャー NEXT MEATS",
      en:
        "NEXT MEATS: A food tech venture company committed to addressing social problems",
      tw: "NEXT MEATSー致力解決社會問題的食品科技新創公司",
    }[locale],
    state04: {
      jp:
        "地球環境の今後を真剣に考え、ネクストミーツ株式会社はフードテックベンチャーとして立ち上がりました。<br>動物性の肉に替わる「おいしい植物性の肉」を作って普及させ、新しいライフスタイルを提供しながら、地球環境を良い方向に変えていきたいと考えています。",
      en:
        "Next Meats Co., Ltd. is a food tech venture company founded by individuals who take the future of our global environment seriously.<br>Our company strives to create delicious, innovative alternative meat products rooted in Japanese cuisine as a substitute for animal-based meat. In so doing, we hope to offer consumers a new lifestyle where sustainability is not compromised even when choosing a satisfactory meal.",
      tw:
        "我們認真思考地球環境的未來，成立了NEXT MEATS株式會社。身為食品科技新創企業，我們顛覆刻板印象，研發創新美味的優質植物肉品，提供人們嶄新的生活型態和消費選擇，讓地球永續美麗。",
    }[locale],
    state05: {
      jp: "未来に希望の光を",
      en: "A beacon of hope for the future",
      tw: "為未來點燃希望之光",
    }[locale],
    state06: {
      jp:
        "我々ネクストミーツは、未来に楽観的です。<br>人類はいつの時代も大きな課題に直面し、その度に必死で向き合い、そして解決してきました。<br>いま我々が置かれている「危機の時代」を乗り切るためには、今すぐ行動を起こす必要があります。<br>未来に向かう子供たち、その笑顔を絶やさないように、おいしい代替肉の開発と普及を進めていきます。",
      en:
        "NEXT MEATS is a company that is optimistic about the future of mankind.<br>Although the human race has always encountered major challenges throughout our history, we have never failed to confront these challenges head-on and overcome them.<br>In order to get through this period of crisis that we are currently in, it is paramount for us to take immediate action.<br>We hope to continue developing delicious meat substitutes that we can bring to everyone so as to keep our children smiling as they head into the future.",
      tw:
        "不論在任何時代人類總有面臨巨大的課題，NEXT MEATS對未來永遠抱持樂觀的態度，真摯面對挑戰，付諸行動來戰勝目前我們所處的「危機時代」。我們用最新的科技持續研發對地球友善的創新替代肉品，承諾孩子們未來永保燦爛笑容。",
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

export default Message;
