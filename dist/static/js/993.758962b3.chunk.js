"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[993],{1492:function(e,t,r){var s=r(922),n=r(8294),a=r(2539),o=r(8736),i=r(5710);let l=e=>JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:e.mainEntity.map(e=>({"@type":"Question",name:e.name,acceptedAnswer:{"@type":"Answer",text:e.acceptedAnswer.text}}))}),h=e=>JSON.stringify({"@context":"https://schema.org","@type":"WebSite",url:e.url,potentialAction:e.potentialAction.map(e=>({"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:e.target.urlTemplate},"query-input":e["query-input"]}))}),d=({title:e,description:t,faq:d,actions:c})=>{let[u]=(0,n.fO)();return(0,s.jsxs)(i.ql,{children:[(0,s.jsx)("title",{children:""===u.title?e||"Blurred X":u.title}),!a.tD&&t&&(0,s.jsx)("meta",{name:"description",content:t}),!a.tD&&d&&(0,s.jsx)("script",{type:"application/ld+json",children:l({mainEntity:d})}),!a.tD&&c&&(0,s.jsx)("script",{type:"application/ld+json",children:h({url:new URL((0,o.k$)("home").path,r.g.location.toString()).toString(),potentialAction:c})})]})};t.Z=d},8133:function(e,t,r){r.d(t,{ZP:function(){return j}});var s=r(7568),n=r(4924);let a=globalThis.fetch,o=globalThis.WebSocket,i=globalThis.Request,l=globalThis.Response,h=[101,204,205,304],d=[301,302,303,307,308];class c extends Error{constructor(e,t){super(t.message||t.code),(0,n.Z)(this,"status",void 0),(0,n.Z)(this,"body",void 0),this.status=e,this.body=t}}class u{constructor(e,t){(0,n.Z)(this,"base",void 0),this.base=new URL(`./v${e}/`,t)}}let f="!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~";function w(e,t){let r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function p(e,t,r,s,n,a){var o;return w((o=w(w(t,e),w(s,a)))<<n|o>>>32-n,r)}function b(e,t,r,s,n,a,o){return p(t&r|~t&s,e,t,n,a,o)}function g(e,t,r,s,n,a,o){return p(t&s|r&~s,e,t,n,a,o)}function y(e,t,r,s,n,a,o){return p(t^r^s,e,t,n,a,o)}function m(e,t,r,s,n,a,o){return p(r^(t|~s),e,t,n,a,o)}function x(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;let r=1732584193,s=-271733879,n=-1732584194,a=271733878;for(let o=0;o<e.length;o+=16){let i=r,l=s,h=n,d=a;r=b(r,s,n,a,e[o],7,-680876936),a=b(a,r,s,n,e[o+1],12,-389564586),n=b(n,a,r,s,e[o+2],17,606105819),s=b(s,n,a,r,e[o+3],22,-1044525330),r=b(r,s,n,a,e[o+4],7,-176418897),a=b(a,r,s,n,e[o+5],12,1200080426),n=b(n,a,r,s,e[o+6],17,-1473231341),s=b(s,n,a,r,e[o+7],22,-45705983),r=b(r,s,n,a,e[o+8],7,1770035416),a=b(a,r,s,n,e[o+9],12,-1958414417),n=b(n,a,r,s,e[o+10],17,-42063),s=b(s,n,a,r,e[o+11],22,-1990404162),r=b(r,s,n,a,e[o+12],7,1804603682),a=b(a,r,s,n,e[o+13],12,-40341101),n=b(n,a,r,s,e[o+14],17,-1502002290),s=b(s,n,a,r,e[o+15],22,1236535329),r=g(r,s,n,a,e[o+1],5,-165796510),a=g(a,r,s,n,e[o+6],9,-1069501632),n=g(n,a,r,s,e[o+11],14,643717713),s=g(s,n,a,r,e[o],20,-373897302),r=g(r,s,n,a,e[o+5],5,-701558691),a=g(a,r,s,n,e[o+10],9,38016083),n=g(n,a,r,s,e[o+15],14,-660478335),s=g(s,n,a,r,e[o+4],20,-405537848),r=g(r,s,n,a,e[o+9],5,568446438),a=g(a,r,s,n,e[o+14],9,-1019803690),n=g(n,a,r,s,e[o+3],14,-187363961),s=g(s,n,a,r,e[o+8],20,1163531501),r=g(r,s,n,a,e[o+13],5,-1444681467),a=g(a,r,s,n,e[o+2],9,-51403784),n=g(n,a,r,s,e[o+7],14,1735328473),s=g(s,n,a,r,e[o+12],20,-1926607734),r=y(r,s,n,a,e[o+5],4,-378558),a=y(a,r,s,n,e[o+8],11,-2022574463),n=y(n,a,r,s,e[o+11],16,1839030562),s=y(s,n,a,r,e[o+14],23,-35309556),r=y(r,s,n,a,e[o+1],4,-1530992060),a=y(a,r,s,n,e[o+4],11,1272893353),n=y(n,a,r,s,e[o+7],16,-155497632),s=y(s,n,a,r,e[o+10],23,-1094730640),r=y(r,s,n,a,e[o+13],4,681279174),a=y(a,r,s,n,e[o],11,-358537222),n=y(n,a,r,s,e[o+3],16,-722521979),s=y(s,n,a,r,e[o+6],23,76029189),r=y(r,s,n,a,e[o+9],4,-640364487),a=y(a,r,s,n,e[o+12],11,-421815835),n=y(n,a,r,s,e[o+15],16,530742520),s=y(s,n,a,r,e[o+2],23,-995338651),r=m(r,s,n,a,e[o],6,-198630844),a=m(a,r,s,n,e[o+7],10,1126891415),n=m(n,a,r,s,e[o+14],15,-1416354905),s=m(s,n,a,r,e[o+5],21,-57434055),r=m(r,s,n,a,e[o+12],6,1700485571),a=m(a,r,s,n,e[o+3],10,-1894986606),n=m(n,a,r,s,e[o+10],15,-1051523),s=m(s,n,a,r,e[o+1],21,-2054922799),r=m(r,s,n,a,e[o+8],6,1873313359),a=m(a,r,s,n,e[o+15],10,-30611744),n=m(n,a,r,s,e[o+6],15,-1560198380),s=m(s,n,a,r,e[o+13],21,1309151649),r=m(r,s,n,a,e[o+4],6,-145523070),a=m(a,r,s,n,e[o+11],10,-1120210379),n=m(n,a,r,s,e[o+2],15,718787259),s=m(s,n,a,r,e[o+9],21,-343485551),r=w(r,i),s=w(s,l),n=w(n,h),a=w(a,d)}return[r,s,n,a]}function v(e){let t="",r=32*e.length;for(let s=0;s<r;s+=8)t+=String.fromCharCode(e[s>>5]>>>s%32&255);return t}function R(e){let t=[],r=e.length>>2;for(let s=0;s<r;s+=1)t[s]=0;let n=8*e.length;for(let a=0;a<n;a+=8)t[a>>5]|=(255&e.charCodeAt(a/8))<<a%32;return t}function Z(e){let t="0123456789abcdef",r="";for(let s=0;s<e.length;s+=1){let n=e.charCodeAt(s);r+=t.charAt(n>>>4&15)+t.charAt(15&n)}return r}function S(e){return unescape(encodeURIComponent(e))}function E(e){var t;return v(x(R(t=S(e)),8*t.length))}function k(e,t){return function(e,t){let r=R(e),s=[],n=[];r.length>16&&(r=x(r,8*e.length));for(let a=0;a<16;a+=1)s[a]=909522486^r[a],n[a]=1549556828^r[a];let o=x(s.concat(R(t)),512+8*t.length);return v(x(n.concat(o),640))}(S(e),S(t))}let H=[["v2",class extends u{connect(e,t,r,n,l){var h=this;return(0,s.Z)(function*(){let d=new i(h.newMeta,{headers:h.createBareHeaders(t,r,l,n,e)}),u=yield a(d);if(!u.ok)throw new c(u.status,(yield u.json()));let f=yield u.text(),w=new o(h.ws,[f]);return w.meta=new Promise((e,t)=>{w.addEventListener("open",(0,s.Z)(function*(){let t=yield a(h.getMeta,{headers:{"x-bare-id":f},method:"GET"});e((yield h.readBareResponse(t)))})),w.addEventListener("error",t)}),w})()}request(e,t,r,n,o,d,c,u,f){var w=this;return(0,s.Z)(function*(){var s,p,b,g;if(n.startsWith("blob:")){let y=yield a(`${n}${o}${c}`),m=new l(y.body,y);return m.rawHeaders=Object.fromEntries(y.headers),m.rawResponse=y,m}let x={};if(t instanceof Headers)for(let[v,R]of t)x[v]=R;else for(let S in t)x[S]=t[S];let H={credentials:"omit",method:e,signal:f};"only-if-cached"!==u&&(H.cache=u),void 0!==r&&(H.body=r),H.headers=w.createBareHeaders(n,o,c,d,x);let L=new i(w.http+"?cache="+(p=`${n}${o}${d}${c}`,b?g?k(b,p):Z(k(b,p)):g?E(p):Z(E(p))),H),U=yield a(L),j=yield w.readBareResponse(U),A=new l(h.includes(j.status)?void 0:U.body,{status:j.status,statusText:null!==(s=j.statusText)&&void 0!==s?s:void 0,headers:j.headers});return A.rawHeaders=j.rawHeaders,A.rawResponse=U,A})()}readBareResponse(e){return(0,s.Z)(function*(){if(!e.ok)throw new c(e.status,(yield e.json()));let t=function(e){let t=new Headers(e),r="x-bare-headers";if(e.has(`${r}-0`)){let s=[];for(let[n,a]of e){if(!n.startsWith(r))continue;if(!a.startsWith(";"))throw new c(400,{code:"INVALID_BARE_HEADER",id:`request.headers.${n}`,message:"Value didn't begin with semi-colon."});let o=parseInt(n.slice(r.length+1));s[o]=a.slice(1),t.delete(n)}t.set(r,s.join(""))}return t}(e.headers),r={};return t.has("x-bare-status")&&(r.status=parseInt(t.get("x-bare-status"))),t.has("x-bare-status-text")&&(r.statusText=t.get("x-bare-status-text")),t.has("x-bare-headers")&&(r.rawHeaders=JSON.parse(t.get("x-bare-headers")),r.headers=new Headers(r.rawHeaders)),r})()}createBareHeaders(e,t,r,s,n,a=[],o=[],i=[]){let l=new Headers;for(let h of(l.set("x-bare-protocol",e),l.set("x-bare-host",t),l.set("x-bare-path",r),l.set("x-bare-port",s.toString()),l.set("x-bare-headers",JSON.stringify(n)),a))l.append("x-bare-forward-headers",h);for(let d of o)l.append("x-bare-pass-headers",d);for(let c of i)l.append("x-bare-pass-status",c.toString());return!function(e){let t=new Headers(e);if(e.has("x-bare-headers")){let r=e.get("x-bare-headers");if(r.length>3072){t.delete("x-bare-headers");let s=0;for(let n=0;n<r.length;n+=3072){let a=r.slice(n,n+3072),o=s++;t.set(`x-bare-headers-${o}`,`;${a}`)}}}}(l),l}constructor(e){super(2,e),(0,n.Z)(this,"ws",void 0),(0,n.Z)(this,"http",void 0),(0,n.Z)(this,"newMeta",void 0),(0,n.Z)(this,"getMeta",void 0),this.ws=new URL(this.base),this.http=new URL(this.base),this.newMeta=new URL("./ws-new-meta",this.base),this.getMeta=new URL("./ws-meta",this.base),"https:"===this.ws.protocol?this.ws.protocol="wss:":this.ws.protocol="ws:"}}],["v1",class extends u{connect(e,t,r,n,i){var l=this;return(0,s.Z)(function*(){let h=yield a(l.newMeta,{method:"GET"});if(!h.ok)throw new c(h.status,(yield h.json()));let d=yield h.text(),u=new o(l.ws,["bare",function(e){let t="";for(let r=0;r<e.length;r++){let s=e[r];if(f.includes(s)&&"%"!==s)t+=s;else{let n=s.charCodeAt(0);t+="%"+n.toString(16).padStart(2,"0")}}return t}(JSON.stringify({remote:{protocol:t,host:r,port:n,path:i},headers:e,forward_headers:["accept-encoding","accept-language","sec-websocket-extensions","sec-websocket-key","sec-websocket-version"],id:d}))]);return u.meta=new Promise((e,t)=>{u.addEventListener("open",(0,s.Z)(function*(){let r=yield a(l.getMeta,{headers:{"x-bare-id":d},method:"GET"});r.ok||t(new c(r.status,(yield r.json()))),e((yield r.json()))})),u.addEventListener("error",t)}),u})()}request(e,t,r,n,o,d,c,u,f){var w=this;return(0,s.Z)(function*(){var s;if(n.startsWith("blob:")){let u=yield a(`${n}${o}${c}`),p=new l(u.body,u);return p.rawHeaders=Object.fromEntries(u.headers),p.rawResponse=u,p}let b={};if(t instanceof Headers)for(let[g,y]of t)b[g]=y;else for(let m in t)b[m]=t[m];let x={credentials:"omit",method:e,signal:f};void 0!==r&&(x.body=r);let v=new i(w.http,x);w.writeBareRequest(v,n,o,c,d,b,["accept-encoding","accept-language"]);let R=yield a(v),Z=yield w.readBareResponse(R),S=new l(h.includes(Z.status)?void 0:R.body,{status:Z.status,statusText:null!==(s=Z.statusText)&&void 0!==s?s:void 0,headers:Z.headers});return S.rawHeaders=Z.rawHeaders,S.rawResponse=R,S})()}readBareResponse(e){return(0,s.Z)(function*(){if(!e.ok)throw new c(e.status,(yield e.json()));for(let t of["x-bare-status","x-bare-status-text","x-bare-headers"])if(!e.headers.has(t))throw new c(500,{code:"IMPL_MISSING_BARE_HEADER",id:`response.headers.${t}`});let r=parseInt(e.headers.get("x-bare-status")),s=e.headers.get("x-bare-status-text"),n=JSON.parse(e.headers.get("x-bare-headers")),a=new Headers(n);return{status:r,statusText:s,rawHeaders:n,headers:a}})()}writeBareRequest(e,t,r,s,n,a,o){e.headers.set("x-bare-protocol",t),e.headers.set("x-bare-host",r),e.headers.set("x-bare-path",s),e.headers.set("x-bare-port",n.toString()),e.headers.set("x-bare-headers",JSON.stringify(a)),e.headers.set("x-bare-forward-headers",JSON.stringify(o))}constructor(e){super(1,e),(0,n.Z)(this,"ws",void 0),(0,n.Z)(this,"http",void 0),(0,n.Z)(this,"newMeta",void 0),(0,n.Z)(this,"getMeta",void 0),this.ws=new URL(this.base),this.http=new URL(this.base),this.newMeta=new URL("ws-new-meta",this.base),this.getMeta=new URL("ws-meta",this.base),"https:"===this.ws.protocol?this.ws.protocol="wss:":this.ws.protocol="ws:"}}]];function L(){return(L=(0,s.Z)(function*(e,t){let r=yield a(e,{signal:t});if(!r.ok)throw Error(`Unable to fetch Bare meta: ${r.status} ${yield r.text()}`);return yield r.json()})).apply(this,arguments)}function U(e){if(e.port)return Number(e.port);switch(e.protocol){case"ws:":case"http:":return 80;case"wss:":case"https:":return 443;default:return 0}}class j{get data(){return this.manfiest}demand(){if(this.onDemand)return this.working||(this.working=(function(e,t){return L.apply(this,arguments)})(this.server,this.onDemandSignal).then(e=>{this.manfiest=e,this.getClient()})),this.working}getClient(){for(let[e,t]of H)if(this.data.versions.includes(e)){this.client=new t(this.server);return}throw Error("Unable to find compatible client version.")}request(e,t,r,n,a,o,i,l,h){var d=this;return(0,s.Z)(function*(){return yield d.demand(),yield d.client.request(e,t,r,n,a,o,i,l,h)})()}connect(e,t,r,n,a){var o=this;return(0,s.Z)(function*(){return yield o.demand(),o.client.connect(e,t,r,n,a)})()}createWebSocket(e,t={},r=[]){let s=t instanceof Headers?Object.fromEntries(t):t;for(let n of(e=new URL(e),s.Host=e.host,s.Pragma="no-cache",s["Cache-Control"]="no-cache",s.Upgrade="websocket",s.Connection="Upgrade","string"==typeof r&&(r=[r]),r))if(!function(e){for(let t=0;t<e.length;t++){let r=e[t];if(!f.includes(r))return!1}return!0}(n))throw new DOMException(`Failed to construct 'WebSocket': The subprotocol '${n}' is invalid.`);return r.length&&(s["Sec-Websocket-Protocol"]=r.join(", ")),this.connect(s,e.protocol,e.hostname,U(e),e.pathname+e.search)}fetch(e,t={}){var r=this;return(0,s.Z)(function*(){let s,n,a,o,l;e instanceof i?(t||(t=e),e=new URL(e.url)):e=new URL(e),s="string"==typeof t.method?t.method:"GET",void 0!==t.body&&null!==t.body&&(n=t.body),a="object"==typeof t.headers&&null!==t.headers?t.headers instanceof Headers?Object.fromEntries(t.headers):t.headers:{},o="string"==typeof t.cache?t.cache:"default",t.signal instanceof AbortSignal&&(l=t.signal);for(let h=0;;h++){"host"in a?a.host=e.host:a.Host=e.host;let c=yield r.request(s,a,n,e.protocol,e.hostname,U(e),e.pathname+e.search,o,l);if(c.finalURL=e.toString(),!d.includes(c.status))return c;switch(t.redirect){default:case"follow":if(20>h&&c.headers.has("location")){e=new URL(c.headers.get("location"),e);continue}throw TypeError("Failed to fetch");case"error":throw TypeError("Failed to fetch");case"manual":return c}}})()}constructor(e,t){(0,n.Z)(this,"manfiest",void 0),(0,n.Z)(this,"client",void 0),(0,n.Z)(this,"server",void 0),(0,n.Z)(this,"working",void 0),(0,n.Z)(this,"onDemand",void 0),(0,n.Z)(this,"onDemandSignal",void 0),this.server=new URL(e),!t||t instanceof AbortSignal?(this.onDemand=!0,this.onDemandSignal=t):(this.onDemand=!1,this.manfiest=t,this.getClient())}}}}]);
//# sourceMappingURL=993.758962b3.chunk.js.map