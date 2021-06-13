import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { staticPath } from "../lib/$path";
import * as gtag from "../lib/gtag";
import { LanguageCode } from "../lib/language";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children: React.ReactNode;
  languageCode: LanguageCode;
  hideFooter?: true;
};

const Layout = ({
  children,
  languageCode,
  hideFooter,
}: Props): React.ReactElement => {
  const router = useRouter();
  const gaId = gtag.getGaId(router.locale);
  return (
    <>
      <Head>
        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:url"
          property="og:url"
          content="https://nextmeats.co.jp"
        />
        {languageCode === "jp" && (
          <meta
            key="og:image"
            property="og:image"
            content="https://nextmeats.co.jp/img/index/jp_web-ogp-1200x630-gyudon.jpg"
          />
        )}
        {languageCode === "en" && (
          <meta
            key="og:image"
            property="og:image"
            content="https://nextmeats.co.jp/img/index/en_web-ogp-1200x630-gyudon.jpg"
          />
        )}
        {languageCode === "zh" && (
          <meta
            key="og:image"
            property="og:image"
            content="https://nextmeats.co.jp/img/index/tw_web-ogp-1200x630-gyudon.jpg"
          />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MeatsNext" />
        <meta name="twitter:creator" content="@MeatsNext" />

        <link rel="shortcut icon" href={staticPath.img.favicon_32x32_png} />
        <link rel="apple-touch-icon" href={staticPath.img.favicon_64x64_png} />
        <link
          rel="icon"
          type="image/png"
          href={staticPath.img.favicon_32x32_png}
        />
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/balzss/luxbar/ae5835e2/build/luxbar.min.css"
        />

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
      <Header languageCode={languageCode} />
      {children}
      {!hideFooter && (
        <Footer languageCode={languageCode} path={router.route} />
      )}
    </>
  );
};

export default Layout;
