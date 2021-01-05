import Head from "next/head";
import Header from "./header";

const Layout = ({ children, locale }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/img/favicon-64x64.png" />
        <link rel="icon" type="image/png" href="/img/favicon-64x64.png" />
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/balzss/luxbar/ae5835e2/build/luxbar.min.css"
        />
        <script src="https://www.googletagmanager.com/gtag/js?id=UA-170779191-1"></script>
        <script src="/js/ga.js"></script>
      </Head>
      <Header locale={locale} />
      {children}
      <footer>© 2021 Next Meats Co., Ltd.</footer>
    </>
  );
};

export default Layout;
