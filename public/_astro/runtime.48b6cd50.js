function B(e){for(var t=0;t<e.length;t++)e[t]()}let i=null;function A(e){i=e}function le(e){const t=[];let n=e,l=null;for(;n!==null;){const r=n.nodeType,o=n.nextSibling;if(r===8){const u=n.data;if(u.startsWith("ssr:")){const f=u.slice(4);if(l===null)l=f;else{if(f===l)return t;t.push(n)}n=o;continue}}l!==null&&t.push(n),n=o}return null}function me(e,t){let n=e;if(i!==null)if(t&&(n=n.firstChild),n.nodeType===8){let l=n.$$fragment;l===void 0&&(l=le(n),n.$$fragment=void 0),A(l)}else A([n.firstChild])}var D=Array.isArray,we=Array.from,ae=Object.defineProperty,P=Object.getOwnPropertyDescriptor,S,$,de,j,ve,ye,re,xe;function Oe(){S===void 0&&(S=Node.prototype,$=Element.prototype,de=Text.prototype,j=Map.prototype,ve=S.appendChild,ye=S.cloneNode,j.set,j.get,j.delete,$.__click=void 0,de.__nodeValue=" ",$.__className="",re=P(S,"firstChild").get,xe=P(S,"nextSibling").get,P(S,"textContent").set,P($,"className").set)}function pe(e,t){ve.call(e,t)}function Re(e,t){return ye.call(e,t)}function qe(e){const t=re.call(e);if(i!==null)if(t===null){const n=document.createTextNode("");return e.appendChild(n),n}else return oe(t);return t}function it(e){if(i!==null){const t=e[0];return i!==null&&t!==null?oe(t):t}return re.call(e)}function _t(e){const t=xe.call(e);return i!==null&&t!==null?oe(t):t}function oe(e){if(e.nodeType===8&&e.data.startsWith("ssr:")&&i.at(-1)!==e){const t=le(e),l=(t.at(-1)||e).nextSibling;return l.$$fragment=t,l}return e}const De=0,Ie=1;function Fe(e){return{d:null,e:null,i:e,p:null,r:null,t:De}}function Le(){return{a:null,ae:null,c:null,ce:null,d:null,e:null,p:N,r:null,t:Ie,v:!1}}const Me=["touchstart","touchmove","touchend"];function Ve(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Ue(e,t,n){if(D(e)){for(var l=0,r;l<e.length;l++)r=e[l],n===null?pe(t,r):n.before(r);return e[0]}else e!==null&&(n===null?pe(t,e):n.before(e));return e}function k(e){var t=e;if(D(e))for(var n=0,l;n<e.length;n++)l=e[n],n===0&&(t=l),l.isConnected&&l.remove();else e.isConnected&&e.remove();return t}function z(e,t,n){const l=[];for(const r of e){const o=r.r;t==="in"?(o==="in"||o==="both"?r.in():r.c(),r.d.inert=!1,ne(r.e,!1)):t==="key"?o==="key"&&(r.p=r.i(n),r.in()):((o==="out"||o==="both")&&(r.p=r.i(),l.push(r.o)),r.d.inert=!0,ne(r.e,!0))}if(l.length>0){const r=lt(()=>{w(r);const o=Ae(()=>{w(o),B(l)})},!1)}}const be=new Set,Q=new Set;function Ye(){return document.createTextNode("")}function at(e,t){let n;return()=>{if(n===void 0){const l=Ve(e);n=t?l:qe(l)}return n}}function Ee(e,t,n,l){if(i!==null){n!==null&&me(n,!1);const r=i;if(r!==null)return e?r:r[0]}return t?Re(l(),!0):document.importNode(l(),!0)}function dt(e,t,n){return Ee(!1,t,e,n)}function pt(e,t,n){return Ee(!0,t,e,n)}function ge(e,t,n){const l=N,r=t?D(e)?e:Array.from(e.childNodes):e;n!==null&&i===null&&Ue(r,null,n),l.d=r}function ht(e,t){ge(t,!1,e)}function mt(e,t){ge(t,!0,e)}function vt(e,t){q(()=>{const n=t();Pe(e,n)})}function Pe(e,t){const n=e.__nodeValue,l=je(t);i!==null&&e.nodeValue===l?e.__nodeValue=l:n!==l&&(e.nodeValue=l,e.__nodeValue=l)}function yt(e,t,n){e.addEventListener("input",()=>{let l=e.value;const r=e.type;(r==="number"||r==="range")&&(l=l===""?null:+l),n(l)}),q(()=>{const l=t(),r=l==null?null:l+"";e.value=r,e.__value=l})}function xt(e){for(let t=0;t<e.length;t++)be.add(e[t]);for(const t of Q)t(e)}function $e(e,t){const n=t.type,l=t.composedPath?.()||[];let r=l[0]||t.target;t.target!==r&&ae(t,"target",{configurable:!0,value:r});let o=0;const u=t.__root;if(u){const f=l.indexOf(u);f<l.indexOf(e)&&(o=f)}for(r=l[o]||t.target,ae(t,"currentTarget",{configurable:!0,get(){return r||document}});r!==null;){const f=r.parentNode||r.host||null,_="__"+n,a=r[_];if(a!==void 0&&!r.disabled)if(D(a)){const[p,...c]=a;p.apply(r,[t,...c])}else a.call(r,t);if(t.cancelBubble||f===e)break;r=f}t.__root=e}function bt(e,t,n,l){const r=Le();me(e);const o=i;let u=null,f=null,_=!1,a=!1;const p=q(()=>{const m=!!t();if(r.v!==m||!_){if(r.v=m,_){const x=r.c,O=r.a;m?(O===null||O.size===0?R(s):z(O,"out"),x===null||x.size===0?R(c):z(x,"in")):(x===null||x.size===0?R(c):z(x,"out"),O===null||O.size===0?R(s):z(O,"in"))}else if(i!==null){const x=i?.[0]?.data;!x&&i[0]!==null||x==="ssr:if:true"&&!m||x==="ssr:if:false"&&m?(k(i),A(null)):i.shift()}_=!0}},r,!1),c=q(()=>{u!==null&&(k(u),u=null),r.v&&(n(e),a||(A(o),a=!0)),u=r.d,r.d=null},r,!0);r.ce=c;const s=q(()=>{f!==null&&(k(f),f=null),r.v||(l!==null&&l(e),a||(A(o),a=!0)),f=r.d,r.d=null},r,!0);r.ae=s,rt(p,()=>{u!==null&&k(u),f!==null&&k(f),w(c),w(s)}),r.e=p}function je(e){return typeof e=="string"?e:e==null?"":e+""}function Et(e){i!==null&&(he(e,"value",null),he(e,"checked",null))}function he(e,t,n){n=n==null?null:n+"",(i===null||e.getAttribute(t)!==n&&t!=="src"&&t!=="srcset")&&(n===null?e.removeAttribute(t):e.setAttribute(t,n))}function ze(e,t){Oe();const n=new Set,l=t.target,r=Fe(t.intro||!1),o=l.firstChild,u=le(o),f=i;let _;try{let c=null;u===null&&(c=Ye(),l.appendChild(c)),A(u);const s=q(()=>{t.context&&(ct({}),v.c=t.context),_=e(c,t.props||{},t.events||{}),t.context&&st()},r,!0);r.e=s}catch(c){if(t.recover!==!1&&u!==null)return console.error("ERR_SVELTE_HYDRATION_MISMATCH",c),k(u),o.remove(),u.at(-1)?.nextSibling?.remove(),ze(e,t);throw c}finally{A(f)}const a=$e.bind(null,l),p=c=>{for(let s=0;s<c.length;s++){const m=c[s];n.has(m)||(n.add(m),l.addEventListener(m,a,Me.includes(m)?{passive:!0}:void 0))}};return p(we(be)),Q.add(p),[_,()=>{for(const s of n)l.removeEventListener(s,a);Q.delete(p);const c=r.d;c!==null&&k(c),u!==null&&k(u),w(r.e)}]}const ke=1,ue=2,fe=4,G=8,ce=16,Te=32,V=64,U=128,E=256,b=512,L=1024,X=2048,Z=4096,J=fe|G|ce|Te,Be=Symbol();let H=!1,T=[],ee=[],K=0,g=null,h=null,d=null,y=0,F=!1,He=!1,I=!1,N=null,v=null;function Ke(e){return{a:null,c:null,e:null,i:!1,m:!1,p:v,s:e,r:!1,u:null}}function W(e){const t=e||v;return t!==null&&t.r}function We(e,t){return e===t}function Ge(e,t){return{c:null,e:null,f:e,v:t,x:null}}function Ze(e,t,n){return{b:n,c:null,d:null,e:null,f:e,i:null,r:null,v:t,x:null,y:null}}function Je(e,t){const n=e.r;n===null?e.r=[t]:n.push(t)}function se(e){const t=e.f;if(t&b||e.v===Be)return!0;if(t&L){const n=e.d;if(n!==null){const l=n.length;let r;for(r=0;r<l;r++){const o=n[r];if(o.f&L&&!se(o)){C(o,E);continue}if(o.f&b)if(o.f&ue){if(Se(o,!0),e.f&b)return!0}else return!0}}}return!1}function Ne(e){const t=e.i,n=d,l=y,r=g,o=N,u=v,f=I,_=(e.f&ce)!==0,a=F;d=null,y=0,g=e,N=e.b,v=e.x,I=h===null&&(e.f&U)!==0,F=!1,_&&v?.u!=null&&v.u.e();try{let p;_?p=t(e.b):p=t();let c=e.d;if(d!==null){let s;if(M(e,y,!1),c!==null&&y>0)for(c.length=y+d.length,s=0;s<d.length;s++)c[y+s]=d[s];else e.d=c=d;if(!I)for(s=y;s<c.length;s++){const m=c[s];m.c===null?m.c=[e]:m.c.push(e)}}else c!==null&&y<c.length&&(M(e,y,!1),c.length=y);return p}finally{d=n,y=l,g=r,N=o,v=u,I=f,F=a}}function M(e,t,n){const l=e.d;if(l!==null){let r;for(r=t;r<l.length;r++){const o=l[r],u=o.c;let f=0;if(u!==null)if(f=u.length-1,f===0)o.c=null;else{const _=u.indexOf(e);u[_]=u[f],u.pop()}n&&f===0&&o.f&U&&M(o,0,!0)}}}function Ce(e){const t=e.r;if(e.r=null,t!==null){let n;for(n=0;n<t.length;n++){const l=t[n];l.f&J?w(l):(M(l,0,!0),l.d=null)}}}function Qe(e,t){if(e!==null)throw t}function R(e){if(e.f&Z)return;const t=e.v,n=h;h=e;try{Ce(e),t!==null&&t();const r=Ne(e);typeof r=="function"&&(e.v=r)}catch(r){const o=e.b;if(o!==null)Qe(o,r);else throw r}finally{h=n}const l=e.x;W(l)&&e.f&G&&T.length>0&&et(l)}function te(e){const t=e.length;if(t>0){if(K>100)throw new Error("ERR_SVELTE_TOO_MANY_UPDATES");K++;let n;for(n=0;n<t;n++){const l=e[n],r=l.f;r&(Z|X)||(se(l)?(C(l,E),R(l)):r&L&&C(l,E))}e.length=0}}function Xe(){if(H=!1,K>101)return;const e=T,t=ee;T=[],ee=[],te(e),te(t),H||(K=0)}function Y(e,t){const n=e.f;t||n&Te?(R(e),C(e,E)):(H||(H=!0,queueMicrotask(Xe)),n&fe?ee.push(e):T.push(e))}function et(e){const t=[];for(let n=0;n<T.length;n++){const l=T[n];l.f&G&&l.x===e&&(t.push(l),T.splice(n,1),n--)}te(t)}function Se(e,t){const n=Ne(e),l=I||h===null&&e.f&U?b:E;C(e,l);const r=e.e;r(n,e.v)||(e.v=n,ie(e,b,t))}function gt(e){const t=e.f;if(t&Z)return e.v;if(g!==null&&!(g.f&V)&&!F){const n=(g.f&U)!==0,l=g.d;d===null&&l!==null&&l[y]===e&&!(n&&h!==null)?y++:d===null?d=[e]:e!==d[d.length-1]&&d.push(e)}return t&ue&&se(e)&&Se(e,!1),e.v}function kt(e,t){return tt(e,t),t}function ne(e,t){const n=e.f;(n&X)!==0!==t&&(e.f^=X,!t&&n&J&&!(n&E)&&Y(e,!1));const r=e.r;if(r!==null){let o;for(o=0;o<r.length;o++)ne(r[o],t)}}function ie(e,t,n){const l=W(e.x),r=e.c;if(r!==null){const o=r.length;let u;for(u=0;u<o;u++){const f=r[u],_=f.f,a=(_&U)!==0,p=(_&b)!==0;p&&!a||(!n||!l)&&f===h||(C(f,t),(_&E||p&&a)&&(f.f&J?Y(f,!1):ie(f,L,n)))}}}function tt(e,t){if(!F&&!He&&g!==null&&W(e.x)&&g.f&ue)throw new Error("ERR_SVELTE_UNSAFE_MUTATION");if(e.f&ke&&!e.e(t,e.v)){const n=e.x;if(e.v=t,W(n)&&h!==null&&h.c===null&&h.f&E&&d!==null&&d.includes(e)&&(C(h,b),Y(h,!1)),ie(e,b,!0),h===null&&T.length===0){const l=n?.u;if(l!=null){B(l.b);const r=Ae(()=>{w(r),B(l.a)})}}}}function w(e){const t=e.v,n=e.y,l=e.f;Ce(e),M(e,0,!0),e.i=e.r=e.y=e.x=e.b=e.v=e.d=e.c=null,C(e,Z),n!==null&&(D(n)?B(n):n()),t!==null&&l&J&&t()}function Tt(e,t){const n=Ge(ke|E,e);return n.x=v,n.e=nt(t),n}function nt(e){if(e!==void 0)return e;const t=v;return t&&!t.i?ft:We}function _e(e,t,n,l,r){const o=Ze(e|b,null,l);return o.i=t,o.x=v,r&&Y(o,n),h!==null&&!(e&V)&&Je(h,o),o}function Ae(e){return _e(fe|V,e,!1,N,!0)}function lt(e,t){return _e(G|V,e,t,N,!0)}function q(e,t=N,n=!1,l=!0){let r=ce;return n&&(r|=V),_e(r,e,l,t,!0)}function rt(e,t){let n=e.y;n===null?e.y=t:D(n)?n.push(t):e.y=[n,t]}const ot=~(b|L|E);function C(e,t){e.f=e.f&ot|t}function ut(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ft(e,t){return!ut(e,t)}function ct(e,t=!1,n=!1){const l=Ke(e);l.r=t,l.i=n,v=l}function st(e){const t=v;if(t!==null){e!==void 0&&(t.a=e);const n=t.e;if(n!==null){t.e=null;for(let l=0;l<n.length;l++)Y(n[l],!1)}v=t.p,t.m=!0}}export{ct as a,yt as b,mt as c,xt as d,_t as e,ht as f,gt as g,Tt as h,bt as i,qe as j,dt as k,it as l,at as m,ze as n,pt as o,st as p,Et as r,kt as s,vt as t};