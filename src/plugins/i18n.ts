import {createI18n, LocaleMessages, VueMessageType, VueI18n} from "vue-i18n";

function loadLocaleMessages(): LocaleMessages<VueMessageType> {
	// Because require.context doesn't work in jest (it's a webpack construct)
	if (require.context === undefined) {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const messages = require("@/locales/en.json");
		return {
			en: messages,
		};
	}
	const locales = require.context(
		"@/locales",
		true,
		/[A-Za-z0-9-_,\s]+\.json$/i
	);
	const messages: LocaleMessages<VueMessageType> = {};
	locales.keys().forEach((key) => {
		const matched = key.match(/([A-Za-z0-9-_]+)\./i);
		if (matched && matched.length > 1) {
			const locale = matched[1];
			messages[locale] = locales(key);
		}
	});
	return messages;
}

let i18n: VueI18n;

export function setupI18n() {
	// @ts-ignore
	i18n = createI18n({
		legacy: false,
		messages: loadLocaleMessages(),
		locale: navigator.language,
		fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en-US",
	});
	return i18n;
}

i18n = setupI18n();

export default i18n;
