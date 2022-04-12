---
id: call-list
title: Get call list
tags:
  - api
  - intro
  - calls
  - list
sidebar_position: 2
---

- get access token following steps in [our auth guide](./docs/auth),
- check out all possible filters in [Swagger documentation](https://ipbxapi.voipex.io/documentation#/calls/getCalls),
- send request to our API endpoint with specified filters,
- if no filters are specified, server will use the default values

```bash
curl -X 'GET' \
  'https://ipbxapi.voipex.io/calls' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer {TOKEN}'
```
