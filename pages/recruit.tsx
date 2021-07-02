import { GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import React from "react";
import Company from "../components/company";
import Layout from "../components/layout";
import { getLanguageCode, LanguageCode, Locale } from "../lib/language";

type Props = {
  languageCode: LanguageCode;
};

const Recruit = ({ languageCode }: Props): React.ReactElement => {
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
            <Company languageCode={languageCode} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

const getText = (languageCode: LanguageCode) => {
  return {
    title: {
      jp: "求人情報 NEXT MEATS | 代替肉開発スタートアップ【ネクストミーツ株式会社】人工肉・代替肉・植物肉",
      en: "Recruitment | Next Meats Co., Ltd. WEBSITE",
      zh: "Recruitment | Next Meats Co., Ltd. WEBSITE",
    }[languageCode],
    description: {
      jp: "求人情報 フェイクミートで次世代の未来をつくる代替肉開発スタートアップ【ネクストミーツ株式会社】 人工肉・代替肉・植物肉",
      en: "Recruitment | Next Meats Co., Ltd. WEBSITE",
      zh: "Recruitment | Next Meats Co., Ltd. WEBSITE",
    }[languageCode],
    header: {
      jp: "求人募集",
      en: "RECRUITMENT INFORMATION",
      zh: "徵才資訊",
    }[languageCode],
    subHeader: {
      jp: "常識は不要！\n気候変動の問題に立ち向かう同志を募集！",
      en: "We are actively recruiting passionate individuals who would like to join our team and better the world with us!",
      zh: "歡迎有志與我們一起改善世界的你/妳加入我們的團隊！",
    }[languageCode],
    explain: {
      jp: "一緒にフェイクミート（代替肉）業界を盛り上げていける仲間を探しています。\n正社員・インターン・顧問・ボランティアなど、ジョインしていただける方を幅広く募集していますのでお気軽にご連絡ください！",
      en: "As we are expanding globally, we have a wide variety of positions open and are flexible with all kinds of working styles. From scientists and seasoned experts of all fields to volunteers and interns, we are happy to coordinate a working schedule that works best for everyone.\nWe are currently expanding full-pitch in the USA, Spain, Italy, France, Vietnam, Taiwan, Hong Kong and Singapore and are actively recruiting in those countries.\nIf you are interested or have any questions, don't hesitate to shoot us an email!",
      zh: "隨著本公司的擴張並於全球各地成立據點，我們提供各式各樣的職缺，並且能容納多樣化的工作風格。不管你/妳是經驗豐富的專家和科學家，或是熱血的志工和實習生，我們都很高興為你/妳制訂專屬的工作時間表。\n\n目前，本公司在美國、西班牙、意大利、法國、越南、台灣、香港和新加坡各有據點，並正在積極招聘全職夥伴！\n\n如有興趣或有任何疑問，歡迎來信詢問！",
    }[languageCode],
    jobs: [
      {
        job: {
          jp: "研究部門",
          en: "Researcher Positions",
          zh: "研究專員",
        }[languageCode],
        description: {
          jp: "代替肉の研究開発に関わっていただける方を募集しています。\n\n・農学部出身もしくは在学の方へ\n代替肉開発ベンチャーのネクストミーツ株式会社では、テクノロジーによって次世代の肉を作り、普及させることをミッションとしています。\n地球の未来を守るために、このプロジェクトを一緒に育てて行きませんか？",
          en: "We are looking for skilled, dedicated, and experienced individuals with a strong track record of researching capabilities and background in either Food Science, Biochemistry, Bioengineering, Agriculture, Animal Science, or other relevant fields who can contribute to the R&D of our alternative meat products.",
          zh: "我們需要在食品科學、生物化學、生物工程、農業科學、動物科學或其他相關領域，具備良好研究能力與技術，專心和經驗豐富的研究專員，以協助我們在研發”未來肉“（肉類替代品）的路上穩健邁進！",
        }[languageCode],
      },
      {
        job: {
          jp: "マーケティング部門",
          en: "Marketing Positions",
          zh: "行銷專員",
        }[languageCode],
        description: {
          jp: "フードテックブランドとして世界に通用する会社を作ります。マーケティング戦略・戦術の策定および実行、webマーケティング、webメディア、広報・PRなど幅広くお任せできる方を募集しています。（経験者優遇）",
          en: "We are looking for creative, goal-oriented individuals with proven experience of Social Media Managing who we can rely on to grow our presence on all social platforms.",
          zh: "我們需要具有管理社交媒體經驗，且富有創意和目標導向的行銷專員，以擴大我們在各個社交平台上的影響力。",
        }[languageCode],
      },
      {
        job: {
          jp: "デザイナー",
          en: "Brand Strategist / Designer",
          zh: "品牌策略師/設計師",
        }[languageCode],
        description: {
          jp: "課題解決型スタートアップであるネクストミーツのブランドデザインを作っていく仕事です。",
          en: "We are looking for creative and focused branding managers, who are capable of working with the larger group to develop effective, localized, and well-designed communication strategies to communicate with the world.",
          zh: "我們需要富有創造力和致力發揮品牌優勢的設計師/策略師，與龐大的團隊合作，以制定本土化且有效的溝通策略，來聯繫全世界。",
        }[languageCode],
      },
      {
        job: {
          jp: "法人営業部門",
          en: "Corporate Sales Positions",
          zh: "企業銷售專員",
        }[languageCode],
        description: {
          jp: "BtoB営業をメインに流通ルート開拓をお願いいたします。\n食品関連の経験者を優遇いたします。",
          en: "We are looking for energetic and focused individuals with excellent communication skills, who are experienced and reliable in conducting BtoB sales and establishing new business opportunities, as well as maintaining strong customer relationships.",
          zh: "我們需要具備良好溝通能力、精力充沛且專注的銷售專員，以進行B2B銷售和建立新的商機，並且維持牢固的企業客戶關係。",
        }[languageCode],
      },
      {
        job: {
          jp: "商品開発部門",
          en: "",
          zh: "",
        }[languageCode],
        description: {
          jp: "ネクストミーツの最終商品を企画開発するお仕事です。\n業界経験の有無は問いませんので、「我こそは！」という方からの応募をお待ちしております。",
          en: "",
          zh: "",
        }[languageCode],
      },
      {
        job: {
          jp: "工場管理・品質管理",
          en: "Facility Manager / Manufacturing Quality Manager",
          zh: "設施/產線品質管理經理",
        }[languageCode],
        description: {
          jp: "食品の生産ラインの管理、品質管理などをお任せできる方（経験者優遇）を募集しております。",
          en: "We are looking for experienced individuals who can oversee our production lines and ensure our products consistently meet our high standards of quality.",
          zh: "我們需要具備品管經驗的設施/產線品質管理經理，協助監督我們的生產線，以確保產品符合本公司的高品質標準。",
        }[languageCode],
      },
      {
        job: {
          jp: "経理・総務",
          en: "Accountant / Office Administrator",
          zh: "會計師/行政管理專員",
        }[languageCode],
        description: {
          jp: "経理及び総務のポジションを募集しています(経験者優遇)。海外への展開を控えているため、英語でのコミュニケーションがとれる方を探しています。",
          en: "We are looking for organized and experienced accountants and office administrators who can join the team!",
          zh: "我們需要善於規劃和經驗豐富的會計師/行政管理專員，以助團隊運作順利！",
        }[languageCode],
      },
      {
        job: {
          jp: "その他（インターン・顧問・ボランティアなど）",
          en: "Other positions (Interns, Volunteers, Advisors)",
          zh: "其他（實習生，志工，顧問）",
        }[languageCode],
        description: {
          jp: "この分野に興味のある方を幅広く募集いたします。テレワーク可能な学生さんなども大歓迎です。",
          en: "We are also open to onboard passionate and enthusiastic Interns and Volunteers, who are interested in fighting the good fight with us to save our planet from total environmental disaster! ",
          zh: "我們也歡迎充滿熱情的實習生和志工加入我們，與我們一起奮鬥，努力讓地球免遭徹底的環境災難！",
        }[languageCode],
      },
    ],
    contact: {
      jp: "お問い合わせ窓口\n担当：今西\nrecruit(at)nextmeats.co.jp",
      en: "For all inquiries, please contact\nSaaya Matsukubo\nmatsukubo(at)nextmeats.co.jp",
      zh: "如有興趣或有任何疑問，歡迎來信詢問！\nChihsuan Lin\nchihsuan.lin(at)nextmeats.co.jp",
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

export default Recruit;
