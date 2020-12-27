import Head from 'next/head'
import {useEffect, useState} from 'react'

export default function News({ locale }) {
  const text = getText(locale)
  const [newsList, setNews] = useState('')

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbwwvPU8LEqSwCOyKXqtSFvrQlU-C2Zap7NpkR0ZR1dgGVFXOq_b/exec')
      .then(response => response.json())
      .then(news => setNews(news))
  }, [])

  return (
    <div>
      <Head>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />
      </Head>
      <div className="page">
        <h2 style={{ textAlign: 'center' }}>NEWS</h2>
        <div class="newsList">
          { newsList
            ? newsList.map(x => (
                <div key={x[2]}>
                  <a href={x[3]}>
                    <span className="date">{new Date(x[0]).toLocaleDateString()}</span>
                    <span className="category">{x[1]}</span>
                    <span className="title">{x[2]}</span>
                  </a>
                </div>
              ))
            : <p style={{ textAlign: 'center' }}>now loading...</p>
          }
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
