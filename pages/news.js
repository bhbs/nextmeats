import Head from 'next/head'
import {useEffect, useState} from 'react'
import Layout from '../components/layout'

export default function News({ locale }) {
  const text = getText(locale)
  const [newsList, setNews] = useState({
    original: null,
    filtered: null,
    option: {},
  })

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbwwvPU8LEqSwCOyKXqtSFvrQlU-C2Zap7NpkR0ZR1dgGVFXOq_b/exec')
      .then(response => response.json())
      .then(news => setNews({
        original: news,
        filtered: news,
        option: {},
      }))
  }, [])

  const textSearch = e => {
    const text = e.target.value
    const option = { ...newsList.option, text }
    const originalList = newsList.original
    const filteredList = newsFilter(originalList, option)
    setNews({
      original: originalList,
      filtered: filteredList,
      option: option,
    })
  }

  const defaultCategory = "カテゴリで絞る"

  const categorySearch = e => {
    const category = e.target.value
    const option = { ...newsList.option, category }
    const originalList = newsList.original
    const filteredList = newsFilter(originalList, option)

    setNews({
      original: originalList,
      filtered: filteredList,
      option: option,
    })
  }

  const newsFilter = (originalList, option) => {
    let filteredList = originalList

    if (option.text) {
      filteredList = filteredList.filter(news => news[2].includes(option.text))
    }
    if (option.category && option.category !== defaultCategory) {
      filteredList = filteredList.filter(news => news[1].includes(option.category))
    }

    return filteredList
  }

  return (
    <Layout locale={locale}>
      <Head>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />
      </Head>
      <div className="page">
        <h2 style={{ textAlign: 'center' }}>NEWS</h2>
        <div style={{
          textAlign: 'center',
        }}>
          <input
            type='text'
            placeholder="タイトルで検索する"
            onChange={textSearch}
            style={{
              marginRight: '1em',
            }}
          />
          <select onChange={categorySearch}>
            <option>{defaultCategory}</option>
            <option>メディア情報</option>
            <option>お知らせ</option>
            <option>プレスリリース</option>
          </select>
        </div>
        <div className="newsList">
          { newsList.original
            ? newsList.filtered.map(x => (
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
    </Layout>
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

export async function getStaticProps({locale}) {
  switch (locale) {
    case 'ja':
      locale = 'ja'
      break
    case 'en-US':
      locale = 'en'
      break
    case 'zh':
      locale = 'tw'
      break
  }
  return { props: { locale } }
}
