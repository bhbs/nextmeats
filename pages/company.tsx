import { GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Company from "../components/company";
import Layout from "../components/layout";
import { pagesPath } from "../lib/$path";
import { getLanguageCode, LanguageCode, Locale } from "../lib/language";

type Props = {
  languageCode: LanguageCode;
};

const CompanyPage = ({ languageCode }: Props): React.ReactElement => {
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
      <aside>
        <ol>
          <li>
            <Link href={pagesPath.company.$url({ hash: "production-system" })}>
              <a>ネクストミーツの生産体制</a>
            </Link>
          </li>
          <li>
            <Link
              href={pagesPath.company.$url({ hash: "#domestic-expansion" })}
            >
              <a>ネクストミーツの国内展開</a>
            </Link>
          </li>
          <li>
            <Link
              href={pagesPath.company.$url({ hash: "#overseas-expansion" })}
            >
              <a>ネクストミーツの海外展開</a>
            </Link>
          </li>
          <li>
            <Link href={pagesPath.company.$url({ hash: "#tvcm" })}>
              <a>ネクストミーツのテレビCM</a>
            </Link>
          </li>
          <li>
            <Link href={pagesPath.company.$url({ hash: "#lab" })}>
              <a>ネクストミーツの研究開発</a>
            </Link>
          </li>
          <li>
            <Link href={pagesPath.company.$url({ hash: "#collaboration" })}>
              <a>ネクストミーツのコラボレーション</a>
            </Link>
          </li>
        </ol>
      </aside>
      <div className="page" style={{ marginTop: "60px" }}>
        <Company languageCode={languageCode} />
        <section id="production-system">
          <h2>
            <span>ネクストミーツの</span>生産体制
          </h2>
          <h3>安心安全の食品づくりを徹底しています。</h3>
          <p>
            大豆やエンドウなどの植物性タンパク質を組み合わせ、熱と圧力で成形することにより、独自の食感と味わいを表現し、無添加で生産しています。
          </p>
          <p>
            また、HACCP、ISO認証、ハラル認証を取得した食品工場での生産を行なっており、品質管理を徹底しています。
          </p>
        </section>
        <section id="domestic-expansion">
          <h2>
            <span>ネクストミーツの</span>国内展開
          </h2>
          <h3>
            スーパー、外食チェーン等、代替肉ブランドとして幅広く流通しています。
          </h3>
        </section>
        <section id="overseas-expansion">
          <h2>
            <span>ネクストミーツの</span>海外展開
          </h2>
          <h3>国外への展開も進んでいます。</h3>
        </section>
        <section id="tvcm">
          <h2>
            <span>ネクストミーツの</span>テレビCM
          </h2>
          <h3>2021年4月より、キー局（４局）でのテレビCMを開始しました。</h3>
        </section>
        <section id="lab">
          <h2>
            <span>ネクストミーツの</span>研究開発
          </h2>
          <h3>優秀な研究者が世界から集結しています。</h3>
        </section>
        <section id="collaboration">
          <h2>
            <span>ネクストミーツの</span>コラボレーション
          </h2>
          <h3>多くの企業・大学・専門家とのコラボ</h3>
        </section>
      </div>
    </Layout>
  );
};

const getText = (languageCode: LanguageCode): { [key: string]: string } => {
  return {
    title: {
      jp: "会社概要 NEXT MEATS | 代替肉開発スタートアップ【ネクストミーツ株式会社】人工肉・代替肉・植物肉",
      en: "COMPANY | Next Meats Co., Ltd. WEBSITE",
      tw: "COMPANY | Next Meats Co., Ltd. WEBSITE",
    }[languageCode],
    description: {
      jp: "会社概要 フェイクミートで次世代の未来をつくる代替肉開発スタートアップ【ネクストミーツ株式会社】 人工肉・代替肉・植物肉",
      en: "COMPANY | Next Meats Co., Ltd. WEBSITE",
      tw: "COMPANY | Next Meats Co., Ltd. WEBSITE",
    }[languageCode],
    header: {
      jp: "会社概要",
      en: "COMPANY INFORMATION",
      tw: "COMPANY INFORMATION",
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

export default CompanyPage;
