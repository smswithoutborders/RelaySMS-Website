##### Description

Gateway Server receives SMS messages from gateway clients and routes them to the correct processing component (Publisher or Bridge Server) based on message type. The server listens on HTTP, SMTP, or FTP protocols.

##### How It Works

The Gateway Server acts as the central routing hub that receives messages from gateway clients and determines where to send them for processing.

- Gateway Client forwards SMS message to Gateway Server via HTTP, SMTP, or FTP
- Gateway Server receives and decodes the message to determine its type
- Gateway Server routes message to appropriate component (Publisher or Bridge Server)

[![GitHub Repository](https://img.shields.io/badge/🖥️_Server-Repository-darkblue?style=for-the-badge&logo=github)](https://github.com/smswithoutborders/RelaySMS-Gateway-Server)

---
