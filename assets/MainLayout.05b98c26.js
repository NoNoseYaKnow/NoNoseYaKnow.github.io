import{c as I,h as ee,a as dt,b as ct,d as Ee}from"./dom.4bd97de5.js";import{c as f,h as B,e as z,r as $,w,o as te,i as qe,g as ae,l as Ce,H as $e,a as S,b as Q,s as Ie,d as ft,f as vt,n as mt,j as ht,k as R,p as ce,m as ze,q as fe,t as ge,u as ve,v as pt,x as Me,y as _e,z as yt,A as bt,B as xe,C as G,D as J,E as g,F as b,G as Ne,I as wt,J as gt,K as qt,L as Ct,M as _t}from"./index.2dbfebcf.js";import{v as xt,Q as Xe,R as Ye,a as Pe}from"./QBtn.c6f79840.js";import{u as Tt,a as kt,b as St,Q as Re,c as Z,d as Qe,e as Lt}from"./QExpansionItem.fc9a1693.js";import{Q as Bt,g as Et,a as $t,h as zt,b as Mt}from"./QLayout.32c8b72f.js";import{u as Pt,a as Qt}from"./use-dark.4e9f4696.js";import{g as Ve,s as De,c as Vt}from"./selection.eb0487c1.js";import{Q as me}from"./QList.fa623bc4.js";import{u as Dt}from"./use-quasar.ad13dc34.js";var Ht=I({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const l=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>B("div",{class:l.value},ee(o.default))}}),Ot=I({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const l=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>B("div",{class:l.value,role:"toolbar"},ee(o.default))}}),At=I({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:l}){const{proxy:{$q:n}}=ae(),t=qe(Ce,z);if(t===z)return console.error("QHeader needs to be child of QLayout"),z;const a=$(parseInt(e.heightHint,10)),u=$(!0),m=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||n.platform.is.ios&&t.isContainer.value===!0),h=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return u.value===!0?a.value:0;const s=a.value-t.scroll.value.position;return s>0?s:0}),d=f(()=>e.modelValue!==!0||m.value===!0&&u.value!==!0),i=f(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),_=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=f(()=>{const s=t.rows.value.top,k={};return s[0]==="l"&&t.left.space===!0&&(k[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(k[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),k});function p(s,k){t.update("header",s,k)}function v(s,k){s.value!==k&&(s.value=k)}function L({height:s}){v(a,s),p("size",s)}function q(s){i.value===!0&&v(u,!0),l("focusin",s)}w(()=>e.modelValue,s=>{p("space",s),v(u,!0),t.animate()}),w(h,s=>{p("offset",s)}),w(()=>e.reveal,s=>{s===!1&&v(u,e.modelValue)}),w(u,s=>{t.animate(),l("reveal",s)}),w(t.scroll,s=>{e.reveal===!0&&v(u,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const y={};return t.instances.header=y,e.modelValue===!0&&p("size",a.value),p("space",e.modelValue),p("offset",h.value),te(()=>{t.instances.header===y&&(t.instances.header=void 0,p("size",0),p("offset",0),p("space",!1))}),()=>{const s=dt(o.default,[]);return e.elevated===!0&&s.push(B("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(B(Bt,{debounce:0,onResize:L})),B("header",{class:_.value,style:x.value,onFocusin:q},s)}}});function Ft(e,o,l){let n;function t(){n!==void 0&&($e.remove(n),n=void 0)}return te(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){n={condition:()=>l.value===!0,handler:o},$e.add(n)}}}let F=0,he,pe,W,ye=!1,He,Oe,H;function Wt(e){It(e)&&Ie(e)}function It(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=ft(e),l=e.shiftKey&&!e.deltaX,n=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=l||n?e.deltaY:e.deltaX;for(let a=0;a<o.length;a++){const u=o[a];if(zt(u,n))return n?t<0&&u.scrollTop===0?!0:t>0&&u.scrollTop+u.clientHeight===u.scrollHeight:t<0&&u.scrollLeft===0?!0:t>0&&u.scrollLeft+u.clientWidth===u.scrollWidth}return!0}function Ae(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function j(e){ye!==!0&&(ye=!0,requestAnimationFrame(()=>{ye=!1;const{height:o}=e.target,{clientHeight:l,scrollTop:n}=document.scrollingElement;(W===void 0||o!==window.innerHeight)&&(W=l-o,document.scrollingElement.scrollTop=n),n>W&&(document.scrollingElement.scrollTop-=Math.ceil((n-W)/8))}))}function Fe(e){const o=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:t}=window.getComputedStyle(o);he=Et(window),pe=$t(window),He=o.style.left,Oe=o.style.top,o.style.left=`-${he}px`,o.style.top=`-${pe}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,S.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",j,Q.passiveCapture),window.visualViewport.addEventListener("scroll",j,Q.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ae,Q.passiveCapture))}S.is.desktop===!0&&S.is.mac===!0&&window[`${e}EventListener`]("wheel",Wt,Q.notPassive),e==="remove"&&(S.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",j,Q.passiveCapture),window.visualViewport.removeEventListener("scroll",j,Q.passiveCapture)):window.removeEventListener("scroll",Ae,Q.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=He,o.style.top=Oe,window.scrollTo(he,pe),W=void 0)}function Nt(e){let o="add";if(e===!0){if(F++,H!==void 0){clearTimeout(H),H=void 0;return}if(F>1)return}else{if(F===0||(F--,F>0))return;if(o="remove",S.is.ios===!0&&S.is.nativeMobile===!0){clearTimeout(H),H=setTimeout(()=>{Fe(o),H=void 0},100);return}}Fe(o)}function Xt(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,Nt(o))}}}function Yt(){let e;const o=ae();function l(){clearTimeout(e)}return vt(l),te(l),{removeTimeout:l,registerTimeout(n,t){clearTimeout(e),xt(o)===!1&&(e=setTimeout(n,t))}}}function be(e,o,l){const n=ge(e);let t,a=n.left-o.event.x,u=n.top-o.event.y,m=Math.abs(a),h=Math.abs(u);const d=o.direction;d.horizontal===!0&&d.vertical!==!0?t=a<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=u<0?"up":"down":d.up===!0&&u<0?(t="up",m>h&&(d.left===!0&&a<0?t="left":d.right===!0&&a>0&&(t="right"))):d.down===!0&&u>0?(t="down",m>h&&(d.left===!0&&a<0?t="left":d.right===!0&&a>0&&(t="right"))):d.left===!0&&a<0?(t="left",m<h&&(d.up===!0&&u<0?t="up":d.down===!0&&u>0&&(t="down"))):d.right===!0&&a>0&&(t="right",m<h&&(d.up===!0&&u<0?t="up":d.down===!0&&u>0&&(t="down")));let i=!1;if(t===void 0&&l===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,i=!0,t==="left"||t==="right"?(n.left-=a,m=0,a=0):(n.top-=u,h=0,u=0)}return{synthetic:i,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:n,direction:t,isFirst:o.event.isFirst,isFinal:l===!0,duration:Date.now()-o.event.time,distance:{x:m,y:h},offset:{x:a,y:u},delta:{x:n.left-o.event.lastX,y:n.top-o.event.lastY}}}}let Rt=0;var we=ct({name:"touch-pan",beforeMount(e,{value:o,modifiers:l}){if(l.mouse!==!0&&S.has.touch!==!0)return;function n(a,u){l.mouse===!0&&u===!0?Ie(a):(l.stop===!0&&fe(a),l.prevent===!0&&ze(a))}const t={uid:"qvtp_"+Rt++,handler:o,modifiers:l,direction:Ve(l),noop:mt,mouseStart(a){De(a,t)&&ht(a)&&(R(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(De(a,t)){const u=a.target;R(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,u){if(S.is.firefox===!0&&ce(e,!0),t.lastEvt=a,u===!0||l.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&ze(d),a.cancelBubble===!0&&fe(d),Object.assign(d,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:d}}fe(a)}const{left:m,top:h}=ge(a);t.event={x:m,y:h,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:h}},move(a){if(t.event===void 0)return;const u=ge(a),m=u.left-t.event.x,h=u.top-t.event.y;if(m===0&&h===0)return;t.lastEvt=a;const d=t.event.mouse===!0,i=()=>{n(a,d);let p;l.preserveCursor!==!0&&l.preservecursor!==!0&&(p=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Vt(),t.styleCleanup=v=>{if(t.styleCleanup=void 0,p!==void 0&&(document.documentElement.style.cursor=p),document.body.classList.remove("non-selectable"),d===!0){const L=()=>{document.body.classList.remove("no-pointer-events--children")};v!==void 0?setTimeout(()=>{L(),v()},50):L()}else v!==void 0&&v()}};if(t.event.detected===!0){t.event.isFirst!==!0&&n(a,t.event.mouse);const{payload:p,synthetic:v}=be(a,t,!1);p!==void 0&&(t.handler(p)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=p.position.left,t.event.lastY=p.position.top,t.event.lastDir=v===!0?void 0:p.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(a);return}const _=Math.abs(m),x=Math.abs(h);_!==x&&(t.direction.horizontal===!0&&_>x||t.direction.vertical===!0&&_<x||t.direction.up===!0&&_<x&&h<0||t.direction.down===!0&&_<x&&h>0||t.direction.left===!0&&_>x&&m<0||t.direction.right===!0&&_>x&&m>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,u){if(t.event!==void 0){if(ve(t,"temp"),S.is.firefox===!0&&ce(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(be(a===void 0?t.lastEvt:a,t).payload);const{payload:m}=be(a===void 0?t.lastEvt:a,t,!0),h=()=>{t.handler(m)};t.styleCleanup!==void 0?t.styleCleanup(h):h()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,l.mouse===!0){const a=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";R(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}S.has.touch===!0&&R(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const l=e.__qtouchpan;l!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&l.end(),l.handler=o.value),l.direction=Ve(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ve(o,"main"),ve(o,"temp"),S.is.firefox===!0&&ce(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function K(e,o,l){return l<=o?o:Math.min(l,Math.max(o,e))}const We=150;var jt=I({name:"QDrawer",inheritAttrs:!1,props:{...Tt,...Pt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...kt,"on-layout","mini-state"],setup(e,{slots:o,emit:l,attrs:n}){const t=ae(),{proxy:{$q:a}}=t,u=Qt(e,a),{preventBodyScroll:m}=Xt(),{registerTimeout:h,removeTimeout:d}=Yt(),i=qe(Ce,z);if(i===z)return console.error("QDrawer needs to be child of QLayout"),z;let _,x,p;const v=$(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),L=f(()=>e.mini===!0&&v.value!==!0),q=f(()=>L.value===!0?e.miniWidth:e.width),y=$(e.showIfAbove===!0&&v.value===!1?!0:e.modelValue===!0),s=f(()=>e.persistent!==!0&&(v.value===!0||Ue.value===!0));function k(r,c){if(je(),r!==!1&&i.animate(),T(0),v.value===!0){const C=i.instances[X.value];C!==void 0&&C.belowBreakpoint===!0&&C.hide(!1),M(1),i.isContainer.value!==!0&&m(!0)}else M(0),r!==!1&&ue(!1);h(()=>{r!==!1&&ue(!0),c!==!0&&l("show",r)},We)}function Te(r,c){Ke(),r!==!1&&i.animate(),M(0),T(V.value*q.value),se(),c!==!0?h(()=>{l("hide",r)},We):d()}const{show:oe,hide:O}=St({showing:y,hideOnRouteChange:s,handleShow:k,handleHide:Te}),{addToHistory:je,removeFromHistory:Ke}=Ft(y,O,s),N={belowBreakpoint:v,hide:O},E=f(()=>e.side==="right"),V=f(()=>(a.lang.rtl===!0?-1:1)*(E.value===!0?1:-1)),ke=$(0),D=$(!1),re=$(!1),Se=$(q.value*V.value),X=f(()=>E.value===!0?"left":"right"),le=f(()=>y.value===!0&&v.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:q.value:0),ie=f(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(E.value?"R":"L")>-1||a.platform.is.ios===!0&&i.isContainer.value===!0),A=f(()=>e.overlay===!1&&y.value===!0&&v.value===!1),Ue=f(()=>e.overlay===!0&&y.value===!0&&v.value===!1),Ge=f(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&D.value===!1?" hidden":"")),Je=f(()=>({backgroundColor:`rgba(0,0,0,${ke.value*.4})`})),Le=f(()=>E.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Ze=f(()=>E.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),et=f(()=>{const r={};return i.header.space===!0&&Le.value===!1&&(ie.value===!0?r.top=`${i.header.offset}px`:i.header.space===!0&&(r.top=`${i.header.size}px`)),i.footer.space===!0&&Ze.value===!1&&(ie.value===!0?r.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(r.bottom=`${i.footer.size}px`)),r}),tt=f(()=>{const r={width:`${q.value}px`,transform:`translateX(${Se.value}px)`};return v.value===!0?r:Object.assign(r,et.value)}),at=f(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),ot=f(()=>`q-drawer q-drawer--${e.side}`+(re.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(D.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(v.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${L.value===!0?"mini":"standard"}`+(ie.value===!0||A.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Le.value===!0?" q-drawer--top-padding":""))),rt=f(()=>{const r=a.lang.rtl===!0?e.side:X.value;return[[we,ut,void 0,{[r]:!0,mouse:!0}]]}),lt=f(()=>{const r=a.lang.rtl===!0?X.value:e.side;return[[we,Be,void 0,{[r]:!0,mouse:!0}]]}),it=f(()=>{const r=a.lang.rtl===!0?X.value:e.side;return[[we,Be,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ne(){st(v,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}w(v,r=>{r===!0?(_=y.value,y.value===!0&&O(!1)):e.overlay===!1&&e.behavior!=="mobile"&&_!==!1&&(y.value===!0?(T(0),M(0),se()):oe(!1))}),w(()=>e.side,(r,c)=>{i.instances[c]===N&&(i.instances[c]=void 0,i[c].space=!1,i[c].offset=0),i.instances[r]=N,i[r].size=q.value,i[r].space=A.value,i[r].offset=le.value}),w(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&ne()}),w(()=>e.behavior+e.breakpoint,ne),w(i.isContainer,r=>{y.value===!0&&m(r!==!0),r===!0&&ne()}),w(i.scrollbarWidth,()=>{T(y.value===!0?0:void 0)}),w(le,r=>{P("offset",r)}),w(A,r=>{l("on-layout",r),P("space",r)}),w(E,()=>{T()}),w(q,r=>{T(),de(e.miniToOverlay,r)}),w(()=>e.miniToOverlay,r=>{de(r,q.value)}),w(()=>a.lang.rtl,()=>{T()}),w(()=>e.mini,()=>{e.modelValue===!0&&(nt(),i.animate())}),w(L,r=>{l("mini-state",r)});function T(r){r===void 0?Me(()=>{r=y.value===!0?0:q.value,T(V.value*r)}):(i.isContainer.value===!0&&E.value===!0&&(v.value===!0||Math.abs(r)===q.value)&&(r+=V.value*i.scrollbarWidth.value),Se.value=r)}function M(r){ke.value=r}function ue(r){const c=r===!0?"remove":i.isContainer.value!==!0?"add":"";c!==""&&document.body.classList[c]("q-body--drawer-toggle")}function nt(){clearTimeout(x),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),re.value=!0,x=setTimeout(()=>{re.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ut(r){if(y.value!==!1)return;const c=q.value,C=K(r.distance.x,0,c);if(r.isFinal===!0){C>=Math.min(75,c)===!0?oe():(i.animate(),M(0),T(V.value*c)),D.value=!1;return}T((a.lang.rtl===!0?E.value!==!0:E.value)?Math.max(c-C,0):Math.min(0,C-c)),M(K(C/c,0,1)),r.isFirst===!0&&(D.value=!0)}function Be(r){if(y.value!==!0)return;const c=q.value,C=r.direction===e.side,Y=(a.lang.rtl===!0?C!==!0:C)?K(r.distance.x,0,c):0;if(r.isFinal===!0){Math.abs(Y)<Math.min(75,c)===!0?(i.animate(),M(1),T(0)):O(),D.value=!1;return}T(V.value*Y),M(K(1-Y/c,0,1)),r.isFirst===!0&&(D.value=!0)}function se(){m(!1),ue(!0)}function P(r,c){i.update(e.side,r,c)}function st(r,c){r.value!==c&&(r.value=c)}function de(r,c){P("size",r===!0?e.miniWidth:c)}return i.instances[e.side]=N,de(e.miniToOverlay,q.value),P("space",A.value),P("offset",le.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),pt(()=>{l("on-layout",A.value),l("mini-state",L.value),_=e.showIfAbove===!0;const r=()=>{(y.value===!0?k:Te)(!1,!0)};if(i.totalWidth.value!==0){Me(r);return}p=w(i.totalWidth,()=>{p(),p=void 0,y.value===!1&&e.showIfAbove===!0&&v.value===!1?oe(!1):r()})}),te(()=>{p!==void 0&&p(),clearTimeout(x),y.value===!0&&se(),i.instances[e.side]===N&&(i.instances[e.side]=void 0,P("size",0),P("offset",0),P("space",!1))}),()=>{const r=[];v.value===!0&&(e.noSwipeOpen===!1&&r.push(_e(B("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),rt.value)),r.push(Ee("div",{ref:"backdrop",class:Ge.value,style:Je.value,"aria-hidden":"true",onClick:O},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>it.value)));const c=L.value===!0&&o.mini!==void 0,C=[B("div",{...n,key:""+c,class:[at.value,n.class]},c===!0?o.mini():ee(o.default))];return e.elevated===!0&&y.value===!0&&C.push(B("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Ee("aside",{ref:"content",class:ot.value,style:tt.value},C,"contentclose",e.noSwipeClose!==!0&&v.value===!0,()=>lt.value)),B("div",{class:"q-drawer-container"},r)}}}),Kt=I({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:l}}=ae(),n=qe(Ce,z);if(n===z)return console.error("QPageContainer needs to be child of QLayout"),z;yt(bt,!0);const t=f(()=>{const a={};return n.header.space===!0&&(a.paddingTop=`${n.header.size}px`),n.right.space===!0&&(a[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(a.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(a[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),a});return()=>B("div",{class:"q-page-container",style:t.value},ee(o.default))}});const U=xe({__name:"NavigationItem",props:{icon:{default:""},label:{default:""}},setup(e){return(o,l)=>_e((G(),J(Re,{clickable:"","active-class":"active-link"},{default:g(()=>[b(Z,{avatar:"",class:"q-pl-sm"},{default:g(()=>[b(Xe,{name:e.icon},null,8,["name"])]),_:1}),b(Z,null,{default:g(()=>[Ne(wt(e.label),1)]),_:1})]),_:1})),[[Ye]])}}),Ut=xe({__name:"NavigationList",setup(e){return(o,l)=>(G(),J(me,{class:"text-body1"},{default:g(()=>[_e((G(),J(Re,{to:{name:"Home"},exact:"","active-class":"active-link",clickable:""},{default:g(()=>[b(Z,{avatar:""},{default:g(()=>[b(Xe,{name:"mdi-home-outline"})]),_:1}),b(Z,null,{default:g(()=>[Ne("Burch Ventures Home")]),_:1})]),_:1})),[[Ye]]),b(Qe,{label:"Nutralyz","default-opened":""},{default:g(()=>[b(me,{dense:"",class:"text-body1"},{default:g(()=>[b(U,{label:"Showcase",icon:"mdi-projector-screen-outline",to:{name:"NutralyzShowcase"}}),b(U,{label:"Support",icon:"mdi-account-question-outline",to:{name:"NutralyzSupport"}}),b(U,{label:"Privacy + Terms of Service",icon:"mdi-text-box-multiple-outline",to:{name:"NutralyzTerms"}})]),_:1})]),_:1}),b(Qe,{label:"Inventory Assistant","default-opened":""},{default:g(()=>[b(me,{dense:"",class:"q-pl-sm text-body1"},{default:g(()=>[b(U,{label:"Showcase",icon:"mdi-projector-screen-outline",to:{name:"InventoryShowcase"}})]),_:1})]),_:1})]),_:1}))}}),na=xe({__name:"MainLayout",setup(e){const o=Dt(),l=qt(),n=$(!1);function t(){n.value=!n.value}function a(){l.push({name:"Home"})}return(u,m)=>{const h=gt("router-view");return G(),J(Mt,{view:"lHh Lpr lFf"},{default:g(()=>[b(At,{elevated:""},{default:g(()=>[b(Ot,{class:"top-bar"},{default:g(()=>[b(Ht,{class:"text-input-primary text-uppercase text-weight-light text-h6 q-pl-md"},{default:g(()=>[Ct("div",{style:{cursor:"pointer",width:"fit-content"},onClick:a}," Burch Ventures ")]),_:1}),b(Pe,{flat:"",dense:"",round:"",icon:"mdi-theme-light-dark",color:"input-primary",onClick:_t(o).dark.toggle},null,8,["onClick"]),b(Lt,{vertical:"",inset:"",color:"input-primary",class:"q-mx-sm"}),b(Pe,{flat:"",dense:"",round:"",icon:"mdi-menu","aria-label":"Menu",color:"input-primary",onClick:t})]),_:1})]),_:1}),b(jt,{modelValue:n.value,"onUpdate:modelValue":m[0]||(m[0]=d=>n.value=d),"show-if-above":"",class:"prominence-2 text-prominence-2",side:"right"},{default:g(()=>[b(Ut)]),_:1},8,["modelValue"]),b(Kt,null,{default:g(()=>[b(h)]),_:1})]),_:1})}}});export{na as default};
