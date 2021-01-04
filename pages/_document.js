import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // TODO: lang

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://cdn.rawgit.com/balzss/luxbar/ae5835e2/build/luxbar.min.css" />
          <script src="https://www.googletagmanager.com/gtag/js?id=UA-170779191-1"></script>
          <script src="/js/ga.js"></script>
        </Head>
        <body>
          <header id="luxbar" className="luxbar-fixed">
            <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox"/>
            <div className="luxbar-menu luxbar-menu-right luxbar-menu-dark">
              <ul className="luxbar-navigation">
                <li className="luxbar-header">
                  <a href="/" className="luxbar-brand">NEXT MEATS</a>
                  <label className="luxbar-hamburger luxbar-hamburger-doublespin" 
                  id="luxbar-hamburger" htmlFor="luxbar-checkbox"> <span></span> </label>
                </li>
                { process.env.locale === 'ja' && <li className="luxbar-item"><a href="/news.html">NEWS</a></li> }
                <li className="luxbar-item"><a href="/message.html">MESSAGE</a></li>
                <li className="luxbar-item dropdown"><a>STORE</a>
                  <ul>
                    <li className="luxbar-item" ><a href="https://shop.nextmeats.jp" target="_blank">OFFICIAL SHOP</a></li>
                    <li className="luxbar-item" ><a href="https://www.amazon.co.jp/s?me=ALHPY7JG61WY1" target="_blank">AMAZON</a></li>
                    <li className="luxbar-item" ><a href="https://store.shopping.yahoo.co.jp/whitehole/a5d7a5e9a5.html" target="_blank">YAHOO</a></li>
                  </ul>
                </li>
                <li className="luxbar-item"><a href="/#company" onClick="document.getElementById('luxbar-hamburger').click()">COMPANY</a></li>
                <li className="luxbar-item dropdown"><a>LANGUAGE</a>
                  <ul>
                    {
                      process.env.locale !== 'ja' &&
                      <li className="luxbar-item" ><a href="//nextmeats.co.jp" target="_blank">日本語</a></li>
                    }
                    {
                      process.env.locale !== 'en' &&
                      <li className="luxbar-item" ><a href="//nextmeats.us" target="_blank">ENGLISH</a></li>
                    }
                    {
                      process.env.locale !== 'tw' &&
                      <li className="luxbar-item" ><a href="//nextmeats.tw" target="_blank">中文</a></li>
                    }
                  </ul>
                </li>
              </ul>
            </div>
          </header>
          <Main />
          <footer>© 2020 NEXT MEATS</footer>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument