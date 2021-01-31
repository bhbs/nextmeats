export type Locale = "ja" | "en-US" | "zh";

export type LanguageCode = "jp" | "en" | "tw";

type Locale2LanguageCode = {
  [key in Locale]: LanguageCode;
};

export const getLanguageCode = (locale: Locale): LanguageCode => {
  const locale2LanguageCode: Locale2LanguageCode = {
    ja: "jp",
    "en-US": "en",
    zh: "tw",
  };

  return locale2LanguageCode[locale];
};
