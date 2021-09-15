(this["webpackJsonprecipe-finder"]=this["webpackJsonprecipe-finder"]||[]).push([[0],{54:function(e,n,t){},80:function(e,n,t){"use strict";t.r(n);var c,i,r,a,o,d,p,s,l,j,b,x,h,u,g=t(0),O=t.n(g),f=t(11),m=t.n(f),w=(t(54),t(29)),v=t.n(w),C=t(43),y=t(26),S=t(107),k=t(105),I=t(108),F=t(106),z=t(6),A=t(7),T=A.a.div(c||(c=Object(z.a)(["\n  color: white;\n  background-color: black;\n  display: flex;\n  flex-direction: row;\n  padding: 20px;\n  font: 20p;\n  font-weight: bold;\n  box-shadow: 0px 3px 6px 0 #555;\n  align-items: center;\n  justify-content: space-between;\n"]))),R=A.a.div(i||(i=Object(z.a)(["\n  display: flex;\n  align-items: center;\n"]))),B=A.a.img(r||(r=Object(z.a)(["\n  width: 36px;\n  height: 36px;\n  margin: 15px;\n"]))),H=A.a.img(a||(a=Object(z.a)(["\n  width: 32px;\n  height: 32px;\n"]))),J=A.a.div(o||(o=Object(z.a)(["\n  display: flex;\n  flex-direction: row;\n  background-color: white;\n  padding: 10px;\n  border-radius: 6px;\n  width: 50%;\n"]))),L={SearchInput:A.a.input(d||(d=Object(z.a)(["\n  border: none;\n  outine: none;\n  margin-left: 15px;\n  font-size: 16px;\n  font-weight: bold;\n"]))),SearchComponent:J,SearchIcon:H,AppIcon:B,AppNameComponent:R,HeaderComponent:T,Container:A.a.div(p||(p=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n"])))},M=A.a.div(s||(s=Object(z.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 30px;\n  justify-content: space-evenly;\n  gap: 20px;\n"]))),N=A.a.div(l||(l=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  width: 300px;\n  box-shadow: 0px 3px 10px 0 #aaa;\n"]))),P=A.a.img(j||(j=Object(z.a)(["\n  height: 200px;\n  object-fit: cover;\n"]))),_=A.a.div(b||(b=Object(z.a)(["\n  font-size: 18px;\n  color: black;\n  font-weight: bold;\n  margin: 10p 0;\n"]))),q=A.a.div(x||(x=Object(z.a)(["\n  font-size: 18px;\n  border: solid 1px green;\n  border-radius: 3px;\n  color: green;\n  font-weight: bold;\n  margin: 10p 0;\n  cursor: pointer;\n  padding: 10px 15px;\n  text-align: center;\n  margin-bottom: 12px;\n"]))),D=A.a.div(h||(h=Object(z.a)(["\n  color: #eb3300;\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  border: solid 1px #eb3300;\n  border-radius: 3px;\n  padding: 10px 15px;\n  cursor: pointer;\n"]))),E=A.a.img(u||(u=Object(z.a)(["\n  width: 120px;\n  height: 120px;\n  margin: 200px;\n  opacity: 50%;\n"]))),W=t(47),G=t.n(W),K=t(3),Q=function(e){var n=Object(g.useState)(!1),t=Object(y.a)(n,2),c=t[0],i=t[1];console.log(e);var r=e.recipeObj;return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(S.a,{open:c,children:[Object(K.jsx)(I.a,{id:"alert-dialog-slide-title",children:"Ingredients"}),Object(K.jsx)(k.a,{children:Object(K.jsxs)("table",{children:[Object(K.jsxs)("thead",{children:[Object(K.jsx)("th",{children:"Ingredients"}),Object(K.jsx)("th",{children:"Weight"})]}),Object(K.jsx)("tbody",{children:r.ingredients.map((function(e){return Object(K.jsxs)("tr",{children:[Object(K.jsx)("td",{children:e.text}),Object(K.jsx)("td",{children:e.weight})]})}))})]})}),Object(K.jsxs)(F.a,{children:[Object(K.jsx)(q,{onClick:function(){return window.open(r.url)},children:"See More"}),Object(K.jsx)(D,{onClick:function(){return i(!1)},children:"Close"})]})]}),Object(K.jsxs)(N,{children:[Object(K.jsx)(P,{src:r.image}),Object(K.jsx)(_,{children:r.label}),Object(K.jsx)(q,{onClick:function(){return i(!0)},children:"Ingredients"}),Object(K.jsx)(D,{onClick:function(){return window.open(r.url)},children:"See Complete Recipe"})]})]})};var U=function(){var e=Object(g.useState)(),n=Object(y.a)(e,2),t=n[0],c=n[1],i=Object(g.useState)([]),r=Object(y.a)(i,2),a=r[0],o=r[1],d=function(){var e=Object(C.a)(v.a.mark((function e(n){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://api.edamam.com/search?q=".concat(n,"&app_id=").concat("6e89be1d","&app_key=").concat("b2862808995a1b8aee5c836c6f23b316"));case 2:t=e.sent,console.log(t),o(t.data.hits);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(K.jsxs)(L.Container,{children:[Object(K.jsxs)(L.HeaderComponent,{children:[Object(K.jsxs)(L.AppNameComponent,{children:[Object(K.jsx)(L.AppIcon,{src:"/hamburger.svg"}),"Recipe Finder"]}),Object(K.jsxs)(L.SearchComponent,{children:[Object(K.jsx)(L.SearchIcon,{src:"/search-icon.svg"}),Object(K.jsx)(L.SearchInput,{placeholder:"Search Recipe",onChange:function(e){clearTimeout(t);var n=setTimeout((function(){return d(e.target.value)}),500);c(n)}})]})]}),Object(K.jsx)(M,{children:a.length?a.map((function(e){return Object(K.jsx)(Q,{recipeObj:e.recipe})})):Object(K.jsx)(E,{src:"/hamburger.svg"})})]})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,110)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),r(e),a(e)}))};m.a.render(Object(K.jsx)(O.a.StrictMode,{children:Object(K.jsx)(U,{})}),document.getElementById("root")),V()}},[[80,1,2]]]);
//# sourceMappingURL=main.3a76cda5.chunk.js.map