##### Descripción

El Servidor Gateway recibe mensajes SMS de los clientes gateway y los enruta al componente de procesamiento correcto (Publicador o Servidor Puente) basado en el tipo de mensaje. El servidor escucha en protocolos HTTP, SMTP o FTP.

##### Cómo Funciona

El Servidor Gateway actúa como el hub de enrutamiento central que recibe mensajes de los clientes gateway y determina dónde enviarlos para su procesamiento.

- El Cliente Gateway reenvía el mensaje SMS al Servidor Gateway vía HTTP, SMTP o FTP
- El Servidor Gateway recibe y decodifica el mensaje para determinar su tipo
- El Servidor Gateway enruta el mensaje al componente apropiado (Publicador o Servidor Puente)

[![Repositorio GitHub](https://img.shields.io/badge/🖥️_Server-Repository-darkblue?style=for-the-badge&logo=github)](https://github.com/smswithoutborders/RelaySMS-Gateway-Server)

---
