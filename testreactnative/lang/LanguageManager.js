import React, { useContext } from "react";
import { I18n } from "i18n-js";
import { hu, en, de } from "./localizations.js";
import { LanguageContext,LoadingContext } from "../context/PointOfInterestContext.js";
const i18n = new I18n({ hu, en, de });
const I18nProvider = () => {
  const [language, setLanguage] = useContext(LanguageContext);
  const [loaded, setLoaded] = useContext(LoadingContext);

 
  if (!loaded) {
    i18n.
    i18n.locale = language;
  }
  return i18n;
};

export default I18nProvider;
