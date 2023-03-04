import{c as u}from"./UserCartStore-08f49ed7.js";import{_ as b,m as v,a as f,r as k,o as r,b as i,d as t,F as p,E as _,e as m,w as h,t as d,G as P,H as w,f as g}from"./index-f2a5458d.js";const{VITE_APP_URL:x,VITE_APP_PATH:y}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/somesweet/",MODE:"production",DEV:!1,PROD:!0},I={data(){return{product:[],id:"",productImg:"",qty:1}},methods:{getProduct(){this.$http.get(`${x}api/${y}/product/${this.id}`).then(c=>{console.log(c.data);const{product:s}=c.data;this.product=s,this.productImg=this.product.imageUrl,console.log(this.product)})},...v(u,["addToCart","getCarts"]),changeImg(c){this.productImg=c}},computed:{...f(u,["cartData","cartsLength"])},created(){this.id=this.$route.params.id,console.log(this.$route.params.id)},mounted(){this.getProduct()}},T={class:"container"},C={class:"row"},E={class:"col-12 col-md-6"},U=["src","alt"],V={class:"row"},A={class:"col-4"},D=["src"],L=["src","alt","onClick"],R={class:"col-12 col-md-6"},N={"aria-label":"breadcrumb"},S={class:"breadcrumb bg-white px-0 mb-0 py-3 fs-6"},j={class:"breadcrumb-item"},q={class:"breadcrumb-item"},B=t("li",{class:"breadcrumb-item active","aria-current":"page"},"產品細節",-1),$={class:"fw-bold h1 mb-1"},z={class:"mt-5 mb-0 text-muted text-start"},H={class:"h5 fw-bold text-start mb-5"},F={class:"row align-items-center"},M={class:"input-group mb-3"},O=["value"];function G(c,s,J,K,e,n){const l=k("RouterLink");return r(),i("div",T,[t("div",C,[t("div",E,[t("img",{class:"rounded-0 w-100",src:e.productImg,alt:e.product.title,style:{height:"400px","background-size":"cover","background-position":"center center","object-fit":"cover"}},null,8,U),t("div",V,[t("div",A,[t("img",{style:{height:"100px","background-size":"cover","background-position":"center center","object-fit":"cover"},class:"w-100 p-0 rounded-0 mt-2",src:e.product.imageUrl,alt:"產品",onClick:s[0]||(s[0]=o=>n.changeImg(e.product.imageUrl))},null,8,D)]),(r(!0),i(p,null,_(e.product.imagesUrl,(o,a)=>(r(),i("div",{class:"col-4",key:`圖_${a}`},[t("img",{style:{height:"100px","background-size":"cover","background-position":"center center","object-fit":"cover"},class:"w-100 p-0 rounded-0 mt-2",src:o,alt:`圖_${a}`,onClick:Q=>n.changeImg(o)},null,8,L)]))),128))])]),t("div",R,[t("nav",N,[t("ol",S,[t("li",j,[m(l,{to:"/",class:""},{default:h(()=>[g("回首頁")]),_:1})]),t("li",q,[m(l,{to:"/products",class:""},{default:h(()=>[g("產品列表")]),_:1})]),B])]),t("h2",$,d(e.product.title),1),t("p",z,[t("del",null,"NT$"+d(e.product.origin_price),1)]),t("p",H," NT$"+d(e.product.price),1),t("div",F,[t("div",null,[t("div",M,[P(t("select",{id:"",class:"form-select border-bottom border-0 rounded-0 me-3","onUpdate:modelValue":s[1]||(s[1]=o=>e.qty=o)},[(r(),i(p,null,_(10,o=>t("option",{value:o,key:`${o}${e.product.id}`},d(o),9,O)),64))],512),[[w,e.qty,void 0,{number:!0}]]),t("button",{type:"button",class:"btn btn-primary border-0 rounded-3",onClick:s[2]||(s[2]=o=>c.addToCart(e.product.id,e.qty))}," 加入購物車 ")])])])])])])}const Y=b(I,[["render",G]]);export{Y as default};
