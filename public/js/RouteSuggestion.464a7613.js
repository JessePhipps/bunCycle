"use strict";(self["webpackChunkgps_leaflet"]=self["webpackChunkgps_leaflet"]||[]).push([[875],{2161:function(e,t,l){l.r(t),l.d(t,{default:function(){return se}});var i=l(6252),n=l(9963),a=l(3577),o=l(2262);const r="hcaptcha-api-script-id",s="_hcaptchaOnLoad";let u,d;const c=new Promise(((e,t)=>{u=e,d=t}));function p(e){if(window.hcaptcha)return u(),c;if(document.getElementById(r))return c;window[s]=u;const t=h(e),l=document.createElement("script");return l.id=r,l.src=t,l.async=!0,l.defer=!0,l.onerror=e=>{console.error("Failed to load api: "+t,e),d("Failed to load api.js")},document.head.appendChild(l),c}function h(e){let t=e.apiEndpoint;return t=m(t,"render","explicit"),t=m(t,"onload",s),t=m(t,"recaptchacompat",!1===e.reCaptchaCompat?"off":null),t=m(t,"hl",e.language),t=m(t,"sentry",e.sentry),t=m(t,"custom",e.custom),t=m(t,"endpoint",e.endpoint),t=m(t,"assethost",e.assethost),t=m(t,"imghost",e.imghost),t=m(t,"reportapi",e.reportapi),t}function m(e,t,l){if(void 0!==l&&null!==l){const i=e.includes("?")?"&":"?";return e+i+t+"="+encodeURIComponent(l)}return e}var v=(e,t)=>{for(const[l,i]of t)e[l]=i;return e};const f={name:"VueHcaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String,default:void 0},size:{type:String,default:void 0},tabindex:{type:String,default:void 0},language:{type:String,default:void 0},reCaptchaCompat:{type:Boolean,default:!0},challengeContainer:{type:String,default:void 0},rqdata:{type:String,default:void 0},sentry:{type:Boolean,default:!0},custom:{type:Boolean,default:void 0},apiEndpoint:{type:String,default:"https://hcaptcha.com/1/api.js"},endpoint:{type:String,default:void 0},reportapi:{type:String,default:void 0},assethost:{type:String,default:void 0},imghost:{type:String,default:void 0}},data:()=>({widgetId:null,hcaptcha:null,renderedCb:null}),mounted(){return p(this.$props).then(this.onApiLoaded).catch(this.onError)},unmounted(){this.teardown()},destroyed(){this.teardown()},methods:{teardown(){this.widgetId&&(this.hcaptcha.reset(this.widgetId),this.hcaptcha.remove(this.widgetId))},onApiLoaded(){this.hcaptcha=window.hcaptcha;const e={sitekey:this.sitekey,theme:this.theme,size:this.size,tabindex:this.tabindex,callback:this.onVerify,"expired-callback":this.onExpired,"chalexpired-callback":this.onChallengeExpired,"error-callback":this.onError,"open-callback":this.onOpen,"close-callback":this.onClose};this.challengeContainer&&(e["challenge-container"]=this.challengeContainer),this.widgetId=this.hcaptcha.render(this.$el,e),this.rqdata&&this.hcaptcha.setData(this.widgetId,{rqdata:this.rqdata}),this.onRendered()},execute(){this.widgetId?(this.hcaptcha.execute(this.widgetId),this.onExecuted()):this.renderedCb=()=>{this.renderedCb=null,this.execute()}},executeAsync(){if(this.widgetId)return this.onExecuted(),this.hcaptcha.execute(this.widgetId,{async:!0});let e;const t=new Promise((t=>{e=t}));return this.renderedCb=()=>{this.renderedCb=null,e()},t.then(this.executeAsync)},reset(){this.widgetId?(this.hcaptcha.reset(this.widgetId),this.onReset()):this.$emit("error","Element is not rendered yet and thus cannot reset it. Wait for `rendered` event to safely call reset.")},onRendered(){this.$emit("rendered"),this.renderedCb&&this.renderedCb()},onExecuted(){this.$emit("executed")},onReset(){this.$emit("reset")},onError(e){this.$emit("error",e),this.reset()},onVerify(){const e=this.hcaptcha.getResponse(this.widgetId),t=this.hcaptcha.getRespKey(this.widgetId);this.$emit("verify",e,t)},onExpired(){this.$emit("expired")},onChallengeExpired(){this.$emit("challengeExpired")},onOpen(){this.$emit("opened")},onClose(){this.$emit("closed")}}},y={id:"hcap-script"};function g(e,t,l,n,a,o){return(0,i.wg)(),(0,i.iD)("div",y)}var b=v(f,[["render",g]]),w=l(5988);const k=(0,w.J)("v-alert-title");var C=l(6673),x=l(875),S=l(7737),I=l(6054),W=l(9e3),V=l(8942),E=l(4203),F=l(6947),$=l(6596),_=l(8475),z=l(9680),B=l(3632),U=l(1316),q=l(8247),A=l(2716),P=l(584),H=l(9748),R=l(6533),j=l(6719);const D=["success","info","warning","error"],Y=(0,R.U)({border:{type:[Boolean,String],validator:e=>"boolean"===typeof e||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:$.lE,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>D.includes(e)},...(0,W.l)(),...(0,V.f)(),...(0,E.x)(),...(0,F.c)(),...(0,z.y)(),...(0,B.F)(),...(0,q.I)(),...(0,A.Q)(),...(0,P.x$)(),...(0,H.bk)({variant:"flat"})},"VAlert"),O=(0,j.ev)()({name:"VAlert",props:Y(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{emit:l,slots:n}=t;const a=(0,U.z)(e,"modelValue"),r=(0,i.Fl)((()=>{if(!1!==e.icon)return e.type?e.icon??`$${e.type}`:e.icon})),s=(0,i.Fl)((()=>({color:e.color??e.type,variant:e.variant}))),{themeClasses:u}=(0,P.ER)(e),{colorClasses:d,colorStyles:c,variantClasses:p}=(0,H.c1)(s),{densityClasses:h}=(0,V.t)(e),{dimensionStyles:m}=(0,E.$)(e),{elevationClasses:v}=(0,F.Y)(e),{locationStyles:f}=(0,z.T)(e),{positionClasses:y}=(0,B.K)(e),{roundedClasses:g}=(0,q.b)(e),{textColorClasses:b,textColorStyles:w}=(0,I.rY)((0,o.Vh)(e,"borderColor")),{t:W}=(0,_.bU)(),$=(0,i.Fl)((()=>({"aria-label":W(e.closeLabel),onClick(e){a.value=!1,l("click:close",e)}})));return()=>{const t=!(!n.prepend&&!r.value),l=!(!n.title&&!e.title),o=!(!n.close&&!e.closable);return a.value&&(0,i.Wm)(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${!0===e.border?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},u.value,d.value,h.value,v.value,y.value,g.value,p.value,e.class],style:[c.value,m.value,f.value,e.style],role:"alert"},{default:()=>[(0,H.Ux)(!1,"v-alert"),e.border&&(0,i.Wm)("div",{key:"border",class:["v-alert__border",b.value],style:w.value},null),t&&(0,i.Wm)("div",{key:"prepend",class:"v-alert__prepend"},[n.prepend?(0,i.Wm)(x.z,{key:"prepend-defaults",disabled:!r.value,defaults:{VIcon:{density:e.density,icon:r.value,size:e.prominent?44:28}}},n.prepend):(0,i.Wm)(S.t,{key:"prepend-icon",density:e.density,icon:r.value,size:e.prominent?44:28},null)]),(0,i.Wm)("div",{class:"v-alert__content"},[l&&(0,i.Wm)(k,{key:"title"},{default:()=>[n.title?.()??e.title]}),n.text?.()??e.text,n.default?.()]),n.append&&(0,i.Wm)("div",{key:"append",class:"v-alert__append"},[n.append()]),o&&(0,i.Wm)("div",{key:"close",class:"v-alert__close"},[n.close?(0,i.Wm)(x.z,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>[n.close?.({props:$.value})]}):(0,i.Wm)(C.T,(0,i.dG)({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},$.value),null)])]})}}});var G=l(7037),L=l(5911),T=l(7742),K=l(1669),N=l(6393);const X={key:0},Z={key:1},J=(0,i._)("br",null,null,-1),M=(0,i._)("br",null,null,-1),Q={id:"App"},ee={key:0,id:"expired"},te=(0,i._)("h1",null,"Challenge expired!",-1),le=[te],ie={key:1,id:"error"},ne=(0,i._)("h1",null,"Error:",-1),ae={componenets:{},name:"routeSuggestion",data(){return{name:"",file:null,success:!1,email:"",poi:"",valid:!0}},methods:{handleFile(){this.file=this.$refs.file.files[0],console.log(this.file)},async postSuggestion(){const e=new Blob([this.file],{type:"text/plain"}),t=await e.text();console.log(t);let l=await fetch("http://localhost:3000/v1/email/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.name,file:t,poi:this.poi,email:this.email})});return l},async submit(){try{if(1==verified.value){if(!this.file||!this.name)return void(this.valid=!1);this.valid=!0;const e=await this.postSuggestion(this.file,this.name);console.log(e),200===e.status&&(this.success=!0)}}catch(e){console.log("error:\n"),console.log(e)}}}};var oe=Object.assign(ae,{setup(e){const t=(0,o.iH)(!1),l=(0,o.iH)(!1),r=(0,o.iH)(""),s=(0,o.iH)(""),u=(0,o.iH)("");function d(e,l){t.value=!0,r.value=e,s.value=l,console.log(`Callback token: ${e}, ekey: ${l}`)}function c(){t.value=!1,r.value=null,s.value=null,l.value=!0,console.log("Expired")}function p(){t.value=!1,r.value=null,s.value=null,l.value=!0,console.log("Challenge expired")}function h(e){r.value=null,s.value=null,u.value=e,console.log(`Error: ${e}`)}return(e,r)=>((0,i.wg)(),(0,i.j4)(K.K,null,{default:(0,i.w5)((()=>[e.success?((0,i.wg)(),(0,i.iD)("div",X,[(0,i.Wm)(O,{class:"success",type:"success",title:"Suggestion Submitted!",text:"Your route has been submitted for review by the City of Bolivar!"})])):(0,i.kq)("",!0),e.valid?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",Z,[(0,i.Wm)(O,{class:"invalidForm",type:"warning",title:"Invalid Form Input",text:"Please include GPX file and name of route.",width:"max"})])),(0,i.wy)((0,i.Wm)(K.K,{class:"description"},{default:(0,i.w5)((()=>[(0,i.Wm)(G._,{width:"max","prepend-icon":"mdi-map-marker-outline",color:"#083a8c",class:"justify-center"},{title:(0,i.w5)((()=>[(0,i.Uk)(" Submit a route! ")])),default:(0,i.w5)((()=>[(0,i.Wm)(L.Z,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" Please use the form below to submit a route suggestion for the cycling website! "),J,(0,i.Uk)(" Your submission will be reviewed by the City of Bolivar. "),M,(0,i.Uk)(" Please include the name of your route, associated GPX file, points of interest you would like to include along the route, and optionally your contact information. ")])),_:1})])),_:1})])),_:1},512),[[n.F8,!e.success]]),(0,i.wy)((0,i._)("form",{class:"formContainer",onSubmit:r[4]||(r[4]=(0,n.iM)(((...t)=>e.handleSubmit&&e.handleSubmit(...t)),["prevent"])),enctype:"multipart/form-data",id:"form",name:"form",ref:"form"},[(0,i.Wm)(N.h,{variant:"outlined",label:"Route Name","prepend-icon":"mdi-bike",modelValue:e.name,"onUpdate:modelValue":r[0]||(r[0]=t=>e.name=t),name:"name",id:"name",required:""},null,8,["modelValue"]),(0,i.Wm)(T.Z,{label:"Upload .gpx File",variant:"outlined",type:"file",ref:"file",onChange:r[1]||(r[1]=t=>e.handleFile()),required:"",name:"file",accept:".gpx"},null,512),(0,i.Wm)(N.h,{variant:"outlined",label:"Points of Interest","prepend-icon":"mdi-map-marker-radius",modelValue:e.poi,"onUpdate:modelValue":r[2]||(r[2]=t=>e.poi=t),name:"poi",id:"poi"},null,8,["modelValue"]),(0,i.Wm)(N.h,{variant:"outlined",label:"Email","prepend-icon":"mdi-email",modelValue:e.email,"onUpdate:modelValue":r[3]||(r[3]=t=>e.email=t),name:"email",id:"email",type:"email"},null,8,["modelValue"]),t.value?((0,i.wg)(),(0,i.j4)(C.T,{key:0,onClick:e.submit,class:"submit",type:"submit"},{default:(0,i.w5)((()=>[(0,i.Uk)("submit")])),_:1},8,["onClick"])):(0,i.kq)("",!0)],544),[[n.F8,!e.success]]),(0,i._)("div",Q,[l.value?((0,i.wg)(),(0,i.iD)("div",ee,le)):(0,i.kq)("",!0),u.value?((0,i.wg)(),(0,i.iD)("div",ie,[ne,(0,i._)("p",null,(0,a.zw)(u.value),1)])):(0,i.kq)("",!0),(0,i.Wm)((0,o.SU)(b),{sitekey:"61e05036-5aa4-47a1-9e3e-9109ab2c1762",onVerify:d,onExpired:c,onChallengeExpired:p,onError:h})])])),_:1}))}});const re=oe;var se=re},7742:function(e,t,l){l.d(t,{Z:function(){return g}});var i=l(6252),n=l(4447),a=l(7467),o=l(2736),r=l(24),s=l(2246),u=l(9483),d=l(8475),c=l(1316),p=l(2262),h=l(6533),m=l(8676),v=l(6719),f=l(3099);const y=(0,h.U)({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>"boolean"===typeof e||[1e3,1024].includes(e)},...(0,r.c)({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>(0,m.FT)(e).every((e=>null!=e&&"object"===typeof e))},...(0,o.hy)({clearable:!0})},"VFileInput"),g=(0,v.ev)()({name:"VFileInput",inheritAttrs:!1,props:y(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:l,emit:h,slots:v}=t;const{t:y}=(0,d.bU)(),g=(0,c.z)(e,"modelValue"),{isFocused:b,focus:w,blur:k}=(0,s.K)(e),C=(0,i.Fl)((()=>"boolean"!==typeof e.showSize?e.showSize:void 0)),x=(0,i.Fl)((()=>(g.value??[]).reduce(((e,t)=>{let{size:l=0}=t;return e+l}),0))),S=(0,i.Fl)((()=>(0,m.XE)(x.value,C.value))),I=(0,i.Fl)((()=>(g.value??[]).map((t=>{const{name:l="",size:i=0}=t;return e.showSize?`${l} (${(0,m.XE)(i,C.value)})`:l})))),W=(0,i.Fl)((()=>{const t=g.value?.length??0;return e.showSize?y(e.counterSizeString,t,S.value):y(e.counterString,t)})),V=(0,p.iH)(),E=(0,p.iH)(),F=(0,p.iH)(),$=(0,i.Fl)((()=>b.value||e.active)),_=(0,i.Fl)((()=>["plain","underlined"].includes(e.variant)));function z(){F.value!==document.activeElement&&F.value?.focus(),b.value||w()}function B(e){q(e)}function U(e){h("mousedown:control",e)}function q(e){F.value?.click(),h("click:control",e)}function A(t){t.stopPropagation(),z(),(0,i.Y3)((()=>{g.value=[],(0,m.dr)(e["onClick:clear"],t)}))}return(0,i.YP)(g,(e=>{const t=!Array.isArray(e)||!e.length;t&&F.value&&(F.value.value="")})),(0,f.L)((()=>{const t=!(!v.counter&&!e.counter),s=!(!t&&!v.details),[u,d]=(0,m.An)(l),[{modelValue:c,...p}]=r.q.filterProps(e),[h]=(0,o.g8)(e);return(0,i.Wm)(r.q,(0,i.dG)({ref:V,modelValue:g.value,"onUpdate:modelValue":e=>g.value=e,class:["v-file-input",{"v-text-field--plain-underlined":_.value},e.class],style:e.style,"onClick:prepend":B},u,p,{centerAffix:!_.value,focused:b.value}),{...v,default:t=>{let{id:l,isDisabled:a,isDirty:r,isReadonly:s,isValid:u}=t;return(0,i.Wm)(o.hF,(0,i.dG)({ref:E,"prepend-icon":e.prependIcon,onMousedown:U,onClick:q,"onClick:clear":A,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},h,{id:l.value,active:$.value||r.value,dirty:r.value,disabled:a.value,focused:b.value,error:!1===u.value}),{...v,default:t=>{let{props:{class:l,...o}}=t;return(0,i.Wm)(i.HY,null,[(0,i.Wm)("input",(0,i.dG)({ref:F,type:"file",readonly:s.value,disabled:a.value,multiple:e.multiple,name:e.name,onClick:e=>{e.stopPropagation(),s.value&&e.preventDefault(),z()},onChange:e=>{if(!e.target)return;const t=e.target;g.value=[...t.files??[]]},onFocus:z,onBlur:k},o,d),null),(0,i.Wm)("div",{class:l},[!!g.value?.length&&(v.selection?v.selection({fileNames:I.value,totalBytes:x.value,totalBytesReadable:S.value}):e.chips?I.value.map((t=>(0,i.Wm)(n.v,{key:t,size:"small",color:e.color},{default:()=>[t]}))):I.value.join(", "))])])}})},details:s?e=>(0,i.Wm)(i.HY,null,[v.details?.(e),t&&(0,i.Wm)(i.HY,null,[(0,i.Wm)("span",null,null),(0,i.Wm)(a._,{active:!!g.value?.length,value:W.value},v.counter)])]):void 0})})),(0,u.F)({},V,E,F)}})}}]);
//# sourceMappingURL=RouteSuggestion.464a7613.js.map