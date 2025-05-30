import{d as pe,h as d,r as P,u as xt,a as ht,c as mt,m as yt,b as St,F as Le,N as Ct,e as wt,i as zt,f as ee,o as Pt,g as r,j as i,k as m,l as z,n as Rt,p as ne,q as ye,V as ie,s as Tt,t as _e,w as U,v as $e,x as Lt,y as V,z as _t,A as j,B as q,C as $t,D as Bt,E as Wt,T as At,G as kt,H as le,I as Vt,J,K as Se,L as jt,M as se,O as N,P as de,Q as Mt,R as Q,S as Z,U as Et,W as Ht,X as Ce}from"./index-CPkRLUIS.js";import{u as Gt}from"./use-message-krj0Laam.js";import{A as Ft,t as be,_ as It}from"./plugin-vueexport-helper-uOzVmwYu.js";import{c as we,a as Ot,u as ze,o as Dt,_ as Nt}from"./Select-C9cFT0gT.js";import{u as Ut}from"./Suffix-yFZ9_LsH.js";const Xt=we(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[we("&::-webkit-scrollbar",{width:0,height:0})]),Kt=pe({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=P(null);function n(l){!(l.currentTarget.offsetWidth<l.currentTarget.scrollWidth)||l.deltaY===0||(l.currentTarget.scrollLeft+=l.deltaY+l.deltaX,l.preventDefault())}const b=xt();return Xt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Ot,ssr:b}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...l){var x;(x=e.value)===null||x===void 0||x.scrollTo(...l)}})},render(){return d("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),Yt={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"};function qt(e){const{textColor2:n,primaryColor:b,textColorDisabled:c,closeIconColor:l,closeIconColorHover:x,closeIconColorPressed:v,closeColorHover:y,closeColorPressed:C,tabColor:p,baseColor:g,dividerColor:A,fontWeight:L,textColor1:u,borderRadius:w,fontSize:S,fontWeightStrong:R}=e;return Object.assign(Object.assign({},Yt),{colorSegment:p,tabFontSizeCard:S,tabTextColorLine:u,tabTextColorActiveLine:b,tabTextColorHoverLine:b,tabTextColorDisabledLine:c,tabTextColorSegment:u,tabTextColorActiveSegment:n,tabTextColorHoverSegment:n,tabTextColorDisabledSegment:c,tabTextColorBar:u,tabTextColorActiveBar:b,tabTextColorHoverBar:b,tabTextColorDisabledBar:c,tabTextColorCard:u,tabTextColorHoverCard:u,tabTextColorActiveCard:b,tabTextColorDisabledCard:c,barColor:b,closeIconColor:l,closeIconColorHover:x,closeIconColorPressed:v,closeColorHover:y,closeColorPressed:C,closeBorderRadius:w,tabColor:p,tabColorSegment:g,tabBorderColor:A,tabFontWeightActive:L,tabFontWeight:L,tabBorderRadius:w,paneTextColor:n,fontWeightStrong:R})}const Jt={common:ht,self:qt},Be=mt("n-tabs"),Qt={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Zt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Pt(Qt,["displayDirective"])),te=pe({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Zt,setup(e){const{mergedClsPrefixRef:n,valueRef:b,typeRef:c,closableRef:l,tabStyleRef:x,addTabStyleRef:v,tabClassRef:y,addTabClassRef:C,tabChangeIdRef:p,onBeforeLeaveRef:g,triggerRef:A,handleAdd:L,activateTab:u,handleClose:w}=zt(Be);return{trigger:A,mergedClosable:ee(()=>{if(e.internalAddable)return!1;const{closable:S}=e;return S===void 0?l.value:S}),style:x,addStyle:v,tabClass:y,addTabClass:C,clsPrefix:n,value:b,type:c,handleClose(S){S.stopPropagation(),!e.disabled&&w(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){L();return}const{name:S}=e,R=++p.id;if(S!==b.value){const{value:k}=g;k?Promise.resolve(k(e.name,b.value)).then(_=>{_&&p.id===R&&u(S)}):u(S)}}}},render(){const{internalAddable:e,clsPrefix:n,name:b,disabled:c,label:l,tab:x,value:v,mergedClosable:y,trigger:C,$slots:{default:p}}=this,g=l??x;return d("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?d("div",{class:`${n}-tabs-tab-pad`}):null,d("div",Object.assign({key:b,"data-name":b,"data-disabled":c?!0:void 0},yt({class:[`${n}-tabs-tab`,v===b&&`${n}-tabs-tab--active`,c&&`${n}-tabs-tab--disabled`,y&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:C==="click"?this.activateTab:void 0,onMouseenter:C==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),d("span",{class:`${n}-tabs-tab__label`},e?d(Le,null,d("div",{class:`${n}-tabs-tab__height-placeholder`}," "),d(Ct,{clsPrefix:n},{default:()=>d(Ft,null)})):p?p():typeof g=="object"?g:St(g??b)),y&&this.type==="card"?d(wt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:c}):null))}}),ea=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[i("segment-type",[r("tabs-rail",[m("&.transition-disabled",[r("tabs-capsule",`
 transition: none;
 `)])])]),i("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),i("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),i("left, right",`
 flex-direction: row;
 `,[r("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),i("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),i("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),r("tabs-bar",`
 top: 0;
 `)]),r("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[r("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),r("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[r("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[i("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),m("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),i("flex",[r("tabs-nav",`
 width: 100%;
 position: relative;
 `,[r("tabs-wrapper",`
 width: 100%;
 `,[r("tabs-tab",`
 margin-right: 0;
 `)])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[z("prefix, suffix",`
 display: flex;
 align-items: center;
 `),z("prefix","padding-right: 16px;"),z("suffix","padding-left: 16px;")]),i("top, bottom",[r("tabs-nav-scroll-wrapper",[m("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),m("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),i("shadow-start",[m("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[m("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),i("left, right",[r("tabs-nav-scroll-content",`
 flex-direction: column;
 `),r("tabs-nav-scroll-wrapper",[m("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),m("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),i("shadow-start",[m("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[m("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),r("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[r("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[m("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),m("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),r("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),r("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),r("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[i("disabled",{cursor:"not-allowed"}),z("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),z("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[m("&.transition-disabled",`
 transition: none;
 `),i("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),r("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),r("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[m("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),m("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),m("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),m("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),m("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),i("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[m("&:hover",{color:"var(--n-tab-text-color-hover)"}),i("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),i("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[i("line-type",[i("top",[z("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),i("left",[z("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),i("right",[z("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),i("bottom",[z("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),z("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),i("card-type",[z("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[i("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[z("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Rt("disabled",[m("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),i("closable","padding-right: 8px;"),i("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),i("disabled","color: var(--n-tab-text-color-disabled);")])]),i("left, right",`
 flex-direction: column; 
 `,[z("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),r("tabs-wrapper",`
 flex-direction: column;
 `),r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),i("top",[i("card-type",[r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),z("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),i("left",[i("card-type",[r("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),z("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),i("right",[i("card-type",[r("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),z("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),i("bottom",[i("card-type",[r("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),z("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),ta=Object.assign(Object.assign({},_e.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),aa=pe({name:"Tabs",props:ta,slots:Object,setup(e,{slots:n}){var b,c,l,x;const{mergedClsPrefixRef:v,inlineThemeDisabled:y}=Tt(e),C=_e("Tabs","-tabs",ea,Jt,e,v),p=P(null),g=P(null),A=P(null),L=P(null),u=P(null),w=P(null),S=P(!0),R=P(!0),k=ze(e,["labelSize","size"]),_=ze(e,["activeName","value"]),O=P((c=(b=_.value)!==null&&b!==void 0?b:e.defaultValue)!==null&&c!==void 0?c:n.default?(x=(l=ne(n.default())[0])===null||l===void 0?void 0:l.props)===null||x===void 0?void 0:x.name:null),$=Ut(_,O),f={id:0},T=ee(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});U($,()=>{f.id=0,X(),ue()});function M(){var t;const{value:a}=$;return a===null?null:(t=p.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function We(t){if(e.type==="card")return;const{value:a}=g;if(!a)return;const o=a.style.opacity==="0";if(t){const s=`${v.value}-tabs-bar--disabled`,{barWidth:h,placement:B}=e;if(t.dataset.disabled==="true"?a.classList.add(s):a.classList.remove(s),["top","bottom"].includes(B)){if(fe(["top","maxHeight","height"]),typeof h=="number"&&t.offsetWidth>=h){const W=Math.floor((t.offsetWidth-h)/2)+t.offsetLeft;a.style.left=`${W}px`,a.style.maxWidth=`${h}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",o&&(a.style.transition="none"),a.offsetWidth,o&&(a.style.transition="",a.style.opacity="1")}else{if(fe(["left","maxWidth","width"]),typeof h=="number"&&t.offsetHeight>=h){const W=Math.floor((t.offsetHeight-h)/2)+t.offsetTop;a.style.top=`${W}px`,a.style.maxHeight=`${h}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",o&&(a.style.transition="none"),a.offsetHeight,o&&(a.style.transition="",a.style.opacity="1")}}}function Ae(){if(e.type==="card")return;const{value:t}=g;t&&(t.style.opacity="0")}function fe(t){const{value:a}=g;if(a)for(const o of t)a.style[o]=""}function X(){if(e.type==="card")return;const t=M();t?We(t):Ae()}function ue(){var t;const a=(t=u.value)===null||t===void 0?void 0:t.$el;if(!a)return;const o=M();if(!o)return;const{scrollLeft:s,offsetWidth:h}=a,{offsetLeft:B,offsetWidth:W}=o;s>B?a.scrollTo({top:0,left:B,behavior:"smooth"}):B+W>s+h&&a.scrollTo({top:0,left:B+W-h,behavior:"smooth"})}const K=P(null);let ae=0,E=null;function ke(t){const a=K.value;if(a){ae=t.getBoundingClientRect().height;const o=`${ae}px`,s=()=>{a.style.height=o,a.style.maxHeight=o};E?(s(),E(),E=null):E=s}}function Ve(t){const a=K.value;if(a){const o=t.getBoundingClientRect().height,s=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(ae,o)}px`};E?(E(),E=null,s()):E=s}}function je(){const t=K.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:o,height:s}=a;o!==void 0&&(t.style.maxHeight=o),s!==void 0&&(t.style.height=s)}}}const ve={value:[]},ge=P("next");function Me(t){const a=$.value;let o="next";for(const s of ve.value){if(s===a)break;if(s===t){o="prev";break}}ge.value=o,Ee(t)}function Ee(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":s}=e;a&&J(a,t),o&&J(o,t),s&&J(s,t),O.value=t}function He(t){const{onClose:a}=e;a&&J(a,t)}function xe(){const{value:t}=g;if(!t)return;const a="transition-disabled";t.classList.add(a),X(),t.classList.remove(a)}const H=P(null);function re({transitionDisabled:t}){const a=p.value;if(!a)return;t&&a.classList.add("transition-disabled");const o=M();o&&H.value&&(H.value.style.width=`${o.offsetWidth}px`,H.value.style.height=`${o.offsetHeight}px`,H.value.style.transform=`translateX(${o.offsetLeft-Bt(getComputedStyle(a).paddingLeft)}px)`,t&&H.value.offsetWidth),t&&a.classList.remove("transition-disabled")}U([$],()=>{e.type==="segment"&&le(()=>{re({transitionDisabled:!1})})}),$e(()=>{e.type==="segment"&&re({transitionDisabled:!0})});let he=0;function Ge(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||he===t.contentRect.width)return;he=t.contentRect.width;const{type:o}=e;if((o==="line"||o==="bar")&&xe(),o!=="segment"){const{placement:s}=e;oe((s==="top"||s==="bottom"?(a=u.value)===null||a===void 0?void 0:a.$el:w.value)||null)}}const Fe=be(Ge,64);U([()=>e.justifyContent,()=>e.size],()=>{le(()=>{const{type:t}=e;(t==="line"||t==="bar")&&xe()})});const G=P(!1);function Ie(t){var a;const{target:o,contentRect:{width:s,height:h}}=t,B=o.parentElement.parentElement.offsetWidth,W=o.parentElement.parentElement.offsetHeight,{placement:I}=e;if(!G.value)I==="top"||I==="bottom"?B<s&&(G.value=!0):W<h&&(G.value=!0);else{const{value:D}=L;if(!D)return;I==="top"||I==="bottom"?B-s>D.$el.offsetWidth&&(G.value=!1):W-h>D.$el.offsetHeight&&(G.value=!1)}oe(((a=u.value)===null||a===void 0?void 0:a.$el)||null)}const Oe=be(Ie,64);function De(){const{onAdd:t}=e;t&&t(),le(()=>{const a=M(),{value:o}=u;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function oe(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:o,scrollWidth:s,offsetWidth:h}=t;S.value=o<=0,R.value=o+h>=s}else{const{scrollTop:o,scrollHeight:s,offsetHeight:h}=t;S.value=o<=0,R.value=o+h>=s}}const Ne=be(t=>{oe(t.target)},64);Lt(Be,{triggerRef:V(e,"trigger"),tabStyleRef:V(e,"tabStyle"),tabClassRef:V(e,"tabClass"),addTabStyleRef:V(e,"addTabStyle"),addTabClassRef:V(e,"addTabClass"),paneClassRef:V(e,"paneClass"),paneStyleRef:V(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:V(e,"type"),closableRef:V(e,"closable"),valueRef:$,tabChangeIdRef:f,onBeforeLeaveRef:V(e,"onBeforeLeave"),activateTab:Me,handleClose:He,handleAdd:De}),Dt(()=>{X(),ue()}),_t(()=>{const{value:t}=A;if(!t)return;const{value:a}=v,o=`${a}-tabs-nav-scroll-wrapper--shadow-start`,s=`${a}-tabs-nav-scroll-wrapper--shadow-end`;S.value?t.classList.remove(o):t.classList.add(o),R.value?t.classList.remove(s):t.classList.add(s)});const Ue={syncBarPosition:()=>{X()}},Xe=()=>{re({transitionDisabled:!0})},me=ee(()=>{const{value:t}=k,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],s=`${t}${o}`,{self:{barColor:h,closeIconColor:B,closeIconColorHover:W,closeIconColorPressed:I,tabColor:D,tabBorderColor:Ke,paneTextColor:Ye,tabFontWeight:qe,tabBorderRadius:Je,tabFontWeightActive:Qe,colorSegment:Ze,fontWeightStrong:et,tabColorSegment:tt,closeSize:at,closeIconSize:rt,closeColorHover:ot,closeColorPressed:nt,closeBorderRadius:it,[j("panePadding",t)]:Y,[j("tabPadding",s)]:lt,[j("tabPaddingVertical",s)]:st,[j("tabGap",s)]:dt,[j("tabGap",`${s}Vertical`)]:bt,[j("tabTextColor",a)]:ct,[j("tabTextColorActive",a)]:pt,[j("tabTextColorHover",a)]:ft,[j("tabTextColorDisabled",a)]:ut,[j("tabFontSize",t)]:vt},common:{cubicBezierEaseInOut:gt}}=C.value;return{"--n-bezier":gt,"--n-color-segment":Ze,"--n-bar-color":h,"--n-tab-font-size":vt,"--n-tab-text-color":ct,"--n-tab-text-color-active":pt,"--n-tab-text-color-disabled":ut,"--n-tab-text-color-hover":ft,"--n-pane-text-color":Ye,"--n-tab-border-color":Ke,"--n-tab-border-radius":Je,"--n-close-size":at,"--n-close-icon-size":rt,"--n-close-color-hover":ot,"--n-close-color-pressed":nt,"--n-close-border-radius":it,"--n-close-icon-color":B,"--n-close-icon-color-hover":W,"--n-close-icon-color-pressed":I,"--n-tab-color":D,"--n-tab-font-weight":qe,"--n-tab-font-weight-active":Qe,"--n-tab-padding":lt,"--n-tab-padding-vertical":st,"--n-tab-gap":dt,"--n-tab-gap-vertical":bt,"--n-pane-padding-left":q(Y,"left"),"--n-pane-padding-right":q(Y,"right"),"--n-pane-padding-top":q(Y,"top"),"--n-pane-padding-bottom":q(Y,"bottom"),"--n-font-weight-strong":et,"--n-tab-color-segment":tt}}),F=y?$t("tabs",ee(()=>`${k.value[0]}${e.type[0]}`),me,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:$,renderedNames:new Set,segmentCapsuleElRef:H,tabsPaneWrapperRef:K,tabsElRef:p,barElRef:g,addTabInstRef:L,xScrollInstRef:u,scrollWrapperElRef:A,addTabFixed:G,tabWrapperStyle:T,handleNavResize:Fe,mergedSize:k,handleScroll:Ne,handleTabsResize:Oe,cssVars:y?void 0:me,themeClass:F==null?void 0:F.themeClass,animationDirection:ge,renderNameListRef:ve,yScrollElRef:w,handleSegmentResize:Xe,onAnimationBeforeLeave:ke,onAnimationEnter:Ve,onAnimationAfterEnter:je,onRender:F==null?void 0:F.onRender},Ue)},render(){const{mergedClsPrefix:e,type:n,placement:b,addTabFixed:c,addable:l,mergedSize:x,renderNameListRef:v,onRender:y,paneWrapperClass:C,paneWrapperStyle:p,$slots:{default:g,prefix:A,suffix:L}}=this;y==null||y();const u=g?ne(g()).filter(f=>f.type.__TAB_PANE__===!0):[],w=g?ne(g()).filter(f=>f.type.__TAB__===!0):[],S=!w.length,R=n==="card",k=n==="segment",_=!R&&!k&&this.justifyContent;v.value=[];const O=()=>{const f=d("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},_?null:d("div",{class:`${e}-tabs-scroll-padding`,style:b==="top"||b==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),S?u.map((T,M)=>(v.value.push(T.props.name),ce(d(te,Object.assign({},T.props,{internalCreatedByPane:!0,internalLeftPadded:M!==0&&(!_||_==="center"||_==="start"||_==="end")}),T.children?{default:T.children.tab}:void 0)))):w.map((T,M)=>(v.value.push(T.props.name),ce(M!==0&&!_?Te(T):T))),!c&&l&&R?Re(l,(S?u.length:w.length)!==0):null,_?null:d("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return d("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},R&&l?d(ie,{onResize:this.handleTabsResize},{default:()=>f}):f,R?d("div",{class:`${e}-tabs-pad`}):null,R?null:d("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},$=k?"top":b;return d("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${x}-size`,_&&`${e}-tabs--flex`,`${e}-tabs--${$}`],style:this.cssVars},d("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${$}`,`${e}-tabs-nav`]},ye(A,f=>f&&d("div",{class:`${e}-tabs-nav__prefix`},f)),k?d(ie,{onResize:this.handleSegmentResize},{default:()=>d("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},d("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},d("div",{class:`${e}-tabs-wrapper`},d("div",{class:`${e}-tabs-tab`}))),S?u.map((f,T)=>(v.value.push(f.props.name),d(te,Object.assign({},f.props,{internalCreatedByPane:!0,internalLeftPadded:T!==0}),f.children?{default:f.children.tab}:void 0))):w.map((f,T)=>(v.value.push(f.props.name),T===0?f:Te(f))))}):d(ie,{onResize:this.handleNavResize},{default:()=>d("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes($)?d(Kt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:O}):d("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},O()))}),c&&l&&R?Re(l,!0):null,ye(L,f=>f&&d("div",{class:`${e}-tabs-nav__suffix`},f))),S&&(this.animated&&($==="top"||$==="bottom")?d("div",{ref:"tabsPaneWrapperRef",style:p,class:[`${e}-tabs-pane-wrapper`,C]},Pe(u,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Pe(u,this.mergedValue,this.renderedNames)))}});function Pe(e,n,b,c,l,x,v){const y=[];return e.forEach(C=>{const{name:p,displayDirective:g,"display-directive":A}=C.props,L=w=>g===w||A===w,u=n===p;if(C.key!==void 0&&(C.key=p),u||L("show")||L("show:lazy")&&b.has(p)){b.has(p)||b.add(p);const w=!L("if");y.push(w?Wt(C,[[Vt,u]]):C)}}),v?d(At,{name:`${v}-transition`,onBeforeLeave:c,onEnter:l,onAfterEnter:x},{default:()=>y}):y}function Re(e,n){return d(te,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function Te(e){const n=kt(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function ce(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const ra={class:"header fx al-ct ju-sb"},oa={class:"fx al-ct"},na={__name:"home",setup(e){const n=P(void 0);$e(()=>{window.$message=Gt(),n.value=Se.currentRoute.value.name});const b={Index:{name:"Index"},FileManage:{name:"FileManage"}};return U(()=>Z.value.externalLink,c=>{localStorage.setItem("externalLink",c)}),U(()=>n.value,c=>{Se.push({name:b[c].name})}),(c,l)=>{const x=te,v=aa,y=Nt,C=Et("router-view");return Ht(),jt(Le,null,[se("div",ra,[se("div",oa,[l[4]||(l[4]=se("div",{style:{"font-weight":"bold",width:"150px","font-size":"1.1rem"}},"low-file",-1)),N(v,{value:Q(n),"onUpdate:value":l[0]||(l[0]=p=>Mt(n)?n.value=p:null),type:"line"},{default:de(()=>[N(x,{name:"Index"},{default:de(()=>l[2]||(l[2]=[Ce(" 首页 ")])),_:1,__:[2]}),N(x,{name:"FileManage"},{default:de(()=>l[3]||(l[3]=[Ce(" 文件管理 ")])),_:1,__:[3]})]),_:1},8,["value"])]),N(y,{style:{width:"250px"},size:"small",value:Q(Z).externalLink,"onUpdate:value":l[1]||(l[1]=p=>Q(Z).externalLink=p),options:Q(Z).externalLinkOptions},null,8,["value","options"])]),N(C)],64)}}},ca=It(na,[["__scopeId","data-v-887438da"]]);export{ca as default};
