---
title: Send images even without internet
date: 2025-10-31
impact: major
product: RelaySMS Android
version: android-2025.10.31
summary: RelaySMS now supports sending images over SMS with encryption, so people can share more than text during internet outages.
sources:
  - Blog|https://blog.smswithoutborders.com/posts/sending-images-with-relay
  - GitHub|https://github.com/smswithoutborders/RelaySMS-Android
---
### Technical details

- Added support for image payload handling in offline message flow.
- Preserved encrypted transport expectations for SMS relay behavior.
- Updated app-side handling to improve reliability for media transfer.

### Notes

Image messaging depends on the same routing setup and gateway behavior used for text relay.
