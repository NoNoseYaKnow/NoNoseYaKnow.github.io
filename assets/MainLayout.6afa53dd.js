import{Q as Ee}from"./QImg.7bf5838e.js";import{c as X,h as ee,a as ft,b as vt,d as $e}from"./dom.d5d9c890.js";import{c as f,h as B,e as Q,r as $,w,o as te,i as ae,g as oe,l as Ce,H as Qe,a as S,b as P,s as Xe,d as mt,f as ht,n as pt,j as yt,k as j,p as fe,m as ze,q as ve,t as _e,u as me,v as bt,x as Me,y as qe,z as wt,A as gt,B as xe,C as O,D as A,E as g,F as b,G as Ye,I as _t,J as Ct,K as qt,L as xt,M as Pe,N as kt}from"./index.efd640aa.js";import{v as Tt,Q as Re,R as Ke,a as Ve}from"./QBtn.9ff39494.js";import{u as St,a as Lt,b as Bt,Q as je,c as Z,d as De,e as Et}from"./QExpansionItem.eefc0ca9.js";import{Q as $t,g as Qt,a as zt,h as Mt,b as Pt}from"./QLayout.49ab2e26.js";import{u as Vt,a as Dt}from"./use-dark.822f768f.js";import{g as He,s as Oe,c as Ht}from"./selection.7e00abce.js";import{Q as he}from"./QList.2f6eb870.js";var Ot=X({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const i=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>B("div",{class:i.value},ee(o.default))}}),At=X({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const i=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>B("div",{class:i.value,role:"toolbar"},ee(o.default))}}),Ft=X({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:i}){const{proxy:{$q:n}}=oe(),t=ae(Ce,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const a=$(parseInt(e.heightHint,10)),s=$(!0),m=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||n.platform.is.ios&&t.isContainer.value===!0),h=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return s.value===!0?a.value:0;const u=a.value-t.scroll.value.position;return u>0?u:0}),d=f(()=>e.modelValue!==!0||m.value===!0&&s.value!==!0),l=f(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),q=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=f(()=>{const u=t.rows.value.top,T={};return u[0]==="l"&&t.left.space===!0&&(T[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(T[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),T});function p(u,T){t.update("header",u,T)}function v(u,T){u.value!==T&&(u.value=T)}function L({height:u}){v(a,u),p("size",u)}function _(u){l.value===!0&&v(s,!0),i("focusin",u)}w(()=>e.modelValue,u=>{p("space",u),v(s,!0),t.animate()}),w(h,u=>{p("offset",u)}),w(()=>e.reveal,u=>{u===!1&&v(s,e.modelValue)}),w(s,u=>{t.animate(),i("reveal",u)}),w(t.scroll,u=>{e.reveal===!0&&v(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const y={};return t.instances.header=y,e.modelValue===!0&&p("size",a.value),p("space",e.modelValue),p("offset",h.value),te(()=>{t.instances.header===y&&(t.instances.header=void 0,p("size",0),p("offset",0),p("space",!1))}),()=>{const u=ft(o.default,[]);return e.elevated===!0&&u.push(B("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(B($t,{debounce:0,onResize:L})),B("header",{class:q.value,style:x.value,onFocusin:_},u)}}});function It(e,o,i){let n;function t(){n!==void 0&&(Qe.remove(n),n=void 0)}return te(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){n={condition:()=>i.value===!0,handler:o},Qe.add(n)}}}let W=0,pe,ye,N,be=!1,Ae,Fe,H;function Wt(e){Nt(e)&&Xe(e)}function Nt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=mt(e),i=e.shiftKey&&!e.deltaX,n=!i&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=i||n?e.deltaY:e.deltaX;for(let a=0;a<o.length;a++){const s=o[a];if(Mt(s,n))return n?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ie(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function U(e){be!==!0&&(be=!0,requestAnimationFrame(()=>{be=!1;const{height:o}=e.target,{clientHeight:i,scrollTop:n}=document.scrollingElement;(N===void 0||o!==window.innerHeight)&&(N=i-o,document.scrollingElement.scrollTop=n),n>N&&(document.scrollingElement.scrollTop-=Math.ceil((n-N)/8))}))}function We(e){const o=document.body,i=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:t}=window.getComputedStyle(o);pe=Qt(window),ye=zt(window),Ae=o.style.left,Fe=o.style.top,o.style.left=`-${pe}px`,o.style.top=`-${ye}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,S.is.ios===!0&&(i===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",U,P.passiveCapture),window.visualViewport.addEventListener("scroll",U,P.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ie,P.passiveCapture))}S.is.desktop===!0&&S.is.mac===!0&&window[`${e}EventListener`]("wheel",Wt,P.notPassive),e==="remove"&&(S.is.ios===!0&&(i===!0?(window.visualViewport.removeEventListener("resize",U,P.passiveCapture),window.visualViewport.removeEventListener("scroll",U,P.passiveCapture)):window.removeEventListener("scroll",Ie,P.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Ae,o.style.top=Fe,window.scrollTo(pe,ye),N=void 0)}function Xt(e){let o="add";if(e===!0){if(W++,H!==void 0){clearTimeout(H),H=void 0;return}if(W>1)return}else{if(W===0||(W--,W>0))return;if(o="remove",S.is.ios===!0&&S.is.nativeMobile===!0){clearTimeout(H),H=setTimeout(()=>{We(o),H=void 0},100);return}}We(o)}function Yt(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,Xt(o))}}}function Rt(){let e;const o=oe();function i(){clearTimeout(e)}return ht(i),te(i),{removeTimeout:i,registerTimeout(n,t){clearTimeout(e),Tt(o)===!1&&(e=setTimeout(n,t))}}}function we(e,o,i){const n=_e(e);let t,a=n.left-o.event.x,s=n.top-o.event.y,m=Math.abs(a),h=Math.abs(s);const d=o.direction;d.horizontal===!0&&d.vertical!==!0?t=a<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=s<0?"up":"down":d.up===!0&&s<0?(t="up",m>h&&(d.left===!0&&a<0?t="left":d.right===!0&&a>0&&(t="right"))):d.down===!0&&s>0?(t="down",m>h&&(d.left===!0&&a<0?t="left":d.right===!0&&a>0&&(t="right"))):d.left===!0&&a<0?(t="left",m<h&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down"))):d.right===!0&&a>0&&(t="right",m<h&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down")));let l=!1;if(t===void 0&&i===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,l=!0,t==="left"||t==="right"?(n.left-=a,m=0,a=0):(n.top-=s,h=0,s=0)}return{synthetic:l,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:n,direction:t,isFirst:o.event.isFirst,isFinal:i===!0,duration:Date.now()-o.event.time,distance:{x:m,y:h},offset:{x:a,y:s},delta:{x:n.left-o.event.lastX,y:n.top-o.event.lastY}}}}let Kt=0;var ge=vt({name:"touch-pan",beforeMount(e,{value:o,modifiers:i}){if(i.mouse!==!0&&S.has.touch!==!0)return;function n(a,s){i.mouse===!0&&s===!0?Xe(a):(i.stop===!0&&ve(a),i.prevent===!0&&ze(a))}const t={uid:"qvtp_"+Kt++,handler:o,modifiers:i,direction:He(i),noop:pt,mouseStart(a){Oe(a,t)&&yt(a)&&(j(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Oe(a,t)){const s=a.target;j(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(S.is.firefox===!0&&fe(e,!0),t.lastEvt=a,s===!0||i.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&ze(d),a.cancelBubble===!0&&ve(d),Object.assign(d,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:d}}ve(a)}const{left:m,top:h}=_e(a);t.event={x:m,y:h,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:h}},move(a){if(t.event===void 0)return;const s=_e(a),m=s.left-t.event.x,h=s.top-t.event.y;if(m===0&&h===0)return;t.lastEvt=a;const d=t.event.mouse===!0,l=()=>{n(a,d);let p;i.preserveCursor!==!0&&i.preservecursor!==!0&&(p=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ht(),t.styleCleanup=v=>{if(t.styleCleanup=void 0,p!==void 0&&(document.documentElement.style.cursor=p),document.body.classList.remove("non-selectable"),d===!0){const L=()=>{document.body.classList.remove("no-pointer-events--children")};v!==void 0?setTimeout(()=>{L(),v()},50):L()}else v!==void 0&&v()}};if(t.event.detected===!0){t.event.isFirst!==!0&&n(a,t.event.mouse);const{payload:p,synthetic:v}=we(a,t,!1);p!==void 0&&(t.handler(p)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&l(),t.event.lastX=p.position.left,t.event.lastY=p.position.top,t.event.lastDir=v===!0?void 0:p.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){l(),t.event.detected=!0,t.move(a);return}const q=Math.abs(m),x=Math.abs(h);q!==x&&(t.direction.horizontal===!0&&q>x||t.direction.vertical===!0&&q<x||t.direction.up===!0&&q<x&&h<0||t.direction.down===!0&&q<x&&h>0||t.direction.left===!0&&q>x&&m<0||t.direction.right===!0&&q>x&&m>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(me(t,"temp"),S.is.firefox===!0&&fe(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(we(a===void 0?t.lastEvt:a,t).payload);const{payload:m}=we(a===void 0?t.lastEvt:a,t,!0),h=()=>{t.handler(m)};t.styleCleanup!==void 0?t.styleCleanup(h):h()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const a=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";j(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}S.has.touch===!0&&j(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const i=e.__qtouchpan;i!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&i.end(),i.handler=o.value),i.direction=He(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),me(o,"main"),me(o,"temp"),S.is.firefox===!0&&fe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function G(e,o,i){return i<=o?o:Math.min(i,Math.max(o,e))}const Ne=150;var jt=X({name:"QDrawer",inheritAttrs:!1,props:{...St,...Vt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Lt,"on-layout","mini-state"],setup(e,{slots:o,emit:i,attrs:n}){const t=oe(),{proxy:{$q:a}}=t,s=Dt(e,a),{preventBodyScroll:m}=Yt(),{registerTimeout:h,removeTimeout:d}=Rt(),l=ae(Ce,Q);if(l===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let q,x,p;const v=$(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),L=f(()=>e.mini===!0&&v.value!==!0),_=f(()=>L.value===!0?e.miniWidth:e.width),y=$(e.showIfAbove===!0&&v.value===!1?!0:e.modelValue===!0),u=f(()=>e.persistent!==!0&&(v.value===!0||Je.value===!0));function T(r,c){if(Ue(),r!==!1&&l.animate(),k(0),v.value===!0){const C=l.instances[R.value];C!==void 0&&C.belowBreakpoint===!0&&C.hide(!1),z(1),l.isContainer.value!==!0&&m(!0)}else z(0),r!==!1&&ue(!1);h(()=>{r!==!1&&ue(!0),c!==!0&&i("show",r)},Ne)}function ke(r,c){Ge(),r!==!1&&l.animate(),z(0),k(V.value*_.value),de(),c!==!0?h(()=>{i("hide",r)},Ne):d()}const{show:re,hide:F}=Bt({showing:y,hideOnRouteChange:u,handleShow:T,handleHide:ke}),{addToHistory:Ue,removeFromHistory:Ge}=It(y,F,u),Y={belowBreakpoint:v,hide:F},E=f(()=>e.side==="right"),V=f(()=>(a.lang.rtl===!0?-1:1)*(E.value===!0?1:-1)),Te=$(0),D=$(!1),ie=$(!1),Se=$(_.value*V.value),R=f(()=>E.value===!0?"left":"right"),le=f(()=>y.value===!0&&v.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:_.value:0),ne=f(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(E.value?"R":"L")>-1||a.platform.is.ios===!0&&l.isContainer.value===!0),I=f(()=>e.overlay===!1&&y.value===!0&&v.value===!1),Je=f(()=>e.overlay===!0&&y.value===!0&&v.value===!1),Ze=f(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&D.value===!1?" hidden":"")),et=f(()=>({backgroundColor:`rgba(0,0,0,${Te.value*.4})`})),Le=f(()=>E.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),tt=f(()=>E.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),at=f(()=>{const r={};return l.header.space===!0&&Le.value===!1&&(ne.value===!0?r.top=`${l.header.offset}px`:l.header.space===!0&&(r.top=`${l.header.size}px`)),l.footer.space===!0&&tt.value===!1&&(ne.value===!0?r.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(r.bottom=`${l.footer.size}px`)),r}),ot=f(()=>{const r={width:`${_.value}px`,transform:`translateX(${Se.value}px)`};return v.value===!0?r:Object.assign(r,at.value)}),rt=f(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),it=f(()=>`q-drawer q-drawer--${e.side}`+(ie.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(D.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(v.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${L.value===!0?"mini":"standard"}`+(ne.value===!0||I.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Le.value===!0?" q-drawer--top-padding":""))),lt=f(()=>{const r=a.lang.rtl===!0?e.side:R.value;return[[ge,dt,void 0,{[r]:!0,mouse:!0}]]}),nt=f(()=>{const r=a.lang.rtl===!0?R.value:e.side;return[[ge,Be,void 0,{[r]:!0,mouse:!0}]]}),st=f(()=>{const r=a.lang.rtl===!0?R.value:e.side;return[[ge,Be,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function se(){ct(v,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}w(v,r=>{r===!0?(q=y.value,y.value===!0&&F(!1)):e.overlay===!1&&e.behavior!=="mobile"&&q!==!1&&(y.value===!0?(k(0),z(0),de()):re(!1))}),w(()=>e.side,(r,c)=>{l.instances[c]===Y&&(l.instances[c]=void 0,l[c].space=!1,l[c].offset=0),l.instances[r]=Y,l[r].size=_.value,l[r].space=I.value,l[r].offset=le.value}),w(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&se()}),w(()=>e.behavior+e.breakpoint,se),w(l.isContainer,r=>{y.value===!0&&m(r!==!0),r===!0&&se()}),w(l.scrollbarWidth,()=>{k(y.value===!0?0:void 0)}),w(le,r=>{M("offset",r)}),w(I,r=>{i("on-layout",r),M("space",r)}),w(E,()=>{k()}),w(_,r=>{k(),ce(e.miniToOverlay,r)}),w(()=>e.miniToOverlay,r=>{ce(r,_.value)}),w(()=>a.lang.rtl,()=>{k()}),w(()=>e.mini,()=>{e.modelValue===!0&&(ut(),l.animate())}),w(L,r=>{i("mini-state",r)});function k(r){r===void 0?Me(()=>{r=y.value===!0?0:_.value,k(V.value*r)}):(l.isContainer.value===!0&&E.value===!0&&(v.value===!0||Math.abs(r)===_.value)&&(r+=V.value*l.scrollbarWidth.value),Se.value=r)}function z(r){Te.value=r}function ue(r){const c=r===!0?"remove":l.isContainer.value!==!0?"add":"";c!==""&&document.body.classList[c]("q-body--drawer-toggle")}function ut(){clearTimeout(x),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ie.value=!0,x=setTimeout(()=>{ie.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function dt(r){if(y.value!==!1)return;const c=_.value,C=G(r.distance.x,0,c);if(r.isFinal===!0){C>=Math.min(75,c)===!0?re():(l.animate(),z(0),k(V.value*c)),D.value=!1;return}k((a.lang.rtl===!0?E.value!==!0:E.value)?Math.max(c-C,0):Math.min(0,C-c)),z(G(C/c,0,1)),r.isFirst===!0&&(D.value=!0)}function Be(r){if(y.value!==!0)return;const c=_.value,C=r.direction===e.side,K=(a.lang.rtl===!0?C!==!0:C)?G(r.distance.x,0,c):0;if(r.isFinal===!0){Math.abs(K)<Math.min(75,c)===!0?(l.animate(),z(1),k(0)):F(),D.value=!1;return}k(V.value*K),z(G(1-K/c,0,1)),r.isFirst===!0&&(D.value=!0)}function de(){m(!1),ue(!0)}function M(r,c){l.update(e.side,r,c)}function ct(r,c){r.value!==c&&(r.value=c)}function ce(r,c){M("size",r===!0?e.miniWidth:c)}return l.instances[e.side]=Y,ce(e.miniToOverlay,_.value),M("space",I.value),M("offset",le.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),bt(()=>{i("on-layout",I.value),i("mini-state",L.value),q=e.showIfAbove===!0;const r=()=>{(y.value===!0?T:ke)(!1,!0)};if(l.totalWidth.value!==0){Me(r);return}p=w(l.totalWidth,()=>{p(),p=void 0,y.value===!1&&e.showIfAbove===!0&&v.value===!1?re(!1):r()})}),te(()=>{p!==void 0&&p(),clearTimeout(x),y.value===!0&&de(),l.instances[e.side]===Y&&(l.instances[e.side]=void 0,M("size",0),M("offset",0),M("space",!1))}),()=>{const r=[];v.value===!0&&(e.noSwipeOpen===!1&&r.push(qe(B("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),lt.value)),r.push($e("div",{ref:"backdrop",class:Ze.value,style:et.value,"aria-hidden":"true",onClick:F},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>st.value)));const c=L.value===!0&&o.mini!==void 0,C=[B("div",{...n,key:""+c,class:[rt.value,n.class]},c===!0?o.mini():ee(o.default))];return e.elevated===!0&&y.value===!0&&C.push(B("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push($e("aside",{ref:"content",class:it.value,style:ot.value},C,"contentclose",e.noSwipeClose!==!0&&v.value===!0,()=>nt.value)),B("div",{class:"q-drawer-container"},r)}}}),Ut=X({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:i}}=oe(),n=ae(Ce,Q);if(n===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;wt(gt,!0);const t=f(()=>{const a={};return n.header.space===!0&&(a.paddingTop=`${n.header.size}px`),n.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(a.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),a});return()=>B("div",{class:"q-page-container",style:t.value},ee(o.default))}}),Gt="/assets/favicon-96x96_standard.99ec61b6.png",Jt="/assets/favicon-96x96_nord10.d00850aa.png";const J=xe({__name:"NavigationItem",props:{icon:{default:""},label:{default:""}},setup(e){return(o,i)=>qe((O(),A(je,{clickable:"","active-class":"active-link"},{default:g(()=>[b(Z,{avatar:"",class:"q-pl-sm"},{default:g(()=>[b(Re,{name:e.icon},null,8,["name"])]),_:1}),b(Z,null,{default:g(()=>[Ye(_t(e.label),1)]),_:1})]),_:1})),[[Ke]])}}),Zt=xe({__name:"NavigationList",setup(e){return(o,i)=>(O(),A(he,{class:"text-body1"},{default:g(()=>[qe((O(),A(je,{to:{name:"Home"},exact:"","active-class":"active-link",clickable:""},{default:g(()=>[b(Z,{avatar:""},{default:g(()=>[b(Re,{name:"mdi-home-outline"})]),_:1}),b(Z,null,{default:g(()=>[Ye("Burch Ventures Home")]),_:1})]),_:1})),[[Ke]]),b(De,{label:"Nutralyz","default-opened":""},{default:g(()=>[b(he,{dense:"",class:"text-body1"},{default:g(()=>[b(J,{label:"Showcase",icon:"mdi-projector-screen-outline",to:{name:"NutralyzShowcase"}}),b(J,{label:"Support",icon:"mdi-account-question-outline",to:{name:"NutralyzSupport"}}),b(J,{label:"Privacy + Terms of Service",icon:"mdi-text-box-multiple-outline",to:{name:"NutralyzTerms"}})]),_:1})]),_:1}),b(De,{label:"Inventory Assistant","default-opened":""},{default:g(()=>[b(he,{dense:"",class:"q-pl-sm text-body1"},{default:g(()=>[b(J,{label:"Showcase",icon:"mdi-projector-screen-outline",to:{name:"InventoryShowcase"}})]),_:1})]),_:1})]),_:1}))}});function ea(){return ae(Ct)}const ca=xe({__name:"MainLayout",setup(e){const o=ea(),i=xt(),n=$(!1);function t(){n.value=!n.value}function a(){i.push({name:"Home"})}return(s,m)=>{const h=qt("router-view");return O(),A(Pt,{view:"lHh Lpr lFf"},{default:g(()=>[b(Ft,{elevated:""},{default:g(()=>[b(At,{class:"top-bar"},{default:g(()=>[Pe(o).dark.isActive?(O(),A(Ee,{key:0,src:Gt,width:"22px",height:"22px",class:"cursor-pointer",onClick:a})):(O(),A(Ee,{key:1,src:Jt,width:"22px",height:"22px",class:"cursor-pointer",onClick:a})),b(Ot,{class:"text-input-primary text-uppercase text-weight-light text-h6 q-pl-md"},{default:g(()=>[kt("div",{style:{cursor:"pointer",width:"fit-content"},onClick:a}," Burch Ventures ")]),_:1}),b(Ve,{flat:"",dense:"",round:"",icon:"mdi-theme-light-dark",color:"input-primary",onClick:Pe(o).dark.toggle},null,8,["onClick"]),b(Et,{vertical:"",inset:"",color:"input-primary",class:"q-mx-sm"}),b(Ve,{flat:"",dense:"",round:"",icon:"mdi-menu","aria-label":"Menu",color:"input-primary",onClick:t})]),_:1})]),_:1}),b(jt,{modelValue:n.value,"onUpdate:modelValue":m[0]||(m[0]=d=>n.value=d),"show-if-above":"",class:"prominence-2 text-prominence-2",side:"right"},{default:g(()=>[b(Zt)]),_:1},8,["modelValue"]),b(Ut,null,{default:g(()=>[b(h)]),_:1})]),_:1})}}});export{ca as default};
