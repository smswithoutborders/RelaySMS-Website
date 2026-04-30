##### Description

Routing Server receives SMS messages from routing numbers and routes them to the correct processing component (Publisher or Bridge Server) based on message type. The server listens on HTTP, SMTP, or FTP protocols.

##### How It Works

The Routing Server acts as the central routing hub that receives messages from Routing numbers and determines where to send them for processing.

- Routing Numbers forwards SMS message to Routing Server via HTTP, SMTP, or FTP
- Routing Server receives and decodes the message to determine its type
- Routing Server routes message to appropriate component (Publisher or Bridge Server)

[Routing Server Repository](https://github.com/smswithoutborders/RelaySMS-Gateway-Server)

---
