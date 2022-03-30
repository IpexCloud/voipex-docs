---
id: history-sms
title: SMS history
tags:
  - api
  - intro
  - sms
  - history
sidebar_position: 3
---

All sent and received SMS can be read by GET /SMS. History is maintained for 6 months. Time must be specified in ISO-8601 including timezone specification.

```bash
curl -X GET "https://sms-api.voipex.io/SMS?startTime=2021-09-01T00%3A00%3A00.000%2B02%3A00&endTime=2021-10-01T00%3A00%3A00.000%2B02%3A00" -H "accept: application/json" -H "Authorization: Bearer eyJhbGci...Oi5c"
```
