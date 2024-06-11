import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
	.use(initReactI18next)

	.init({
		lng: "en",
		fallbackLng: "en",
		debug: true,
		interpolation: {
			escapeValue: false
		},
		resources: {
			// English
			en: {
				translation: {
					landingh1: "keep talking with Relaysms"
				}
			},
			// french
			fr: {
				translation: {
					landingh1: "continuez à parler avec Relaysms"
				}
			},
			//fashi
			fa: {
				translation: {
					landingh1: "با Relaysms صحبت کنید"
				}
			}
		}
	});

export default i18n;
