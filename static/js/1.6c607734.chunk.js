"use strict";(self.webpackChunkshopping_cart=self.webpackChunkshopping_cart||[]).push([[1],{135:function(n,e,r){r.d(e,{S:function(){return c}});var t=r(885),i=r(791),c=function(){var n=(0,i.useRef)(null),e=(0,i.useState)(!1),r=(0,t.Z)(e,2),c=r[0],s=r[1],u={root:null,rootMargin:"0px",threshold:.35};return(0,i.useEffect)((function(){var e=new IntersectionObserver((function(n){var e=(0,t.Z)(n,1)[0];e.isIntersecting&&!c&&s(e.isIntersecting)}),u);return n.current&&e.observe(n.current),function(){n.current&&e.unobserve(n.current)}}),[n,u,c]),{containerRef:n,isVisible:c}}},1:function(n,e,r){r.r(e),r.d(e,{default:function(){return u}});var t=r(791),i=r(135),c=r(184),s=t.lazy((function(){return r.e(376).then(r.bind(r,376))})),u=function(n){var e=n.products,r=(0,i.S)(),t=r.containerRef,u=r.isVisible;return(0,c.jsx)("div",{children:(0,c.jsx)("section",{"aria-label":"Products",className:"products enter-transition ".concat(u?"in-viewport":""),ref:t,children:(0,c.jsxs)("div",{className:"content products__content",children:[(0,c.jsx)("h2",{className:"products__heading",children:"Products"}),(0,c.jsx)("div",{className:"products__wrapper",children:e.map((function(n){return(0,c.jsx)(s,{id:n.id,text:n.text,description:n.description,price:n.price,img:n.img},"prod-card"+n.img)}))})]})})})}}}]);
//# sourceMappingURL=1.6c607734.chunk.js.map