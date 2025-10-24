##### Descripción

Los adaptadores de plataforma son plugins especializados que manejan la autenticación y entrega de mensajes para servicios en línea específicos (Gmail, Twitter, Telegram, etc.).

##### Cómo Funciona

Cada adaptador de plataforma está diseñado para interactuar con una plataforma específica de redes sociales o comunicación. Manejan los métodos de autenticación únicos y los requisitos de API para cada servicio.

- El Publicador solicita enviar mensaje a través de un adaptador de plataforma específico
- El adaptador formatea el mensaje según los requisitos de la API de la plataforma
- El adaptador llama a la API de la plataforma para entregar el mensaje
- El adaptador de plataforma devuelve el estado de confirmación al Publicador

---

##### Plataformas Compatibles

[Adaptador Gmail](https://github.com/smswithoutborders/gmail-oauth2-adapter)

[Adaptador Twitter](https://github.com/smswithoutborders/twitter-oauth2-adapter)

[Adaptador Mastodon](https://github.com/smswithoutborders/mastodon-oauth2-adapter)

[Adaptador Bluesky](https://github.com/smswithoutborders/bluesky-oauth2-adapter)

[Adaptador Telegram](https://github.com/smswithoutborders/telegram-pnba-adapter)

Para una lista completa de plataformas compatibles, consulte el [JSON de plataformas compatibles](https://publisher.smswithoutborders.com/v1/platforms)
