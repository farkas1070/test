import React from "react";
import { I18n } from "i18n-js";
import { hu, en, de } from "./localizations.js";

const i18n = new I18n({ hu, en, de });
i18n.locale = "de";

export default i18n;
