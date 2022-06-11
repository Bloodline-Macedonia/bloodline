import { useContext } from 'react';

import {
  LanguageContext,
  defaultLocale,
  locales,
} from '../i18n/LanguageContext';
import { LangStrings } from '../i18n/strings';

export default function useTranslation() {
  const [locale, setLocale] = useContext(LanguageContext);

  function t(key) {
    if (!LangStrings[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`);
    }

    return LangStrings[locale][key] || LangStrings[defaultLocale][key] || '';
  }

  return { t, locale, setLocale, locales };
}