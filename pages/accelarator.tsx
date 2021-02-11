import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import styles from "./accelarator.module.scss";
import Image from "next/image";

const Accerlarator = (): React.ReactElement => {
  return (
    <Layout languageCode={"jp"}>
      <Head>
        <meta
          property="og:image"
          content="https://nextmeats.co.jp/img/accelarator/header.jpg"
        />
      </Head>
      <div className={styles.back}>
        <div className={styles.fv}>
          <img src="/img/accelarator/header.jpg" alt="" />
        </div>
        <div className={styles.sheet}>
          <section className={styles.about}>
            <h2>
              ネクストミーツ
              <br className="responsive" />
              アクセラレータープログラムとは
              <br />
              <span>
                世界同時開催で
                <br className="responsive" />
                クロスボーダーオープンイノベーションを起こす
              </span>
            </h2>
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
          </section>
          <section className={styles.purpose}>
            <h2>目的</h2>
            <div>
              <div>
                <img src="/img/accelarator/169_hands.jpg" alt="" />
                <h3>代替肉のイノベーション</h3>
                <p>
                  参加者それぞれが持っている知見や技術を持ち合わせることで代替肉事業にイノベーションを起こします。
                </p>
              </div>
              <div>
                <img src="/img/accelarator/169_light.jpg" alt="" />
                <h3>地球をよくするための共創</h3>
                <p>
                  競争ではなく共創することを目指し、地球をよくしていくために手を取り合っていきます。
                </p>
              </div>
              <div>
                <img src="/img/accelarator/169_earth.jpg" alt="" />
                <h3>世界市場獲得</h3>
                <p>企業同士がタッグを組み、世界市場を取りにいきます。</p>
              </div>
            </div>
          </section>
          <section className={styles.target}>
            <h2>
              「地球のことを真剣に考える」
              <br />
              企業、個人、研究者の方を募集いたします。
            </h2>
            <div
              style={{
                backgroundImage: "url(/img/accelarator/food.jpg)",
              }}
            >
              <h3>
                <span>Food Tech</span>
              </h3>
              <p>
                <span>
                  原料・加工・調味・栄養学的なアプローチなどの技術を活用し、今までにない代替肉開発に貢献する。
                </span>
              </p>
            </div>
            <div
              style={{
                backgroundImage: "url(/img/accelarator/bio.jpg)",
              }}
            >
              <h3>
                <span>Bio Tech</span>
              </h3>
              <p>
                <span>
                  微細藻類・遺伝子・培養技術などを活用し、新たな代替肉開発に貢献する。
                </span>
              </p>
            </div>
            <div
              style={{
                backgroundImage: "url(/img/accelarator/agri.jpg)",
              }}
            >
              <h3>
                <span>Agri Tech</span>
              </h3>
              <p>
                <span>
                  IoTやブロックチェーンなどの農業技術を活用し、新たな代替肉の原材料の分野で貢献する。
                </span>
              </p>
            </div>
            <div
              style={{
                backgroundImage: "url(/img/accelarator/hardware.jpg)",
              }}
            >
              <h3>
                <span>Hard Ware</span>
              </h3>
              <p>
                <span>
                  機会設備、包装技術などの強みを活かし、代替肉の生産過程の分野で貢献する。
                </span>
              </p>
            </div>
            <p>
              上記以外でも、代替肉を作っていく上でのイノベーションになればどんな企業、個人、研究者の方でもご参加いただけます。
            </p>
          </section>
          <section className={styles.schedule}>
            <h2>スケジュール</h2>
            <div className={styles.grid}>
              <div className={styles.item}>
                <Image
                  src="/img/accelarator/icon/slacklogo.png"
                  width={72}
                  height={72}
                />
              </div>
              <div className={styles.item}>
                <p>応募期間</p>
              </div>
              <div className={`${styles.item} ${styles.flow}`}>
                <div className={styles.arrow}>
                  <p>1ヶ月</p>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className={styles.item}>
                <Image
                  src="/img/accelarator/icon/gform.png"
                  width={36}
                  height={48}
                />
              </div>
              <div className={styles.item}>
                <p>
                  一次審査
                  <br />
                  【書類審査】
                </p>
              </div>
              <div className={`${styles.item} ${styles.flow}`}>
                <div></div>
                <div className={styles.arrow}>
                  <p>2〜4週間</p>
                </div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className={styles.item}>
                <Image
                  src="/img/accelarator/icon/zoomlogo.png"
                  width={40}
                  height={40}
                />
              </div>
              <div className={styles.item}>
                <p>
                  二次審査
                  <br />
                  【オンラインピッチ】
                </p>
              </div>
              <div className={`${styles.item} ${styles.flow}`}>
                <div></div>
                <div></div>
                <div className={styles.arrow}>
                  <p>2〜4週間</p>
                </div>
                <div></div>
                <div></div>
              </div>

              <div className={styles.item}>
                <Image
                  src="/img/accelarator/icon/poc.png"
                  width={72}
                  height={72}
                />
              </div>
              <div className={styles.item}>
                <p>
                  実験開始
                  <br />
                  POC
                </p>
              </div>
              <div className={`${styles.item} ${styles.flow}`}>
                <div></div>
                <div></div>
                <div></div>
                <div className={styles.arrow}>
                  <p>3〜6ヶ月</p>
                </div>
                <div></div>
              </div>

              <div className={styles.item}>
                <Image
                  src="/img/accelarator/icon/marketing.png"
                  width={72}
                  height={72}
                />
              </div>
              <div className={styles.item}>
                <p>テストマーケティング</p>
              </div>
              <div className={`${styles.item} ${styles.flow}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={styles.arrow}>
                  <p>3ヶ月</p>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.merit}>
            <h2>メリット</h2>
            <div>
              <div>
                <img src="/img/accelarator/merit01.png" alt="" />
                <h3>ブランド力</h3>
                <p>
                  代替肉の焼肉「NEXT焼肉シリーズ」を全国チェーンで展開、テレビ番組にも多数取り上げられ、日本をはじめ海外でも代替肉ブランドとして定着しました。植物性代替肉市場におけるネクストミーツのブランド力を使えます。
                </p>
              </div>
              <div>
                <img src="/img/accelarator/merit02.jpg" alt="" />
                <h3>ノウハウ・技術</h3>
                <p>
                  焼肉、牛丼、ハンバーグといった多様な代替肉製品を開発する中培われたノウハウ、技術を使って商品開発を行えます。
                </p>
              </div>
              <div>
                <img src="/img/accelarator/merit03.jpg" alt="" />
                <h3>スピード</h3>
                <p>
                  迅速に意思決定・テストを行い、商品化まで進められます。ネクストミーツのスピード感を体感することで、自社の新規事業などにも活かせます。
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src="/img/accelarator/merit04.jpg" alt="" />
                <h3>環境への取り組み</h3>
                <p>
                  ネクストミーツは「地球を終わらせない」を理念に代替肉の開発を行っています。企業のCSR活動としても取り組めます。
                </p>
              </div>
              <div>
                <img src="/img/accelarator/merit05.jpg" alt="" />
                <h3>ネットワーク</h3>
                <p>
                  アメリカ、台湾、ベトナムとグローバルに事業を展開しています。また、2021年1月にはOTCBB（アメリカ）へ上場しました。
                </p>
              </div>
              <div>
                <img src="/img/accelarator/merit06.jpg" alt="" />
                <h3>資金</h3>
                <p>
                  事業化に向けてのPoC（実証実験）にかかる各種費用や研究費をネクストミーツがサポートすることもできます。必要に応じて出資も検討いたします。
                </p>
              </div>
            </div>
          </section>
          <section className={styles.contact}>
            <div>
              <a href="">
                Slack に参加して
                <br className="responsive" />
                アクセラレータープログラムに応募する
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Accerlarator;
