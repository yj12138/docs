"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[36746],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(r),g=a,k=s["".concat(o,".").concat(g)]||s[g]||d[g]||l;return r?n.createElement(k,i(i({ref:t},m),{},{components:r})):n.createElement(k,i({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},25132:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>s});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={sidebar_position:14,toc_min_heading_level:2,toc_max_heading_level:2},o="getSpecifiedGroupMembersInfo",u={unversionedId:"api/group/getSpecifiedGroupMembersInfo",id:"api/group/getSpecifiedGroupMembersInfo",title:"getSpecifiedGroupMembersInfo",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/api/group/getSpecifiedGroupMembersInfo.mdx",sourceDirName:"api/group",slug:"/api/group/getSpecifiedGroupMembersInfo",permalink:"/sdks/api/group/getSpecifiedGroupMembersInfo",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/group/getSpecifiedGroupMembersInfo.mdx",tags:[],version:"current",lastUpdatedAt:1730812373,formattedLastUpdatedAt:"Nov 5, 2024",sidebarPosition:14,frontMatter:{sidebar_position:14,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"getGroupMemberList",permalink:"/sdks/api/group/getGroupMemberList"},next:{title:"searchGroupMembers",permalink:"/sdks/api/group/searchGroupMembers"}},m={},s=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Function Prototype",id:"function-prototype",level:3},{value:"Input Parameters",id:"input-parameters",level:3},{value:"Return Values",id:"return-values",level:3},{value:"Code Example",id:"code-example",level:3},{value:"Function Prototype",id:"function-prototype-1",level:3},{value:"Input Parameters",id:"input-parameters-1",level:3},{value:"Return Values",id:"return-values-1",level:3},{value:"Code Example",id:"code-example-1",level:3},{value:"Function Prototype",id:"function-prototype-2",level:3},{value:"Input Parameters",id:"input-parameters-2",level:3},{value:"Return Values",id:"return-values-2",level:3},{value:"Code Example",id:"code-example-2",level:3},{value:"Function Prototype",id:"function-prototype-3",level:3},{value:"Input Parameters",id:"input-parameters-3",level:3},{value:"Return Values",id:"return-values-3",level:3},{value:"Code Example",id:"code-example-3",level:3},{value:"Function Prototype",id:"function-prototype-4",level:3},{value:"Input Parameters",id:"input-parameters-4",level:3},{value:"Return Values",id:"return-values-4",level:3},{value:"Code Example",id:"code-example-4",level:3},{value:"Function Prototype",id:"function-prototype-5",level:3},{value:"Input Parameters",id:"input-parameters-5",level:3},{value:"Return Result",id:"return-result",level:3},{value:"Code Example",id:"code-example-5",level:3},{value:"Function Prototype",id:"function-prototype-6",level:3},{value:"Input Parameter",id:"input-parameter",level:3},{value:"Return Result",id:"return-result-1",level:3},{value:"Code Example",id:"code-example-6",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},g=d("Tabs"),k=d("TabItem"),c={toc:s},N="wrapper";function b(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(N,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},c,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getspecifiedgroupmembersinfo"},"getSpecifiedGroupMembersInfo"),(0,n.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Retrieve information of specified group members.")),(0,n.kt)("admonition",{title:"Warning",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"(1) The caller must be a member of the group to call this function.\n(2) It is recommended to limit the member list to a maximum of 10,000 at a time.")),(0,n.kt)(g,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,n.kt)(k,{value:"Flutter",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"Future<List<GroupMembersInfo>> getGroupMembersInfo({\n    required String groupID,\n    required List<String> userIDList,\n    String? operationID,\n  })\n")),(0,n.kt)("h3",{id:"input-parameters"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Group ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userIDList"),(0,n.kt)("td",{parentName:"tr",align:null},"List<String",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Member ID List")))),(0,n.kt)("h3",{id:"return-values"},"Return Values"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"~"),(0,n.kt)("td",{parentName:"tr",align:null},"List<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/group/groupMemberInfo"},"GroupMembersInfo"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Successful Return")))),(0,n.kt)("h3",{id:"code-example"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"    List<GroupMembersInfo> list = await OpenIM.iMManager.groupManager.getGroupMembersInfo(\n      groupID: 'groupID',\n      userIDList: ['1129'],\n    );\n    // todo\n"))),(0,n.kt)(k,{value:"iOS",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-1"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n- (void)getSpecifiedGroupMembersInfo:(NSString *)groupID\n                             usersID:(NSArray <NSString *> *)usersID\n                           onSuccess:(nullable OIMGroupMembersInfoCallback)onSuccess\n                           onFailure:(nullable OIMFailureCallback)onFailure;\n\n")),(0,n.kt)("h3",{id:"input-parameters-1"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Group ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"usersID"),(0,n.kt)("td",{parentName:"tr",align:null},"NSArray <NSString*>"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Member ID List")))),(0,n.kt)("h3",{id:"return-values-1"},"Return Values"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onSuccess"),(0,n.kt)("td",{parentName:"tr",align:null},"NSArray< ",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/group/groupMemberInfo"},"OIMGroupMemberInfo")," ","*",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Successful Return")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"onFailure"),(0,n.kt)("td",{parentName:"tr",align:null},"OIMFailureCallback"),(0,n.kt)("td",{parentName:"tr",align:null},"Failed Return")))),(0,n.kt)("h3",{id:"code-example-1"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},'\n[OIMManager.manager getSpecifiedGroupMembersInfo:@""\n                                         usersID:@[]\n                                       onSuccess:^(NSArray<OIMGroupMemberInfo *> * _Nullable groupMembersInfo) {\n} onFailure:^(NSInteger code, NSString * _Nullable msg) {\n}];\n\n'))),(0,n.kt)(k,{value:"Android",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-2"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"\n public void getGroupMembersInfo(OnBase<List<GroupMembersInfo>> callBack, String groupId, List<String> uidList)\n\n")),(0,n.kt)("h3",{id:"input-parameters-2"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callBack"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/callback/onBase"},"OnBase"),"<List<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/group/groupMemberInfo"},"GroupMembersInfo"),">>"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback Interface")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupId"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Group ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"uidList"),(0,n.kt)("td",{parentName:"tr",align:null},"List<String",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Member ID List")))),(0,n.kt)("h3",{id:"return-values-2"},"Return Values"),(0,n.kt)("h3",{id:"code-example-2"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"\n OpenIMClient.getInstance().groupManager.getGroupMembersInfo(new OnBase<List<GroupMembersInfo>>() {\n            @Override\n            public void onError(int code, String error) {\n\n            }\n\n            @Override\n            public void onSuccess(List<GroupMembersInfo> data) {\n\n            }\n        },groupId,uidList)\n\n\n"))),(0,n.kt)(k,{value:"Web",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-3"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.getSpecifiedGroupMembersInfo({\n  groupID: string;\n  userIDList: string[];\n}, operationID?: string): Promise<WsResponse<GroupMemberItem[]>>\n")),(0,n.kt)("h3",{id:"input-parameters-3"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Group ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userIDList"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Member ID List")))),(0,n.kt)("h3",{id:"return-values-3"},"Return Values"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<WsResponse<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/group/groupMemberInfo"},"GroupMemberItem"),"[]>",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Group Members List")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/response"},"WsResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Failed Callback")))),(0,n.kt)("h3",{id:"code-example-3"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK } from '@openim/wasm-client-sdk';\nconst IMSDK = getSDK();\n\n// use in electron with ffi\n// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';\n// const { instance: IMSDK } = getWithRenderProcess();\n\n// use in mini program\n// import { OpenIMSDK } from 'open-im-sdk';\n// const IMSDK = new OpenIMSDK();\n\nIMSDK.getSpecifiedGroupMembersInfo({\n  groupID: '',\n  userIDList: ['userID'],\n})\n  .then(({ data }) => {\n    // Call Successful\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Call Failed\n  });\n"))),(0,n.kt)(k,{value:"uni-app",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-4"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.asyncApi('getSpecifiedGroupMembersInfo', operationID: string, {\n  groupID: string;\n  userIDList: string[];\n}): Promise<GroupMemberItem[]>\n")),(0,n.kt)("h3",{id:"input-parameters-4"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Operation ID, for troubleshooting, unique. Recommended to use the current time and a random number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Group ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userIDList"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"List of group member IDs")))),(0,n.kt)("h3",{id:"return-values-4"},"Return Values"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The function is made into a Promise through the ",(0,n.kt)("inlineCode",{parentName:"p"},"openim-uniapp-polyfill")," package. When calling, use ",(0,n.kt)("inlineCode",{parentName:"p"},"then")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"catch")," to judge and handle successful and failed callbacks.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/group/groupMemberInfo"},"GroupMemberItem"),"[]",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Group Members List")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/response"},"CatchResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Failed Callback")))),(0,n.kt)("h3",{id:"code-example-4"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.asyncApi('getSpecifiedGroupMembersInfo', IMSDK.uuid(), {\n  groupID: '',\n  userIDList: ['userID'],\n})\n  .then((data) => {\n    // Call Successful\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Call Failed\n  });\n"))),(0,n.kt)(k,{value:"React-Native",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-5"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"OpenIMSDKRN.getSpecifiedGroupMembersInfo({\n  groupID: string,\n  userIDList: string[], \n}, operationID: string): Promise<GroupMemberItem[]>\n")),(0,n.kt)("h3",{id:"input-parameters-5"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Group ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userIDList"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"List of group member IDs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Operation ID, used for problem location, keep unique, suggest using current time and random number")))),(0,n.kt)("h3",{id:"return-result"},"Return Result"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/group/groupMemberInfo"},"GroupMemberItem"),"[]",">"),(0,n.kt)("td",{parentName:"tr",align:null},"Group memberlist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/response"},"CatchResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback on failed call")))),(0,n.kt)("h3",{id:"code-example-5"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import OpenIMSDKRN from \"open-im-sdk-rn\";\n\nOpenIMSDKRN.getSpecifiedGroupMembersInfo({\n  groupID: '',\n  userIDList: ['userID'],\n}, 'operationID')\n  .then((data) => {\n    // Call Successful\n  })\n  .catch(({ errCode, errMsg }) => {\n    // Call Failed\n  });\n"))),(0,n.kt)(k,{value:"Unity",mdxType:"TabItem"},(0,n.kt)("h3",{id:"function-prototype-6"},"Function Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"\npublic static void GetSpecifiedGroupMembersInfo(OnBase<List<GroupMember>> cb, string groupId, string[] userIdList)\n\n")),(0,n.kt)("h3",{id:"input-parameter"},"Input Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cb"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/sdks/callback/onBase"},"OnBase"),"<List<",(0,n.kt)("a",{parentName:"td",href:"/sdks/class/group/groupMemberInfo"},"GroupMembersInfo"),">>"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Callback")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupId"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Group ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userIDList"),(0,n.kt)("td",{parentName:"tr",align:null},"string[]"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Array of group member IDs")))),(0,n.kt)("h3",{id:"return-result-1"},"Return Result"),(0,n.kt)("h3",{id:"code-example-6"},"Code Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"\nIMSDK.GetSpecifiedGroupMembersInfo((list,errCode,errMsg)=>{\n\n},groupId,userIdList);\n\n")))))}b.isMDXComponent=!0}}]);