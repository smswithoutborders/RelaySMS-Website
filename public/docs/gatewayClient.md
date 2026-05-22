##### Description

Routing Numbers are Android devices with internet connection that receive SMS messages from users and forward them to the Routing Server using HTTP, SMTP, and FTP protocols.

##### How It Works

Routing Numbers serve as intermediaries between users and the RelaySMS system, enabling SMS messages sent from users without internet access to be securely transmitted to the Routing Server over the internet. These devices receive SMS messages and forward them using supported protocols.

- User sends encrypted SMS message to Routing Numbers phone number
- Routing Numbers receives SMS on the Android device
- Routing Numbers forwards message to Routing Server using HTTP, SMTP, or FTP protocols
- Routing Server processes the message

[DekuSMS Android Repository](https://github.com/dekusms/DekuSMS-Android)

[Gateway Client Setup Guide](https://docs.smswithoutborders.com/docs/Gateway%20Clients%20Guide/GatewayClientsGuide)

---

For a complete list of available Routhing Numbers, see the [Available Clients JSON](https://gatewayserver.smswithoutborders.com/v3/clients)
