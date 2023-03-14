---
id: auth
title: Authorization
tags:
  - Authorization
  - token
  - access
---

## Get access token

This introduction contains a brief description to help you start interacting with our API.

### Prerequisites

- Create user account
- Shell with curl and jq installed or use any REST client

### Authentication

Authentication is based on providing **Bearer {access_token}** into Authorization header with every request. To obtain an access_token, make POST request to
[our auth server](https://auth.voipex.io) with credentials contained in the body.

### Request

#### HTTP

```json
POST /token HTTP/1.1
Host: auth.voipex.io
Content-Type: application/x-www-form-urlencoded

client_id=api&username=your%40email.com&password=*****&grant_type=password
```

#### Using [curl](https://curl.se/)

```bash
curl -L "https://auth.voipex.io/token" -H "Content-Type: application/x-www-form-urlencoded" -d "client_id=api" -d "username=your%40email.com" -d "password=*****" -d "grant_type=password"
```

#### Using [Node.js](https://nodejs.org/en/) and [axios](https://github.com/axios/axios)

```js
const axios = require('axios')
const qs = require('qs')
const data = qs.stringify({
  'client_id': 'api',
  'username': 'your@email.com',
  'password': '*****',
  'grant_type': 'password' 
})
const config = {
  method: 'post',
  url: 'https://auth.voipex.io/token',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data
}

axios(config)
.then(response => {
  console.log(JSON.stringify(response.data))
})
.catch(error => {
  console.log(error)
})
```

#### Using [Python](https://www.python.org) and [http.client](https://docs.python.org/3/library/http.client.html)

```py
import http.client

conn = http.client.HTTPSConnection("auth.voipex.io")
payload = 'client_id=api&username=your%40email.com&password=*****&grant_type=password'
headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}
conn.request("POST", "/token", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

### Response

Example response below contains fresh access token with specified expiration time. Use this token in request headers for calling our API services.

```json
{
    "access_token": "*****",
    "expires_in": 3000,
    "refresh_expires_in": 7200,
    "refresh_token": "*****",
    "token_type": "Bearer",
    "not-before-policy": 0,
    "session_state": "fbf59841-8288-4a71-8192-2bd4bf8a5c50",
    "scope": "profile email"
}

```
