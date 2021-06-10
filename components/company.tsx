import Link from "next/link";
import React from "react";
import { pagesPath } from "../lib/$path";
import { LanguageCode } from "../lib/language";

type Props = {
  languageCode: LanguageCode;
};

const Company = ({ languageCode }: Props): React.ReactElement => {
  const text = getText(languageCode);

  return (
    <section id="company">
      <h2 style={{ textAlign: "center" }}>
        <span>COMPANY</span>
      </h2>

      {languageCode === "jp" && (
        <p
          style={{
            display: "table",
            margin: "60px auto",
          }}
        >
          ネクストミーツ株式会社は、サスティナビリティをテーマにした日本の代替肉開発メーカーです。
        </p>
      )}
      <table>
        <tbody>
          <tr>
            <td>{text.name_h}</td>
            <td>{text.name}</td>
          </tr>
          <tr>
            <td>{text.establishment_h}</td>
            <td>{text.establishment}</td>
          </tr>
          <tr>
            <td>{text.ceo_h}</td>
            <td>{text.ceo}</td>
          </tr>
          <tr>
            <td>{text.director_h}</td>
            <td>{text.director}</td>
          </tr>
          {languageCode === "jp" && (
            <tr>
              <td>{text.lawyer_h}</td>
              <td>{text.lawyer}</td>
            </tr>
          )}
          <tr>
            <td>{text.location_h}</td>
            <td>{text.location}</td>
          </tr>
          <tr>
            <td>{text.lab_h}</td>
            <td>{text.lab}</td>
          </tr>
          {text.time_h && (
            <tr>
              <td>{text.time_h}</td>
              <td>{text.time}</td>
            </tr>
          )}
          <tr>
            <td>{text.contact_h}</td>
            <td>{text.contact}</td>
          </tr>
          {text.business_h && (
            <tr>
              <td>{text.business_h}</td>
              <td>{text.business}</td>
            </tr>
          )}
          <tr>
            <td>{text.holdings_h}</td>
            <td>{text.holdings}</td>
          </tr>
        </tbody>
      </table>
      <p id="sns">
        <Link href={pagesPath.recruit.$url()}>
          <a>{text.recruit}</a>
        </Link>
      </p>
    </section>
  );
};

const getText = (languageCode: LanguageCode): { [key: string]: string } => {
  return {
    name_h: {
      jp: "会社名",
      en: "Company Name",
      tw: "Company Name",
    }[languageCode],
    name: {
      jp: "ネクストミーツ株式会社",
      en: "Next Meats Co., Ltd.",
      tw: "Next Meats Co., Ltd.",
    }[languageCode],
    establishment_h: {
      jp: "設立",
      en: "Establishment",
      tw: "Establishment",
    }[languageCode],
    establishment: {
      jp: "2020年6月",
      en: "June, 2020",
      tw: "June, 2020",
    }[languageCode],
    ceo_h: {
      jp: "代表取締役",
      en: "CEO",
      tw: "CEO",
    }[languageCode],
    ceo: {
      jp: "佐々木 英之",
      en: "Hideyuki Sasaki",
      tw: "Hideyuki Sasaki",
    }[languageCode],
    director_h: {
      jp: "取締役",
      en: "Director",
      tw: "Director",
    }[languageCode],
    director: {
      jp: "石塚 孝一",
      en: "Koichi Ishizuka",
      tw: "Koichi Ishizuka",
    }[languageCode],
    lawyer_h: {
      jp: "顧問弁護士",
    }[languageCode],
    lawyer: {
      jp: "恩田 俊明",
    }[languageCode],
    location_h: {
      jp: "本社所在地",
      en: "Head Office Address",
      tw: "Head Office Address",
    }[languageCode],
    location: {
      jp: "〒160-0022 新宿区 新宿一丁目 34-16 \n清水ビル2F",
      en: "SHIMIZU BUILDING 2ND FLOOR, 34-16 SHINJUKU 1 Chome, SHINJUKU-KU, TOKYO 160-0022, JAPAN",
      tw: "SHIMIZU BUILDING 2ND FLOOR, 34-16 SHINJUKU 1 Chome, SHINJUKU-KU, TOKYO 160-0022, JAPAN",
    }[languageCode],
    lab_h: {
      jp: "NEXT Lab（研究室）",
      en: "NEXT Lab",
      tw: "NEXT Lab",
    }[languageCode],
    lab: {
      jp: "〒940-2127 新潟県長岡市新産4-1-10\nNARIC 2F",
      en: "NARIC 2ND FLOOR, 4-1-10 SHINSAN, NAGAOKA-SHI, NIGATA 940-2127, JAPAN",
      tw: "NARIC 2ND FLOOR, 4-1-10 SHINSAN, NAGAOKA-SHI, NIGATA 940-2127, JAPAN",
    }[languageCode],
    time_h: {
      jp: "営業時間",
      en: "",
      tw: "",
    }[languageCode],
    time: {
      jp: "10:00〜19:00（土日祝定休）",
      en: "",
      tw: "",
    }[languageCode],
    contact_h: {
      jp: "連絡先",
      en: "E-MAIL",
      tw: "E-MAIL",
    }[languageCode],
    contact: {
      jp: "info(at)nextmeats.co.jp",
      en: "info(at)nextmeats.co.jp",
      tw: "info(at)nextmeats.co.jp",
    }[languageCode],
    business_h: {
      jp: "事業内容",
      en: "",
      tw: "",
    }[languageCode],
    business: {
      jp: "代替肉の開発\n代替肉を使用した商品の企画・製造\n通販事業・関連メディア運営",
      en: "",
      tw: "",
    }[languageCode],
    holdings_h: {
      jp: "関連会社",
      en: "Related company",
      tw: "Related company",
    }[languageCode],
    holdings: {
      jp: "Next Meats Holdings, Inc.\nOTCBB 証券コード: NXMH",
      en: "Next Meats Holdings, Inc.\nOTCBB: NXMH",
      tw: "Next Meats Holdings, Inc.\nOTCBB: NXMH",
    }[languageCode],
    recruit: {
      jp: "求人情報",
      en: "RECRUITMENT INFORMATION",
      tw: "徵才資訊",
    }[languageCode],
  };
};

export default Company;
