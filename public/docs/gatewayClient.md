##### Description

Gateway clients are Android devices with internet connection that receive SMS messages from users and forward them to the Gateway Server using HTTP, SMTP, and FTP protocols.

##### How It Works

Gateway clients serve as intermediaries between users and the RelaySMS system, enabling SMS messages sent from users without internet access to be securely transmitted to the Gateway Server over the internet. These devices receive SMS messages and forward them using supported protocols.

- User sends encrypted SMS message to gateway client's phone number
- Gateway client receives SMS on the Android device
- Gateway client forwards message to Gateway Server using HTTP, SMTP, or FTP protocols
- Gateway Server processes the message

[![GitHub Repository](https://img.shields.io/badge/GitHub-Source_Code-black?logo=github)](https://github.com/dekusms/DekuSMS-Android)

[![Setting Up a Gateway Client](https://img.shields.io/badge/📚_Docs-Setup_Guide-blue?style=for-the-badge)](https://docs.smswithoutborders.com/docs/Gateway%20Clients%20Guide/GatewayClientsGuide)

---

For a complete list of available gateway clients, see the [![available clients JSON](https://img.shields.io/badge/_Available_Clients-JSON-blue?style=for-the-badge)](https://gatewayserver.smswithoutborders.com/v3/clients)
