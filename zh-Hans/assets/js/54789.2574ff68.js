"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[54789,29319],{29319:(e,t,s)=>{s.r(t),s.d(t,{dyte_meeting:()=>f});var i=s(65733),n=s(1122),o=s(49179),a=s(20336),r=s(37692),d=s(85371),c=s(85114),h=s(46503),g=s(36677),l=s(24555),m=s(96633);s(49797),s(21237),s(19656),s(27637),s(60804);const f=class{constructor(e){(0,i.r)(this,e),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.roomJoinedListener=()=>{this.setStates({meeting:"joined"}),h.s.meeting="joined"},this.waitlistedListener=()=>{this.setStates({meeting:"waiting"}),h.s.meeting="waiting"},this.roomLeftListener=({state:e})=>{const t=this.states||h.s;if("disconnected"===(null==t?void 0:t.roomLeftState))return this.setStates({meeting:"ended",roomLeftState:e}),void(h.s.meeting="ended");this.setStates({meeting:"ended",roomLeftState:e}),h.s.meeting="ended",h.s.roomLeftState=e},this.mediaPermissionUpdateListener=({kind:e,message:t})=>{if(["audio","video"].includes(e)){if("ACCEPTED"===t)return;const s={enabled:!0,kind:e};this.setStates({activePermissionsMessage:s}),h.s.activePermissionsMessage=s}},this.joinStateAcceptedListener=()=>{this.setStates({activeJoinStage:!0}),this.stateUpdate.emit({activeJoinStage:!0}),h.s.activeJoinStage=!0},this.loadConfigFromPreset=!0,this.applyDesignSystem=!0,this.mode="fixed",this.leaveOnUnmount=!1,this.meeting=void 0,this.showSetupScreen=void 0,this.t=(0,a.u)(),this.config=r.d,this.iconPackUrl=void 0,this.size=void 0,this.gridLayout="row",this.states={meeting:"idle",prefs:{mirrorVideo:!0,muteNotificationSounds:!1}},this.middlewares={},this.newMeeting=void 0,this.iconPack=m.d}connectedCallback(){var e;this.resizeObserver=new g.i((()=>this.handleResize())),this.resizeObserver.observe(this.host),this.applyDesignSystem&&null!=(null===(e=this.config)||void 0===e?void 0:e.designTokens)&&"undefined"!=typeof document&&(0,n.p)(document.documentElement,this.config.designTokens),this.meetingChanged(this.meeting),this.iconPackUrlChanged(this.iconPackUrl),this.initializePreferences()}clearListeners(e){null!=e&&(e.self.removeListener("roomJoined",this.roomJoinedListener),e.self.removeListener("socketServiceRoomJoined",this.roomJoinedListener),e.meta.removeListener("socketReconnected",this.roomJoinedListener),e.self.removeListener("roomLeft",this.roomLeftListener),e.self.removeListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),e.self.removeListener("waitlisted",this.waitlistedListener),e.self.removeListener("joinStageRequestAccepted",this.joinStateAcceptedListener))}disconnectedCallback(){var e;this.leaveOnUnmount&&(null===(e=this.meeting)||void 0===e||e.leaveRoom()),this.resizeObserver.disconnect(),this.clearListeners(this.meeting)}meetingChanged(e){var t,s;if(null!=e){if(this.loadConfigFromPreset&&null!=e.self.config){const s=e.self.config,{config:i,data:o}=(0,n.g)(s,e);this.config===r.d&&(this.config=i),null==this.showSetupScreen&&(this.showSetupScreen=o.showSetupScreen),e.connectedMeetings.supportsConnectedMeetings&&(null===(t=h.s.activeBreakoutRoomsManager)||void 0===t?void 0:t.destinationMeetingId)&&(this.showSetupScreen=!1)}this.applyDesignSystem&&null!=(null===(s=this.config)||void 0===s?void 0:s.designTokens)&&"undefined"!=typeof document&&(0,n.p)(document.documentElement,this.config.designTokens),(0,l.a)(e)?e.self.addListener("socketServiceRoomJoined",this.roomJoinedListener):e.self.addListener("roomJoined",this.roomJoinedListener),e.self.addListener("waitlisted",this.waitlistedListener),e.self.addListener("roomLeft",this.roomLeftListener),e.self.addListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),e.self.addListener("joinStageRequestAccepted",this.joinStateAcceptedListener),e.connectedMeetings.supportsConnectedMeetings&&e.connectedMeetings.once("changingMeeting",this.handleChangingMeeting),e.self.roomJoined?(this.states=Object.assign(Object.assign({},this.states),{meeting:"joined"}),h.s.meeting="joined"):this.showSetupScreen&&null==this.newMeeting?(this.states=Object.assign(Object.assign({},this.states),{meeting:"setup"}),h.s.meeting="setup"):e.joinRoom()}}async iconPackUrlChanged(e){this.iconPack=await(0,o.g)(e)}listenState(e){e.stopPropagation(),this.setStates(e.detail)}initializePreferences(){const e=(0,c.g)();this.setStates({prefs:e}),h.s.prefs=e}handleChangingMeeting(e){h.s.activeBreakoutRoomsManager=Object.assign(Object.assign({},h.s.activeBreakoutRoomsManager),{destinationMeetingId:e})}handleResize(){this.size=(0,o.a)(this.host.clientWidth)}setStates(e){const t=Object.assign({},this.states);(0,n.m)(t,e),this.states=t}render(){var e,t,s;const n={meeting:null!==(e=this.newMeeting)&&void 0!==e?e:this.meeting,size:this.size,states:this.states||h.s,config:this.config,iconPack:this.iconPack,t:this.t,middlewares:this.middlewares},o={"dyte-grid":{layout:this.gridLayout}};return"CHAT"===(null===(s=null===(t=this.meeting)||void 0===t?void 0:t.meta)||void 0===s?void 0:s.viewType)?(0,i.h)(d.R,{element:"dyte-chat",defaults:n}):(0,i.h)(d.R,{element:"dyte-meeting",defaults:n,asHost:!0,elementProps:o})}get host(){return(0,i.g)(this)}static get watchers(){return{meeting:["meetingChanged"],iconPackUrl:["iconPackUrlChanged"]}}};f.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));overflow:hidden;position:fixed;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);height:100%;width:100%}:host([mode='fill']){position:relative}"},49179:(e,t,s)=>{s.d(t,{a:()=>r,g:()=>n});var i=s(96633);const n=async e=>{if(null==e)return i.d;try{const t=await fetch(e);return t.ok?Object.assign({},i.d,await t.json()):i.d}catch(t){return i.d}},o=768,a=1080,r=e=>e>=a?"lg":e>=o?"md":"sm"},46503:(e,t,s)=>{s.d(t,{o:()=>c,s:()=>d});var i=s(65733);const n=e=>!("isConnected"in e)||e.isConnected,o=((e,t)=>{let s;return(...i)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...i)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(n))}),2e3),a=e=>"function"==typeof e?e():e,r=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:d,onChange:c}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=a(e);let i=new Map(Object.entries(null!=s?s:{}));const n={dispose:[],get:[],set:[],reset:[]},o=()=>{var t;i=new Map(Object.entries(null!==(t=a(e))&&void 0!==t?t:{})),n.reset.forEach((e=>e()))},d=e=>(n.get.forEach((t=>t(e))),i.get(e)),c=(e,s)=>{const o=i.get(e);t(s,o,e)&&(i.set(e,s),n.set.forEach((t=>t(e,s,o))))},h="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>d(t),ownKeys:e=>Array.from(i.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>i.has(t),set:(e,t,s)=>(c(t,s),!0)}),g=(e,t)=>(n[e].push(t),()=>{r(n[e],t)});return{state:h,get:d,set:c,on:g,onChange:(t,s)=>{const i=g("set",((e,i)=>{e===t&&s(i)})),n=g("reset",(()=>s(a(e)[t])));return()=>{i(),n()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(g("set",t.set)),t.get&&e.push(g("get",t.get)),t.reset&&e.push(g("reset",t.reset)),t.dispose&&e.push(g("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{n.dispose.forEach((e=>e())),o()},reset:o,forceUpdate:e=>{const t=i.get(e);n.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof i.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,i.a)();s&&((e,t,s)=>{const i=e.get(t);i?i.includes(s)||i.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(i.f)),o(e)},reset:()=>{e.forEach((e=>e.forEach(i.f))),o(e)}}})()),s})({})}}]);