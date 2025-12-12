##### Descripción

El Puente de Correo convierte números de teléfono en direcciones de correo electrónico, permitiendo a los usuarios enviar y recibir correos a través de SMS sin necesidad de cuentas de correo personales.

##### Cómo Funciona

El Puente de Correo recibe contenido del Servidor Puente y genera alias de correo desde números de teléfono para enviar correos a los destinatarios especificados por los usuarios. El sistema crea alias en el formato +123456789@relaysms.me basado en el número de teléfono del usuario.

- El Servidor Puente envía contenido al Cliente de Correo con el número de teléfono del usuario
- El Cliente de Correo genera un alias de correo desde el número de teléfono (+123456789@relaysms.me)
- El Cliente de Correo usa el alias generado para enviar correos al destinatario especificado por el usuario
- El destinatario recibe el correo del alias basado en el número de teléfono
- El Cliente de Correo devuelve confirmación de entrega al Servidor Puente

[Repositorio Email Bridge](https://github.com/smswithoutborders/RelaySMS-Bridge-EmailClient)
