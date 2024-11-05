"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[33593],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(a),g=r,k=m["".concat(o,".").concat(g)]||m[g]||f[g]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},31741:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>m});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={sidebar_position:1,title:"Send Message",hide_title:!0},o=void 0,s={unversionedId:"apis/messageManagement/sendMessage",id:"apis/messageManagement/sendMessage",title:"Send Message",description:"Send Message",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/apis/messageManagement/sendMessage.mdx",sourceDirName:"apis/messageManagement",slug:"/apis/messageManagement/sendMessage",permalink:"/restapi/apis/messageManagement/sendMessage",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/messageManagement/sendMessage.mdx",tags:[],version:"current",lastUpdatedAt:1730812373,formattedLastUpdatedAt:"Nov 5, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Send Message",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Set Fields for Multiple Users on the Same ConversationID",permalink:"/restapi/apis/conversationManagement/setConversations"},next:{title:"Batch Send Messages",permalink:"/restapi/apis/messageManagement/batchSendMessage"}},d={},m=[{value:"Send Message",id:"send-message",level:2},{value:"Brief Description",id:"brief-description",level:3},{value:"Request Method",id:"request-method",level:3},{value:"Request URL",id:"request-url",level:3},{value:"Header",id:"header",level:3},{value:"Request Parameters Example",id:"request-parameters-example",level:3},{value:"Success Response Example",id:"success-response-example",level:3},{value:"Success Response Parameters Description",id:"success-response-parameters-description",level:3},{value:"Failure Response Example",id:"failure-response-example",level:3},{value:"Failure Response Parameters Description",id:"failure-response-parameters-description",level:3}],f={toc:m},g="wrapper";function k(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},f,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("center",null,(0,n.kt)("h2",{id:"send-message"},"Send Message")),(0,n.kt)("h3",{id:"brief-description"},"Brief Description"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Simulate sending a message to a specified user or group. Can also be used to import historical records from other platforms.")),(0,n.kt)("h3",{id:"request-method"},"Request Method"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"post"))),(0,n.kt)("h3",{id:"request-url"},"Request URL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"{API_ADDRESS}/msg/send_msg"))),(0,n.kt)("h3",{id:"header"},"Header"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Header Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Example Value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Used for global trace tracking; suggested to use a unique timestamp per request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"token"),(0,n.kt)("td",{parentName:"tr",align:"left"},"eyJhbxxxx3Xs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/restapi/apis/authenticationManagement/getAdminToken"},"Admin token"))))),(0,n.kt)("h3",{id:"request-parameters-example"},"Request Parameters Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sendID": "openIMAdmin",\n  "recvID": "2839678182",\n  "groupID": "",\n  "senderNickname": "openIMAdmin-Gordon",\n  "senderFaceURL": "http://www.head.com",\n  "senderPlatformID": 1,\n  "content": {\n    "content": "hello!!"\n  },\n  "contentType": 101,\n  "sessionType": 1,\n  "isOnlineOnly": false,\n  "notOfflinePush": false,\n  "sendTime": 1695212630740,\n  "offlinePushInfo": {\n    "title": "send message",\n    "desc": "",\n    "ex": "",\n    "iOSPushSound": "default",\n    "iOSBadgeCount": true\n  },\n  "ex": "ex"\n}\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sendID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System notification ID, or user ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"recvID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Receiver ID, required if ",(0,n.kt)("inlineCode",{parentName:"td"},"sessionType")," is 1 or 4; if it's a group chat, leave blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"groupID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Group ID, required if ",(0,n.kt)("inlineCode",{parentName:"td"},"sessionType")," is 3; leave blank for one-to-one chats")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"senderNickname"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sender\u2019s nickname")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"senderFaceURL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sender\u2019s avatar URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"senderPlatformID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sender\u2019s ",(0,n.kt)("a",{parentName:"td",href:"/restapi/commonFields/#%E9%80%9A%E7%94%A8%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"platform type"),", value from 1-9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"content"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Message content; refer to ",(0,n.kt)("a",{parentName:"td",href:"/restapi/contentDescription/#content-%E5%85%B7%E4%BD%93%E5%86%85%E5%AE%B9-"},"Message Type Format Description"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"content.content"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Message content text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"contentType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/restapi/contentDescription"},"Message type"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sessionType"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/restapi/commonFields/#%E9%80%9A%E7%94%A8%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"Conversation type"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"isOnlineOnly"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Receiver must be online to receive; otherwise, message is dropped")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"notOfflinePush"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Do not push offline notifications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sendTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Send time in milliseconds; only for imported messages")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Details for offline push notification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.title"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Push notification title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.desc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Push notification description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.ex"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Extended field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.iOSPushSound"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iOS push notification sound")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"offlinePushInfo.iOSBadgeCount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iOS badge count on app icon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ex"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Extended field")))),(0,n.kt)("h3",{id:"success-response-example"},"Success Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": "",\n  "data": {\n    "serverMsgID": "8698dd5d163dd79b8fdfa333fee06f40",\n    "clientMsgID": "1ca0e4cf279ad5cce6b28331b2b42092",\n    "sendTime": 1679558586210\n  }\n}\n')),(0,n.kt)("h3",{id:"success-response-parameters-description"},"Success Response Parameters Description"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Error code; 0 indicates success")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Brief error message, empty if none")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Detailed error information, empty if none")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"data"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object"),(0,n.kt)("td",{parentName:"tr",align:"left"},"General data object, structure detailed below")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"serverMsgID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Server message ID; reserved field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"clientMsgID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client message ID; unique ID for message")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sendTime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Time the message was sent")))),(0,n.kt)("h3",{id:"failure-response-example"},"Failure Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 1004,\n  "errMsg": "RecordNotFoundError",\n  "errDlt": ": [1004]RecordNotFoundError"\n}\n')),(0,n.kt)("h3",{id:"failure-response-parameters-description"},"Failure Response Parameters Description"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"int"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Error code, refer to global error code documentation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Brief error message")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Detailed error information")))))}k.isMDXComponent=!0}}]);