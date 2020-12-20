import newsList from './newsText'

export default function TopNews() {
  return (
    <section>
      <h2><span>NEWS</span></h2>
      <div className="newsList">
        { newsList.slice(0, 5).map(x => (
          <div>
            <a href={x.href}>
              <span class="date">{x.date}</span>
              <span class="category">{x.category}</span>
              <span class="title">{x.title}</span>
            </a>
          </div>
        )) }

        <p className="readMore"><a href="/news.html">一覧を見る...</a></p>

        <div style={{
          margin: 'auto',
          padding: '16px',
          textAlign: 'center',
        }}>
          <p>＼　FOLLLOW US　／</p>
          <p>
            <a href="https://www.facebook.com/NextMeats" target="_blank">
              <img src="/img/topNews/facebook.png" alt="facebook" />
            </a>
            <a href="https://twitter.com/MeatsNext" target="_blank">
              <img src="/img/topNews/twitter.png" alt="twitter" />
            </a>
            <a href="https://www.instagram.com/nextmeats/" target="_blank">
              <img src="/img/topNews/instagram.png" alt="instagram" />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}