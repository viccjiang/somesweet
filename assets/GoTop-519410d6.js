import{_ as r,o as c,b as n,d as s,D as i}from"./index-f2a5458d.js";const a={data(){return{yScrollVaule:""}},methods:{scrollWatch(){this.yScrollVaule=window.scrollY},goTop(){document.documentElement.scrollTop=0}},mounted(){window.addEventListener("scroll",this.scrollWatch)}},d=s("i",{class:"bi bi-arrow-up-circle-fill px-5 px-md-10 py-2 rounded-1 fs-1 text-primary",style:{opacity:"0.5"}},null,-1),p=[d];function u(m,o,_,f,t,e){return c(),n("div",{onClick:o[0]||(o[0]=(...l)=>e.goTop&&e.goTop(...l))},[s("div",{class:i(["position-fixed end-0 bottom-5 cursor-pointer",t.yScrollVaule<50?"d-none":""]),style:{"z-index":"100"}},p,2)])}const y=r(a,[["render",u]]);export{y as G};
