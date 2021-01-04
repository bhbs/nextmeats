import Head from 'next/head'

export default function Message({ locale }) {
  const text = getText(locale)
  return (
    <div>
      <Head>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />
      </Head>
      <div className="page">
        <h1>{text.title}<br />{text.subject}</h1>
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
        <p><img src="/img/message/kou.jpg" /></p>
      </div>
    </div>
  )
}

function getText(locale) {
  return {
    title: {
      ja: 'ネクストミーツの理念',
      en: 'The Philosophy of NEXT MEATS',
      tw: 'NEXT MEATS的理念',
    }[locale],
    description: {
      ja: '',
      en: '',
      tw: '',
    }[locale],
    subject: {
      ja: '〜 地球を終わらせない 〜',
      en: '〜 Ensuring a sustainable future for the earth 〜',
      tw: '〜 讓地球生生不息 〜',
    }[locale],
    state01: {
      ja: '子供達の未来のために我々ができることは？',
      en: 'What can we do for the future of our children?',
      tw: '為了孩子們的未來，我們能做的是什麼？ ',
    }[locale],
    state02: {
      ja: '世界中で洪水、干ばつ、台風、熱波などの災害による被害が増加しています。<br>人間由来の温室効果ガス排出量のうち、肉の生産による排出量は全体の約15%を占めています。（<a href="http://www.fao.org/news/story/en/item/197623/icode/">国連</a> ）<br>温室効果ガスの排出は、動物性食品の消費を減らすことで劇的に改善できます。<br>畜産のために使われる膨大な量の水資源、排泄される温室効果ガスを減らす必要があります。',
      en: 'The damage caused by disasters such as floods, droughts, typhoons, and heat waves has become increasingly severe around the world.<br>Our meat production activities account for around 15% of the total volume of greenhouse gases emitted by humans (<a href="http://www.fao.org/news/story/en/item/197623/icode/">according to the UN</a>).<br>We can drastically reduce the volume of greenhouse gases emitted by cutting back on our consumption of animal products.<br>It is critical for us to reduce the volume of greenhouse gases emitted as well as the massive amount of water resources used for breeding livestock.',
      tw: '全球各地洪水、乾旱、颱風、熱浪等災情不斷增加。在人類活動所排放的溫室氣體中，生產肉品的排放量約占總排放量的15%（<a href="http://www.fao.org/news/story/en/item/197623/icode/">聯合國</a>）。藉由減少消費動物性食品可非常顯著地改善溫室氣體的排放。因此有必要在畜產養殖上減少水資源的大量使用，並降低因動物排泄物造成的溫室氣體排放量。',
    }[locale],
    state03: {
      ja: '社会問題解決型フードテックベンチャー NEXT MEATS',
      en: 'NEXT MEATS: A food tech venture company committed to addressing social problems',
      tw: '專為解決社會問題的食品科技新創公司 NEXT MEATS',
    }[locale],
    state04: {
      ja: '地球環境の今後を真剣に考え、ネクストミーツ株式会社はフードテックベンチャーとして立ち上がりました。<br>動物性の肉に替わる「おいしい植物性の肉」を作って普及させ、新しいライフスタイルを提供しながら、地球環境を良い方向に変えていきたいと考えています。',
      en: 'NEXT MEATS Co., Ltd. is a food tech venture company founded by individuals who take the future of our global environment seriously.<br>Our company hopes to create delicious plant-based meat products as a substitute for animal-based meat and share them with consumers. In so doing, we hope to offer everyone the possibility of a new lifestyle while making a positive impact on our global environment.',
      tw: '我們認真思考地球環境的未來，以食品科技新創企業之姿成立了NEXT MEATS株式會社。我們希望生產替代動物性肉品的「美味植物性肉品」並使其普及化，以提供人們嶄新的生活型態，同時也讓地球環境持續往好的方向轉變。',
    }[locale],
    state05: {
      ja: '未来に希望の光を',
      en: 'A beacon of hope for the future',
      tw: '為未來點燃希望之光',
    }[locale],
    state06: {
      ja: '我々ネクストミーツは、未来に楽観的です。<br>人類はいつの時代も大きな課題に直面し、その度に必死で向き合い、そして解決してきました。<br>いま我々が置かれている「危機の時代」を乗り切るためには、今すぐ行動を起こす必要があります。<br>未来に向かう子供たち、その笑顔を絶やさないように、おいしい代替肉の開発と普及を進めていきます。',
      en: 'NEXT MEATS is a company that is optimistic about the future of mankind.<br>Although the human race has always encountered major challenges throughout our history, we have never failed to confront these challenges head-on and overcome them.<br>In order to get through this period of crisis that we are currently in, it is paramount for us to take immediate action.<br>We hope to continue developing delicious meat substitutes that we can bring to everyone so as to keep our children smiling as they head into the future.',
      tw: '我們NEXT MEATS對未來抱持著樂觀的態度。人類不論在任何時代，總面臨著巨大的課題，每次都是拚了命地面對問題，然後解決問題。為了戰勝目前我們所處的「危機時代」，必須立刻採取行動因應。我們會持續開發與普及美味的替代肉品，讓邁向未來的孩子們永保燦爛笑容。',
    }[locale],
  }
}

export async function getStaticProps({locale}) {
  switch (locale) {
    case 'ja':
      locale = 'tw'
      break
    case 'en-US':
      locale = 'en'
      break
    case 'zh':
      locale = 'tw'
      break
  }
  return { props: { locale } }
}
