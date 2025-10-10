##### Description

Le Pont Email convertit les numéros de téléphone en adresses email, permettant aux utilisateurs d'envoyer et recevoir des emails via SMS sans avoir besoin de comptes email personnels.

##### Comment Ça Fonctionne

Le Pont Email reçoit du contenu du Serveur Pont et génère des alias email à partir des numéros de téléphone pour envoyer des emails aux destinataires spécifiés par les utilisateurs. Le système crée des alias au format +123456789@relaysms.me basé sur le numéro de téléphone de l'utilisateur.

- Le Serveur Pont envoie du contenu au Client Email avec le numéro de téléphone de l'utilisateur
- Le Client Email génère un alias email à partir du numéro de téléphone (+123456789@relaysms.me)
- Le Client Email utilise l'alias généré pour envoyer des emails au destinataire spécifié par l'utilisateur
- Le destinataire reçoit l'email de l'alias basé sur le numéro de téléphone
- Le Client Email retourne une confirmation de livraison au Serveur Pont

[Dépôt Email Bridge](https://github.com/smswithoutborders/RelaySMS-Bridge-EmailClient)
