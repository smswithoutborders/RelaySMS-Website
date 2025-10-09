##### Descripción

El Vault es un servicio seguro que maneja la gestión de tokens y el cifrado/descifrado de mensajes para el sistema RelaySMS. Actúa como la autoridad de seguridad central, gestionando tokens y proporcionando servicios criptográficos tanto para el publicador como para los componentes del puente.

##### Cómo Funciona

El Vault gestiona el almacenamiento de tokens y el cifrado/descifrado de mensajes para el sistema RelaySMS.

- Los componentes solicitan tokens o servicios de cifrado del Vault
- El Vault valida las firmas de solicitud y los permisos del usuario
- El Vault almacena y recupera de forma segura los tokens de autenticación
- El Vault cifra y descifra mensajes para las operaciones del Publicador y el Puente
- El Vault mantiene claves criptográficas y asegura la seguridad de los mensajes en todo el sistema

---

[![GitHub Repository](https://img.shields.io/badge/🚀_Publisher-Repository-green?style=for-the-badge&logo=github)](https://github.com/smswithoutborders/RelaySMS-Vault)
