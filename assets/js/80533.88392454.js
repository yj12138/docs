"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[80533,56409],{56409:(t,i,o)=>{o.r(i),o.d(i,{dyte_notification:()=>s});var a=o(65733),e=o(96633),r=o(20336);const s=class{constructor(t){(0,a.r)(this,t),this.dismiss=(0,a.c)(this,"dyteNotificationDismiss",7),this.notification=void 0,this.size=void 0,this.iconPack=e.d,this.t=(0,r.u)(),this.imageState="loading"}connectedCallback(){this.notificationChanged(this.notification)}notificationChanged(t){null!=t&&"number"==typeof t.duration&&setTimeout((()=>{this.dismiss.emit(t.id)}),t.duration)}render(){return(0,a.h)(a.H,null,(0,a.h)("div",{class:"ctr"},null!=this.notification.icon&&(0,a.h)("dyte-icon",{class:"icon",icon:this.notification.icon,iconPack:this.iconPack,t:this.t}),null!=this.notification.image&&null==this.notification.icon&&"errored"!==this.imageState&&(0,a.h)("img",{src:this.notification.image,class:{loaded:"loaded"===this.imageState},onLoad:()=>this.imageState="loaded",onError:()=>this.imageState="errored"}),(0,a.h)("p",{class:"message"},this.notification.message),(0,a.h)("div",{class:"right"},null!=this.notification.button&&(0,a.h)("dyte-button",{size:"sm",variant:this.notification.button.variant,onClick:()=>this.notification.button.onClick(),iconPack:this.iconPack,t:this.t},this.notification.button.text),(0,a.h)("dyte-icon",{"aria-label":this.t("dismiss"),class:"dismiss",icon:this.iconPack.dismiss,onClick:()=>this.dismiss.emit(this.notification.id),iconPack:this.iconPack,t:this.t}))))}static get watchers(){return{notification:["notificationChanged"]}}};s.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{pointer-events:none;display:block;height:var(--dyte-space-10, 40px);color:rgb(var(--dyte-colors-text-1000, 255 255 255));-webkit-animation:show 0.4s ease;animation:show 0.4s ease;transition:0.4s;z-index:100}.ctr{box-sizing:border-box;display:inline-flex;height:100%;min-width:var(--dyte-space-40, 160px);align-items:center;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:rgb(var(--dyte-colors-background-1000, 8 8 8));--tw-shadow:var(--tw-shadow-colored);pointer-events:auto}img{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-0, 0px);width:var(--dyte-space-0, 0px);border-radius:9999px}img.loaded{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}.message{margin-right:var(--dyte-space-3, 12px)}dyte-icon.icon{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}dyte-icon.dismiss{margin-left:auto;height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);border-radius:var(--dyte-border-radius-md, 8px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}dyte-icon.dismiss:hover{cursor:pointer;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}dyte-icon.dismiss{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}dyte-button{margin-left:var(--dyte-space-4, 16px);margin-right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px)}.right{margin-left:auto;display:flex;align-items:center}.right>*{margin-left:var(--dyte-space-2, 8px)}.right>*:first-child{margin-left:var(--dyte-space-0, 0px)}:host(.exit){-webkit-animation:exit 0.4s ease;animation:exit 0.4s ease}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-120px)}100%{opacity:1;transform:translateX(0px)}}@keyframes show{0%{opacity:0;transform:translateX(-120px)}100%{opacity:1;transform:translateX(0px)}}@-webkit-keyframes exit{0%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(-120px)}}@keyframes exit{0%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(-120px)}}:host([size='sm']){font-size:14px}"}}]);