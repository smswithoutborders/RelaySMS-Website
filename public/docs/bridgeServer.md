##### Description

Bridge Server handles bridge communication by routing messages to bridge clients (currently email bridge) using phone number-based aliases. It sends to bridge clients and listens for replies to those aliases.

##### How It Works

The Bridge Server routes messages to bridge clients and manages bidirectional communication through phone number-based aliases.

- Gateway Server sends publishing request to Bridge Server
- Bridge Server determines the target bridge for the message
- Bridge Server sends message content to Vault to be decrypted
- Bridge Server sends message to the appropriate bridge client
- Bridge Server listens for replies to that alias
- When reply is received, Bridge Server forwards it to Vault for encryption
- Vault encrypts the response and the Bridge Server sends it to user via SMS

---

[![Bridge Server Repo](https://img.shields.io/badge/🌉_Bridge-Repository-orange?style=for-the-badge&logo=github)](https://github.com/smswithoutborders/RelaySMS-Bridge-Server)
