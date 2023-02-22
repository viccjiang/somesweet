import{P as h}from"./PaginationComponent-0e24675e.js";import{_ as m,r as _,o as s,c as e,a as t,F as P,t as v,b as d,u as l,w as f,d as E}from"./index-fcf79f1c.js";const{VITE_APP_URL:w,VITE_APP_PATH:x}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/vue_week_07/",MODE:"production",DEV:!1,PROD:!0},T={components:{PaginationComponent:h},data(){return{products:[],pagination:{}}},methods:{getProducts(a=1){this.$http.get(`${w}api/${x}/products?page=${a}`).then(n=>{window.scrollTo(0,0);const{products:c,pagination:i}=n.data;this.products=c,this.pagination=i,console.log(this.products,this.pagination)})}},mounted(){this.getProducts()}},V={class:"container"},b={class:"row row-cols-1 row-cols-md-3 g-4"},A={class:"product card h-100"},k=["src","alt"],y={class:"card-body"},U={class:"card-title"},$={class:"card-text text-truncate"},C={class:"card-footer bg-white"};function I(a,n,c,i,r,p){const u=_("router-link"),g=_("PaginationComponent");return s(),e("div",V,[t("div",b,[(s(!0),e(P,null,v(r.products,o=>(s(),e("div",{class:"col",key:o.id},[t("div",A,[t("img",{src:o.imageUrl,class:"card-img-top object-fit",alt:o.title},null,8,k),t("div",y,[t("h5",U,l(o.title),1),t("p",$,l(o.content),1)]),t("div",C,[d(u,{class:"ben btn-primary",to:`/product/${o.id}`},{default:f(()=>[E("查看更多")]),_:2},1032,["to"])])])]))),128))]),d(g,{class:"mt-5 mb-5",pages:r.pagination,onEmitPages:p.getProducts},null,8,["pages","onEmitPages"])])}const L=m(T,[["render",I],["__scopeId","data-v-802d726a"]]);export{L as default};