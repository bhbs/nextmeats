export default function ShopLink({ text }) {
  return (
    <div className="shoplink">
      <p><b>{text.shoplink}</b></p>
      <a
        href="https://shop.nextmeats.jp"
        target="_blank"
      >
        <img src="/img/shoplink/ec_n_240.png" alt="shop.nextmeats" />
      </a>
      <a
        href="https://www.amazon.co.jp/s?k=NEXTMEATS&ref=bl_dp_s_web_0" 
        target="_blank"
      >
        <img src="/img/shoplink/ec_a_240.png" alt="amazon" />
      </a>
      <a
        href="https://store.shopping.yahoo.co.jp/whitehole/a5d7a5e9a5.html?X=4#CentSrchFilter1"
        target="_blank"
      >
        <img src="/img/shoplink/ec_y_240.png" alt="yahoo" />
      </a>
    </div>
  )
}