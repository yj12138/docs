"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[65649],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(k,a(a({ref:t},c),{},{components:r})):n.createElement(k,a({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"Browser",hide_title:!0,sidebar_position:5},s=void 0,p={unversionedId:"quickstart/browser",id:"quickstart/browser",title:"Browser",description:"\ud83d\ude80 Using the Demo",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/quickstart/browser.mdx",sourceDirName:"quickstart",slug:"/quickstart/browser",permalink:"/sdks/quickstart/browser",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/quickstart/browser.mdx",tags:[],version:"current",lastUpdatedAt:1730812373,formattedLastUpdatedAt:"Nov 5, 2024",sidebarPosition:5,frontMatter:{title:"Browser",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"React Native",permalink:"/sdks/quickstart/reactNative"},next:{title:"Electron",permalink:"/sdks/quickstart/electron"}},c={},u=[{value:"\ud83d\ude80 Using the Demo",id:"-using-the-demo",level:2},{value:"Integration Steps (Webpack5+)",id:"integration-steps-webpack5",level:2},{value:"1. Add Dependencies",id:"1-add-dependencies",level:3},{value:"2. Obtain the static resources required for wasm",id:"2-obtain-the-static-resources-required-for-wasm",level:3},{value:"3. Import SDK",id:"3-import-sdk",level:3},{value:"Integration Steps (Vite, Webpack4)",id:"integration-steps-vite-webpack4",level:2},{value:"Import SDK",id:"import-sdk",level:3},{value:"Copy the lib directory from the npm package to your project, such as: src/utils/lib",id:"copy-the-lib-directory-from-the-npm-package-to-your-project-such-as-srcutilslib",level:4},{value:"If using Webpack4, you also need to import the worker loader:",id:"if-using-webpack4-you-also-need-to-import-the-worker-loader",level:4},{value:"Modify the import method of web worker in the lib/api/index.js file.",id:"modify-the-import-method-of-web-worker-in-the-libapiindexjs-file",level:4},{value:"Importing",id:"importing",level:4}],d={toc:u},m="wrapper";function k(e){var{components:t}=e,l=a(e,["components"]);return(0,n.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,l),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-using-the-demo"},"\ud83d\ude80 Using the Demo"),(0,n.kt)("p",null,"We strongly recommend that you first run the framework-specific sample ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/openimsdk/openim-electron-demo"},"DEMO")," we have prepared for you. This will not only give you a firsthand experience of OpenIMSDK's features but will also assist you in quickly identifying and resolving issues during the actual integration process."),(0,n.kt)("h2",{id:"integration-steps-webpack5"},"Integration Steps (Webpack5+)"),(0,n.kt)("h3",{id:"1-add-dependencies"},"1. Add Dependencies"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @openim/wasm-client-sdk\n")),(0,n.kt)("h3",{id:"2-obtain-the-static-resources-required-for-wasm"},"2. Obtain the static resources required for wasm"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In the ",(0,n.kt)("inlineCode",{parentName:"p"},"node_modules")," directory at the root of your project, find the ",(0,n.kt)("inlineCode",{parentName:"p"},"@openim/wasm-client-sdk")," sub-directory and copy all files from the ",(0,n.kt)("inlineCode",{parentName:"p"},"assets")," folder to the public resources directory of your project (public).")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"File list:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"openIM.wasm\nsql-wasm.wasm\nwasm_exec.js\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"After copying, include the ",(0,n.kt)("inlineCode",{parentName:"li"},"wasm_exec.js")," file in your ",(0,n.kt)("inlineCode",{parentName:"li"},"index.html")," via the script tag.")),(0,n.kt)("h3",{id:"3-import-sdk"},"3. Import SDK"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Import SDK")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { getSDK } from '@openim/wasm-client-sdk';\n\nconst OpenIM = getSDK();\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Potential issue you might encounter\n",(0,n.kt)("img",{alt:"webpack5_error",src:r(78888).Z,width:"1752",height:"980"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Solution"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Add the following configuration in the webpack setup:")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"resolve: {\n      fallback: {\n        path: false,\n        crypto: false,\n      },\n    },\n")),(0,n.kt)("h2",{id:"integration-steps-vite-webpack4"},"Integration Steps (Vite, Webpack4)"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The first and second steps are the same as the Webpack5+ integration steps mentioned above.")),(0,n.kt)("h3",{id:"import-sdk"},"Import SDK"),(0,n.kt)("h4",{id:"copy-the-lib-directory-from-the-npm-package-to-your-project-such-as-srcutilslib"},"Copy the lib directory from the npm package to your project, such as: src/utils/lib"),(0,n.kt)("h4",{id:"if-using-webpack4-you-also-need-to-import-the-worker-loader"},"If using Webpack4, you also need to import the worker loader:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Install ",(0,n.kt)("inlineCode",{parentName:"li"},"worker-loader")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"worker-plugin"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install worker-loader worker-plugin -D\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add the following configuration in webpack:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'const WorkerPlugin = require("worker-plugin");\n\n...\nplugins: [new WorkerPlugin()]\n...\n')),(0,n.kt)("h4",{id:"modify-the-import-method-of-web-worker-in-the-libapiindexjs-file"},"Modify the import method of web worker in the lib/api/index.js file."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For Webpack4.x:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"+ import IMWorker from 'worker-loader!./worker.js';\n\n- worker = new Worker(new URL('./worker.js', import.meta.url));\n+ worker = new IMWorker();\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For Vite:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"+ import IMWorker from './worker?worker';\n\n- worker = new Worker(new URL('./worker.js', import.meta.url));\n+ worker = new IMWorker();\n")),(0,n.kt)("h4",{id:"importing"},"Importing"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The path is where the ",(0,n.kt)("inlineCode",{parentName:"p"},"lib")," was placed after copying")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { getSDK } from '@/utils/lib';\n\nconst OpenIM = getSDK();\n")))}k.isMDXComponent=!0},78888:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/webpack5_error-dabad77f698008904467d5539d3ba40e.png"}}]);