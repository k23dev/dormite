import{n as l}from"./runtime.48b6cd50.js";const f=t=>async(s,n,i)=>{if(!t.hasAttribute("ssr"))return;let r,e;for(const[o,a]of Object.entries(i))o==="default"?r=u(o,a):(e??={},e[o]=u(o,a));const[,d]=l(s,{target:t,props:{...n,children:r,$$slots:e}});t.addEventListener("astro:unmount",()=>d(),{once:!0})};function u(t,s){return(n,i)=>{const r=n.parentNode,e=document.createElement("div");e.innerHTML=`<astro-slot${t==="default"?"":` name="${t}"`}>${s}</astro-slot>`,r.insertBefore(e.children[0],n)}}export{f as default};
