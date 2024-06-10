import{c as fe,g as yn}from"./index-DnynI4VE.js";import{a as xn}from"./markup-B2jCqwVT.js";import{a as bn}from"./css-BZTGtW_y.js";import{a as wn}from"./clike-_1zqIqyQ.js";import{a as Cn}from"./javascript-kuLNyo0q.js";function Sn(e,n){for(var r=0;r<n.length;r++){const t=n[r];if(typeof t!="string"&&!Array.isArray(t)){for(const f in t)if(f!=="default"&&!(f in e)){const v=Object.getOwnPropertyDescriptor(t,f);v&&Object.defineProperty(e,f,v.get?v:{enumerable:!0,get:()=>t[f]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var An=En,Pn=Object.prototype.hasOwnProperty;function En(){for(var e={},n=0;n<arguments.length;n++){var r=arguments[n];for(var t in r)Pn.call(r,t)&&(e[t]=r[t])}return e}var Ve=Ke,xe=Ke.prototype;xe.space=null;xe.normal={};xe.property={};function Ke(e,n,r){this.property=e,this.normal=n,r&&(this.space=r)}var Oe=An,$n=Ve,Tn=kn;function kn(e){for(var n=e.length,r=[],t=[],f=-1,v,m;++f<n;)v=e[f],r.push(v.property),t.push(v.normal),m=v.space;return new $n(Oe.apply(null,r),Oe.apply(null,t),m)}var be=Ln;function Ln(e){return e.toLowerCase()}var Ye=Xe,U=Xe.prototype;U.space=null;U.attribute=null;U.property=null;U.boolean=!1;U.booleanish=!1;U.overloadedBoolean=!1;U.number=!1;U.commaSeparated=!1;U.spaceSeparated=!1;U.commaOrSpaceSeparated=!1;U.mustUseProperty=!1;U.defined=!1;function Xe(e,n){this.property=e,this.attribute=n}var H={},On=0;H.boolean=X();H.booleanish=X();H.overloadedBoolean=X();H.number=X();H.spaceSeparated=X();H.commaSeparated=X();H.commaOrSpaceSeparated=X();function X(){return Math.pow(2,++On)}var Je=Ye,Me=H,Qe=we;we.prototype=new Je;we.prototype.defined=!0;var Ze=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],Mn=Ze.length;function we(e,n,r,t){var f=-1,v;for(Ie(this,"space",t),Je.call(this,e,n);++f<Mn;)v=Ze[f],Ie(this,v,(r&Me[v])===Me[v])}function Ie(e,n,r){r&&(e[n]=r)}var De=be,In=Ve,Dn=Qe,le=Un;function Un(e){var n=e.space,r=e.mustUseProperty||[],t=e.attributes||{},f=e.properties,v=e.transform,m={},u={},g,P;for(g in f)P=new Dn(g,v(t,g),f[g],n),r.indexOf(g)!==-1&&(P.mustUseProperty=!0),m[g]=P,u[De(g)]=g,u[De(P.attribute)]=g;return new In(m,u,n)}var Nn=le,jn=Nn({space:"xlink",transform:Rn,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function Rn(e,n){return"xlink:"+n.slice(5).toLowerCase()}var qn=le,zn=qn({space:"xml",transform:Hn,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Hn(e,n){return"xml:"+n.slice(3).toLowerCase()}var _n=Bn;function Bn(e,n){return n in e?e[n]:n}var Wn=_n,en=Fn;function Fn(e,n){return Wn(e,n.toLowerCase())}var Gn=le,Vn=en,Kn=Gn({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Vn,properties:{xmlns:null,xmlnsXLink:null}}),Ce=H,Yn=le,O=Ce.booleanish,D=Ce.number,Y=Ce.spaceSeparated,Xn=Yn({transform:Jn,properties:{ariaActiveDescendant:null,ariaAtomic:O,ariaAutoComplete:null,ariaBusy:O,ariaChecked:O,ariaColCount:D,ariaColIndex:D,ariaColSpan:D,ariaControls:Y,ariaCurrent:null,ariaDescribedBy:Y,ariaDetails:null,ariaDisabled:O,ariaDropEffect:Y,ariaErrorMessage:null,ariaExpanded:O,ariaFlowTo:Y,ariaGrabbed:O,ariaHasPopup:null,ariaHidden:O,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Y,ariaLevel:D,ariaLive:null,ariaModal:O,ariaMultiLine:O,ariaMultiSelectable:O,ariaOrientation:null,ariaOwns:Y,ariaPlaceholder:null,ariaPosInSet:D,ariaPressed:O,ariaReadOnly:O,ariaRelevant:null,ariaRequired:O,ariaRoleDescription:Y,ariaRowCount:D,ariaRowIndex:D,ariaRowSpan:D,ariaSelected:O,ariaSetSize:D,ariaSort:null,ariaValueMax:D,ariaValueMin:D,ariaValueNow:D,ariaValueText:null,role:null}});function Jn(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}var ee=H,Qn=le,Zn=en,h=ee.boolean,er=ee.overloadedBoolean,re=ee.booleanish,x=ee.number,L=ee.spaceSeparated,ue=ee.commaSeparated,nr=Qn({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Zn,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ue,acceptCharset:L,accessKey:L,action:null,allow:null,allowFullScreen:h,allowPaymentRequest:h,allowUserMedia:h,alt:null,as:null,async:h,autoCapitalize:null,autoComplete:L,autoFocus:h,autoPlay:h,capture:h,charSet:null,checked:h,cite:null,className:L,cols:x,colSpan:null,content:null,contentEditable:re,controls:h,controlsList:L,coords:x|ue,crossOrigin:null,data:null,dateTime:null,decoding:null,default:h,defer:h,dir:null,dirName:null,disabled:h,download:er,draggable:re,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:h,formTarget:null,headers:L,height:x,hidden:h,high:x,href:null,hrefLang:null,htmlFor:L,httpEquiv:L,id:null,imageSizes:null,imageSrcSet:ue,inputMode:null,integrity:null,is:null,isMap:h,itemId:null,itemProp:L,itemRef:L,itemScope:h,itemType:L,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:h,low:x,manifest:null,max:null,maxLength:x,media:null,method:null,min:null,minLength:x,multiple:h,muted:h,name:null,nonce:null,noModule:h,noValidate:h,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:h,optimum:x,pattern:null,ping:L,placeholder:null,playsInline:h,poster:null,preload:null,readOnly:h,referrerPolicy:null,rel:L,required:h,reversed:h,rows:x,rowSpan:x,sandbox:L,scope:null,scoped:h,seamless:h,selected:h,shape:null,size:x,sizes:null,slot:null,span:x,spellCheck:re,src:null,srcDoc:null,srcLang:null,srcSet:ue,start:x,step:null,style:null,tabIndex:x,target:null,title:null,translate:null,type:null,typeMustMatch:h,useMap:null,value:re,width:x,wrap:null,align:null,aLink:null,archive:L,axis:null,background:null,bgColor:null,border:x,borderColor:null,bottomMargin:x,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:h,declare:h,event:null,face:null,frame:null,frameBorder:null,hSpace:x,leftMargin:x,link:null,longDesc:null,lowSrc:null,marginHeight:x,marginWidth:x,noResize:h,noHref:h,noShade:h,noWrap:h,object:null,profile:null,prompt:null,rev:null,rightMargin:x,rules:null,scheme:null,scrolling:re,standby:null,summary:null,text:null,topMargin:x,valueType:null,version:null,vAlign:null,vLink:null,vSpace:x,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:h,disableRemotePlayback:h,prefix:null,property:null,results:x,security:null,unselectable:null}}),rr=Tn,ar=jn,tr=zn,lr=Kn,ir=Xn,or=nr,sr=rr([tr,ar,lr,ir,or]),ur=be,cr=Qe,fr=Ye,Se="data",dr=gr,vr=/^data[-\w.:]+$/i,nn=/-[a-z]/g,pr=/[A-Z]/g;function gr(e,n){var r=ur(n),t=n,f=fr;return r in e.normal?e.property[e.normal[r]]:(r.length>4&&r.slice(0,4)===Se&&vr.test(n)&&(n.charAt(4)==="-"?t=hr(n):n=mr(n),f=cr),new f(t,n))}function hr(e){var n=e.slice(5).replace(nn,xr);return Se+n.charAt(0).toUpperCase()+n.slice(1)}function mr(e){var n=e.slice(4);return nn.test(n)?e:(n=n.replace(pr,yr),n.charAt(0)!=="-"&&(n="-"+n),Se+n)}function yr(e){return"-"+e.toLowerCase()}function xr(e){return e.charAt(1).toUpperCase()}var br=wr,Ue=/[#.]/g;function wr(e,n){for(var r=e||"",t=n||"div",f={},v=0,m,u,g;v<r.length;)Ue.lastIndex=v,g=Ue.exec(r),m=r.slice(v,g?g.index:r.length),m&&(u?u==="#"?f.id=m:f.className?f.className.push(m):f.className=[m]:t=m,v+=m.length),g&&(u=g[0],v++);return{type:"element",tagName:t,properties:f,children:[]}}var Ae={};Ae.parse=Ar;Ae.stringify=Pr;var Ne="",Cr=" ",Sr=/[ \t\n\r\f]+/g;function Ar(e){var n=String(e||Ne).trim();return n===Ne?[]:n.split(Sr)}function Pr(e){return e.join(Cr).trim()}var Pe={};Pe.parse=Er;Pe.stringify=$r;var me=",",je=" ",ae="";function Er(e){for(var n=[],r=String(e||ae),t=r.indexOf(me),f=0,v=!1,m;!v;)t===-1&&(t=r.length,v=!0),m=r.slice(f,t).trim(),(m||!v)&&n.push(m),f=t+1,t=r.indexOf(me,f);return n}function $r(e,n){var r=n||{},t=r.padLeft===!1?ae:je,f=r.padRight?je:ae;return e[e.length-1]===ae&&(e=e.concat(ae)),e.join(f+me+t).trim()}var Tr=dr,Re=be,kr=br,qe=Ae.parse,ze=Pe.parse,Lr=Mr,Or={}.hasOwnProperty;function Mr(e,n,r){var t=r?jr(r):null;return f;function f(m,u){var g=kr(m,n),P=Array.prototype.slice.call(arguments,2),T=g.tagName.toLowerCase(),C;if(g.tagName=t&&Or.call(t,T)?t[T]:T,u&&Ir(u,g)&&(P.unshift(u),u=null),u)for(C in u)v(g.properties,C,u[C]);return rn(g.children,P),g.tagName==="template"&&(g.content={type:"root",children:g.children},g.children=[]),g}function v(m,u,g){var P,T,C;g==null||g!==g||(P=Tr(e,u),T=P.property,C=g,typeof C=="string"&&(P.spaceSeparated?C=qe(C):P.commaSeparated?C=ze(C):P.commaOrSpaceSeparated&&(C=qe(ze(C).join(" ")))),T==="style"&&typeof g!="string"&&(C=Nr(C)),T==="className"&&m.className&&(C=m.className.concat(C)),m[T]=Ur(P,T,C))}}function Ir(e,n){return typeof e=="string"||"length"in e||Dr(n.tagName,e)}function Dr(e,n){var r=n.type;return e==="input"||!r||typeof r!="string"?!1:typeof n.children=="object"&&"length"in n.children?!0:(r=r.toLowerCase(),e==="button"?r!=="menu"&&r!=="submit"&&r!=="reset"&&r!=="button":"value"in n)}function rn(e,n){var r,t;if(typeof n=="string"||typeof n=="number"){e.push({type:"text",value:String(n)});return}if(typeof n=="object"&&"length"in n){for(r=-1,t=n.length;++r<t;)rn(e,n[r]);return}if(typeof n!="object"||!("type"in n))throw new Error("Expected node, nodes, or string, got `"+n+"`");e.push(n)}function Ur(e,n,r){var t,f,v;if(typeof r!="object"||!("length"in r))return He(e,n,r);for(f=r.length,t=-1,v=[];++t<f;)v[t]=He(e,n,r[t]);return v}function He(e,n,r){var t=r;return e.number||e.positiveNumber?!isNaN(t)&&t!==""&&(t=Number(t)):(e.boolean||e.overloadedBoolean)&&typeof t=="string"&&(t===""||Re(r)===Re(n))&&(t=!0),t}function Nr(e){var n=[],r;for(r in e)n.push([r,e[r]].join(": "));return n.join("; ")}function jr(e){for(var n=e.length,r=-1,t={},f;++r<n;)f=e[r],t[f.toLowerCase()]=f;return t}var Rr=sr,qr=Lr,an=qr(Rr,"div");an.displayName="html";var zr=an,Hr=zr;const _r="Æ",Br="&",Wr="Á",Fr="Â",Gr="À",Vr="Å",Kr="Ã",Yr="Ä",Xr="©",Jr="Ç",Qr="Ð",Zr="É",ea="Ê",na="È",ra="Ë",aa=">",ta="Í",la="Î",ia="Ì",oa="Ï",sa="<",ua="Ñ",ca="Ó",fa="Ô",da="Ò",va="Ø",pa="Õ",ga="Ö",ha='"',ma="®",ya="Þ",xa="Ú",ba="Û",wa="Ù",Ca="Ü",Sa="Ý",Aa="á",Pa="â",Ea="´",$a="æ",Ta="à",ka="&",La="å",Oa="ã",Ma="ä",Ia="¦",Da="ç",Ua="¸",Na="¢",ja="©",Ra="¤",qa="°",za="÷",Ha="é",_a="ê",Ba="è",Wa="ð",Fa="ë",Ga="½",Va="¼",Ka="¾",Ya=">",Xa="í",Ja="î",Qa="¡",Za="ì",et="¿",nt="ï",rt="«",at="<",tt="¯",lt="µ",it="·",ot=" ",st="¬",ut="ñ",ct="ó",ft="ô",dt="ò",vt="ª",pt="º",gt="ø",ht="õ",mt="ö",yt="¶",xt="±",bt="£",wt='"',Ct="»",St="®",At="§",Pt="­",Et="¹",$t="²",Tt="³",kt="ß",Lt="þ",Ot="×",Mt="ú",It="û",Dt="ù",Ut="¨",Nt="ü",jt="ý",Rt="¥",qt="ÿ",zt={AElig:_r,AMP:Br,Aacute:Wr,Acirc:Fr,Agrave:Gr,Aring:Vr,Atilde:Kr,Auml:Yr,COPY:Xr,Ccedil:Jr,ETH:Qr,Eacute:Zr,Ecirc:ea,Egrave:na,Euml:ra,GT:aa,Iacute:ta,Icirc:la,Igrave:ia,Iuml:oa,LT:sa,Ntilde:ua,Oacute:ca,Ocirc:fa,Ograve:da,Oslash:va,Otilde:pa,Ouml:ga,QUOT:ha,REG:ma,THORN:ya,Uacute:xa,Ucirc:ba,Ugrave:wa,Uuml:Ca,Yacute:Sa,aacute:Aa,acirc:Pa,acute:Ea,aelig:$a,agrave:Ta,amp:ka,aring:La,atilde:Oa,auml:Ma,brvbar:Ia,ccedil:Da,cedil:Ua,cent:Na,copy:ja,curren:Ra,deg:qa,divide:za,eacute:Ha,ecirc:_a,egrave:Ba,eth:Wa,euml:Fa,frac12:Ga,frac14:Va,frac34:Ka,gt:Ya,iacute:Xa,icirc:Ja,iexcl:Qa,igrave:Za,iquest:et,iuml:nt,laquo:rt,lt:at,macr:tt,micro:lt,middot:it,nbsp:ot,not:st,ntilde:ut,oacute:ct,ocirc:ft,ograve:dt,ordf:vt,ordm:pt,oslash:gt,otilde:ht,ouml:mt,para:yt,plusmn:xt,pound:bt,quot:wt,raquo:Ct,reg:St,sect:At,shy:Pt,sup1:Et,sup2:$t,sup3:Tt,szlig:kt,thorn:Lt,times:Ot,uacute:Mt,ucirc:It,ugrave:Dt,uml:Ut,uuml:Nt,yacute:jt,yen:Rt,yuml:qt},Ht={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var tn=_t;function _t(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=48&&n<=57}var Bt=Wt;function Wt(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=102||n>=65&&n<=70||n>=48&&n<=57}var Ft=Gt;function Gt(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=122||n>=65&&n<=90}var Vt=Ft,Kt=tn,Yt=Xt;function Xt(e){return Vt(e)||Kt(e)}var ce,Jt=59,Qt=Zt;function Zt(e){var n="&"+e+";",r;return ce=ce||document.createElement("i"),ce.innerHTML=n,r=ce.textContent,r.charCodeAt(r.length-1)===Jt&&e!=="semi"||r===n?!1:r}var _e=zt,Be=Ht,el=tn,nl=Bt,ln=Yt,rl=Qt,al=hl,tl={}.hasOwnProperty,Q=String.fromCharCode,ll=Function.prototype,We={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},il=9,Fe=10,ol=12,sl=32,Ge=38,ul=59,cl=60,fl=61,dl=35,vl=88,pl=120,gl=65533,Z="named",Ee="hexadecimal",$e="decimal",Te={};Te[Ee]=16;Te[$e]=10;var de={};de[Z]=ln;de[$e]=el;de[Ee]=nl;var on=1,sn=2,un=3,cn=4,fn=5,ye=6,dn=7,V={};V[on]="Named character references must be terminated by a semicolon";V[sn]="Numeric character references must be terminated by a semicolon";V[un]="Named character references cannot be empty";V[cn]="Numeric character references cannot be empty";V[fn]="Named character references must be known";V[ye]="Numeric character references cannot be disallowed";V[dn]="Numeric character references cannot be outside the permissible Unicode range";function hl(e,n){var r={},t,f;n||(n={});for(f in We)t=n[f],r[f]=t??We[f];return(r.position.indent||r.position.start)&&(r.indent=r.position.indent||[],r.position=r.position.start),ml(e,r)}function ml(e,n){var r=n.additional,t=n.nonTerminated,f=n.text,v=n.reference,m=n.warning,u=n.textContext,g=n.referenceContext,P=n.warningContext,T=n.position,C=n.indent||[],B=e.length,R=0,oe=-1,M=T.column||1,J=T.line||1,q="",l=[],a,s,o,i,d,p,c,y,S,I,z,W,_,N,ne,w,k,E,b;for(typeof r=="string"&&(r=r.charCodeAt(0)),w=$(),y=m?ve:ll,R--,B++;++R<B;)if(d===Fe&&(M=C[oe]||1),d=e.charCodeAt(R),d===Ge){if(c=e.charCodeAt(R+1),c===il||c===Fe||c===ol||c===sl||c===Ge||c===cl||c!==c||r&&c===r){q+=Q(d),M++;continue}for(_=R+1,W=_,b=_,c===dl?(b=++W,c=e.charCodeAt(b),c===vl||c===pl?(N=Ee,b=++W):N=$e):N=Z,a="",z="",i="",ne=de[N],b--;++b<B&&(c=e.charCodeAt(b),!!ne(c));)i+=Q(c),N===Z&&tl.call(_e,i)&&(a=i,z=_e[i]);o=e.charCodeAt(b)===ul,o&&(b++,s=N===Z?rl(i):!1,s&&(a=i,z=s)),E=1+b-_,!o&&!t||(i?N===Z?(o&&!z?y(fn,1):(a!==i&&(b=W+a.length,E=1+b-W,o=!1),o||(S=a?on:un,n.attribute?(c=e.charCodeAt(b),c===fl?(y(S,E),z=null):ln(c)?z=null:y(S,E)):y(S,E))),p=z):(o||y(sn,E),p=parseInt(i,Te[N]),yl(p)?(y(dn,E),p=Q(gl)):p in Be?(y(ye,E),p=Be[p]):(I="",xl(p)&&y(ye,E),p>65535&&(p-=65536,I+=Q(p>>>10|55296),p=56320|p&1023),p=I+Q(p))):N!==Z&&y(cn,E)),p?(j(),w=$(),R=b-1,M+=b-_+1,l.push(p),k=$(),k.offset++,v&&v.call(g,p,{start:w,end:k},e.slice(_-1,b)),w=k):(i=e.slice(_-1,b),q+=i,M+=i.length,R=b-1)}else d===10&&(J++,oe++,M=0),d===d?(q+=Q(d),M++):j();return l.join("");function $(){return{line:J,column:M,offset:R+(T.offset||0)}}function ve(F,K){var G=$();G.column+=K,G.offset+=K,m.call(P,V[F],G,F)}function j(){q&&(l.push(q),f&&f.call(u,q,{start:w,end:$()}),q="")}}function yl(e){return e>=55296&&e<=57343||e>1114111}function xl(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var vn={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(t){var f=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,v=0,m={},u={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function l(a){return a instanceof g?new g(a.type,l(a.content),a.alias):Array.isArray(a)?a.map(l):a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).slice(8,-1)},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++v}),l.__id},clone:function l(a,s){s=s||{};var o,i;switch(u.util.type(a)){case"Object":if(i=u.util.objId(a),s[i])return s[i];o={},s[i]=o;for(var d in a)a.hasOwnProperty(d)&&(o[d]=l(a[d],s));return o;case"Array":return i=u.util.objId(a),s[i]?s[i]:(o=[],s[i]=o,a.forEach(function(p,c){o[c]=l(p,s)}),o);default:return a}},getLanguage:function(l){for(;l;){var a=f.exec(l.className);if(a)return a[1].toLowerCase();l=l.parentElement}return"none"},setLanguage:function(l,a){l.className=l.className.replace(RegExp(f,"gi"),""),l.classList.add("language-"+a)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(o){var l=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(o.stack)||[])[1];if(l){var a=document.getElementsByTagName("script");for(var s in a)if(a[s].src==l)return a[s]}return null}},isActive:function(l,a,s){for(var o="no-"+a;l;){var i=l.classList;if(i.contains(a))return!0;if(i.contains(o))return!1;l=l.parentElement}return!!s}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(l,a){var s=u.util.clone(u.languages[l]);for(var o in a)s[o]=a[o];return s},insertBefore:function(l,a,s,o){o=o||u.languages;var i=o[l],d={};for(var p in i)if(i.hasOwnProperty(p)){if(p==a)for(var c in s)s.hasOwnProperty(c)&&(d[c]=s[c]);s.hasOwnProperty(p)||(d[p]=i[p])}var y=o[l];return o[l]=d,u.languages.DFS(u.languages,function(S,I){I===y&&S!=l&&(this[S]=d)}),d},DFS:function l(a,s,o,i){i=i||{};var d=u.util.objId;for(var p in a)if(a.hasOwnProperty(p)){s.call(a,p,a[p],o||p);var c=a[p],y=u.util.type(c);y==="Object"&&!i[d(c)]?(i[d(c)]=!0,l(c,s,null,i)):y==="Array"&&!i[d(c)]&&(i[d(c)]=!0,l(c,s,p,i))}}},plugins:{},highlightAll:function(l,a){u.highlightAllUnder(document,l,a)},highlightAllUnder:function(l,a,s){var o={callback:s,container:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};u.hooks.run("before-highlightall",o),o.elements=Array.prototype.slice.apply(o.container.querySelectorAll(o.selector)),u.hooks.run("before-all-elements-highlight",o);for(var i=0,d;d=o.elements[i++];)u.highlightElement(d,a===!0,o.callback)},highlightElement:function(l,a,s){var o=u.util.getLanguage(l),i=u.languages[o];u.util.setLanguage(l,o);var d=l.parentElement;d&&d.nodeName.toLowerCase()==="pre"&&u.util.setLanguage(d,o);var p=l.textContent,c={element:l,language:o,grammar:i,code:p};function y(I){c.highlightedCode=I,u.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,u.hooks.run("after-highlight",c),u.hooks.run("complete",c),s&&s.call(c.element)}if(u.hooks.run("before-sanity-check",c),d=c.element.parentElement,d&&d.nodeName.toLowerCase()==="pre"&&!d.hasAttribute("tabindex")&&d.setAttribute("tabindex","0"),!c.code){u.hooks.run("complete",c),s&&s.call(c.element);return}if(u.hooks.run("before-highlight",c),!c.grammar){y(u.util.encode(c.code));return}if(a&&t.Worker){var S=new Worker(u.filename);S.onmessage=function(I){y(I.data)},S.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else y(u.highlight(c.code,c.grammar,c.language))},highlight:function(l,a,s){var o={code:l,grammar:a,language:s};if(u.hooks.run("before-tokenize",o),!o.grammar)throw new Error('The language "'+o.language+'" has no grammar.');return o.tokens=u.tokenize(o.code,o.grammar),u.hooks.run("after-tokenize",o),g.stringify(u.util.encode(o.tokens),o.language)},tokenize:function(l,a){var s=a.rest;if(s){for(var o in s)a[o]=s[o];delete a.rest}var i=new C;return B(i,i.head,l),T(l,i,a,i.head,0),oe(i)},hooks:{all:{},add:function(l,a){var s=u.hooks.all;s[l]=s[l]||[],s[l].push(a)},run:function(l,a){var s=u.hooks.all[l];if(!(!s||!s.length))for(var o=0,i;i=s[o++];)i(a)}},Token:g};t.Prism=u;function g(l,a,s,o){this.type=l,this.content=a,this.alias=s,this.length=(o||"").length|0}g.stringify=function l(a,s){if(typeof a=="string")return a;if(Array.isArray(a)){var o="";return a.forEach(function(y){o+=l(y,s)}),o}var i={type:a.type,content:l(a.content,s),tag:"span",classes:["token",a.type],attributes:{},language:s},d=a.alias;d&&(Array.isArray(d)?Array.prototype.push.apply(i.classes,d):i.classes.push(d)),u.hooks.run("wrap",i);var p="";for(var c in i.attributes)p+=" "+c+'="'+(i.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+p+">"+i.content+"</"+i.tag+">"};function P(l,a,s,o){l.lastIndex=a;var i=l.exec(s);if(i&&o&&i[1]){var d=i[1].length;i.index+=d,i[0]=i[0].slice(d)}return i}function T(l,a,s,o,i,d){for(var p in s)if(!(!s.hasOwnProperty(p)||!s[p])){var c=s[p];c=Array.isArray(c)?c:[c];for(var y=0;y<c.length;++y){if(d&&d.cause==p+","+y)return;var S=c[y],I=S.inside,z=!!S.lookbehind,W=!!S.greedy,_=S.alias;if(W&&!S.pattern.global){var N=S.pattern.toString().match(/[imsuy]*$/)[0];S.pattern=RegExp(S.pattern.source,N+"g")}for(var ne=S.pattern||S,w=o.next,k=i;w!==a.tail&&!(d&&k>=d.reach);k+=w.value.length,w=w.next){var E=w.value;if(a.length>l.length)return;if(!(E instanceof g)){var b=1,$;if(W){if($=P(ne,k,l,z),!$||$.index>=l.length)break;var K=$.index,ve=$.index+$[0].length,j=k;for(j+=w.value.length;K>=j;)w=w.next,j+=w.value.length;if(j-=w.value.length,k=j,w.value instanceof g)continue;for(var F=w;F!==a.tail&&(j<ve||typeof F.value=="string");F=F.next)b++,j+=F.value.length;b--,E=l.slice(k,j),$.index-=k}else if($=P(ne,0,E,z),!$)continue;var K=$.index,G=$[0],pe=E.slice(0,K),Le=E.slice(K+G.length),ge=k+E.length;d&&ge>d.reach&&(d.reach=ge);var se=w.prev;pe&&(se=B(a,se,pe),k+=pe.length),R(a,se,b);var mn=new g(p,I?u.tokenize(G,I):G,_,G);if(w=B(a,se,mn),Le&&B(a,w,Le),b>1){var he={cause:p+","+y,reach:ge};T(l,a,s,w.prev,k,he),d&&he.reach>d.reach&&(d.reach=he.reach)}}}}}}function C(){var l={value:null,prev:null,next:null},a={value:null,prev:l,next:null};l.next=a,this.head=l,this.tail=a,this.length=0}function B(l,a,s){var o=a.next,i={value:s,prev:a,next:o};return a.next=i,o.prev=i,l.length++,i}function R(l,a,s){for(var o=a.next,i=0;i<s&&o!==l.tail;i++)o=o.next;a.next=o,o.prev=a,l.length-=i}function oe(l){for(var a=[],s=l.head.next;s!==l.tail;)a.push(s.value),s=s.next;return a}if(!t.document)return t.addEventListener&&(u.disableWorkerMessageHandler||t.addEventListener("message",function(l){var a=JSON.parse(l.data),s=a.language,o=a.code,i=a.immediateClose;t.postMessage(u.highlight(o,u.languages[s],s)),i&&t.close()},!1)),u;var M=u.util.currentScript();M&&(u.filename=M.src,M.hasAttribute("data-manual")&&(u.manual=!0));function J(){u.manual||u.highlightAll()}if(!u.manual){var q=document.readyState;q==="loading"||q==="interactive"&&M&&M.defer?document.addEventListener("DOMContentLoaded",J):window.requestAnimationFrame?window.requestAnimationFrame(J):window.setTimeout(J,16)}return u}(n);e.exports&&(e.exports=r),typeof fe<"u"&&(fe.Prism=r)})(vn);var bl=vn.exports,te=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof fe=="object"?fe:{},wl=Nl();te.Prism={manual:!0,disableWorkerMessageHandler:!0};var Cl=Hr,Sl=al,pn=bl,Al=xn,Pl=bn,El=wn,$l=Cn;wl();var ke={}.hasOwnProperty;function gn(){}gn.prototype=pn;var A=new gn,hn=A;A.highlight=kl;A.register=ie;A.alias=Tl;A.registered=Ll;A.listLanguages=Ol;ie(Al);ie(Pl);ie(El);ie($l);A.util.encode=Dl;A.Token.stringify=Ml;function ie(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");A.languages[e.displayName]===void 0&&e(A)}function Tl(e,n){var r=A.languages,t=e,f,v,m,u;n&&(t={},t[e]=n);for(f in t)for(v=t[f],v=typeof v=="string"?[v]:v,m=v.length,u=-1;++u<m;)r[v[u]]=r[f]}function kl(e,n){var r=pn.highlight,t;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(A.util.type(n)==="Object")t=n,n=null;else{if(typeof n!="string")throw new Error("Expected `string` for `name`, got `"+n+"`");if(ke.call(A.languages,n))t=A.languages[n];else throw new Error("Unknown language: `"+n+"` is not registered")}return r.call(this,e,t,n)}function Ll(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return ke.call(A.languages,e)}function Ol(){var e=A.languages,n=[],r;for(r in e)ke.call(e,r)&&typeof e[r]=="object"&&n.push(r);return n}function Ml(e,n,r){var t;return typeof e=="string"?{type:"text",value:e}:A.util.type(e)==="Array"?Il(e,n):(t={type:e.type,content:A.Token.stringify(e.content,n,r),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:r},e.alias&&(t.classes=t.classes.concat(e.alias)),A.hooks.run("wrap",t),Cl(t.tag+"."+t.classes.join("."),Ul(t.attributes),t.content))}function Il(e,n){for(var r=[],t=e.length,f=-1,v;++f<t;)v=e[f],v!==""&&v!==null&&v!==void 0&&r.push(v);for(f=-1,t=r.length;++f<t;)v=r[f],r[f]=A.Token.stringify(v,n,r);return r}function Dl(e){return e}function Ul(e){var n;for(n in e)e[n]=Sl(e[n]);return e}function Nl(){var e="Prism"in te,n=e?te.Prism:void 0;return r;function r(){e?te.Prism=n:delete te.Prism,e=void 0,n=void 0}}const jl=yn(hn),Bl=Sn({__proto__:null,default:jl},[hn]);export{Bl as c};
