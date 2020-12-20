import Head from 'next/head'
import newsList from '../components/newsText'

export default function News({ locale }) {
  const text = getText(locale)
  return (
    <div>
      <Head>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />
      </Head>
      <div className="page">
        <h2 style={{ textAlign: 'center' }}>NEWS</h2>
        <div class="newsList">
          { newsList.map(x => (
            <div>
              <a href={x.href}>
                <span class="date">{x.date}</span>
                <span class="category">{x.category}</span>
                <span class="title">{x.title}</span>
              </a>
            </div>
          )) }
        </div>
      </div>
    </div>
  )
}

function getText(locale) {
  return {
    title: {
      ja: '',
    }[locale],
    description: {
      ja: '',
    }[locale],
  }
}

export async function getStaticProps() {
  const locale = process.env.locale

  return { props: { locale } }
}
