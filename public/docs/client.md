##### Description

Client apps (Android/iOS) are mobile applications that allow users to publish content to social media platforms through SMS when internet connectivity is limited or unavailable. They also handle decryption of bridge replies when responses are sent to bridge message aliases.

##### How It Works

Client apps encrypt user messages and send them via SMS to gateway clients. OAuth2 tokens can optionally be stored locally on the device for convenience. If not stored locally, the Publisher will retrieve them from the Vault when processing platform payloads. Clients also decrypt replies to bridge messages sent via aliases.

- User creates message content in the mobile app
- App encrypts message (with local tokens if stored)
- App sends encrypted SMS to gateway client phone number
- Gateway client receives and forwards message to system
- For platform payloads: Publisher retrieves tokens from Vault if not included in message
- App receives SMS confirmation once content is published successfully
- For bridge messages: When replies are sent to the alias, Bridge Server forwards them via SMS
- App decrypts and displays bridge replies to the user

[![Andriod Repository](https://img.shields.io/badge/GitHub-Source_Code-black?logo=github)](https://github.com/smswithoutborders/RelaySMS-Android)

[![OS Repository](https://img.shields.io/badge/GitHub-Source_Code-black?logo=github)](https://github.com/smswithoutborders/RelaySMS-iOS)
