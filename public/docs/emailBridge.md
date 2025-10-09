##### Description

Email Bridge converts phone numbers into email addresses, enabling users to send and receive emails through SMS without needing personal email accounts.

##### How It Works

The Email Bridge receives content from the Bridge Server and generates email aliases from phone numbers to send emails to users' specified recipients. The system creates aliases in the format +123456789@relaysms.me based on the user's phone number.

- Bridge Server sends content to the Email Client with user's phone number
- Email Client generates an email alias from the phone number (+123456789@relaysms.me)
- Email Client uses the generated alias to send emails to the user's specified recipient
- Recipient receives email from the phone number-based alias
- Email Client returns delivery confirmation to Bridge Server


[![GitHub Repository](https://img.shields.io/badge/📧_Email-Repository-blue?style=for-the-badge&logo=github)](https://github.com/smswithoutborders/RelaySMS-Bridge-EmailClient)
