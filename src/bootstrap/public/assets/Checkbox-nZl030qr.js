import{IconSwitchTransition_default as e,c as t,cB as n,cE as r,cM as i,call as a,changeColor as o,computed as s,createId as c,createInjectionKey as l,createKey as u,defineComponent as d,h as f,iconSwitchTransition as p,init_es$2 as m,init_es$3 as h,init_es$4 as g,init_vue_runtime_esm_bundler as _,inject as v,insideModal as y,insidePopover as b,light_default$2 as x,on as S,provide as C,ref as w,resolveWrappedSlot as T,toRef as E,useConfig as D,useFormItem as O,useMergedState as k,useRtl as A,useThemeClass as j,use_memo_default as M,use_theme_default as N}from"./router-DMl3VX-U.js";var P={sizeSmall:`14px`,sizeMedium:`16px`,sizeLarge:`18px`,labelPadding:`0 8px`,labelFontWeight:`400`};g();function F(e){let{baseColor:t,inputColorDisabled:n,cardColor:r,modalColor:i,popoverColor:a,textColorDisabled:s,borderColor:c,primaryColor:l,textColor2:u,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:p,borderRadiusSmall:m,lineHeight:h}=e;return Object.assign(Object.assign({},P),{labelLineHeight:h,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:p,borderRadius:m,color:t,colorChecked:l,colorDisabled:n,colorDisabledChecked:n,colorTableHeader:r,colorTableHeaderModal:i,colorTableHeaderPopover:a,checkMarkColor:t,checkMarkColorDisabled:s,checkMarkColorDisabledChecked:s,border:`1px solid ${c}`,borderDisabled:`1px solid ${c}`,borderDisabledChecked:`1px solid ${c}`,borderChecked:`1px solid ${l}`,borderFocus:`1px solid ${l}`,boxShadowFocus:`0 0 0 2px ${o(l,{alpha:.3})}`,textColor:u,textColorDisabled:s})}const I={name:`Checkbox`,common:x,self:F};var L=I;m(),_();const R=l(`n-checkbox-group`),z={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]};var B=d({name:`CheckboxGroup`,props:z,setup(e){let{mergedClsPrefixRef:t}=D(e),n=O(e),{mergedSizeRef:r,mergedDisabledRef:i}=n,o=w(e.defaultValue),c=s(()=>e.value),l=k(c,o),u=s(()=>{var e;return(e=l.value)?.length||0}),d=s(()=>Array.isArray(l.value)?new Set(l.value):new Set);function f(t,r){let{nTriggerFormInput:i,nTriggerFormChange:s}=n,{onChange:c,"onUpdate:value":u,onUpdateValue:d}=e;if(Array.isArray(l.value)){let e=Array.from(l.value),n=e.findIndex(e=>e===r);t?~n||(e.push(r),d&&a(d,e,{actionType:`check`,value:r}),u&&a(u,e,{actionType:`check`,value:r}),i(),s(),o.value=e,c&&a(c,e)):~n&&(e.splice(n,1),d&&a(d,e,{actionType:`uncheck`,value:r}),u&&a(u,e,{actionType:`uncheck`,value:r}),c&&a(c,e),o.value=e,i(),s())}else t?(d&&a(d,[r],{actionType:`check`,value:r}),u&&a(u,[r],{actionType:`check`,value:r}),c&&a(c,[r]),o.value=[r],i(),s()):(d&&a(d,[],{actionType:`uncheck`,value:r}),u&&a(u,[],{actionType:`uncheck`,value:r}),c&&a(c,[]),o.value=[],i(),s())}return C(R,{checkedCountRef:u,maxRef:E(e,`max`),minRef:E(e,`min`),valueSetRef:d,disabledRef:i,mergedSizeRef:r,toggleCheckbox:f}),{mergedClsPrefix:t}},render(){return f(`div`,{class:`${this.mergedClsPrefix}-checkbox-group`,role:`group`},this.$slots)}});_();var V=()=>f(`svg`,{viewBox:`0 0 64 64`,class:`check-icon`},f(`path`,{d:`M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z`}));_();var H=()=>f(`svg`,{viewBox:`0 0 100 100`,class:`line-icon`},f(`path`,{d:`M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z`})),U=t([n(`checkbox`,`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[i(`show-label`,`line-height: var(--n-label-line-height);`),t(`&:hover`,[n(`checkbox-box`,[r(`border`,`border: var(--n-border-checked);`)])]),t(`&:focus:not(:active)`,[n(`checkbox-box`,[r(`border`,`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),i(`inside-table`,[n(`checkbox-box`,`
 background-color: var(--n-merged-color-table);
 `)]),i(`checked`,[n(`checkbox-box`,`
 background-color: var(--n-color-checked);
 `,[n(`checkbox-icon`,[t(`.check-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),i(`indeterminate`,[n(`checkbox-box`,[n(`checkbox-icon`,[t(`.check-icon`,`
 opacity: 0;
 transform: scale(.5);
 `),t(`.line-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),i(`checked, indeterminate`,[t(`&:focus:not(:active)`,[n(`checkbox-box`,[r(`border`,`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),n(`checkbox-box`,`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[r(`border`,{border:`var(--n-border-checked)`})])]),i(`disabled`,{cursor:`not-allowed`},[i(`checked`,[n(`checkbox-box`,`
 background-color: var(--n-color-disabled-checked);
 `,[r(`border`,{border:`var(--n-border-disabled-checked)`}),n(`checkbox-icon`,[t(`.check-icon, .line-icon`,{fill:`var(--n-check-mark-color-disabled-checked)`})])])]),n(`checkbox-box`,`
 background-color: var(--n-color-disabled);
 `,[r(`border`,`
 border: var(--n-border-disabled);
 `),n(`checkbox-icon`,[t(`.check-icon, .line-icon`,`
 fill: var(--n-check-mark-color-disabled);
 `)])]),r(`label`,`
 color: var(--n-text-color-disabled);
 `)]),n(`checkbox-box-wrapper`,`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),n(`checkbox-box`,`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[r(`border`,`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),n(`checkbox-icon`,`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[t(`.check-icon, .line-icon`,`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),p({left:`1px`,top:`1px`})])]),r(`label`,`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[t(`&:empty`,{display:`none`})])]),y(n(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),b(n(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]);h(),g(),m(),_();const W=Object.assign(Object.assign({},N.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]});var G=d({name:`Checkbox`,props:W,setup(e){let t=v(R,null),n=w(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:o}=D(e),l=w(e.defaultChecked),d=E(e,`checked`),f=k(d,l),p=M(()=>{if(t){let n=t.valueSetRef.value;return n&&e.value!==void 0?n.has(e.value):!1}else return f.value===e.checkedValue}),m=O(e,{mergedSize(n){let{size:r}=e;if(r!==void 0)return r;if(t){let{value:e}=t.mergedSizeRef;if(e!==void 0)return e}if(n){let{mergedSize:e}=n;if(e!==void 0)return e.value}return`medium`},mergedDisabled(n){let{disabled:r}=e;if(r!==void 0)return r;if(t){if(t.disabledRef.value)return!0;let{maxRef:{value:e},checkedCountRef:n}=t;if(e!==void 0&&n.value>=e&&!p.value)return!0;let{minRef:{value:r}}=t;if(r!==void 0&&n.value<=r&&p.value)return!0}return n?n.disabled.value:!1}}),{mergedDisabledRef:h,mergedSizeRef:g}=m,_=N(`Checkbox`,`-checkbox`,U,L,e,r);function y(n){if(t&&e.value!==void 0)t.toggleCheckbox(!p.value,e.value);else{let{onChange:t,"onUpdate:checked":r,onUpdateChecked:i}=e,{nTriggerFormInput:o,nTriggerFormChange:s}=m,c=p.value?e.uncheckedValue:e.checkedValue;r&&a(r,c,n),i&&a(i,c,n),t&&a(t,c,n),o(),s(),l.value=c}}function b(e){h.value||y(e)}function x(e){if(!h.value)switch(e.key){case` `:case`Enter`:y(e)}}function S(e){switch(e.key){case` `:e.preventDefault()}}let C={focus:()=>{var e;(e=n.value)==null||e.focus()},blur:()=>{var e;(e=n.value)==null||e.blur()}},T=A(`Checkbox`,o,r),P=s(()=>{let{value:e}=g,{common:{cubicBezierEaseInOut:t},self:{borderRadius:n,color:r,colorChecked:i,colorDisabled:a,colorTableHeader:o,colorTableHeaderModal:s,colorTableHeaderPopover:c,checkMarkColor:l,checkMarkColorDisabled:d,border:f,borderFocus:p,borderDisabled:m,borderChecked:h,boxShadowFocus:v,textColor:y,textColorDisabled:b,checkMarkColorDisabledChecked:x,colorDisabledChecked:S,borderDisabledChecked:C,labelPadding:w,labelLineHeight:T,labelFontWeight:E,[u(`fontSize`,e)]:D,[u(`size`,e)]:O}}=_.value;return{"--n-label-line-height":T,"--n-label-font-weight":E,"--n-size":O,"--n-bezier":t,"--n-border-radius":n,"--n-border":f,"--n-border-checked":h,"--n-border-focus":p,"--n-border-disabled":m,"--n-border-disabled-checked":C,"--n-box-shadow-focus":v,"--n-color":r,"--n-color-checked":i,"--n-color-table":o,"--n-color-table-modal":s,"--n-color-table-popover":c,"--n-color-disabled":a,"--n-color-disabled-checked":S,"--n-text-color":y,"--n-text-color-disabled":b,"--n-check-mark-color":l,"--n-check-mark-color-disabled":d,"--n-check-mark-color-disabled-checked":x,"--n-font-size":D,"--n-label-padding":w}}),F=i?j(`checkbox`,s(()=>g.value[0]),P,e):void 0;return Object.assign(m,C,{rtlEnabled:T,selfRef:n,mergedClsPrefix:r,mergedDisabled:h,renderedChecked:p,mergedTheme:_,labelId:c(),handleClick:b,handleKeyUp:x,handleKeyDown:S,cssVars:i?void 0:P,themeClass:F?.themeClass,onRender:F?.onRender})},render(){var t;let{$slots:n,renderedChecked:r,mergedDisabled:i,indeterminate:a,privateInsideTable:o,cssVars:s,labelId:c,label:l,mergedClsPrefix:u,focusable:d,handleKeyUp:p,handleKeyDown:m,handleClick:h}=this;(t=this.onRender)==null||t.call(this);let g=T(n.default,e=>l||e?f(`span`,{class:`${u}-checkbox__label`,id:c},l||e):null);return f(`div`,{ref:`selfRef`,class:[`${u}-checkbox`,this.themeClass,this.rtlEnabled&&`${u}-checkbox--rtl`,r&&`${u}-checkbox--checked`,i&&`${u}-checkbox--disabled`,a&&`${u}-checkbox--indeterminate`,o&&`${u}-checkbox--inside-table`,g&&`${u}-checkbox--show-label`],tabindex:i||!d?void 0:0,role:`checkbox`,"aria-checked":a?`mixed`:r,"aria-labelledby":c,style:s,onKeyup:p,onKeydown:m,onClick:h,onMousedown:()=>{S(`selectstart`,window,e=>{e.preventDefault()},{once:!0})}},f(`div`,{class:`${u}-checkbox-box-wrapper`},`\xA0`,f(`div`,{class:`${u}-checkbox-box`},f(e,null,{default:()=>this.indeterminate?f(`div`,{key:`indeterminate`,class:`${u}-checkbox-icon`},H()):f(`div`,{key:`check`,class:`${u}-checkbox-icon`},V())}),f(`div`,{class:`${u}-checkbox-box__border`}))),g)}});export{B as CheckboxGroup_default,G as Checkbox_default,L as light_default};