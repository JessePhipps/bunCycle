(function(){"use strict";var e={8785:function(e,t,n){var l=n(9963),o=n(6252),a=n(3577),r=n(6673),u=n(1492),i=n(9003),s=n(3379);const c=(0,o._)("strong",null,"City of Bolivar",-1);function d(e,t,n,l,d,f){return(0,o.wg)(),(0,o.j4)(u.c,{class:"footer"},{default:(0,o.w5)((()=>[(0,o.Wm)(i.o,{justify:"center","no-gutters":""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.links,(e=>((0,o.wg)(),(0,o.j4)(r.T,{key:e,color:"white",variant:"text",class:"mx-2",rounded:"xl",onClick:t=>f.handleClick(e)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.name),1)])),_:2},1032,["onClick"])))),128)),(0,o.Wm)(s.D,{class:"cityText",cols:"12"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)((new Date).getFullYear())+" — ",1),c])),_:1})])),_:1})])),_:1})}var f={data:()=>({links:[{name:"Home",to:"/"},{name:"About",to:"/about"},{name:"Contact Us",to:"https://bolivar.mo.us/contact-us/"}]}),methods:{handleClick(e){var t=document.createElement("a");t.href=e.to,t.click()}}},m=n(3744);const p=(0,m.Z)(f,[["render",d]]);var g=p,h=n.p+"img/logo.5372a2a3.jpg",w=n(1669),_=n(4007),v=n(7074),y=n(5106),b=n(4147),k=n(711);const W={elevation:24};function x(e,t,n,l,u,i){const s=(0,o.up)("v-list-tile-content"),c=(0,o.up)("v-list-tile");return(0,o.wg)(),(0,o.iD)("nav",W,[(0,o.Wm)(w.K,{"justify-center":"",class:"navbar"},{default:(0,o.w5)((()=>[(0,o.Wm)(k.i,{class:"toolbar",flat:"",app:""},{default:(0,o.w5)((()=>[(0,o.Wm)(v.f,{class:"logo",src:h}),(0,o.Wm)(_.C,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y.i,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.links,(e=>((0,o.wg)(),(0,o.j4)(c,{key:e.text},{default:(0,o.w5)((()=>[(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{class:"white--text",router:"",to:e.route},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.text),1)])),_:2},1032,["to"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}),(0,o.Wm)(k.i,{class:"hamburger-container"},{default:(0,o.w5)((()=>[(0,o.Wm)(v.f,{class:"logo",src:h}),(0,o.Wm)(b.T,{class:"hamburger"},{activator:(0,o.w5)((({props:e})=>[(0,o.Wm)(r.T,(0,o.dG)({class:"hamburger-icon",icon:"mdi-menu",color:"#083a8c"},e),null,16)])),default:(0,o.w5)((()=>[(0,o.Wm)(y.i,{class:"menu-list"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.links,(e=>((0,o.wg)(),(0,o.j4)(c,{key:e.text},{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{variant:"plane",class:"white--text",router:"",to:e.route},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.text),1)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1})])}var j={data(){return{links:[{text:"Home",route:"/"},{text:"About",route:"/about"},{text:"Route Suggestion",route:"/routesuggestion"}]}}};const S=(0,m.Z)(j,[["render",x]]);var U=S,R=n(4642),E=n(6086),z=n(1457),O=n(9289),D={__name:"App",setup(e){const t=(0,R.k)();return(0,o.bv)((async()=>{await t.getRoutesInit();const{routes:e}=(0,E.Jk)(t);return{routeStore:t}})),(e,t)=>{const n=(0,o.up)("router-view"),l=(0,o.up)("v-content");return(0,o.wg)(),(0,o.j4)(z.q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(O.O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(U),(0,o.Wm)(l,null,{default:(0,o.w5)((()=>[(0,o.Wm)(n)])),_:1}),(0,o.Wm)(g)])),_:1})])),_:1})}}};const L=D;var C=L,T=n(2201),P=n(2262),A=n(7713),V=n(7737),H=n(3881);const B={class:"map"},M={style:{height:"500px",width:"auto"}},K={key:0},N={class:"nameh3"};var q={__name:"Map",setup(e){const t=(0,R.k)();(0,E.Jk)(t),(0,E.Jk)(t);let n=(0,P.qj)(),l=(0,o.Fl)((()=>t.getRoutes.map((e=>({...e,color:d()}))))),r=(0,P.iH)(12),u=e=>{let t=0,n=Math.ceil(e.length/500),l=[];for(let o=0;o<e.length;o+=n)l[t]=[e[o][1],e[o][0]],t++;return l},c=0,d=()=>{Math.floor(6*Math.random());const e=["rgb(60, 140, 255)","rgb(255, 0, 255)","rgb(255, 215, 0)","rgb(100, 100 ,200 )","rgb(0, 255 ,200 )","rgb(10, 255 ,0)","rgb(200, 250,20)"],t=`${e[c]}`;return c<6?c++:c=0,t},f=(0,P.qj)({});return(e,t)=>{const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(w.K,{fluid:"",class:"mapContainer"},{default:(0,o.w5)((()=>[(0,o._)("div",B,[(0,o._)("div",M,[(0,o.Wm)((0,P.SU)(A.iA),{ref_key:"map",ref:n,zoom:(0,P.SU)(r),"onUpdate:zoom":t[0]||(t[0]=e=>(0,P.dq)(r)?r.value=e:r=e),center:[37.5997592,-93.4091279],options:(0,P.SU)(f)},{default:(0,o.w5)((()=>[(0,o.Wm)((0,P.SU)(A.Hw),{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","layer-type":"base",name:"OpenStreetMap"}),(0,P.SU)(l)?((0,o.wg)(),(0,o.iD)("div",K,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,P.SU)(l),(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.name},[(0,o.Wm)((0,P.SU)(A.P6),{"lat-lngs":(0,P.SU)(u)(e.route.features[0].geometry.coordinates),color:e.color,weight:"4"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,P.SU)(A.Q2),null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{class:"popup",to:"/route/"+e.id},{default:(0,o.w5)((()=>[(0,o.Wm)(w.K,null,{default:(0,o.w5)((()=>[(0,o._)("h3",N,(0,a.zw)(e.name),1),(0,o.Wm)(H.C,{height:5,width:0}),(0,o._)("h4",null,"Length: "+(0,a.zw)(e.length)+" miles",1),(0,o._)("h4",null,"Difficulty: "+(0,a.zw)(e.difficulty),1),(0,o._)("h4",null,"Terrain: "+(0,a.zw)(e.terrain),1),(0,o.Wm)(i.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s.D,{cols:"10"}),(0,o.Wm)(s.D,{cols:"2"},{default:(0,o.w5)((()=>[(0,o.Wm)(V.t,{icon:"mdi-launch"})])),_:1})])),_:1})])),_:2},1024)])),_:2},1032,["to"])])),_:2},1024)])),_:2},1032,["lat-lngs","color"])])))),128))])):(0,o.kq)("",!0)])),_:1},8,["zoom","options"])])])])),_:1})}}};const J=q;var Y=J,F=n(1528),G=n(7037),I=n(7695),Z=n(6393);const $={class:"gpxBtn"};var X={__name:"RoutesTable",setup(e){let t=(0,P.iH)(""),n=(0,P.qj)([{align:"start",key:"name",sortable:!0,title:"Routes"},{key:"gpx",title:""},{key:"length",title:"Length (miles)"},{key:"terrain",title:"Terrain"},{key:"difficulty",title:"Difficulty"},{key:"elevation",title:"Elevation Gain (feet)"}]);const l=(0,R.k)(),{getRoutes:u}=(0,E.Jk)(l);let i=(0,o.Fl)((()=>l.getRoutes)),s=async(e,t)=>{e=atob(e);const n=new Blob([e],{type:"text/plain"});let l=await n.text(),o=t+".gpx",a=document.createElement("a"),r=new Blob([l],{type:"application/gpx+xml"});a.setAttribute("href",window.URL.createObjectURL(r)),a.setAttribute("download",o),a.dataset.downloadurl=["application/gpx+xml",a.download,a.href].join(":"),a.draggable=!0,a.classList.add("dragout"),a.click()};return(e,l)=>{const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(G._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(I.E,null,{default:(0,o.w5)((()=>[(0,o.Wm)(_.C),(0,o.Wm)(Z.h,{modelValue:(0,P.SU)(t),"onUpdate:modelValue":l[0]||(l[0]=e=>(0,P.dq)(t)?t.value=e:t=e),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])])),_:1}),(0,o.Wm)((0,P.SU)(F.y_),{class:"routes-table",headers:(0,P.SU)(n),items:(0,P.SU)(i),search:(0,P.SU)(t)},{"item.name":(0,o.w5)((({item:t})=>[(0,o.Wm)(u,{to:"/route/"+t.id,onClick:e.handleClick},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(t.name),1)])),_:2},1032,["to","onClick"])])),"item.gpx":(0,o.w5)((({item:e})=>[(0,o._)("div",$,[(0,o.Wm)(r.T,{icon:"mdi-download",onClick:t=>(0,P.SU)(s)(e.gpx,e.name)},null,8,["onClick"])])])),"item.length":(0,o.w5)((({item:e})=>[(0,o._)("p",null,(0,a.zw)(e.length),1)])),"item.difficulty":(0,o.w5)((({item:e})=>[(0,o._)("p",null,(0,a.zw)(e.difficulty),1)])),"item.terrain":(0,o.w5)((({item:e})=>[(0,o._)("p",null,(0,a.zw)(e.terrain),1)])),"item.elevation":(0,o.w5)((({item:e})=>[(0,o._)("p",null,(0,a.zw)(e.elevation),1)])),_:1},8,["headers","items","search"])])),_:1})}}};const Q=X;var ee=Q,te=n(5911),ne=n(6334);const le=(0,o._)("br",null,null,-1),oe=(0,o._)("br",null,null,-1);function ae(e,t,n,l,u,i){const s=(0,o.up)("CardMap"),c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(w.K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{class:"cardlink",to:"/route/"+n.route.id},{default:(0,o.w5)((()=>[(0,o.Wm)(G._,{class:"mx-auto","max-width":"375","max-height":"500"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{route:n.route,cover:""},null,8,["route"]),(0,o.Wm)(I.E,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(n.route.name),1)])),_:1}),(0,o.Wm)(te.Z,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(n.route.length)+" miles ",1),le,(0,o.Uk)(" "+(0,a.zw)(n.route.difficulty)+" ",1),oe,(0,o.Uk)(" Elevation Gain: "+(0,a.zw)(n.route.elevation)+" Feet",1)])),_:1}),(0,o.Wm)(ne.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{router:"",to:u.link},{default:(0,o.w5)((()=>[(0,o.Uk)(" View Route ")])),_:1},8,["to"])])),_:1})])),_:1})])),_:1},8,["to"])])),_:1})}const re={style:{height:"200px",width:"auto"}},ue={key:0};function ie(e,t,n,l,a,r){const u=(0,o.up)("l-tile-layer"),i=(0,o.up)("LPolyline"),s=(0,o.up)("l-map");return(0,o.wg)(),(0,o.iD)("div",re,[(0,o.Wm)(s,{ref:"map",zoom:a.zoom,"onUpdate:zoom":t[0]||(t[0]=e=>a.zoom=e),options:a.mapOptions},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","layer-type":"base",name:"OpenStreetMap"}),n.route?((0,o.wg)(),(0,o.iD)("div",ue,[(0,o.Wm)(i,{onReady:r.red,ref:"geo","lat-lngs":r.poly(n.route.route.features[0].geometry.coordinates),color:e.blue},null,8,["onReady","lat-lngs","color"])])):(0,o.kq)("",!0)])),_:1},8,["zoom","options"])])}var se={props:{route:null},components:{LMap:A.iA,LTileLayer:A.Hw,LMarker:A.$R,LGeoJson:A.jK,LPolyline:A.P6},data(){return{zoom:12,markerLatLng:[37.5997592,-93.4091279],routes:null,mapOptions:{scrollWheelZoom:!1,interactive:!1,clickable:!1,zoomControl:!1,dragging:!1}}},methods:{poly(e){let t=0,n=Math.ceil(e.length/50),l=[];for(let o=0;o<e.length;o+=n)l[t]=[e[o][1],e[o][0]],t++;return console.log(l.length),l},red(){this.geo=this.$refs.geo.leafletObject,console.log("Bounds:",this.geo.getBounds()),this.$refs.map.leafletObject.fitBounds(this.geo.getBounds())}}};const ce=(0,m.Z)(se,[["render",ie]]);var de=ce,fe={props:{route:null,link:null},data(){return{link:"/route/"+this.route.id}},components:{CardMap:de}};const me=(0,m.Z)(fe,[["render",ae]]);var pe=me,ge=n(7230);const he={class:"search-filters"},we=(0,o._)("br",null,null,-1),_e={class:"filters"},ve=(0,o._)("div",{class:"filter-spacing"},null,-1),ye=(0,o._)("br",null,null,-1),be=(0,o._)("div",{class:"filter-spacing"},null,-1),ke=(0,o._)("br",null,null,-1),We=(0,o._)("div",{class:"filter-spacing"},null,-1),xe=(0,o._)("br",null,null,-1),je={key:0,style:{"text-align":"center"}},Se=(0,o._)("br",null,null,-1);var Ue={__name:"HomeView",setup(e){const t=(0,R.k)(),{getRoutes:n}=(0,E.Jk)(t);(0,o.Fl)((()=>t.getRoutes));const l=(0,P.iH)(""),a=(0,P.iH)(null),r=(0,P.iH)(null),u=(0,P.iH)(null),c=(0,P.iH)(null),d=["Any","Beginner","Intermediate","Expert"],f=(0,o.Fl)((()=>{let e=n.value;const t=l.value.toLowerCase().trim();return t&&(e=e.filter((e=>e.name.toLowerCase().includes(t)))),a.value&&(e=e.filter((e=>e.length>=a.value))),r.value&&(e=e.filter((e=>e.length<=r.value))),u.value&&"Any"!==u.value&&(e=e.filter((e=>e.difficulty===u.value))),c.value&&(e=e.filter((e=>e.elevation<=c.value))),e}));return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(w.K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Y)])),_:1}),(0,o.Wm)(w.K,null,{default:(0,o.w5)((()=>[(0,o._)("div",he,[(0,o.Wm)(Z.h,{variant:"solo",modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),"append-icon":"mdi-magnify",label:"Search for a route!","single-line":"","hide-details":"",placeholder:"Search for a route!"},null,8,["modelValue"]),we,(0,o._)("div",_e,[(0,o.Wm)(Z.h,{variant:"solo",modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),label:"Minimum Route Length","single-line":"","hide-details":"",type:"number"},null,8,["modelValue"]),ve,ye,(0,o.Wm)(Z.h,{variant:"solo",modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=e=>r.value=e),label:"Maximum Route Length","single-line":"","hide-details":"",type:"number"},null,8,["modelValue"]),be,ke,(0,o.Wm)(Z.h,{variant:"solo",modelValue:c.value,"onUpdate:modelValue":t[3]||(t[3]=e=>c.value=e),label:"Maximum Elevation Gain","single-line":"","hide-details":"",type:"number"},null,8,["modelValue"]),We,xe,(0,o.Wm)(ge.rL,{class:"difficulty-select",variant:"solo",modelValue:u.value,"onUpdate:modelValue":t[4]||(t[4]=e=>u.value=e),items:d,label:"Difficulty"},null,8,["modelValue"])])]),(0,o.Wm)(i.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w.K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(s.D,{cols:"6"},{default:(0,o.w5)((()=>[f.value.length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("h1",je," No route found "))])),_:1})])),_:1})])),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(f.value,(e=>((0,o.wg)(),(0,o.j4)(s.D,{key:e,sm:"12",md:"6",lg:"3",xl:"2"},{default:(0,o.w5)((()=>[(0,o.Wm)(pe,{route:e},null,8,["route"])])),_:2},1024)))),128))])),_:1})])),_:1}),(0,o.Wm)(ee),Se],64))}};const Re=Ue;var Ee=Re,ze=n(2762);const Oe=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{class:"text-left"},"Length"),(0,o._)("th",{class:"text-left"},"Terrain"),(0,o._)("th",{class:"text-left"},"Difficulty"),(0,o._)("th",{class:"text-left"},"Elevation Gain"),(0,o._)("th",null,"Try it out!")])],-1),De={class:"table"},Le=(0,o._)("th",{class:"text-left"},"Length",-1),Ce=(0,o._)("th",{class:"text-left"},"Terrain",-1),Te=(0,o._)("th",{class:"text-left"},"Elevation Gain",-1),Pe=(0,o._)("th",{class:"text-left"},"Difficulty",-1),Ae=(0,o._)("th",{class:"text-left"},"Try it out!",-1);function Ve(e,t,n,l,u,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(ze.Y,{class:"d-none d-lg-block"},{default:(0,o.w5)((()=>[Oe,(0,o._)("tbody",null,[(0,o._)("tr",null,[(0,o._)("td",null,(0,a.zw)(n.route?.length)+" miles",1),(0,o._)("td",null,(0,a.zw)(n.route?.terrain),1),(0,o._)("td",null,(0,a.zw)(n.route?.difficulty),1),(0,o._)("td",null,(0,a.zw)(n.route?.elevation)+" feet",1),(0,o._)("td",null,[(0,o.Wm)(r.T,{onClick:t[0]||(t[0]=e=>i.downloadGPX(n.route.gpx,n.route.name)),icon:"mdi-download",style:{scale:"85%",color:"blue"}})])])])])),_:1}),(0,o.Wm)(ze.Y,{class:"d-lg-none"},{default:(0,o.w5)((()=>[(0,o._)("tbody",De,[(0,o._)("tr",null,[Le,(0,o._)("td",null,(0,a.zw)(n.route?.length)+" miles",1)]),(0,o._)("tr",null,[Ce,(0,o._)("td",null,(0,a.zw)(n.route?.terrain),1)]),(0,o._)("tr",null,[Te,(0,o._)("td",null,(0,a.zw)(n.route?.elevation)+" feet",1)]),(0,o._)("tr",null,[Pe,(0,o._)("td",null,(0,a.zw)(n.route?.difficulty),1)]),(0,o._)("tr",null,[Ae,(0,o._)("td",null,[(0,o.Wm)(r.T,{class:"gpxBtn",icon:"mdi-download",onClick:t[1]||(t[1]=e=>i.downloadGPX(n.route.gpx,n.route.name))})])])])])),_:1})],64)}var He={props:{route:null},methods:{async downloadGPX(e,t){e=atob(e);const n=new Blob([e],{type:"text/plain"});var l=await n.text(),o=t+".gpx",a=document.createElement("a"),r=new Blob([l],{type:"text/plain"});a.setAttribute("href",window.URL.createObjectURL(r)),a.setAttribute("download",o),a.dataset.downloadurl=["text/plain",a.download,a.href].join(":"),a.draggable=!0,a.classList.add("dragout"),a.click()}}};const Be=(0,m.Z)(He,[["render",Ve]]);var Me=Be;const Ke=(0,o._)("strong",{class:"text-decoration-bold"},"Description",-1);function Ne(e,t,n,l,r,u){return(0,o.wg)(),(0,o.j4)(w.K,{class:"desc"},{default:(0,o.w5)((()=>[Ke,(0,o._)("p",null,(0,a.zw)(n.route?.desc),1)])),_:1})}var qe={props:{route:null}};const Je=(0,m.Z)(qe,[["render",Ne]]);var Ye=Je;const Fe={class:"desc"},Ge=(0,o._)("strong",{class:"text-decoration-bold"},"Points of interest",-1);function Ie(e,t,n,l,r,u){return(0,o.wg)(),(0,o.iD)("div",Fe,[Ge,(0,o._)("p",null,(0,a.zw)(n.route?.poi),1)])}var Ze={props:{route:null}};const $e=(0,m.Z)(Ze,[["render",Ie]]);var Xe=$e;const Qe={key:0,class:"map"},et={style:{height:"400px",width:"auto"}},tt={key:0};function nt(e,t,n,l,a,r){const u=(0,o.up)("l-tile-layer"),i=(0,o.up)("l-geo-json"),s=(0,o.up)("l-map");return n.route.route?((0,o.wg)(),(0,o.iD)("div",Qe,[(0,o._)("div",et,[(0,o.Wm)(s,{ref:"map",zoom:"9",center:[37.5997592,-93.4091279]},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","layer-type":"base",name:"OpenStreetMap"}),n.route?((0,o.wg)(),(0,o.iD)("div",tt,[(0,o.Wm)(i,{ref:"geo",onReady:r.red,geojson:n.route.route},null,8,["onReady","geojson"])])):(0,o.kq)("",!0)])),_:1},512)])])):(0,o.kq)("",!0)}var lt={props:{route:null},components:{LMap:A.iA,LTileLayer:A.Hw,LMarker:A.$R,LGeoJson:A.jK},data(){return{zoom:11,markerLatLng:[37.5997592,-93.4091279],routes:null,mapOptions:{scrollWheelZoom:!1}}},methods:{red(){this.geo=this.$refs.geo.leafletObject,this.$refs.map.leafletObject.fitBounds(this.geo.getBounds())}}};const ot=(0,m.Z)(lt,[["render",nt]]);var at=ot;const rt={key:0,class:""},ut={class:"text-h4",style:{"text-align":"center"}},it={class:"desc"},st={key:1,class:"noRoute"},ct=(0,o._)("h1",null,"Loading...",-1);var dt={__name:"RouteView",setup(e){const t=(0,R.k)(),n=(0,T.yj)(),{getRoutebyID:l}=(0,E.Jk)(t);(0,P.iH)(12);let r=(0,o.Fl)((()=>t.getRoutebyID(n.params.id)));return(e,t)=>{const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[(0,P.SU)(r)?((0,o.wg)(),(0,o.iD)("div",rt,[(0,o.Wm)(i.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(s.D,{cols:"9"},{default:(0,o.w5)((()=>[(0,o.Wm)(at,{route:(0,P.SU)(r)},null,8,["route"])])),_:1})])),_:1}),(0,o.Wm)(i.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(s.D,{cols:"9"},{default:(0,o.w5)((()=>[(0,o._)("div",ut,(0,a.zw)((0,P.SU)(r).name),1)])),_:1})])),_:1}),(0,o.Wm)(i.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(s.D,{cols:"9"},{default:(0,o.w5)((()=>[(0,o.Wm)(Me,{route:(0,P.SU)(r)},null,8,["route"])])),_:1})])),_:1}),(0,o.Wm)(i.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(s.D,{cols:"9"},{default:(0,o.w5)((()=>[(0,o._)("div",it,[(0,o.Wm)(Ye,{route:(0,P.SU)(r)},null,8,["route"]),(0,o.Wm)(Xe,{route:(0,P.SU)(r)},null,8,["route"])])])),_:1})])),_:1})])):(0,o.kq)("",!0),(0,P.SU)(r)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",st,[ct,(0,o.Wm)(n,{class:"noRoutea",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Back to Home")])),_:1})]))])}}};const ft=dt;var mt=ft;let pt=!1,gt=async()=>{try{let e=await fetch("http://localhost:3000/a1/user/checksession",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({check:"session"})});e=await e.json(),pt="passed"===e.message}catch(e){console.error(e,"caught err"),pt=!1}};const ht=[{path:"/route/:id",name:"Route",component:mt},{path:"/",name:"home",component:Ee},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,9808))}},{path:"/edit",name:"Edit Routes",meta:{requiresAuth:!0},component:function(){return n.e(922).then(n.bind(n,4385))}},{path:"/login",name:"Login",component:function(){return n.e(535).then(n.bind(n,5068))}},{path:"/routesuggestion",name:"RouteSuggestion",component:function(){return n.e(875).then(n.bind(n,8383))}},{path:"/:pathMatch(.*)*",name:"404",component:function(){return n.e(596).then(n.bind(n,7371))}}],wt=(0,T.p7)({history:(0,T.PO)("/"),routes:ht});wt.beforeEach((async(e,t,n)=>{e.matched.some((e=>e.meta.requiresAuth))?(pt=!1,await gt(),pt?n():(alert("unauthorized"),n("/"))):n()}));var _t=wt,vt=(n(9773),n(6579)),yt=(0,vt.Rd)();async function bt(){const e=await n.e(461).then(n.t.bind(n,5933,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}const kt=(0,E.WB)();bt(),(0,l.ri)(C).use(kt).use(_t).use(yt).mount("#app")},4642:function(e,t,n){n.d(t,{k:function(){return o}});var l=n(6086);const o=(0,l.Q_)("routeStore",{state:()=>({routes:[]}),getters:{getRoutes(){return this.routes},getRoutebyID:e=>t=>e.routes.find((e=>e.id==t))},actions:{async updateRoute(e){console.log(e,"in store");let t=await fetch(`http://localhost:3000/a1/geo/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});t=await t.json()},async addRoute(e){this.routes.push(e);let t=await fetch("http://localhost:3000/a1/geo/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return t=await t.json(),this.getRoutesInit(),t},async deleteRoute(e){let t=await fetch(`http://localhost:3000/a1/geo/${e}`,{method:"DELETE"});t=await t.json(),this.routes=this.routes.filter((e=>e.id!==Number(t.id))),console.log(this.routes,"del route",e)},async getRoutesInit(){console.log({NODE_ENV:"production",VUE_APP_BASE_URL:"http://localhost:3000",VUE_APP_SECRETKEY:"ES_12de96ab391e4712913c7f621ff24580",VUE_APP_SERVER_DIR:"backend",VUE_APP_SITEKEY:"61e05036-5aa4-47a1-9e3e-9109ab2c1762",BASE_URL:"/"}.VUE_APP_API_URL);try{let e=await fetch("http://localhost:3000/v1/geo");e=await e.json(),this.routes=e.routes.map((e=>({...e,route:JSON.parse(e.route)})))}catch(e){console.error(e)}}}})}},t={};function n(l){var o=t[l];if(void 0!==o)return o.exports;var a=t[l]={exports:{}};return e[l].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,l,o,a){if(!l){var r=1/0;for(c=0;c<e.length;c++){l=e[c][0],o=e[c][1],a=e[c][2];for(var u=!0,i=0;i<l.length;i++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](l[i])}))?l.splice(i--,1):(u=!1,a<r&&(r=a));if(u){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[l,o,a]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(l,o){if(1&o&&(l=this(l)),8&o)return l;if("object"===typeof l&&l){if(4&o&&l.__esModule)return l;if(16&o&&"function"===typeof l.then)return l}var a=Object.create(null);n.r(a);var r={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&l;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){r[e]=function(){return l[e]}}));return r["default"]=function(){return l},n.d(a,r),a}}(),function(){n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,l){return n.f[l](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({443:"about",461:"webfontloader",535:"login",596:"404",875:"RouteSuggestion",922:"edit"}[e]||e)+"."+{93:"e29755dd",243:"20a062a4",431:"2f34b60e",443:"bd4a6b72",461:"7af1b9f7",535:"d2554084",596:"5d519a0e",633:"39042a2a",858:"0860bd34",875:"e7e08fee",922:"c95f5d5d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{443:"about",535:"login",875:"RouteSuggestion",922:"edit"}[e]+"."+{443:"b6b58a3d",535:"694f7436",875:"f137d3d4",922:"57c666b3"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="gps-leaflet:";n.l=function(l,o,a,r){if(e[l])e[l].push(o);else{var u,i;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==l||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(i=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=l),e[l]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[l];if(delete e[l],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),i&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,l,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(n){if(a.onerror=a.onload=null,"load"===n.type)l();else{var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=r,i.request=u,a.parentNode&&a.parentNode.removeChild(a),o(i)}};return a.onerror=a.onload=r,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),l=0;l<n.length;l++){var o=n[l],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var r=document.getElementsByTagName("style");for(l=0;l<r.length;l++){o=r[l],a=o.getAttribute("data-href");if(a===e||a===t)return o}},l=function(l){return new Promise((function(o,a){var r=n.miniCssF(l),u=n.p+r;if(t(r,u))return o();e(l,u,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={443:1,535:1,875:1,922:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=l(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,l){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)l.push(o[2]);else{var a=new Promise((function(n,l){o=e[t]=[n,l]}));l.push(o[2]=a);var r=n.p+n.u(t),u=new Error,i=function(l){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=l&&("load"===l.type?"missing":l.type),r=l&&l.target&&l.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,o[1](u)}};n.l(r,i,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,a,r=l[0],u=l[1],i=l[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(i)var c=i(n)}for(t&&t(l);s<r.length;s++)a=r[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},l=self["webpackChunkgps_leaflet"]=self["webpackChunkgps_leaflet"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(8785)}));l=n.O(l)})();
//# sourceMappingURL=app.cfef27c9.js.map