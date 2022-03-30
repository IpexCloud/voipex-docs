"use strict";(self.webpackChunkvoipex_docs=self.webpackChunkvoipex_docs||[]).push([[3097],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1738:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={id:"send-sms",title:"Send SMS",tags:["api","intro","sms","send"],sidebar_position:2},p=void 0,c={unversionedId:"api/sms-api/send-sms",id:"api/sms-api/send-sms",title:"Send SMS",description:"For allowed numbers (e.g. +420777888999) you can call POST on /SMS :",source:"@site/docs/api/sms-api/send.md",sourceDirName:"api/sms-api",slug:"/api/sms-api/send-sms",permalink:"/docs/api/sms-api/send-sms",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/sms-api/send.md",tags:[{label:"api",permalink:"/docs/tags/api"},{label:"intro",permalink:"/docs/tags/intro"},{label:"sms",permalink:"/docs/tags/sms"},{label:"send",permalink:"/docs/tags/send"}],version:"current",sidebarPosition:2,frontMatter:{id:"send-sms",title:"Send SMS",tags:["api","intro","sms","send"],sidebar_position:2},sidebar:"apiSidebar",previous:{title:"Getting Started",permalink:"/docs/api/sms-api/intro"},next:{title:"Receive SMS",permalink:"/docs/api/sms-api/receive-sms"}},l={},u=[{value:"Instant messages",id:"instant-messages",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For allowed numbers (e.g. +420777888999) you can call POST on /SMS :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://sms-api.voipex.io/SMS" -H  "accept: application/json" -H  "Authorization: Bearer eyJhbGci...Oi5c" -H  "Content-Type: application/json" -d "{\\"from\\":\\"+420777888999\\",\\"to\\":\\"+420607608609\\",\\"text\\":\\"Hello world!\\"}"\n')),(0,o.kt)("h3",{id:"instant-messages"},"Instant messages"),(0,o.kt)("p",null,"Another option for sending SMS without mobile numbers is sending through central restapi. For authentication ",(0,o.kt)("a",{parentName:"p",href:"./docs/auth"},"get bearer token"),"\nWith this token use route POST /v1/SMS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'POST\' \'https://restapi.ipex.cz/v1/sms\' \\\n  -H \'accept: application/json\' -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer TOKEN\'\n  -d \'{\n  "from": "222333444",\n  "to": "777888999",\n  "message": "Message text",\n  "email": "delivery@yourdomain.com"\n}\'\n')),(0,o.kt)("p",null,"Where 222333444 is some number from your trunk (will be used to billing), 777888999 is target number and email is used for delivery notification. On target phone SMS will have sender number 60030. Alternatively, when you have registered your own sender name, you can pass argument \u201cshortname\u201c with that name."))}d.isMDXComponent=!0}}]);