##### Descripción

El Servidor Puente maneja la comunicación del puente enrutando mensajes a clientes puente (actualmente puente de correo) usando alias basados en números de teléfono. Envía a clientes puente y escucha respuestas a esos alias.

##### Cómo Funciona

El Servidor Puente enruta mensajes a clientes puente y gestiona la comunicación bidireccional a través de alias basados en números de teléfono.

- El Servidor Gateway envía una solicitud de publicación al Servidor Puente
- El Servidor Puente determina el puente objetivo para el mensaje
- El Servidor Puente envía el contenido del mensaje al Vault para ser descifrado
- El Servidor Puente envía el mensaje al cliente puente apropiado
- El Servidor Puente escucha respuestas a ese alias
- Cuando se recibe una respuesta, el Servidor Puente la reenvía al Vault para cifrado
- El Vault cifra la respuesta y el Servidor Puente la envía al usuario por SMS

---

[Repositorio Bridge Server](https://github.com/smswithoutborders/RelaySMS-Bridge-Server)
