import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPropsResult } from "next";
import Company from "../components/company";
import Layout from "../components/layout";

type Props = {
  locale: string;
};

const Recruit = ({ locale }: Props): React.ReactElement => {
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
      <div>
        <section>
          <div className="page">
            <h1>{text.header}</h1>
            <h3>{text.subHeader}</h3>
            <p>{text.explain}</p>
            {text.jobs
              .filter((x) => x.job)
              .map((t, i) => {
                return (
                  <>
                    <p key={i + 1000} className="job">
                      {i + 1}
                      {".  "}
                      {t.job}
                    </p>
                    <p key={i + 2000}>{t.description}</p>
                  </>
                );
              })}
            <p>{text.contact}</p>
          </div>
        </section>
        <Company locale={locale} />
      </div>
    </Layout>
  );
};

function getText(locale) {
  return {
    title: {
      jp:
        "求人情報 NEXT MEATS | 代替肉開発スタートアップ【ネクストミーツ株式会社】人工肉・代替肉・植物肉",
      en: "Recruitment | Next Meats Co., Ltd. WEBSITE",
      tw: "Recruitment | Next Meats Co., Ltd. WEBSITE",
    }[locale],
    description: {
      jp:
        "求人情報 フェイクミートで次世代の未来をつくる代替肉開発スタートアップ【ネクストミーツ株式会社】 人工肉・代替肉・植物肉",
      en: "Recruitment | Next Meats Co., Ltd. WEBSITE",
      tw: "Recruitment | Next Meats Co., Ltd. WEBSITE",
    }[locale],
    header: {
      jp: "求人募集",
      en: "RECRUITMENT INFORMATION",
      tw: "RECRUITMENT INFORMATION",
    }[locale],
    subHeader: {
      jp: "常識は不要！\n気候変動の問題に立ち向かう同志を募集！",
      en:
        "We are actively recruiting passionate individuals who would like to join our team and better the world with us!",
      tw:
        "We are actively recruiting passionate individuals who would like to join our team and better the world with us!",
    }[locale],
    explain: {
      jp:
        "一緒にフェイクミート（代替肉）業界を盛り上げていける仲間を探しています。\n正社員・インターン・顧問・ボランティアなど、ジョインしていただける方を幅広く募集していますのでお気軽にご連絡ください！",
      en:
        "As we are expanding globally, we have a wide variety of positions open and are flexible with all kinds of working styles. From scientists and seasoned experts of all fields to volunteers and interns, we are happy to coordinate a working schedule that works best for everyone.\nWe are currently expanding full-pitch in the USA, Spain, Italy, France, Vietnam, Taiwan, Hong Kong and Singapore and are actively recruiting in those countries.\nIf you are interested or have any questions, don't hesitate to shoot us an email!",
      tw:
        "As we are expanding globally, we have a wide variety of positions open and are flexible with all kinds of working styles. From scientists and seasoned experts of all fields to volunteers and interns, we are happy to coordinate a working schedule that works best for everyone.\nWe are currently expanding full-pitch in the USA, Spain, Italy, France, Vietnam, Taiwan, Hong Kong and Singapore and are actively recruiting in those countries.\nIf you are interested or have any questions, don't hesitate to shoot us an email!",
    }[locale],
    jobs: [
      {
        job: {
          jp: "研究部門",
          en: "Researcher Positions",
          tw: "Researcher Positions",
        }[locale],
        description: {
          jp:
            "代替肉の研究開発に関わっていただける方を募集しています。\n\n・農学部出身もしくは在学の方へ\n代替肉開発ベンチャーのネクストミーツ株式会社では、テクノロジーによって次世代の肉を作り、普及させることをミッションとしています。\n地球の未来を守るために、このプロジェクトを一緒に育てて行きませんか？",
          en:
            "We are looking for skilled, dedicated, and experienced individuals with a strong track record of researching capabilities and background in either Food Science, Biochemistry, Bioengineering, Agriculture, Animal Science, or other relevant fields who can contribute to the R&D of our alternative meat products.",
          tw:
            "We are looking for skilled, dedicated, and experienced individuals with a strong track record of researching capabilities and background in either Food Science, Biochemistry, Bioengineering, Agriculture, Animal Science, or other relevant fields who can contribute to the R&D of our alternative meat products.",
        }[locale],
      },
      {
        job: {
          jp: "ブランディング・マーケティング部門",
          en: "Marketing Positions",
          tw: "Marketing Positions",
        }[locale],
        description: {
          jp:
            "フードテックブランドとして世界に通用する会社を作ります。\nメディア運営（SNS、PRなども含む）をお任せできる方を募集しています。",
          en:
            "We are looking for creative, goal-oriented individuals with proven experience of Social Media Managing who we can rely on to grow our presence on all social platforms.",
          tw:
            "We are looking for creative, goal-oriented individuals with proven experience of Social Media Managing who we can rely on to grow our presence on all social platforms.",
        }[locale],
      },
      {
        job: {
          jp: "デザイナー",
          en: "Brand Strategist / Designer",
          tw: "Brand Strategist / Designer",
        }[locale],
        description: {
          jp:
            "課題解決型スタートアップであるネクストミーツのブランドデザインを作っていく仕事です。",
          en:
            "We are looking for creative and focused branding managers, who are capable of working with the larger group to develop effective, localized, and well-designed communication strategies to communicate with the world.",
          tw:
            "We are looking for creative and focused branding managers, who are capable of working with the larger group to develop effective, localized, and well-designed communication strategies to communicate with the world.",
        }[locale],
      },
      {
        job: {
          jp: "法人営業部門",
          en: "Corporate Sales Positions",
          tw: "Corporate Sales Positions",
        }[locale],
        description: {
          jp:
            "BtoB営業をメインに流通ルート開拓をお願いいたします。\n食品関連の経験者を優遇いたします。",
          en:
            "We are looking for energetic and focused individuals with excellent communication skills, who are experienced and reliable in conducting BtoB sales and establishing new business opportunities, as well as maintaining strong customer relationships.",
          tw:
            "We are looking for energetic and focused individuals with excellent communication skills, who are experienced and reliable in conducting BtoB sales and establishing new business opportunities, as well as maintaining strong customer relationships.",
        }[locale],
      },
      {
        job: {
          jp: "商品開発部門",
          en: "",
          tw: "",
        }[locale],
        description: {
          jp:
            "ネクストミーツの最終商品を企画開発するお仕事です。\n業界経験の有無は問いませんので、「我こそは！」という方からの応募をお待ちしております。",
          en: "",
          tw: "",
        }[locale],
      },
      {
        job: {
          jp: "工場管理・品質管理",
          en: "Facility Manager / Manufacturing Quality Manager",
          tw: "Facility Manager / Manufacturing Quality Manager",
        }[locale],
        description: {
          jp:
            "食品の生産ラインの管理、品質管理などをお任せできる方（経験者優遇）を募集しております。",
          en:
            "We are looking for experienced individuals who can oversee our production lines and ensure our products consistently meet our high standards of quality.",
          tw:
            "We are looking for experienced individuals who can oversee our production lines and ensure our products consistently meet our high standards of quality.",
        }[locale],
      },
      {
        job: {
          jp: "経理・総務",
          en: "Accountant / Office Administrator",
          tw: "Accountant / Office Administrator",
        }[locale],
        description: {
          jp:
            "経理及び総務のポジションを募集しています(経験者優遇)。海外への展開を控えているため、英語でのコミュニケーションがとれる方を探しています。",
          en:
            "We are looking for organized and experienced accountants and office administrators who can join the team!",
          tw:
            "We are looking for organized and experienced accountants and office administrators who can join the team!",
        }[locale],
      },
      {
        job: {
          jp: "その他（インターン・顧問・ボランティアなど）",
          en: "Other positions (Interns, Volunteers, Advisors)",
          tw: "Other positions (Interns, Volunteers, Advisors)",
        }[locale],
        description: {
          jp:
            "この分野に興味のある方を幅広く募集いたします。テレワーク可能な学生さんなども大歓迎です。",
          en:
            "We are also open to onboard passionate and enthusiastic Interns and Volunteers, who are interested in fighting the good fight with us to save our planet from total environmental disaster! ",
          tw:
            "We are also open to onboard passionate and enthusiastic Interns and Volunteers, who are interested in fighting the good fight with us to save our planet from total environmental disaster! ",
        }[locale],
      },
    ],
    contact: {
      jp: "お問い合わせ窓口\n担当：田尻\ninfo@nextmeats.co.jp",
      en:
        "For all inquiries, please contact\nHiroki Tajiri,\ninfo@nextmeats.co.jp",
      tw:
        "For all inquiries, please contact\nHiroki Tajiri,\ninfo@nextmeats.co.jp",
    }[locale],
  };
}

type Locale = {
  locale: string;
};

export const getStaticProps: GetStaticProps = async ({
  locale,
}: Locale): Promise<GetStaticPropsResult<Locale>> => {
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
};

export default Recruit;
