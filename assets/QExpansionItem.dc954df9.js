import{c as d,h as f,g as A,w as B,v as ue,x as K,r as E,O as re,s as Y,o as Z,T as se,P as ce,y as de,Q as fe}from"./index.7b9a736d.js";import{u as R,a as j}from"./use-dark.7fb8d32c.js";import{b as ve,u as H,c as me,Q as F}from"./QBtn.03fe4513.js";import{c as T,h as M,a as ge}from"./dom.25f94f56.js";const be={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},Q={xs:2,sm:4,md:8,lg:16,xl:24};var z=T({name:"QSeparator",props:{...R,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const v=A(),o=j(e,v.proxy.$q),u=d(()=>e.vertical===!0?"vertical":"horizontal"),m=d(()=>` q-separator--${u.value}`),s=d(()=>e.inset!==!1?`${m.value}-${be[e.inset]}`:""),y=d(()=>`q-separator${m.value}${s.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(o.value===!0?" q-separator--dark":"")),c=d(()=>{const l={};if(e.size!==void 0&&(l[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const S=e.spaced===!0?`${Q.md}px`:e.spaced in Q?`${Q[e.spaced]}px`:e.spaced,r=e.vertical===!0?["Left","Right"]:["Top","Bottom"];l[`margin${r[0]}`]=l[`margin${r[1]}`]=S}return l});return()=>f("hr",{class:y.value,style:c.value,"aria-orientation":u.value})}});const he={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},xe=["before-show","show","before-hide","hide"];function ye({showing:e,canShow:v,hideOnRouteChange:o,handleShow:u,handleHide:m,processOnMount:s}){const y=A(),{props:c,emit:l,proxy:S}=y;let r;function g(t){e.value===!0?I(t):x(t)}function x(t){if(c.disable===!0||t!==void 0&&t.qAnchorHandled===!0||v!==void 0&&v(t)!==!0)return;const i=c["onUpdate:modelValue"]!==void 0;i===!0&&(l("update:modelValue",!0),r=t,K(()=>{r===t&&(r=void 0)})),(c.modelValue===null||i===!1)&&k(t)}function k(t){e.value!==!0&&(e.value=!0,l("before-show",t),u!==void 0?u(t):l("show",t))}function I(t){if(c.disable===!0)return;const i=c["onUpdate:modelValue"]!==void 0;i===!0&&(l("update:modelValue",!1),r=t,K(()=>{r===t&&(r=void 0)})),(c.modelValue===null||i===!1)&&a(t)}function a(t){e.value!==!1&&(e.value=!1,l("before-hide",t),m!==void 0?m(t):l("hide",t))}function h(t){c.disable===!0&&t===!0?c["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!1):t===!0!==e.value&&(t===!0?k:a)(r)}B(()=>c.modelValue,h),o!==void 0&&ve(y)===!0&&B(()=>S.$route.fullPath,()=>{o.value===!0&&e.value===!0&&I()}),s===!0&&ue(()=>{h(c.modelValue)});const q={show:x,hide:I,toggle:g};return Object.assign(S,q),q}var V=T({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:v}){const o=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>f("div",{class:o.value},M(v.default))}}),qe=T({name:"QItem",props:{...R,...H,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:v,emit:o}){const{proxy:{$q:u}}=A(),m=j(e,u),{hasLink:s,linkAttrs:y,linkClass:c,linkTag:l,navigateOnClick:S}=me(),r=E(null),g=E(null),x=d(()=>e.clickable===!0||s.value===!0||e.tag==="label"),k=d(()=>e.disable!==!0&&x.value===!0),I=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(m.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?c.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(k.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),a=d(()=>{if(e.insetLevel===void 0)return null;const i=u.lang.rtl===!0?"Right":"Left";return{["padding"+i]:16+e.insetLevel*56+"px"}});function h(i){k.value===!0&&(g.value!==null&&(i.qKeyEvent!==!0&&document.activeElement===r.value?g.value.focus():document.activeElement===g.value&&r.value.focus()),S(i))}function q(i){if(k.value===!0&&re(i,13)===!0){Y(i),i.qKeyEvent=!0;const L=new MouseEvent("click",i);L.qKeyEvent=!0,r.value.dispatchEvent(L)}o("keyup",i)}function t(){const i=ge(v.default,[]);return k.value===!0&&i.unshift(f("div",{class:"q-focus-helper",tabindex:-1,ref:g})),i}return()=>{const i={ref:r,class:I.value,style:a.value,role:"listitem",onClick:h,onKeyup:q};return k.value===!0?(i.tabindex=e.tabindex||"0",Object.assign(i,y.value)):x.value===!0&&(i["aria-disabled"]="true"),f(l.value,i,t())}}}),D=T({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:v}){const o=d(()=>parseInt(e.lines,10)),u=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),m=d(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>f("div",{style:m.value,class:u.value},M(v.default))}}),Se=T({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:v,emit:o}){let u=!1,m,s,y,c,l,S;function r(){m&&m(),m=null,u=!1,clearTimeout(y),clearTimeout(c),s!==void 0&&s.removeEventListener("transitionend",l),l=null}function g(a,h,q){a.style.overflowY="hidden",h!==void 0&&(a.style.height=`${h}px`),a.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,u=!0,m=q}function x(a,h){a.style.overflowY=null,a.style.height=null,a.style.transition=null,r(),h!==S&&o(h)}function k(a,h){let q=0;s=a,u===!0?(r(),q=a.offsetHeight===a.scrollHeight?0:void 0):S="hide",g(a,q,h),y=setTimeout(()=>{a.style.height=`${a.scrollHeight}px`,l=t=>{(Object(t)!==t||t.target===a)&&x(a,"show")},a.addEventListener("transitionend",l),c=setTimeout(l,e.duration*1.1)},100)}function I(a,h){let q;s=a,u===!0?r():(S="show",q=a.scrollHeight),g(a,q,h),y=setTimeout(()=>{a.style.height=0,l=t=>{(Object(t)!==t||t.target===a)&&x(a,"hide")},a.addEventListener("transitionend",l),c=setTimeout(l,e.duration*1.1)},100)}return Z(()=>{u===!0&&r()}),()=>f(se,{css:!1,appear:e.appear,onEnter:k,onLeave:I},v.default)}});let O,$=0;const b=new Array(256);for(let e=0;e<256;e++)b[e]=(e+256).toString(16).substring(1);const ke=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return v=>{const o=new Uint8Array(v);return e.getRandomValues(o),o}}return v=>{const o=[];for(let u=v;u>0;u--)o.push(Math.floor(Math.random()*256));return o}})(),G=4096;function W(){(O===void 0||$+16>G)&&($=0,O=ke(G));const e=Array.prototype.slice.call(O,$,$+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,b[e[0]]+b[e[1]]+b[e[2]]+b[e[3]]+"-"+b[e[4]]+b[e[5]]+"-"+b[e[6]]+b[e[7]]+"-"+b[e[8]]+b[e[9]]+"-"+b[e[10]]+b[e[11]]+b[e[12]]+b[e[13]]+b[e[14]]+b[e[15]]}const _=ce({}),Ie=Object.keys(H);var Le=T({name:"QExpansionItem",props:{...H,...he,...R,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...xe,"click","after-show","after-hide"],setup(e,{slots:v,emit:o}){const{proxy:{$q:u}}=A(),m=j(e,u),s=E(e.modelValue!==null?e.modelValue:e.defaultOpened),y=E(null),c=W(),{show:l,hide:S,toggle:r}=ye({showing:s});let g,x;const k=d(()=>`q-expansion-item q-item-type q-expansion-item--${s.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),I=d(()=>{if(e.contentInsetLevel===void 0)return null;const n=u.lang.rtl===!0?"Right":"Left";return{["padding"+n]:e.contentInsetLevel*56+"px"}}),a=d(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),h=d(()=>{const n={};return Ie.forEach(w=>{n[w]=e[w]}),n}),q=d(()=>a.value===!0||e.expandIconToggle!==!0),t=d(()=>e.expandedIcon!==void 0&&s.value===!0?e.expandedIcon:e.expandIcon||u.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),i=d(()=>e.disable!==!0&&(a.value===!0||e.expandIconToggle===!0)),L=d(()=>({expanded:s.value===!0,detailsId:e.targetUid,toggle:r,show:l,hide:S})),N=d(()=>{const n=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:u.lang.label[s.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":s.value===!0?"true":"false","aria-owns":c,"aria-controls":c,"aria-label":n}});B(()=>e.group,n=>{x!==void 0&&x(),n!==void 0&&P()});function p(n){a.value!==!0&&r(n),o("click",n)}function J(n){n.keyCode===13&&U(n,!0)}function U(n,w){w!==!0&&y.value!==null&&y.value.focus(),r(n),Y(n)}function X(){o("after-show")}function ee(){o("after-hide")}function P(){g===void 0&&(g=W()),s.value===!0&&(_[e.group]=g);const n=B(s,C=>{C===!0?_[e.group]=g:_[e.group]===g&&delete _[e.group]}),w=B(()=>_[e.group],(C,oe)=>{oe===g&&C!==void 0&&C!==g&&S()});x=()=>{n(),w(),_[e.group]===g&&delete _[e.group],x=void 0}}function te(){const n={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},w=[f(F,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&s.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:t.value})];return i.value===!0&&(Object.assign(n,{tabindex:0,...N.value,onClick:U,onKeyup:J}),w.unshift(f("div",{ref:y,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),f(V,n,()=>w)}function ne(){let n;return v.header!==void 0?n=[].concat(v.header(L.value)):(n=[f(V,()=>[f(D,{lines:e.labelLines},()=>e.label||""),e.caption?f(D,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&n[e.switchToggleSide===!0?"push":"unshift"](f(V,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>f(F,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&n[e.switchToggleSide===!0?"unshift":"push"](te()),n}function ae(){const n={ref:"item",style:e.headerStyle,class:e.headerClass,dark:m.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return q.value===!0&&(n.clickable=!0,n.onClick=p,Object.assign(n,a.value===!0?h.value:N.value)),f(qe,n,ne)}function ie(){return de(f("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:I.value,id:c},M(v.default)),[[fe,s.value]])}function le(){const n=[ae(),f(Se,{duration:e.duration,onShow:X,onHide:ee},ie)];return e.expandSeparator===!0&&n.push(f(z,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:m.value}),f(z,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:m.value})),n}return e.group!==void 0&&P(),Z(()=>{x!==void 0&&x()}),()=>f("div",{class:k.value},[f("div",{class:"q-expansion-item__container relative-position"},le())])}});export{qe as Q,xe as a,ye as b,V as c,Le as d,z as e,he as u};
