import{V as c,B as s,h as a,y as f,N as v}from"./index.7b9a736d.js";const h=n=>c(s(n)),m=n=>c(n);function p(n,t){return n!==void 0&&n()||t}function y(n,t){if(n!==void 0){const e=n();if(e!=null)return e.slice()}return t}function l(n,t){return n!==void 0?t.concat(n()):t}function g(n,t,e,r,o,u){t.key=r+o;const i=a(n,t,e);return o===!0?f(i,u()):i}function S(n,t){const e=n.style;for(const r in t)e[r]=t[r]}function D(n){if(n==null)return;if(typeof n=="string")try{return document.querySelector(n)||void 0}catch{return}const t=v(n);if(t)return t.$el||t}export{y as a,m as b,h as c,g as d,l as e,S as f,D as g,p as h};
