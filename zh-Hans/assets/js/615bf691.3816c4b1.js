"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[2486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={},p="oimws\u90e8\u7f72 -\u8ba1\u5212\u5e9f\u5f03",s={unversionedId:"gettingStarted/jssdk",id:"gettingStarted/jssdk",title:"oimws\u90e8\u7f72 -\u8ba1\u5212\u5e9f\u5f03",description:"OpenIM \u7684\u4e24\u4e2a\u7248\u672c JSSDK",source:"@site/docs/guides/gettingStarted/jssdk.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/jssdk",permalink:"/zh-Hans/guides/gettingStarted/jssdk",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/jssdk.mdx",tags:[],version:"current",lastUpdatedAt:1729397248,formattedLastUpdatedAt:"2024\u5e7410\u670820\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"k8s\u90e8\u7f72-\u5f85\u5b8c\u5584",permalink:"/zh-Hans/guides/gettingStarted/k8s-deployment"},next:{title:"\u538b\u6d4b\u62a5\u544a",permalink:"/zh-Hans/guides/pressure_test"}},u={},c=[{value:"OpenIM \u7684\u4e24\u4e2a\u7248\u672c JSSDK",id:"openim-\u7684\u4e24\u4e2a\u7248\u672c-jssdk",level:2},{value:"1. WASM \u7248\u672c",id:"1-wasm-\u7248\u672c",level:3},{value:"2. \u7eaf JS \u7248\u672c",id:"2-\u7eaf-js-\u7248\u672c",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u8fd0\u884c\u793a\u4f8b",id:"\u8fd0\u884c\u793a\u4f8b",level:3}],m={toc:c},d="wrapper";function k(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(d,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oimws\u90e8\u7f72--\u8ba1\u5212\u5e9f\u5f03"},"oimws\u90e8\u7f72 -\u8ba1\u5212\u5e9f\u5f03"),(0,r.kt)("h2",{id:"openim-\u7684\u4e24\u4e2a\u7248\u672c-jssdk"},"OpenIM \u7684\u4e24\u4e2a\u7248\u672c JSSDK"),(0,r.kt)("p",null,"OpenIM \u63d0\u4f9b\u4e86\u4e24\u4e2a\u7248\u672c\u7684 JSSDK\uff0c\u6bcf\u4e2a\u7248\u672c\u90fd\u6709\u5176\u72ec\u7279\u7684\u7279\u70b9\u548c\u5e94\u7528\u573a\u666f\uff1a"),(0,r.kt)("h3",{id:"1-wasm-\u7248\u672c"},"1. WASM \u7248\u672c"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/open-im-sdk-web-wasm"},"\u4ed3\u5e93\u5730\u5740")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f18\u70b9"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6027\u80fd\u4f18\u8d8a"),"\uff1a\u4f7f\u7528 WebAssembly (WASM) \u6280\u672f\uff0c\u5e26\u6765\u4e86\u66f4\u9ad8\u7684\u6548\u7387\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u672c\u5730\u6d88\u606f\u5b58\u50a8"),"\uff1a\u6d88\u606f\u672c\u5730\u5b58\u50a8\u63d0\u9ad8\u4e86\u6570\u636e\u5904\u7406\u901f\u5ea6\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7f3a\u70b9"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6587\u4ef6\u4f53\u79ef\u8f83\u5927"),"\uff1a\u5305\u4f53\u79ef\u76f8\u5bf9\u8f83\u5927\uff0c\u538b\u7f29\u524d\u5927\u7ea6 20MB\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5c0f\u7a0b\u5e8f\u4e0d\u517c\u5bb9"),"\uff1a\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u65e0\u6cd5\u4f7f\u7528\u3002")),(0,r.kt)("h3",{id:"2-\u7eaf-js-\u7248\u672c"},"2. \u7eaf JS \u7248\u672c"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/open-im-sdk-web"},"\u4ed3\u5e93\u5730\u5740")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f18\u70b9"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u901a\u7528\u6027\u5f3a"),"\uff1a\u4e0d\u4f9d\u8d56\u4e8e\u7279\u5b9a\u7684\u6280\u672f\u6808\uff0c\u53ef\u4ee5\u5728\u66f4\u591a\u7684\u73af\u5883\u548c\u5e73\u53f0\u4e2d\u4f7f\u7528\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7f3a\u70b9"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6027\u80fd\u76f8\u5bf9\u8f83\u5dee"),"\uff1a\u7531\u4e8e\u5386\u53f2\u6d88\u606f\u9700\u8981\u4ece\u670d\u52a1\u7aef\u62c9\u53d6\uff0c\u5728\u6027\u80fd\u4e0a\u6709\u6240\u4e0d\u8db3\u3002")),(0,r.kt)("p",null,"OIMWS\uff08OpenIM Websocket\uff09\u662f\u4e13\u4e3a OpenIM \u7684\u7eaf JSSDK \u8bbe\u8ba1\u7684\u670d\u52a1\u7aef\u89e3\u51b3\u65b9\u6848\u3002\u5b83\u8d1f\u8d23\u5904\u7406\u6765\u81ea JSSDK \u7684\u6240\u6709Websocket\u8bf7\u6c42\u3002\n\u672c\u6307\u5357\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u5b89\u88c5\u548c\u8fd0\u884c OIMWS\uff0c\u5e76\u63d0\u4f9b\u5bf9\u5176\u5173\u952e\u529f\u80fd\u548c\u914d\u7f6e\u53c2\u6570\u7684\u5168\u9762\u89e3\u91ca\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u5b89\u88c5 OIMWS SDK Server\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u514b\u9686 GitHub \u4ed3\u5e93"),"\uff1a \u514b\u9686 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/oimws"},"OIMWS GitHub \u4ed3\u5e93")," \u5230\u60a8\u7684\u672c\u5730\u73af\u5883\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/openimsdk/oimws\n")),(0,r.kt)("p",{parentName:"li"},"\u5b8c\u6210\u540e\uff0c\u8bf7\u9605\u8bfb README \u6587\u4ef6\u3002"))),(0,r.kt)("h2",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,r.kt)("p",null,"\u5728\u8fd0\u884c OIMWS SDK Server \u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u5df2\u7ecf\u6b63\u786e\u5b89\u88c5\u3002"),(0,r.kt)("p",null,"\u8fd0\u884c\u7a0b\u5e8f\u9700\u8981\u914d\u7f6e\u4e00\u4e9b\u53c2\u6570\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u6807\u5fd7\u6765\u8bbe\u7f6e\u8fd9\u4e9b\u53c2\u6570\u3002\u4ee5\u4e0b\u662f\u7a0b\u5e8f\u7684\u4e3b\u8981\u51fd\u6570\u53ca\u5176\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'openimApi: "http://127.0.0.1:10002"\nopenimWs: "ws://127.0.0.1:10001"\nsdkWsPort: [ 10003 ]\ndbDir: "../../../../db/"\n')),(0,r.kt)("h3",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"openimApi"),": openIM API \u76d1\u542c\u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:10002"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"openimWs"),": openIM WebSocket \u76d1\u542c\u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"ws://127.0.0.1:10001"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sdkWsPort"),": openIMSDK WebSocket \u76d1\u542c\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"10003"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"dbDir"),": openIM \u6570\u636e\u5e93\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"_output/db")," \u6587\u4ef6\u5939\u3002")),(0,r.kt)("h3",{id:"\u8fd0\u884c\u793a\u4f8b"},"\u8fd0\u884c\u793a\u4f8b"),(0,r.kt)("p",null,"\u5728\u547d\u4ee4\u884c\u4e2d\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u6807\u5fd7\u6765\u4fee\u6539\u8fd9\u4e9b\u53c2\u6570\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7f16\u8bd1\nmage\n# \u8fd0\u884c\nmage start\n")),(0,r.kt)("p",null,"\u8fd9\u5c06\u542f\u52a8\u670d\u52a1\u5668\uff0c\u5e76\u6839\u636e\u63d0\u4f9b\u7684\u53c2\u6570\u914d\u7f6e\u670d\u52a1\u3002"))}k.isMDXComponent=!0}}]);