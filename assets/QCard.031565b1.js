import{c as t,h as o}from"./dom.d5d9c890.js";import{c as s,h as d,g as c}from"./index.efd640aa.js";import{u as l,a as i}from"./use-dark.822f768f.js";var g=t({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:r}){const e=s(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>d(a.tag,{class:e.value},o(r.default))}}),v=t({name:"QCard",props:{...l,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=c(),n=i(a,e),u=s(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>d(a.tag,{class:u.value},o(r.default))}});export{g as Q,v as a};