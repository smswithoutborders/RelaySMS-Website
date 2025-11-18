##### Description

Les clients passerelle sont des appareils Android avec connexion Internet qui reçoivent des messages SMS des utilisateurs et les transmettent au Serveur Passerelle en utilisant les protocoles HTTP, SMTP et FTP.

##### Comment Ça Fonctionne

Les clients passerelle servent d'intermédiaires entre les utilisateurs et le système RelaySMS, permettant aux messages SMS envoyés par des utilisateurs sans accès Internet d'être transmis en sécurité au Serveur Passerelle via Internet. Ces appareils reçoivent les messages SMS et les transmettent en utilisant les protocoles pris en charge.

- L'utilisateur envoie un message SMS chiffré au numéro de téléphone du client passerelle
- Le client passerelle reçoit le SMS sur l'appareil Android
- Le client passerelle transmet le message au Serveur Passerelle en utilisant les protocoles HTTP, SMTP ou FTP
- Le Serveur Passerelle traite le message

[Dépôt DekuSMS Android](https://github.com/dekusms/DekuSMS-Android)

[Guide de Configuration Client Passerelle](https://docs.smswithoutborders.com/docs/Gateway%20Clients%20Guide/GatewayClientsGuide)

---

Pour une liste complète des clients passerelle disponibles, consultez le [Clients Disponibles JSON](https://gatewayserver.smswithoutborders.com/v3/clients)
