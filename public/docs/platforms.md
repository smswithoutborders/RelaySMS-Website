##### Description

Platform adapters are specialized plugins that handle authentication and message delivery for specific online services (Gmail, Twitter, Telegram, etc.).

##### How It Works

Each platform adapter is designed to interface with a specific social media or communication platform. They handle the unique authentication methods and API requirements for each service.

- Publisher requests to send message via specific platform adapter
- Adapter formats the message according to platform API requirements
- Adapter calls the platform's API to deliver the message
- Platform adapter returns confirmation status to Publisher

---

##### Supported Platforms

[Gmail Adapter](https://github.com/smswithoutborders/gmail-oauth2-adapter)

[Twitter Adapter](https://github.com/smswithoutborders/twitter-oauth2-adapter)

[Mastodon Adapter](https://github.com/smswithoutborders/mastodon-oauth2-adapter)

[Bluesky Adapter](https://github.com/smswithoutborders/bluesky-oauth2-adapter)

[Telegram Adapter](https://github.com/smswithoutborders/telegram-pnba-adapter)

For a complete list of supported platforms, see the [supported platforms JSON](https://publisher.smswithoutborders.com/v1/platforms)
