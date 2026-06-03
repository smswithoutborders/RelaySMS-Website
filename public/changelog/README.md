# Changelog Authoring Guide

This folder powers the website changelog at `/changelog`.

## How to add a new update

1. Create a new markdown file in this folder.
2. Add frontmatter at the top (copy the template below).
3. Add short technical notes in markdown under the frontmatter.
4. Add the file name to `public/changelog/index.json` at the top of the `entries` array.

## Frontmatter template

```md
---
title: Short update title
date: 2026-06-02
impact: major
product: RelaySMS Android
version: android-2026.06.02
summary: One sentence in plain language for non-technical readers.
sources:
  - Blog|https://blog.smswithoutborders.com/posts/example
  - GitHub|https://github.com/smswithoutborders/RelaySMS-Android
---
### Technical details

- Bullet one
- Bullet two
```

## Allowed impact values

- `major`: user-facing features or notable behavior changes
- `quality`: usability, performance, and polish improvements
- `fixes`: bug fixes and reliability updates
