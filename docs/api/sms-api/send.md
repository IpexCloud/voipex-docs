---
id: send-sms
title: Send SMS
tags:
  - api
  - intro
  - sms
  - send
sidebar_position: 2
---


For allowed numbers (e.g. +420777888999) you can call POST on /SMS :

```bash
curl -X POST "https://sms-api.voipex.io/SMS" -H  "accept: application/json" -H  "Authorization: Bearer eyJhbGci...Oi5c" -H  "Content-Type: application/json" -d "{\"from\":\"+420777888999\",\"to\":\"+420607608609\",\"text\":\"Hello world!\"}"
```

### Instant messages

Another option for sending SMS without mobile numbers is sending through central restapi. For authentication [get bearer token](./docs/auth)
With this token use route POST /v1/SMS:

```bash
curl -X 'POST' 'https://restapi.ipex.cz/v1/sms' \
  -H 'accept: application/json' -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer TOKEN'
  -d '{
  "from": "222333444",
  "to": "777888999",
  "message": "Message text",
  "email": "delivery@yourdomain.com"
}'
```

Where 222333444 is some number from your trunk (will be used to billing), 777888999 is target number and email is used for delivery notification. On target phone SMS will have sender number 60030. Alternatively, when you have registered your own sender name, you can pass argument “shortname“ with that name.
