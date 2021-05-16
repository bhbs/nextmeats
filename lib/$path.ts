/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  accelarator: {
    $url: (url?: { hash?: string }) => ({ pathname: '/accelarator' as const, hash: url?.hash })
  },
  burger: {
    $url: (url?: { hash?: string }) => ({ pathname: '/burger' as const, hash: url?.hash })
  },
  company: {
    $url: (url?: { hash?: string }) => ({ pathname: '/company' as const, hash: url?.hash })
  },
  data: {
    $url: (url?: { hash?: string }) => ({ pathname: '/data' as const, hash: url?.hash })
  },
  gyudon: {
    $url: (url?: { hash?: string }) => ({ pathname: '/gyudon' as const, hash: url?.hash })
  },
  hamburgersteak: {
    $url: (url?: { hash?: string }) => ({ pathname: '/hamburgersteak' as const, hash: url?.hash })
  },
  message: {
    $url: (url?: { hash?: string }) => ({ pathname: '/message' as const, hash: url?.hash })
  },
  news: {
    $url: (url?: { hash?: string }) => ({ pathname: '/news' as const, hash: url?.hash })
  },
  recruit: {
    $url: (url?: { hash?: string }) => ({ pathname: '/recruit' as const, hash: url?.hash })
  },
  yakiniku: {
    $url: (url?: { hash?: string }) => ({ pathname: '/yakiniku' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
