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
					Android: "Application Android",
					Desktop: "Application de bureau",
					HowItWorks: "How It Works",
					HowItWorksA:
						"Grant permission for RelaySMS to send emails, posts, or messages on your behalf",
					HowItWorksB:
						" Compose your email, post, or message, and it will be automatically sent using your default SMS app.",
					HowItWorksC:
						"Your content reaches RelaySMS access points and is published on your behalf.",
					HowItWorksD: "Receive a response via SMS indicating success or failure.",
					GettingStartedButton: "Getting Started",
					RelaySMSMap: "RelaySMS is actively used in over 60 countries.",
					WhatsNew: "Whats New on RelaySMS?",
					Resilience: "Resilience Of Gateway Clients In Smswithoutborders",
					ResilienceD:
						"Gateway Client in SMSWithoutBorders is key in routing messages from SMS to online platforms. The Gateway Client listens for messages and routes them to the Gateway server, which publishes ...",

					ReliabilityD:
						"Gateway Client in SMSWithoutBorders is key in routing messages from SMS to online platforms. The Gateway Client listens for messages and routes them to the Gateway server, which publishes ...",
					Reliability: "Reliability Of Gateway Clients In Smswithoutborders",

					FAQ1: "Is RelaySMS available on my device?",
					faq1: "RelaySMS is currently available for Android. We are working on expanding compatibility to other platforms.",
					FAQ2: "Why do I need to create an account?",
					faq2: " ",
					FAQ3: "Why do I need to create an account?",
					faq3: " ",
					FAQ4: "Why do I need to create an account?",
					faq4: " ",
					FAQ5: "Why do I need to create an account?",
					faq5: " ",
					ReadMore: "Read More"
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
					GettingStartedButton: "Commencer",
					RelaySMSMap: "RelaySMS est utilisé dans plus de 60 pays",
					WhatsNew: "Quelles sont les nouveautés sur RelaySMS?",
					Resilience: "Résilience des clients de Gateway dans Smswithoutborders",
					ResilienceD:
						"Le client Gateway dans SMSWithoutBorders joue un rôle clé dans l'acheminement des messages des SMS vers les plates-formes en ligne. Le Gateway Client écoute les messages et les achemine vers le serveur Gateway, qui les publie..",
					Reliability: "Fiabilité des clients de passerelle dans SmsWithoutBorders",

					ReliabilityD:
						"Le client Gateway dans SMSWithoutBordersSMSWithoutBorders joue un rôle clé dans l'acheminement des messages des SMS vers les plates-formes en ligne. Le Gateway Client écoute les messages et les achemine vers le serveur Gateway, qui les publie...",
					RelaySMS: "RelaySMS",
					ReadMore: "Plus d'informations"
				}
			}
		}
	});

export default i18n;
