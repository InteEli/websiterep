import{n as u,s as h}from"./scheduler.D-KrruXr.js";const n=[];function z(t,o){return{subscribe:p(t,o).subscribe}}function p(t,o=u){let r;const i=new Set;function b(e){if(h(t,e)&&(t=e,r)){const c=!n.length;for(const s of i)s[1](),n.push(s,t);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function a(e){b(e(t))}function _(e,c=u){const s=[e,c];return i.add(s),i.size===1&&(r=o(b,a)||u),e(t),()=>{i.delete(s),i.size===0&&r&&(r(),r=null)}}return{set:b,update:a,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_1ozy7tr)==null?void 0:f.base)??"";var l;const q=((l=globalThis.__sveltekit_1ozy7tr)==null?void 0:l.assets)??d;export{q as a,d as b,z as r,p as w};
