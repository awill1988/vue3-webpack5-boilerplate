import {createI18n, I18n as I18nGeneric, I18nAdditionalOptions, Locale, VueI18nOptions} from "vue-i18n";
import en from "@/locales/en.json"

export type I18nPluginLegacy = I18nGeneric
export type I18nPluginComposition = I18nGeneric<{}, {}, {}, false>

export type I18n = I18nPluginComposition

export function isLegacyI18n (arg: unknown): arg is I18nPluginLegacy {
    return (arg as Record<string, unknown>).mode === 'legacy'
}

export function isI18n (arg: unknown): arg is I18n {
    return (arg as Record<string, unknown>).mode === 'legacy'
}

export function setupI18n(options: VueI18nOptions & I18nAdditionalOptions = { locale: 'en-US' }) {
    const i18n: I18n | I18nPluginLegacy = createI18n(options) as I18n | I18nPluginLegacy;
    setI18nLanguage(i18n, options.locale || 'en-US')
    return i18n as I18n;
}

export function setI18nLanguage(i18n: I18n | I18nPluginLegacy, locale: Locale) {
    if (isLegacyI18n(i18n)) {
        i18n.global.locale = locale
    } else {
        i18n.global.locale.value = locale
    }
    /**
     * NOTE:
     * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
     * The following is an example for axios.
     *
     * axios.defaults.headers.common['Accept-Language'] = locale
     */
    document.querySelector('html')?.setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n: I18n, locale: string) {
    // load locale messages
    if (!i18n.global.availableLocales.includes(locale)) {
        const messages = await import(
            /* webpackChunkName: "locale-[request]" */ `./locales/${locale}.json`
            )
        i18n.global.setLocaleMessage(locale, messages.default)
    }
}

const {
    VUE_APP_I18N_LOCALE = "en",
    VUE_APP_I18N_FALLBACK_LOCALE = "en",
} = process.env;

let i18n: I18n;

export const setup = () =>{
    i18n = setupI18n({
        legacy: false,
        locale: VUE_APP_I18N_LOCALE,
        fallbackLocale: VUE_APP_I18N_FALLBACK_LOCALE,
        messages: {
            en,
        }
    });
    return i18n;
}

i18n = setup();

export default i18n;