import{g as le,b as se,a as z}from"./QBtn.c6f79840.js";import{u as ue,a as ce}from"./use-dark.4e9f4696.js";import{a as V,n as de,j as ve,k as M,p as O,t as G,s as R,u as j,r as L,c as f,w as k,g as X,x as fe,h as m,T as me,X as pe,Y as ge,v as ae,o as oe,H as J,Z as he,B as re,C as Y,D as H,E as Q,_ as xe,$ as K,L as ye,a0 as _e,F as U}from"./index.2dbfebcf.js";import{b as Ce,h as Z,c as ie,d as be,e as Pe}from"./dom.4bd97de5.js";import{g as ee,s as te,c as Se}from"./selection.eb0487c1.js";import{Q as W,a as qe}from"./QCard.e5128c4a.js";function we(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((i,l)=>{const r=parseFloat(i);r&&(n[l]=r)}),n}var $e=Ce({name:"touch-swipe",beforeMount(e,{value:n,arg:i,modifiers:l}){if(l.mouse!==!0&&V.has.touch!==!0)return;const r=l.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:we(i),direction:ee(l),noop:de,mouseStart(o){te(o,t)&&ve(o)&&(M(t,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(o,!0))},touchStart(o){if(te(o,t)){const s=o.target;M(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","notPassiveCapture"],[s,"touchend","end","notPassiveCapture"]]),t.start(o)}},start(o,s){V.is.firefox===!0&&O(e,!0);const g=G(o);t.event={x:g.left,y:g.top,time:Date.now(),mouse:s===!0,dir:!1}},move(o){if(t.event===void 0)return;if(t.event.dir!==!1){R(o);return}const s=Date.now()-t.event.time;if(s===0)return;const g=G(o),h=g.left-t.event.x,u=Math.abs(h),p=g.top-t.event.y,d=Math.abs(p);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&d<t.sensitivity[1]){t.end(o);return}}else if(u<t.sensitivity[2]&&d<t.sensitivity[2])return;const x=u/s,_=d/s;t.direction.vertical===!0&&u<d&&u<100&&_>t.sensitivity[0]&&(t.event.dir=p<0?"up":"down"),t.direction.horizontal===!0&&u>d&&d<100&&x>t.sensitivity[0]&&(t.event.dir=h<0?"left":"right"),t.direction.up===!0&&u<d&&p<0&&u<100&&_>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<d&&p>0&&u<100&&_>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>d&&h<0&&d<100&&x>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>d&&h>0&&d<100&&x>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(R(o),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Se(),t.styleCleanup=w=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};w===!0?setTimeout(C,50):C()}),t.handler({evt:o,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:s,distance:{x:u,y:d}})):t.end(o)},end(o){t.event!==void 0&&(j(t,"temp"),V.is.firefox===!0&&O(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),o!==void 0&&t.event.dir!==!1&&R(o),t.event=void 0)}};if(e.__qtouchswipe=t,l.mouse===!0){const o=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";M(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}V.has.touch===!0&&M(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const i=e.__qtouchswipe;i!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&i.end(),i.handler=n.value),i.direction=ee(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(j(n,"main"),j(n,"temp"),V.is.firefox===!0&&O(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function ke(){const e=new Map;return{getCache:function(n,i){return e[n]===void 0?e[n]=i:e[n]},getCacheWithFn:function(n,i){return e[n]===void 0?e[n]=i():e[n]}}}const Ie={name:{required:!0},disable:Boolean},ne={setup(e,{slots:n}){return()=>m("div",{class:"q-panel scroll",role:"tabpanel"},Z(n.default))}},Be={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Te=["update:modelValue","before-transition","transition"];function Ae(){const{props:e,emit:n,proxy:i}=X(),{getCacheWithFn:l}=ke();let r,t;const o=L(null),s=L(null);function g(a){const c=e.vertical===!0?"up":"left";b((i.$q.lang.rtl===!0?-1:1)*(a.direction===c?1:-1))}const h=f(()=>[[$e,g,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),p=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),d=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),x=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),_=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),w=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);k(()=>e.modelValue,(a,c)=>{const y=P(a)===!0?B(a):-1;t!==!0&&$(y===-1?0:y<B(c)?-1:1),o.value!==y&&(o.value=y,n("before-transition",a,c),fe(()=>{n("transition",a,c)}))});function C(){b(1)}function N(){b(-1)}function I(a){n("update:modelValue",a)}function P(a){return a!=null&&a!==""}function B(a){return r.findIndex(c=>c.props.name===a&&c.props.disable!==""&&c.props.disable!==!0)}function F(){return r.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function $(a){const c=a!==0&&e.animated===!0&&o.value!==-1?"q-transition--"+(a===-1?u.value:p.value):null;s.value!==c&&(s.value=c)}function b(a,c=o.value){let y=c+a;for(;y>-1&&y<r.length;){const q=r[y];if(q!==void 0&&q.props.disable!==""&&q.props.disable!==!0){$(a),t=!0,n("update:modelValue",q.props.name),setTimeout(()=>{t=!1});return}y+=a}e.infinite===!0&&r.length>0&&c!==-1&&c!==r.length&&b(a,a===-1?r.length:-1)}function T(){const a=B(e.modelValue);return o.value!==a&&(o.value=a),!0}function D(){const a=P(e.modelValue)===!0&&T()&&r[o.value];return e.keepAlive===!0?[m(pe,_.value,[m(w.value===!0?l(x.value,()=>({...ne,name:x.value})):ne,{key:x.value,style:d.value},()=>a)])]:[m("div",{class:"q-panel scroll",style:d.value,key:x.value,role:"tabpanel"},[a])]}function v(){if(r.length!==0)return e.animated===!0?[m(me,{name:s.value},D)]:D()}function S(a){return r=le(Z(a.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&P(c.props.name)===!0),r.length}function A(){return r}return Object.assign(i,{next:C,previous:N,goTo:I}),{panelIndex:o,panelDirectives:h,updatePanelsList:S,updatePanelIndex:T,getPanelContent:v,getEnabledPanels:F,getPanels:A,isValidPanelName:P,keepAliveProps:_,needsUniqueKeepAliveWrapper:w,goToPanelByOffset:b,goToPanel:I,nextPanel:C,previousPanel:N}}let E=0;const Ve={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ee=["update:fullscreen","fullscreen"];function Ne(){const e=X(),{props:n,emit:i,proxy:l}=e;let r,t,o;const s=L(!1);se(e)===!0&&k(()=>l.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&u()}),k(()=>n.fullscreen,p=>{s.value!==p&&g()}),k(s,p=>{i("update:fullscreen",p),i("fullscreen",p)});function g(){s.value===!0?u():h()}function h(){s.value!==!0&&(s.value=!0,o=l.$el.parentNode,o.replaceChild(t,l.$el),document.body.appendChild(l.$el),E++,E===1&&document.body.classList.add("q-body--fullscreen-mixin"),r={handler:u},J.add(r))}function u(){s.value===!0&&(r!==void 0&&(J.remove(r),r=void 0),o.replaceChild(l.$el,t),s.value=!1,E=Math.max(0,E-1),E===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),l.$el.scrollIntoView!==void 0&&setTimeout(()=>{l.$el.scrollIntoView()})))}return ge(()=>{t=document.createElement("span")}),ae(()=>{n.fullscreen===!0&&h()}),oe(u),Object.assign(l,{toggleFullscreen:g,setFullscreen:h,exitFullscreen:u}),{inFullscreen:s,toggleFullscreen:g}}const Fe=["top","right","bottom","left"],De=["regular","flat","outline","push","unelevated"];var Me=ie({name:"QCarousel",props:{...ue,...Be,...Ve,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>De.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Fe.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ee,...Te],setup(e,{slots:n}){const{proxy:{$q:i}}=X(),l=ce(e,i);let r,t;const{updatePanelsList:o,getPanelContent:s,panelDirectives:g,goToPanel:h,previousPanel:u,nextPanel:p,getEnabledPanels:d,panelIndex:x}=Ae(),{inFullscreen:_}=Ne(),w=f(()=>_.value!==!0&&e.height!==void 0?{height:e.height}:{}),C=f(()=>e.vertical===!0?"vertical":"horizontal"),N=f(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(_.value===!0?" fullscreen":"")+(l.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${C.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${F.value}`:"")),I=f(()=>{const v=[e.prevIcon||i.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||i.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&i.lang.rtl===!0?v.reverse():v}),P=f(()=>e.navigationIcon||i.iconSet.carousel.navigationIcon),B=f(()=>e.navigationActiveIcon||P.value),F=f(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),$=f(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));k(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(r),b())}),k(()=>e.autoplay,v=>{v?b():clearInterval(r)});function b(){const v=he(e.autoplay)===!0?e.autoplay:5e3;r=setTimeout(v>=0?p:u,Math.abs(v))}ae(()=>{e.autoplay&&b()}),oe(()=>{clearInterval(r)});function T(v,S){return m("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${v} q-carousel__navigation--${F.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[m("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},d().map(S))])}function D(){const v=[];if(e.navigation===!0){const S=n["navigation-icon"]!==void 0?n["navigation-icon"]:a=>m(z,{key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`,...a.btnProps,onClick:a.onClick}),A=t-1;v.push(T("buttons",(a,c)=>{const y=a.props.name,q=x.value===c;return S({index:c,maxIndex:A,name:y,active:q,btnProps:{icon:q===!0?B.value:P.value,size:"sm",...$.value},onClick:()=>{h(y)}})}))}else if(e.thumbnails===!0){const S=e.controlColor!==void 0?` text-${e.controlColor}`:"";v.push(T("thumbnails",A=>{const a=A.props;return m("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+S,src:a.imgSrc||a["img-src"],onClick:()=>{h(a.name)}})}))}return e.arrows===!0&&x.value>=0&&((e.infinite===!0||x.value>0)&&v.push(m("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${C.value} absolute flex flex-center`},[m(z,{icon:I.value[0],...$.value,onClick:u})])),(e.infinite===!0||x.value<t-1)&&v.push(m("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${C.value} absolute flex flex-center`},[m(z,{icon:I.value[1],...$.value,onClick:p})]))),Pe(n.control,v)}return()=>(t=o(n),m("div",{class:N.value,style:w.value},[be("div",{class:"q-carousel__slides-container"},s(),"sl-cont",e.swipeable,()=>g.value)].concat(D())))}});const He=re({__name:"ShowcaseCarousel",props:{wideShots:{type:Boolean,default:!1}},setup(e){const n=L(0);return(i,l)=>(Y(),H(Me,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=r=>n.value=r),animated:"",arrows:"",infinite:"",style:xe([{height:"85vh","max-height":"900px"},e.wideShots?"height: 80vh; max-height: 800px":""]),class:"transparent","control-color":"input-primary","control-type":"push"},{default:Q(()=>[K(i.$slots,"default")]),_:3},8,["modelValue","style"]))}});var Le=ie({name:"QCarouselSlide",props:{...Ie,imgSrc:String},setup(e,{slots:n}){const i=f(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>m("div",{class:"q-carousel__slide",style:i.value},Z(n.default))}});const Qe={class:"fit row justify-center items-center q-pb-sm"},Ke=re({__name:"ShowcaseSlide",props:{name:{default:0}},setup(e){return(n,i)=>(Y(),H(Le,{name:e.name,style:{padding:"4px 0px"}},{default:Q(()=>[ye("div",Qe,[K(n.$slots,"default")])]),_:3},8,["name"]))}}),ze={};function Oe(e,n){return Y(),H(qe,{class:"q-mx-lg prominence-0 rounded-borders-10 shadow-2 bordered text-italic"},{default:Q(()=>[U(W,{class:"prominence-0 q-pa-xs"}),U(W,{class:"text-h6 prominence-2 text-prominence-3 rounded-borders-10"},{default:Q(()=>[K(e.$slots,"default")]),_:3}),U(W,{class:"prominence-0 q-pa-xs"})]),_:3})}var Ze=_e(ze,[["render",Oe]]);export{Ze as S,Ke as _,He as a};
