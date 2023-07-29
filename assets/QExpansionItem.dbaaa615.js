import{w as T,v as le,g as O,x as U,c as g,h as d,r as A,N as ue,s as D,o as G,T as re,U as se,y as ce,V as de}from"./index.fc721792.js";import{u as W,a as Y}from"./use-dark.893d43a8.js";import{b as fe,u as j,c as ve,Q as H}from"./QBtn.3e0fb954.js";import{c as L,h as R,a as me}from"./dom.24d2ef1c.js";import{Q as M}from"./QSeparator.6c323ae1.js";const ge={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},be=["before-show","show","before-hide","hide"];function he({showing:e,canShow:f,hideOnRouteChange:o,handleShow:l,handleHide:h,processOnMount:r}){const q=O(),{props:s,emit:c,proxy:k}=q;let u;function v(t){e.value===!0?I(t):x(t)}function x(t){if(s.disable===!0||t!==void 0&&t.qAnchorHandled===!0||f!==void 0&&f(t)!==!0)return;const i=s["onUpdate:modelValue"]!==void 0;i===!0&&(c("update:modelValue",!0),u=t,U(()=>{u===t&&(u=void 0)})),(s.modelValue===null||i===!1)&&S(t)}function S(t){e.value!==!0&&(e.value=!0,c("before-show",t),l!==void 0?l(t):c("show",t))}function I(t){if(s.disable===!0)return;const i=s["onUpdate:modelValue"]!==void 0;i===!0&&(c("update:modelValue",!1),u=t,U(()=>{u===t&&(u=void 0)})),(s.modelValue===null||i===!1)&&a(t)}function a(t){e.value!==!1&&(e.value=!1,c("before-hide",t),h!==void 0?h(t):c("hide",t))}function b(t){s.disable===!0&&t===!0?s["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):t===!0!==e.value&&(t===!0?S:a)(u)}T(()=>s.modelValue,b),o!==void 0&&fe(q)===!0&&T(()=>k.$route.fullPath,()=>{o.value===!0&&e.value===!0&&I()}),r===!0&&le(()=>{b(s.modelValue)});const y={show:x,hide:I,toggle:v};return Object.assign(k,y),y}var V=L({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:f}){const o=g(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>d("div",{class:o.value},R(f.default))}}),xe=L({name:"QItem",props:{...W,...j,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:f,emit:o}){const{proxy:{$q:l}}=O(),h=Y(e,l),{hasLink:r,linkAttrs:q,linkClass:s,linkTag:c,navigateOnClick:k}=ve(),u=A(null),v=A(null),x=g(()=>e.clickable===!0||r.value===!0||e.tag==="label"),S=g(()=>e.disable!==!0&&x.value===!0),I=g(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(h.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(S.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),a=g(()=>{if(e.insetLevel===void 0)return null;const i=l.lang.rtl===!0?"Right":"Left";return{["padding"+i]:16+e.insetLevel*56+"px"}});function b(i){S.value===!0&&(v.value!==null&&(i.qKeyEvent!==!0&&document.activeElement===u.value?v.value.focus():document.activeElement===v.value&&u.value.focus()),k(i))}function y(i){if(S.value===!0&&ue(i,13)===!0){D(i),i.qKeyEvent=!0;const B=new MouseEvent("click",i);B.qKeyEvent=!0,u.value.dispatchEvent(B)}o("keyup",i)}function t(){const i=me(f.default,[]);return S.value===!0&&i.unshift(d("div",{class:"q-focus-helper",tabindex:-1,ref:v})),i}return()=>{const i={ref:u,class:I.value,style:a.value,role:"listitem",onClick:b,onKeyup:y};return S.value===!0?(i.tabindex=e.tabindex||"0",Object.assign(i,q.value)):x.value===!0&&(i["aria-disabled"]="true"),d(c.value,i,t())}}}),K=L({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:f}){const o=g(()=>parseInt(e.lines,10)),l=g(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),h=g(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>d("div",{style:h.value,class:l.value},R(f.default))}}),ye=L({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:f,emit:o}){let l=!1,h,r,q,s,c,k;function u(){h&&h(),h=null,l=!1,clearTimeout(q),clearTimeout(s),r!==void 0&&r.removeEventListener("transitionend",c),c=null}function v(a,b,y){a.style.overflowY="hidden",b!==void 0&&(a.style.height=`${b}px`),a.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,l=!0,h=y}function x(a,b){a.style.overflowY=null,a.style.height=null,a.style.transition=null,u(),b!==k&&o(b)}function S(a,b){let y=0;r=a,l===!0?(u(),y=a.offsetHeight===a.scrollHeight?0:void 0):k="hide",v(a,y,b),q=setTimeout(()=>{a.style.height=`${a.scrollHeight}px`,c=t=>{(Object(t)!==t||t.target===a)&&x(a,"show")},a.addEventListener("transitionend",c),s=setTimeout(c,e.duration*1.1)},100)}function I(a,b){let y;r=a,l===!0?u():(k="show",y=a.scrollHeight),v(a,y,b),q=setTimeout(()=>{a.style.height=0,c=t=>{(Object(t)!==t||t.target===a)&&x(a,"hide")},a.addEventListener("transitionend",c),s=setTimeout(c,e.duration*1.1)},100)}return G(()=>{l===!0&&u()}),()=>d(re,{css:!1,appear:e.appear,onEnter:S,onLeave:I},f.default)}});let Q,E=0;const m=new Array(256);for(let e=0;e<256;e++)m[e]=(e+256).toString(16).substring(1);const qe=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return f=>{const o=new Uint8Array(f);return e.getRandomValues(o),o}}return f=>{const o=[];for(let l=f;l>0;l--)o.push(Math.floor(Math.random()*256));return o}})(),P=4096;function F(){(Q===void 0||E+16>P)&&(E=0,Q=qe(P));const e=Array.prototype.slice.call(Q,E,E+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,m[e[0]]+m[e[1]]+m[e[2]]+m[e[3]]+"-"+m[e[4]]+m[e[5]]+"-"+m[e[6]]+m[e[7]]+"-"+m[e[8]]+m[e[9]]+"-"+m[e[10]]+m[e[11]]+m[e[12]]+m[e[13]]+m[e[14]]+m[e[15]]}const w=se({}),Se=Object.keys(j);var Le=L({name:"QExpansionItem",props:{...j,...ge,...W,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...be,"click","after-show","after-hide"],setup(e,{slots:f,emit:o}){const{proxy:{$q:l}}=O(),h=Y(e,l),r=A(e.modelValue!==null?e.modelValue:e.defaultOpened),q=A(null),s=F(),{show:c,hide:k,toggle:u}=he({showing:r});let v,x;const S=g(()=>`q-expansion-item q-item-type q-expansion-item--${r.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),I=g(()=>{if(e.contentInsetLevel===void 0)return null;const n=l.lang.rtl===!0?"Right":"Left";return{["padding"+n]:e.contentInsetLevel*56+"px"}}),a=g(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),b=g(()=>{const n={};return Se.forEach(_=>{n[_]=e[_]}),n}),y=g(()=>a.value===!0||e.expandIconToggle!==!0),t=g(()=>e.expandedIcon!==void 0&&r.value===!0?e.expandedIcon:e.expandIcon||l.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),i=g(()=>e.disable!==!0&&(a.value===!0||e.expandIconToggle===!0)),B=g(()=>({expanded:r.value===!0,detailsId:e.targetUid,toggle:u,show:c,hide:k})),$=g(()=>{const n=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:l.lang.label[r.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":r.value===!0?"true":"false","aria-owns":s,"aria-controls":s,"aria-label":n}});T(()=>e.group,n=>{x!==void 0&&x(),n!==void 0&&N()});function z(n){a.value!==!0&&u(n),o("click",n)}function Z(n){n.keyCode===13&&p(n,!0)}function p(n,_){_!==!0&&q.value!==null&&q.value.focus(),u(n),D(n)}function J(){o("after-show")}function X(){o("after-hide")}function N(){v===void 0&&(v=F()),r.value===!0&&(w[e.group]=v);const n=T(r,C=>{C===!0?w[e.group]=v:w[e.group]===v&&delete w[e.group]}),_=T(()=>w[e.group],(C,oe)=>{oe===v&&C!==void 0&&C!==v&&k()});x=()=>{n(),_(),w[e.group]===v&&delete w[e.group],x=void 0}}function ee(){const n={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},_=[d(H,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&r.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:t.value})];return i.value===!0&&(Object.assign(n,{tabindex:0,...$.value,onClick:p,onKeyup:Z}),_.unshift(d("div",{ref:q,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),d(V,n,()=>_)}function te(){let n;return f.header!==void 0?n=[].concat(f.header(B.value)):(n=[d(V,()=>[d(K,{lines:e.labelLines},()=>e.label||""),e.caption?d(K,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&n[e.switchToggleSide===!0?"push":"unshift"](d(V,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>d(H,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&n[e.switchToggleSide===!0?"unshift":"push"](ee()),n}function ne(){const n={ref:"item",style:e.headerStyle,class:e.headerClass,dark:h.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return y.value===!0&&(n.clickable=!0,n.onClick=z,Object.assign(n,a.value===!0?b.value:$.value)),d(xe,n,te)}function ae(){return ce(d("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:I.value,id:s},R(f.default)),[[de,r.value]])}function ie(){const n=[ne(),d(ye,{duration:e.duration,onShow:J,onHide:X},ae)];return e.expandSeparator===!0&&n.push(d(M,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:h.value}),d(M,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:h.value})),n}return e.group!==void 0&&N(),G(()=>{x!==void 0&&x()}),()=>d("div",{class:S.value},[d("div",{class:"q-expansion-item__container relative-position"},ie())])}});export{xe as Q,be as a,he as b,V as c,Le as d,ge as u};