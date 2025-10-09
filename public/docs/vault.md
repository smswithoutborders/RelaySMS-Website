##### Description

The Vault is a secure service that handles token management and message encryption/decryption for the RelaySMS system. It acts as the central security authority, managing tokens and providing cryptographic services for both publisher and bridge components.

##### How It Works

The Vault manages token storage and message encryption/decryption for the RelaySMS system.

- Components request tokens or encryption services from Vault
- Vault validates request signatures and user permissions
- Vault securely stores and retrieves authentication tokens
- Vault encrypts and decrypts messages for Publisher and Bridge operations
- Vault maintains cryptographic keys and ensures message security across the system

---

[![GitHub GitHub](https://img.shields.io/badge/🚀_Publisher-Repository-green?style=for-the-badge&logo=github)](https://github.com/smswithoutborders/RelaySMS-Vault)
