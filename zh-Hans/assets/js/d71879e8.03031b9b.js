"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[76561],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),i=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},o="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),o=i(a),k=n,u=o["".concat(d,".").concat(k)]||o[k]||g[k]||s;return a?r.createElement(u,l(l({ref:t},m),{},{components:a})):r.createElement(u,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[o]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<s;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},49418:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>o});a(67294);var r=a(3905);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const p={sidebar_position:6,toc_min_heading_level:2,toc_max_heading_level:2},d="\u6d88\u606f\u76f8\u5173",i={unversionedId:"api/message/index",id:"api/message/index",title:"\u6d88\u606f\u76f8\u5173",description:"\u6a21\u5757\u6982\u89c8",source:"@site/docs/sdks/api/message/index.mdx",sourceDirName:"api/message",slug:"/api/message/",permalink:"/zh-Hans/sdks/api/message/",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/message/index.mdx",tags:[],version:"current",lastUpdatedAt:1729397248,formattedLastUpdatedAt:"2024\u5e7410\u670820\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"deleteConversationAndDeleteAllMsg",permalink:"/zh-Hans/sdks/api/conversation/deleteConversationAndDeleteAllMsg"},next:{title:"setMessageListener",permalink:"/zh-Hans/sdks/api/message/setMessageListener"}},m={},o=[{value:"\u6a21\u5757\u6982\u89c8",id:"\u6a21\u5757\u6982\u89c8",level:2}],g={toc:o},k="wrapper";function u(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)(k,s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6d88\u606f\u76f8\u5173"},"\u6d88\u606f\u76f8\u5173"),(0,r.kt)("h2",{id:"\u6a21\u5757\u6982\u89c8"},"\u6a21\u5757\u6982\u89c8"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6d88\u606f\u76f8\u5173 SDK")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6a21\u5757\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6a21\u5757\u529f\u80fd\u7b80\u4ecb"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/setMessageListener"},"setMessageListener")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6d88\u606f\u76d1\u542c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/setBatchMsgListener"},"setBatchMsgListener")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6d88\u606f\u76d1\u542c(\u6279\u91cf\u89e6\u53d1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createTextMessage"},"createTextMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u6587\u672c\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createTextAtMessage"},"createTextAtMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa@\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createImageMessageFromFullPath"},"createImageMessageFromFullPath")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84\u521b\u5efa\u56fe\u7247\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createImageMessageByURL"},"createImageMessageByURL")),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u884c\u4e0a\u4f20\u6587\u4ef6\u5e76\u521b\u5efa\u56fe\u7247\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createImageMessageByFile"},"createImageMessageByFile")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u6587\u4ef6\u5bf9\u8c61\u521b\u5efa\u56fe\u7247\u6d88\u606f(web)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createSoundMessageFromFullPath"},"createSoundMessageFromFullPath")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84\u521b\u5efa\u8bed\u97f3\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createSoundMessageByURL"},"createSoundMessageByURL")),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u884c\u4e0a\u4f20\u6587\u4ef6\u5e76\u521b\u5efa\u8bed\u97f3\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createSoundMessageByFile"},"createSoundMessageByFile")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u6587\u4ef6\u5bf9\u8c61\u521b\u5efa\u8bed\u97f3\u6d88\u606f(web)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createVideoMessageFromFullPath"},"createVideoMessageFromFullPath")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84\u521b\u5efa\u89c6\u9891\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createVideoMessageByURL"},"createVideoMessageByURL")),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u884c\u4e0a\u4f20\u6587\u4ef6\u5e76\u521b\u5efa\u89c6\u9891\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createVideoMessageByFile"},"createVideoMessageByFile")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u6587\u4ef6\u5bf9\u8c61\u521b\u5efa\u89c6\u9891\u6d88\u606f(web)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createFileMessageFromFullPath"},"createFileMessageFromFullPath")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84\u521b\u5efa\u6587\u4ef6\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createFileMessageByURL"},"createFileMessageByURL")),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u884c\u4e0a\u4f20\u6587\u4ef6\u5e76\u521b\u5efa\u6587\u4ef6\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createFileMessageByFile"},"createFileMessageByFile")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u6587\u4ef6\u5bf9\u8c61\u521b\u5efa\u6587\u4ef6\u6d88\u606f(web)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createMergeMessage"},"createMergeMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u5408\u5e76\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createForwardMessage"},"createForwardMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u8f6c\u53d1\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createLocationMessage"},"createLocationMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u5b9a\u4f4d\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createQuoteMessage"},"createQuoteMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u5f15\u7528\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createCardMessage"},"createCardMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u540d\u7247\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createCustomMessage"},"createCustomMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u81ea\u5b9a\u4e49\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/createFaceMessage"},"createFaceMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u8868\u60c5\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/sendMessage"},"sendMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/sendMessageNotOss"},"sendMessageNotOss")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6d88\u606f\u4e0d\u901a\u8fc7 sdk \u5185\u7f6e OSS \u4e0a\u4f20\u591a\u5a92\u4f53\u6587\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/typingStatusUpdate"},"typingStatusUpdate")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u804a\u6b63\u5728\u8f93\u5165\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/revokeMessage"},"revokeMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u64a4\u56de\u4e00\u6761\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/deleteMessage"},"deleteMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u4e00\u6761\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/deleteMessageFromLocalStorage"},"deleteMessageFromLocalStorage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u5220\u9664\u4e00\u6761\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/deleteAllMsgFromLocal"},"deleteAllMsgFromLocal")),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u5220\u9664\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/deleteAllMsgFromLocalAndSvr"},"deleteAllMsgFromLocalAndSvr")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/searchLocalMessages"},"searchLocalMessages")),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u627e\u672c\u5730\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/getAdvancedHistoryMessageList"},"getAdvancedHistoryMessageList")),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u4f1a\u8bdd\u5185\u6d88\u606f\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/getAdvancedHistoryMessageListReverse"},"getAdvancedHistoryMessageListReverse")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53cd\u5411\u83b7\u53d6\u4f1a\u8bdd\u5185\u6d88\u606f\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/findMessageList"},"findMessageList")),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u627e\u6d88\u606f\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/insertSingleMessageToLocalStorage"},"insertSingleMessageToLocalStorage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d2\u5165\u4e00\u6761\u5355\u804a\u6d88\u606f\u5230\u672c\u5730")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/insertGroupMessageToLocalStorage"},"insertGroupMessageToLocalStorage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d2\u5165\u4e00\u6761\u7fa4\u804a\u6d88\u606f\u5230\u672c\u5730")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/api/message/setMessageLocalEx"},"setMessageLocalEx")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6d88\u606f\u62d3\u5c55\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);