import TopNews from '../components/topNews'
import Company from '../components/company'

export default function Index({ locale }) {
  const text = getText(locale)
  return (
    <div className="page">
      <section>
        <img
          src="/img/index/nextmeats.jpg"
          alt={text.title}
          style={{ width: '100%' }} />
      </section>

      {locale === 'ja' && <TopNews />}

      <section>
        <div style={{
          textAlign: 'center',
          lineHeight: 3
        }} dangerouslySetInnerHTML={{ __html: text.message }}></div>
      </section>

      <section>
        <div style={{ textAlign: 'center' }}>
          <h2><span>PRODUCTS</span></h2>

          <p style={{ marginTop: '60px' }}><b>{text.pr03}</b></p>
          <p><a href={locale == 'ja' ? 'https://shop.nextmeats.jp/products/burger' : 'burger.html'}>
            <img src="/img/index/burger20.jpg" alt={text.pr03} />
          </a></p>

          <p style={{ marginTop: '60px' }}><b>{text.pr01}</b></p>
          <p><a href="https://shop.nextmeats.jp/products/gyudon">
            <img src="/img/index/gyudon.jpg" alt={text.pr01} />
          </a></p>

          <p style={{ marginTop: '60px' }}><b>{text.pr02}</b></p>
          <p><a href="yakiniku.html">
            <img src="/img/index/yakiniku.jpg" alt={text.pr02} />
          </a></p>

          <div style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingBottom: '56.25%',
            overflow: 'hidden',
            margin: '120px auto 50px',
          }}>
            <iframe src="https://www.youtube.com/embed/videoseries?list=PLumUcr0KxJ-Mc4sW0CF2TxPBhnSspbNrS" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}></iframe>
          </div>

          <p style={{ marginTop: '60px' }}><b>{text.pr04}</b></p>
          <p style={{
            display: 'inline-block',
            textAlign: 'left',
            maxWidth: '640px',
          }} dangerouslySetInnerHTML={{ __html: text.pr05 }}></p>

          <p style={{ marginTop: '60px' }} dangerouslySetInnerHTML={{ __html: text.pr06 }}></p>
          <p><img src="/img/index/sdgs.png" alt="sdgs" style={{
            maxWidth: '480px',
            width: '100%',
          }} /></p>
        </div>
      </section>

      <Company locale={locale} />
    </div >
  )
}

function getText(locale) {
  return {
    title: {
      ja: 'NEXT MEATS | 代替肉開発スタートアップ【ネクストミーツ株式会社】人工肉・代替肉・植物肉',
      en: 'NEXT MEATS CO.,LTD  WEBSITE',
      tw: 'NEXT MEATS CO.,LTD  WEBSITE',
    }[locale],
    description: {
      ja: 'フェイクミートで次世代の未来をつくる代替肉開発スタートアップ【ネクストミーツ株式会社】 人工肉・代替肉・植物肉',
      en: '',
      tw: '',
    }[locale],
    message: {
      ja: '<h2><span>Message</span></h2><h3>代替肉で地球の未来をつくる</h3><p>地球環境の悪化と人口爆発による<br class="responsive" />食糧危機への対策として<br />我々ができることは、<br class="responsive" />食肉を減らすということ。<br />ネクストミーツ株式会社は、<br class="responsive" />地球の未来をより良くするため<br />「代替肉・植物肉・人工肉」に着目し、<br class="responsive" />その研究開発を行なっています。</p><p><a href="message.html"> ネクストミーツの理念について</a></p>',
      en: '<h2><span>Message</span></h2><h3>Shaping the future of our earth <br class="responsive">with meat altanatives</h3><p>One thing we can all do <br class="responsive">in response to the food crisis<br>caused by the deterioration <br class="responsive">in our global environment<br>and population growth is <br class="responsive">to reduce our meat consumption.<br>NEXT MEATS Co., Ltd. seeks <br class="responsive">to create a better future<br>for our earth by focusing on <br class="responsive">the R&D of meat altanatives.</p><p><a href="message.html">The Philosophy of NEXT MEATS</a></p>',
      tw: '<h2><span>Message</span></h2><h3>以替代肉開創地球的未來</h3><p>對於地球環境惡化與人口增加導致的糧食危機，我們能做的解決方法，就是減少吃肉。NEXT MEATS株式會社致力於「替代肉」的研發，希望帶給地球更美好的未來。</p><p><a href="message.html">> NEXT MEATS的理念</a></p>',
    }[locale],
    pr01: {
      ja: 'ビックリする旨さ！\n『ネクスト牛丼1.2』',
      en: 'A flavor that will surprise you!『NEXT Gyudon 1.2』',
      tw: '令人驚嘆的美味！「NEXT牛肉蓋飯1.2」',
    }[locale],
    pr02: {
      ja: '世界初となる焼肉用フェイクミート\n『カルビ1.0』＆『ハラミ1.0』',
      en: 'The world’s very first meat substitute developed for yakiniku NEXT Yakiniku『Short Rib 1.0』＆『Skirt 1.0』',
      tw: '全球首創的燒肉替代肉 NEXT燒肉「牛五花1.0」＆「牛橫隔膜1.0」',
    }[locale],
    pr03: {
      ja: '本気で美味しい代替肉\n『ネクストバーガー1.2』',
      en: 'An absolutely delicious meat substitute『NEXT Burger 1.2』',
      tw: '精心打造的美味替代肉「NEXT漢堡1.2」',
    }[locale],
    pr04: {
      ja: '代替肉専門メディア、コンソーシアムを運営',
      en: '',
      tw: '',
    }[locale],
    pr05: {
      ja: 'ネクストミーツ株式会社では、出来るだけ多くの方に現状を知ってもらうため、代替肉専門メディア<a href="https://nextmeats.jp/" target="_blank">「NEXT MEATS」</a>を運営しています。<br>　また、代替肉におけるオープンイノベーションをテーマにした<a href="https://www.facebook.com/groups/671252940085262" target="_blank">「フェイクミートコンソーシアム」</a>を運営し、有識者（生命科学・食品工学・遺伝子工学）のネットワークから生まれるアイデア、テクノロジーを駆使して次世代の肉を日々進化させていきます。',
      en: '',
      tw: '',
    }[locale],
    pr06: {
      ja: '',
      en: 'EXT MEATS is committed to <br class="responsive">global sustainability efforts <br class="responsive">by playing our part in achieving the SDGs.',
      tw: 'NEXT MEATS依據SDGs的理念，為地球永續的可能性盡一份心力。',
    }[locale],
  }
}

export async function getStaticProps() {
  const locale = process.env.locale

  return { props: { locale } }
}
