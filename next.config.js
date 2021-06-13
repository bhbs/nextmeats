module.exports = {
  env: {
    GOOGLE_ANALYTICS_ID_JP_FOR_BROWSER: process.env.GOOGLE_ANALYTICS_ID_JP,
    GOOGLE_ANALYTICS_ID_US_FOR_BROWSER: process.env.GOOGLE_ANALYTICS_ID_US,
    GOOGLE_ANALYTICS_ID_TW_FOR_BROWSER: process.env.GOOGLE_ANALYTICS_ID_TW,
  },
  i18n: {
    locales: ["ja", "jp", "en", "en-US", "zh", "zh-TW"],
    defaultLocale: "ja",
    localeDetection: false,
    domains: [
      {
        domain: "nextmeats.co.jp",
        defaultLocale: "ja",
      },
      {
        domain: "nextmeats.us",
        defaultLocale: "en-US",
      },
      {
        domain: "nextmeats.tw",
        defaultLocale: "zh-TW",
      },
    ],
  },
};
