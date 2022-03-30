---
id: intro
title: Getting Started
tags:
  - api
  - intro
  - sms
sidebar_position: 1
---

Api for SMS Chat. Used to send SMS and read SMS history. Check out our **[Swagger documentation](https://sms-api.voipex.io/documentation/)** for more info.

## Prerequisites

For SMS sending, you need to order mobile numbers - please contact sales. You can get list of your numbers by calling GET on SMS/allowed-numbers:

```bash
curl -X GET "https://sms-api.voipex.io/SMS/allowed-numbers" -H  "accept: application/json" -H  "Authorization: Bearer eyJhbGci...Oi5c"
```
