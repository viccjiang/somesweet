import{_,o as s,c as t,a as n,v as r,x as l,F as p,t as d,y as u,u as g}from"./index-5a0b13e1.js";const h={props:["pages"],data(){return{}},methods:{},mounted(){console.log("分頁元件接收到的值",this.pages)}},k={key:0,"aria-label":"Page navigation example"},m={class:"pagination"},v={key:0,class:"page-item"},f=n("span",{"aria-hidden":"true"},"«",-1),y=[f],P={key:0,class:"page-link"},C=["onClick"],x={key:1,class:"page-item"},b=n("span",{"aria-hidden":"true"},"»",-1),B=[b];function N(o,i,e,F,V,$){return e.pages.total_pages>1?(s(),t("nav",k,[n("ul",m,[e.pages.has_pre?(s(),t("li",v,[n("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:i[0]||(i[0]=r(a=>o.$emit("emitPages",e.pages.current_page-1),["prevent"]))},y)])):l("",!0),(s(!0),t(p,null,d(e.pages.total_pages,(a,c)=>(s(),t("li",{key:c,class:u(["page-item",{active:a===e.pages.current_page}])},[a===e.pages.current_page?(s(),t("span",P,g(a),1)):(s(),t("a",{key:1,class:"page-link",href:"#",onClick:r(w=>o.$emit("emitPages",a),["prevent"])},g(a),9,C))],2))),128)),e.pages.has_next?(s(),t("li",x,[n("a",{class:"page-link",href:"#","aria-label":"Next",onClick:i[1]||(i[1]=r(a=>o.$emit("emitPages",e.pages.current_page+1),["prevent"]))},B)])):l("",!0)])])):l("",!0)}const D=_(h,[["render",N]]);export{D as P};
