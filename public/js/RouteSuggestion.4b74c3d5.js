"use strict";(self["webpackChunkgps_leaflet"]=self["webpackChunkgps_leaflet"]||[]).push([[875],{1903:function(e,t,l){l.r(t),l.d(t,{default:function(){return he}});var n=l(6252),i=l(9963),a=l(3577),o=l(2262);const r="hcaptcha-api-script-id",s="_hcaptchaOnLoad";let u,d;const c=new Promise(((e,t)=>{u=e,d=t}));function p(e){if(window.hcaptcha)return u(),c;if(document.getElementById(r))return c;window[s]=u;const t=h(e),l=document.createElement("script");return l.id=r,l.src=t,l.async=!0,l.defer=!0,l.onerror=e=>{console.error("Failed to load api: "+t,e),d("Failed to load api.js")},document.head.appendChild(l),c}function h(e){let t=e.apiEndpoint;return t=m(t,"render","explicit"),t=m(t,"onload",s),t=m(t,"recaptchacompat",!1===e.reCaptchaCompat?"off":null),t=m(t,"hl",e.language),t=m(t,"sentry",e.sentry),t=m(t,"custom",e.custom),t=m(t,"endpoint",e.endpoint),t=m(t,"assethost",e.assethost),t=m(t,"imghost",e.imghost),t=m(t,"reportapi",e.reportapi),t}function m(e,t,l){if(void 0!==l&&null!==l){const n=e.includes("?")?"&":"?";return e+n+t+"="+encodeURIComponent(l)}return e}var v=(e,t)=>{for(const[l,n]of t)e[l]=n;return e};const f={name:"VueHcaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String,default:void 0},size:{type:String,default:void 0},tabindex:{type:String,default:void 0},language:{type:String,default:void 0},reCaptchaCompat:{type:Boolean,default:!0},challengeContainer:{type:String,default:void 0},rqdata:{type:String,default:void 0},sentry:{type:Boolean,default:!0},custom:{type:Boolean,default:void 0},apiEndpoint:{type:String,default:"https://hcaptcha.com/1/api.js"},endpoint:{type:String,default:void 0},reportapi:{type:String,default:void 0},assethost:{type:String,default:void 0},imghost:{type:String,default:void 0}},data:()=>({widgetId:null,hcaptcha:null,renderedCb:null}),mounted(){return p(this.$props).then(this.onApiLoaded).catch(this.onError)},unmounted(){this.teardown()},destroyed(){this.teardown()},methods:{teardown(){this.widgetId&&(this.hcaptcha.reset(this.widgetId),this.hcaptcha.remove(this.widgetId))},onApiLoaded(){this.hcaptcha=window.hcaptcha;const e={sitekey:this.sitekey,theme:this.theme,size:this.size,tabindex:this.tabindex,callback:this.onVerify,"expired-callback":this.onExpired,"chalexpired-callback":this.onChallengeExpired,"error-callback":this.onError,"open-callback":this.onOpen,"close-callback":this.onClose};this.challengeContainer&&(e["challenge-container"]=this.challengeContainer),this.widgetId=this.hcaptcha.render(this.$el,e),this.rqdata&&this.hcaptcha.setData(this.widgetId,{rqdata:this.rqdata}),this.onRendered()},execute(){this.widgetId?(this.hcaptcha.execute(this.widgetId),this.onExecuted()):this.renderedCb=()=>{this.renderedCb=null,this.execute()}},executeAsync(){if(this.widgetId)return this.onExecuted(),this.hcaptcha.execute(this.widgetId,{async:!0});let e;const t=new Promise((t=>{e=t}));return this.renderedCb=()=>{this.renderedCb=null,e()},t.then(this.executeAsync)},reset(){this.widgetId?(this.hcaptcha.reset(this.widgetId),this.onReset()):this.$emit("error","Element is not rendered yet and thus cannot reset it. Wait for `rendered` event to safely call reset.")},onRendered(){this.$emit("rendered"),this.renderedCb&&this.renderedCb()},onExecuted(){this.$emit("executed")},onReset(){this.$emit("reset")},onError(e){this.$emit("error",e),this.reset()},onVerify(){const e=this.hcaptcha.getResponse(this.widgetId),t=this.hcaptcha.getRespKey(this.widgetId);this.$emit("verify",e,t)},onExpired(){this.$emit("expired")},onChallengeExpired(){this.$emit("challengeExpired")},onOpen(){this.$emit("opened")},onClose(){this.$emit("closed")}}},y={id:"hcap-script"};function g(e,t,l,i,a,o){return(0,n.wg)(),(0,n.iD)("div",y)}var b=v(f,[["render",g]]);const w={id:"App"},k={key:0,id:"verified"},C=(0,n._)("h1",null,"Successfully Verified!",-1),S={key:1,id:"expired"},x=(0,n._)("h1",null,"Challenge expired!",-1),I=[x],W={key:2,id:"error"},_=(0,n._)("h1",null,"Error:",-1);var V={__name:"hCaptcha",setup(e){const t=(0,o.iH)(!1),l=(0,o.iH)(!1),i=(0,o.iH)(""),r=(0,o.iH)(""),s=(0,o.iH)("");(0,o.iH)(null),(0,o.iH)(null);function u(e,l){t.value=!0,i.value=e,r.value=l,console.log(`Callback token: ${e}, ekey: ${l}`)}function d(){t.value=!1,i.value=null,r.value=null,l.value=!0,console.log("Expired")}function c(){t.value=!1,i.value=null,r.value=null,l.value=!0,console.log("Challenge expired")}function p(e){i.value=null,r.value=null,s.value=e,console.log(`Error: ${e}`)}return(e,h)=>((0,n.wg)(),(0,n.iD)("div",w,[t.value?((0,n.wg)(),(0,n.iD)("div",k,[C,(0,n._)("p",null,"token: "+(0,a.zw)(i.value),1),(0,n._)("p",null,"eKey: "+(0,a.zw)(r.value),1)])):(0,n.kq)("",!0),l.value?((0,n.wg)(),(0,n.iD)("div",S,I)):(0,n.kq)("",!0),s.value?((0,n.wg)(),(0,n.iD)("div",W,[_,(0,n._)("p",null,(0,a.zw)(s.value),1)])):(0,n.kq)("",!0),(0,n.Wm)((0,o.SU)(b),{sitekey:"process.env.VUE_APP_SITEKEY",onVerify:u,onExpired:d,onChallengeExpired:c,onError:p})]))}};const E=V;var F=E,$=l(5988);const z=(0,$.J)("v-alert-title");var B=l(6673),U=l(875),P=l(7737),q=l(6054),A=l(9e3),H=l(8942),D=l(4203),R=l(6947),Y=l(6596),j=l(8475),K=l(9680),O=l(3632),T=l(1316),G=l(8247),L=l(2716),N=l(584),X=l(9748),Z=l(6533),J=l(6719);const M=["success","info","warning","error"],Q=(0,Z.U)({border:{type:[Boolean,String],validator:e=>"boolean"===typeof e||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:Y.lE,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>M.includes(e)},...(0,A.l)(),...(0,H.f)(),...(0,D.x)(),...(0,R.c)(),...(0,K.y)(),...(0,O.F)(),...(0,G.I)(),...(0,L.Q)(),...(0,N.x$)(),...(0,X.bk)({variant:"flat"})},"VAlert"),ee=(0,J.ev)()({name:"VAlert",props:Q(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{emit:l,slots:i}=t;const a=(0,T.z)(e,"modelValue"),r=(0,n.Fl)((()=>{if(!1!==e.icon)return e.type?e.icon??`$${e.type}`:e.icon})),s=(0,n.Fl)((()=>({color:e.color??e.type,variant:e.variant}))),{themeClasses:u}=(0,N.ER)(e),{colorClasses:d,colorStyles:c,variantClasses:p}=(0,X.c1)(s),{densityClasses:h}=(0,H.t)(e),{dimensionStyles:m}=(0,D.$)(e),{elevationClasses:v}=(0,R.Y)(e),{locationStyles:f}=(0,K.T)(e),{positionClasses:y}=(0,O.K)(e),{roundedClasses:g}=(0,G.b)(e),{textColorClasses:b,textColorStyles:w}=(0,q.rY)((0,o.Vh)(e,"borderColor")),{t:k}=(0,j.bU)(),C=(0,n.Fl)((()=>({"aria-label":k(e.closeLabel),onClick(e){a.value=!1,l("click:close",e)}})));return()=>{const t=!(!i.prepend&&!r.value),l=!(!i.title&&!e.title),o=!(!i.close&&!e.closable);return a.value&&(0,n.Wm)(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${!0===e.border?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},u.value,d.value,h.value,v.value,y.value,g.value,p.value,e.class],style:[c.value,m.value,f.value,e.style],role:"alert"},{default:()=>[(0,X.Ux)(!1,"v-alert"),e.border&&(0,n.Wm)("div",{key:"border",class:["v-alert__border",b.value],style:w.value},null),t&&(0,n.Wm)("div",{key:"prepend",class:"v-alert__prepend"},[i.prepend?(0,n.Wm)(U.z,{key:"prepend-defaults",disabled:!r.value,defaults:{VIcon:{density:e.density,icon:r.value,size:e.prominent?44:28}}},i.prepend):(0,n.Wm)(P.t,{key:"prepend-icon",density:e.density,icon:r.value,size:e.prominent?44:28},null)]),(0,n.Wm)("div",{class:"v-alert__content"},[l&&(0,n.Wm)(z,{key:"title"},{default:()=>[i.title?.()??e.title]}),i.text?.()??e.text,i.default?.()]),i.append&&(0,n.Wm)("div",{key:"append",class:"v-alert__append"},[i.append()]),o&&(0,n.Wm)("div",{key:"close",class:"v-alert__close"},[i.close?(0,n.Wm)(U.z,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>[i.close?.({props:C.value})]}):(0,n.Wm)(B.T,(0,n.dG)({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},C.value),null)])]})}}});var te=l(7037),le=l(5911),ne=l(7742),ie=l(1669),ae=l(6393);const oe={key:0},re={key:1},se=(0,n._)("br",null,null,-1),ue=(0,n._)("br",null,null,-1),de={componenets:{},name:"routeSuggestion",data(){},methods:{handleFile(){this.file=this.$refs.file.files[0],console.log(this.file)},async postSuggestion(){const e=new Blob([this.file],{type:"text/plain"}),t=await e.text();console.log(t);let l=await fetch("http://localhost:3000/v1/email/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.name,file:t,poi:this.poi,email:this.email})});return l},async submit(){try{if(!this.file||!this.name)return void(this.valid=!1);this.valid=!0;const e=await this.postSuggestion(this.file,this.name);console.log(e),200===e.status&&(this.success=!0)}catch(e){console.log("error:\n"),console.log(e)}}}};var ce=Object.assign(de,{setup(e){return(e,t)=>((0,n.wg)(),(0,n.j4)(ie.K,null,{default:(0,n.w5)((()=>[e.success?((0,n.wg)(),(0,n.iD)("div",oe,[(0,n.Wm)(ee,{class:"success",type:"success",title:"Suggestion Submitted!",text:"Your route has been submitted for review by the City of Bolivar!"})])):(0,n.kq)("",!0),e.valid?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",re,[(0,n.Wm)(ee,{class:"invalidForm",type:"warning",title:"Invalid Form Input",text:"Please include GPX file and name of route.",width:"max"})])),(0,n.wy)((0,n.Wm)(ie.K,{class:"description"},{default:(0,n.w5)((()=>[(0,n.Wm)(te._,{width:"max","prepend-icon":"mdi-map-marker-outline",color:"#083a8c",class:"justify-center"},{title:(0,n.w5)((()=>[(0,n.Uk)(" Submit a route! ")])),default:(0,n.w5)((()=>[(0,n.Wm)(le.Z,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Please use the form below to submit a route suggestion for the cycling website! "),se,(0,n.Uk)(" Your submission will be reviewed by the City of Bolivar. "),ue,(0,n.Uk)(" Please include the name of your route, associated GPX file, points of interest you would like to include along the route, and optionally your contact information. ")])),_:1})])),_:1})])),_:1},512),[[i.F8,!e.success]]),(0,n.wy)((0,n._)("form",{class:"formContainer",onSubmit:t[4]||(t[4]=(0,i.iM)(((...t)=>e.handleSubmit&&e.handleSubmit(...t)),["prevent"])),enctype:"multipart/form-data",id:"form",name:"form",ref:"form"},[(0,n.Wm)(ae.h,{variant:"outlined",label:"Route Name","prepend-icon":"mdi-bike",modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.name=t),name:"name",id:"name",required:""},null,8,["modelValue"]),(0,n.Wm)(ne.Z,{label:"Upload .gpx File",variant:"outlined",type:"file",ref:"file",onChange:t[1]||(t[1]=t=>e.handleFile()),required:"",name:"file",accept:".gpx"},null,512),(0,n.Wm)(ae.h,{variant:"outlined",label:"Points of Interest","prepend-icon":"mdi-map-marker-radius",modelValue:e.poi,"onUpdate:modelValue":t[2]||(t[2]=t=>e.poi=t),name:"poi",id:"poi"},null,8,["modelValue"]),(0,n.Wm)(ae.h,{variant:"outlined",label:"Email","prepend-icon":"mdi-email",modelValue:e.email,"onUpdate:modelValue":t[3]||(t[3]=t=>e.email=t),name:"email",id:"email",type:"email"},null,8,["modelValue"]),(0,n.Wm)(B.T,{onClick:e.submit,class:"submit",type:"submit"},{default:(0,n.w5)((()=>[(0,n.Uk)("submit")])),_:1},8,["onClick"]),(0,n.Wm)(F)],544),[[i.F8,!e.success]])])),_:1}))}});const pe=ce;var he=pe},7742:function(e,t,l){l.d(t,{Z:function(){return g}});var n=l(6252),i=l(4447),a=l(7467),o=l(2736),r=l(24),s=l(2246),u=l(9483),d=l(8475),c=l(1316),p=l(2262),h=l(6533),m=l(8676),v=l(6719),f=l(3099);const y=(0,h.U)({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>"boolean"===typeof e||[1e3,1024].includes(e)},...(0,r.c)({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>(0,m.FT)(e).every((e=>null!=e&&"object"===typeof e))},...(0,o.hy)({clearable:!0})},"VFileInput"),g=(0,v.ev)()({name:"VFileInput",inheritAttrs:!1,props:y(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:l,emit:h,slots:v}=t;const{t:y}=(0,d.bU)(),g=(0,c.z)(e,"modelValue"),{isFocused:b,focus:w,blur:k}=(0,s.K)(e),C=(0,n.Fl)((()=>"boolean"!==typeof e.showSize?e.showSize:void 0)),S=(0,n.Fl)((()=>(g.value??[]).reduce(((e,t)=>{let{size:l=0}=t;return e+l}),0))),x=(0,n.Fl)((()=>(0,m.XE)(S.value,C.value))),I=(0,n.Fl)((()=>(g.value??[]).map((t=>{const{name:l="",size:n=0}=t;return e.showSize?`${l} (${(0,m.XE)(n,C.value)})`:l})))),W=(0,n.Fl)((()=>{const t=g.value?.length??0;return e.showSize?y(e.counterSizeString,t,x.value):y(e.counterString,t)})),_=(0,p.iH)(),V=(0,p.iH)(),E=(0,p.iH)(),F=(0,n.Fl)((()=>b.value||e.active)),$=(0,n.Fl)((()=>["plain","underlined"].includes(e.variant)));function z(){E.value!==document.activeElement&&E.value?.focus(),b.value||w()}function B(e){P(e)}function U(e){h("mousedown:control",e)}function P(e){E.value?.click(),h("click:control",e)}function q(t){t.stopPropagation(),z(),(0,n.Y3)((()=>{g.value=[],(0,m.dr)(e["onClick:clear"],t)}))}return(0,n.YP)(g,(e=>{const t=!Array.isArray(e)||!e.length;t&&E.value&&(E.value.value="")})),(0,f.L)((()=>{const t=!(!v.counter&&!e.counter),s=!(!t&&!v.details),[u,d]=(0,m.An)(l),[{modelValue:c,...p}]=r.q.filterProps(e),[h]=(0,o.g8)(e);return(0,n.Wm)(r.q,(0,n.dG)({ref:_,modelValue:g.value,"onUpdate:modelValue":e=>g.value=e,class:["v-file-input",{"v-text-field--plain-underlined":$.value},e.class],style:e.style,"onClick:prepend":B},u,p,{centerAffix:!$.value,focused:b.value}),{...v,default:t=>{let{id:l,isDisabled:a,isDirty:r,isReadonly:s,isValid:u}=t;return(0,n.Wm)(o.hF,(0,n.dG)({ref:V,"prepend-icon":e.prependIcon,onMousedown:U,onClick:P,"onClick:clear":q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},h,{id:l.value,active:F.value||r.value,dirty:r.value,disabled:a.value,focused:b.value,error:!1===u.value}),{...v,default:t=>{let{props:{class:l,...o}}=t;return(0,n.Wm)(n.HY,null,[(0,n.Wm)("input",(0,n.dG)({ref:E,type:"file",readonly:s.value,disabled:a.value,multiple:e.multiple,name:e.name,onClick:e=>{e.stopPropagation(),s.value&&e.preventDefault(),z()},onChange:e=>{if(!e.target)return;const t=e.target;g.value=[...t.files??[]]},onFocus:z,onBlur:k},o,d),null),(0,n.Wm)("div",{class:l},[!!g.value?.length&&(v.selection?v.selection({fileNames:I.value,totalBytes:S.value,totalBytesReadable:x.value}):e.chips?I.value.map((t=>(0,n.Wm)(i.v,{key:t,size:"small",color:e.color},{default:()=>[t]}))):I.value.join(", "))])])}})},details:s?e=>(0,n.Wm)(n.HY,null,[v.details?.(e),t&&(0,n.Wm)(n.HY,null,[(0,n.Wm)("span",null,null),(0,n.Wm)(a._,{active:!!g.value?.length,value:W.value},v.counter)])]):void 0})})),(0,u.F)({},_,V,E)}})}}]);
//# sourceMappingURL=RouteSuggestion.4b74c3d5.js.map