##### Description

Les applications client (Android/iOS) sont des applications mobiles qui permettent aux utilisateurs de publier du contenu sur les plateformes de réseaux sociaux via SMS lorsque la connectivité Internet est limitée ou indisponible. Elles gèrent également le déchiffrement des réponses du pont lorsque les réponses sont envoyées aux alias de messages du pont.

##### Comment Ça Fonctionne

Les applications client chiffrent les messages utilisateur et les envoient via SMS aux clients passerelle. Les jetons OAuth2 peuvent optionnellement être stockés localement sur l'appareil pour la commodité. S'ils ne sont pas stockés localement, l'Éditeur les récupérera du Vault lors du traitement des charges utiles de plateforme. Les clients déchiffrent également les réponses aux messages du pont envoyées via des alias.

- L'utilisateur crée le contenu du message dans l'application mobile
- L'application chiffre le message (avec des jetons locaux s'ils sont stockés)
- L'application envoie un SMS chiffré au numéro de téléphone du client passerelle
- Le client passerelle reçoit et transmet le message au système
- Pour les charges utiles de plateforme : L'Éditeur récupère les jetons du Vault s'ils ne sont pas inclus dans le message
- L'application reçoit une confirmation SMS une fois que le contenu est publié avec succès
- Pour les messages du pont : Lorsque les réponses sont envoyées à l'alias, le Serveur Pont les transmet via SMS
- L'application déchiffre et affiche les réponses du pont à l'utilisateur

[![Dépôt Android](https://img.shields.io/badge/GitHub-Source_Code-black?logo=github)](https://github.com/smswithoutborders/RelaySMS-Android)

[![Dépôt iOS](https://img.shields.io/badge/GitHub-Source_Code-black?logo=github)](https://github.com/smswithoutborders/RelaySMS-iOS)
