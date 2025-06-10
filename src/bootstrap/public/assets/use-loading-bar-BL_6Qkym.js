import{Fragment as e,Icon_default as t,Scrollbar_default as n,VResizeObserver_default as r,c as i,cB as a,cE as o,cM as s,cNotM as c,call as l,changeColor as u,computed as d,createInjectionKey as f,createKey as p,defineComponent as m,getCurrentInstance as h,getMargin as ee,h as g,init_es as _,init_es$2 as v,init_es$3 as y,init_es$4 as b,init_vue_runtime_esm_bundler as x,inject as S,isSafari as C,light_default$2 as w,nextTick as T,off as E,on as D,onMounted as O,provide as te,ref as k,resolveSlot as A,resolveSlotWithTypedProps as j,resolveWrappedSlot as M,throwError as N,toRef as P,useConfig as ne,useFormItem as re,useMergedState as ie,useRtl as ae,useStyle as oe,useThemeClass as se,use_memo_default as F,use_theme_default as I,watch as L,watchEffect as R}from"./router-Dj4q5DBF.js";import{Clear_default as z,Suffix_default as B,useLocale as ce}from"./Suffix-DwsUpR9I.js";import{loadingBarApiInjectionKey as V}from"./context-ID4WrUp9.js";x();var H=m({name:`Eye`,render(){return g(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`},g(`path`,{d:`M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`}),g(`circle`,{cx:`256`,cy:`256`,r:`80`,fill:`none`,stroke:`currentColor`,"stroke-miterlimit":`10`,"stroke-width":`32`}))}});x();var U=m({name:`EyeOff`,render(){return g(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`},g(`path`,{d:`M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z`,fill:`currentColor`}),g(`path`,{d:`M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z`,fill:`currentColor`}),g(`path`,{d:`M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z`,fill:`currentColor`}),g(`path`,{d:`M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z`,fill:`currentColor`}),g(`path`,{d:`M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z`,fill:`currentColor`}))}}),W={paddingTiny:`0 8px`,paddingSmall:`0 10px`,paddingMedium:`0 12px`,paddingLarge:`0 14px`,clearSize:`16px`};b();function G(e){let{textColor2:t,textColor3:n,textColorDisabled:r,primaryColor:i,primaryColorHover:a,inputColor:o,inputColorDisabled:s,borderColor:c,warningColor:l,warningColorHover:d,errorColor:f,errorColorHover:p,borderRadius:m,lineHeight:h,fontSizeTiny:ee,fontSizeSmall:g,fontSizeMedium:_,fontSizeLarge:v,heightTiny:y,heightSmall:b,heightMedium:x,heightLarge:S,actionColor:C,clearColor:w,clearColorHover:T,clearColorPressed:E,placeholderColor:D,placeholderColorDisabled:O,iconColor:te,iconColorDisabled:k,iconColorHover:A,iconColorPressed:j,fontWeight:M}=e;return Object.assign(Object.assign({},W),{fontWeight:M,countTextColorDisabled:r,countTextColor:n,heightTiny:y,heightSmall:b,heightMedium:x,heightLarge:S,fontSizeTiny:ee,fontSizeSmall:g,fontSizeMedium:_,fontSizeLarge:v,lineHeight:h,lineHeightTextarea:h,borderRadius:m,iconSize:`16px`,groupLabelColor:C,groupLabelTextColor:t,textColor:t,textColorDisabled:r,textDecorationColor:t,caretColor:i,placeholderColor:D,placeholderColorDisabled:O,color:o,colorDisabled:s,colorFocus:o,groupLabelBorder:`1px solid ${c}`,border:`1px solid ${c}`,borderHover:`1px solid ${a}`,borderDisabled:`1px solid ${c}`,borderFocus:`1px solid ${a}`,boxShadowFocus:`0 0 0 2px ${u(i,{alpha:.2})}`,loadingColor:i,loadingColorWarning:l,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${d}`,colorFocusWarning:o,borderFocusWarning:`1px solid ${d}`,boxShadowFocusWarning:`0 0 0 2px ${u(l,{alpha:.2})}`,caretColorWarning:l,loadingColorError:f,borderError:`1px solid ${f}`,borderHoverError:`1px solid ${p}`,colorFocusError:o,borderFocusError:`1px solid ${p}`,boxShadowFocusError:`0 0 0 2px ${u(f,{alpha:.2})}`,caretColorError:f,clearColor:w,clearColorHover:T,clearColorPressed:E,iconColor:te,iconColorDisabled:k,iconColorHover:A,iconColorPressed:j,suffixTextColor:t})}const K={name:`Input`,common:w,self:G};var le=K;const ue=f(`n-input`);var de=a(`input`,`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[o(`input, textarea`,`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),o(`input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder`,`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),o(`input-el, textarea-el`,`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[i(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `),i(`&::placeholder`,`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),i(`&:-webkit-autofill ~`,[o(`placeholder`,`display: none;`)])]),s(`round`,[c(`textarea`,`border-radius: calc(var(--n-height) / 2);`)]),o(`placeholder`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[i(`span`,`
 width: 100%;
 display: inline-block;
 `)]),s(`textarea`,[o(`placeholder`,`overflow: visible;`)]),c(`autosize`,`width: 100%;`),s(`autosize`,[o(`textarea-el, input-el`,`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),a(`input-wrapper`,`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),o(`input-mirror`,`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),o(`input-el`,`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[i(`&[type=password]::-ms-reveal`,`display: none;`),i(`+`,[o(`placeholder`,`
 display: flex;
 align-items: center; 
 `)])]),c(`textarea`,[o(`placeholder`,`white-space: nowrap;`)]),o(`eye`,`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),s(`textarea`,`width: 100%;`,[a(`input-word-count`,`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),s(`resizable`,[a(`input-wrapper`,`
 resize: vertical;
 min-height: var(--n-height);
 `)]),o(`textarea-el, textarea-mirror, placeholder`,`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),o(`textarea-mirror`,`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),s(`pair`,[o(`input-el, placeholder`,`text-align: center;`),o(`separator`,`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[a(`icon`,`
 color: var(--n-icon-color);
 `),a(`base-icon`,`
 color: var(--n-icon-color);
 `)])]),s(`disabled`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[o(`border`,`border: var(--n-border-disabled);`),o(`input-el, textarea-el`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),o(`placeholder`,`color: var(--n-placeholder-color-disabled);`),o(`separator`,`color: var(--n-text-color-disabled);`,[a(`icon`,`
 color: var(--n-icon-color-disabled);
 `),a(`base-icon`,`
 color: var(--n-icon-color-disabled);
 `)]),a(`input-word-count`,`
 color: var(--n-count-text-color-disabled);
 `),o(`suffix, prefix`,`color: var(--n-text-color-disabled);`,[a(`icon`,`
 color: var(--n-icon-color-disabled);
 `),a(`internal-icon`,`
 color: var(--n-icon-color-disabled);
 `)])]),c(`disabled`,[o(`eye`,`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[i(`&:hover`,`
 color: var(--n-icon-color-hover);
 `),i(`&:active`,`
 color: var(--n-icon-color-pressed);
 `)]),i(`&:hover`,[o(`state-border`,`border: var(--n-border-hover);`)]),s(`focus`,`background-color: var(--n-color-focus);`,[o(`state-border`,`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),o(`border, state-border`,`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),o(`state-border`,`
 border-color: #0000;
 z-index: 1;
 `),o(`prefix`,`margin-right: 4px;`),o(`suffix`,`
 margin-left: 4px;
 `),o(`suffix, prefix`,`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[a(`base-loading`,`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),a(`base-clear`,`
 font-size: var(--n-icon-size);
 `,[o(`placeholder`,[a(`base-icon`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),i(`>`,[a(`icon`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),a(`base-icon`,`
 font-size: var(--n-icon-size);
 `)]),a(`input-word-count`,`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),[`warning`,`error`].map(e=>s(`${e}-status`,[c(`disabled`,[a(`base-loading`,`
 color: var(--n-loading-color-${e})
 `),o(`input-el, textarea-el`,`
 caret-color: var(--n-caret-color-${e});
 `),o(`state-border`,`
 border: var(--n-border-${e});
 `),i(`&:hover`,[o(`state-border`,`
 border: var(--n-border-hover-${e});
 `)]),i(`&:focus`,`
 background-color: var(--n-color-focus-${e});
 `,[o(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),s(`focus`,`
 background-color: var(--n-color-focus-${e});
 `,[o(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]);const fe=a(`input`,[s(`disabled`,[o(`input-el, textarea-el`,`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);x();function pe(e){let t=0;for(let n of e)t++;return t}function q(e){return e===``||e==null}function me(e){let t=k(null);function n(){let{value:n}=e;if(!n?.focus){i();return}let{selectionStart:r,selectionEnd:a,value:o}=n;if(r==null||a==null){i();return}t.value={start:r,end:a,beforeText:o.slice(0,r),afterText:o.slice(a)}}function r(){var n;let{value:r}=t,{value:i}=e;if(!r||!i)return;let{value:a}=i,{start:o,beforeText:s,afterText:c}=r,l=a.length;if(a.endsWith(c))l=a.length-c.length;else if(a.startsWith(s))l=s.length;else{let e=s[o-1],t=a.indexOf(e,o-1);t!==-1&&(l=t+1)}(n=i.setSelectionRange)==null||n.call(i,l,l)}function i(){t.value=null}return L(e,i),{recordCursor:n,restoreCursor:r}}x();var J=m({name:`InputWordCount`,setup(e,{slots:t}){let{mergedValueRef:n,maxlengthRef:r,mergedClsPrefixRef:i,countGraphemesRef:a}=S(ue),o=d(()=>{let{value:e}=n;return e===null||Array.isArray(e)?0:(a.value||pe)(e)});return()=>{let{value:e}=r,{value:a}=n;return g(`span`,{class:`${i.value}-input-word-count`},j(t.default,{value:a===null||Array.isArray(a)?``:a},()=>[e===void 0?o.value:`${o.value} / ${e}`]))}}});y(),b(),v(),x(),_();const Y=Object.assign(Object.assign({},I.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:`text`},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean});var he=m({name:`Input`,props:Y,slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=ne(e),a=I(`Input`,`-input`,de,le,e,t);C&&oe(`-input-safari`,fe,t);let o=k(null),s=k(null),c=k(null),u=k(null),f=k(null),m=k(null),g=k(null),_=me(g),v=k(null),{localeRef:y}=ce(`Input`),b=k(e.defaultValue),x=P(e,`value`),S=ie(x,b),w=re(e),{mergedSizeRef:A,mergedDisabledRef:j,mergedStatusRef:M}=w,N=k(!1),z=k(!1),B=k(!1),V=k(!1),H=null,U=d(()=>{let{placeholder:t,pair:n}=e;return n?Array.isArray(t)?t:t===void 0?[``,``]:[t,t]:t===void 0?[y.value.placeholder]:[t]}),W=d(()=>{let{value:e}=B,{value:t}=S,{value:n}=U;return!e&&(q(t)||Array.isArray(t)&&q(t[0]))&&n[0]}),G=d(()=>{let{value:e}=B,{value:t}=S,{value:n}=U;return!e&&n[1]&&(q(t)||Array.isArray(t)&&q(t[1]))}),K=F(()=>e.internalForceFocus||N.value),pe=F(()=>{if(j.value||e.readonly||!e.clearable||!K.value&&!z.value)return!1;let{value:t}=S,{value:n}=K;return e.pair?!!(Array.isArray(t)&&(t[0]||t[1]))&&(z.value||n):!!t&&(z.value||n)}),J=d(()=>{let{showPasswordOn:t}=e;if(t)return t;if(e.showPasswordToggle)return`click`}),Y=k(!1),he=d(()=>{let{textDecoration:t}=e;return t?Array.isArray(t)?t.map(e=>({textDecoration:e})):[{textDecoration:t}]:[``,``]}),ge=k(void 0),_e=()=>{var t,n;if(e.type===`textarea`){let{autosize:r}=e;if(r&&(ge.value=(n=(t=v.value)?.$el)?.offsetWidth),!s.value||typeof r==`boolean`)return;let{paddingTop:i,paddingBottom:a,lineHeight:o}=window.getComputedStyle(s.value),l=Number(i.slice(0,-2)),u=Number(a.slice(0,-2)),d=Number(o.slice(0,-2)),{value:f}=c;if(!f)return;if(r.minRows){let e=Math.max(r.minRows,1),t=`${l+u+d*e}px`;f.style.minHeight=t}if(r.maxRows){let e=`${l+u+d*r.maxRows}px`;f.style.maxHeight=e}}},ve=d(()=>{let{maxlength:t}=e;return t===void 0?void 0:Number(t)});O(()=>{let{value:e}=S;Array.isArray(e)||nt(e)});let ye=h().proxy;function X(t,n){let{onUpdateValue:r,"onUpdate:value":i,onInput:a}=e,{nTriggerFormInput:o}=w;r&&l(r,t,n),i&&l(i,t,n),a&&l(a,t,n),b.value=t,o()}function Z(t,n){let{onChange:r}=e,{nTriggerFormChange:i}=w;r&&l(r,t,n),b.value=t,i()}function be(t){let{onBlur:n}=e,{nTriggerFormBlur:r}=w;n&&l(n,t),r()}function xe(t){let{onFocus:n}=e,{nTriggerFormFocus:r}=w;n&&l(n,t),r()}function Se(t){let{onClear:n}=e;n&&l(n,t)}function Ce(t){let{onInputBlur:n}=e;n&&l(n,t)}function we(t){let{onInputFocus:n}=e;n&&l(n,t)}function Te(){let{onDeactivate:t}=e;t&&l(t)}function Ee(){let{onActivate:t}=e;t&&l(t)}function De(t){let{onClick:n}=e;n&&l(n,t)}function Oe(t){let{onWrapperFocus:n}=e;n&&l(n,t)}function ke(t){let{onWrapperBlur:n}=e;n&&l(n,t)}function Ae(){B.value=!0}function je(e){B.value=!1,e.target===m.value?Q(e,1):Q(e,0)}function Q(t,n=0,r=`input`){let i=t.target.value;if(nt(i),t instanceof InputEvent&&!t.isComposing&&(B.value=!1),e.type===`textarea`){let{value:e}=v;e&&e.syncUnifiedContainer()}if(H=i,B.value)return;_.recordCursor();let a=Me(i);if(a)if(!e.pair)r===`input`?X(i,{source:n}):Z(i,{source:n});else{let{value:e}=S;e=Array.isArray(e)?[e[0],e[1]]:[``,``],e[n]=i,r===`input`?X(e,{source:n}):Z(e,{source:n})}ye.$forceUpdate(),a||T(_.restoreCursor)}function Me(t){let{countGraphemes:n,maxlength:r,minlength:i}=e;if(n){let e;if(r!==void 0&&(e===void 0&&(e=n(t)),e>Number(r))||i!==void 0&&(e===void 0&&(e=n(t)),e<Number(r)))return!1}let{allowInput:a}=e;return typeof a==`function`?a(t):!0}function Ne(e){Ce(e),e.relatedTarget===o.value&&Te(),e.relatedTarget!==null&&(e.relatedTarget===f.value||e.relatedTarget===m.value||e.relatedTarget===s.value)||(V.value=!1),$(e,`blur`),g.value=null}function Pe(e,t){we(e),N.value=!0,V.value=!0,Ee(),$(e,`focus`),t===0?g.value=f.value:t===1?g.value=m.value:t===2&&(g.value=s.value)}function Fe(t){e.passivelyActivated&&(ke(t),$(t,`blur`))}function Ie(t){e.passivelyActivated&&(N.value=!0,Oe(t),$(t,`focus`))}function $(e,t){e.relatedTarget!==null&&(e.relatedTarget===f.value||e.relatedTarget===m.value||e.relatedTarget===s.value||e.relatedTarget===o.value)||(t===`focus`?(xe(e),N.value=!0):t===`blur`&&(be(e),N.value=!1))}function Le(e,t){Q(e,t,`change`)}function Re(e){De(e)}function ze(e){Se(e),Be()}function Be(){e.pair?(X([``,``],{source:`clear`}),Z([``,``],{source:`clear`})):(X(``,{source:`clear`}),Z(``,{source:`clear`}))}function Ve(t){let{onMousedown:n}=e;n&&n(t);let{tagName:r}=t.target;if(r!==`INPUT`&&r!==`TEXTAREA`){if(e.resizable){let{value:e}=o;if(e){let{left:n,top:r,width:i,height:a}=e.getBoundingClientRect(),o=14;if(n+i-o<t.clientX&&t.clientX<n+i&&r+a-o<t.clientY&&t.clientY<r+a)return}}t.preventDefault(),N.value||Xe()}}function He(){var t;z.value=!0,e.type===`textarea`&&((t=v.value)==null||t.handleMouseEnterWrapper())}function Ue(){var t;z.value=!1,e.type===`textarea`&&((t=v.value)==null||t.handleMouseLeaveWrapper())}function We(){j.value||J.value===`click`&&(Y.value=!Y.value)}function Ge(e){if(j.value)return;e.preventDefault();let t=e=>{e.preventDefault(),E(`mouseup`,document,t)};if(D(`mouseup`,document,t),J.value!==`mousedown`)return;Y.value=!0;let n=()=>{Y.value=!1,E(`mouseup`,document,n)};D(`mouseup`,document,n)}function Ke(t){e.onKeyup&&l(e.onKeyup,t)}function qe(t){switch(e.onKeydown&&l(e.onKeydown,t),t.key){case`Escape`:Ye();break;case`Enter`:Je(t);break}}function Je(t){var n,r;if(e.passivelyActivated){let{value:i}=V;if(i){e.internalDeactivateOnEnter&&Ye();return}t.preventDefault(),e.type===`textarea`?(n=s.value)==null||n.focus():(r=f.value)==null||r.focus()}}function Ye(){e.passivelyActivated&&(V.value=!1,T(()=>{var e;(e=o.value)==null||e.focus()}))}function Xe(){var t,n,r;j.value||(e.passivelyActivated?(t=o.value)==null||t.focus():((n=s.value)==null||n.focus(),(r=f.value)==null||r.focus()))}function Ze(){var e;(e=o.value)?.contains(document.activeElement)&&document.activeElement.blur()}function Qe(){var e,t;(e=s.value)==null||e.select(),(t=f.value)==null||t.select()}function $e(){j.value||(s.value?s.value.focus():f.value&&f.value.focus())}function et(){let{value:e}=o;e?.contains(document.activeElement)&&e!==document.activeElement&&Ye()}function tt(t){if(e.type===`textarea`){let{value:e}=s;e?.scrollTo(t)}else{let{value:e}=f;e?.scrollTo(t)}}function nt(t){let{type:n,pair:r,autosize:i}=e;if(!r&&i)if(n===`textarea`){let{value:e}=c;e&&(e.textContent=`${t??``}\r\n`)}else{let{value:e}=u;e&&(t?e.textContent=t:e.innerHTML=`&nbsp;`)}}function rt(){_e()}let it=k({top:`0`});function at(e){var t;let{scrollTop:n}=e.target;it.value.top=`${-n}px`,(t=v.value)==null||t.syncUnifiedContainer()}let ot=null;R(()=>{let{autosize:t,type:n}=e;t&&n===`textarea`?ot=L(S,e=>{!Array.isArray(e)&&e!==H&&nt(e)}):ot?.()});let st=null;R(()=>{e.type===`textarea`?st=L(S,e=>{var t;!Array.isArray(e)&&e!==H&&((t=v.value)==null||t.syncUnifiedContainer())}):st?.()}),te(ue,{mergedValueRef:S,maxlengthRef:ve,mergedClsPrefixRef:t,countGraphemesRef:P(e,`countGraphemes`)});let ct={wrapperElRef:o,inputElRef:f,textareaElRef:s,isCompositing:B,clear:Be,focus:Xe,blur:Ze,select:Qe,deactivate:et,activate:$e,scrollTo:tt},lt=ae(`Input`,i,t),ut=d(()=>{let{value:e}=A,{common:{cubicBezierEaseInOut:t},self:{color:n,borderRadius:r,textColor:i,caretColor:o,caretColorError:s,caretColorWarning:c,textDecorationColor:l,border:u,borderDisabled:d,borderHover:f,borderFocus:m,placeholderColor:h,placeholderColorDisabled:g,lineHeightTextarea:_,colorDisabled:v,colorFocus:y,textColorDisabled:b,boxShadowFocus:x,iconSize:S,colorFocusWarning:C,boxShadowFocusWarning:w,borderWarning:T,borderFocusWarning:E,borderHoverWarning:D,colorFocusError:O,boxShadowFocusError:te,borderError:k,borderFocusError:j,borderHoverError:M,clearSize:N,clearColor:P,clearColorHover:ne,clearColorPressed:re,iconColor:ie,iconColorDisabled:ae,suffixTextColor:oe,countTextColor:se,countTextColorDisabled:F,iconColorHover:I,iconColorPressed:L,loadingColor:R,loadingColorError:z,loadingColorWarning:B,fontWeight:ce,[p(`padding`,e)]:V,[p(`fontSize`,e)]:H,[p(`height`,e)]:U}}=a.value,{left:W,right:G}=ee(V);return{"--n-bezier":t,"--n-count-text-color":se,"--n-count-text-color-disabled":F,"--n-color":n,"--n-font-size":H,"--n-font-weight":ce,"--n-border-radius":r,"--n-height":U,"--n-padding-left":W,"--n-padding-right":G,"--n-text-color":i,"--n-caret-color":o,"--n-text-decoration-color":l,"--n-border":u,"--n-border-disabled":d,"--n-border-hover":f,"--n-border-focus":m,"--n-placeholder-color":h,"--n-placeholder-color-disabled":g,"--n-icon-size":S,"--n-line-height-textarea":_,"--n-color-disabled":v,"--n-color-focus":y,"--n-text-color-disabled":b,"--n-box-shadow-focus":x,"--n-loading-color":R,"--n-caret-color-warning":c,"--n-color-focus-warning":C,"--n-box-shadow-focus-warning":w,"--n-border-warning":T,"--n-border-focus-warning":E,"--n-border-hover-warning":D,"--n-loading-color-warning":B,"--n-caret-color-error":s,"--n-color-focus-error":O,"--n-box-shadow-focus-error":te,"--n-border-error":k,"--n-border-focus-error":j,"--n-border-hover-error":M,"--n-loading-color-error":z,"--n-clear-color":P,"--n-clear-size":N,"--n-clear-color-hover":ne,"--n-clear-color-pressed":re,"--n-icon-color":ie,"--n-icon-color-hover":I,"--n-icon-color-pressed":L,"--n-icon-color-disabled":ae,"--n-suffix-text-color":oe}}),dt=r?se(`input`,d(()=>{let{value:e}=A;return e[0]}),ut,e):void 0;return Object.assign(Object.assign({},ct),{wrapperElRef:o,inputElRef:f,inputMirrorElRef:u,inputEl2Ref:m,textareaElRef:s,textareaMirrorElRef:c,textareaScrollbarInstRef:v,rtlEnabled:lt,uncontrolledValue:b,mergedValue:S,passwordVisible:Y,mergedPlaceholder:U,showPlaceholder1:W,showPlaceholder2:G,mergedFocus:K,isComposing:B,activated:V,showClearButton:pe,mergedSize:A,mergedDisabled:j,textDecorationStyle:he,mergedClsPrefix:t,mergedBordered:n,mergedShowPasswordOn:J,placeholderStyle:it,mergedStatus:M,textAreaScrollContainerWidth:ge,handleTextAreaScroll:at,handleCompositionStart:Ae,handleCompositionEnd:je,handleInput:Q,handleInputBlur:Ne,handleInputFocus:Pe,handleWrapperBlur:Fe,handleWrapperFocus:Ie,handleMouseEnter:He,handleMouseLeave:Ue,handleMouseDown:Ve,handleChange:Le,handleClick:Re,handleClear:ze,handlePasswordToggleClick:We,handlePasswordToggleMousedown:Ge,handleWrapperKeydown:qe,handleWrapperKeyup:Ke,handleTextAreaMirrorResize:rt,getTextareaScrollContainer:()=>s.value,mergedTheme:a,cssVars:r?void 0:ut,themeClass:dt?.themeClass,onRender:dt?.onRender})},render(){var i,a;let{mergedClsPrefix:o,mergedStatus:s,themeClass:c,type:l,countGraphemes:u,onRender:d}=this,f=this.$slots;return d?.(),g(`div`,{ref:`wrapperElRef`,class:[`${o}-input`,c,s&&`${o}-input--${s}-status`,{[`${o}-input--rtl`]:this.rtlEnabled,[`${o}-input--disabled`]:this.mergedDisabled,[`${o}-input--textarea`]:l===`textarea`,[`${o}-input--resizable`]:this.resizable&&!this.autosize,[`${o}-input--autosize`]:this.autosize,[`${o}-input--round`]:this.round&&l!==`textarea`,[`${o}-input--pair`]:this.pair,[`${o}-input--focus`]:this.mergedFocus,[`${o}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},g(`div`,{class:`${o}-input-wrapper`},M(f.prefix,e=>e&&g(`div`,{class:`${o}-input__prefix`},e)),l===`textarea`?g(n,{ref:`textareaScrollbarInstRef`,class:`${o}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var t,n;let{textAreaScrollContainerWidth:i}=this,a={width:this.autosize&&i&&`${i}px`};return g(e,null,g(`textarea`,Object.assign({},this.inputProps,{ref:`textareaElRef`,class:[`${o}-input__textarea-el`,(t=this.inputProps)?.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(n=this.inputProps)?.style,a],onBlur:this.handleInputBlur,onFocus:e=>{this.handleInputFocus(e,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?g(`div`,{class:`${o}-input__placeholder`,style:[this.placeholderStyle,a],key:`placeholder`},this.mergedPlaceholder[0]):null,this.autosize?g(r,{onResize:this.handleTextAreaMirrorResize},{default:()=>g(`div`,{ref:`textareaMirrorElRef`,class:`${o}-input__textarea-mirror`,key:`mirror`})}):null)}}):g(`div`,{class:`${o}-input__input`},g(`input`,Object.assign({type:l===`password`&&this.mergedShowPasswordOn&&this.passwordVisible?`text`:l},this.inputProps,{ref:`inputElRef`,class:[`${o}-input__input-el`,(i=this.inputProps)?.class],style:[this.textDecorationStyle[0],(a=this.inputProps)?.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:e=>{this.handleInputFocus(e,0)},onInput:e=>{this.handleInput(e,0)},onChange:e=>{this.handleChange(e,0)}})),this.showPlaceholder1?g(`div`,{class:`${o}-input__placeholder`},g(`span`,null,this.mergedPlaceholder[0])):null,this.autosize?g(`div`,{class:`${o}-input__input-mirror`,key:`mirror`,ref:`inputMirrorElRef`},`\xA0`):null),!this.pair&&M(f.suffix,e=>e||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?g(`div`,{class:`${o}-input__suffix`},[M(f[`clear-icon-placeholder`],e=>(this.clearable||e)&&g(z,{clsPrefix:o,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>e,icon:()=>{var e,t;return(t=(e=this.$slots)[`clear-icon`])?.call(e)}})),this.internalLoadingBeforeSuffix?null:e,this.loading===void 0?null:g(B,{clsPrefix:o,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}),this.internalLoadingBeforeSuffix?e:null,this.showCount&&this.type!==`textarea`?g(J,null,{default:e=>{var t;let{renderCount:n}=this;return n?n(e):(t=f.count)?.call(f,e)}}):null,this.mergedShowPasswordOn&&this.type===`password`?g(`div`,{class:`${o}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?A(f[`password-visible-icon`],()=>[g(t,{clsPrefix:o},{default:()=>g(H,null)})]):A(f[`password-invisible-icon`],()=>[g(t,{clsPrefix:o},{default:()=>g(U,null)})])):null]):null)),this.pair?g(`span`,{class:`${o}-input__separator`},A(f.separator,()=>[this.separator])):null,this.pair?g(`div`,{class:`${o}-input-wrapper`},g(`div`,{class:`${o}-input__input`},g(`input`,{ref:`inputEl2Ref`,type:this.type,class:`${o}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:e=>{this.handleInputFocus(e,1)},onInput:e=>{this.handleInput(e,1)},onChange:e=>{this.handleChange(e,1)}}),this.showPlaceholder2?g(`div`,{class:`${o}-input__placeholder`},g(`span`,null,this.mergedPlaceholder[1])):null),M(f.suffix,e=>(this.clearable||e)&&g(`div`,{class:`${o}-input__suffix`},[this.clearable&&g(z,{clsPrefix:o,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var e;return(e=f[`clear-icon`])?.call(f)},placeholder:()=>{var e;return(e=f[`clear-icon-placeholder`])?.call(f)}}),e]))):null,this.mergedBordered?g(`div`,{class:`${o}-input__border`}):null,this.mergedBordered?g(`div`,{class:`${o}-input__state-border`}):null,this.showCount&&l===`textarea`?g(J,null,{default:e=>{var t;let{renderCount:n}=this;return n?n(e):(t=f.count)?.call(f,e)}}):null)}});x();function ge(){let e=S(V,null);return e===null&&N(`use-loading-bar`,`No outer <n-loading-bar-provider /> founded.`),e}export{H as Eye_default,he as Input_default,le as light_default,ge as useLoadingBar};