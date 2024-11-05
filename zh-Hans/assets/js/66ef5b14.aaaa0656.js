"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[6620],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},o="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),o=p(a),k=r,g=o["".concat(i,".").concat(k)]||o[k]||u[k]||l;return a?n.createElement(g,m(m({ref:e},d),{},{components:a})):n.createElement(g,m({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,m=new Array(l);m[0]=k;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[o]="string"==typeof t?t:r,m[1]=s;for(var p=2;p<l;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},97977:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>o});a(67294);var n=a(3905);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:2},i="AtElem",p={unversionedId:"class/message/atElem",id:"class/message/atElem",title:"AtElem",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/class/message/atElem.mdx",sourceDirName:"class/message",slug:"/class/message/atElem",permalink:"/zh-Hans/sdks/class/message/atElem",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/class/message/atElem.mdx",tags:[],version:"current",lastUpdatedAt:1730812373,formattedLastUpdatedAt:"2024\u5e7411\u67085\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"AdvancedHistoryInfo",permalink:"/zh-Hans/sdks/class/message/advancedHistoryInfo"},next:{title:"AtInfo",permalink:"/zh-Hans/sdks/class/message/atInfo"}},d={},o=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"AtTextElem",id:"attextelem",level:3},{value:"OIMAtTextElem",id:"oimattextelem",level:3},{value:"AtTextElem",id:"attextelem-1",level:3},{value:"AtTextElem",id:"attextelem-2",level:3},{value:"AtTextElem",id:"attextelem-3",level:3},{value:"AtTextElem",id:"attextelem-4",level:3},{value:"AtTextElem",id:"attextelem-5",level:3}],u=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},k=u("Tabs"),g=u("TabItem"),N={toc:o},b="wrapper";function c(t){var{components:e}=t,a=m(t,["components"]);return(0,n.kt)(b,l(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){r(t,e,a[e])}))}return t}({},N,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"atelem"},"AtElem"),(0,n.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"@\u4fe1\u606f\u3002")),(0,n.kt)(k,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,n.kt)(g,{value:"Flutter",mdxType:"TabItem"},(0,n.kt)("h3",{id:"attextelem"},"AtTextElem"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5185\u5bb9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"atUserList"),(0,n.kt)("td",{parentName:"tr",align:null},"List<String",">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab@\u7684\u7528\u6237 ID \u96c6\u5408")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"atUsersInfo"),(0,n.kt)("td",{parentName:"tr",align:null},"List<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/atInfo"},"AtUserInfo"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab@\u7684\u7528\u6237\u96c6\u5408")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quoteMessage"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"Message")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f15\u7528\u6d88\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isAtSelf"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"\u81ea\u5df1\u662f\u5426\u88ab@\u4e86"))))),(0,n.kt)(g,{value:"iOS",mdxType:"TabItem"},(0,n.kt)("h3",{id:"oimattextelem"},"OIMAtTextElem"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5185\u5bb9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"atUserList"),(0,n.kt)("td",{parentName:"tr",align:null},"NSArray<NSString ","*",">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab@\u7684\u7528\u6237 ID \u96c6\u5408")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"atUsersInfo"),(0,n.kt)("td",{parentName:"tr",align:null},"NSArray< ",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/atInfo"},"OIMAtInfo")," ","*"," >"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab@\u7684\u7528\u6237\u96c6\u5408")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quoteMessage"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"OIMMessageInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f15\u7528\u6d88\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isAtSelf"),(0,n.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,n.kt)("td",{parentName:"tr",align:null},"\u81ea\u5df1\u662f\u5426\u88ab@\u4e86")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isAtAll"),(0,n.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f\u5426@\u5168\u4f53\u6210\u5458"))))),(0,n.kt)(g,{value:"Android",mdxType:"TabItem"},(0,n.kt)("h3",{id:"attextelem-1"},"AtTextElem"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5185\u5bb9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"atUserList"),(0,n.kt)("td",{parentName:"tr",align:null},"List<String",">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab@\u7684\u7528\u6237 ID \u96c6\u5408")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"atUsersInfo"),(0,n.kt)("td",{parentName:"tr",align:null},"List<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/atInfo"},"AtUserInfo"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab@\u7684\u7528\u6237\u96c6\u5408")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quoteMessage"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"Message")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f15\u7528\u6d88\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isAtSelf"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null}))))),(0,n.kt)(g,{value:"Web",mdxType:"TabItem"},(0,n.kt)("h3",{id:"attextelem-2"},"AtTextElem"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5185\u5bb9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"atUserList"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab@\u7684\u7528\u6237 userID \u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"atUsersInfo"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/atInfo"},"AtUserInfo"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab@\u7684\u7528\u6237\u4fe1\u606f\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quoteMessage"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"MessageItem")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f15\u7528\u6d88\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isAtSelf"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"\u81ea\u5df1\u662f\u5426\u88ab@\u4e86"))))),(0,n.kt)(g,{value:"uni-app",mdxType:"TabItem"},(0,n.kt)("h3",{id:"attextelem-3"},"AtTextElem"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5185\u5bb9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"atUserList"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab@\u7684\u7528\u6237 userID \u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"atUsersInfo"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/atInfo"},"AtUserInfo"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab@\u7684\u7528\u6237\u4fe1\u606f\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quoteMessage"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"MessageItem")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f15\u7528\u6d88\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isAtSelf"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"\u81ea\u5df1\u662f\u5426\u88ab@\u4e86"))))),(0,n.kt)(g,{value:"React-Native",mdxType:"TabItem"},(0,n.kt)("h3",{id:"attextelem-4"},"AtTextElem"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5185\u5bb9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"atUserList"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab@\u7684\u7528\u6237 userID \u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"atUsersInfo"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/atInfo"},"AtUserInfo"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab@\u7684\u7528\u6237\u4fe1\u606f\u5217\u8868")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quoteMessage"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"MessageItem")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f15\u7528\u6d88\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isAtSelf"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"\u81ea\u5df1\u662f\u5426\u88ab@\u4e86"))))),(0,n.kt)(g,{value:"Unity",mdxType:"TabItem"},(0,n.kt)("h3",{id:"attextelem-5"},"AtTextElem"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5185\u5bb9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AtUserList"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab@\u7684\u7528\u6237 ID \u96c6\u5408")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AtUsersInfo"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/atInfo"},"AtUserInfo"),"[]"),(0,n.kt)("td",{parentName:"tr",align:null},"\u88ab@\u7684\u7528\u6237\u96c6\u5408")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"QuoteMessage"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"Message")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f15\u7528\u6d88\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IsAtSelf"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"\u81ea\u5df1\u662f\u5426\u88ab@\u4e86")))))))}c.isMDXComponent=!0}}]);