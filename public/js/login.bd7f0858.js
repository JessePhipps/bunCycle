"use strict";(self["webpackChunkgps_leaflet"]=self["webpackChunkgps_leaflet"]||[]).push([[535],{1368:function(e,t,l){l.r(t),l.d(t,{default:function(){return v}});var a=l(6252),n=l(2262),u=l(9963),s=l(2201),i=l(6673),o=l(9357),d=l(9003),r=l(3379),c=l(6393);const f={style:{display:"flex","justify-content":"center"}},m=(0,a._)("h1",null,"Login",-1);var p={__name:"LoginView",setup(e){let t=(0,n.iH)(""),l=(0,n.iH)(""),p=(0,n.qj)([e=>e.length>0||"Please add a value to this field"]),h=async()=>{let e={username:t.value,password:l.value},a=await fetch("https://cyclebackend-dn4hl3ql4q-uc.a.run.app/v1/auth/login",{method:"POST",headers:{"Content-Type":"application/json",credentials:"include"},body:JSON.stringify(e)});a=await a.json(),1==a.success?s["default"].push("/edit"):alert("Login failed")},v=async()=>{let e=await fetch("https://cyclebackend-dn4hl3ql4q-uc.a.run.app/v1/auth/logout",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});e=await e.json(),1==e.success?s["default"].push("/"):alert("Logout failed")},b=()=>{h()};return(e,s)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",f,[(0,a.Wm)(i.T,{onClick:(0,n.SU)(v),flat:""},{default:(0,a.w5)((()=>[(0,a.Uk)("Logout")])),_:1},8,["onClick"])]),(0,a.Wm)(d.o,{justify:"center"},{default:(0,a.w5)((()=>[(0,a.Wm)(r.D,{cols:"3"},{default:(0,a.w5)((()=>[(0,a.Wm)(o.O,{class:"form",onSubmit:(0,u.iM)((0,n.SU)(b),["prevent"])},{default:(0,a.w5)((()=>[m,(0,a.Wm)(c.h,{label:"Username",variant:"outlined",modelValue:(0,n.SU)(t),"onUpdate:modelValue":s[0]||(s[0]=e=>(0,n.dq)(t)?t.value=e:t=e),rules:(0,n.SU)(p),required:""},null,8,["modelValue","rules"]),(0,a.Wm)(c.h,{label:"Password",variant:"outlined",modelValue:(0,n.SU)(l),"onUpdate:modelValue":s[1]||(s[1]=e=>(0,n.dq)(l)?l.value=e:l=e),rules:(0,n.SU)(p),required:""},null,8,["modelValue","rules"]),(0,a.Wm)(i.T,{type:"submit",flat:""},{default:(0,a.w5)((()=>[(0,a.Uk)("Submit")])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1})],64))}};const h=p;var v=h},9357:function(e,t,l){l.d(t,{O:function(){return f}});var a=l(6252),n=l(9e3),u=l(9728),s=l(9483),i=l(2262),o=l(6533),d=l(6719),r=l(3099);const c=(0,o.U)({...(0,n.l)(),...(0,u.vC)()},"VForm"),f=(0,d.ev)()({name:"VForm",props:c(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:l,emit:n}=t;const o=(0,u.Np)(e),d=(0,i.iH)();function c(e){e.preventDefault(),o.reset()}function f(e){const t=e,l=o.validate();t.then=l.then.bind(l),t.catch=l.catch.bind(l),t.finally=l.finally.bind(l),n("submit",t),t.defaultPrevented||l.then((e=>{let{valid:t}=e;t&&d.value?.submit()})),t.preventDefault()}return(0,r.L)((()=>(0,a.Wm)("form",{ref:d,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:c,onSubmit:f},[l.default?.(o)]))),(0,s.F)(o,d)}})}}]);
//# sourceMappingURL=login.bd7f0858.js.map