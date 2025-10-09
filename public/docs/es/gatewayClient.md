##### Descripción

Los clientes gateway son dispositivos Android con conexión a internet que reciben mensajes SMS de los usuarios y los reenvían al Servidor Gateway usando protocolos HTTP, SMTP y FTP.

##### Cómo Funciona

Los clientes gateway sirven como intermediarios entre los usuarios y el sistema RelaySMS, permitiendo que los mensajes SMS enviados desde usuarios sin acceso a internet sean transmitidos de forma segura al Servidor Gateway a través de internet. Estos dispositivos reciben mensajes SMS y los reenvían usando protocolos compatibles.

- El usuario envía un mensaje SMS cifrado al número de teléfono del cliente gateway
- El cliente gateway recibe el SMS en el dispositivo Android
- El cliente gateway reenvía el mensaje al Servidor Gateway usando protocolos HTTP, SMTP o FTP
- El Servidor Gateway procesa el mensaje

[![Repositorio GitHub](https://img.shields.io/badge/GitHub-Source_Code-black?logo=github)](https://github.com/dekusms/DekuSMS-Android)

[![Configurando un Cliente Gateway](https://img.shields.io/badge/📚_Docs-Setup_Guide-blue?style=for-the-badge)](https://docs.smswithoutborders.com/docs/Gateway%20Clients%20Guide/GatewayClientsGuide)

---

Para una lista completa de clientes gateway disponibles, consulte el [![clientes disponibles JSON](https://img.shields.io/badge/_Clientes_Disponibles-JSON-blue?style=for-the-badge)](https://gatewayserver.smswithoutborders.com/v3/clients)
