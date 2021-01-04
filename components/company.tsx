const Company = ({ locale }) => {
  const text = getText(locale);

  return (
    <section id="company">
      <h2>
        <span>COMPANY</span>
      </h2>
      <table>
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
        <tr>
          <td>{text.location_h}</td>
          <td>{text.location}</td>
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
            <td style={{ lineHeight: 3 }}>{text.business}</td>
          </tr>
        )}
      </table>
      <p id="sns">
        <a
          href="https://nextmeats.jp/%e6%b1%82%e4%ba%ba%e5%8b%9f%e9%9b%86/"
          target="_blank"
        >
          {text.recruit}
        </a>
      </p>
    </section>
  );
};

function getText(locale) {
  return {
    name_h: {
      ja: "会社名",
      en: "Company Name",
      tw: "Company Name",
    }[locale],
    name: {
      ja: "ネクストミーツ株式会社",
      en: "NEXT MEATS CO.,LTD",
      tw: "NEXT MEATS CO.,LTD",
    }[locale],
    establishment_h: {
      ja: "設立",
      en: "Establishment",
      tw: "Establishment",
    }[locale],
    establishment: {
      ja: "2020年6月",
      en: "June, 2020",
      tw: "June, 2020",
    }[locale],
    ceo_h: {
      ja: "代表取締役",
      en: "CEO",
      tw: "CEO",
    }[locale],
    ceo: {
      ja: "佐々木 英之",
      en: "Hideyuki Sasaki",
      tw: "Hideyuki Sasaki",
    }[locale],
    director_h: {
      ja: "取締役",
      en: "Director",
      tw: "Director",
    }[locale],
    director: {
      ja: "石塚 孝一",
      en: "Koichi Ishizuka",
      tw: "Koichi Ishizuka",
    }[locale],
    location_h: {
      ja: "本社所在地",
      en: "Head Office Address",
      tw: "Head Office Address",
    }[locale],
    location: {
      ja: "〒150-0022 渋谷区恵比寿南 1-16-13 3F\n※ 2020/10 本社を移転しました",
      en: "3RD FLOOR, 1-16-13 EBISU-MINAMI, SHIBUYA-KU,TOKYO 150-0022, JAPAN",
      tw: "3RD FLOOR, 1-16-13 EBISU-MINAMI, SHIBUYA-KU,TOKYO 150-0022, JAPAN",
    }[locale],
    time_h: {
      ja: "営業時間",
      en: "",
      tw: "",
    }[locale],
    time: {
      ja: "10:00〜19:00（土日祝定休）",
      en: "",
      tw: "",
    }[locale],
    contact_h: {
      ja: "連絡先",
      en: "E-MAIL",
      tw: "E-MAIL",
    }[locale],
    contact: {
      ja: "info*nextmeats.co.jp",
      en: "info*nextmeats.co.jp",
      tw: "info*nextmeats.co.jp",
    }[locale],
    business_h: {
      ja: "事業内容",
      en: "",
      tw: "",
    }[locale],
    business: {
      ja:
        "代替肉の開発\n代替肉を使用した商品の企画・製造\n通販事業・関連メディア運営",
      en: "",
      tw: "",
    }[locale],
    recruit: {
      ja: "求人情報",
      en: "",
      tw: "",
    }[locale],
  };
}

export default Company;
