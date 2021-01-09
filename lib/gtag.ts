export const getGaId = (locale: string) => {
  return {
    ja: process.env.GOOGLE_ANALYTICS_ID_JP_FOR_BROWSER,
    "en-US": process.env.GOOGLE_ANALYTICS_ID_US_FOR_BROWSER,
    zh: process.env.GOOGLE_ANALYTICS_ID_TW_FOR_BROWSER,
  }[locale];
};

export const pageview = (gaId: string, path: string) => {
  window.gtag("config", gaId, {
    page_path: path,
  });
};
