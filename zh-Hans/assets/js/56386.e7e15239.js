"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[56386,28327],{28327:(e,t,s)=>{s.r(t),s.d(t,{dyte_mute_all_confirmation:()=>r});var a=s(65733),o=s(20336),n=s(96633),i=s(46503);const r=class{constructor(e){(0,a.r)(this,e),this.stateUpdate=(0,a.c)(this,"dyteStateUpdate",7),this.onClose=()=>{this.stateUpdate.emit({activeMuteAllConfirmation:!1}),i.s.activeMuteAllConfirmation=!1},this.onMuteAll=()=>{var e;null===(e=this.meeting)||void 0===e||e.participants.disableAllAudio(this.allowUnmute),this.onClose()},this.meeting=void 0,this.states=void 0,this.iconPack=n.d,this.t=(0,o.u)(),this.allowUnmute=!0}render(){return(0,a.h)(a.H,null,(0,a.h)("div",{class:"leave-modal"},(0,a.h)("div",{class:"header"},(0,a.h)("h2",{class:"title"},this.t("mute_all.header"))),(0,a.h)("p",{class:"message"},this.t("mute_all.description")),(0,a.h)("div",{class:"content"},(0,a.h)("div",{class:"leave-meeting"},(0,a.h)("dyte-button",{variant:"secondary",title:this.t("close"),onClick:this.onClose,iconPack:this.iconPack,t:this.t},this.t("cancel")),(0,a.h)("dyte-button",{variant:"danger",title:this.t("mute_all"),onClick:this.onMuteAll,iconPack:this.iconPack,t:this.t},this.t("mute_all"))))))}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block;-webkit-user-select:none;-moz-user-select:none;user-select:none}.leave-modal{position:relative;display:flex;flex-direction:column;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));padding:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.leave-modal .header h2{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}.leave-modal .content{font-size:14px}.leave-message p{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px)}.leave-meeting{display:flex;flex-direction:row;justify-content:space-between;gap:var(--dyte-space-2, 8px)}.leave-meeting dyte-button{flex:1 1 0%}.end-meeting{margin-top:var(--dyte-space-2, 8px)}.message{margin-bottom:var(--dyte-space-4, 16px)}label{display:flex;align-items:center}input[type='checkbox']{margin-right:var(--dyte-space-2, 8px);accent-color:rgb(var(--dyte-colors-brand-500, 33 96 253))}"},46503:(e,t,s)=>{s.d(t,{o:()=>l,s:()=>c});var a=s(65733);const o=e=>!("isConnected"in e)||e.isConnected,n=((e,t)=>{let s;return(...a)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...a)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(o))}),2e3),i=e=>"function"==typeof e?e():e,r=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:c,onChange:l}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=i(e);let a=new Map(Object.entries(null!=s?s:{}));const o={dispose:[],get:[],set:[],reset:[]},n=()=>{var t;a=new Map(Object.entries(null!==(t=i(e))&&void 0!==t?t:{})),o.reset.forEach((e=>e()))},c=e=>(o.get.forEach((t=>t(e))),a.get(e)),l=(e,s)=>{const n=a.get(e);t(s,n,e)&&(a.set(e,s),o.set.forEach((t=>t(e,s,n))))},d="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>c(t),ownKeys:e=>Array.from(a.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>a.has(t),set:(e,t,s)=>(l(t,s),!0)}),p=(e,t)=>(o[e].push(t),()=>{r(o[e],t)});return{state:d,get:c,set:l,on:p,onChange:(t,s)=>{const a=p("set",((e,a)=>{e===t&&s(a)})),o=p("reset",(()=>s(i(e)[t])));return()=>{a(),o()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(p("set",t.set)),t.get&&e.push(p("get",t.get)),t.reset&&e.push(p("reset",t.reset)),t.dispose&&e.push(p("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{o.dispose.forEach((e=>e())),n()},reset:n,forceUpdate:e=>{const t=a.get(e);o.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof a.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,a.a)();s&&((e,t,s)=>{const a=e.get(t);a?a.includes(s)||a.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(a.f)),n(e)},reset:()=>{e.forEach((e=>e.forEach(a.f))),n(e)}}})()),s})({})}}]);