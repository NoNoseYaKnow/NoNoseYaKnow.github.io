import{c as o,h as n}from"./dom.d5d9c890.js";import{u as d,a as l}from"./use-dark.822f768f.js";import{c as i,h as u,g as c}from"./index.efd640aa.js";var g=o({name:"QList",props:{...d,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:a}){const r=c(),t=l(e,r.proxy.$q),s=i(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(t.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>u("div",{class:s.value,role:"list"},n(a.default))}});export{g as Q};