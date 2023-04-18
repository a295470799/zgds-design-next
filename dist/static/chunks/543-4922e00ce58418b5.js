"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[543],{7598:function(e,t,n){var r=n(7462),o=n(3366),l=n(7294),i=n(3935),a=n(67),u=n(8290),d=n(7596),s=n(6600),c=n(5893);let p=["onChange","maxRows","minRows","style","value"];function f(e){return parseInt(e,10)||0}let m={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function h(e){return null==e||0===Object.keys(e).length||0===e.outerHeightStyle&&!e.overflow}let b=l.forwardRef(function(e,t){let{onChange:n,maxRows:b,minRows:y=1,style:v,value:Z}=e,g=(0,o.Z)(e,p),{current:x}=l.useRef(null!=Z),S=l.useRef(null),w=(0,a.Z)(t,S),C=l.useRef(null),k=l.useRef(0),[z,R]=l.useState({outerHeightStyle:0}),A=l.useCallback(()=>{let t=S.current,n=(0,u.Z)(t),r=n.getComputedStyle(t);if("0px"===r.width)return{outerHeightStyle:0};let o=C.current;o.style.width=r.width,o.value=t.value||e.placeholder||"x","\n"===o.value.slice(-1)&&(o.value+=" ");let l=r.boxSizing,i=f(r.paddingBottom)+f(r.paddingTop),a=f(r.borderBottomWidth)+f(r.borderTopWidth),d=o.scrollHeight;o.value="x";let s=o.scrollHeight,c=d;y&&(c=Math.max(Number(y)*s,c)),b&&(c=Math.min(Number(b)*s,c)),c=Math.max(c,s);let p=c+("border-box"===l?i+a:0),m=1>=Math.abs(c-d);return{outerHeightStyle:p,overflow:m}},[b,y,e.placeholder]),E=(e,t)=>{let{outerHeightStyle:n,overflow:r}=t;return k.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==r)?(k.current+=1,{overflow:r,outerHeightStyle:n}):e},B=l.useCallback(()=>{let e=A();h(e)||R(t=>E(t,e))},[A]),M=()=>{let e=A();h(e)||i.flushSync(()=>{R(t=>E(t,e))})};l.useEffect(()=>{let e;let t=(0,d.Z)(()=>{k.current=0,S.current&&M()}),n=S.current,r=(0,u.Z)(n);return r.addEventListener("resize",t),"undefined"!=typeof ResizeObserver&&(e=new ResizeObserver(t)).observe(n),()=>{t.clear(),r.removeEventListener("resize",t),e&&e.disconnect()}}),(0,s.Z)(()=>{B()}),l.useEffect(()=>{k.current=0},[Z]);let N=e=>{k.current=0,x||B(),n&&n(e)};return(0,c.jsxs)(l.Fragment,{children:[(0,c.jsx)("textarea",(0,r.Z)({value:Z,onChange:N,ref:w,rows:y,style:(0,r.Z)({height:z.outerHeightStyle,overflow:z.overflow?"hidden":void 0},v)},g)),(0,c.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:C,tabIndex:-1,style:(0,r.Z)({},m.shadow,v,{padding:0})})]})});t.Z=b},8442:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){return"string"==typeof e}},7167:function(e,t,n){var r=n(7294);let o=r.createContext(void 0);t.Z=o},5704:function(e,t,n){n.d(t,{Z:function(){return r}});function r({props:e,states:t,muiFormControl:n}){return t.reduce((t,r)=>(t[r]=e[r],n&&void 0===e[r]&&(t[r]=n[r]),t),{})}},4423:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),o=n(7167);function l(){return r.useContext(o.Z)}},8543:function(e,t,n){n.d(t,{Ej:function(){return R},Gx:function(){return C},_o:function(){return k},rA:function(){return A}});var r=n(3366),o=n(7462),l=n(1387),i=n(7294),a=n(6010),u=n(4780),d=n(7598),s=n(8442),c=n(5704),p=n(7167),f=n(4423),m=n(948),h=n(1657),b=n(8216),y=n(1705),v=n(8974),Z=n(7297),g=n(8712),x=n(5827),S=n(5893);let w=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],C=(e,t)=>{let{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,"small"===n.size&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${(0,b.Z)(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},k=(e,t)=>{let{ownerState:n}=e;return[t.input,"small"===n.size&&t.inputSizeSmall,n.multiline&&t.inputMultiline,"search"===n.type&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},z=e=>{let{classes:t,color:n,disabled:r,error:o,endAdornment:l,focused:i,formControl:a,fullWidth:d,hiddenLabel:s,multiline:c,readOnly:p,size:f,startAdornment:m,type:h}=e,y={root:["root",`color${(0,b.Z)(n)}`,r&&"disabled",o&&"error",d&&"fullWidth",i&&"focused",a&&"formControl","small"===f&&"sizeSmall",c&&"multiline",m&&"adornedStart",l&&"adornedEnd",s&&"hiddenLabel",p&&"readOnly"],input:["input",r&&"disabled","search"===h&&"inputTypeSearch",c&&"inputMultiline","small"===f&&"inputSizeSmall",s&&"inputHiddenLabel",m&&"inputAdornedStart",l&&"inputAdornedEnd",p&&"readOnly"]};return(0,u.Z)(y,x.u,t)},R=(0,m.ZP)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:C})(({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${x.Z.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&(0,o.Z)({padding:"4px 0 5px"},"small"===t.size&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),A=(0,m.ZP)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:k})(({theme:e,ownerState:t})=>{let n="light"===e.palette.mode,r=(0,o.Z)({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),l={opacity:"0 !important"},i=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return(0,o.Z)({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${x.Z.formControl} &`]:{"&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus:-ms-input-placeholder":i,"&:focus::-ms-input-placeholder":i},[`&.${x.Z.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},"small"===t.size&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===t.type&&{MozAppearance:"textfield"})}),E=(0,S.jsx)(Z.Z,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),B=i.forwardRef(function(e,t){var n;let u=(0,h.Z)({props:e,name:"MuiInputBase"}),{"aria-describedby":m,autoComplete:b,autoFocus:Z,className:x,components:C={},componentsProps:k={},defaultValue:B,disabled:M,disableInjectingGlobalStyles:N,endAdornment:I,fullWidth:L=!1,id:F,inputComponent:H="input",inputProps:W={},inputRef:j,maxRows:O,minRows:P,multiline:T=!1,name:$,onBlur:_,onChange:D,onClick:K,onFocus:V,onKeyDown:q,onKeyUp:G,placeholder:U,readOnly:J,renderSuffix:Q,rows:X,slotProps:Y={},slots:ee={},startAdornment:et,type:en="text",value:er}=u,eo=(0,r.Z)(u,w),el=null!=W.value?W.value:er,{current:ei}=i.useRef(null!=el),ea=i.useRef(),eu=i.useCallback(e=>{},[]),ed=(0,y.Z)(ea,j,W.ref,eu),[es,ec]=i.useState(!1),ep=(0,f.Z)(),ef=(0,c.Z)({props:u,muiFormControl:ep,states:["color","disabled","error","hiddenLabel","size","required","filled"]});ef.focused=ep?ep.focused:es,i.useEffect(()=>{!ep&&M&&es&&(ec(!1),_&&_())},[ep,M,es,_]);let em=ep&&ep.onFilled,eh=ep&&ep.onEmpty,eb=i.useCallback(e=>{(0,g.vd)(e)?em&&em():eh&&eh()},[em,eh]);(0,v.Z)(()=>{ei&&eb({value:el})},[el,eb,ei]);let ey=e=>{if(ef.disabled){e.stopPropagation();return}V&&V(e),W.onFocus&&W.onFocus(e),ep&&ep.onFocus?ep.onFocus(e):ec(!0)},ev=e=>{_&&_(e),W.onBlur&&W.onBlur(e),ep&&ep.onBlur?ep.onBlur(e):ec(!1)},eZ=(e,...t)=>{if(!ei){let t=e.target||ea.current;if(null==t)throw Error((0,l.Z)(1));eb({value:t.value})}W.onChange&&W.onChange(e,...t),D&&D(e,...t)};i.useEffect(()=>{eb(ea.current)},[]);let eg=e=>{ea.current&&e.currentTarget===e.target&&ea.current.focus(),K&&K(e)},ex=H,eS=W;T&&"input"===ex&&(eS=X?(0,o.Z)({type:void 0,minRows:X,maxRows:X},eS):(0,o.Z)({type:void 0,maxRows:O,minRows:P},eS),ex=d.Z);let ew=e=>{eb("mui-auto-fill-cancel"===e.animationName?ea.current:{value:"x"})};i.useEffect(()=>{ep&&ep.setAdornedStart(Boolean(et))},[ep,et]);let eC=(0,o.Z)({},u,{color:ef.color||"primary",disabled:ef.disabled,endAdornment:I,error:ef.error,focused:ef.focused,formControl:ep,fullWidth:L,hiddenLabel:ef.hiddenLabel,multiline:T,size:ef.size,startAdornment:et,type:en}),ek=z(eC),ez=ee.root||C.Root||R,eR=Y.root||k.root||{},eA=ee.input||C.Input||A;return eS=(0,o.Z)({},eS,null!=(n=Y.input)?n:k.input),(0,S.jsxs)(i.Fragment,{children:[!N&&E,(0,S.jsxs)(ez,(0,o.Z)({},eR,!(0,s.Z)(ez)&&{ownerState:(0,o.Z)({},eC,eR.ownerState)},{ref:t,onClick:eg},eo,{className:(0,a.Z)(ek.root,eR.className,x,J&&"MuiInputBase-readOnly"),children:[et,(0,S.jsx)(p.Z.Provider,{value:null,children:(0,S.jsx)(eA,(0,o.Z)({ownerState:eC,"aria-invalid":ef.error,"aria-describedby":m,autoComplete:b,autoFocus:Z,defaultValue:B,disabled:ef.disabled,id:F,onAnimationStart:ew,name:$,placeholder:U,readOnly:J,required:ef.required,rows:X,value:el,onKeyDown:q,onKeyUp:G,type:en},eS,!(0,s.Z)(eA)&&{as:ex,ownerState:(0,o.Z)({},eC,eS.ownerState)},{ref:ed,className:(0,a.Z)(ek.input,eS.className,J&&"MuiInputBase-readOnly"),onBlur:ev,onChange:eZ,onFocus:ey}))}),I,Q?Q((0,o.Z)({},ef,{startAdornment:et})):null]}))]})});t.ZP=B},5827:function(e,t,n){n.d(t,{u:function(){return l}});var r=n(1588),o=n(4867);function l(e){return(0,o.Z)("MuiInputBase",e)}let i=(0,r.Z)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);t.Z=i},8712:function(e,t,n){function r(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function o(e,t=!1){return e&&(r(e.value)&&""!==e.value||t&&r(e.defaultValue)&&""!==e.defaultValue)}function l(e){return e.startAdornment}n.d(t,{B7:function(){return l},vd:function(){return o}})}}]);