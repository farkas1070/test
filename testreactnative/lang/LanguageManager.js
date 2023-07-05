import React from "react";
import { I18n } from "i18n-js";
import { hu, en, de } from "./localizations.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const i18n = new I18n({ hu, en, de });
AsyncStorage.getItem("Language").then((value) => {
  i18n.locale = value;
});
let systemLanguage = i18n.locale;

export default i18n;
export { systemLanguage };
