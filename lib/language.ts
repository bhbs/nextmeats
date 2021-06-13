export type Locale = "ja" | "jp" | "en" | "en-US" | "zh" | "zh-TW";

export type LanguageCode = "jp" | "en" | "zh";

type Locale2LanguageCode = {
  [key in Locale]: LanguageCode;
};

export const getLanguageCode = (locale: Locale): LanguageCode => {
  const locale2LanguageCode: Locale2LanguageCode = {
    ja: "jp",
    jp: "jp",
    en: "en",
    "en-US": "en",
    zh: "zh",
    "zh-TW": "zh",
  };

  return locale2LanguageCode[locale];
};
