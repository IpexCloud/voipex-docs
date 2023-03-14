"use strict";(self.webpackChunkvoipex_docs=self.webpackChunkvoipex_docs||[]).push([[2990],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(a),m=l,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const r={id:"dialer",title:"Dialer",tags:["api","intro","call list","campaign","dialer","getting started"],sidebar_position:2},i=void 0,p={unversionedId:"api/callcenter-api/dialer",id:"api/callcenter-api/dialer",title:"Dialer",description:"Module for automatic dialing of numbers within campaigns:",source:"@site/docs/api/callcenter-api/dialer.md",sourceDirName:"api/callcenter-api",slug:"/api/callcenter-api/dialer",permalink:"/voipex-docs/docs/api/callcenter-api/dialer",draft:!1,tags:[{label:"api",permalink:"/voipex-docs/docs/tags/api"},{label:"intro",permalink:"/voipex-docs/docs/tags/intro"},{label:"call list",permalink:"/voipex-docs/docs/tags/call-list"},{label:"campaign",permalink:"/voipex-docs/docs/tags/campaign"},{label:"dialer",permalink:"/voipex-docs/docs/tags/dialer"},{label:"getting started",permalink:"/voipex-docs/docs/tags/getting-started"}],version:"current",sidebarPosition:2,frontMatter:{id:"dialer",title:"Dialer",tags:["api","intro","call list","campaign","dialer","getting started"],sidebar_position:2},sidebar:"apiSidebar",previous:{title:"Getting Started",permalink:"/voipex-docs/docs/api/callcenter-api/getting-started"},next:{title:"Pauses",permalink:"/voipex-docs/docs/api/callcenter-api/pauses"}},o={},s=[{value:"1. Create call list",id:"1-create-call-list",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"2. Get IVR application",id:"2-get-ivr-application",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3},{value:"3. Create campaign",id:"3-create-campaign",level:2},{value:"Request",id:"request-2",level:3},{value:"Response",id:"response-2",level:3},{value:"4. Control campaign state",id:"4-control-campaign-state",level:2},{value:"Request",id:"request-3",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Module for automatic dialing of numbers within campaigns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"telecasting (playing informative messages for marketing, outage announcements, availability),"),(0,l.kt)("li",{parentName:"ul"},"campaigns with the possibility of interactive calls (IVR application with option of routing call to a call center or record caller's response to helpdesk system via email, ticket or instant message)"),(0,l.kt)("li",{parentName:"ul"},"automatic dialing of calls to callcenter agents,"),(0,l.kt)("li",{parentName:"ul"},"check out full ",(0,l.kt)("a",{parentName:"li",href:"https://ipbxapiv2.voipex.io/documentation/?defaultModelsExpandDepth=-1#/Dialer"},"OpenAPI documentation"),".")),(0,l.kt)("p",null,"Follow these steps to start using dialer. Before starting, you have to verify the user and obtain access token. Get access token following steps in ",(0,l.kt)("a",{parentName:"p",href:"./docs/auth"},"our auth guide"),".\nMake sure that you have dialer management rights active."),(0,l.kt)("h2",{id:"1-create-call-list"},"1. Create call list"),(0,l.kt)("p",null,"To start using dialer, it is necessary to first create list of phone numbers to dial. Remember the id of created list for later use."),(0,l.kt)("h3",{id:"request"},"Request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'POST /dialer/call-lists HTTP/1.1\nHost: ipbxapi.voipex.io\nAuthorization: Bearer {TOKEN}\nContent-Type: application/json\n\n{\n    "name": "call-list-name",\n    "numbers": [\n        {\n            "number": "123456789",\n            "attributes": []\n        }\n    ]\n}\n')),(0,l.kt)("h3",{id:"response"},"Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1, // -> select and use in step #3\n    "message": "Call list successfully created",\n    "numbersCount": 1\n}\n')),(0,l.kt)("h2",{id:"2-get-ivr-application"},"2. Get IVR application"),(0,l.kt)("p",null,"The next step is to assign IVR application with special line. When dialed phone number answers the call, the call will be redirected into this application.\nTo get IVR application list make the request below and select desired application's id."),(0,l.kt)("h3",{id:"request-1"},"Request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},"GET /ivr HTTP/1.1\nHost: ipbxapi.voipex.io\nAuthorization: Bearer {TOKEN}\n")),(0,l.kt)("h3",{id:"response-1"},"Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n      "id": "TUxw53xCBf",   // -> select and use in step #3\n      "name": "IVR-app-name",\n      "description": "",\n      "createdAt": "...",\n      "updatedAt": "...",\n      "createdBy": {\n          "id": "...",\n          "email": "..."\n      },\n      "updatedBy": {\n          "id": "...",\n          "email": "..."\n      },\n      "routing": [\n          {\n              "exten": "...",\n              "ddi": "..."\n          }\n      ]\n  }\n]\n')),(0,l.kt)("h2",{id:"3-create-campaign"},"3. Create campaign"),(0,l.kt)("p",null,"Now we should have all necessary entities needed to create our first campaign. Make the request below to create new campaign. Check parameter descriptions below."),(0,l.kt)("h3",{id:"request-2"},"Request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'POST /dialer/campaigns HTTP/1.1\nHost: ipbxapi.voipex.io\nAuthorization: Bearer {TOKEN}\nContent-Type: application/json\n\n{\n    "name": "campaign",\n    "callerId": "123456789",\n    "activePeriod": {\n      "startTime": "09:00",\n      "endTime": "17:00",\n      "weekDays": [1, 2, 3, 4, 5, 6, 7]\n    },\n    "callLists": [1],   // -> id from step #1\n    "rescheduleRules": [\n      {\n          "status": "RS_ERROR",\n          "retryAfter": 15,\n          "maxAttempts": 1\n      }\n    ],\n    "ivr": "TUxw53xCBf",    // -> id from step #2\n    "endpoint": {\n      "type": "queue",\n      "boostFactor": 1.1,\n      "maxWaitingCalls": 2,\n      "queue": "green"\n    }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Name for campaign in stats"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callerId"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of the caller"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"activePeriod.startTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Runs from this time"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"activePeriod.endTime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Runs to this time"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"activePeriod.weekDays"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"1 - Mo, 7 - Su"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callLists"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of call list id"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rescheduleRules"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter empty array in case of no reschedule rules"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rescheduleRules.status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Call status to which applies this rule"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rescheduleRules.retryAfter"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of seconds to retry after"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rescheduleRules.maxAttempts"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum attempts"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ivr"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"IVR application id"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint.type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"phone")," -> default, ",(0,l.kt)("em",{parentName:"td"},"queue")," -> tries to determine number of available channels based on number of available agents on queue"),(0,l.kt)("td",{parentName:"tr",align:null},"phone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint.boostFactor"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiplies number of available agents"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint.maxWaitingCalls"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Upper limit of waiting calls on observed queue"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint.queue"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of observed queue"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"response-2"},"Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,    // -> select and use in step #4\n    "message": "Campaign successfully created"\n}\n\n')),(0,l.kt)("h2",{id:"4-control-campaign-state"},"4. Control campaign state"),(0,l.kt)("p",null,"To control campaign state we need to provide ",(0,l.kt)("strong",{parentName:"p"},"campaign id"),". You can get it from the campaign list or from the response to creating or editing a campaign.\nAllowed commands are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"start"),(0,l.kt)("li",{parentName:"ul"},"pause"),(0,l.kt)("li",{parentName:"ul"},"unpause"),(0,l.kt)("li",{parentName:"ul"},"reload"),(0,l.kt)("li",{parentName:"ul"},"remove")),(0,l.kt)("h3",{id:"request-3"},"Request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'PUT /dialer/campaigns/:id/control HTTP/1.1\nHost: ipbxapi.voipex.io\nAuthorization: Bearer {TOKEN}\nContent-Type: application/json\n\n{\n    "command": "start"\n}\n')))}c.isMDXComponent=!0}}]);