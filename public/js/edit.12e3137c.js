"use strict";(self["webpackChunkgps_leaflet"]=self["webpackChunkgps_leaflet"]||[]).push([[922],{4385:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var o=n(6252),l=n(2262),a=n(9963),r=n(3577),i=n(4642),u=n(6086),s=n(1528),c=n(6673),d=n(7037),p=n(7695),f=n(9665),m=n(875),g=n(1929),v=n(9483),y=n(1316),h=n(9084),b=n(6533),w=n(6719),x=n(8676),k=n(5228),S=n(3099);const W=(0,b.U)({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...(0,g.B)({origin:"center center",scrollStrategy:"block",transition:{component:f.v},zIndex:2400})},"VDialog"),V=(0,w.ev)()({name:"VDialog",props:W(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=(0,y.z)(e,"modelValue"),{scopeId:r}=(0,h.a)(),i=(0,l.iH)();function u(e){const t=e.relatedTarget,n=e.target;if(t!==n&&i.value?.contentEl&&i.value?.globalTop&&![document,i.value.contentEl].includes(n)&&!i.value.contentEl.contains(n)){const e=(0,x.ef)(i.value.contentEl);if(!e.length)return;const n=e[0],o=e[e.length-1];t===n?o.focus():n.focus()}}k.BR&&(0,o.YP)((()=>a.value&&e.retainFocus),(e=>{e?document.addEventListener("focusin",u):document.removeEventListener("focusin",u)}),{immediate:!0}),(0,o.YP)(a,(async e=>{await(0,o.Y3)(),e?i.value.contentEl?.focus({preventScroll:!0}):i.value.activatorEl?.focus({preventScroll:!0})}));const s=(0,o.Fl)((()=>(0,o.dG)({"aria-haspopup":"dialog","aria-expanded":String(a.value)},e.activatorProps)));return(0,S.L)((()=>{const[t]=g.y.filterProps(e);return(0,o.Wm)(g.y,(0,o.dG)({ref:i,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},t,{modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,"aria-modal":"true",activatorProps:s.value,role:"dialog"},r),{activator:n.activator,default:function(){for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];return(0,o.Wm)(m.z,{root:"VDialog"},{default:()=>[n.default?.(...t)]})}})})),(0,v.F)({},i)}});var N=n(7742),F=n(9357),_=n(4007),P=n(9003),A=n(1669),R=n(3379),U=n(7737),C=n(7230),T=n(6393),j=(n(348),n(7467)),M=n(2736),D=n(24),H=n(2246),B=n(9137);const O=(0,b.U)({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...(0,D.c)(),...(0,M.hy)()},"VTextarea"),E=(0,w.ev)()({name:"VTextarea",directives:{Intersect:B.Z},inheritAttrs:!1,props:O(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:r,slots:i}=t;const u=(0,y.z)(e,"modelValue"),{isFocused:s,focus:c,blur:d}=(0,H.K)(e),p=(0,o.Fl)((()=>"function"===typeof e.counterValue?e.counterValue(u.value):(u.value||"").toString().length)),f=(0,o.Fl)((()=>n.maxlength?n.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter));function m(t,n){e.autofocus&&t&&n[0].target?.focus?.()}const g=(0,l.iH)(),h=(0,l.iH)(),b=(0,l.XI)(""),w=(0,l.iH)(),k=(0,o.Fl)((()=>e.persistentPlaceholder||s.value||e.active));function W(){w.value!==document.activeElement&&w.value?.focus(),s.value||c()}function V(e){W(),r("click:control",e)}function N(e){r("mousedown:control",e)}function F(t){t.stopPropagation(),W(),(0,o.Y3)((()=>{u.value="",(0,x.dr)(e["onClick:clear"],t)}))}function _(t){const n=t.target;if(u.value=n.value,e.modelModifiers?.trim){const e=[n.selectionStart,n.selectionEnd];(0,o.Y3)((()=>{n.selectionStart=e[0],n.selectionEnd=e[1]}))}}const P=(0,l.iH)(),A=(0,l.iH)(+e.rows),R=(0,o.Fl)((()=>["plain","underlined"].includes(e.variant)));function U(){e.autoGrow&&(0,o.Y3)((()=>{if(!P.value||!h.value)return;const t=getComputedStyle(P.value),n=getComputedStyle(h.value.$el),o=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),l=P.value.scrollHeight,a=parseFloat(t.lineHeight),r=Math.max(parseFloat(e.rows)*a+o,parseFloat(n.getPropertyValue("--v-input-control-height"))),i=parseFloat(e.maxRows)*a+o||1/0,u=(0,x.uZ)(l??0,r,i);A.value=Math.floor((u-o)/a),b.value=(0,x.kb)(u)}))}let C;return(0,o.m0)((()=>{e.autoGrow||(A.value=+e.rows)})),(0,o.bv)(U),(0,o.YP)(u,U),(0,o.YP)((()=>e.rows),U),(0,o.YP)((()=>e.maxRows),U),(0,o.YP)((()=>e.density),U),(0,o.YP)(P,(e=>{e?(C=new ResizeObserver(U),C.observe(P.value)):C?.disconnect()})),(0,o.Jd)((()=>{C?.disconnect()})),(0,S.L)((()=>{const t=!!(i.counter||e.counter||e.counterValue),l=!(!t&&!i.details),[r,c]=(0,x.An)(n),[{modelValue:v,...y}]=D.q.filterProps(e),[S]=(0,M.g8)(e);return(0,o.Wm)(D.q,(0,o.dG)({ref:g,modelValue:u.value,"onUpdate:modelValue":e=>u.value=e,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":R.value},e.class],style:e.style},r,y,{centerAffix:1===A.value&&!R.value,focused:s.value}),{...i,default:t=>{let{isDisabled:n,isDirty:l,isReadonly:r,isValid:p}=t;return(0,o.Wm)(M.hF,(0,o.dG)({ref:h,style:{"--v-textarea-control-height":b.value},onClick:V,onMousedown:N,"onClick:clear":F,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},S,{active:k.value||l.value,centerAffix:1===A.value&&!R.value,dirty:l.value||e.dirty,disabled:n.value,focused:s.value,error:!1===p.value}),{...i,default:t=>{let{props:{class:l,...i}}=t;return(0,o.Wm)(o.HY,null,[e.prefix&&(0,o.Wm)("span",{class:"v-text-field__prefix"},[e.prefix]),(0,o.wy)((0,o.Wm)("textarea",(0,o.dG)({ref:w,class:l,value:u.value,onInput:_,autofocus:e.autofocus,readonly:r.value,disabled:n.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:W,onBlur:d},i,c),null),[[(0,o.Q2)("intersect"),{handler:m},null,{once:!0}]]),e.autoGrow&&(0,o.wy)((0,o.Wm)("textarea",{class:[l,"v-textarea__sizer"],id:`${i.id}-sizer`,"onUpdate:modelValue":e=>u.value=e,ref:P,readonly:!0,"aria-hidden":"true"},null),[[a.nr,u.value]]),e.suffix&&(0,o.Wm)("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:l?n=>(0,o.Wm)(o.HY,null,[i.details?.(n),t&&(0,o.Wm)(o.HY,null,[(0,o.Wm)("span",null,null),(0,o.Wm)(j._,{active:e.persistentCounter||s.value,value:p.value,max:f.value},i.counter)])]):void 0})})),(0,v.F)({},g,h,w)}}),G=e=>((0,o.dD)("data-v-4aa89422"),e=e(),(0,o.Cn)(),e),L=G((()=>(0,o._)("br",null,null,-1))),I=G((()=>(0,o._)("div",{class:"text-h4"},"Add a new Route",-1))),z={class:"tableBtn"};var Y={__name:"EditRoutesTable",setup(e){let t=(0,l.iH)(""),f=(0,l.qj)([{align:"start",key:"name",title:"Routes"},{key:"edit",title:"Edit",sortable:!1},{key:"del",title:"Delete",sortable:!1}]);const m=(0,i.k)(),{getRoutes:g}=(0,u.Jk)(m);let v=(0,o.Fl)((()=>m.getRoutes)),y=async e=>{m.deleteRoute(e)},h=(0,l.iH)(""),b=(0,l.iH)(),w=(0,l.iH)(""),x=(0,l.iH)(""),k=(0,l.iH)(""),S=(0,l.iH)(),W=(0,l.iH)(),j=(0,l.iH)(),M=(0,l.iH)(),D=(0,l.iH)(),H=(0,l.iH)(),B=async e=>{console.log(H),console.log(e);let t={id:e.id,name:e.name,difficulty:e.difficulty,terrain:e.terrain,desc:e.desc,poi:e.poi};console.log(t,"in table",t.id),m.updateRoute(t)},O=async e=>{const t=(await e).valid;if(t)try{await G();let e={route:j.value,name:h.value,gpx:W.value,difficulty:x.value,length:b.value,terrain:w.value,desc:k.value,elevation:M.value,poi:D.value};m.addRoute(e)}catch(n){console.log("error",n)}},G=()=>new Promise(((e,t)=>{try{if(S){const t=new FileReader;t.onload=async()=>{const t=n(1111),o=S.value.files[0],l=new Blob([o],{type:"text/plain"}),a=await l.text();W.value=btoa(a);const r=(new DOMParser).parseFromString(a,"text/xml"),i=t.gpx(r);j.value=i;const u=i.features[0].geometry.coordinates;let s=Math.ceil(u.length/512),c={locations:[]},d=0;for(let e=0;e<u.length;e+=s)c.locations[d]={latitude:u[e][1],longitude:u[e][0]},d++;console.log(c);let p=await fetch("https://api.open-elevation.com/api/v1/lookup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});p=await p.json(),console.log(p),c=p.results;let f=0,m=0;for(let e=1;e<c.length;e++)m=c[e].elevation-c[e-1].elevation,m>0&&(f+=m);f=Math.round(3.28084*f*10)/10,M.value=f;let g=0,v=0,y=0,h=0,w=0;for(let e=0;e<u.length-1;e++){const t=e=>e*Math.PI/180;v=t(u[e][1]),y=t(u[e][0]),h=t(u[e+1][1]),w=t(u[e+1][0]);const n=h-v,o=w-y,l=Math.sin(n/2)**2+Math.cos(v)*Math.cos(h)*Math.sin(o/2)**2,a=2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)),r=6371e3,i=r*a;g+=i}b.value=Math.round(g/1e3*.621371*10)/10;let x=t=>{e(t)};x()},t.readAsText(S.value.files[0])}}catch(o){t(o)}}));return(e,n)=>{const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(d._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p.E,null,{default:(0,o.w5)((()=>[(0,o.Wm)(_.C),(0,o.Wm)(T.h,{modelValue:(0,l.SU)(t),"onUpdate:modelValue":n[0]||(n[0]=e=>(0,l.dq)(t)?t.value=e:t=e),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])])),_:1}),L,(0,o.Wm)(P.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(V,null,{activator:(0,o.w5)((({props:e})=>[(0,o.Wm)(c.T,(0,o.dG)({flat:""},e),{default:(0,o.w5)((()=>[(0,o.Wm)(U.t,{icon:"mdi-plus"}),(0,o.Uk)("Add a new route")])),_:2},1040)])),default:(0,o.w5)((({isActive:t})=>[(0,o.Wm)(d._,{style:{color:"blue"}},{default:(0,o.w5)((()=>[(0,o.Wm)(A.K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(P.o,{justify:"center"},{default:(0,o.w5)((()=>[I])),_:1})])),_:1}),(0,o.Wm)(F.O,{class:"routeForm","validate-on":"submit lazy",onSubmit:(0,a.iM)((0,l.SU)(O),["prevent"]),ref:"form"},{default:(0,o.w5)((()=>[(0,o.Wm)(P.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(R.D,{cols:"9"},{default:(0,o.w5)((()=>[(0,o.Wm)(T.h,{label:"Route Name","prepend-icon":"mdi-bike",class:"routeName",type:"text",variant:"outlined",name:"routeName",modelValue:(0,l.SU)(h),"onUpdate:modelValue":n[1]||(n[1]=e=>(0,l.dq)(h)?h.value=e:h=e),rules:e.inputRules,required:""},null,8,["modelValue","rules"])])),_:1})])),_:1}),(0,o.Wm)(P.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(R.D,{cols:"9"},{default:(0,o.w5)((()=>[(0,o.Wm)(C.rL,{label:"Select Terrain:","prepend-icon":"mdi-road",modelValue:(0,l.SU)(w),"onUpdate:modelValue":n[2]||(n[2]=e=>(0,l.dq)(w)?w.value=e:w=e),items:["Paved","Gravel","Dirt"],rules:e.inputRules},null,8,["modelValue","rules"])])),_:1})])),_:1}),(0,o.Wm)(P.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(R.D,{cols:"9"},{default:(0,o.w5)((()=>[(0,o.Wm)(C.rL,{label:"Select Difficulty: ","prepend-icon":"mdi-alert",modelValue:(0,l.SU)(x),"onUpdate:modelValue":n[3]||(n[3]=e=>(0,l.dq)(x)?x.value=e:x=e),items:["Beginner","Intermediate","Expert"],rules:e.inputRules},null,8,["modelValue","rules"])])),_:1})])),_:1}),(0,o.Wm)(P.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(R.D,{cols:"9"},{default:(0,o.w5)((()=>[(0,o.Wm)(E,{label:"Route Description","prepend-icon":"mdi-pencil",class:"routeDesc",type:"text",variant:"outlined",name:"routeDesc",modelValue:(0,l.SU)(k),"onUpdate:modelValue":n[4]||(n[4]=e=>(0,l.dq)(k)?k.value=e:k=e),rules:e.inputRules,required:""},null,8,["modelValue","rules"])])),_:1})])),_:1}),(0,o.Wm)(P.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(R.D,{cols:"9"},{default:(0,o.w5)((()=>[(0,o.Wm)(E,{label:"Points of Interest","prepend-icon":"fa:fas fa-search",class:"routeDesc",type:"text",variant:"outlined",name:"poi",modelValue:(0,l.SU)(D),"onUpdate:modelValue":n[5]||(n[5]=e=>(0,l.dq)(D)?D.value=e:D=e),rules:e.inputRules},null,8,["modelValue","rules"])])),_:1})])),_:1}),(0,o.Wm)(P.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(R.D,{cols:"9"},{default:(0,o.w5)((()=>[(0,o.Wm)(N.Z,{label:"Upload .gpx File",variant:"outlined",accept:".gpx",type:"file",ref_key:"file",ref:S,rules:e.inputRules,"prepend-icon":"mdi-map",required:""},null,8,["rules"])])),_:1})])),_:1}),(0,o.Wm)(P.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(c.T,{width:"200%",type:"submit",onClick:e=>t.value=!1,flat:""},{default:(0,o.w5)((()=>[(0,o.Uk)("submit")])),_:2},1032,["onClick"])])),_:2},1024),(0,o.Wm)(P.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(_.C)])),_:1})])),_:2},1032,["onSubmit"])])),_:2},1024)])),_:1}),(0,o.Wm)(V,{width:"500"},{activator:(0,o.w5)((({props:e})=>[])),default:(0,o.w5)((({isActive:e})=>[(0,o.Wm)(d._,{title:"Add Route"})])),_:1})])),_:1}),(0,o.Wm)((0,l.SU)(s.y_),{class:"routes-table",headers:(0,l.SU)(f),items:(0,l.SU)(v),search:(0,l.SU)(t)},{"item.name":(0,o.w5)((({item:e})=>[(0,o.Wm)(i,{to:"/route/"+e.id},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.name),1)])),_:2},1032,["to"])])),"item.edit":(0,o.w5)((({item:t})=>[(0,o.Wm)(V,null,{activator:(0,o.w5)((({props:e})=>[(0,o.Wm)(c.T,(0,o.dG)({class:"tableBtn"},e,{icon:"mdi-pencil"}),null,16)])),default:(0,o.w5)((({isActive:n})=>[(0,o.Wm)(d._,{title:"Edit Route"},{default:(0,o.w5)((()=>[(0,o.Wm)(F.O,{class:"routeForm","validate-on":"submit lazy",onSubmit:(0,a.iM)((e=>(0,l.SU)(B)(t)),["prevent"]),ref_key:"editForm",ref:H},{default:(0,o.w5)((()=>[(0,o.Wm)(P.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(R.D,{cols:"9"},{default:(0,o.w5)((()=>[(0,o.Wm)(T.h,{"prepend-icon":"mdi-map-marker",modelValue:t.name,"onUpdate:modelValue":e=>t.name=e,clearable:"","hide-details":"auto",label:"Route Name"},null,8,["modelValue","onUpdate:modelValue"]),(0,o.Wm)(C.rL,{label:"Terrain","prepend-icon":"mdi-road",modelValue:t.terrain,"onUpdate:modelValue":e=>t.terrain=e,items:["Paved","Gravel","Dirt"],rules:e.inputRules},null,8,["modelValue","onUpdate:modelValue","rules"]),(0,o.Wm)(C.rL,{label:"Select Difficulty: ","prepend-icon":"mdi-alert",modelValue:t.difficulty,"onUpdate:modelValue":e=>t.difficulty=e,items:["Beginner","Intermediate","Expert"],rules:e.inputRules},null,8,["modelValue","onUpdate:modelValue","rules"]),(0,o.Wm)(E,{label:"Route Description","prepend-icon":"mdi-pencil",class:"routeDesc",type:"text",variant:"outlined",name:"routeDesc",modelValue:t.desc,"onUpdate:modelValue":e=>t.desc=e,rules:e.inputRules,required:""},null,8,["modelValue","onUpdate:modelValue","rules"]),(0,o.Wm)(E,{label:"Route POI",class:"routePOI",type:"text",variant:"outlined",name:"routeDesc",modelValue:t.poi,"onUpdate:modelValue":e=>t.poi=e,rules:e.inputRules,"prepend-icon":"fa:fas fa-search",required:""},null,8,["modelValue","onUpdate:modelValue","rules"]),(0,o.Wm)(P.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(c.T,{width:"200%",type:"submit",onClick:e=>n.value=!1,flat:""},{default:(0,o.w5)((()=>[(0,o.Uk)("submit")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onSubmit"])])),_:2},1024)])),_:2},1024)])),"item.del":(0,o.w5)((({item:e})=>[(0,o._)("div",z,[(0,o.Wm)(c.T,{icon:"mdi-trash-can",onClick:t=>(0,l.SU)(y)(e.id)},null,8,["onClick"])])])),_:1},8,["headers","items","search"])])),_:1})}}},q=n(3744);const $=(0,q.Z)(Y,[["__scopeId","data-v-4aa89422"]]);var Z=$,J=n(2201),K={__name:"EditRouteView",setup(e){const t=(0,J.tv)();let n=async()=>{let e=await fetch("http://localhost:3000/v1/auth/logout",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});e=await e.json(),1==e.success?t.push("/"):alert("Logout failed")};return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(P.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(c.T,{onClick:(0,l.SU)(n),flat:""},{default:(0,o.w5)((()=>[(0,o.Uk)("Logout")])),_:1},8,["onClick"])])),_:1}),(0,o.Wm)(P.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(R.D,{cols:"6"},{default:(0,o.w5)((()=>[(0,o.Wm)(Z)])),_:1})])),_:1})],64))}};const X=K;var Q=X},1111:function(e,t){function n(e,t){return Array.from(e.getElementsByTagName(t))}function o(e){return"#"===e[0]?e:`#${e}`}function l(e,t,n){return Array.from(e.getElementsByTagNameNS(n,t))}function a(e){return e?.normalize(),e&&e.textContent||""}function r(e,t,n){const o=e.getElementsByTagName(t),l=o.length?o[0]:null;return l&&n&&n(l),l}function i(e,t,n){const o={};if(!e)return o;const l=e.getElementsByTagName(t),a=l.length?l[0]:null;return a&&n?n(a,o):o}function u(e,t,n){const o=a(r(e,t));return o&&n&&n(o)||{}}function s(e,t,n){const o=parseFloat(a(r(e,t)));if(!isNaN(o))return o&&n&&n(o)||{}}function c(e,t,n){const o=parseFloat(a(r(e,t)));if(!isNaN(o))return n&&n(o),o}function d(e,t){const n={};for(const o of t)u(e,o,(e=>{n[o]=e}));return n}function p(e){return 1===e?.nodeType}function f(e){return i(e,"line",(e=>{const t=Object.assign({},u(e,"color",(e=>({stroke:`#${e}`}))),s(e,"opacity",(e=>({"stroke-opacity":e}))),s(e,"width",(e=>({"stroke-width":96*e/25.4}))));return t}))}function m(e){let t=[];if(null===e)return t;for(const n of Array.from(e.childNodes)){if(!p(n))continue;const e=g(n.nodeName);if("gpxtpx:TrackPointExtension"===e)t=t.concat(m(n));else{const o=a(n);t.push([e,v(o)])}}return t}function g(e){return["heart","gpxtpx:hr","hr"].includes(e)?"heart":e}function v(e){const t=parseFloat(e);return isNaN(t)?e:t}function y(e){const t=[parseFloat(e.getAttribute("lon")||""),parseFloat(e.getAttribute("lat")||"")];if(isNaN(t[0])||isNaN(t[1]))return null;c(e,"ele",(e=>{t.push(e)}));const n=r(e,"time");return{coordinates:t,time:n?a(n):null,extendedValues:m(r(e,"extensions"))}}function h(e){const t=d(e,["name","cmt","desc","type","time","keywords"]),o=Array.from(e.getElementsByTagNameNS("http://www.garmin.com/xmlschemas/GpxExtensions/v3","*"));for(const n of o)n.parentNode?.parentNode===e&&(t[n.tagName.replace(":","_")]=a(n));const l=n(e,"link");return l.length&&(t.links=l.map((e=>Object.assign({href:e.getAttribute("href")},d(e,["text","type"]))))),t}function b(e,t){const o=n(e,t),l=[],a=[],r={};for(let n=0;n<o.length;n++){const e=y(o[n]);if(e){l.push(e.coordinates),e.time&&a.push(e.time);for(const[t,l]of e.extendedValues){const e="heart"===t?t:t.replace("gpxtpx:","")+"s";r[e]||(r[e]=Array(o.length).fill(null)),r[e][n]=l}}}if(!(l.length<2))return{line:l,times:a,extendedValues:r}}function w(e){const t=b(e,"rtept");if(t)return{type:"Feature",properties:Object.assign({_gpxType:"rte"},h(e),f(r(e,"extensions"))),geometry:{type:"LineString",coordinates:t.line}}}function x(e){const t=n(e,"trkseg"),o=[],l=[],a=[];for(const n of t){const e=b(n,"trkpt");e&&(a.push(e),e.times&&e.times.length&&l.push(e.times))}if(0===a.length)return null;const i=a.length>1,u=Object.assign({_gpxType:"trk"},h(e),f(r(e,"extensions")),l.length?{coordinateProperties:{times:i?l:l[0]}}:{});for(const n of a){o.push(n.line),u.coordinateProperties||(u.coordinateProperties={});const e=u.coordinateProperties,t=Object.entries(n.extendedValues);for(let n=0;n<t.length;n++){const[o,l]=t[n];i?(e[o]||(e[o]=a.map((e=>new Array(e.line.length).fill(null)))),e[o][n]=l):e[o]=l}}return{type:"Feature",properties:u,geometry:i?{type:"MultiLineString",coordinates:o}:{type:"LineString",coordinates:o[0]}}}function k(e){const t=Object.assign(h(e),d(e,["sym"])),n=y(e);return n?{type:"Feature",properties:t,geometry:{type:"Point",coordinates:n.coordinates}}:null}function*S(e){for(const t of n(e,"trk")){const e=x(t);e&&(yield e)}for(const t of n(e,"rte")){const e=w(t);e&&(yield e)}for(const t of n(e,"wpt")){const e=k(t);e&&(yield e)}}function W(e){return{type:"FeatureCollection",features:Array.from(S(e))}}Object.defineProperty(t,"__esModule",{value:!0});const V="http://www.garmin.com/xmlschemas/ActivityExtension/v2",N=[["heartRate","heartRates"],["Cadence","cadences"],["Speed","speeds"],["Watts","watts"]],F=[["TotalTimeSeconds","totalTimeSeconds"],["DistanceMeters","distanceMeters"],["MaximumSpeed","maxSpeed"],["AverageHeartRateBpm","avgHeartRate"],["MaximumHeartRateBpm","maxHeartRate"],["AvgSpeed","avgSpeed"],["AvgWatts","avgWatts"],["MaxWatts","maxWatts"]];function _(e,t){const n=[];for(const[o,l]of t){let t=r(e,o);if(!t){const n=e.getElementsByTagNameNS(V,o);n.length&&(t=n[0])}const i=parseFloat(a(t));isNaN(i)||n.push([l,i])}return n}function P(e){const t=[c(e,"LongitudeDegrees"),c(e,"LatitudeDegrees")];if(void 0===t[0]||isNaN(t[0])||void 0===t[1]||isNaN(t[1]))return null;const n=r(e,"HeartRateBpm"),o=a(r(e,"Time"));return r(e,"AltitudeMeters",(e=>{const n=parseFloat(a(e));isNaN(n)||t.push(n)})),{coordinates:t,time:o||null,heartRate:n?parseFloat(a(n)):null,extensions:_(e,N)}}function A(e){const t=n(e,"Trackpoint"),o=[],l=[],a=[];if(t.length<2)return null;const r={},i={extendedProperties:r};for(let n=0;n<t.length;n++){const e=P(t[n]);if(null===e)continue;o.push(e.coordinates);const{time:i,heartRate:u,extensions:s}=e;i&&l.push(i),u&&a.push(u);for(const[o,l]of s)r[o]||(r[o]=Array(t.length).fill(null)),r[o][n]=l}return o.length<2?null:Object.assign(i,{line:o,times:l,heartRates:a})}function R(e){const t=n(e,"Track"),o=[],l=[],r=[],u=[];let s;const c=Object.assign(Object.fromEntries(_(e,F)),i(e,"Name",(e=>({name:a(e)}))));for(const n of t)s=A(n),s&&(o.push(s.line),s.times.length&&l.push(s.times),s.heartRates.length&&r.push(s.heartRates),u.push(s.extendedProperties));for(let n=0;n<u.length;n++){const e=u[n];for(const l in e)1===t.length?s&&(c[l]=s.extendedProperties[l]):(c[l]||(c[l]=o.map((e=>Array(e.length).fill(null)))),c[l][n]=e[l])}return 0===o.length?null:((l.length||r.length)&&(c.coordinateProperties=Object.assign(l.length?{times:1===o.length?l[0]:l}:{},r.length?{heart:1===o.length?r[0]:r}:{})),{type:"Feature",properties:c,geometry:1===o.length?{type:"LineString",coordinates:o[0]}:{type:"MultiLineString",coordinates:o}})}function*U(e){for(const t of n(e,"Lap")){const e=R(t);e&&(yield e)}for(const t of n(e,"Courses")){const e=R(t);e&&(yield e)}}function C(e){return{type:"FeatureCollection",features:Array.from(U(e))}}function T(e,t){const n={},o="stroke"==t||"fill"===t?t:t+"-color";return"#"===e[0]&&(e=e.substring(1)),6===e.length||3===e.length?n[o]="#"+e:8===e.length&&(n[t+"-opacity"]=parseInt(e.substring(0,2),16)/255,n[o]="#"+e.substring(6,8)+e.substring(4,6)+e.substring(2,4)),n}function j(e,t,n){const o={};return c(e,t,(e=>{o[n]=e})),o}function M(e,t){return i(e,"color",(e=>T(a(e),t)))}function D(e){return i(e,"Icon",((e,t)=>(u(e,"href",(e=>{t.icon=e})),t)))}function H(e){return i(e,"IconStyle",(e=>Object.assign(M(e,"icon"),j(e,"scale","icon-scale"),j(e,"heading","icon-heading"),i(e,"hotSpot",(e=>{const t=parseFloat(e.getAttribute("x")||""),n=parseFloat(e.getAttribute("y")||""),o=e.getAttribute("xunits")||"",l=e.getAttribute("yunits")||"";return isNaN(t)||isNaN(n)?{}:{"icon-offset":[t,n],"icon-offset-units":[o,l]}})),D(e))))}function B(e){return i(e,"LabelStyle",(e=>Object.assign(M(e,"label"),j(e,"scale","label-scale"))))}function O(e){return i(e,"LineStyle",(e=>Object.assign(M(e,"stroke"),j(e,"width","stroke-width"))))}function E(e){return i(e,"PolyStyle",((e,t)=>Object.assign(t,i(e,"color",(e=>T(a(e),"fill"))),u(e,"fill",(e=>{if("0"===e)return{"fill-opacity":0}})),u(e,"outline",(e=>{if("0"===e)return{"stroke-opacity":0}})))))}function G(e){return Object.assign({},E(e),O(e),B(e),H(e))}const L=e=>Number(e),I={string:e=>e,int:L,uint:L,short:L,ushort:L,float:L,double:L,bool:e=>Boolean(e)};function z(e,t){return i(e,"ExtendedData",((e,o)=>{for(const t of n(e,"Data"))o[t.getAttribute("name")||""]=a(r(t,"value"));for(const l of n(e,"SimpleData")){const e=l.getAttribute("name")||"",n=t[e]||I.string;o[e]=n(a(l))}return o}))}function Y(e){const t=r(e,"description");for(const n of Array.from(t?.childNodes||[]))if(4===n.nodeType)return{description:{"@type":"html",value:a(n)}};return{}}function q(e){return i(e,"TimeSpan",(e=>({timespan:{begin:a(r(e,"begin")),end:a(r(e,"end"))}})))}function $(e){return i(e,"TimeStamp",(e=>({timestamp:a(r(e,"when"))})))}function Z(e,t){return u(e,"styleUrl",(e=>(e=o(e),t[e]?Object.assign({styleUrl:e},t[e]):{styleUrl:e})))}const J=/\s*/g,K=/^\s*|\s*$/g,X=/\s+/;function Q(e){return e.replace(J,"").split(",").map(parseFloat).filter((e=>!isNaN(e))).slice(0,3)}function ee(e){return e.replace(K,"").split(X).map(Q).filter((e=>e.length>=2))}function te(e){let t=n(e,"coord");0===t.length&&(t=l(e,"coord","*"));const o=t.map((e=>a(e).split(" ").map(parseFloat)));return 0===o.length?null:{geometry:o.length>2?{type:"LineString",coordinates:o}:{type:"Point",coordinates:o[0]},times:n(e,"when").map((e=>a(e)))}}function ne(e){if(0===e.length)return e;const t=e[0],n=e[e.length-1];let o=!0;for(let l=0;l<Math.max(t.length,n.length);l++)if(t[l]!==n[l]){o=!1;break}return o?e:e.concat([e[0]])}function oe(e){return a(r(e,"coordinates"))}function le(e){let t=[],o=[];for(let l=0;l<e.childNodes.length;l++){const a=e.childNodes.item(l);if(p(a))switch(a.tagName){case"MultiGeometry":case"MultiTrack":case"gx:MultiTrack":{const e=le(a);t=t.concat(e.geometries),o=o.concat(e.coordTimes);break}case"Point":{const e=Q(oe(a));e.length>=2&&t.push({type:"Point",coordinates:e});break}case"LinearRing":case"LineString":{const e=ee(oe(a));e.length>=2&&t.push({type:"LineString",coordinates:e});break}case"Polygon":{const e=[];for(const t of n(a,"LinearRing")){const n=ne(ee(oe(t)));n.length>=4&&e.push(n)}e.length&&t.push({type:"Polygon",coordinates:e});break}case"Track":case"gx:Track":{const e=te(a);if(!e)break;const{times:n,geometry:l}=e;t.push(l),n.length&&o.push(n);break}}}return{geometries:t,coordTimes:o}}function ae(e){return 0===e.length?null:1===e.length?e[0]:{type:"GeometryCollection",geometries:e}}function re(e,t,n,o){const{coordTimes:l,geometries:a}=le(e),r=ae(a);if(!r&&o.skipNullGeometry)return null;const i={type:"Feature",geometry:r,properties:Object.assign(d(e,["name","address","visibility","open","phoneNumber","description"]),Y(e),Z(e,t),G(e),z(e,n),q(e),$(e),l.length?{coordinateProperties:{times:1===l.length?l[0]:l}}:{})};void 0!==i.properties?.visibility&&(i.properties.visibility="0"!==i.properties.visibility);const u=e.getAttribute("id");return null!==u&&""!==u&&(i.id=u),i}function ie(e){const t=r(e,"gx:LatLonQuad");if(t){const t=ne(ee(oe(e)));return{geometry:{type:"Polygon",coordinates:[t]}}}return ce(e)}const ue=Math.PI/180;function se(e,t,n){const o=[(e[0]+e[2])/2,(e[1]+e[3])/2];return[t[0].map((e=>{const t=e[1]-o[1],l=e[0]-o[0],a=Math.sqrt(Math.pow(t,2)+Math.pow(l,2)),r=Math.atan2(t,l)+n*ue;return[o[0]+Math.cos(r)*a,o[1]+Math.sin(r)*a]}))]}function ce(e){const t=r(e,"LatLonBox");if(t){const e=c(t,"north"),n=c(t,"west"),o=c(t,"east"),l=c(t,"south"),a=c(t,"rotation");if("number"===typeof e&&"number"===typeof l&&"number"===typeof n&&"number"===typeof o){const t=[n,l,o,e];let r=[[[n,e],[o,e],[o,l],[n,l],[n,e]]];return"number"===typeof a&&(r=se(t,r,a)),{bbox:t,geometry:{type:"Polygon",coordinates:r}}}}return null}function de(e,t,n,o){const l=ie(e),a=l?.geometry||null;if(!a&&o.skipNullGeometry)return null;const r={type:"Feature",geometry:a,properties:Object.assign({"@geometry-type":"groundoverlay"},d(e,["name","address","visibility","open","phoneNumber","description"]),Y(e),Z(e,t),G(e),D(e),z(e,n),q(e),$(e))};l?.bbox&&(r.bbox=l.bbox),void 0!==r.properties?.visibility&&(r.properties.visibility="0"!==r.properties.visibility);const i=e.getAttribute("id");return null!==i&&""!==i&&(r.id=i),r}function pe(e){let t=e.getAttribute("id");const n=e.parentNode;return!t&&p(n)&&"CascadingStyle"===n.localName&&(t=n.getAttribute("kml:id")||n.getAttribute("id")),o(t||"")}function fe(e){const t={};for(const o of n(e,"Style"))t[pe(o)]=G(o);for(const l of n(e,"StyleMap")){const e=o(l.getAttribute("id")||"");u(l,"styleUrl",(n=>{n=o(n),t[n]&&(t[e]=t[n])}))}return t}function me(e){const t={};for(const o of n(e,"SimpleField"))t[o.getAttribute("name")||""]=I[o.getAttribute("type")||""]||I["string"];return t}const ge=["name","visibility","open","address","description","phoneNumber","visibility"];function ve(e){const t={};for(const n of Array.from(e.childNodes))p(n)&&ge.includes(n.tagName)&&(t[n.tagName]=a(n));return{type:"folder",meta:t,children:[]}}function ye(e,t={skipNullGeometry:!1}){const n=fe(e),o=me(e),l={type:"root",children:[]};function a(e,t,l){if(p(e))switch(e.tagName){case"GroundOverlay":{const a=de(e,n,o,l);a&&t.children.push(a);break}case"Placemark":{const a=re(e,n,o,l);a&&t.children.push(a);break}case"Folder":{const n=ve(e);t.children.push(n),t=n;break}}if(e.childNodes)for(let n=0;n<e.childNodes.length;n++)a(e.childNodes[n],t,l)}return a(e,l,t),l}function*he(e,t={skipNullGeometry:!1}){const o=fe(e),l=me(e);for(const a of n(e,"Placemark")){const e=re(a,o,l,t);e&&(yield e)}for(const a of n(e,"GroundOverlay")){const e=de(a,o,l,t);e&&(yield e)}}function be(e,t={skipNullGeometry:!1}){return{type:"FeatureCollection",features:Array.from(he(e,t))}}t.gpx=W,t.gpxGen=S,t.kml=be,t.kmlGen=he,t.kmlWithFolders=ye,t.tcx=C,t.tcxGen=U},7742:function(e,t,n){n.d(t,{Z:function(){return h}});var o=n(6252),l=n(4447),a=n(7467),r=n(2736),i=n(24),u=n(2246),s=n(9483),c=n(8475),d=n(1316),p=n(2262),f=n(6533),m=n(8676),g=n(6719),v=n(3099);const y=(0,f.U)({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>"boolean"===typeof e||[1e3,1024].includes(e)},...(0,i.c)({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>(0,m.FT)(e).every((e=>null!=e&&"object"===typeof e))},...(0,r.hy)({clearable:!0})},"VFileInput"),h=(0,g.ev)()({name:"VFileInput",inheritAttrs:!1,props:y(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:f,slots:g}=t;const{t:y}=(0,c.bU)(),h=(0,d.z)(e,"modelValue"),{isFocused:b,focus:w,blur:x}=(0,u.K)(e),k=(0,o.Fl)((()=>"boolean"!==typeof e.showSize?e.showSize:void 0)),S=(0,o.Fl)((()=>(h.value??[]).reduce(((e,t)=>{let{size:n=0}=t;return e+n}),0))),W=(0,o.Fl)((()=>(0,m.XE)(S.value,k.value))),V=(0,o.Fl)((()=>(h.value??[]).map((t=>{const{name:n="",size:o=0}=t;return e.showSize?`${n} (${(0,m.XE)(o,k.value)})`:n})))),N=(0,o.Fl)((()=>{const t=h.value?.length??0;return e.showSize?y(e.counterSizeString,t,W.value):y(e.counterString,t)})),F=(0,p.iH)(),_=(0,p.iH)(),P=(0,p.iH)(),A=(0,o.Fl)((()=>b.value||e.active)),R=(0,o.Fl)((()=>["plain","underlined"].includes(e.variant)));function U(){P.value!==document.activeElement&&P.value?.focus(),b.value||w()}function C(e){j(e)}function T(e){f("mousedown:control",e)}function j(e){P.value?.click(),f("click:control",e)}function M(t){t.stopPropagation(),U(),(0,o.Y3)((()=>{h.value=[],(0,m.dr)(e["onClick:clear"],t)}))}return(0,o.YP)(h,(e=>{const t=!Array.isArray(e)||!e.length;t&&P.value&&(P.value.value="")})),(0,v.L)((()=>{const t=!(!g.counter&&!e.counter),u=!(!t&&!g.details),[s,c]=(0,m.An)(n),[{modelValue:d,...p}]=i.q.filterProps(e),[f]=(0,r.g8)(e);return(0,o.Wm)(i.q,(0,o.dG)({ref:F,modelValue:h.value,"onUpdate:modelValue":e=>h.value=e,class:["v-file-input",{"v-text-field--plain-underlined":R.value},e.class],style:e.style,"onClick:prepend":C},s,p,{centerAffix:!R.value,focused:b.value}),{...g,default:t=>{let{id:n,isDisabled:a,isDirty:i,isReadonly:u,isValid:s}=t;return(0,o.Wm)(r.hF,(0,o.dG)({ref:_,"prepend-icon":e.prependIcon,onMousedown:T,onClick:j,"onClick:clear":M,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},f,{id:n.value,active:A.value||i.value,dirty:i.value,disabled:a.value,focused:b.value,error:!1===s.value}),{...g,default:t=>{let{props:{class:n,...r}}=t;return(0,o.Wm)(o.HY,null,[(0,o.Wm)("input",(0,o.dG)({ref:P,type:"file",readonly:u.value,disabled:a.value,multiple:e.multiple,name:e.name,onClick:e=>{e.stopPropagation(),u.value&&e.preventDefault(),U()},onChange:e=>{if(!e.target)return;const t=e.target;h.value=[...t.files??[]]},onFocus:U,onBlur:x},r,c),null),(0,o.Wm)("div",{class:n},[!!h.value?.length&&(g.selection?g.selection({fileNames:V.value,totalBytes:S.value,totalBytesReadable:W.value}):e.chips?V.value.map((t=>(0,o.Wm)(l.v,{key:t,size:"small",color:e.color},{default:()=>[t]}))):V.value.join(", "))])])}})},details:u?e=>(0,o.Wm)(o.HY,null,[g.details?.(e),t&&(0,o.Wm)(o.HY,null,[(0,o.Wm)("span",null,null),(0,o.Wm)(a._,{active:!!h.value?.length,value:N.value},g.counter)])]):void 0})})),(0,s.F)({},F,_,P)}})},9357:function(e,t,n){n.d(t,{O:function(){return p}});var o=n(6252),l=n(9e3),a=n(9728),r=n(9483),i=n(2262),u=n(6533),s=n(6719),c=n(3099);const d=(0,u.U)({...(0,l.l)(),...(0,a.vC)()},"VForm"),p=(0,s.ev)()({name:"VForm",props:d(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:n,emit:l}=t;const u=(0,a.Np)(e),s=(0,i.iH)();function d(e){e.preventDefault(),u.reset()}function p(e){const t=e,n=u.validate();t.then=n.then.bind(n),t.catch=n.catch.bind(n),t.finally=n.finally.bind(n),l("submit",t),t.defaultPrevented||n.then((e=>{let{valid:t}=e;t&&s.value?.submit()})),t.preventDefault()}return(0,c.L)((()=>(0,o.Wm)("form",{ref:s,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:d,onSubmit:p},[n.default?.(u)]))),(0,r.F)(u,s)}})}}]);
//# sourceMappingURL=edit.12e3137c.js.map