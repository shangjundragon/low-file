import{Comment as e,Fragment as t,Icon_default as n,_common_default as r,c as i,cB as a,cM as o,cNotM as s,createInjectionKey as c,createTextVNode as l,defineComponent as u,h as d,init_vue_runtime_esm_bundler as f,replaceable as p,toRef as m,useStyle as h,warn as g}from"./router-Dj4q5DBF.js";const _=c(`n-drawer-body`),v=c(`n-drawer`),y=c(`n-modal-body`),b=c(`n-modal-provider`),x=c(`n-modal`),S=c(`n-popover-body`),C=new WeakSet;function w(e){C.add(e)}function T(e){return!C.has(e)}f();function E(n,r=!0,i=[]){return n.forEach(n=>{if(n!==null){if(typeof n!=`object`){(typeof n==`string`||typeof n==`number`)&&i.push(l(String(n)));return}if(Array.isArray(n)){E(n,r,i);return}if(n.type===t){if(n.children===null)return;Array.isArray(n.children)&&E(n.children,r,i)}else{if(n.type===e&&r)return;i.push(n)}}}),i}function D(e,t=`default`,n=void 0){let r=e[t];if(!r)return g(`getFirstSlotVNode`,`slot[${t}] is empty`),null;let i=E(r(n));return i.length===1?i[0]:(g(`getFirstSlotVNode`,`slot[${t}] should have exactly one child`),null)}function O(e,t,n){if(!t)return null;let r=E(t(n));return r.length===1?r[0]:(g(`getFirstSlotVNode`,`slot[${e}] should have exactly one child`),null)}function k(e,t=[],n){let r={};return t.forEach(t=>{r[t]=e[t]}),Object.assign(r,n)}function A(e,t=[],n){let r={},i=Object.getOwnPropertyNames(e);return i.forEach(n=>{t.includes(n)||(r[n]=e[n])}),Object.assign(r,n)}f();function j(e,...t){return typeof e==`function`?e(...t):typeof e==`string`?l(e):typeof e==`number`?l(String(e)):null}f();var M=p(`close`,()=>d(`svg`,{viewBox:`0 0 12 12`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":!0},d(`g`,{stroke:`none`,"stroke-width":`1`,fill:`none`,"fill-rule":`evenodd`},d(`g`,{fill:`currentColor`,"fill-rule":`nonzero`},d(`path`,{d:`M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z`}))))),N=a(`base-close`,`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[o(`absolute`,`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),i(`&::before`,`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),s(`disabled`,[i(`&:hover`,`
 color: var(--n-close-icon-color-hover);
 `),i(`&:hover::before`,`
 background-color: var(--n-close-color-hover);
 `),i(`&:focus::before`,`
 background-color: var(--n-close-color-hover);
 `),i(`&:active`,`
 color: var(--n-close-icon-color-pressed);
 `),i(`&:active::before`,`
 background-color: var(--n-close-color-pressed);
 `)]),o(`disabled`,`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),o(`round`,[i(`&::before`,`
 border-radius: 50%;
 `)])]);f();var P=u({name:`BaseClose`,props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return h(`-base-close`,N,m(e,`clsPrefix`)),()=>{let{clsPrefix:t,disabled:r,absolute:i,round:a,isButtonTag:o}=e,s=o?`button`:`div`;return d(s,{type:o?`button`:void 0,tabindex:r||!e.focusable?-1:0,"aria-disabled":r,"aria-label":`close`,role:o?void 0:`button`,disabled:r,class:[`${t}-base-close`,i&&`${t}-base-close--absolute`,r&&`${t}-base-close--disabled`,a&&`${t}-base-close--round`],onMousedown:t=>{e.focusable||t.preventDefault()},onClick:e.onClick},d(n,{clsPrefix:t},{default:()=>d(M,null)}))}}});const{cubicBezierEaseIn:F,cubicBezierEaseOut:I}=r;function L({transformOrigin:e=`inherit`,duration:t=`.2s`,enterScale:n=`.9`,originalTransform:r=``,originalTransition:a=``}={}){return[i(`&.fade-in-scale-up-transition-leave-active`,{transformOrigin:e,transition:`opacity ${t} ${F}, transform ${t} ${F} ${a&&`,${a}`}`}),i(`&.fade-in-scale-up-transition-enter-active`,{transformOrigin:e,transition:`opacity ${t} ${I}, transform ${t} ${I} ${a&&`,${a}`}`}),i(`&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to`,{opacity:0,transform:`${r} scale(${n})`}),i(`&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to`,{opacity:1,transform:`${r} scale(1)`})]}export{P as Close_default,_ as drawerBodyInjectionKey,T as eventEffectNotPerformed,L as fadeInScaleUpTransition,E as flatten,D as getFirstSlotVNode,O as getFirstSlotVNodeWithTypedProps,k as keep,w as markEventEffectPerformed,y as modalBodyInjectionKey,x as modalInjectionKey,b as modalProviderInjectionKey,A as omit,S as popoverBodyInjectionKey,j as render};