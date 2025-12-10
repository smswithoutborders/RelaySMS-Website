##### Description

Gateway clients are Android devices with internet connection that receive SMS messages from users and forward them to the Gateway Server using HTTP, SMTP, and FTP protocols.

##### How It Works

Gateway clients serve as intermediaries between users and the RelaySMS system, enabling SMS messages sent from users without internet access to be securely transmitted to the Gateway Server over the internet. These devices receive SMS messages and forward them using supported protocols.

- User sends encrypted SMS message to gateway client's phone number
- Gateway client receives SMS on the Android device
- Gateway client forwards message to Gateway Server using HTTP, SMTP, or FTP protocols
- Gateway Server processes the message

[DekuSMS Android Repository](https://github.com/dekusms/DekuSMS-Android)

[Gateway Client Setup Guide](https://docs.smswithoutborders.com/docs/Gateway%20Clients%20Guide/GatewayClientsGuide)

---

For a complete list of available gateway clients, see the [Available Clients JSON](https://gatewayserver.smswithoutborders.com/v3/clients)
