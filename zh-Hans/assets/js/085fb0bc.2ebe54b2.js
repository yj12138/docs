"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[59421],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=u(n),k=r,g=s["".concat(i,".").concat(k)]||s[k]||d[k]||l;return n?a.createElement(g,p(p({ref:e},m),{},{components:n})):a.createElement(g,p({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[s]="string"==typeof t?t:r,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},96618:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>s});n(67294);var a=n(3905);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:2},i="createGroup",u={unversionedId:"api/group/createGroup",id:"api/group/createGroup",title:"createGroup",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/api/group/createGroup.mdx",sourceDirName:"api/group",slug:"/api/group/createGroup",permalink:"/zh-Hans/sdks/api/group/createGroup",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/group/createGroup.mdx",tags:[],version:"current",lastUpdatedAt:1730812373,formattedLastUpdatedAt:"2024\u5e7411\u67085\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"setGroupListener",permalink:"/zh-Hans/sdks/api/group/setGroupListener"},next:{title:"joinGroup",permalink:"/zh-Hans/sdks/api/group/joinGroup"}},m={},s=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-1",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-1",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-1",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-1",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-2",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-2",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-2",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-2",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-3",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-3",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-3",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-3",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-4",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-4",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-4",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-4",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-5",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-5",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-5",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-5",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-6",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-6",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-6",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-6",level:3}],d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},k=d("Tabs"),g=d("TabItem"),N={toc:s},c="wrapper";function b(t){var{components:e}=t,n=p(t,["components"]);return(0,a.kt)(c,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){r(t,e,n[e])}))}return t}({},N,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creategroup"},"createGroup"),(0,a.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,a.kt)("admonition",{title:"\u8bf4\u660e",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\uff081\uff09\u521b\u5efa\u8005\u4e3a\u7fa4\u4e3b\u8eab\u4efd\u521b\u5efa\u7fa4\u7ec4\uff0c\u5e76\u6307\u5b9a\u7fa4\u7ba1\u7406\u5458\u548c\u7fa4\u666e\u901a\u6210\u5458\uff0c\u6210\u529f\u540e\uff0c\u6240\u6709\u6210\u5458\u7acb\u523b\u5165\u7fa4\uff1b",(0,a.kt)("br",{parentName:"p"}),"\n","\uff082\uff09\u7fa4\u6210\u5458\u5efa\u8bae\u4e00\u6b21\u6700\u5927 1000 \u4e2a\uff0c\u56e0\u4e3a\u6570\u91cf\u8fc7\u591a\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6570\u636e\u5305\u592a\u5927\u88ab\u540e\u53f0\u62d2\u7edd\u3002")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\uff081\uff09\u5982\u679c\u6307\u5b9a groupID\uff0c\u5219 groupID \u4e0d\u80fd\u91cd\u590d\uff1b",(0,a.kt)("br",{parentName:"p"}),"\n","\uff082\uff09\u5982\u679c\u4e0d\u6307\u5b9a groupID\uff0c\u670d\u52a1\u7aef\u4f1a\u751f\u6210\u552f\u4e00\u7684 groupID\u3002  "),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u76f8\u5173\u56de\u8c03"),":",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"../../callback/onJoinedGroupAdded"},"onJoinedGroupAdded"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"../../callback/onGroupMemberAdded"},"onGroupMemberAdded")," ")),(0,a.kt)(k,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/Electron/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"},{label:"Unity",value:"Unity"}],mdxType:"Tabs"},(0,a.kt)(g,{value:"Flutter",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"Future<GroupInfo> createGroup({\n    required GroupInfo groupInfo,\n    List<String> memberUserIDs = const [],\n    List<String> adminUserIDs = const [],\n    String? ownerUserID,\n    String? operationID,\n  })\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupInfo"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupInfo"},"GroupInfo")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"memberUserIDs"),(0,a.kt)("td",{parentName:"tr",align:null},"List<String",">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9080\u8bf7\u8fdb\u5165\u7684\u7fa4\u6210\u5458\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"adminUserIDs"),(0,a.kt)("td",{parentName:"tr",align:null},"List<String",">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9080\u8bf7\u8fdb\u5165\u5e76\u8bbe\u4e3a\u7ba1\u7406\u5458\u7684\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4e3b")))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"~"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupInfo"},"GroupInfo")),(0,a.kt)("td",{parentName:"tr",align:null},"\u6210\u529f\u8fd4\u56de")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"    final groupInfo = await OpenIM.iMManager.groupManager.createGroup(\n        groupInfo: GroupInfo(\n             groupID: '',\n             groupName: groupName,\n             faceURL: faceURL,\n             groupType: GroupType.work,\n        ),\n        memberUserIDs: allList.where((e) => e.userID != OpenIM.iMManager.userID)\n                                          .map((e) => e.userID!)\n                                          .toList(),\n     );\n    // todo\n"))),(0,a.kt)(g,{value:"iOS",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-1"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n- (void)createGroup:(OIMGroupCreateInfo *)groupCreateInfo\n          onSuccess:(nullable OIMGroupInfoCallback)onSuccess\n          onFailure:(nullable OIMFailureCallback)onFailure;\n\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-1"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupCreateInfo"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupInfo"},"OIMGroupCreateInfo")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u7fa4\u7684\u521d\u59cb\u5316\u4fe1\u606f")))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-1"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onSuccess"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupInfo"},"OIMGroupInfo")),(0,a.kt)("td",{parentName:"tr",align:null},"\u6210\u529f\u8fd4\u56de")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onFailure"),(0,a.kt)("td",{parentName:"tr",align:null},"OIMFailureCallback"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5931\u8d25\u8fd4\u56de")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-1"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},'\nOIMGroupCreateInfo *group = [OIMGroupCreateInfo new];\ngroup.groupName = @"";\ngroup.introduction = @"";\n\n[OIMManager.manager createGroup:group\n                      onSuccess:^(OIMGroupInfo * _Nullable groupInfo) {\n} onFailure:^(NSInteger code, NSString * _Nullable msg) {\n}];\n\n'))),(0,a.kt)(g,{value:"Android",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-2"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"\n    public void createGroup(List<String> memberUserIDs, List<String> adminUserIDs,\n                            GroupInfo groupInfo, String ownerUserID, OnBase<GroupInfo> callBack)\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-2"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupInfo"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupInfo"},"GroupInitInfo")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7fa4\u804a\u57fa\u7840\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"memberUserIDs"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9080\u8bf7\u8fdb\u5165\u7684\u7fa4\u6210\u5458\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"adminUserIDs"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9080\u8bf7\u8fdb\u5165\u5e76\u8bbe\u4e3a\u7ba1\u7406\u5458\u7684\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4e3b ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callBack"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onBase"},"OnBase"),"<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupInfo"},"GroupInfo"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u56de\u8c03\u63a5\u53e3")))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-2"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-2"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"\nOpenIMClient.getInstance().groupManager.createGroup(memberUserIDs,  adminUserIDs,\n     groupInfo,  ownerUserID,  new OnBase<String>() {\n    @Override\n    public void onError(int code, String error) {\n\n    }\n\n    @Override\n    public void onSuccess(String data) {\n\n    }\n});\n\n"))),(0,a.kt)(g,{value:"Web",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-3"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.createGroup({\n  groupInfo:Partial<GroupItem>,\n  memberUserIDs: string[],\n  adminUserIDs?: string[],\n  ownerUserID?: string\n}, operationID?: string): Promise<WsResponse<GroupItem>>\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-3"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupInfo"),(0,a.kt)("td",{parentName:"tr",align:null},"Partial<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupInfo"},"GroupItem"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7fa4\u804a\u57fa\u7840\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"memberUserIDs"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9080\u8bf7\u8fdb\u5165\u7684\u7fa4\u6210\u5458\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"adminUserIDs"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9080\u8bf7\u8fdb\u5165\u5e76\u8bbe\u4e3a\u7ba1\u7406\u5458\u7684\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4e3b ID")))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-3"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<WsResponse<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupInfo"},"GroupItem"),">>"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u6210\u529f\u56de\u8c03")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"WsResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-3"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK } from '@openim/wasm-client-sdk';\nconst IMSDK = getSDK();\n\n// use in electron with ffi\n// import { getWithRenderProcess } from '@openim/electron-client-sdk/lib/render';\n// const { instance: IMSDK } = getWithRenderProcess();\n\n// use in mini program\n// import { OpenIMSDK } from 'open-im-sdk';\n// const IMSDK = new OpenIMSDK();\n\nIMSDK.createGroup({\n  groupInfo: {\n    groupName: '',\n    groupType: 2,\n  },\n  memberUserIDs: [''],\n})\n  .then(() => {\n    // \u8c03\u7528\u6210\u529f\n  })\n  .catch(({ errCode, errMsg }) => {\n    // \u8c03\u7528\u5931\u8d25\n  });\n"))),(0,a.kt)(g,{value:"uni-app",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-4"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.asyncApi('createGroup', operationID: string, {\n  groupInfo: Partial<GroupItem>,\n  memberUserIDs: string[],\n  adminUserIDs?: string[],\n  ownerUserID?: string\n}): Promise<GroupItem>\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-4"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operationID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c ID\uff0c\u7528\u4e8e\u5b9a\u4f4d\u95ee\u9898\uff0c\u4fdd\u6301\u552f\u4e00\uff0c\u5efa\u8bae\u7528\u5f53\u524d\u65f6\u95f4\u548c\u968f\u673a\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupInfo"),(0,a.kt)("td",{parentName:"tr",align:null},"Partial<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupInfo"},"GroupItem"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7fa4\u804a\u57fa\u7840\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"memberUserIDs"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9080\u8bf7\u8fdb\u5165\u7684\u7fa4\u6210\u5458\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"adminUserIDs"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9080\u8bf7\u8fdb\u5165\u5e76\u8bbe\u4e3a\u7ba1\u7406\u5458\u7684\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4e3b ID")))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-4"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"openim-uniapp-polyfill"),"\u5305\u5c06\u51fd\u6570 Promise \u5316\uff0c\u8c03\u7528\u65f6\u9700\u8981\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"then"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),"\u5224\u65ad\u5e76\u5904\u7406\u6210\u529f\u548c\u5931\u8d25\u56de\u8c03\u3002")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupInfo"},"GroupItem"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u6210\u529f\u56de\u8c03")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"CatchResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-4"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.asyncApi('createGroup', IMSDK.uuid(), {\n  groupInfo: {\n    groupName: '',\n    groupType: 2,\n  },\n  memberUserIDs: [''],\n})\n  .then((data) => {\n    // \u8c03\u7528\u6210\u529f\n  })\n  .catch(({ errCode, errMsg }) => {\n    // \u8c03\u7528\u5931\u8d25\n  });\n"))),(0,a.kt)(g,{value:"React-Native",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-5"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"OpenIMSDKRN.createGroup({\n  groupInfo: Partial<GroupItem>,\n  memberUserIDs: string[],\n  adminUserIDs?: string[],\n  ownerUserID?: string\n}, operationID: string): Promise<GroupItem>\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-5"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupInfo"),(0,a.kt)("td",{parentName:"tr",align:null},"Partial<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupInfo"},"GroupItem"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7fa4\u804a\u57fa\u7840\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"memberUserIDs"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9080\u8bf7\u8fdb\u5165\u7684\u7fa4\u6210\u5458\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"adminUserIDs"),(0,a.kt)("td",{parentName:"tr",align:null},"string[]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9080\u8bf7\u8fdb\u5165\u5e76\u8bbe\u4e3a\u7ba1\u7406\u5458\u7684\u5217\u8868")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4e3b ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operationID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c ID\uff0c\u7528\u4e8e\u5b9a\u4f4d\u95ee\u9898\uff0c\u4fdd\u6301\u552f\u4e00\uff0c\u5efa\u8bae\u7528\u5f53\u524d\u65f6\u95f4\u548c\u968f\u673a\u6570")))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-5"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupInfo"},"GroupItem"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u6210\u529f\u56de\u8c03")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,a.kt)("td",{parentName:"tr",align:null},"Promise<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"CatchResponse"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-5"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import OpenIMSDKRN from \"open-im-sdk-rn\";\n\nOpenIMSDKRN.createGroup({\n  groupInfo: {\n    groupName: '',\n    groupType: 2,\n  },\n  memberUserIDs: [''],\n}, 'operationID')\n  .then((data) => {\n    // \u8c03\u7528\u6210\u529f\n  })\n  .catch(({ errCode, errMsg }) => {\n    // \u8c03\u7528\u5931\u8d25\n  });\n"))),(0,a.kt)(g,{value:"Unity",mdxType:"TabItem"},(0,a.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-6"},"\u51fd\u6570\u539f\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},"\npublic static void CreateGroup(OnBase<GroupInfo> cb, CreateGroupReq groupReqInfo)\n\n")),(0,a.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-6"},"\u8f93\u5165\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cb"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/callback/onBase"},"OnBase"),"<",(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/groupInfo"},"GroupInfo"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u56de\u8c03")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groupReqInfo"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/group/CreateGroupReq"},"CreateGroupReq")),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5efa\u7fa4\u53c2\u6570")))),(0,a.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-6"},"\u8fd4\u56de\u7ed3\u679c"),(0,a.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-6"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#",metastring:"showLineNumbers",showLineNumbers:!0},'\nIMSDK.CreateGroup((groupInfo,errCode,errMsg)=>{\n    \n},new CreateGroupReq(){\n    MemberUserIDs={""},\n    GroupInfo = groupInfo,\n    AdminUserIDs = {},\n    OwnerUserID = "",\n});\n\n\n')))))}b.isMDXComponent=!0}}]);