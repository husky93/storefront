"use strict";(self.webpackChunkshopping_cart=self.webpackChunkshopping_cart||[]).push([[1],{135:function(n,e,r){r.d(e,{S:function(){return i}});var t=r(885),c=r(791),i=function(){var n=(0,c.useRef)(null),e=(0,c.useState)(!1),r=(0,t.Z)(e,2),i=r[0],s=r[1],o=function(n){var e=(0,t.Z)(n,1)[0];s(e.isIntersecting),console.log(e)},u={root:null,rootMargin:"0px",threshold:.1};return(0,c.useEffect)((function(){var e=new IntersectionObserver(o,u);return n.current&&e.observe(n.current),function(){n.current&&e.unobserve(n.current)}}),[n,u]),{containerRef:n,isVisible:i}}},1:function(n,e,r){r.r(e),r.d(e,{default:function(){return o}});var t=r(791),c=r(135),i=r(184),s=t.lazy((function(){return r.e(376).then(r.bind(r,376))})),o=function(n){var e=n.products,r=(0,c.S)(),t=r.containerRef,o=r.isVisible;return(0,i.jsx)("section",{"aria-label":"Products",className:"products enter-transition ".concat(o?"in-viewport":""),ref:t,children:(0,i.jsxs)("div",{className:"content products__content",children:[(0,i.jsx)("h2",{className:"products__heading",children:"Products"}),(0,i.jsx)("div",{className:"products__wrapper",children:e.map((function(n){return(0,i.jsx)(s,{id:n.id,text:n.text,description:n.description,price:n.price,img:n.img},"prod-card"+n.img)}))})]})})}}}]);
//# sourceMappingURL=1.0858c16a.chunk.js.map