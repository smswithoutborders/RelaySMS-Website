##### Description

L'Éditeur exécute les demandes de plateforme en récupérant les jetons du Vault et en appelant les APIs des plateformes (Gmail, Twitter, etc.) pour publier du contenu au nom des utilisateurs.

##### Comment Ça Fonctionne

L'Éditeur agit comme le moteur d'exécution qui se connecte à diverses plateformes de réseaux sociaux en utilisant les identifiants utilisateur stockés. Il reçoit les demandes de publication, détermine la plateforme cible et gère les appels réels à l'API pour livrer le contenu.

- Le Serveur Passerelle envoie une demande de publication à l'Éditeur
- L'Éditeur détermine la plateforme cible pour le message
- L'Éditeur envoie le contenu du message au Vault pour être déchiffré
- L'Éditeur demande les jetons de l'utilisateur au Vault
- Si l'utilisateur a envoyé ses jetons, le Vault les déchiffre et les envoie à l'Éditeur
- L'Éditeur utilise les jetons pour appeler l'API de plateforme appropriée au nom de l'utilisateur
- L'Éditeur livre le message à la plateforme déterminée
- L'Éditeur renvoie le statut de livraison à l'utilisateur via SMS

[![Dépôt Publisher](https://img.shields.io/badge/🚀_Publisher-Repository-green?style=for-the-badge&logo=github)](https://github.com/smswithoutborders/RelaySMS-Publisher)
