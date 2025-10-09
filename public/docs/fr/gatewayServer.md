##### Description

Le Serveur Passerelle reçoit les messages SMS des clients passerelle et les route vers le bon composant de traitement (Éditeur ou Serveur Pont) basé sur le type de message. Le serveur écoute sur les protocoles HTTP, SMTP ou FTP.

##### Comment Ça Fonctionne

Le Serveur Passerelle agit comme le hub de routage central qui reçoit les messages des clients passerelle et détermine où les envoyer pour traitement.

- Le Client Passerelle transmet le message SMS au Serveur Passerelle via HTTP, SMTP ou FTP
- Le Serveur Passerelle reçoit et décode le message pour déterminer son type
- Le Serveur Passerelle route le message vers le composant approprié (Éditeur ou Serveur Pont)

[![Dépôt GitHub](https://img.shields.io/badge/🖥️_Server-Repository-darkblue?style=for-the-badge&logo=github)](https://github.com/smswithoutborders/RelaySMS-Gateway-Server)

---
