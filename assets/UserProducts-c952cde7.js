import{_ as E,V as T,m as A,a as j,r as p,o as a,b as i,e as h,d as t,g as m,f as d,F as u,E as b,j as F,t as l,D as B,w as I,h as L,p as S,i as V}from"./index-eae2ed97.js";import{c as v}from"./UserCartStore-afdf493b.js";import{s as f}from"./LocalStorage-934dfab6.js";import{G as O}from"./GoTop-01664ffe.js";const{VITE_APP_URL:y,VITE_APP_PATH:x}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/somesweet/",MODE:"production",DEV:!1,PROD:!0},$={components:{GoTop:O,VueLoading:T},data(){return{productsAll:[],products:[],product:{},pagination:{},status:{loadingItem:""},isLoading:!1,categories:[],selectCategory:"",myFavorite:f.get()||[]}},methods:{getAllProducts(s){this.isLoading=!0,this.$http.get(`${y}api/${x}/products/all`).then(o=>{console.log(o),this.productsAll=o.data.products,console.log(this.productsAll),this.getCategories();const{selectCategory:r}=this.$route.params;console.log(r),this.isLoading=!1,r&&(this.selectCategory=r),this.selectCategory!==""?this.pagination={}:this.getProducts(s)})},getProducts(s=1){this.$http.get(`${y}api/${x}/products?page=${s}`).then(o=>{window.scrollTo(0,0);const{products:r,pagination:g}=o.data;this.products=r,this.pagination=g,console.log(this.products,this.pagination)})},getCategories(){const s=new Set;console.log(s),this.productsAll.forEach(o=>{s.add(o.category)}),this.categories=[...s],console.log(this.categories)},addMyFavorite(s){this.myFavorite.includes(s.id)?this.myFavorite.splice(this.myFavorite.indexOf(s.id),1):(this.myFavorite.push(s.id),this.favShowAlert())},favShowAlert(){this.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",this.$swal.stopTimer),o.addEventListener("mouseleave",this.$swal.resumeTimer)}}).fire({icon:"success",title:"已加入蒐藏清單"})},...A(v,["getCarts","addToCart","showAlert"])},computed:{...j(v,["cartData","cartsLength"]),filterProducts(){return this.productsAll.filter(s=>s.category.match(this.selectCategory))}},watch:{selectCategory(s,o){(s===""||o==="")&&(console.log(s,o),this.getAllProducts())},myFavorite:{handler(){f.save(this.myFavorite)},deep:!0}},mounted(){this.getAllProducts()}},n=s=>(S("data-v-6997a6b4"),s=s(),V(),s),N=F('<div class="container-fluid g-0" data-v-6997a6b4><div class="card border-0 rounded-0 bg-dark text-white mb-5" data-v-6997a6b4><div class="filters" style="height:200px;background-image:url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677550181847.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=qQpOKJlmAipjojZQ7imN6J6MiWWuxRYaXwXr6MdPijbdIRTjWFssPopTl5JN%2FjlUul1ccEWNcVdj2qhABmca1qXPqK9FnT1jz92lk4l7rOonpF8%2F7lVw8i%2BDI3KhGnoYIBBfmyQyRsPKI%2B8mHHakw9uegGVuY%2BXfxGLcBuYGsxhNU9UTy1fj4%2Fc07ANvqKpCrE66j9O2KJE%2B5VlGoCK8pKmBlmMjyLUXNSmESrPdR9696BuSHjvmYXdBWtAC6ODZLqXHs7P7vskYx3e23oggxpMBveQQCm8u3tqgCu6kjOE7EYtYucOEmah6Nsbuw6pUMfIhrj5xbebroqyayFKz8g%3D%3D);background-size:cover;background-position:center center;background-attachment:fixed;" data-v-6997a6b4></div><div class="card-img-overlay d-flex flex-column justify-content-center align-item-center" data-v-6997a6b4><h1 class="fs-3 card-title text-center fw-bold" data-v-6997a6b4><p class="fs-m fw-bold mb-2" data-v-6997a6b4>所有甜點</p><p class="logoText fs-sm p-0 m-0" data-v-6997a6b4>SOME SWEET <span class="fs-xs fw-lighter" data-v-6997a6b4>/am</span></p></h1></div></div></div>',1),D={class:"container mt-md-5 mt-3 mb-7"},M={class:"row"},U={class:"col-md-3"},G={class:"accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3",id:"accordionExample"},K={class:"card border-0"},q=n(()=>t("div",{class:"card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0",id:"headingOne","data-bs-toggle":"collapse","data-bs-target":"#collapseOne"},[t("div",{class:"d-flex justify-content-between align-items-center pe-1"},[t("h4",{class:"mb-0"}," 產品類別 "),t("i",{class:"bi bi-chevron-down"})])],-1)),z={id:"collapseOne",class:"collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},R={class:"card-body py-0"},Y=n(()=>t("i",{class:"bi bi-dash-lg"},null,-1)),X={class:"list-unstyled"},H=["onClick"],W=n(()=>t("i",{class:"bi bi-dash-lg"},null,-1)),Q={class:"col-md-9"},J={class:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4"},Z={class:"product card h-100 p-5 rounded-4 products-img"},tt=["src","alt"],st=["onClick"],et={key:0,style:{"z-index":"1"},class:"fs-1 bi bi-bookmark-heart-fill position-absolute top-0 start-15 text-warning"},ot={key:1,style:{"z-index":"1"},class:"fs-1 bi bi-bookmark position-absolute top-0 start-15 text-white"},at={class:"card-body d-flex flex-column"},it={class:"fs-6 fw-bold card-title mb-6"},rt={class:"d-flex mt-auto"},ct={class:"text-muted fs-xs me-auto"},dt={class:"card-text mb-0"},lt=n(()=>t("span",{class:"fs-xs d-flex align-items-end ms-1"},"NTD",-1)),nt={class:"text-center border-0"},pt=["disabled","onClick"],ht={key:0,class:"spinner-border text-light spinner-border-sm",role:"status"};function mt(s,o,r,g,c,_){const w=p("VueLoading"),k=p("GoTop"),C=p("router-link");return a(),i(u,null,[h(w,{active:c.isLoading,loader:"bars",color:"#034D83"},null,8,["active"]),h(k),N,t("div",D,[t("div",M,[t("div",U,[t("div",G,[t("div",K,[q,t("div",z,[t("div",R,[t("a",{href:"#",class:"list-group-item list-group-item-action rounded-0 p-3",onClick:o[0]||(o[0]=m(e=>{c.selectCategory="",this.$route.params.selectCategory=""},["prevent"]))},[Y,d(" 全部商品 ")]),t("ul",X,[t("li",null,[(a(!0),i(u,null,b(c.categories,e=>(a(),i("a",{href:"#",key:e,class:"list-group-item list-group-item-action rounded-0 p-3",onClick:m(P=>{c.selectCategory=e,this.$route.params.selectCategory=e},["prevent"])},[W,d(" "+l(e),1)],8,H))),128))])])])])])])]),t("div",Q,[t("div",J,[(a(!0),i(u,null,b(_.filterProducts,e=>(a(),i("div",{class:"col-md-4",key:e.id},[t("div",Z,[t("img",{src:e.imageUrl,class:"card-img-top object-fit rounded-4 position-relative",alt:e.title},null,8,tt),t("a",{href:"#",onClick:m(P=>_.addMyFavorite(e),["prevent"]),class:B([{active:c.myFavorite.includes(e.id)},"link-secondary d-block rounded-0"])},[c.myFavorite.includes(e.id)?(a(),i("i",et)):(a(),i("i",ot))],10,st),t("div",at,[t("h5",it,l(e.title),1),t("div",rt,[t("span",ct,[t("del",null,"NT$"+l(e.origin_price),1)]),t("p",dt,"$"+l(e.price),1),d(),lt]),t("small",nt,[h(C,{class:"text-dark d-block",to:`/product/${e.id}`},{default:I(()=>[d("查 看 細 節")]),_:2},1032,["to"])])]),t("button",{type:"buttom",class:"btn btn-primary mt-5",disabled:this.status.loadingItem===e.id,onClick:()=>s.addToCart(e.id)},[this.status.loadingItem===e.id?(a(),i("div",ht)):L("",!0),d(" 加入購物車 ")],8,pt)])]))),128))])])])])],64)}const vt=E($,[["render",mt],["__scopeId","data-v-6997a6b4"]]);export{vt as default};
