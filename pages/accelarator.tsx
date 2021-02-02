import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import styles from "./accelarator.module.scss";

const Accerlarator = (): React.ReactElement => {
  return (
    <Layout languageCode={"jp"}>
      <Head>
        <title></title>
      </Head>
      <div className="page">
        <section className={styles.title}>
          <h1>NEXT MEATS ACCELARATOR</h1>
        </section>
        <section className={styles.about}>
          <h2>
            ネクストミーツ
            <br className="responsive" />
            アクセラレータープログラムとは
            <br />
            <span>What is Next Meats Accelerate Program?</span>
          </h2>
          <p>
            「地球を終わらせない」という理念をもとに、私たちは代替肉の開発と普及を進めてまいりました。
          </p>
          <p>
            日本では2020年に「代替肉元年」として市場に商品が出始めましたが、世界と比べると、かなり遅れています。代替肉は単純な健康食ではなく、地球の将来のため、地球環境を守るために必要な食品です。
          </p>
          <p>
            気候変動も待った無しの状況の中、市場シェア争いをしている状況ではなく、私たち日本の企業も日本や世界で肉を置き換えていくために手を取り合い、行動しなければいけない状況になっています。
          </p>
          <p>
            加工食品というジャンルでは日本企業の強みでもあり、世界に通用する商品を作ることは可能です。本プログラムは業界の壁を超え、地球の未来をより良くするため、世界に通用するものを作るための共創プログラムです。
          </p>
          <p>
            ネクストミーツの持つリソース（資金、技術、顧客網、商品・サービス等）を参加企業に解放し、参加企業はそれらのリソースを活用しながらスケールを前提にネクストミーツとの協業を目指します。両者の目的は異なりますが、本プログラムを通じてWIN-WINとなる協業を実現する、それがネクストミーツアクセラプログラムです。
          </p>
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
        <section>
          <h2>スケジュール</h2>
          <img src="/img/accelarator/schedule.png" alt="" />
        </section>
        <section>
          <h2>メリット</h2>
        </section>
        <section className={styles.contact}>
          <div>
            <a href="">Slack に参加してアクセラレータープログラムに応募する</a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Accerlarator;
