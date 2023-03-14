"use strict";(self.webpackChunkvoipex_docs=self.webpackChunkvoipex_docs||[]).push([[9235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"auth",title:"Authorization",tags:["Authorization","token","access"]},i=void 0,s={unversionedId:"auth",id:"auth",title:"Authorization",description:"Get access token",source:"@site/docs/auth.md",sourceDirName:".",slug:"/auth",permalink:"/voipex-docs/docs/auth",draft:!1,tags:[{label:"Authorization",permalink:"/voipex-docs/docs/tags/authorization"},{label:"token",permalink:"/voipex-docs/docs/tags/token"},{label:"access",permalink:"/voipex-docs/docs/tags/access"}],version:"current",frontMatter:{id:"auth",title:"Authorization",tags:["Authorization","token","access"]}},c={},l=[{value:"Get access token",id:"get-access-token",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Request",id:"request",level:3},{value:"HTTP",id:"http",level:4},{value:"Using curl",id:"using-curl",level:4},{value:"Using Node.js and axios",id:"using-nodejs-and-axios",level:4},{value:"Using Python and http.client",id:"using-python-and-httpclient",level:4},{value:"Response",id:"response",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-access-token"},"Get access token"),(0,a.kt)("p",null,"This introduction contains a brief description to help you start interacting with our API."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create user account"),(0,a.kt)("li",{parentName:"ul"},"Shell with curl and jq installed or use any REST client")),(0,a.kt)("h3",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Authentication is based on providing ",(0,a.kt)("strong",{parentName:"p"},"Bearer {access_token}")," into Authorization header with every request. To obtain an access_token, make POST request to\n",(0,a.kt)("a",{parentName:"p",href:"https://auth.voipex.io"},"our auth server")," with credentials contained in the body."),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("h4",{id:"http"},"HTTP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"POST /token HTTP/1.1\nHost: auth.voipex.io\nContent-Type: application/x-www-form-urlencoded\n\nclient_id=api&username=your%40email.com&password=*****&grant_type=password\n")),(0,a.kt)("h4",{id:"using-curl"},"Using ",(0,a.kt)("a",{parentName:"h4",href:"https://curl.se/"},"curl")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -L "https://auth.voipex.io/token" -H "Content-Type: application/x-www-form-urlencoded" -d "client_id=api" -d "username=your%40email.com" -d "password=*****" -d "grant_type=password"\n')),(0,a.kt)("h4",{id:"using-nodejs-and-axios"},"Using ",(0,a.kt)("a",{parentName:"h4",href:"https://nodejs.org/en/"},"Node.js")," and ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/axios/axios"},"axios")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const axios = require('axios')\nconst qs = require('qs')\nconst data = qs.stringify({\n  'client_id': 'api',\n  'username': 'your@email.com',\n  'password': '*****',\n  'grant_type': 'password' \n})\nconst config = {\n  method: 'post',\n  url: 'https://auth.voipex.io/token',\n  headers: { \n    'Content-Type': 'application/x-www-form-urlencoded'\n  },\n  data\n}\n\naxios(config)\n.then(response => {\n  console.log(JSON.stringify(response.data))\n})\n.catch(error => {\n  console.log(error)\n})\n")),(0,a.kt)("h4",{id:"using-python-and-httpclient"},"Using ",(0,a.kt)("a",{parentName:"h4",href:"https://www.python.org"},"Python")," and ",(0,a.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/http.client.html"},"http.client")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'import http.client\n\nconn = http.client.HTTPSConnection("auth.voipex.io")\npayload = \'client_id=api&username=your%40email.com&password=*****&grant_type=password\'\nheaders = {\n  \'Content-Type\': \'application/x-www-form-urlencoded\'\n}\nconn.request("POST", "/token", payload, headers)\nres = conn.getresponse()\ndata = res.read()\nprint(data.decode("utf-8"))\n')),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("p",null,"Example response below contains fresh access token with specified expiration time. Use this token in request headers for calling our API services."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "access_token": "*****",\n    "expires_in": 3000,\n    "refresh_expires_in": 7200,\n    "refresh_token": "*****",\n    "token_type": "Bearer",\n    "not-before-policy": 0,\n    "session_state": "fbf59841-8288-4a71-8192-2bd4bf8a5c50",\n    "scope": "profile email"\n}\n\n')))}d.isMDXComponent=!0}}]);