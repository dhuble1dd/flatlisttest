import i18next from "i18next";
import russian from './russian.json';
import english from './english.json';
import french from './french.json';
import { initReactI18next } from "react-i18next";
import * as RNLocalize from 'react-native-localize'

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: (callback) => {
        callback(RNLocalize.getLocales()[0].languageCode)
    },
    init: () => { },
    cacheUserLanguage: () => { }
}
i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        resources: {
            ru: russian,
            en: english,
            fr: french,
        },
        react: {
            useSuspense: false,
        },
        compatibilityJSON: 'v3',
    })
export default i18next;