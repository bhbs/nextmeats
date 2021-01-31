import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./header";
import * as gtag from "../lib/gtag";

type Props = {
  children: React.ReactNode;
  locale: string;
};

const Layout = ({ children, locale }: Props): React.ReactElement => {
  const router = useRouter();
  const gaId = gtag.getGaId(router.locale);
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextmeats.co.jp" />
        {locale === "jp" && (
          <meta
            property="og:image"
            content="https://nextmeats.co.jp/img/index/hamburger-steak_web-ogp-1200x630.jpg"
          />
        )}
        {locale === "en" && (
          <meta
            property="og:image"
            content="https://nextmeats.co.jp/img/index/en_web-ogp-1200x630-gyudon.jpg"
          />
        )}
        {locale === "tw" && (
          <meta
            property="og:image"
            content="https://nextmeats.co.jp/img/index/tw_web-ogp-1200x630-gyudon.jpg"
          />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MeatsNext" />
        <meta name="twitter:creator" content="@MeatsNext" />

        <link rel="shortcut icon" href="/img/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/img/favicon-64x64.png" />
        <link rel="icon" type="image/png" href="/img/favicon-64x64.png" />
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/balzss/luxbar/ae5835e2/build/luxbar.min.css"
        />
        <script src="https://www.googletagmanager.com/gtag/js?id=UA-170779191-1"></script>
        <script src="/js/ga.js"></script>

        {/* Google Analytics */}
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </Head>
      <Header locale={locale} path={router.route} />
      {children}
      <footer>© 2021 Next Meats Co., Ltd.</footer>
    </>
  );
};

export default Layout;
