##### Description

Publisher executes platform requests by retrieving tokens from the Vault and calling platform APIs (Gmail, Twitter, etc.) to publish content on behalf of users.

##### How It Works

The Publisher acts as the execution engine that connects to various social media platforms using stored user credentials. It receives publishing requests, determines the target platform, and handles the actual API calls to deliver content.

- Gateway Server sends publishing request to Publisher
- Publisher determines the target platform for the message
- Publisher sends message content to Vault to be decrypted
- Publisher requests user's tokens from Vault
- If user has sent their tokens, Vault decrypts and sends them to Publisher
- Publisher uses tokens to call the appropriate platform API on user's behalf
- Publisher delivers the message to the determined platform
- Publisher sends back the delivery status to the user via SMS

[Publisher Repository](https://github.com/smswithoutborders/RelaySMS-Publisher)
