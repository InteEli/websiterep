import{n as u,s as h}from"./scheduler.NrZV1iTz.js";const n=[];function q(e,o){return{subscribe:p(e,o).subscribe}}function p(e,o=u){let i;const r=new Set;function c(t){if(h(e,t)&&(e=t,i)){const b=!n.length;for(const s of r)s[1](),n.push(s,e);if(b){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function f(t){c(t(e))}function _(t,b=u){const s=[t,b];return r.add(s),r.size===1&&(i=o(c,f)||u),t(e),()=>{r.delete(s),r.size===0&&i&&(i(),i=null)}}return{set:c,update:f,subscribe:_}}var a;const d=((a=globalThis.__sveltekit_1cucf6n)==null?void 0:a.base)??"";var l;const k=((l=globalThis.__sveltekit_1cucf6n)==null?void 0:l.assets)??d;export{k as a,d as b,q as r,p as w};