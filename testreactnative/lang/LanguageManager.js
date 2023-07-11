import React, { useContext } from "react";
import { I18n } from "i18n-js";
import { hu, en, de } from "./localizations.js";
import { LanguageContext } from "../context/PointOfInterestContext.js";



const I18nProvider = () => {
  const [language, setLanguage] = useContext(LanguageContext);
  const i18n = new I18n({ hu, en, de });

  if (language !== null) {
    i18n.locale = language;
  }

  return i18n;
};

export default I18nProvider;
