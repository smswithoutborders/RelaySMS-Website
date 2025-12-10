##### Descripción

Las aplicaciones cliente (Android/iOS) son aplicaciones móviles que permiten a los usuarios publicar contenido en plataformas de redes sociales a través de SMS cuando la conectividad a internet es limitada o no está disponible. También manejan el descifrado de respuestas del puente cuando las respuestas se envían a los alias de mensajes del puente.

##### Cómo Funciona

Las aplicaciones cliente cifran los mensajes del usuario y los envían por SMS a los clientes gateway. Los tokens OAuth2 pueden almacenarse opcionalmente localmente en el dispositivo por conveniencia. Si no se almacenan localmente, el Publicador los recuperará del Vault al procesar las cargas útiles de la plataforma. Los clientes también descifran las respuestas a los mensajes del puente enviados a través de alias.

- El usuario crea contenido de mensaje en la aplicación móvil
- La aplicación cifra el mensaje (con tokens locales si están almacenados)
- La aplicación envía SMS cifrado al número de teléfono del cliente gateway
- El cliente gateway recibe y reenvía el mensaje al sistema
- Para cargas útiles de plataforma: El Publicador recupera tokens del Vault si no están incluidos en el mensaje
- La aplicación recibe confirmación por SMS una vez que el contenido se publica exitosamente
- Para mensajes del puente: Cuando las respuestas se envían al alias, el Servidor Puente las reenvía por SMS
- La aplicación descifra y muestra las respuestas del puente al usuario

[Repositorio Android](https://github.com/smswithoutborders/RelaySMS-Android)

[Repositorio iOS](https://github.com/smswithoutborders/RelaySMS-iOS)
