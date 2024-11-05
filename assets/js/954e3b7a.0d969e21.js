"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[88190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||s;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},25876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_position:1,title:"Get Current User's Paginated Conversation List",hide_title:!0},l=void 0,p={unversionedId:"apis/conversationManagement/getOwnerConversation",id:"apis/conversationManagement/getOwnerConversation",title:"Get Current User's Paginated Conversation List",description:"Get Current User's Paginated Conversation List",source:"@site/i18n/en/docusaurus-plugin-content-docs-restapi/current/apis/conversationManagement/getOwnerConversation.mdx",sourceDirName:"apis/conversationManagement",slug:"/apis/conversationManagement/getOwnerConversation",permalink:"/restapi/apis/conversationManagement/getOwnerConversation",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/apis/conversationManagement/getOwnerConversation.mdx",tags:[],version:"current",lastUpdatedAt:1730812373,formattedLastUpdatedAt:"Nov 5, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Get Current User's Paginated Conversation List",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Dismiss Group",permalink:"/restapi/apis/groupManagement/dismissGroup"},next:{title:"Get Sorted Conversation List",permalink:"/restapi/apis/conversationManagement/getSortedConversationList"}},u={},m=[{value:"Get Current User&#39;s Paginated Conversation List",id:"get-current-users-paginated-conversation-list",level:2},{value:"Brief Description",id:"brief-description",level:3},{value:"Request Method",id:"request-method",level:3},{value:"Request URL",id:"request-url",level:3},{value:"Header",id:"header",level:3},{value:"Request Parameter Example",id:"request-parameter-example",level:3},{value:"Successful Response Example",id:"successful-response-example",level:3},{value:"Explanation of Successful Response Parameters",id:"explanation-of-successful-response-parameters",level:3},{value:"Failure Response Example",id:"failure-response-example",level:3},{value:"Explanation of Failure Response Parameters",id:"explanation-of-failure-response-parameters",level:3}],c={toc:m},g="wrapper";function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("center",null,(0,r.kt)("h2",{id:"get-current-users-paginated-conversation-list"},"Get Current User's Paginated Conversation List")),(0,r.kt)("h3",{id:"brief-description"},"Brief Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get Current User's Paginated Conversation List")),(0,r.kt)("h3",{id:"request-method"},"Request Method"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post")," ")),(0,r.kt)("h3",{id:"request-url"},"Request URL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{API_ADDRESS}/conversation/get_owner_conversation")," ")),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Header Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Used for global trace tracking, recommended to use a timestamp, unique for each request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"eyJhbxxxx3Xs"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/restapi/apis/authenticationManagement/getAdminToken"},"Admin token"))))),(0,r.kt)("h3",{id:"request-parameter-example"},"Request Parameter Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userID": "1008432211",\n  "pagination": {\n    "pageNumber": 1,\n    "showNumber": 20\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"userID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Current User ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pagination"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Pagination parameter object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pagination.pageNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Current page number, starting from 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pagination.showNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of items per page")))),(0,r.kt)("h3",{id:"successful-response-example"},"Successful Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 0,\n  "errMsg": "",\n  "errDlt": "",\n  "data": {\n    "total": 38,\n    "conversations": [\n      {\n        "ownerUserID": "1008432211",\n        "conversationID": "sg_1012900607",\n        "recvMsgOpt": 0,\n        "conversationType": 3,\n        "userID": "",\n        "groupID": "1012900607",\n        "isPinned": false,\n        "attachedInfo": "",\n        "isPrivateChat": false,\n        "groupAtType": 0,\n        "ex": "",\n        "burnDuration": 0,\n        "minSeq": 0,\n        "maxSeq": 184,\n        "msgDestructTime": 0,\n        "latestMsgDestructTime": -62135596800000,\n        "isMsgDestruct": false\n      },\n      {\n        "ownerUserID": "1008432211",\n        "conversationID": "sg_1084800774",\n        "recvMsgOpt": 0,\n        "conversationType": 3,\n        "userID": "",\n        "groupID": "1084800774",\n        "isPinned": false,\n        "attachedInfo": "",\n        "isPrivateChat": false,\n        "groupAtType": 0,\n        "ex": "",\n        "burnDuration": 30,\n        "minSeq": 0,\n        "maxSeq": 0,\n        "msgDestructTime": 604800,\n        "latestMsgDestructTime": 1695265099982,\n        "isMsgDestruct": false\n      },\n      {\n        "ownerUserID": "1008432211",\n        "conversationID": "sg_1300152726",\n        "recvMsgOpt": 0,\n        "conversationType": 3,\n        "userID": "",\n        "groupID": "1300152726",\n        "isPinned": false,\n        "attachedInfo": "",\n        "isPrivateChat": false,\n        "groupAtType": 0,\n        "ex": "",\n        "burnDuration": 30,\n        "minSeq": 0,\n        "maxSeq": 0,\n        "msgDestructTime": 604800,\n        "latestMsgDestructTime": 1700464579733,\n        "isMsgDestruct": false\n      },\n      {\n        "ownerUserID": "1008432211",\n        "conversationID": "sg_1760150676",\n        "recvMsgOpt": 0,\n        "conversationType": 3,\n        "userID": "",\n        "groupID": "1760150676",\n        "isPinned": false,\n        "attachedInfo": "",\n        "isPrivateChat": false,\n        "groupAtType": 0,\n        "ex": "",\n        "burnDuration": 30,\n        "minSeq": 0,\n        "maxSeq": 0,\n        "msgDestructTime": 604800,\n        "latestMsgDestructTime": 1694565537524,\n        "isMsgDestruct": false\n      },\n      {\n        "ownerUserID": "1008432211",\n        "conversationID": "sg_1959004809",\n        "recvMsgOpt": 0,\n        "conversationType": 3,\n        "userID": "",\n        "groupID": "1959004809",\n        "isPinned": false,\n        "attachedInfo": "",\n        "isPrivateChat": false,\n        "groupAtType": 0,\n        "ex": "",\n        "burnDuration": 30,\n        "minSeq": 0,\n        "maxSeq": 0,\n        "msgDestructTime": 604800,\n        "latestMsgDestructTime": 1693526134219,\n        "isMsgDestruct": false\n      },\n      {\n        "ownerUserID": "1008432211",\n        "conversationID": "sg_198075251",\n        "recvMsgOpt": 0,\n        "conversationType": 3,\n        "userID": "",\n        "groupID": "198075251",\n        "isPinned": false,\n        "attachedInfo": "",\n        "isPrivateChat": false,\n        "groupAtType": 0,\n        "ex": "",\n        "burnDuration": 0,\n        "minSeq": 0,\n        "maxSeq": 0,\n        "msgDestructTime": 0,\n        "latestMsgDestructTime": -62135596800000,\n        "isMsgDestruct": false\n      },\n      {\n        "ownerUserID": "1008432211",\n        "conversationID": "sg_198617661",\n        "recvMsgOpt": 0,\n        "conversationType": 3,\n        "userID": "",\n        "groupID": "198617661",\n        "isPinned": false,\n        "attachedInfo": "",\n        "isPrivateChat": false,\n        "groupAtType": 0,\n        "ex": "",\n        "burnDuration": 0,\n        "minSeq": 0,\n        "maxSeq": 0,\n        "msgDestructTime": 0,\n        "latestMsgDestructTime": -62135596800000,\n        "isMsgDestruct": false\n      },\n      {\n        "ownerUserID": "1008432211",\n        "conversationID": "sg_2211210937",\n        "recvMsgOpt": 0,\n        "conversationType": 3,\n        "userID": "",\n        "groupID": "2211210937",\n        "isPinned": false,\n        "attachedInfo": "",\n        "isPrivateChat": false,\n        "groupAtType": 0,\n        "ex": "",\n        "burnDuration": 30,\n        "minSeq": 0,\n        "maxSeq": 0,\n        "msgDestructTime": 604800,\n        "latestMsgDestructTime": 1698321453986,\n        "isMsgDestruct": false\n      },\n      {\n        "ownerUserID": "1008432211",\n        "conversationID": "sg_2338619613",\n        "recvMsgOpt": 0,\n        "conversationType": 3,\n        "userID": "",\n        "groupID": "2338619613",\n        "isPinned": false,\n        "attachedInfo": "",\n        "isPrivateChat": false,\n        "groupAtType": 4,\n        "ex": "",\n        "burnDuration": 30,\n        "minSeq": 0,\n        "maxSeq": 268,\n        "msgDestructTime": 604800,\n        "latestMsgDestructTime": 1695175479581,\n        "isMsgDestruct": false\n      },\n      {\n        "ownerUserID": "1008432211",\n        "conversationID": "sg_2590740935",\n        "recvMsgOpt": 0,\n        "conversationType": 3,\n        "userID": "",\n        "groupID": "2590740935",\n        "isPinned": false,\n        "attachedInfo": "",\n        "isPrivateChat": false,\n        "groupAtType": 0,\n        "ex": "",\n        "burnDuration": 30,\n        "minSeq": 0,\n        "maxSeq": 0,\n        "msgDestructTime": 604800,\n        "latestMsgDestructTime": 1694565650924,\n        "isMsgDestruct": false\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"explanation-of-successful-response-parameters"},"Explanation of Successful Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Error code, 0 indicates success")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Brief error message, empty when successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Detailed error message, empty when successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"General data object, see structure below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"total"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of conversations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"conversations"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of ",(0,r.kt)("a",{parentName:"td",href:"/restapi/commonFields#conversationinfo"},"Conversations"))))),(0,r.kt)("h3",{id:"failure-response-example"},"Failure Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errCode": 1004,\n  "errMsg": "RecordNotFoundError",\n  "errDlt": ": [1004]RecordNotFoundError"\n}\n')),(0,r.kt)("h3",{id:"explanation-of-failure-response-parameters"},"Explanation of Failure Response Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errCode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Error code, refer to the global error code documentation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Brief error message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Detailed error message")))))}d.isMDXComponent=!0}}]);