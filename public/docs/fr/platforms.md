##### Description

Les adaptateurs de plateforme sont des plugins spécialisés qui gèrent l'authentification et la livraison de messages pour des services en ligne spécifiques (Gmail, Twitter, Telegram, etc.).

##### Comment Ça Fonctionne

Chaque adaptateur de plateforme est conçu pour interfacer avec une plateforme de réseaux sociaux ou de communication spécifique. Ils gèrent les méthodes d'authentification uniques et les exigences d'API pour chaque service.

- L'Éditeur demande d'envoyer un message via un adaptateur de plateforme spécifique
- L'adaptateur formate le message selon les exigences de l'API de la plateforme
- L'adaptateur appelle l'API de la plateforme pour livrer le message
- L'adaptateur de plateforme retourne le statut de confirmation à l'Éditeur

---

##### Plateformes Prises en Charge

[![Adaptateur Gmail](https://img.shields.io/badge/🔌_Platforms-Repository-purple?style=for-the-badge&logo=github)](https://github.com/smswithoutborders/gmail-oauth2-adapter)

[![Adaptateur Twitter](https://img.shields.io/badge/🔌_Platforms-Repository-purple?style=for-the-badge&logo=github)](https://github.com/smswithoutborders/twitter-oauth2-adapter)

[![Adaptateur Mastodon](https://img.shields.io/badge/🔌_Platforms-Repository-purple?style=for-the-badge&logo=github)](https://github.com/smswithoutborders/mastodon-oauth2-adapter)

[![Adaptateur Bluesky](https://img.shields.io/badge/🔌_Platforms-Repository-purple?style=for-the-badge&logo=github)](https://github.com/smswithoutborders/bluesky-oauth2-adapter)

[![Adaptateur Telegram](https://img.shields.io/badge/🔌_Platforms-Repository-purple?style=for-the-badge&logo=github)](https://github.com/smswithoutborders/telegram-pnba-adapter)

Pour une liste complète des plateformes prises en charge, consultez le <a href="https://publisher.smswithoutborders.com/v1/platforms" target="_blank">JSON des plateformes prises en charge</a>.
