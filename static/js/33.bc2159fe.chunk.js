"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{5033:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,i,s,o,c,u,p=t(9439),l=t(7689),d=t(2791),f=t(4390),h=t(7793),m=t(6824),x=t(168),v=t(6444),b=t(1087),g=v.ZP.img(r||(r=(0,x.Z)(["\n  width: 250px;\n  display: flex;\n  margin: 0 auto;\n"]))),Z=(0,v.ZP)(b.rU)(a||(a=(0,x.Z)(["\n  display: inline-block;\n  color: #fff;\n  text-decoration: none;\n  border-radius: 4px;\n  padding: 4px;\n  background-color: #ad00b5;\n  margin-bottom: 8px;\n"]))),j=v.ZP.div(i||(i=(0,x.Z)(["\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  padding-bottom: 10px;\n  border-bottom: 1px solid black;\n"]))),k=v.ZP.h3(s||(s=(0,x.Z)(["\n  margin-top: 16px;\n"]))),w=v.ZP.h3(o||(o=(0,x.Z)(["\n  margin-top: 16px;\n"]))),y=v.ZP.div(c||(c=(0,x.Z)(["\n  padding-bottom: 8px;\n  border-bottom: 1px solid black;\n"]))),_=(0,v.ZP)(b.rU)(u||(u=(0,x.Z)(["\n  color: #ad00b5;\n  font-weight: 500;\n"]))),P=t(184),C=function(){var n,e,t,r,a,i,s=(0,l.UO)().movieId,o=(0,d.useState)([]),c=(0,p.Z)(o,2),u=c[0],x=c[1],v=(0,d.useState)(!1),b=(0,p.Z)(v,2),C=b[0],U=b[1],S=(0,d.useState)(null),q=(0,p.Z)(S,2),O=q[0],G=q[1],M=(0,l.TH)(),N=null!==(n=null===(e=M.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",R=null!==(t=null===(r=M.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/";if((0,d.useEffect)((function(){U(!0),(0,f.Cq)(Number(s)).then(x).catch((function(n){G("Our Minions have hands on other side and can`t find information about this film"),console.log(n)})).finally(U(!1))}),[s]),!u)return null;var T=Math.round(10*Number(null===u||void 0===u?void 0:u.vote_average)),z=null===(a=u.release_date)||void 0===a?void 0:a.slice(0,4),A=null===(i=u.genres)||void 0===i?void 0:i.map((function(n){return n.name})).join(", ");return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Z,{to:N,children:"Go back"}),C&&(0,P.jsx)(h.Z,{}),O&&(0,P.jsxs)("p",{children:[O," "]}),!O&&u&&(0,P.jsxs)("div",{children:[(0,P.jsxs)(j,{children:[(0,P.jsx)(g,{src:u.poster_path?"https://image.tmdb.org/t/p/w500".concat(u.poster_path):m,alt:u.title,loading:"lazy"}),(0,P.jsxs)("div",{children:[(0,P.jsxs)("h2",{children:[u.title," (",z,")"]}),(0,P.jsxs)("p",{children:["User score: ",T,"%"]}),(0,P.jsx)(k,{children:"Overview"}),(0,P.jsx)("p",{children:u.overview}),(0,P.jsx)(k,{children:"Genres"}),(0,P.jsx)("p",{children:A})]})]}),(0,P.jsxs)(y,{children:[(0,P.jsx)(w,{children:"Additional information"}),(0,P.jsxs)("ul",{children:[(0,P.jsx)("li",{children:(0,P.jsx)(_,{to:"cast",state:{from:R},children:"Cast"})}),(0,P.jsx)("li",{children:(0,P.jsx)(_,{to:"reviews",state:{from:R},children:"Reviews"})})]}),(0,P.jsx)(d.Suspense,{fallback:(0,P.jsx)(h.Z,{}),children:(0,P.jsx)(l.j3,{})})]})]}),(0,P.jsx)(l.j3,{})]})}},4390:function(n,e,t){t.d(e,{B:function(){return c},Cq:function(){return d},YV:function(){return h},_Q:function(){return p},hT:function(){return x}});var r=t(5861),a=t(7757),i=t.n(a),s=t(3263);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="a147bcd1e0cbe82e9bf9de24930f8c06";function c(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/trending/all/week",{params:{api_key:o}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/search/movie",{params:{api_key:o,query:e,page:1}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e),{params:{api_key:o}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/credits"),{params:{api_key:o}});case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/reviews"),{params:{api_key:o,page:1}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},6824:function(n,e,t){n.exports=t.p+"static/media/no_img.a8475aab3cbbf76c6b0c.jpg"}}]);
//# sourceMappingURL=33.bc2159fe.chunk.js.map