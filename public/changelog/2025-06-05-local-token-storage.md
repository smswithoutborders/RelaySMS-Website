---
title: Local storage for access tokens
date: 2025-06-05
impact: fixes
product: RelaySMS Android
version: android-2025.06.05
summary: Access tokens can now be stored locally, giving users better control and reducing dependence on server-side token persistence.
sources:
  - Blog|https://blog.smswithoutborders.com/posts/Local-Storage-for-Your-Access-Tokens
  - GitHub|https://github.com/smswithoutborders/RelaySMS-Android
---
### Technical details

- Added local token storage support for supported account flows.
- Reduced backend reliance for persisted token access.
- Improved privacy posture for users who prefer keeping credentials on-device.

### Notes

Users should still follow standard device security practices for lock-screen and app access.
