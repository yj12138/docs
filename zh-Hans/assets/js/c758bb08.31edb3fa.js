"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[72809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(b,s(s({ref:t},p),{},{components:n})):r.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"Browser",hide_title:!0,sidebar_position:5},l=void 0,c={unversionedId:"quickstart/browser",id:"quickstart/browser",title:"Browser",description:"\ud83d\ude80\u4f7f\u7528 Demo",source:"@site/docs/sdks/quickstart/browser.mdx",sourceDirName:"quickstart",slug:"/quickstart/browser",permalink:"/zh-Hans/sdks/quickstart/browser",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/quickstart/browser.mdx",tags:[],version:"current",lastUpdatedAt:1729397248,formattedLastUpdatedAt:"2024\u5e7410\u670820\u65e5",sidebarPosition:5,frontMatter:{title:"Browser",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"React Native",permalink:"/zh-Hans/sdks/quickstart/reactNative"},next:{title:"Electron",permalink:"/zh-Hans/sdks/quickstart/electron"}},p={},u=[{value:"\ud83d\ude80\u4f7f\u7528 Demo",id:"\u4f7f\u7528-demo",level:2},{value:"\u96c6\u6210\u6b65\u9aa4",id:"\u96c6\u6210\u6b65\u9aa4",level:2},{value:"1. \u6dfb\u52a0\u4f9d\u8d56",id:"1-\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"2. \u83b7\u53d6 wasm \u6240\u9700\u9759\u6001\u8d44\u6e90",id:"2-\u83b7\u53d6-wasm-\u6240\u9700\u9759\u6001\u8d44\u6e90",level:3},{value:"3. \u5f15\u5165 SDK",id:"3-\u5f15\u5165-sdk",level:3},{value:"4. \u767b\u5f55\u3001\u8bbe\u7f6e\u76d1\u542c",id:"4-\u767b\u5f55\u8bbe\u7f6e\u76d1\u542c",level:3},{value:"5. \u6536\u53d1\u6d88\u606f",id:"5-\u6536\u53d1\u6d88\u606f",level:3}],m={toc:u},d="wrapper";function b(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528-demo"},"\ud83d\ude80\u4f7f\u7528 Demo"),(0,r.kt)("p",null,"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u9996\u5148\u8fd0\u884c\u6211\u4eec\u4e3a\u60a8\u51c6\u5907\u7684\u6846\u67b6\u76f8\u5173\u7684\u793a\u4f8b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/openim-electron-demo"},"DEMO")," \u3002\u8fd9\u4e0d\u4ec5\u53ef\u4ee5\u8ba9\u60a8\u76f4\u89c2\u4f53\u9a8c OpenIM SDK \u7684\u529f\u80fd\uff0c\u8fd8\u5c06\u5e2e\u52a9\u60a8\u5728\u5b9e\u9645\u96c6\u6210\u8fc7\u7a0b\u4e2d\u8fc5\u901f\u5b9a\u4f4d\u548c\u89e3\u51b3\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"\u96c6\u6210\u6b65\u9aa4"},"\u96c6\u6210\u6b65\u9aa4"),(0,r.kt)("h3",{id:"1-\u6dfb\u52a0\u4f9d\u8d56"},"1. \u6dfb\u52a0\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @openim/wasm-client-sdk\n")),(0,r.kt)("h3",{id:"2-\u83b7\u53d6-wasm-\u6240\u9700\u9759\u6001\u8d44\u6e90"},"2. \u83b7\u53d6 wasm \u6240\u9700\u9759\u6001\u8d44\u6e90"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"\u76ee\u5f55\u4e0b\u627e\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"@openim/wasm-client-sdk"),"\u5b50\u76ee\u5f55\uff0c\u5c06\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"assets"),"\u6587\u4ef6\u5939\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u62f7\u8d1d\u5230\u9879\u76ee\u516c\u5171\u8d44\u6e90\u76ee\u5f55\u4e2d\uff08public\uff09\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u6e05\u5355")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openIM.wasm\nsql-wasm.wasm\nwasm_exec.js\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u62f7\u8d1d\u5b8c\u6210\u540e\u5728\u60a8\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),"\u6587\u4ef6\u4e2d\u901a\u8fc7 script \u6807\u7b7e\u5f15\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"wasm_exec.js"),"\u6587\u4ef6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u80fd\u5b58\u5728\u7684\u95ee\u9898"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528webpack4\uff0c\u53ef\u80fd\u9700\u8981\u53c2\u8003\u8fd9\u4e2aissue\u6765\u8fdb\u884c\u914d\u7f6e",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/open-im-sdk-web-wasm/issues/73"},"How to import @openim/wasm-client-sdk in webpack4.x"))))),(0,r.kt)("h3",{id:"3-\u5f15\u5165-sdk"},"3. \u5f15\u5165 SDK"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f15\u5165 SDK")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { getSDK } from \'@openim/wasm-client-sdk\';\n\nconst IMSDK = getSDK({\n  coreWasmPath: "./openIM.wasm";\n  sqlWasmPath: "/sql-wasm.wasm";\n  debug: true; // false\u4e0d\u6253\u5370\u65e5\u5fd7\n});\n')),(0,r.kt)("h3",{id:"4-\u767b\u5f55\u8bbe\u7f6e\u76d1\u542c"},"4. \u767b\u5f55\u3001\u8bbe\u7f6e\u76d1\u542c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { getSDK, CbEvents } from '@openim/wasm-client-sdk';\n\nconst IMSDK = getSDK();\n\nIMSDK.on(CbEvents.OnConnecting, () => {\n  // \u8fde\u63a5\u4e2d\n})\nIMSDK.on(CbEvents.OnConnectSuccess, () => {\n  // \u8fde\u63a5\u6210\u529f\n})\nIMSDK.on(CbEvents.OnConnectFailed, () => {\n  // \u8fde\u63a5\u5931\u8d25\n})\nIMSDK.on(CbEvents.OnUserTokenExpired, () => {\n  // token\u65e0\u6548\n})\n\nIMSDK.login({\n    userID: string;       // IM \u7528\u6237 userID\n    token: string;        // IM \u7528\u6237\u4ee4\u724c\n    platformID: number;   // \u5f53\u524d\u767b\u5f55\u5e73\u53f0\u53f7\uff0cweb\u7aef\u4e3a5\n    apiAddr: string;   // IM api \u5730\u5740\uff0c\u4e00\u822c\u4e3a`http://your-server-ip:10002`\n    wsAddr: string;    // IM ws \u5730\u5740\uff0c\u4e00\u822c\u4e3a`ws://your-server-ip:10001`\n})\n  .then(() => {\n    // \u767b\u5f55\u5b8c\u6210\n  })\n  .catch(({ errCode, errMsg }) => {\n    // \u767b\u5f55\u5931\u8d25\n  });\n")),(0,r.kt)("h3",{id:"5-\u6536\u53d1\u6d88\u606f"},"5. \u6536\u53d1\u6d88\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { getSDK, CbEvents } from '@openim/wasm-client-sdk';\n\nconst IMSDK = getSDK();\n\nIMSDK.on(CbEvents.OnRecvNewMessages, ({ data: messages }) => {\n  // \u6536\u5230\u65b0\u6d88\u606f\n})\n\nconst { data: message } = await IMSDK.createTextMessage('hello openim')\n\nIMSDK.sendMessage({\n  recvID: string; // \u63a5\u6536\u65b9ID\n  groupID: string; // \u7fa4\u804aID\n  message: message; // \u8981\u53d1\u9001\u7684\u6d88\u606f\u4f53\n}).then(({data:succeedMessage}) => {\n  // \u53d1\u9001\u6210\u529f succeedMessage\u4e3a\u53d1\u9001\u6210\u529f\u540e\u5b8c\u6574\u7684\u6d88\u606f\u4f53\n}).catch(({ errCode, errMsg }) => {\n  // \u53d1\u9001\u5931\u8d25\n})\n")))}b.isMDXComponent=!0}}]);