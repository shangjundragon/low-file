import{asModal as e,c as t,cB as n,cE as r,cM as i,call as a,computed as o,createKey as s,defineComponent as c,ensureValidVNode as l,getMargin as u,h as d,init_es$4 as f,init_vue_runtime_esm_bundler as p,insideModal as m,insidePopover as h,light_default$2 as g,resolveWrappedSlot as _,useConfig as v,useRtl as y,useThemeClass as b,use_theme_default as x}from"./router-DMl3VX-U.js";import{Close_default as S}from"./fade-in-scale-up.cssr-DVN7ryxn.js";import{keysOf as C}from"./context-C8hp2ypX.js";var w={paddingSmall:`12px 16px 12px`,paddingMedium:`19px 24px 20px`,paddingLarge:`23px 32px 24px`,paddingHuge:`27px 40px 28px`,titleFontSizeSmall:`16px`,titleFontSizeMedium:`18px`,titleFontSizeLarge:`18px`,titleFontSizeHuge:`18px`,closeIconSize:`18px`,closeSize:`22px`};function T(e){let{primaryColor:t,borderRadius:n,lineHeight:r,fontSize:i,cardColor:a,textColor2:o,textColor1:s,dividerColor:c,fontWeightStrong:l,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,closeColorHover:p,closeColorPressed:m,modalColor:h,boxShadow1:g,popoverColor:_,actionColor:v}=e;return Object.assign(Object.assign({},w),{lineHeight:r,color:a,colorModal:h,colorPopover:_,colorTarget:t,colorEmbedded:v,colorEmbeddedModal:v,colorEmbeddedPopover:v,textColor:o,titleTextColor:s,borderColor:c,actionColor:v,titleFontWeight:l,closeColorHover:p,closeColorPressed:m,closeBorderRadius:n,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,fontSizeSmall:i,fontSizeMedium:i,fontSizeLarge:i,fontSizeHuge:i,boxShadow:g,borderRadius:n})}const E={name:`Card`,common:g,self:T};var D=E,O=t([n(`card`,`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[e({background:`var(--n-color-modal)`}),i(`hoverable`,[t(`&:hover`,`box-shadow: var(--n-box-shadow);`)]),i(`content-segmented`,[t(`>`,[r(`content`,{paddingTop:`var(--n-padding-bottom)`})])]),i(`content-soft-segmented`,[t(`>`,[r(`content`,`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),i(`footer-segmented`,[t(`>`,[r(`footer`,{paddingTop:`var(--n-padding-bottom)`})])]),i(`footer-soft-segmented`,[t(`>`,[r(`footer`,`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(`>`,[n(`card-header`,`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[r(`main`,`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),r(`extra`,`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),r(`close`,`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),r(`action`,`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),r(`content`,`flex: 1; min-width: 0;`),r(`content, footer`,`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t(`&:first-child`,{paddingTop:`var(--n-padding-bottom)`})]),r(`action`,`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),n(`card-cover`,`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t(`img`,`
 display: block;
 width: 100%;
 `)]),i(`bordered`,`
 border: 1px solid var(--n-border-color);
 `,[t(`&:target`,`border-color: var(--n-color-target);`)]),i(`action-segmented`,[t(`>`,[r(`action`,[t(`&:not(:first-child)`,{borderTop:`1px solid var(--n-border-color)`})])])]),i(`content-segmented, content-soft-segmented`,[t(`>`,[r(`content`,{transition:`border-color 0.3s var(--n-bezier)`},[t(`&:not(:first-child)`,{borderTop:`1px solid var(--n-border-color)`})])])]),i(`footer-segmented, footer-soft-segmented`,[t(`>`,[r(`footer`,{transition:`border-color 0.3s var(--n-bezier)`},[t(`&:not(:first-child)`,{borderTop:`1px solid var(--n-border-color)`})])])]),i(`embedded`,`
 background-color: var(--n-color-embedded);
 `)]),m(n(`card`,`
 background: var(--n-color-modal);
 `,[i(`embedded`,`
 background-color: var(--n-color-embedded-modal);
 `)])),h(n(`card`,`
 background: var(--n-color-popover);
 `,[i(`embedded`,`
 background-color: var(--n-color-embedded-popover);
 `)]))]);f(),p();const k={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:`medium`},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:`div`},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},A=C(k),j=Object.assign(Object.assign({},x.props),k);var M=c({name:`Card`,props:j,slots:Object,setup(e){let t=()=>{let{onClose:t}=e;t&&a(t)},{inlineThemeDisabled:n,mergedClsPrefixRef:r,mergedRtlRef:i}=v(e),c=x(`Card`,`-card`,O,D,e,r),l=y(`Card`,i,r),d=o(()=>{let{size:t}=e,{self:{color:n,colorModal:r,colorTarget:i,textColor:a,titleTextColor:o,titleFontWeight:l,borderColor:d,actionColor:f,borderRadius:p,lineHeight:m,closeIconColor:h,closeIconColorHover:g,closeIconColorPressed:_,closeColorHover:v,closeColorPressed:y,closeBorderRadius:b,closeIconSize:x,closeSize:S,boxShadow:C,colorPopover:w,colorEmbedded:T,colorEmbeddedModal:E,colorEmbeddedPopover:D,[s(`padding`,t)]:O,[s(`fontSize`,t)]:k,[s(`titleFontSize`,t)]:A},common:{cubicBezierEaseInOut:j}}=c.value,{top:M,left:N,bottom:P}=u(O);return{"--n-bezier":j,"--n-border-radius":p,"--n-color":n,"--n-color-modal":r,"--n-color-popover":w,"--n-color-embedded":T,"--n-color-embedded-modal":E,"--n-color-embedded-popover":D,"--n-color-target":i,"--n-text-color":a,"--n-line-height":m,"--n-action-color":f,"--n-title-text-color":o,"--n-title-font-weight":l,"--n-close-icon-color":h,"--n-close-icon-color-hover":g,"--n-close-icon-color-pressed":_,"--n-close-color-hover":v,"--n-close-color-pressed":y,"--n-border-color":d,"--n-box-shadow":C,"--n-padding-top":M,"--n-padding-bottom":P,"--n-padding-left":N,"--n-font-size":k,"--n-title-font-size":A,"--n-close-size":S,"--n-close-icon-size":x,"--n-close-border-radius":b}}),f=n?b(`card`,o(()=>e.size[0]),d,e):void 0;return{rtlEnabled:l,mergedClsPrefix:r,mergedTheme:c,handleCloseClick:t,cssVars:n?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender}},render(){let{segmented:e,bordered:t,hoverable:n,mergedClsPrefix:r,rtlEnabled:i,onRender:a,embedded:o,tag:s,$slots:c}=this;return a?.(),d(s,{class:[`${r}-card`,this.themeClass,o&&`${r}-card--embedded`,{[`${r}-card--rtl`]:i,[`${r}-card--content${typeof e!=`boolean`&&e.content===`soft`?`-soft`:``}-segmented`]:e===!0||e!==!1&&e.content,[`${r}-card--footer${typeof e!=`boolean`&&e.footer===`soft`?`-soft`:``}-segmented`]:e===!0||e!==!1&&e.footer,[`${r}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${r}-card--bordered`]:t,[`${r}-card--hoverable`]:n}],style:this.cssVars,role:this.role},_(c.cover,e=>{let t=this.cover?l([this.cover()]):e;return t&&d(`div`,{class:`${r}-card-cover`,role:`none`},t)}),_(c.header,e=>{let{title:t}=this,n=t?l(typeof t==`function`?[t()]:[t]):e;return n||this.closable?d(`div`,{class:[`${r}-card-header`,this.headerClass],style:this.headerStyle,role:`heading`},d(`div`,{class:`${r}-card-header__main`,role:`heading`},n),_(c[`header-extra`],e=>{let t=this.headerExtra?l([this.headerExtra()]):e;return t&&d(`div`,{class:[`${r}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},t)}),this.closable&&d(S,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),_(c.default,e=>{let{content:t}=this,n=t?l(typeof t==`function`?[t()]:[t]):e;return n&&d(`div`,{class:[`${r}-card__content`,this.contentClass],style:this.contentStyle,role:`none`},n)}),_(c.footer,e=>{let t=this.footer?l([this.footer()]):e;return t&&d(`div`,{class:[`${r}-card__footer`,this.footerClass],style:this.footerStyle,role:`none`},t)}),_(c.action,e=>{let t=this.action?l([this.action()]):e;return t&&d(`div`,{class:`${r}-card__action`,role:`none`},t)}))}});export{M as Card_default,A as cardBasePropKeys,k as cardBaseProps,D as light_default};