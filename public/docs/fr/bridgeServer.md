##### Description

Le Serveur Pont gère la communication du pont en routant les messages vers les clients pont (actuellement pont email) en utilisant des alias basés sur les numéros de téléphone. Il envoie aux clients pont et écoute les réponses à ces alias.

##### Comment Ça Fonctionne

Le Serveur Pont route les messages vers les clients pont et gère la communication bidirectionnelle à travers des alias basés sur les numéros de téléphone.

- Le Serveur Passerelle envoie une demande de publication au Serveur Pont
- Le Serveur Pont détermine le pont cible pour le message
- Le Serveur Pont envoie le contenu du message au Vault pour être déchiffré
- Le Serveur Pont envoie le message au client pont approprié
- Le Serveur Pont écoute les réponses à cet alias
- Quand une réponse est reçue, le Serveur Pont la transmet au Vault pour chiffrement
- Le Vault chiffre la réponse et le Serveur Pont l'envoie à l'utilisateur via SMS

---

[![Dépôt Bridge Server](https://img.shields.io/badge/🌉_Bridge-Repository-orange?style=for-the-badge&logo=github)](https://github.com/smswithoutborders/RelaySMS-Bridge-Server)
