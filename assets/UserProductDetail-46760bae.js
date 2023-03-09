import{_ as w,V as y,m as x,a as k,r as p,o as r,b as c,e as d,d as t,F as u,i as g,w as v,t as a,g as C,u as A,f as n,j as L,L as V,l as P}from"./index-aac9fba2.js";import{s as _}from"./LocalStorage-934dfab6.js";import{c as b}from"./UserCartStore-78d69a48.js";const{VITE_APP_URL:T,VITE_APP_PATH:F}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/somesweet/",MODE:"production",DEV:!1,PROD:!0},j={data(){return{isLoading:!1,product:[],id:"",productImg:"",qty:1,myFavorite:_.get()||[]}},components:{VueLoading:y},methods:{getProduct(){this.isLoading=!0,this.$http.get(`${T}api/${F}/product/${this.id}`).then(o=>{console.log(o.data);const{product:s}=o.data;this.product=s,this.productImg=this.product.imageUrl,this.isLoading=!1,console.log(this.product)})},...x(b,["addToCart","getCarts"]),changeImg(o){this.productImg=o},addMyFavorite(o){this.myFavorite.includes(o.id)?this.myFavorite.splice(this.myFavorite.indexOf(o.id),1):(this.myFavorite.push(o.id),this.favShowAlert())},favShowAlert(){this.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:s=>{s.addEventListener("mouseenter",this.$swal.stopTimer),s.addEventListener("mouseleave",this.$swal.resumeTimer)}}).fire({icon:"success",title:"已加入蒐藏清單"})}},watch:{myFavorite:{handler(){_.save(this.myFavorite)},deep:!0}},computed:{...k(b,["cartData","cartsLength"])},created(){this.id=this.$route.params.id,console.log(this.$route.params.id)},mounted(){this.getProduct()}},z={class:"container"},I={class:"row"},E={class:"col-12 col-md-6"},B=["src","alt"],M={class:"row"},U={class:"col-4"},D=["src"],S=["src","alt","onClick"],N={class:"col-12 col-md-6"},R={"aria-label":"breadcrumb"},q={class:"breadcrumb bg-white px-0 mb-0 py-3 fs-6"},H={class:"breadcrumb-item"},O={class:"breadcrumb-item"},$=t("li",{class:"breadcrumb-item active","aria-current":"page"},"產品細節",-1),G={class:"fw-bold h1 mb-1"},J={class:"mt-5 mb-0 text-muted text-start"},K={class:"h5 fw-bold text-start mb-5"},Q={class:"row align-items-center"},W={key:0,class:"m-0 text-danger d-flex align-items-center justify-content-center"},X=t("i",{class:"fs-4 bi-suit-heart-fill top-0 end-0 me-2 mt-1 text-danger"},null,-1),Y={key:1,class:"m-0 text-soft d-flex align-items-center justify-content-center"},Z=t("i",{class:"fs-4 bi bi-suit-heart top-0 end-0 me-2 mt-1 p-0"},null,-1),tt={class:"input-group mb-3"},et=["value"],st=P('<ul class="list-unstyled"><li> 付款後，從備貨到寄出商品為 7 個工作天。（不包含假日） </li></ul><hr><ul class="list-unstyled text-danger"><li>此商品可領取折扣碼</li><li>實際優惠折抵以購物車內的金額為準</li></ul><hr><div class="text-secondary d-flex justify-content-end align-items-center"><span class="me-3">分享</span><a href="https://viccjiang.github.io/somesweet/#/" class="link-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook me-3" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path></svg></a><a href="https://viccjiang.github.io/somesweet/#/" class="link-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram me-3" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path></svg></a><a href="https://viccjiang.github.io/somesweet/#/" class="link-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg></a></div>',5);function ot(o,s,it,rt,e,l){const f=p("VueLoading"),h=p("RouterLink");return r(),c(u,null,[d(f,{active:e.isLoading,loader:"bars",color:"#034D83"},null,8,["active"]),t("div",z,[t("div",I,[t("div",E,[t("img",{class:"p-4 rounded-5 w-100 border",src:e.productImg,alt:e.product.title,style:{height:"400px","background-size":"cover","background-position":"center center","object-fit":"cover"}},null,8,B),t("div",M,[t("div",U,[t("img",{style:{height:"100px","background-size":"cover","background-position":"center center","object-fit":"cover"},class:"w-100 p-0 rounded-0 mt-2 border rounded-4",src:e.product.imageUrl,alt:"產品",onClick:s[0]||(s[0]=i=>l.changeImg(e.product.imageUrl))},null,8,D)]),(r(!0),c(u,null,g(e.product.imagesUrl,(i,m)=>(r(),c("div",{class:"col-4",key:`圖_${m}`},[t("img",{style:{height:"100px","background-size":"cover","background-position":"center center","object-fit":"cover"},class:"w-100 p-0 rounded-0 mt-2 border rounded-4",src:i,alt:`圖_${m}`,onClick:ct=>l.changeImg(i)},null,8,S)]))),128))])]),t("div",N,[t("nav",R,[t("ol",q,[t("li",H,[d(h,{to:"/",class:""},{default:v(()=>[n("回首頁")]),_:1})]),t("li",O,[d(h,{to:"/products",class:""},{default:v(()=>[n("產品列表")]),_:1})]),$])]),t("h2",G,a(e.product.title),1),t("p",J,[t("del",null,"NT$"+a(e.product.origin_price),1)]),t("p",K," NT$"+a(e.product.price),1),t("div",Q,[t("div",null,[t("a",{href:"#",onClick:s[1]||(s[1]=C(i=>l.addMyFavorite(e.product),["prevent"])),class:A([{active:e.myFavorite.includes(e.product.id)},"link-secondary d-block rounded border text-center mb-3 rounded-3"])},[e.myFavorite.includes(e.product.id)?(r(),c("p",W,[X,n("已加入收藏 ")])):(r(),c("p",Y,[Z,n("加入收藏")]))],2),t("div",tt,[L(t("select",{id:"",class:"form-select border-bottom border-0 rounded-0 me-3","onUpdate:modelValue":s[2]||(s[2]=i=>e.qty=i)},[(r(),c(u,null,g(10,i=>t("option",{value:i,key:`${i}${e.product.id}`},a(i),9,et)),64))],512),[[V,e.qty,void 0,{number:!0}]]),t("button",{type:"button",class:"btn btn-primary border-0 rounded-3",onClick:s[3]||(s[3]=i=>o.addToCart(e.product.id,e.qty))}," 加入購物車 ")])])]),st])])])],64)}const dt=w(j,[["render",ot]]);export{dt as default};