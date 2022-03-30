---
id: receive-sms
title: Receive SMS
tags:
  - api
  - intro
  - sms
  - receive
sidebar_position: 3
---

On received SMS or delivery notification, your webhook is called, or email is sent. It depends on your SMS Chat settings.
Webhook parameters are:

```json
id: string
from: string
to: string
text: string
direction: IN | OUT
state: FAILED | DELIVERED
createdAt: string
```
