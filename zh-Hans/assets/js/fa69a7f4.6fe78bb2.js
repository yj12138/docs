"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[36798],{42469:e=>{e.exports=JSON.parse('{"pluginId":"guides","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"OpenIM","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u4ea7\u54c1\u4ecb\u7ecd","href":"/zh-Hans/guides/introduction/product","docId":"introduction/product"}],"href":"/zh-Hans/guides/introduction/"},{"type":"category","label":"\u5feb\u901f\u5f00\u59cb","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u73af\u5883\u548c\u7ec4\u4ef6","href":"/zh-Hans/guides/gettingStarted/env-comp","docId":"gettingStarted/env-comp"},{"type":"link","label":"\u6e90\u7801\u90e8\u7f72","href":"/zh-Hans/guides/gettingStarted/imSourceCodeDeployment","docId":"gettingStarted/imSourceCodeDeployment"},{"type":"link","label":"docker\u90e8\u7f72","href":"/zh-Hans/guides/gettingStarted/dockerCompose","docId":"gettingStarted/dockerCompose"},{"type":"link","label":"\u76d1\u63a7\u53ca\u544a\u8b66","href":"/zh-Hans/guides/gettingStarted/admin","docId":"gettingStarted/admin"},{"type":"link","label":"\u5feb\u901f\u9a8c\u8bc1","href":"/zh-Hans/guides/gettingStarted/quickTestServer","docId":"gettingStarted/quickTestServer"},{"type":"link","label":"Nginx\u57df\u540d\u914d\u7f6e","href":"/zh-Hans/guides/gettingStarted/nginxDomainConfig","docId":"gettingStarted/nginxDomainConfig"},{"type":"link","label":"k8s\u90e8\u7f72-\u5f85\u5b8c\u5584","href":"/zh-Hans/guides/gettingStarted/k8s-deployment","docId":"gettingStarted/k8s-deployment"},{"type":"link","label":"oimws\u90e8\u7f72 -\u8ba1\u5212\u5e9f\u5f03","href":"/zh-Hans/guides/gettingStarted/jssdk","docId":"gettingStarted/jssdk"}]},{"type":"link","label":"\u538b\u6d4b\u62a5\u544a","href":"/zh-Hans/guides/pressure_test","docId":"pressure_test"},{"type":"link","label":"\u538b\u529b\u53ca\u53ef\u9760\u6027\u6d4b\u8bd5\u62a5\u544a","href":"/zh-Hans/guides/benchmark_test","docId":"benchmark_test"}]},"docs":{"benchmark_test":{"id":"benchmark_test","title":"\u538b\u529b\u53ca\u53ef\u9760\u6027\u6d4b\u8bd5\u62a5\u544a","description":"\u80cc\u666f","sidebar":"tutorialSidebar"},"gettingStarted/admin":{"id":"gettingStarted/admin","title":"\u76d1\u63a7\u53ca\u544a\u8b66","description":"\u7ec4\u4ef6\u8bf4\u660e","sidebar":"tutorialSidebar"},"gettingStarted/dockerCompose":{"id":"gettingStarted/dockerCompose","title":"docker\u90e8\u7f72","description":"\u73af\u5883\u51c6\u5907 \ud83c\udf0d","sidebar":"tutorialSidebar"},"gettingStarted/env-comp":{"id":"gettingStarted/env-comp","title":"\u73af\u5883\u548c\u7ec4\u4ef6","description":"\ud83c\udf10 \u73af\u5883\u8981\u6c42","sidebar":"tutorialSidebar"},"gettingStarted/imSourceCodeDeployment":{"id":"gettingStarted/imSourceCodeDeployment","title":"\u6e90\u7801\u90e8\u7f72","description":"1. \u73af\u5883\u53ca\u7ec4\u4ef6\u8981\u6c42","sidebar":"tutorialSidebar"},"gettingStarted/jssdk":{"id":"gettingStarted/jssdk","title":"oimws\u90e8\u7f72 -\u8ba1\u5212\u5e9f\u5f03","description":"OpenIM \u7684\u4e24\u4e2a\u7248\u672c JSSDK","sidebar":"tutorialSidebar"},"gettingStarted/k8s-deployment":{"id":"gettingStarted/k8s-deployment","title":"k8s\u90e8\u7f72-\u5f85\u5b8c\u5584","description":"OpenIM\u652f\u6301\u591a\u79cd\u96c6\u7fa4\u90e8\u7f72\u65b9\u6cd5\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8ehelm\u3001sealos\u3001kustomize\u3002","sidebar":"tutorialSidebar"},"gettingStarted/nginxDomainConfig":{"id":"gettingStarted/nginxDomainConfig","title":"Nginx\u57df\u540d\u914d\u7f6e","description":"1. \u524d\u7f6e\u6761\u4ef6 \ud83d\udee0\ufe0f","sidebar":"tutorialSidebar"},"gettingStarted/quickTestServer":{"id":"gettingStarted/quickTestServer","title":"\u5feb\u901f\u9a8c\u8bc1","description":"\ud83d\udccc \u4e00\u3001\u90e8\u7f72\u670d\u52a1\u7aef","sidebar":"tutorialSidebar"},"introduction/index":{"id":"introduction/index","title":"OpenIM","description":"\u81ea OpenIM \u6210\u7acb\u4e4b\u65e5\u8d77\uff0c\u6211\u4eec\u59cb\u7ec8\u4ee5\u201c\u5f00\u6e90\u201d\u4e3a\u6838\u5fc3\u9a71\u52a8\u529b\u3002\u8fd9\u4e0d\u4ec5\u5f70\u663e\u4e86\u4e92\u8054\u7f51\u81ea\u7531\u3001\u5e73\u7b49\u4e0e\u5206\u4eab\u7684\u7cbe\u795e\uff0c\u4e5f\u662f\u5bf9\u5168\u7403\u6570\u636e\u5b89\u5168\u6311\u6218\u7684\u6709\u529b\u56de\u5e94\u3002","sidebar":"tutorialSidebar"},"introduction/product":{"id":"introduction/product","title":"\u4ea7\u54c1\u4ecb\u7ecd","description":"\u4e0d\u540c\u4e8e WeChat\u3001Slack\u7b49\u72ec\u7acb\u804a\u5929\u5e94\u7528\uff0cOpenIM\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u4e00\u5957\u5f00\u6e90\u5373\u65f6\u901a\u8bafSDK\u3002","sidebar":"tutorialSidebar"},"pressure_test":{"id":"pressure_test","title":"\u538b\u6d4b\u62a5\u544a","description":"\u6d4b\u8bd5\u76ee\u7684","sidebar":"tutorialSidebar"}}}')}}]);