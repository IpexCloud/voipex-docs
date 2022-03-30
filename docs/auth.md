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
[our auth server](https://restapi.ipex.cz/v1/sso/login) with credentials contained in the body.

#### Example of fetching the access_token

```bash
curl -X POST -H "Content-Type: application/json" -d '{"email": "email@ipex.cz", "password": "password123"}' https://restapi.ipex.cz/v1/sso/login | jq ".access_token"
```

### Response

Example response below contains fresh access token with specified expiration time. Use this token in request headers for calling our API services.

```json
{
  "accessToken": "eyJhbGc...",
  "tokenType": "Bearer",
  "refreshToken": "eyJhbGc...",
  "expiresAt": "2022-03-28T14:21:38.000Z",
  "expiresIn": 3000,
  "id": "77751f31-798f-4ae5-859b-dd36514fdaa5",
  "customer": {
    "id": 1
  },
  "provider": {
    "id": 1
  },
  "operator": {
    "id": 1
  },
  "firstName": "John",
  "lastName": "Doe",
  "username": "ipex@ipex.cz",
  "level": "user",
  "roles": {
    "communicator": [
      "owner"
    ],
    "pbx": []
  },
  "branding": {
    "theme": "green",
    "logo": null
  },
  "access_token": "eyJhbGci....",
  "token_type": "Bearer",
  "refresh_token": "eyJhbGciO...",
  "expires_in": 3000,
  "expires_at": 1648477298000,
  "anvilId": "77751f31-798f-4ae5-859b-dd36514fdaa5",
  "userId": "77751f31-798f-4ae5-859b-dd36514fdaa5",
  "email": "ipex@ipex.cz",
  "customerId": 1,
  "providerId": 1,
  "operatorId": 1,
  "pbxRoles": [],
  "commRoles": [
    "owner"
  ]
}
```
