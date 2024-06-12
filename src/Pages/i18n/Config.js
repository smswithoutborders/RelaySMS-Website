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
					Blog: "Blog",
					HowItWorks: "How It Works",
					HowItWorksA:
						"Grant permission for RelaySMS to send emails, posts, or messages on your behalf",
					HowItWorksB:
						" Compose your email, post, or message, and it will be automatically sent using your default SMS app.",
					HowItWorksC:
						"Your content reaches RelaySMS access points and is published on your behalf.",
					HowItWorksD: "Receive a response via SMS indicating success or failure.",
					GettingStartedButton: "Getting Started"
				},
				footer: {
					RelaySMS: "RelaySMS"
				}
			},
			// french
			fr: {
				translation: {
					landingh1: "continuez à parler avec Relaysms",
					landingh2: "Envoyez des messages en toute transparence avec RelaySMS",
					Home: "Accueil",
					help: "Aide",
					github: "GitHub",
					Blog: "Blog",
					HowItWorks: "Comment ça marche",
					HowItWorksA:
						"Autorisez RelaySMS à envoyer des e-mails, des publications ou des messages en votre nom",
					HowItWorksB:
						"Composez votre e-mail, votre publication ou votre message et il sera envoyé automatiquement via votre application SMS par défaut.",
					HowItWorksC:
						"Votre contenu atteint les points d'accès de RelaySMS et est publié en votre nom.",
					HowItWorksD: "Recevez une réponse par SMS indiquant le succès ou l'échec.",
					GettingStartedButton: "Commencer"
				},
				footer: {
					RelaySMS: "RelaySMS"
				}
			}
		}
	});

export default i18n;
