function n(n,r){n.forEach((n=>{n.addEventListener("focusout",(c=>{const f=c.relatedTarget;if(!t(n,f)){const n=c.composedPath();if(u(n,r)){n.filter(o(r))[0].close()}}}))}))}function t(n,t){return n.contains(t)}function o(n){return t=>t.nodeName===n}function u(n,t){return n.map((n=>n.nodeName)).indexOf(t)!==-1}export{n as r};
//# sourceMappingURL=p-1a170e8d.js.map