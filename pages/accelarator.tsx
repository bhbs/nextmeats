import { GetStaticProps, GetStaticPropsResult } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { getLanguageCode, LanguageCode, Locale } from "../lib/language";
import styles from "./accelarator.module.scss";

type Props = {
  languageCode: LanguageCode;
};

const Accerlarator = ({ languageCode }: Props): React.ReactElement => {
  const [deviceType, setDevice] = useState("");

  const text = getText(languageCode);

  useEffect(() => {
    const mobiles = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    mobiles.test(navigator.userAgent) ? setDevice("mobile") : setDevice("pc");
  }, []);

  return (
    <Layout languageCode={languageCode}>
      <Head>
        <meta
          property="og:image"
          content={`https://nextmeats.co.jp/img/accelarator/header_${languageCode}_pc.jpg`}
        />
      </Head>
      <div className={styles.back}>
        <div className={styles.fv}>
          {deviceType == "pc" && (
            <Image
              src={`/img/accelarator/header_${languageCode}_pc.jpg`}
              alt=""
              width={1920}
              height={960}
            />
          )}
          {deviceType == "mobile" && (
            <Image
              src={`/img/accelarator/header_${languageCode}_mobile.jpg`}
              alt=""
              width={900}
              height={1200}
            />
          )}
        </div>
        <div className={styles.sheet}>
          <section className={styles.about}>
            <h2>{text.statement_h}</h2>
            <div>{text.statement}</div>
          </section>
          <section className={styles.purpose}>
            <h2>{text.purpose_h}</h2>
            <div>
              {[
                "/img/accelarator/169_hands.jpg",
                "/img/accelarator/169_light.jpg",
                "/img/accelarator/169_earth.jpg",
              ].map((imgUrl, i) => (
                <div key={`purpose_${i + 1}`}>
                  <Image src={imgUrl} alt="" width={640} height={360} />
                  <h3>{text[`purpose_${i + 1}_h`]}</h3>
                  <p>{text[`purpose_${i + 1}`]}</p>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.target}>
            <h2>{text.target_h}</h2>

            {[
              ["/img/accelarator/food.jpg", "Food Tech"],
              ["/img/accelarator/bio.jpg", "Bio Tech"],
              ["/img/accelarator/agri.jpg", "Agri Tech"],
              ["/img/accelarator/hardware.jpg", "Hard Ware"],
            ].map((data, i) => (
              <div
                key={`target_${i}`}
                style={{
                  backgroundImage: `url(${data[0]})`,
                }}
              >
                <h3>
                  <span>{data[1]}</span>
                </h3>
                <p>
                  <span>{text[`target_${i + 1}`]}</span>
                </p>
              </div>
            ))}
            <p>{text.target_explanation}</p>
          </section>
          <section className={styles.schedule}>
            <h2>{text.schedule_h}</h2>
            <div className={styles.grid}>
              {[
                "/img/accelarator/icon/slacklogo.png",
                "/img/accelarator/icon/gform.png",
                "/img/accelarator/icon/zoomlogo.png",
                "/img/accelarator/icon/poc.png",
                "/img/accelarator/icon/marketing.png",
              ].map((imgUrl, i) => (
                <>
                  <div className={styles.item}>
                    <Image src={imgUrl} width={72} height={72} />
                  </div>
                  <div className={styles.item}>
                    <p>{text[`schedule_${i + 1}`]}</p>
                  </div>
                  <div className={`${styles.item} ${styles.flow}`}>
                    {deviceType === "pc" &&
                      Array.from<JSX.Element>({ length: i }).fill(<div></div>)}
                    <div className={styles.arrow}>
                      <p>{text[`schedule_${i + 1}_period`]}</p>
                    </div>
                    {deviceType === "pc" &&
                      Array.from<JSX.Element>({ length: 4 - i }).fill(
                        <div></div>
                      )}
                  </div>
                </>
              ))}
            </div>
          </section>
          <section className={styles.merit}>
            <h2>{text.merit_h}</h2>
            <div>
              {[
                "/img/accelarator/merit01.png",
                "/img/accelarator/merit02.jpg",
                "/img/accelarator/merit03.jpg",
              ].map((imgUrl, i) => (
                <div key={`merit_1_${i}`}>
                  <Image src={imgUrl} alt="" width={220} height={220} />
                  <h3>{text[`merit_${i + 1}_h`]}</h3>
                  <p>{text[`merit_${i + 1}`]}</p>
                </div>
              ))}
            </div>
            <div>
              {[
                "/img/accelarator/merit04.jpg",
                "/img/accelarator/merit05.jpg",
                "/img/accelarator/merit06.jpg",
              ].map((imgUrl, i) => (
                <div key={`merit_2_${i}`}>
                  <Image src={imgUrl} alt="" width={220} height={220} />
                  <h3>{text[`merit_${i + 4}_h`]}</h3>
                  <p>{text[`merit_${i + 4}`]}</p>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.judge}>
            <h2>{text.judge_h_1}</h2>
            <div>
              {[
                "/img/accelarator/judge1.jpg",
                "/img/accelarator/judge2.jpg",
              ].map((imgUrl, i) => (
                <div key={`judge_1_${i}`}>
                  <Image src={imgUrl} alt="" width={220} height={220} />
                  <h3>{text[`judge_${i + 1}_h`]}</h3>
                  <p>{text[`judge_${i + 1}`]}</p>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.judge}>
            <h2>{text.judge_h_2}</h2>
            <div>
              {[
                "/img/accelarator/judge5.jpg",
                "/img/accelarator/judge3.jpg",
              ].map((imgUrl, i) => (
                <div key={`judge_${i}`}>
                  <Image src={imgUrl} alt="" width={220} height={220} />
                  <h3>{text[`judge_${i + 3}_h`]}</h3>
                  <p>{text[`judge_${i + 3}`]}</p>
                </div>
              ))}
            </div>
            <div>
              {[
                "/img/accelarator/judge4.jpg",
                "/img/accelarator/judge6.jpg",
              ].map((imgUrl, i) => (
                <div key={`judge_${i}`}>
                  <Image src={imgUrl} alt="" width={220} height={220} />
                  <h3>{text[`judge_${i + 5}_h`]}</h3>
                  <p>{text[`judge_${i + 5}`]}</p>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.contact}>
            <div>
              <a href="https://join.slack.com/t/next-meats-workspace/shared_invite/zt-mynrep9g-_LCErwL7mB4KEspjhwmI_Q">
                {text.contact}
              </a>
            </div>
            <p style={{ fontSize: "0.8em" }}>{text.contact_explanation}</p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

const getText = (locale: LanguageCode) => {
  return {
    title: {
      jp:
        "NEXT MEATS | 代替肉開発スタートアップ【ネクストミーツ株式会社】人工肉・代替肉・植物肉",
      en: "",
      tw: "",
    }[locale],
    description: {
      jp:
        "フェイクミートで次世代の未来をつくる代替肉開発スタートアップ【ネクストミーツ株式会社】 人工肉・代替肉・植物肉",
      en: "",
      tw: "",
    }[locale],
    statement_h: {
      jp: (
        <>
          ネクストミーツ
          <br className="responsive" />
          アクセラレータープログラムとは
          <br />
          <span>
            世界同時開催で
            <br className="responsive" />
            クロスボーダーオープンイノベーションを起こす
          </span>
        </>
      ),
      en: (
        <>
          The Next Meats Accelerator Program
          <br />
          <span>
            Creating a worldwide, cross-border open innovation program
          </span>
        </>
      ),
      tw: (
        <>
          NEXT MEATS加速器计划是什么？ <br />
          <span>在世界范围内同步展开，引领跨境式开放创新。</span>
        </>
      ),
    }[locale],
    statement: {
      jp: (
        <>
          <p>
            「地球を終わらせない」という理念をもとに、私たちは代替肉の開発と普及を進めてきました。
          </p>
          <p>
            日本では2020年に「代替肉元年」として市場に商品が出始めましたが、世界と比べるとまだまだ遅れています。代替肉は健康食としても活躍できますが、あらゆる生命のため、地球環境を守るために必要な食品です。
          </p>
          <p>
            気候変動問題は待った無しの状態です。今後、SDGsの目標達成を掲げる企業は、利益追求型で市場シェアの争いをするのではなく、持てる技術やネットワークを組み合わせて、オープンイノベーションを起こす必要があります。
          </p>
          <p>
            本プログラムは業界の壁を超え、地球の未来をより良くするため、世界に通用する「ものづくり」をするための共創プログラムです。ネクストミーツの持つリソース（資金、技術、顧客、商品、事業開発力）と、参加企業による技術やアセットを組み合わせることで、世界でスケールできる事業をつくることができると考えています。
          </p>
          <p>
            本プログラムを通じてWIN-WINとなる協業を実現し、消費者にも環境問題への意識を持ってもらえる事業をつくる。それがネクストミーツのアクセラレータープログラムです。
          </p>
          <p>※ 本プログラムは3ヶ国語での世界同時開催となります。</p>
        </>
      ),
      en: (
        <>
          <p>
            Next Meats has strenuously researched, developed, and distributed
            plant-based alternative meats to fulfill our mission of &quot;Not
            letting Earth end&quot;. We believe reducing the consumption of
            commercial animal products and the strain put on the environment
            from animal agriculture is a critical factor in addressing climate
            change, and expect alternative meats to become even more of a vital
            aliment when considering the future of the Earth, and the survival
            of all life forms.
          </p>
          <p>
            We believe all companies which truly intend to realize any of the
            Sustainable Development Goals should participate in open innovation
            to combine their technologies and networks, rather than compete for
            market share and only focus on profitability.
          </p>
          <p>
            Because without exaggeration, our planet is on the brink of a
            climate catastrophe. But we are ambitious about changing the
            narrative.
          </p>
          <p>
            Hence, to resolve the issue in an effective way, we will be
            launching the 「Next Meats Accelerator Program」.
          </p>
          <p>
            This program, held worldwide in three languages simultaneously
            (Japanese, English, and Chinese), aims to speedily cultivate
            worldwide business collaboration opportunities focused on
            sustainability. By combining the resources of Next Meats (funds,
            technology, customers, products, business development capabilities)
            with the technologies and assets of participating companies, we aim
            to realize mutually beneficial partnerships and develop world-class
            businesses that raise consumers awareness of environmental issues.
          </p>
        </>
      ),
      tw: (
        <>
          <p>
            “不做地球的终结者”！基于此理念，我们一直以来致力于人造肉产品的研发和普及。
            人造肉作为健康食品活跃至今，其更重要的使命是保护地球环境，成为人类未来的必需食品。
          </p>
          <p>全球气候变化问题亟待解决</p>
          <p>
            今后，追求SDGs可持续发展的企业，将不再局限于以争夺市场份额为盈利目的。整合技术和资源的开放式创新模式将成为必然。
          </p>
          <p>
            我们的加速器计划旨在打破行业壁垒，改善地球的未来。在世界范围内搭建一种通用的“创造力”模式，共创共赢。
          </p>
          <p>
            我们相信通过将Next
            Meats的资源（资金、技术、客户、产品，了、业务开发能力）与参与公司的技术和资产相结合，可以实现全球范围内的大规模业务扩张。
          </p>
          <p>
            通过该计划不仅可以达成双赢，同时影响消费者环保意识，将环保观念构建融入到企业发展中。
          </p>
          <p>以上是Next Meats的加速器计划。</p>
          <p>*该计划将同时以三种语言在全球范围内发布。</p>
        </>
      ),
    }[locale],
    purpose_h: {
      jp: "目的",
      en: "PURPOSE",
      tw: "PURPOSE",
    }[locale],
    purpose_1_h: {
      jp: "代替肉のイノベーション",
      en: "Sparking Innovation",
      tw: "人造肉的创新",
    }[locale],
    purpose_1: {
      jp:
        "参加者それぞれが持っている知見や技術を持ち合わせることで代替肉事業にイノベーションを起こします。",
      en:
        "By combining the knowledge and technologies of all participants, we can spark innovation on an unprecedented scale in the alternative meat industry.",
      tw: "通过整合每个参与者持有的知识和技术，在植物替代肉领域掀起创新潮流。",
    }[locale],
    purpose_2_h: {
      jp: "地球をよくするための共創",
      en: "Uniting for the Earth",
      tw: "用共创改善地球",
    }[locale],
    purpose_2: {
      jp:
        "競争ではなく共創することを目指し、地球をよくしていくために手を取り合っていきます。",
      en:
        "Rather than competing amongst one another, if capable and passionate entities worked together we can improve the global environment much more efficiently.",
      tw: "以共同创造而非竞争为目标指向，携手并肩改善地球的生存状态。",
    }[locale],
    purpose_3_h: {
      jp: "世界市場獲得",
      en: "World market acquisition",
      tw: "斩获国际市场",
    }[locale],
    purpose_3: {
      jp: "企業同士がタッグを組み、世界市場を取りにいきます。",
      en:
        "By combining the power of all participating companies, we can and will expand and shape the global alternative meat market.",
      tw: "企业的全体参与者紧密结合，进军全球市场。",
    }[locale],
    target_h: {
      jp: (
        <>
          「地球のことを真剣に考える」
          <br />
          企業、個人、研究者の方を募集いたします。
        </>
      ),
      en: (
        <>
          We are calling on all companies, researchers, and experienced
          individuals who take climate action seriously and want to step up to
          the challenge of developing cutting-edge, never before seen
          alternative meat products with us.
        </>
      ),
      tw: (
        <>
          “为地球的未来诚心思考”
          <br />
          募集企业、个人和研究人员等志同道合的伙伴。
        </>
      ),
    }[locale],
    target_1: {
      jp:
        "原料・加工・調味・栄養学的なアプローチなどの技術を活用し、今までにない代替肉開発に貢献する。",
      en:
        "Let us know about your innovative approaches in food processing methods, flavoring, the supply and selection of raw materials, and nutritional insights.",
      tw:
        "利用原材料、加工、调味和营养学方法等技术，打开前所未有的人造肉研发道路。",
    }[locale],
    target_2: {
      jp:
        "微細藻類・遺伝子・培養技術などを活用し、新たな代替肉開発に貢献する。",
      en:
        "Microalgae, cell culturing and genetic modification technology all hold unbound possibility in the development of new alternative meat products. Talk to us about your product development ambitions!",
      tw: "通过利用微藻、基因和培养技术，为人造肉的新研发做出贡献。",
    }[locale],
    target_3: {
      jp:
        "IoTやブロックチェーンなどの農業技術を活用し、新たな代替肉の原材料の分野で貢献する。",
      en:
        "Collaborate with your specialty in IoT, blockchain and agricultural technology to discern new raw material prospects and other potentials to be unlocked",
      tw: "利用物联网和区块链等农业技术，为人造肉的原料创新领域做出贡献。",
    }[locale],
    target_4: {
      jp:
        "機会設備、包装技術などの強みを活かし、代替肉の生産過程の分野で貢献する。",
      en:
        "Utilize your knowledge on machinery and the packing-processing steps to improve the alternative meat production process!",
      tw: "利用机械设备和包装技术等优势，为人造肉的生产领域做出贡献。",
    }[locale],
    target_explanation: {
      jp:
        "上記以外でも、代替肉を作っていく上でのイノベーションになればどんな企業、個人、研究者の方でもご参加いただけます。",
      en:
        "We are open to collaborate with innovative companies, researchers, and individuals even if you do not specialize in alternative meats, if it is in your strong interests to contribute to the research and development of products which will come out of this program.",
      tw:
        "除上述条件外，在人造肉领域有望做出任何创新的企业、个人或研究人员都欢迎加入我们的计划。",
    }[locale],
    schedule_h: {
      jp: "スケジュール",
      en: "SCHEDULE",
      tw: "SCHEDULE",
    }[locale],
    schedule_1: {
      jp: "応募期間",
      en: "Application period",
      tw: "申请期间",
    }[locale],
    schedule_1_period: {
      jp: "1ヶ月",
      en: "1 Month",
      tw: "1个月",
    }[locale],
    schedule_2: {
      jp: (
        <>
          一次審査
          <br />
          【書類審査】
        </>
      ),
      en: (
        <>
          First process
          <br />
          Application review
        </>
      ),
      tw: (
        <>
          初次筛选
          <br />
          [书面审核]
        </>
      ),
    }[locale],
    schedule_2_period: {
      jp: "2〜4週間",
      en: "2 to 4 weeks",
      tw: "2-4周内",
    }[locale],
    schedule_3: {
      jp: (
        <>
          二次審査
          <br />
          【オンラインピッチ】
        </>
      ),
      en: (
        <>
          Second Process
          <br />
          Online Pitch
        </>
      ),
      tw: (
        <>
          二次筛选
          <br />
          [在线路演]
        </>
      ),
    }[locale],
    schedule_3_period: {
      jp: "2〜4週間",
      en: "2 to 4 weeks",
      tw: "2-4周内",
    }[locale],
    schedule_4: {
      jp: (
        <>
          実験開始
          <br />
          POC
        </>
      ),
      en: (
        <>
          Starting first trials
          <br />
          reviewing POC
        </>
      ),
      tw: (
        <>
          实验开始
          <br />
          POC
        </>
      ),
    }[locale],
    schedule_4_period: {
      jp: "3〜6ヶ月",
      en: "3 to 6 months",
      tw: "3-6个月",
    }[locale],
    schedule_5: {
      jp: "テストマーケティング",
      en: "Test Marketing",
      tw: "运营测试",
    }[locale],
    schedule_5_period: {
      jp: "3ヶ月",
      en: "3 Months",
      tw: "3个月",
    }[locale],
    merit_h: {
      jp: "メリット",
      en: "MERIT",
      tw: "MERIT",
    }[locale],
    merit_1_h: {
      jp: "ブランド力",
      en: "The Next Meats Branding",
      tw: "品牌力量",
    }[locale],
    merit_1: {
      jp:
        "代替肉の焼肉「NEXT焼肉シリーズ」を全国チェーンで展開、テレビ番組にも多数取り上げられ、日本をはじめ海外でも代替肉ブランドとして定着しました。植物性代替肉市場におけるネクストミーツのブランド力を使えます。",
      en:
        'Next Meats has become established as an alternative meat brand in Japan and overseas for developing the "NEXT Yakiniku Series", the world\'s first alternative meat designed for Yakiniku and served nationwide Barbeque chain in Japan. Next Meats has also received great media coverage and market advantage by swiftly establishing overseas collaborations and facilities, compared to competitors. By collaborating, you can use the brand power of Next Meats in establishing new businesses.',
      tw:
        "人造肉的日式烤肉“ NEXT 烧肉系列”在日本连锁店推出后，受到多家电视节目的邀约报道，Next Meats作为日本人造肉品牌，也迅速在海外打开知名度。在植物替代肉的消费领域，可以利用Next Meats的品牌影响力进军国际市场。",
    }[locale],
    merit_2_h: {
      jp: "ノウハウ・技術",
      en: "Know-how / technology",
      tw: "专有技术",
    }[locale],
    merit_2: {
      jp:
        "焼肉、牛丼、ハンバーグといった多様な代替肉製品を開発する中培われたノウハウ、技術を使って商品開発を行えます。",
      en:
        "We can develop products and offer our extensive know-how and technology cultivated through researching and developing our various alternative meat products such as yakiniku, beef bowl, and hamburger steak.",
      tw:
        "我们在开发各类人造肉产品（例如烤肉、牛肉盖饭和汉堡肉）的过程中积累的经验和技术，可以为您开发产品提供专业而有力的支持。",
    }[locale],
    merit_3_h: {
      jp: "スピード",
      en: "Speed of Business",
      tw: "高效进程",
    }[locale],
    merit_3: {
      jp:
        "迅速に意思決定・テストを行い、商品化まで進められます。ネクストミーツのスピード感を体感することで、自社の新規事業などにも活かせます。",
      en:
        "We value and pride ourselves in our speed of development. By experiencing the speediness and business style of Next Meats, it will surely be of use in your company's future endeavors.",
      tw:
        "帮助您高效做出产品决策和试验，推动商业化进程。在Next Meats加速器服务的体验过程中获得的经验和思考，亦可活用于公司新业务领域。",
    }[locale],
    merit_4_h: {
      jp: "環境への取り組み",
      en: "CSR Contribution",
      tw: "环保倡议",
    }[locale],
    merit_4: {
      jp:
        "ネクストミーツは「地球を終わらせない」を理念に代替肉の開発を行っています。企業のCSR活動としても取り組めます。",
      en:
        'Next Meats operates with the mission of "Not letting the Earth end." By collaborating with us, our partners can confidently state their CSR Contributions.',
      tw:
        "Next Meats“不做地球的终结者”的初心和理念，可以应用于企业CSR项目的传播。",
    }[locale],
    merit_5_h: {
      jp: "ネットワーク",
      en: "Network",
      tw: "区域关系",
    }[locale],
    merit_5: {
      jp:
        "アメリカ、台湾、ベトナムとグローバルに事業を展開しています。また、2021年1月にはOTCBB（アメリカ）へ上場しました。",
      en:
        "We have expanded our business to Taiwan and Vietnam, and are currently working full speed to establish facilities in America, Italy, Singapore, and several other countries. We have gotten listed on the American OTC Market in January of 2021.",
      tw:
        "Next Meats已面向美国、中国台湾、越南和世界各区推出业务。 于2021年1月，在OTCBB（美国）上市。",
    }[locale],
    merit_6_h: {
      jp: "資金",
      en: "Funding",
      tw: "资金计划",
    }[locale],
    merit_6: {
      jp:
        "事業化に向けてのPoC（実証実験）にかかる各種費用や研究費をネクストミーツがサポートすることもできます。必要に応じて出資も検討いたします。",
      en:
        "Next Meats can also support various costs and research costs for PoC (proof of concept) for commercialization. We will consider investing if necessary.",
      tw:
        "Next Meets可以为商业化进程中，PoC（概念验证）产生的各种费用和研究成本提供资金援助。必要时也考虑对参与公司的项目投资入股。",
    }[locale],
    judge_h_1: {
      jp: "ネクストミーツ",
      en: "NEXT MEATS",
      tw: "NEXT MEATS",
    }[locale],
    judge_h_2: {
      jp: "イノベーションアドバイザー",
      en: "INNOVATION ADVISOR",
      tw: "INNOVATION ADVISOR",
    }[locale],
    judge_1_h: {
      jp: (
        <>
          佐々木英之
          <br />
          <span>ネクストミーツ株式会社 CEO</span>
          <br />
          <span>Next Meats Holdings Inc. COO</span>
        </>
      ),
      en: "",
      tw: "",
    }[locale],
    judge_1: {
      jp:
        "早くから起業した経験を活かし、海外に目を向け、中国深センにて 12 年間様々な事業に携わる。 大企業向けのアクセラレータプログラムや、メディア運営で培った経験を生かし、2020年6月にネクストミーツを設立。現職に至る。国内外のメディアで話題となり日本を代表する代替肉ベンチャーとなる。フェイクミート研究家。中国語ビジネスレベル。代替肉ベンチャーとして開発製造販売、メディア運営を行う。",
      en: "",
      tw: "",
    }[locale],
    judge_2_h: {
      jp: (
        <>
          白井良
          <br />
          <span>ネクストミーツ株式会社 Founder</span>
          <br />
          <span>Next Meats Holdings Inc. CEO</span>
        </>
      ),
      en: "",
      tw: "",
    }[locale],
    judge_2: {
      jp:
        "シリアルアントレプレナー。\n大和証券出身。\n2006年から起業し、３度のバイアウト経験を持つ。株式会社ホワイトホールを東証一部上場のベクトルに売却し、その後MBOで株式を買い戻す。\n2017年より代替肉の研究を行い、2020年に代表の佐々木と共に株式会社化。2021年1月アメリカOTC上場。",
      en: "",
      tw: "",
    }[locale],
    judge_3_h: {
      jp: (
        <>
          中村 亜由子
          <br />
          <span>eiicon company 代表/founder</span>
        </>
      ),
      en: "",
      tw: "",
    }[locale],
    judge_3: {
      jp:
        "2008年株式会社インテリジェンス（現パーソルキャリア株式会社）入社。 以来、doda編集部、人材紹介事業部法人営業など、HR転職領域に従事。2015年「eiicon」事業を起案・推進。現在は全国各地の18,000社を超える様々な法人が登録し、日本最大級の企業検索・マッチングプラットフォームとなった「eiicon」を運営するeiicon company の代表を務める。年間60本以上のイベントにおいて講演・モデレートなども務め、多くのアクセラレータープログラムのメンター・審査員等幅広く活動している。 副業マッチングサービス「lotsful」 共同創業者。",
      en: "",
      tw: "",
    }[locale],
    judge_4_h: {
      jp: (
        <>
          富田 直
          <br />
          <span>eiicon company CDO/COO</span>
        </>
      ),
      en: "",
      tw: "",
    }[locale],
    judge_4: {
      jp:
        "大手不動産会社にて社内SEとしてスマホサイトの構築〜タブレットアプリの開発に従事。また、業界初無人店舗端末の構築・運営まで幅広く経験。2014年株式会社インテリジェンスに入社後、アルバイト求人サイト　anのリニューアルプロジェクトを担当。リニューアルによる月次応募の底上げに成功。社内表彰歴多数。その後、eiicon立ち上げ時から参画。サービス全体のマーケティング、プロモーションからWebサイト開発・デザイン～ディレクション、など幅広く、モノづくり全般を担う。",
      en: "",
      tw: "",
    }[locale],
    judge_5_h: {
      jp: (
        <>
          朝倉雅文
          <br />
          <span>株式会社Final Aim Co-Founder&CEO</span>
        </>
      ),
      en: "",
      tw: "",
    }[locale],
    judge_5: {
      jp:
        "都市銀行で東京にて法人融資を担当、人材紹介会社にてIT支援部、経営企画部、グローバル企画部にて事業開発担当。シンガポール移住後、シンガポール現地にて代表取締役社長を2社務める。東京帰国後、機械学習×3DプリンターのスタートアップでCOO、プロダクト統括責任者、経営企画部執行役員、事業執行役員、海外事業開発部執行役員を歴任、2017年東証一部上場企業にExit。2019年12月、株式会社FinalAim創業。",
      en: "",
      tw: "",
    }[locale],
    judge_6_h: {
      jp: (
        <>
          木村 将之
          <br />
          <span>Deloitte Tohmatsu Venture Support 取締役 COO</span>
        </>
      ),
      en: "",
      tw: "",
    }[locale],
    judge_6: {
      jp:
        "2007年有限責任監査法人トーマツ入社。IPO,M&A、KPI改善等の各種業務に従事。2010年より、デロイト トーマツ ベンチャーサポートの第2創業に参画し、200社超の成長戦略、資本政策立案をサポート、数多くの企業の資金調達、IPO実現に貢献。イノベーションコンサルティング事業を事業化し、2015年よりシリコンバレー拠点の立ち上げを行い海外の事業化を成功させ、4ヵ国160名体制への拡大を牽引。取締役COOとして全社の執行責任者を務める。シリコンバレーと日本に拠点を置き、日本発で世界を席巻する事業を生み出すことに貢献することをミッションとして活動。",
      en: "",
      tw: "",
    }[locale],
    contact: {
      jp: (
        <>
          Slack に参加して
          <br className="responsive" />
          アクセラレータープログラムに応募する
        </>
      ),
      en: (
        <>
          Join Slack and apply for <br />
          the Next Meats Accelerator Program
        </>
      ),
      tw: <>进入Slack申请参加速器计划</>,
    }[locale],
    contact_explanation: {
      jp:
        "※ 不具合・お問い合わせ等ございましたら ac2021[at]nextmeats.co.jp までご連絡ください。",
      en:
        "If you have any questions or concerns please contact ac2021[at]nextmeats.co.jp",
      tw:
        "*如果您有任何疑问或疑问，请通过 ac2021[at]nextmeats.co.jp 与我们取得联系",
    }[locale],
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

export default Accerlarator;
