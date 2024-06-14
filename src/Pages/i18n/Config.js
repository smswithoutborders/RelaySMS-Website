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
					FAQ2: "How do I send an offline message? ",
					faq2: "Choose the platform you want to send the message to and compose your message within the app. Our Help Center also offers resources and tutorials on how to send messages through the app",
					FAQ3: "Are there any limitations on offline messages? ",
					faq3: "There are no limits on the size and number of messages you can send with the app.",
					FAQ4: "I'm having trouble logging in to my account. What should I do?  ",
					faq4: "Our Help Center offers resources and tutorials on logging in to your account and If you can't find a solution, you can reach out to our support team at <1>smswithoutborders</1>",
					FAQ5: "I'm experiencing technical difficulties with the app. How can I get help? ",
					faq5: "Our Help Center offers resources and troubleshooting guides. You can also reach out to our support team on social media at [link to X handle] or by visiting our website.",
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
					ReadMore: "Plus d'informations",
					FAQ1: "RelaySMS est-il disponible sur mon appareil ?",
					faq1: "RelaySMS est actuellement disponible pour Android. Nous travaillons à étendre la compatibilité à d'autres plateformes",
					FAQ2: "Comment envoyer un message hors-ligne?",
					faq2: "Choisissez la plateforme à laquelle vous souhaitez envoyer le message et composez votre message dans l'application. Notre centre d'aide propose également des ressources et des tutoriels sur la manière d'envoyer des messages via l'application. ",
					FAQ3: "Les messages hors ligne sont-ils limités ?",
					faq3: "Il n'y a pas de limites à la taille et au nombre de messages que vous pouvez envoyer avec l'application.",
					FAQ4: "Je n'arrive pas à me connecter à mon compte. Que dois-je faire ?",

					faq4: "Si vous ne trouvez pas de solution, vous pouvez contacter notre équipe d'assistance à l'adresse <1>smswithoutborders</1>.",
					FAQ5: "Je rencontre des difficultés techniques avec l'application. Comment puis-je obtenir de l'aide ?",
					faq5: "Our Help Center offers resources and troubleshooting guides. You can also reach out to our support team on social media at [link to X handle] or by visiting our website."
				}
			}
		}
	});

export default i18n;
