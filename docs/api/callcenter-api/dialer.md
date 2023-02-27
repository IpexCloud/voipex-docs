---
id: dialer
title: Dialer
tags:
  - api
  - intro
  - call list
  - campaign
  - dialer
  - getting started
sidebar_position: 2
---

Module for automatic dialing of numbers within campaigns:

- telecasting (playing informative messages for marketing, outage announcements, availability),
- campaigns with the possibility of interactive calls (IVR application with option of routing call to a call center or record caller's response to helpdesk system via email, ticket or instant message)
- automatic dialing of calls to callcenter agents,
- check out full [OpenAPI documentation](https://ipbxapiv2.voipex.io/documentation/?defaultModelsExpandDepth=-1#/Dialer).

Follow these steps to start using dialer. Before starting, you have to verify the user and obtain access token. Get access token following steps in [our auth guide](./docs/auth).
Make sure that you have dialer management rights active.

## 1. Create call list

To start using dialer, it is necessary to first create list of phone numbers to dial. Remember the id of created list for later use.

### Request

```json
POST /dialer/call-lists HTTP/1.1
Host: ipbxapi.voipex.io
Authorization: Bearer {TOKEN}
Content-Type: application/json

{
    "name": "call-list-name",
    "numbers": [
        {
            "number": "123456789",
            "attributes": []
        }
    ]
}
```

### Response

```json
{
    "id": 1, // -> select and use in step #3
    "message": "Call list successfully created",
    "numbersCount": 1
}
```

## 2. Get IVR application

The next step is to assign IVR application with special line. When dialed phone number answers the call, the call will be redirected into this application.
To get IVR application list make the request below and select desired application's id.

### Request

```http
GET /ivr HTTP/1.1
Host: ipbxapi.voipex.io
Authorization: Bearer {TOKEN}
```

### Response

```json
[
  {
      "id": "TUxw53xCBf",   // -> select and use in step #3
      "name": "IVR-app-name",
      "description": "",
      "createdAt": "...",
      "updatedAt": "...",
      "createdBy": {
          "id": "...",
          "email": "..."
      },
      "updatedBy": {
          "id": "...",
          "email": "..."
      },
      "routing": [
          {
              "exten": "...",
              "ddi": "..."
          }
      ]
  }
]
```

## 3. Create campaign

Now we should have all necessary entities needed to create our first campaign. Make the request below to create new campaign. Check parameter descriptions below.

### Request

```json
POST /dialer/campaigns HTTP/1.1
Host: ipbxapi.voipex.io
Authorization: Bearer {TOKEN}
Content-Type: application/json

{
    "name": "campaign",
    "callerId": "123456789",
    "activePeriod": {
      "startTime": "09:00",
      "endTime": "17:00",
      "weekDays": [1, 2, 3, 4, 5, 6, 7]
    },
    "callLists": [1],   // -> id from step #1
    "rescheduleRules": [
      {
          "status": "RS_ERROR",
          "retryAfter": 15,
          "maxAttempts": 1
      }
    ],
    "ivr": "TUxw53xCBf",    // -> id from step #2
    "endpoint": {
      "type": "queue",
      "boostFactor": 1.1,
      "maxWaitingCalls": 2,
      "queue": "green"
    }
}
```

| Name     | Required | Description          | Default |
| -------- | ---------| --------             | ------- |
| name     |    ✅    | Name for campaign in stats     |
| callerId |    ✅    | Number of the caller |
| activePeriod.startTime |    ✅    | Runs from this time |
| activePeriod.endTime |    ✅      | Runs to this time |
| activePeriod.weekDays |    ✅      | 1 - Mo, 7 - Su |
| callLists |    ✅      | Array of call list id |
| rescheduleRules |    ❌      | Enter empty array in case of no reschedule rules |
| rescheduleRules.status |    ✅      | Call status to which applies this rule |
| rescheduleRules.retryAfter |    ✅      | Number of seconds to retry after |
| rescheduleRules.maxAttempts |    ✅      | Maximum attempts |
| ivr |    ✅      | IVR application id |
| endpoint.type |    ❌      | *phone* -> default, *queue* -> tries to determine number of available channels based on number of available agents on queue | phone |
| endpoint.boostFactor |    ❌      | Multiplies number of available agents | 1 |
| endpoint.maxWaitingCalls |    ❌      | Upper limit of waiting calls on observed queue | 2 |
| endpoint.queue |    ❌      | Name of observed queue |

### Response

```json
{
    "id": 1,    // -> select and use in step #4
    "message": "Campaign successfully created"
}

```

## 4. Control campaign state

To control campaign state we need to provide **campaign id**. You can get it from the campaign list or from the response to creating or editing a campaign.
Allowed commands are:

- start
- pause
- unpause
- reload
- remove

### Request

```json
PUT /dialer/campaigns/:id/control HTTP/1.1
Host: ipbxapi.voipex.io
Authorization: Bearer {TOKEN}
Content-Type: application/json

{
    "command": "start"
}
```
