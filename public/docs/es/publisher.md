##### Descripción

El Publicador ejecuta solicitudes de plataforma recuperando tokens del Vault y llamando a las APIs de las plataformas (Gmail, Twitter, etc.) para publicar contenido en nombre de los usuarios.

##### Cómo Funciona

El Publicador actúa como el motor de ejecución que se conecta a varias plataformas de redes sociales usando credenciales de usuario almacenadas. Recibe solicitudes de publicación, determina la plataforma objetivo y maneja las llamadas reales a la API para entregar contenido.

- El Servidor Gateway envía una solicitud de publicación al Publicador
- El Publicador determina la plataforma objetivo para el mensaje
- El Publicador envía el contenido del mensaje al Vault para ser descifrado
- El Publicador solicita los tokens del usuario del Vault
- Si el usuario ha enviado sus tokens, el Vault los descifra y los envía al Publicador
- El Publicador usa los tokens para llamar a la API de la plataforma apropiada en nombre del usuario
- El Publicador entrega el mensaje a la plataforma determinada
- El Publicador envía de vuelta el estado de entrega al usuario por SMS

[![Repositorio Publisher](https://img.shields.io/badge/🚀_Publisher-Repository-green?style=for-the-badge&logo=github)](https://github.com/smswithoutborders/RelaySMS-Publisher)
