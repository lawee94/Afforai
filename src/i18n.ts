import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import EnglishTranslation from "./translations/en.json";
import VietnameseTranslation from "./translations/vi.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    lng: "en",
    resources: {
      en: {
        translation: EnglishTranslation,
      },
      vi: {
        translation: VietnameseTranslation,
      },
    },
  });

export default i18n;
