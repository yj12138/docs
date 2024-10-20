"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[44602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),s=a,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},31233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"\u7528\u6237\u5728\u7ebf\u72b6\u6001\u56de\u8c03",hide_title:!0},p="\u7528\u6237\u5728\u7ebf\u72b6\u6001\u56de\u8c03",u={unversionedId:"webhooks/user/userOnline",id:"webhooks/user/userOnline",title:"\u7528\u6237\u5728\u7ebf\u72b6\u6001\u56de\u8c03",description:"\u529f\u80fd\u8bf4\u660e",source:"@site/docs/restapi/webhooks/user/userOnline.mdx",sourceDirName:"webhooks/user",slug:"/webhooks/user/userOnline",permalink:"/zh-Hans/restapi/webhooks/user/userOnline",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/user/userOnline.mdx",tags:[],version:"current",lastUpdatedAt:1729397248,formattedLastUpdatedAt:"2024\u5e7410\u670820\u65e5",frontMatter:{title:"\u7528\u6237\u5728\u7ebf\u72b6\u6001\u56de\u8c03",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u7528\u6237\u79bb\u7ebf\u72b6\u6001\u56de\u8c03",permalink:"/zh-Hans/restapi/webhooks/user/userOffline"},next:{title:"\u7528\u6237\u6ce8\u518c\u8bf7\u6c42\u540e\u7684\u56de\u8c03",permalink:"/zh-Hans/restapi/webhooks/user/userRegisterAfter"}},c={},d=[{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f",id:"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f",level:2},{value:"\u56de\u8c03\u53d1\u751f\u65f6\u673a",id:"\u56de\u8c03\u53d1\u751f\u65f6\u673a",level:2},{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"\u8bf7\u6c42 URL \u793a\u4f8b",id:"\u8bf7\u6c42-url-\u793a\u4f8b",level:3},{value:"\u8bf7\u6c42\u5305\u793a\u4f8b",id:"\u8bf7\u6c42\u5305\u793a\u4f8b",level:3},{value:"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e",id:"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"\u5e94\u7b54\u5305\u793a\u4f8b",id:"\u5e94\u7b54\u5305\u793a\u4f8b",level:2},{value:"\u5904\u7406\u7ed3\u679c",id:"\u5904\u7406\u7ed3\u679c",level:3},{value:"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e",id:"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e",level:2}],m={toc:d},s="wrapper";function k(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(s,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7528\u6237\u5728\u7ebf\u72b6\u6001\u56de\u8c03"},"\u7528\u6237\u5728\u7ebf\u72b6\u6001\u56de\u8c03"),(0,r.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,r.kt)("p",null,"App \u4e1a\u52a1\u670d\u52a1\u7aef\u53ef\u4ee5\u901a\u8fc7\u8be5\u56de\u8c03\u53d8\u66f4\u7528\u6237\u72b6\u6001\u4e3a\u5728\u7ebf\u72b6\u6001\u3002"),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u542f\u7528\u56de\u8c03\uff0c\u5fc5\u987b\u914d\u7f6e\u56de\u8c03 URL\uff0c\u5e76\u5f00\u542f\u672c\u6761\u56de\u8c03\u534f\u8bae\u5bf9\u5e94\u7684\u5f00\u5173\u3002\u914d\u7f6e\u65b9\u6cd5\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"../introduction"},"\u56de\u8c03\u8bf4\u660e")," \u6587\u6863\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u56de\u8c03\u7684\u65b9\u5411\u662f OpenIM Server \u5411 App \u540e\u53f0\u53d1\u8d77 HTTP/HTTPS POST \u8bf7\u6c42\u3002"),(0,r.kt)("li",{parentName:"ul"},"APP \u4e1a\u52a1\u670d\u52a1\u7aef\u9700\u5728\u8d85\u65f6\u65f6\u95f4\u5185\u54cd\u5e94\u6b64\u8bf7\u6c42\u3002")),(0,r.kt)("h2",{id:"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f"},"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u901a\u8fc7\u5ba2\u6237\u7aef\u53d1\u8d77\u767b\u5f55\u7684\u4e0a\u7ebf\u8bf7\u6c42\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u7684\u5ba2\u6237\u7aef\u53d1\u751f\u65ad\u7f51\u540e\u6210\u529f\u91cd\u8fde\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u7528\u6237\u7684\u81ea\u5b9a\u4e49\u72b6\u6001\u3002")),(0,r.kt)("h2",{id:"\u56de\u8c03\u53d1\u751f\u65f6\u673a"},"\u56de\u8c03\u53d1\u751f\u65f6\u673a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u4e0a\u7ebf\u65f6\u3002")),(0,r.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u8bf7\u6c42-url-\u793a\u4f8b"},"\u8bf7\u6c42 URL \u793a\u4f8b"),(0,r.kt)("p",null,"\u6b64\u5904",(0,r.kt)("inlineCode",{parentName:"p"},"CallbackCommand"),"\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"callbackAfterUserOnlineCommand")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"{WEBHOOK_ADDRESS}/callbackAfterUserOnlineCommand?contenttype=json\n")),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u5305\u793a\u4f8b"},"\u8bf7\u6c42\u5305\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userID": "user123",\n  "callbackCommand": "callbackAfterUserOnlineCommand",\n  "platformID": 3,\n  "platform": "Windows"\n}\n\n')),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e"},"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5bf9\u8c61"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7684\u552f\u4e00\u6807\u8bc6\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56de\u8c03\u547d\u4ee4\uff0c\u8fd9\u91cc\u662f\u7528\u6237\u5728\u7ebf\u72b6\u6001\u56de\u8c03")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"platformID"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Platform"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u540d")))),(0,r.kt)("h2",{id:"\u5e94\u7b54\u5305\u793a\u4f8b"},"\u5e94\u7b54\u5305\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u5904\u7406\u7ed3\u679c"},"\u5904\u7406\u7ed3\u679c"),(0,r.kt)("p",null,"\u7528\u6237\u5728\u7ebf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "actionCode": 0,\n    "errCode": 0,\n    "errMsg": "",\n    "errDlt": "",\n    "nextCode": ""\n}\n')),(0,r.kt)("h2",{id:"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e"},"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u4e1a\u52a1\u7cfb\u7edf\u7684\u56de\u8c03\u662f\u5426\u6b63\u786e\u6267\u884c\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\u8868\u793a\u64cd\u4f5c\u6210\u529f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errCode"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\uff0c\u6b64\u5904\u586b0\u4ee3\u8868\u5ffd\u7565\u56de\u8c03\u7ed3\u679c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:null},'"An error message"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\u5bf9\u5e94\u7684\u7b80\u5355\u9519\u8bef\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:null},'"Detailed error information"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\u5bf9\u5e94\u7684\u8be6\u7ec6\u9519\u8bef\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0b\u4e00\u6b65\u6267\u884c\u6307\u4ee4\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\u8868\u793a\u62d2\u7edd\u7ee7\u7eed\u6267\u884c\uff0cactionCode\u7b49\u4e8e",(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\u65f6\u8bbe\u7f6e\u3002")))))}k.isMDXComponent=!0}}]);