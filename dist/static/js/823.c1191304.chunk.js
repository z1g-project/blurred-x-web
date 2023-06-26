"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[823],{8471:function(e,t){t.Z={main:"TheatreCategory_main__CzudK",pages:"TheatreCategory_pages__UNude",useless:"TheatreCategory_useless__p9ElA",button:"TheatreCategory_button__238tS",disabled:"TheatreCategory_disabled__tKcSI",sort:"TheatreCategory_sort__pGCep",name:"TheatreCategory_name__Xg+vq",seeAll:"TheatreCategory_seeAll__gesCj",items:"TheatreCategory_items__xWOmJ",item:"TheatreCategory_item__-1Np3",thumbnail:"TheatreCategory_thumbnail__LhS66",shimmerCard:"TheatreCategory_shimmerCard__aPdqs",loading:"TheatreCategory_loading__IwKQD",flex:"TheatreCategory_flex__9Ly9e",expand:"TheatreCategory_expand__zjVTi"}},3374:function(e,t,r){r.d(t,{Z:function(){return i},f:function(){return l}});var a=r(7568),n=r(6042),s=r(9396);let l=e=>"object"==typeof e&&null!==e&&e instanceof Error&&"statusCode"in e;class i{sortParams(e){let t={};for(let r in e){let a=e[r];("string"==typeof a||"number"==typeof a)&&(t[r]=a.toString())}return t}fetch(e,t={}){var r=this;return(0,a.Z)(function*(){let a=yield fetch(new URL(e,r.server),(0,s.Z)((0,n.Z)({},t),{signal:r.signal})),l=yield a.json();if(!a.ok){let i=Error(l.message);throw i.statusCode=l.statusCode,i}return l})()}constructor(e,t){this.server=e,this.signal=t}}},1492:function(e,t,r){var a=r(922),n=r(8294),s=r(2539),l=r(8736),i=r(5710);let o=e=>JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:e.mainEntity.map(e=>({"@type":"Question",name:e.name,acceptedAnswer:{"@type":"Answer",text:e.acceptedAnswer.text}}))}),c=e=>JSON.stringify({"@context":"https://schema.org","@type":"WebSite",url:e.url,potentialAction:e.potentialAction.map(e=>({"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:e.target.urlTemplate},"query-input":e["query-input"]}))}),u=({title:e,description:t,faq:u,actions:h})=>{let[d]=(0,n.fO)();return(0,a.jsxs)(i.ql,{children:[(0,a.jsx)("title",{children:""===d.title?e||"Blurred X":d.title}),!s.tD&&t&&(0,a.jsx)("meta",{name:"description",content:t}),!s.tD&&u&&(0,a.jsx)("script",{type:"application/ld+json",children:o({mainEntity:u})}),!s.tD&&h&&(0,a.jsx)("script",{type:"application/ld+json",children:c({url:new URL((0,l.k$)("home").path,r.g.location.toString()).toString(),potentialAction:h})})]})};t.Z=u},7872:function(e,t,r){var a=r(7568),n=r(6042),s=r(9396),l=r(922),i=r(3081),o=r(9488),c=r(1385),u=r(168),h=r(2539),d=r(5240),m=r(9981),p=r(8065),g=r(8471),f=r(7908),y=r(4237),Z=r(2033),_=r(4051),x=r(360),j=r(4822);function v(e){let t={total:e,entries:[],loading:!0};for(let r=0;r<30;r++)t.entries.push({id:r.toString(),loading:!0,category:[]});return t}let b=({name:e,category:t,placeholder:r,id:b,showCategory:C})=>{let{t:S}=(0,x.$G)(["theatre","commonError"]),[w,N]=(0,j.lr)(),T=parseInt(w.get("page"));isNaN(T)&&(T=0);let[A,k]=(0,_.useState)(60),[E,P]=(0,_.useState)(()=>v(A)),$=Math.floor(E.total/30),L=(0,_.useRef)(null),[D,U]=(0,_.useState)(null);return((0,_.useEffect)(()=>{let e=new AbortController;return(0,a.Z)(function*(){let r,a=!1;switch(w.get("sort")){case"leastPopular":a=!0;case"mostPopular":r="plays";break;case"nameASC":a=!0;case"nameDES":r="name"}let n=new o.Jz(h.YA,e.signal);L.current=d.ZP.t("theatre:error.categoryData");try{let s=yield n.category({category:t,sort:r,leastGreatest:a,offset:30*T,limit:30});L.current=null,P(s),k(s.total)}catch(l){(0,m.ZP)(l)||(console.error(l),U(String(l)))}})(),()=>e.abort()},[T,t,w]),D)?(0,l.jsx)(i.Z,{cause:L.current,error:D,message:S("theatre:error.generic")}):(0,l.jsxs)("main",{className:g.Z.main,children:[(0,l.jsx)(c.Z,{showCategory:C,category:t,placeholder:r}),(0,l.jsxs)("section",{children:[(0,l.jsxs)("div",{className:g.Z.name,children:[(0,l.jsx)("h1",{children:(0,l.jsx)(p.mj,{ellipsis:!0,children:e})}),(0,l.jsxs)(u.NB,{className:g.Z.sort,defaultValue:w.get("sort"),onChange:e=>{P(v(A)),w.delete("page"),N((0,s.Z)((0,n.Z)({},Object.fromEntries(w)),{sort:e.target.value}))},children:[(0,l.jsx)("option",{value:"mostPopular",children:S("theatre:mostPopular")}),(0,l.jsx)("option",{value:"Least Popular",children:S("theatre:leastPopular")}),(0,l.jsx)("option",{value:"nameASC",children:S("theatre:nameASC")}),(0,l.jsx)("option",{value:"nameDES",children:S("theatre:nameDES")})]})]}),(0,l.jsx)(o.sr,{className:g.Z.items,items:E.entries})]}),(0,l.jsxs)("div",{className:(0,Z.Z)(g.Z.pages,0===$&&g.Z.useless),children:[(0,l.jsx)(f.Z,{className:(0,Z.Z)(g.Z.button,!T&&g.Z.disabled),onClick:()=>{!(0,o.hg)(E)&&T&&N((0,s.Z)((0,n.Z)({},Object.fromEntries(w)),{page:Math.max(T-1,0).toString()}))}}),(0,l.jsx)(y.Z,{className:(0,Z.Z)(g.Z.button,T>=$&&g.Z.disabled),onClick:()=>{!(0,o.hg)(E)&&T<$&&N((0,s.Z)((0,n.Z)({},Object.fromEntries(w)),{page:(T+1).toString()}))}})]})]})};t.Z=b},9488:function(e,t,r){r.d(t,{Jz:function(){return y},hg:function(){return f},sr:function(){return x}});var a=r(7568),n=r(6042),s=r(9396),l=r(9607),i=r(922),o=r(3374),c=r(2539),u=r(8065),h=r(8736),d=r(8471),m=r(2033),p=r(4051),g=r(4822);function f(e){return"loading"in e&&!0===e.loading}class y extends o.Z{show(e){var t=this;return(0,a.Z)(function*(){return yield t.fetch(`./theatre/${e}/`)})()}plays(e){var t=this;return(0,a.Z)(function*(){return yield t.fetch(`./theatre/${e}/plays`,{method:"PUT"})})()}category(e){var t=this;return(0,a.Z)(function*(){return yield t.fetch("./theatre/?"+new URLSearchParams(t.sortParams(e)))})()}}function Z({id:e,name:t}){let[r,a]=(0,p.useState)(!1);return(0,i.jsxs)(g.rU,{className:d.Z.item,to:`${(0,h.k$)("theatre player").path}?id=${e}`,title:t,children:[(0,i.jsx)("div",{className:d.Z.thumbnail,"data-loaded":Number(r),children:(0,i.jsx)("img",{alt:"",loading:"lazy",onLoad:()=>a(!0),src:new URL(`./thumbnails/${e}.webp`,c.JM).toString()})}),(0,i.jsx)("div",{className:d.Z.name,children:(0,i.jsx)(u.mj,{ellipsis:!0,children:t})})]})}function _(){return(0,i.jsxs)("div",{className:(0,m.Z)(d.Z.item,d.Z.loading),children:[(0,i.jsx)("div",{className:d.Z.thumbnail}),(0,i.jsx)("div",{className:d.Z.name})]})}function x(e){var{items:t}=e,r=(0,l.Z)(e,["items"]);let a=[];for(let o of t)f(o)?a.push((0,i.jsx)(_,{},o.id)):a.push((0,i.jsx)(Z,{id:o.id,name:o.name},o.id));return(0,i.jsx)("div",(0,s.Z)((0,n.Z)({},r),{children:a}))}},1385:function(e,t,r){r.d(t,{Z:function(){return x}});var a=r(7568),n=r(922),s=r(9488),l=r(168),i=r(2539),o=r(6184),c=r(9981),u=r(8065),h=r(8736),d={search:"TheatreSearch_search__Y6zTt",ThemeInputBar:"TheatreSearch_ThemeInputBar__7rO3t",suggested:"TheatreSearch_suggested__Xp4hS",option:"TheatreSearch_option__7xsG7",hover:"TheatreSearch_hover__FmvBZ",name:"TheatreSearch_name__MPb8q",category:"TheatreSearch_category__aHjMH"},m=r(5320),p=r(2033),g=r(4051),f=r(360),y=r(6732),Z=r(4822);let _=({category:e,placeholder:t,showCategory:r})=>{let{t:_}=(0,f.$G)("gameCategory"),x=(0,y.s0)(),j=(0,g.useRef)(null),v=(0,g.useRef)(null),[b,C]=(0,g.useState)({total:0,entries:[]}),[S,w]=(0,g.useState)(-1),[N,T]=(0,g.useState)(!1),A=(0,g.useRef)(new AbortController);function k(e){return E.apply(this,arguments)}function E(){return(E=(0,a.Z)(function*(t){A.current.abort(),A.current=new AbortController;let r=new s.Jz(i.YA,A.current.signal);try{let a=yield r.category({sort:"search",search:t,limit:8,category:e});C(a)}catch(n){(0,c.ZP)(n)||console.error(n)}})).apply(this,arguments)}let P=N&&0!==b.entries.length;return(0,n.jsxs)("div",{className:d.search,"data-focused":Number(N),"data-suggested":Number(P),ref:v,onBlur:e=>{v.current.contains(e.relatedTarget)||T(!1)},children:[(0,n.jsxs)(l.M8,{className:d.ThemeInputBar,children:[(0,n.jsx)(m.Z,{className:l.lx.icon}),(0,n.jsx)("input",{ref:j,type:"text",className:l.lx.thinPadLeft,placeholder:t,onFocus:()=>{T(!0),w(-1),k(j.current.value)},onClick:()=>{T(!0),w(-1),k(j.current.value)},onKeyDown:e=>{let t=!0;switch(e.code){case"Escape":T(!1);break;case"ArrowDown":case"ArrowUp":{let r;switch(e.code){case"ArrowDown":r=S>=b.entries.length-1?0:S+1;break;case"ArrowUp":r=S<=0?b.entries.length-1:S-1}w(r)}break;case"Enter":{let a=b.entries[S];a&&(j.current.blur(),T(!1),x(`${(0,h.k$)("theatre player").path}?id=${a.id}`))}break;default:t=!1}t&&e.preventDefault()},onChange:e=>{k(e.target.value),w(-1)}})]}),(0,n.jsx)("div",{className:d.suggested,onMouseLeave:()=>{w(-1)},children:P&&b.entries.map((e,t)=>{var a;return(0,n.jsxs)(Z.rU,{tabIndex:0,onClick:()=>T(!1),onMouseOver:()=>w(t),to:`${(0,h.k$)("theatre player").path}?id=${e.id}`,title:e.name,className:(0,p.Z)(d.option,t===S&&d.hover),children:[(0,n.jsx)("div",{className:d.name,children:(0,n.jsx)(u.mj,{ellipsis:!0,children:e.name})}),r&&e.category[0]&&(0,n.jsx)("div",{className:d.category,children:_(null===(a=o.Z.find(t=>t.id===e.category[0]))||void 0===a?void 0:a.id)})]},e.id)})})]})};var x=_},9981:function(e,t,r){r.d(t,{dD:function(){return n}});let a=e=>"object"==typeof e&&null!==e&&e instanceof Error,n=e=>a(e)&&"Failed to fetch"===e.message,s=e=>a(e)&&"AbortError"===e.name;t.ZP=s},2823:function(e,t,r){r.r(t);var a=r(6042),n=r(922),s=r(1492),l=r(7872),i=r(6184),o=r(360);let c=()=>(0,n.jsx)(s.Z,{title:"Games",description:"Find games on Blurred X."}),u=e=>{let{t}=(0,o.$G)("theatre");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{}),(0,n.jsx)(l.Z,(0,a.Z)({name:t("allGames"),id:"all",showCategory:!0,category:i.Z.map(e=>e.id).join(","),placeholder:t("searchByGame")},e),"all")]})};t.default=u},7908:function(e,t,r){var a=r(4470);t.Z=void 0;var n=a(r(5684)),s=r(922),l=(0,n.default)((0,s.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.Z=l},4237:function(e,t,r){var a=r(4470);t.Z=void 0;var n=a(r(5684)),s=r(922),l=(0,n.default)((0,s.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.Z=l},5320:function(e,t,r){var a=r(4470);t.Z=void 0;var n=a(r(5684)),s=r(922),l=(0,n.default)((0,s.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=l}}]);
//# sourceMappingURL=823.c1191304.chunk.js.map