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
					landingh1: "keep talking with Relaysms",
					landingh2: "Send messages seamlessly with RelaySMS",
					Home: "Home",
					help: "Help",
					github: "GitHub",
					Blog: "Blog"
				},
				footer: {
					RelaySMS: "RelaySMS"
				}
			},
			// french
			fr: {
				translation: {
					landingh1: "continuez à parler avec Relaysms",
					landingh2:
						"Envoyez des e-mails, des publications et des messages en toute sécurité via SMS.",
					Home: "Accueil",
					help: "Aide",
					github: "GitHub",
					Blog: "Blog",
					RelaySMS: "RelaySMS",
					footerbody2:
						"Le client est très important, le client sera suivi par le client. Mais maintenant, la meilleure chose c'est le football purullamcorper, ou vallée avant tincidunt."
				}
			},
			//fashi
			fa: {
				translation: {
					landingh1: "با Relaysms صحبت کنید",
					landingh2: "ارسال ایمیل، پست و پیام به صورت ایمن از طریق SMS.",
					Home: "صفحه فرود",
					help: "کمک",
					github: "GitHub",
					Blog: "وبلاگ"
				}
			}
		}
	});

export default i18n;
